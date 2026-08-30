import {
  key,
  refTo,
  heading,
  para,
  replaceAreaServiceDoc,
  multiLinkPara,
  customTile,
} from "./vancouver-lib.mjs";

/**
 * /vancouver/window-cleaning — new Vancouver page for the merged window
 * cleaning service (Residential Window Cleaning, Commercial Window Cleaning,
 * Window Screen Cleaning), mirroring the anchor/serviceTiles structure of
 * scripts/migrate/38-nv-window-cleaning.mjs but with wholly new,
 * verbatim-from-brief Vancouver copy
 * (vancouver-content/vancouver-pages/window-cleaning.md). No redirects
 * target this page yet, so anchor ids were chosen fresh and just need to
 * stay internally consistent with the serviceTiles hrefs below.
 *
 * Anchor ids used (matching the NV reference page's own ids, since they
 * describe the same three sub-services): residential-window-cleaning,
 * commercial-window-cleaning, window-screen-cleaning. The fourth tile,
 * Post-Construction Window Cleaning, is not one of this page's own
 * sub-services (same as on the NV reference page) — it links out to the
 * post-construction-cleaning page's own anchor, following the
 * /vancouver/[slug]#anchor pattern the migration brief sanctions for
 * forward-referencing pages in this same rollout.
 *
 * Structural choices, following 38-nv-window-cleaning.mjs's precedent:
 *  - The .md uses explicit "## X in Vancouver" sub-headings for all three
 *    sub-services, each with its own prose, so each became one Rich Text
 *    section carrying the anchorId, with bold-led paragraphs ("Hard Water
 *    Spot Treatment.", "Building Heights We Serve", "Insurance and Safety.",
 *    "Scheduling.", "Fiberglass vs. Aluminum Screens.", "Repair or
 *    Replacement.") turned into heading()+para() pairs, matching how NV's
 *    script represents the same kind of labeled sub-block.
 *  - Residential's process list uses a clean "Label: rest of sentence"
 *    format per line, so it maps to a `processChecklist` section split at
 *    the first colon. Commercial's and Window Screens' process lists are
 *    plain phrases with no title/body split available in the source text,
 *    so — to avoid inventing a split that isn't there — each phrase became
 *    its own processChecklist step with an empty body, preserving every
 *    word verbatim.
 *  - Residential pricing is a real itemized list, so it became a dedicated
 *    `pricing` section with 9 tiers plus the summary sentence as a note.
 *    Commercial and Window Screens pricing are flowing prose with no
 *    discrete tiers, so those stayed as paragraphs inside their own
 *    sub-service's Rich Text body, matching the NV reference script's
 *    treatment of the same two sub-services.
 *  - "Why Vancouver Homeowners and Businesses Choose Mint Sanitary" is a
 *    bullet list with no bold label in the .md, so each bullet got a short
 *    generic title (its own subject, not invented) with the full bullet
 *    text as body, matching how 38-nv-window-cleaning.mjs's own whyChoose
 *    items are titled.
 *  - Per the migration brief, "Every Mint Cleaning Includes" is a shared
 *    global box and is not represented as its own section (this .md's
 *    equivalent tile-grid intro has no such box, so nothing was dropped
 *    here).
 */

console.log("→ /vancouver/window-cleaning");

function numberItem(text) {
  return {
    _type: "block",
    _key: key("b"),
    style: "normal",
    listItem: "number",
    level: 1,
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  };
}

function step(title, body) {
  return { _key: key("step"), title, body };
}

/* ── Tile grid: "Types of Window Cleaning We Offer" ──────────────── */
const tileServices = [
  {
    title: "Residential Window Cleaning",
    href: "#residential-window-cleaning",
    description:
      "From bungalows in Dunbar to duplexes in Kitsilano, we handle interior and exterior glass, safe ladder-free access, and thorough frame wiping for homes of any size.",
  },
  {
    title: "Commercial Window Cleaning",
    href: "#commercial-window-cleaning",
    description:
      "Storefront and office building cleaning that keeps a Downtown or Yaletown property looking sharp, scheduled around business hours, with certified rope-access equipment available for high-rise exterior work.",
  },
  {
    title: "Window Screen Cleaning",
    href: "#window-screen-cleaning",
    description:
      "Pollen and coastal grime clog screens fast. We remove, deep clean, and reinstall interior and exterior screens, restoring airflow and cutting the allergen load in your home.",
  },
  {
    title: "Post-Construction Window Cleaning",
    href: "/vancouver/post-construction-cleaning#post-construction-window-cleaning",
    description:
      "Removes construction dust, primer overspray, and debris after a renovation, with thorough frame and sill cleaning to ready a property for move-in or final inspection.",
  },
];

