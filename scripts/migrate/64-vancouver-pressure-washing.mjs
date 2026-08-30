import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
  customTile,
} from "./vancouver-lib.mjs";

/**
 * /vancouver/pressure-washing — new Vancouver page for the merged pressure
 * washing service (Driveway Pressure Washing, Deck and Patio Cleaning, House
 * Washing, Fence Washing), mirroring the anchor/serviceTiles structure of
 * scripts/migrate/37-nv-pressure-washing.mjs but with wholly new,
 * verbatim-from-brief Vancouver copy
 * (vancouver-content/vancouver-pages/pressure-washing.md). No redirects
 * target this page yet, so anchor ids were chosen fresh and just need to
 * stay internally consistent with the serviceTiles hrefs below.
 *
 * Anchor ids used (matching the NV reference page's own ids, since they
 * describe the same four sub-services): driveway-pressure-washing,
 * deck-patio-cleaning, house-washing, fence-washing.
 *
 * Structural choices:
 *  - Unlike carpet-cleaning.md, this .md does not break each sub-service
 *    into its own "## Heading" with a distinct intro block — the "Types of
 *    Pressure Washing We Offer" blurb, the sub-service's own pricing
 *    paragraph, and its own process paragraph are the only sub-service-
 *    specific prose the brief provides, spread across three separate
 *    top-level "#" sections (What's Included / Prices / Process). Per the
 *    task brief's own fallback ("simpler and matching what NV's reference
 *    scripts do"), those three pieces of content per sub-service were
 *    grouped together into one place in reading order — same approach
 *    37-nv-pressure-washing.mjs takes — so a tile's anchor jump lands next
 *    to that sub-service's own pricing and process, not scattered across
 *    three distant sections.
 *  - None of the four "Process" paragraphs in the .md are numbered or use a
 *    "Bold title: rest" pattern — they're flowing sentences — so per the
 *    brief's fallback ("richText... if pure prose with no bullet list"),
 *    process content stayed as verbatim paragraphs inside each sub-service's
 *    Rich Text section rather than being forced into a processChecklist
 *    shape that isn't actually present in the source text.
 *  - Driveway pricing is the one sub-service with a real itemized price
 *    list in the source prose ("A 300 sq ft driveway... runs $100 to
 *    $150."), so it became a dedicated `pricing` section with tiers split
 *    at sqft/condition/range, matching 37-nv-pressure-washing.mjs's own
 *    driveway pricing tiers exactly. Deck, House, and Fence pricing are
 *    flowing prose with no discrete tiers, so those stayed as paragraphs
 *    inside their own sub-service's Rich Text body, same as the NV
 *    reference script did for those same three sub-services.
 *  - The closing sentence "New customers save 10% on their first clean with
 *    code MINT26 regardless of which service you book" applies to all four
 *    sub-services (it sits after all four pricing paragraphs in the source),
 *    so it was placed as the closing paragraph of the last sub-service group
 *    (Fence Washing), closest to its original position in the source text.
 *  - "Soft Wash vs. Pressure Wash" is a two-item comparison with no bullet
 *    list, matching the `whatsIncluded` card shape (title + body, no
 *    items), same as the NV reference script's own treatment of this exact
 *    block.
 *  - Per the migration brief, "Every Mint Cleaning Includes" is a shared
 *    global box and is not represented as its own section.
 */

console.log("→ /vancouver/pressure-washing");