const tileEntries = [];
for (const t of tileServices) {
  tileEntries.push(await customTile(t));
}

/* ── Residential Window Cleaning ──────────────────────────────────── */
const residentialPricingTiers = [
  { _key: key("tier"), title: "1-story home (15 to 20 windows)", range: "approximately $200 to $250", body: "" },
  { _key: key("tier"), title: "2-story home (25 to 35 windows)", range: "approximately $300 to $400", body: "" },
  { _key: key("tier"), title: "3-plus story home (40+ windows)", range: "custom quote", body: "" },
  { _key: key("tier"), title: "Exterior-only", range: "15 to 20% discount", body: "versus interior plus exterior" },
  { _key: key("tier"), title: "Hard water spot treatment", range: "add $50 to $150", body: "" },
  { _key: key("tier"), title: "Screen repair or replacement", range: "add $20 to $50 per screen", body: "" },
  { _key: key("tier"), title: "Skylight or sunroom cleaning", range: "add $75 to $150", body: "" },
  {
    _key: key("tier"),
    title: "Recurring service",
    range: "",
    body: "quarterly saves 15%, semi-annual saves 10%, annual saves 5%",
  },
  { _key: key("tier"), title: "New customers", range: "10% off with code MINT26", body: "" },
];

const residentialProcessSteps = [
  step(
    "Free estimate",
    "We assess home size, window count, and any special needs like hard water spots or skylights, with transparent pricing and no pressure to book."
  ),
  step("Scheduling", "We work 7 days a week and confirm scope, date, and time before our crew arrives."),
  step("Pre-cleaning inspection", "We check for hard water spots, screen damage, and frame issues before starting."),
  step(
    "Professional cleaning",
    "We use eco-friendly, green-certified products safe for family and pets, with water-fed poles for high-access windows and drop cloths to protect landscaping."
  ),
  step(
    "Final walk-through",
    "We inspect every window with you. If you're not satisfied within 48 hours, we return and re-clean at no extra cost."
  ),
];

/* ── Commercial Window Cleaning ───────────────────────────────────── */
const commercialProcessSteps = [
  "Pre-service assessment of glass type, building height, and access points.",
  "Safety setup, including anchor points, harnesses, and equipment testing.",
  "Exterior cleaning that removes salt spray deposits and buildup.",
  "Interior common area cleaning of lobbies, hallways, and conference rooms.",
  "Frame and sill treatment to remove oxidized material, mold, and algae.",
  "Final inspection with before-and-after photo documentation.",
];

/* ── Window Screen Cleaning ───────────────────────────────────────── */
const screenProcessSteps = [
  "Initial assessment of material type and debris level.",
  "Safe removal of screens, laid flat to prevent bending.",
  "Pre-rinse to loosen debris.",
  "Deep clean with soft-bristle brushes and eco-friendly solution.",
  "Final low-pressure rinse to remove all soap residue.",
  "Drying and careful reinstallation with proper fit.",
];

/* ── Signs Vancouver Properties Need This Service ─────────────────── */
const signs = [
  "In Downtown and Yaletown towers, the clearest sign is haze and salt film on the outward-facing pane that you can only see from inside, since exterior access on a high-rise isn't something an individual owner arranges. If your in-suite glass looks dull or streaked despite regular interior wiping, that's a residential booking, not a strata job.",
  "In Kitsilano and Dunbar, the signs are more physical: chalky white mineral spotting on south and west-facing panes after a dry spell, black grime lines collecting in the corners of wood-frame windows, and screens sagging or clogging with pollen each spring. Older single-pane and wood-sash windows in these neighbourhoods also show frame swelling or paint buildup around the track, which is worth flagging early since untreated frame rot gets expensive fast.",
  "Storefronts along ground-floor retail strips in Downtown and Commercial Drive show fingerprints, dust, and exhaust film within weeks, which is why monthly service is standard there rather than the seasonal schedule that works for a house.",
];

/* ── Why Vancouver Homeowners and Businesses Choose Mint Sanitary ──── */
const whyChooseItems = [
  [
    "Eco-Friendly Products",
    "Eco-friendly, non-toxic, plant-based products safe for kids, pets, and the boulevard plantings common in front yards across Kitsilano and Dunbar.",
  ],
  [
    "Background-Checked and Insured Crews",
    "Background-checked, bonded, and insured crews, with WorkSafeBC coverage on every job, including high-access and commercial work.",
  ],
  [
    "Book Ahead for the Fastest Slot",
    "Available 7 days a week, including evenings and weekends. Since crews travel from North Vancouver, book ahead for the fastest available slot rather than expecting same-day service.",
  ],
  ["5-Star Rating", "5 out of 5 rating across 50+ Google reviews."],
  [
    "Water-Fed Pole Systems",
    "Water-fed pole systems using purified water eliminate the mineral spotting that plagues DIY cleaning with regular tap water.",
  ],
  [
    "Strata-Ready Documentation",
    "Downtown and Yaletown strata councils get a documented Certificate of Insurance and after-hours scheduling that fits concierge sign-in and elevator booking windows.",
  ],
  [
    "Ladder-Free Access",
    "Kitsilano and Dunbar homeowners get full exterior access with ladder-free water-fed-pole equipment, no building coordination required.",
  ],
  [
    "Built Around Bridge Travel",
    "Crews build appointment windows around Lions Gate and Ironworkers Memorial Bridge travel time, so you get a confirmed arrival window instead of an open-ended promise.",
  ],
];