/* ── Tile grid: "Types of Pressure Washing We Offer in Vancouver" ── */
const tileServices = [
  {
    title: "Driveway Pressure Washing",
    href: "#driveway-pressure-washing",
    description:
      "Dunbar and Point Grey driveways sit close to mature boulevard trees, and the shade keeps concrete damp long after a storm passes through. Concrete and asphalt driveways absorb oil stains, tire marks, and moss. High-pressure treatment strips these away, removes slippery growth, and preps the surface for sealing.",
  },
  {
    title: "Deck and Patio Cleaning",
    href: "#deck-patio-cleaning",
    description:
      "Kerrisdale's older character homes still lean on wood decks and stone patios tucked close to the house next door, catching less sun than a more open lot would. Wood decks and composite patios need soft washing, low pressure with biodegradable detergent, to lift organic growth without damaging the wood grain. Spring cleaning removes winter buildup, and fall cleaning gets ahead of the wet season.",
  },
  {
    title: "House Washing",
    href: "#house-washing",
    description:
      "Point Grey's character homes with deep eaves and mature hedges trap moisture against the siding longer than a newer build with less landscaping crowding it. Vinyl, fiber cement, cedar, and stucco all require soft washing to clean thoroughly without damage or voided warranties.",
  },
  {
    title: "Fence Washing",
    href: "#fence-washing",
    description:
      "Dunbar's older lots often back onto lanes lined with cedar fencing that has gone decades without a single cleaning. Cedar, vinyl, and composite fencing protect privacy and mark property lines. Soft washing removes algae and moss safely without scarring wood grain and preps the surface for staining or sealing.",
  },
];

const tileEntries = [];
for (const t of tileServices) {
  tileEntries.push(await customTile(t));
}

/* ── Driveway Pressure Washing ─────────────────────────────────── */
const drivewayPricingTiers = [
  { _key: key("tier"), title: "300 sq ft", range: "$100 to $150", body: "light cleaning" },
  { _key: key("tier"), title: "500 sq ft", range: "$150 to $250", body: "moderate cleaning (moss, grime)" },
  { _key: key("tier"), title: "800 sq ft", range: "$250 to $400", body: "heavy cleaning (oil stains, mold)" },
  { _key: key("tier"), title: "500 sq ft", range: "$200 to $350", body: "with sealing" },
];

/* ── Signs Vancouver Properties Need This Service ────────────────── */
const signs = [
  "A driveway or front walkway with a greenish tint underfoot, especially near the curb or under a boulevard tree, is early moss and algae and gets slippery once it's wet.",
  "Wood decks and stone patios that stay damp two or three days after a storm, common on the shadier side of a Kerrisdale lot, are holding onto moisture the wood doesn't need.",
  "Dark streaking along the roofline or on the north-facing wall of a Point Grey character home usually means mold or mildew has taken hold in the siding.",
  "Cedar fences along Dunbar's back lanes that have gone gray or black instead of weathering to a silvery tone are overdue for a soft wash.",
  "Strata buildings downtown and in Fairview and Yaletown occasionally bring us in for common-area work: parkade entrances, loading dock aprons, and shared walkways that fall under building maintenance rather than any single owner's balcony.",
  "Condos in Vancouver's dense towers rarely book pressure washing directly, since exterior building washing there runs through the strata council rather than an individual resident, which is part of why this service concentrates so heavily on the west side's single-family streets.",
];

/* ── Why Vancouver Homeowners Choose Mint Sanitary ────────────────── */
const whyChooseItems = [
  [
    "Eco-Friendly Products",
    "Both soft wash and pressure wash methods use biodegradable, plant-safe detergents that break down without harming pets, plants, or stormwater systems.",
  ],
  [
    "Background-Checked and Insured Crews",
    "Every technician is background-checked, bonded, and insured, with WorkSafeBC coverage on every job, whether it's a Kerrisdale patio or a Point Grey fence line.",
  ],
  [
    "Book Ahead for the Fastest Slot",
    "We're available 7 days a week, including evenings and weekends, but our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge to reach Vancouver addresses. Booking a few days ahead gets you the fastest available slot rather than counting on same-day service.",
  ],
  [
    "Strata and Building Rules, Handled",
    "For common-area work at strata buildings in Fairview, Yaletown, and downtown, we book freight elevators and confirm visitor parking and building access windows ahead of time, something a Dunbar driveway job never requires.",
  ],
  [
    "Matched Pressure, Every Time",
    "We're not spray-and-leave. PSI and detergent are matched to the material on site, whether that's a Point Grey cedar fence at 500 to 1,000 PSI or a Kerrisdale stamped-concrete patio that can handle far more.",
  ],
  ["10% First Clean Discount", "New customers receive code MINT26 for 10% off your first service."],
  [
    "Free Estimates",
    "No obligation. We assess your surfaces, recommend the right method, and provide a clear quote before any work begins.",
  ],
  [
    "24-Hour Satisfaction Guarantee",
    "If something isn't right, we'll come back within 24 hours and make it right, no extra charge.",
  ],
];