/* ── FAQ ─────────────────────────────────────────────────────────── */
const faqItems = [
  [
    "How often should residential windows be cleaned in Vancouver?",
    "Most Vancouver homeowners do well with professional window cleaning once or twice a year, in spring and fall. Spring removes winter grime, fall preps the glass for the wet season. Character homes in Kitsilano and Dunbar near mature trees or busy streets may benefit from quarterly service.",
  ],
  [
    "How often should commercial or high-rise windows be cleaned in Vancouver?",
    "Office buildings in Downtown and Yaletown typically do well on a quarterly schedule at minimum. Ground-level storefronts on busy retail strips benefit from monthly cleaning to maintain curb appeal, and strata common areas often need monthly interior windows with bi-monthly or quarterly exterior service.",
  ],
  [
    "How often should window screens be cleaned in Vancouver?",
    "Most homes with operable windows benefit from professional screen cleaning 2 to 4 times a year. Homes near mature trees in Dunbar, Point Grey, or Kerrisdale, or with pets, may need more frequent visits. Many high-rise condo units don't have operable screens at all.",
  ],
  [
    "How much does residential window cleaning cost in Vancouver?",
    "Residential window cleaning typically runs $150 to $400 per cleaning depending on home size and window count. A 1-story home runs approximately $200 to $250, a 2-story home runs $300 to $400, and larger homes get a custom quote. Call 236-688-3248 or visit /rates for a free estimate.",
  ],
  [
    "How much does commercial window cleaning cost in Vancouver?",
    "Pricing depends on building size, height, and access. Ground-level storefronts often run $1 to $2 per pane, standard commercial projects run $5 to $7 per pane, and larger buildings are priced from $0.50 to $2.50 per square foot. Recurring contracts save 10 to 15% compared to one-time service.",
  ],
  [
    "How much does window screen cleaning cost in Vancouver?",
    "Pricing depends on the number of screens, material, and any repairs needed, so we provide a free quote. Screen repair or re-screening typically runs $15 to $50 per screen. Combining screen cleaning with a window cleaning visit often comes with a bundled discount.",
  ],
  [
    "Do you clean the exterior of high-rise condo windows in Downtown or Yaletown?",
    "Not as an individual residential booking. Exterior glass on a high-rise is part of the building envelope, so it's cleaned under the strata's commercial contract with rope access and WorkSafeBC-compliant fall protection, coordinated through the property manager. Our residential service covers your unit's interior glass, frames, and tracks.",
  ],
  [
    "Can I book window cleaning for my Yaletown or Downtown condo?",
    "Yes, for the interior side of your unit's glass, plus frames, tracks, and screens where they exist. If your building's exterior glass needs cleaning, that's arranged at the strata level, and Mint Sanitary's commercial division can quote that separately to your property manager.",
  ],
  [
    "Do you clean windows in character homes in Kitsilano or Dunbar?",
    "Yes, full interior and exterior service, including older wood-frame and single-pane windows, skylights, and second-story sash windows using water-fed poles instead of ladders wherever possible.",
  ],
  [
    "Mint Sanitary is based in North Vancouver. How does that affect scheduling in Vancouver?",
    "Crews travel across the Lions Gate or Ironworkers Memorial Bridge to reach Vancouver addresses, so same-day booking isn't guaranteed the way it is closer to home base. We recommend calling ahead, especially for weekend slots, so we can confirm a realistic arrival window.",
  ],
  [
    "Do you need concierge or elevator booking access for condo window cleaning?",
    "Often, yes. Many Downtown and Yaletown buildings require visitor sign-in at the concierge desk and a booked elevator or freight window for equipment. Let us know your building's rules when you schedule and we'll plan the appointment around them.",
  ],
  [
    "How long does window cleaning take at a Vancouver home?",
    "For a typical 1 to 3-story home with 20 to 35 windows, expect 2 to 4 hours. Larger character homes, homes with several skylights, or properties with heavy hard water spotting may take longer, and we'll give you a specific estimate during your free quote.",
  ],
  [
    "How long does window screen cleaning take?",
    "A typical home with 8 to 12 screens takes 1 to 2 hours, depending on soil level and whether repairs are needed.",
  ],
  [
    "Do you clean windows in the rain in Vancouver?",
    "Yes, we can often work in light rain since pure water rinses stay effective in damp conditions. Heavy rain or storms may require rescheduling for safety, and we rebook affected Vancouver appointments at no penalty.",
  ],
  [
    "What safety measures and insurance do you carry for commercial window work in Vancouver strata buildings?",
    "We carry general liability insurance with $1 to $2 million in coverage and maintain full WorkSafeBC compliance for commercial and high-rise work, including certified anchor systems, harnesses, and IRATA-trained technicians. A Certificate of Insurance is available on request for property managers and strata councils.",
  ],
  [
    "Are your window cleaning products safe for families, pets, and landscaping in Vancouver?",
    "Yes. We use eco-friendly, non-toxic, plant-based products across residential, commercial, and screen cleaning, safe for kids, pets, and the gardens and boulevard plantings common around Vancouver homes.",
  ],
  [
    "What's the difference between window cleaning and screen cleaning, and can you do both in Vancouver?",
    "Window cleaning covers the glass, interior and exterior. Screen cleaning covers the mesh, frame, and sill. Most customers combine both at a bundled rate, with screens cleaned first so everything finishes looking sharp together.",
  ],
  [
    "Do you offer recurring maintenance plans in Vancouver?",
    "Yes. Residential customers can choose quarterly (15% off), semi-annual (10% off), or annual (5% off) plans. Commercial customers can set up monthly, bi-monthly, or quarterly contracts. Recurring customers also get priority scheduling.",
  ],
  [
    "What if I'm not satisfied with my window cleaning in Vancouver?",
    "We stand behind our work with a 48-hour re-clean guarantee. If you're not completely satisfied, contact us within 48 hours and we'll return to re-clean the affected windows at no extra cost.",
  ],
];

const sections = [
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Window Cleaning We Offer",
    tiles: [],
    customTiles: tileEntries,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Residential Window Cleaning in Vancouver",
    anchorId: "residential-window-cleaning",
    body: [
      para(
        "Kitsilano and Dunbar are full of character homes with original wood-frame windows, multi-pane glass, and second-story sash windows that were never built for easy access, and that's exactly the kind of job our residential crews handle every week."
      ),
      para(
        "Our standard residential service covers interior and exterior glass panes, window frames, screens, tracks, and sills. Hard water spot treatment is available as an add-on. We also clean skylights and specialty glass for an additional fee. We don't handle window repairs, frame rot treatment, or weatherstripping replacement, but we'll flag those issues if we spot them during the visit. We offer both interior-plus-exterior service (our standard) and exterior-only service at a discounted rate."
      ),
      para(
        "We service single-family detached homes, townhouses and duplexes, condo and strata units, newly built homes needing post-construction cleanup, older homes with legacy wood or single-pane windows, and multi-story properties. We also work with Low-E coated, tinted, and skylight glass, adjusting technique for each type."
      ),
      heading("Hard Water Spot Treatment"),
      para(
        "Metro Vancouver's mineral-rich tap water leaves stubborn deposits on glass. Fresh spots respond to standard cleaning, but aged mineral buildup can etch glass permanently if left untreated, and etched glass can only be fixed by replacing the pane. We use eco-friendly, acid-based treatments designed for mineral removal, plus deionized water rinses that prevent new spotting during the clean itself. Professional hard water restoration typically runs $100 to $500 depending on severity; glass replacement, if etching has occurred, can exceed $500 per pane, which is why early treatment saves money."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Residential Window Cleaning Pricing in Vancouver",
    tiers: residentialPricingTiers,
    notes: ["Overall, residential window cleaning in Vancouver runs $150 to $400 per cleaning for most homes."],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Residential Window Cleaning, Step by Step",
    checklistItems: [],
    steps: residentialProcessSteps,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Commercial Window Cleaning in Vancouver",
    anchorId: "commercial-window-cleaning",
    body: [
      para(
        "Downtown and Yaletown's condo and office towers face direct wind and salt spray off the harbour and False Creek, and that exposure, combined with strata rules around exterior access, is why commercial glass in these buildings runs on a scheduled maintenance contract rather than a one-off call."
      ),
      para(
        "Full exterior and interior glass cleaning, frame and sill cleaning, removal of grime and buildup, and interior common area windows like lobbies, hallways, and skylights. We customize scope to your building, with before-and-after photo documentation for your records. Service covers storefront glass and entry doors, multi-story office building windows, strata common area windows, window frames and sills, skylights and overhead glass, and industrial or warehouse facility windows."
      ),
      heading("Building Heights We Serve"),
      heading("Ground-level storefronts"),
      para("Monthly cleaning is standard, since foot traffic and weathering degrade appearance quickly."),
      heading("Mid-rise buildings (3 to 10 stories)"),
      para(
        "Typically quarterly or bi-monthly exterior service, using safety harnesses and fall protection systems that comply with WorkSafeBC regulations."
      ),
      heading("High-rise buildings (10+ stories)"),
      para(
        "Demand certified rope access systems, elevated work platforms, and IRATA-trained technicians, plus documented fall protection plans and anchor system inspection."
      ),
      heading("Insurance and Safety"),
      para(
        "We carry general liability insurance with $1 to $2 million in coverage, depending on project scope, and maintain full WorkSafeBC compliance for all commercial work, including high-rise projects. A Certificate of Insurance is available on request for property managers, building owners, and strata councils. High-rise work follows WorkSafeBC fall protection requirements, which apply to work above 3 meters, using certified anchor systems, harnesses, and IRATA-trained crews."
      ),
      heading("Scheduling"),
      para(
        "We offer after-hours availability, including early morning, evening, weekend, and holiday appointments, so cleaning doesn't interrupt your business. For strata properties, we give 7 days' notice by email and coordinate with property managers and building bylaws."
      ),
      para(
        "Ground-level storefronts are often priced at $1 to $2 per pane; standard commercial projects run $5 to $7 per pane. Larger buildings are commonly priced by square footage, from $0.50 to $2.50 per square foot depending on size and access complexity. Recurring contracts receive 10 to 15% discounts compared to one-time service. Every quote follows a free, on-site assessment, and new customers save 10% with code MINT26."
      ),
      heading("Our Process"),
      ...commercialProcessSteps.map(numberItem),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Window Screen Cleaning in Vancouver",
    anchorId: "window-screen-cleaning",
    body: [
      para(
        "Kitsilano and Dunbar's older homes still have operable, screened windows throughout, while a lot of sealed high-rise units downtown and in Yaletown have no operable screens at all, which is one reason screen cleaning concentrates more in the character-home neighbourhoods."
      ),
      para(
        "Professional removal of screens with damage-free handling, deep cleaning with soft-bristle brushes and a biodegradable solution, frame and sill dusting, careful reinstallation with latch verification, and an optional damage assessment with honest repair or replacement guidance. This works for fiberglass, aluminum, and specialty mesh, on older homes and new builds alike."
      ),
      heading("Fiberglass vs. Aluminum Screens"),
      para(
        "Fiberglass resists coastal salt and moisture, flexes without sagging, costs $15 to $35 per screen, and typically lasts 10 to 15+ years in coastal BC conditions. Aluminum is highly durable but can dent on impact, costs $30 to $70 per screen, and typically lasts 8 to 12 years."
      ),
      heading("Repair or Replacement"),
      para(
        "Small holes or tears under an inch can usually be patched or re-screened for $15 to $50 per screen. Bent or warped frames, large tears, or screens over 10 years old are often better candidates for full replacement. We source new fiberglass or aluminum screens in your preferred material and install them right away if you choose to upgrade."
      ),
      para(
        "Screen cleaning pricing depends on the number of screens, material, and any repairs needed, available through a free quote. Combining screen cleaning with a window cleaning visit typically comes with a bundled discount, and screens are cleaned first so both finish looking their best. New customers save 10% with code MINT26."
      ),
      heading("Our Process"),
      ...screenProcessSteps.map(numberItem),
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
    heading: "Why Vancouver Homeowners and Businesses Choose Mint Sanitary",
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Vancouver's Climate and Market Make This Different",
    body: [
      para(
        "Vancouver's window cleaning market splits along a line that doesn't exist in North Vancouver's mostly driveway-access housing: who controls the exterior glass. In a Yaletown or Downtown tower, the exterior side of your unit's window belongs to the building envelope, and cleaning it is a strata-level commercial contract with rope access, IRATA-trained crews, and WorkSafeBC fall protection paperwork, arranged through the property manager, not booked unit by unit. Residential service in those buildings covers the interior glass, frames, and tracks you can reach yourself. In Kitsilano and Dunbar, it works the opposite way. A homeowner books one appointment and gets full interior and exterior access with a water-fed pole, no concierge sign-in, no elevator booking window, no strata approval. Add in Vancouver's exposure to open water on three sides, which pushes more direct salt spray onto West End and Downtown high-rise glass than most inland North Shore properties see, and the result is two genuinely different service calls that happen to share a name."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Cleaning Services in Vancouver",
    body: [
      multiLinkPara(["", ["Strata Cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
      multiLinkPara(["", ["Commercial Cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
      multiLinkPara(["", ["Pressure Washing in Vancouver", "/vancouver/pressure-washing"]]),
      multiLinkPara(["", ["House Cleaning in Vancouver", "/vancouver/house-cleaning"]]),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Neighbourhoods We Serve for Window Cleaning in Vancouver",
    body: [
      para(
        "We clean windows across Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar, and the mix of housing in each one shapes the visit. Downtown, Yaletown, West End, and Fairview lean toward condo towers where residential service means interior glass and screens, with exterior work routed through the building's commercial contract. Kitsilano, Dunbar, Point Grey, Kerrisdale, and Mount Pleasant have more character homes and low-rises, where a single appointment covers full interior and exterior glass, frames, and screens. Commercial Drive's mixed retail strip gets both storefront glass cleaning and residential service on the homes above and behind it. Call 236-688-3248 to confirm scope and scheduling for your specific address."
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
    heading: "Ready to Book Window Cleaning in Vancouver?",
    body: "Whether it's interior glass in a Yaletown high-rise or full exterior service on a Kitsilano character home, our crews are ready. Call 236-688-3248 or email hello@mintsanitary.com. Use code MINT26 for 10% off your first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceAreaServiceDoc("vancouver", "window-cleaning", {
  area: refTo("area", "vancouver"),
  cleaningType: refTo("cleaningType", "window-cleaning"),
  title: "Window Cleaning in Vancouver",
  heroHeading: "Window Cleaning in Vancouver",
  heroIntro:
    "Vancouver's window stock runs from floor-to-ceiling condo glass in Yaletown and Downtown towers to the multi-pane wood-frame windows on character homes in Kitsilano and Dunbar, and each one calls for a different approach. Mint Sanitary covers residential, commercial, and window screen cleaning with eco-friendly, non-toxic, plant-based products, backed by a 5 out of 5 rating across 50+ Google reviews. New customers save 10% off their first clean with code MINT26. Our crews and trucks are based in North Vancouver, so Vancouver visits are scheduled around Lions Gate and Ironworkers Memorial Bridge travel. Same-day booking isn't guaranteed the way it is closer to home base, so call ahead to lock in a slot.",
  metaTitle: "Window Cleaning in Vancouver | Residential, Commercial & Screens | Mint Sanitary",
  metaDescription:
    "Streak-free window cleaning in Vancouver for condos, character homes, and storefronts. Eco-friendly products, 5 out of 5 rating, 50+ reviews. Call 236-688-3248.",
  sections,
  published: true,
});

console.log("\n✓ Vancouver window cleaning migrated");