/* ── FAQ ─────────────────────────────────────────────────────────── */
const faqItems = [
  [
    "What's the difference between pressure washing and soft washing for a Vancouver home?",
    "Pressure washing uses high PSI, 1,500 or more, for concrete, stone, and pavers. Soft washing uses lower pressure, generally under 700 PSI, for wood, composite, and siding. We recommend soft wash for decks, siding, and fences, and pressure wash for driveways and patios on most Vancouver properties.",
  ],
  [
    "How often should I get my Vancouver driveway or deck pressure washed?",
    "Most homes in Dunbar, Point Grey, and Kerrisdale benefit from cleaning every 12 to 24 months, with annual service recommended for driveways, decks, and fences in shaded or damp spots. A deck or fence sitting in heavy shade for most of the day may need attention every 6 to 12 months instead.",
  ],
  [
    "Is pressure washing safe for older character homes in Point Grey and Dunbar?",
    "Yes, when the technique matches the material. Older stucco, cedar siding, and original wood trim on character homes need soft washing at low pressure rather than a high-PSI blast, which is exactly the approach we use on these properties.",
  ],
  [
    "What surfaces do you pressure wash in Vancouver?",
    "Concrete, asphalt, and paver driveways, wood and composite decks, stone and concrete patios, vinyl and cedar house siding, and cedar, vinyl, and composite fencing. We also take on strata common-area surfaces like parkade ramps and shared walkways.",
  ],
  [
    "How much does pressure washing cost in Vancouver?",
    "Pricing varies by service: driveway pressure washing runs $150 to $300, deck and patio cleaning runs $150 to $400, house washing runs $200 to $850 or more depending on home size, and fence washing runs roughly $375 to $825 for a typical 150-foot fence. Every Vancouver quote is free with no obligation.",
  ],
  [
    "Do you offer same-day pressure washing in Vancouver?",
    "Not guaranteed. Our crews and trucks are based in North Vancouver, so same-day availability in Vancouver depends on that day's bookings and bridge travel. Call 236-688-3248 and we'll give you a straight answer on what's available.",
  ],
  [
    "Can you schedule around Vancouver's wet season?",
    "Yes. We book driveway, deck, and fence washing year round, but many Vancouver homeowners prefer scheduling in the drier stretches between storms, roughly May through September, since surfaces dry faster and results last longer before the October to April wet season sets back in.",
  ],
  [
    "Do you pressure wash condo or strata common areas in Vancouver?",
    "Yes, for buildings in Fairview, downtown Vancouver, and Yaletown we clean parkade entrances, loading dock aprons, and shared walkways. This work runs through the strata council rather than an individual unit, so we coordinate access and scheduling with building management ahead of time.",
  ],
  [
    "Are your cleaning products safe for Vancouver's storm drains and waterways?",
    "Yes. We use biodegradable, plant-safe detergents on every job, keeping oil, grease, and cleaning residue out of the storm drains that feed English Bay and False Creek.",
  ],
  [
    "Should I pressure wash my Vancouver home before listing it for sale?",
    "Many sellers do. A clean driveway, deck, and exterior make a real difference in listing photos and a buyer's first impression walking up. We recommend booking driveway, deck, and house washing 1 to 2 weeks before your listing photos are taken.",
  ],
  [
    "What discount do new Vancouver customers get?",
    "10% off your first clean with code MINT26, on any pressure washing or soft washing service.",
  ],
  [
    "Do you guarantee your work in Vancouver?",
    "Yes, a 24-hour satisfaction guarantee on every job. If something isn't right after a driveway, deck, house, or fence washing job, we'll come back within 24 hours and make it right at no extra charge.",
  ],
  [
    "Are your crews background-checked and insured?",
    "Yes. Every technician is background-checked, bonded, and insured, and every job carries WorkSafeBC coverage, whether it's a Point Grey house wash or a Kerrisdale fence line.",
  ],
  [
    "What neighbourhoods in Vancouver do you serve for pressure washing?",
    "We serve Dunbar, Point Grey, Kerrisdale, Kitsilano, Mount Pleasant, Downtown Vancouver, Yaletown, West End, Fairview, and Commercial Drive. Bookings concentrate on the west side's single-family streets where driveways, decks, and fences are common.",
  ],
  [
    "How does crew travel from North Vancouver affect scheduling in Vancouver?",
    "Travel time depends on Lions Gate Bridge or Ironworkers Memorial Bridge traffic that day and where in Vancouver you're located, since a Dunbar or Point Grey address sits farther from either crossing than downtown does. We build that travel time into your booking window rather than promising a fixed arrival time.",
  ],
  [
    "Can pressure washing damage my cedar fence or wood deck?",
    "Only if the pressure is too high. Above 1,000 to 1,500 PSI, cedar can splinter and wood fibers can gouge. Our soft wash approach stays well under those thresholds and we test an inconspicuous spot first to confirm.",
  ],
  [
    "Do you seal driveways after pressure washing in Vancouver?",
    "We strongly recommend it. Pressure washing opens the pores in concrete, and sealing protects against water and stains while extending driveway lifespan by 5 to 10 or more years. Wait 24 hours after washing before sealing.",
  ],
  [
    "Is there a contract, or do you offer one-time cleans in Vancouver?",
    "Both. Most driveway, deck, house, and fence washing jobs are booked as one-time or annual services rather than a recurring contract, though we're happy to set up seasonal reminders if you'd rather not track timing yourself.",
  ],
];

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Soft Wash vs. Pressure Wash: Which Does Your Vancouver Property Need?",
    cards: [
      {
        _key: key("card"),
        title: "Pressure Washing",
        body: "Uses high force (1,500 to 4,500 PSI) to blast away embedded dirt, oil stains, and grime. Works well for concrete driveways, brick, pavers, and hard surfaces where aggressive cleaning is safe.",
        items: [],
      },
      {
        _key: key("card"),
        title: "Soft Washing",
        body: "Uses lower pressure (less than 700 PSI) combined with biodegradable detergents to lift organic growth. Targets algae, moss, and mold while protecting painted surfaces, wood, composite materials, and delicate siding.",
        items: [],
      },
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Pressure Washing We Offer in Vancouver",
    tiles: [],
    customTiles: tileEntries,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Driveway Pressure Washing in Vancouver",
    anchorId: "driveway-pressure-washing",
    body: [
      para(
        "Dunbar and Point Grey driveways sit close to mature boulevard trees, and the shade keeps concrete damp long after a storm passes through. Concrete and asphalt driveways absorb oil stains, tire marks, and moss. High-pressure treatment strips these away, removes slippery growth, and preps the surface for sealing."
      ),
      para(
        "Pre-cleaning inspection identifies the surface type, checks for existing damage like cracks or spalling, and notes any stains before we set the PSI and nozzle. Surface preparation clears loose debris, pre-wets the area, and applies pre-treatment to stubborn stains, letting it dwell for 10 to 15 minutes. High-pressure washing works at 6 to 12 inches from the surface in steady strokes, with extra attention to seams, edges, and high-traffic areas. A thorough rinse clears soap residue and debris, and we squeegee excess water to speed drying. Concrete typically needs 24 hours to dry before sealing, and we walk through remaining stains and sealing options with you."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Driveway Pricing in Vancouver",
    intro:
      "Professional driveway pressure washing costs $0.30 to $0.55 per square foot, generally $150 to $300 for most Vancouver driveways, with a $100 to $200 minimum to cover travel and setup.",
    tiers: drivewayPricingTiers,
    notes: [
      "Add-ons: oil stain pre-treatment ($50 to $150) and driveway sealing ($0.15 to $0.30 per square foot).",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Deck and Patio Cleaning in Vancouver",
    anchorId: "deck-patio-cleaning",
    body: [
      para(
        "Kerrisdale's older character homes still lean on wood decks and stone patios tucked close to the house next door, catching less sun than a more open lot would. Wood decks and composite patios need soft washing, low pressure with biodegradable detergent, to lift organic growth without damaging the wood grain. Spring cleaning removes winter buildup, and fall cleaning gets ahead of the wet season."
      ),
      para(
        "Deck cleaning in Vancouver typically runs $150 to $400, depending on size, material, and condition. We provide a time estimate, usually 2 to 4 hours for a typical residential deck, during your free on-site assessment."
      ),
      para(
        "A free, transparent assessment inspects your deck or patio, identifies material and condition, and tests an inconspicuous spot to confirm the right PSI. Our hydrogen peroxide-based pre-treatment, safe for family, pets, and garden plants, dwells for 10 to 30 minutes to break down moss, algae, and mildew. A low-pressure rinse clears the solution and debris using wide-angle tips and proper technique. A final inspection confirms all stains and growth are gone, and we recommend allowing 48 to 72 hours for full drying before staining or sealing."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "House Washing in Vancouver",
    anchorId: "house-washing",
    body: [
      para(
        "Point Grey's character homes with deep eaves and mature hedges trap moisture against the siding longer than a newer build with less landscaping crowding it. Vinyl, fiber cement, cedar, and stucco all require soft washing to clean thoroughly without damage or voided warranties."
      ),
      para(
        "Single-story homes (1,500 to 2,000 sq ft) typically run $200 to $360. Two-story homes (2,500 to 3,500 sq ft) range from $450 to $850 or more. Overall, house washing in Vancouver runs $200 to $850 or more depending on home size, based on $0.30 to $0.50 per square foot of exterior wall area. Three-story homes need a custom quote due to specialized equipment."
      ),
      para(
        "Inspection and preparation assess siding materials, flag delicate areas, and protect landscaping before cleaning starts. A biodegradable cleaning solution goes on with a low-pressure wand, customized to your siding material and level of buildup. The solution dwells for 10 to 15 minutes, breaking down organic growth at the source, which is why soft wash outlasts pressure alone. A gentle low-pressure rinse removes debris and residue while preventing water intrusion behind siding. A final inspection confirms every area is clean, no residue remains, and landscaping is undamaged."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Fence Washing in Vancouver",
    anchorId: "fence-washing",
    body: [
      para(
        "Dunbar's older lots often back onto lanes lined with cedar fencing that has gone decades without a single cleaning. Cedar, vinyl, and composite fencing protect privacy and mark property lines. Soft washing removes algae and moss safely without scarring wood grain and preps the surface for staining or sealing."
      ),
      para(
        "We price fence washing two ways. By linear foot, a standard 6-foot fence runs $2.50 to $5.50 per linear foot, so a 150-foot fence typically costs $375 to $825. By square footage, for complex layouts, pricing runs $0.35 to $0.90 per square foot, so an 800 square foot fence runs $280 to $720. Heavy moss or mildew can add $50 to $150 in pre-treatment time, and hard-to-reach sections or steep terrain add 10 to 15% to the total. Add-ons include algae and rust pre-treatment ($50 to $100) and post-wash wood sealing (typically $400 to $600 for 500 square feet)."
      ),
      para(
        "On-site assessment identifies the fence material, evaluates condition, and locates problem areas like moss hotspots and rust stains. Biodegradable pre-treatment breaks down organic growth and loosens stains, dwelling for 5 to 15 minutes depending on severity. We wash at the correct PSI for your material, using horizontal strokes that follow the wood grain to prevent streaking. A thorough rinse removes sediment, cleaning solution, and debris, and we check for missed spots. Drying times vary by material: cedar and softwood need 24 to 48 hours, vinyl needs 4 to 12 hours, and composite needs 12 to 24 hours."
      ),
      para(
        "New customers save 10% on their first clean with code MINT26 regardless of which service you book."
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
        "Point Grey and Dunbar sit closer to open water than most North Shore neighbourhoods, with streets running down toward Spanish Banks and Locarno Beach. That proximity adds salt air to the usual coastal rain, which speeds up corrosion on chain-link fencing, metal railings, and gate hardware in a way a more sheltered, inland yard doesn't experience. Vancouver's west side lots also tend to run narrower than a typical North Shore property, so driveways and side yards often sit in a shade gap between two houses rather than under one stand of trees, which keeps concrete and siding damp on a different schedule than a forested North Vancouver hillside does."
      ),
      para(
        "Add in the strata buildings downtown and in Fairview and Yaletown, where washing a shared walkway or parkade ramp means booking around building bylaws and giving the strata council notice instead of just showing up, and Vancouver ends up needing the same soft wash and pressure wash methods laid over a different map of access rules and property types than North Vancouver's more uniformly single-family streets."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Cleaning Services in Vancouver",
    body: [
      multiLinkPara(["", ["Gutter Cleaning in Vancouver", "/vancouver/gutter-cleaning"]]),
      multiLinkPara(["", ["Window Cleaning in Vancouver", "/vancouver/window-cleaning"]]),
      multiLinkPara(["", ["House Cleaning in Vancouver", "/vancouver/house-cleaning"]]),
      multiLinkPara(["", ["Deep Cleaning in Vancouver", "/vancouver/deep-cleaning"]]),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Neighbourhoods We Serve for Pressure Washing in Vancouver",
    body: [
      para(
        "Mint Sanitary provides pressure washing and soft washing throughout Vancouver, including Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar, though the work concentrates where the driveways and fence lines are. Dunbar, Point Grey, and Kerrisdale make up the bulk of our Vancouver pressure washing bookings, since single-family lots there have the driveways, decks, and fences that condo towers downtown, in Yaletown, and along the West End skyline simply don't have. We also handle strata common-area washing, parkade entrances, loading docks, and shared walkways, for buildings in Fairview, downtown, and Yaletown, and take on porch and patio work for Kitsilano and Mount Pleasant's older houses. If your Vancouver address isn't listed above, call 236-688-3248 or email hello@mintsanitary.com to confirm coverage."
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
    heading: "Ready to Book Pressure Washing in Vancouver?",
    body: "No obligation. We'll assess your driveway, deck, house exterior, or fence, recommend soft wash or pressure wash, and give you a clear quote. Call 236-688-3248 or use code MINT26 for 10% off your first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceAreaServiceDoc("vancouver", "pressure-washing", {
  area: refTo("area", "vancouver"),
  cleaningType: refTo("cleaningType", "pressure-washing"),
  title: "Pressure Washing in Vancouver",
  heroHeading: "Pressure Washing in Vancouver",
  heroIntro:
    "Dunbar, Point Grey, and Kerrisdale are full of single-family homes with driveways, walkways, and patios that sit under mature trees and pick up moss fast once the fall rains start. Mint Sanitary is rated 5 out of 5 across 50+ Google reviews, and new customers get 10% off their first clean with code MINT26. Our crews and trucks are based across the water in North Vancouver, so same-day booking in Vancouver isn't guaranteed the way it is closer to home. Call ahead and we'll find you the next available slot.",
  metaTitle: "Pressure Washing in Vancouver | Driveway, Deck, House & Fence Washing | Mint Sanitary",
  metaDescription:
    "Pressure washing and soft washing for Vancouver driveways, decks, house exteriors, and fences. 5 out of 5 rated, 10% off your first clean with code MINT26.",
  sections,
  published: true,
});

console.log("\n✓ Vancouver pressure washing migrated");
