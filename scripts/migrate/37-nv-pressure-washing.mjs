import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  heading,
  para,
  paraWithLink,
  imageBlock,
  galleryImage,
  customTile,
} from "./lib.mjs";

/**
 * /north-vancouver/pressure-washing — migrated from the hand-coded page now
 * parked at /north-vancouver/pressure-washing-original.
 *
 * This page merges FOUR sub-services onto one URL via #anchors that
 * permanent redirects in next.config.ts depend on:
 *   /north-vancouver/driveway-pressure-washing → #driveway-pressure-washing
 *   /north-vancouver/deck-patio-cleaning       → #deck-patio-cleaning
 *   /north-vancouver/house-washing             → #house-washing
 *   /north-vancouver/fence-washing             → #fence-washing
 * Each sub-service's FIRST CMS section carries `anchorId` set to the exact
 * original id so those redirects keep landing correctly.
 *
 * All copy verbatim. Placement decisions:
 *  - "Soft Wash vs. Pressure Wash" is a two-card grid with no photos, so it
 *    took the page's one whatsIncluded slot. The image + paragraph that
 *    followed it in the same visual block (service van photo + "Many
 *    homeowners assume...") doesn't fit the card shape, so it became its
 *    own headingless Rich Text section directly after.
 *  - "Our 4 Pressure Washing Services" tile grid links only to same-page
 *    anchors on this page (not general /services/* pages), so per the
 *    migration guide it was NOT forced into serviceTiles. Each tile became
 *    a heading + image + paragraph + "Learn More" link inside one Rich
 *    Text section, hrefs preserved exactly (e.g. "#driveway-pressure-washing").
 *  - Each of the 4 anchored sub-services is a large bespoke block: intro
 *    prose, H3 subheadings, small card grids (surface/siding/fence-material
 *    breakdowns), and a numbered "Our Process" list. Per the mapping rules
 *    ("richText for prose/lists/steps"), all of this stayed inside one Rich
 *    Text section per sub-service, using heading()/para() pairs for both
 *    the card-grid items and the process steps (Portable Text here only
 *    distinguishes h3/normal, matching the convention already used in
 *    14-pressure-washing.mjs and 20-nv-church-cleaning.mjs).
 *  - Four short paragraphs in the source lead with an inline-bold phrase
 *    ("Why DIY driveway cleaning backfires.", "Sealing after pressure
 *    washing.", "A cautionary note on DIY.", "Professional vs. DIY.").
 *    lib.mjs has no bold-span helper and no prior script introduced one, so
 *    — matching the established precedent in 14-pressure-washing.mjs — each
 *    lead-in became its own heading() block (text preserved verbatim,
 *    including trailing periods) followed by the rest as a separate para().
 *  - Driveway pricing was the one sub-service pricing block presented as a
 *    literal itemized list ("300 sq ft, light cleaning: $100 to $150", …),
 *    so it cleanly fit the `pricing` section's tiers/notes shape: each list
 *    item was split at its comma/colon into title/body/range with no words
 *    added or reworded, the lead paragraph became `intro`, and the add-ons
 *    paragraph became a `notes` entry. This is a second CMS section for the
 *    same sub-service, so it carries no anchorId (rule: first section only).
 *    Deck/patio, house-washing, and fence-washing pricing are flowing prose
 *    with no discrete tiers in the source, so forcing them into tiers would
 *    require inventing structure that isn't there — those three stayed as
 *    heading+paragraph inside their sub-service's Rich Text body instead.
 *  - "Why Choose Mint Sanitary" (image + accordion, no CTA button in the
 *    source) mapped directly to whyChoose; ctaLabel/ctaHref were left unset
 *    since the source block has no button.
 *  - The "See the Difference" photo grid has no captions, so it's the new
 *    gallery section — six images, in source order, via galleryImage().
 *  - The bespoke Google Reviews block was dropped in favor of the shared
 *    global review set (plain `testimonials`), per standing decision.
 *  - Service Areas: intro prose kept as real paragraphs, the neighborhood
 *    chip list became a Portable Text bullet list (a local `bullet()`
 *    helper, following the precedent set in 04-carpet-cleaning.mjs), the
 *    map image via imageBlock(), and the "View All Service Areas" button
 *    preserved as a real link via paraWithLink.
 */

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

console.log("→ /north-vancouver/pressure-washing");

/* ── Tile grid: "Our 4 Pressure Washing Services in North Vancouver" ── */
const tileServices = [
  {
    title: "Driveway Pressure Washing",
    href: "#driveway-pressure-washing",
    image: "/pressure-washing-driveway-north-vancouver.webp",
    description:
      "Concrete and asphalt driveways in North Vancouver absorb oil stains, tire marks, and moss. High-pressure treatment strips these away, removes slippery growth, and preps the surface for sealing. See full pricing and process below.",
  },
  {
    title: "Deck and Patio Cleaning",
    href: "#deck-patio-cleaning",
    image: "/pressure-washing-deck-patio-north-vancouver.webp",
    description:
      "Wood decks and composite patios need soft washing, low pressure with biodegradable detergent, to lift organic growth without damaging the wood grain. Spring cleaning removes winter buildup; fall cleaning gets ahead of the wet season.",
  },
  {
    title: "House Washing",
    href: "#house-washing",
    image: "/pressure-washing-house-washing-north-vancouver.webp",
    description:
      "North Vancouver siding builds up algae bands fast, especially on north-facing walls. Vinyl, fiber cement, cedar, and stucco all require soft washing to clean thoroughly without damage or voided warranties.",
  },
  {
    title: "Fence Washing",
    href: "#fence-washing",
    image: "/pressure-washing-fence-north-vancouver.webp",
    description:
      "Cedar, vinyl, and composite fencing protect privacy and mark property lines. Soft washing removes algae and moss safely without scarring wood grain and preps the surface for staining or sealing.",
  },
];

const tileEntries = [];
for (const s of tileServices) {
  tileEntries.push(await customTile(s));
}

/* ── Driveway Pressure Washing ─────────────────────────────────────── */
const drivewaySurfaceCards = [
  ["Concrete driveways", "The most common surface in North Vancouver. Standard concrete handles 2,500 to 3,000 PSI, while sealed or decorative concrete needs a gentler 2,000 to 2,500 PSI. We recommend sealing after washing to protect newly opened pores."],
  ["Asphalt driveways", "Need a careful 1,500 to 2,800 PSI. Over-pressurizing can strip up to 25% of the surface layer and speed up deterioration, so we always match pressure to the material."],
  ["Pavers and stamped concrete", "Delicate and need 1,200 to 2,000 PSI with a wide nozzle, 25 to 40 degrees, to avoid dislodging bricks. Joint sand replacement afterward is a normal part of the process."],
];

const drivewayProcessSteps = [
  ["Pre-cleaning inspection", "We identify the surface type, check for existing damage like cracks or spalling, and note any stains before setting the PSI and nozzle for your North Vancouver driveway."],
  ["Surface preparation", "We clear loose debris, pre-wet the area, and apply pre-treatment to stubborn stains, letting it dwell for 10 to 15 minutes."],
  ["High-pressure washing", "We work at 6 to 12 inches from the surface in steady strokes, paying extra attention to seams, edges, and high-traffic areas."],
  ["Rinsing", "A thorough final rinse clears soap residue and debris, and we squeegee excess water to speed drying."],
  ["Drying and final inspection", "Concrete typically needs 24 hours to dry before sealing. We walk through any remaining stains and sealing options with you."],
];

const drivewayBody = [
  para(
    "Driveway pressure washing uses high-pressure water, typically 2,000 to 4,000 PSI, to remove dirt, grime, mold, algae, and stains from concrete, asphalt, and paver surfaces in North Vancouver. Most driveways, 500 to 800 square feet, are fully cleaned in one to two hours. We serve Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights as our core North Vancouver service areas, with same-day or next-day appointments available."
  ),
  heading("Surface-Specific Treatment"),
  ...drivewaySurfaceCards.flatMap(([title, body]) => [heading(title), para(body)]),
  para(
    "Oil stains and stubborn grime get an eco-friendly pre-treatment, such as a degreaser, poultice, or enzymatic cleaner, that dwells for 10 to 15 minutes before pressure washing removes it completely."
  ),
  heading("Why It Matters"),
  para(
    "A clean driveway is your property's largest horizontal surface and shapes first impressions for buyers, guests, and neighbors in North Vancouver. Moss and algae create slip hazards in our rainy climate, and contaminants left on the surface accelerate concrete and asphalt breakdown. Our eco-friendly process also keeps oil, grease, and metals out of stormwater systems, in line with Metro Vancouver regulations."
  ),
  heading("Our Process"),
  ...drivewayProcessSteps.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("Why DIY driveway cleaning backfires."),
  para(
    "Rental pressure washers cause real damage in untrained hands: concrete spalling and cracking ($500 to $3,000+ in repairs), asphalt stripping (full repaving is often the only fix), paver dislodgement, damaged sealers, injury from misdirected pressure, water forced into foundations, and stormwater violations from uncontrolled chemical discharge. Professional pressure washing in North Vancouver costs $100 to $350, far less than the repair bills DIY mistakes create."
  ),
  heading("Sealing after pressure washing."),
  para(
    "Pressure washing opens up the pores in concrete, so sealing afterward protects against water, oil, and stains. In North Vancouver's freeze-thaw climate, sealing is especially valuable: it extends driveway lifespan by 5 to 10 or more years and makes future cleaning easier. Wait 24 hours after washing before sealing. Options include acrylic sealers (affordable, good UV protection), penetrating sealers (deep moisture barrier, well suited to our wet climate), and eco-friendly sealers that protect local waterways."
  ),
];

const drivewayPricingTiers = [
  ["300 sq ft", "light cleaning", "$100 to $150"],
  ["500 sq ft", "moderate (moss, grime)", "$150 to $250"],
  ["800 sq ft", "heavy (oil stains, mold)", "$250 to $400"],
  ["500 sq ft", "+ sealing", "$200 to $350"],
];

/* ── Deck and Patio Cleaning ───────────────────────────────────────── */
const deckPatioProcessSteps = [
  ["Professional assessment", "We inspect your deck or patio, identify material and condition, and test an inconspicuous spot to confirm the right PSI. This is free, with a transparent quote and no hidden charges."],
  ["Pre-treatment application", "Our hydrogen peroxide-based cleaning solutions are safe for family, pets, and garden plants, and dwell for 10 to 30 minutes to fully break down moss, algae, and mildew."],
  ["Low-pressure rinse", "We rinse away all cleaning solution and debris at the correct PSI for your surface, using wide-angle tips and proper technique."],
  ["Final inspection and drying", "We confirm all stains, moss, and mildew are gone. Allow 48 to 72 hours for full drying before staining or sealing."],
];

const deckPatioBody = [
  para(
    "North Vancouver's wet climate creates ideal conditions for moss, algae, and mildew on outdoor surfaces. Cedar decks in Lower Lonsdale, composite decking in Edgemont Village, and stone patios in Deep Cove all need regular cleaning to stay safe and last. A moss-covered deck is a slip hazard, and moisture that gets into wood leads to rot and expensive repairs down the line. Regular cleaning extends deck lifespan by 5 to 10 or more years. Cleaning before staining also matters: a clean deck absorbs stain evenly, creating a finish that lasts 3 to 5 or more years, versus a patchy result on a dirty surface."
  ),
  heading("Wood Deck Cleaning"),
  para(
    "Cedar and pressure-treated decks are common throughout North Vancouver, and these softwoods are vulnerable to high-pressure damage. Anything above 1,500 PSI can gouge fibers, splinter boards, and force water into the wood. Professional soft washing uses controlled pressure, 500 to 1,200 PSI depending on the wood species and condition. We start with a biodegradable pre-treatment that breaks down moss, algae, and mildew, letting it dwell for 10 to 30 minutes. Then we rinse at low pressure, working with the grain to clean evenly and restore natural color and grip."
  ),
  heading("Composite and Stone Surfaces"),
  para(
    "Composite decking from brands like Trex, TimberTech, and DuxxBak is common in newer North Vancouver homes, including Edgemont Village and Seymour Heights. These materials need care to protect manufacturer warranties: our soft-wash approach stays under 1,500 PSI and uses biodegradable products approved for composite. Cleaning within 7 days of staining keeps you within warranty guidelines. Concrete and stone patios can handle higher pressure, safely up to 3,000 PSI, to clear moss, algae, dirt, and weathering. Wide-angle tips and proper distance keep pressure even and prevent etching or mortar joint damage."
  ),
  heading("Our Process"),
  ...deckPatioProcessSteps.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("A cautionary note on DIY."),
  para(
    "We've seen the aftermath of DIY deck cleaning gone wrong: a Deep Cove homeowner rented a washer, ran it at 3,000+ PSI on a cedar deck, and ended up with gouged boards, splintered edges, and rot that required full board replacement. Professional soft washing would have cost a fraction of those repairs."
  ),
  heading("Deck and Patio Pricing in North Vancouver"),
  para(
    "Deck cleaning in North Vancouver typically runs $150 to $400, depending on size, material, and condition. We provide a time estimate, usually 2 to 4 hours for a typical residential deck, during your free on-site assessment."
  ),
];

/* ── House Washing ─────────────────────────────────────────────────── */
const sidingTypeCards = [
  ["Vinyl siding", "The most common choice across Lower Lonsdale and Edgemont Village. Tolerates moderate pressure, but soft wash avoids any risk of bending or cracking panels and prevents water seepage between seams in our rainy climate."],
  ["Stucco", "Popular throughout West and North Vancouver, is porous and prone to cracking under high pressure. Soft wash is essential for stucco homes in Deep Cove and Seymour Heights, using oxygen-based or non-chlorine solutions."],
  ["Hardie board and fiber cement", "Common in newer North Vancouver developments, requires soft wash only per the manufacturer's guidelines. Pressure washing voids the warranty. We stay at 500 to 800 PSI maximum."],
  ["Cedar and wood siding", "Appears on premium homes throughout North Vancouver and needs chlorine-free, plant-safe detergent to preserve the natural finish while removing algae and mildew."],
  ["Aluminum siding", "Responds well to soft wash, with biodegradable solutions that prevent oxidation staining without scratching or corrosion."],
];

const houseWashingProcessSteps = [
  ["Inspection and preparation", "We assess siding materials, flag delicate areas, and protect landscaping before cleaning begins."],
  ["Solution application", "A biodegradable cleaning solution goes on with a low-pressure wand, customized by siding material and level of buildup."],
  ["Dwell time", "The solution sits for 10 to 15 minutes, breaking down organic growth at the source, which is why soft wash outlasts pressure washing."],
  ["Gentle rinse", "Low-pressure rinsing removes debris and residue while preventing water intrusion behind siding."],
  ["Final inspection", "We confirm every area is clean, no solution residue remains, and landscaping is undamaged."],
];

const houseWashingBody = [
  para(
    "House washing is the soft-wash cleaning of every exterior surface on your North Vancouver home, using low-pressure water under 500 PSI combined with biodegradable detergent. It covers siding (vinyl, stucco, Hardie board, wood, and cedar), fascia and soffits, foundation and trim, window exteriors, gutters and downspouts (surface cleaning), and exterior trim boards."
  ),
  heading("Soft Wash vs. Pressure Washing for Home Exteriors"),
  para(
    "Soft wash and pressure washing are not interchangeable, and the choice matters for your North Vancouver home's longevity. Soft washing, under 500 PSI with biodegradable detergent, kills algae, mold, and mildew at the source and prevents regrowth for 12 to 24 months. Pressure washing, 1,300 to 3,000+ PSI, works well on concrete but risks bending vinyl panels, cracking stucco, forcing water behind siding, and stripping paint from trim. Soft wash is the standard for residential siding across British Columbia for exactly this reason."
  ),
  heading("Siding Types We Clean in North Vancouver"),
  ...sidingTypeCards.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("Why House Washing Matters"),
  para(
    "Homes with strong curb appeal sell 7% faster and command higher prices, and professional house washing can add $10,000 to $15,000 in perceived buyer value against a $300 to $500 investment. Mold and algae feed on organic material in paint and siding, accelerating paint failure and wood rot, particularly on the shaded, north-facing walls common across North Vancouver. Regular soft washing extends exterior paint life by 3 to 5 or more years, and if you're preparing to sell, timing house washing 1 to 2 weeks before listing photography makes a real difference in buyer response."
  ),
  heading("Our Process"),
  ...houseWashingProcessSteps.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("House Washing Pricing in North Vancouver"),
  para(
    "Single-story homes (1,500 to 2,000 sq ft) typically run $200 to $360. Two-story homes (2,500 to 3,500 sq ft) range from $450 to $850+. Overall, house washing in North Vancouver runs $200 to $850+ depending on home size, based on $0.30 to $0.50 per square foot of exterior wall area. Three-story homes need a custom quote due to specialized equipment."
  ),
  heading("Professional vs. DIY."),
  para(
    "Professional crews clean a 3,000 to 4,000 sq ft North Vancouver home in 2 to 4 hours. DIY typically takes 6 to 8 or more hours, plus setup and cleanup, using rental equipment at $75 to $150 per day. Untrained use of high-pressure equipment regularly causes bent or cracked vinyl panels, water intrusion behind stucco, and paint stripping, and DIY results without biocide-based solutions only remove surface growth, letting mold and algae regrow in 3 to 6 months. Professional soft wash results last 12 to 24 months."
  ),
];

/* ── Fence Washing ─────────────────────────────────────────────────── */
const fenceMaterialCards = [
  ["Cedar and wood fences", "The classic choice in North Vancouver, especially in older Lower Lonsdale and Deep Cove properties. Cedar can splinter above 1,000 to 1,500 PSI, so we clean at 500 to 1,000 PSI, keep 18 inches or more of distance, work with the grain, and use oxygen-based solutions. Cedar needs 24 to 48 hours to dry before staining or sealing."],
  ["Vinyl fences", "Increasingly common in newer North Vancouver neighborhoods, handle higher pressure, 1,500 to 2,000 PSI, and dry within 4 to 12 hours."],
  ["Composite fencing", "Cleans at a gentler 800 to 1,200 PSI to protect the material fibers, common in mixed North Vancouver neighborhoods."],
  ["Chain-link and metal fences", "Chain-link can handle up to 2,000 PSI, ideal for clearing rust stains and algae buildup. Metal and ornamental fences need gentle pressure and rust-inhibiting solutions to prevent future corrosion."],
];

const fenceProcessSteps = [
  ["On-site assessment and material identification", "We identify the fence material, evaluate condition, and locate problem areas like moss hotspots and rust stains on your North Vancouver property."],
  ["Pre-treatment and solution application", "Biodegradable solutions break down organic growth and loosen stains, dwelling for 5 to 15 minutes depending on severity."],
  ["Low-pressure or custom-pressure washing", "We clean at the correct PSI for your material, using horizontal strokes that follow the wood grain to prevent streaking."],
  ["Thorough rinsing and debris removal", "We remove all sediment, cleaning solution, and debris, and check for missed spots."],
  ["Drying and post-wash recommendations", "Drying times vary by material: cedar and softwood need 24 to 48 hours, vinyl needs 4 to 12 hours, and composite needs 12 to 24 hours."],
];

const fenceWashingBody = [
  para(
    "Fence washing is a specialized cleaning process, not a garden hose rinse. It removes dirt, grime, algae, moss, mildew, and stubborn stains from every fence material found in North Vancouver, adapting PSI and technique to the specific material. A typical process takes 1 to 3 hours; a standard 150 to 200-foot fence usually takes 1 to 2 hours."
  ),
  heading("Fence Materials We Clean"),
  ...fenceMaterialCards.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("Why Fence Washing Matters in North Vancouver"),
  para(
    "A full fence replacement in North Vancouver can run $3,000 to $8,000 or more, while annual cleaning costs a fraction of that. Cedar fences can last 30 or more years with annual cleaning and sealing. North Vancouver's climate, averaging over 800 millimeters of rain annually, creates ideal conditions for mold, mildew, and moss, particularly on the north-facing fences common in Lynn Valley and Deep Cove. Clean fences also brighten color, remove years of discoloration, and help North Vancouver homes show better to buyers before a sale."
  ),
  heading("Our Process"),
  ...fenceProcessSteps.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("Fence Washing Pricing in North Vancouver"),
  para(
    "We price fence washing two ways. By linear foot, a standard 6-foot fence runs $2.50 to $5.50 per linear foot; a 150-foot North Vancouver fence typically costs $375 to $825. By square footage, for complex layouts, pricing runs $0.35 to $0.90 per square foot; an 800 square foot fence runs $280 to $720. Heavy moss or mildew can add $50 to $150 in pre-treatment time, and hard-to-reach sections or steep terrain add 10 to 15% to the total. Add-on services include algae and rust pre-treatment ($50 to $100) and post-wash wood sealing (typically $400 to $600 for 500 square feet). We also offer some North Vancouver strata communities compliance-focused cleaning for properties with specific fence maintenance rules."
  ),
];

/* ── Why Choose Mint Sanitary ──────────────────────────────────────── */
const whyChooseItems = [
  ["Biodegradable Solutions", "Both soft wash and pressure wash methods use eco-friendly detergents that break down safely without harming pets, plants, or stormwater systems."],
  ["Free Estimates", "No obligation. We assess your surfaces, recommend the right method, and provide a clear quote before any work begins."],
  ["7-Day Availability", "Flexible scheduling works with busy lives. Book your preferred date and time online or by phone."],
  ["10% First Clean Discount", "New customers receive code MINT26 for 10% off your first service."],
  ["Professional Insurance", "WCB and liability coverage protect your property during the cleaning process."],
  ["Multi-Step Process", "We don't simply spray and leave. We clean systematically to prevent damage and maximize results."],
];

/* ── Gallery: "See the Difference" ────────────────────────────────── */
const galleryPhotos = [
  ["/pressure-washing-north-vancouver-sidewalk-before-after.webp", "Residential sidewalk pressure washing before and after in North Vancouver"],
  ["/pressure-washing-north-vancouver-deck-clean-wood-exterior.webp", "Clean multi-level wood deck and siding after pressure washing in North Vancouver"],
  ["/pressure-washing-north-vancouver-residential-driveway.webp", "Residential concrete driveway and modern home exterior cleaning North Vancouver"],
  ["/pressure-washing-north-vancouver-house-siding-soft-wash.webp", "Freshly washed home siding with clean planks in North Vancouver"],
  ["/pressure-washing-north-vancouver-wood-fence-clean.webp", "Clean wooden fence after soft washing in a North Vancouver yard"],
  ["/pressure-washing-north-vancouver-balcony-tiles-clean.webp", "Clean outdoor balcony tiles with coastal view North Vancouver"],
];
const galleryImagesArr = [];
for (const [src, alt] of galleryPhotos) {
  galleryImagesArr.push(await galleryImage(src, alt));
}

/* ── Service Areas ─────────────────────────────────────────────────── */
const serviceAreaChips = [
  "Lower Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "North Vancouver City Centre",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "Capilano",
  "Norgate",
  "Dollarton",
];

/* ── FAQ ──────────────────────────────────────────────────────────── */
const faqItems = [
  ["What's the difference between pressure washing and soft washing in North Vancouver?", "Pressure washing uses high PSI, 1,500 or more, for concrete, stone, and pavers around your North Vancouver property. Soft washing uses lower pressure, 500 to 1,200 PSI, for wood, composite, and siding. We recommend soft wash for decks, siding, and fences, and pressure wash for driveways and patios in North Vancouver."],
  ["How often should I have my North Vancouver property pressure washed?", "Most North Vancouver homeowners benefit from cleaning every 12 to 24 months, with annual service recommended for driveways, decks, and fences in shaded or damp locations like Lynn Valley and Deep Cove. Heavily shaded siding may need washing every 6 months."],
  ["Is pressure washing safe for all driveway surfaces in North Vancouver?", "Yes, when a professional uses the correct PSI for your surface. In North Vancouver, concrete handles 2,500 to 3,000 PSI, asphalt needs 1,500 to 2,800 PSI, and pavers need 1,200 to 2,000 PSI. Using the wrong pressure is the most common cause of driveway damage in North Vancouver."],
  ["Do you use eco-friendly cleaning products in North Vancouver?", "Yes. We use biodegradable, plant-safe products across every service, from driveway pre-treatments to house washing solutions, in compliance with Metro Vancouver stormwater regulations that protect North Vancouver's waterways."],
  ["How much does pressure washing cost in North Vancouver?", "Pricing varies by service: driveway pressure washing runs $150 to $300, deck and patio cleaning runs $150 to $400, house washing runs $200 to $850+ depending on home size, and fence washing runs roughly $375 to $825 for a typical 150-foot fence. Every North Vancouver quote is free and comes with no obligation."],
  ["Can professional cleaning help sell my North Vancouver home faster?", "Yes. Homes with strong curb appeal sell 7 to 17% higher, and a clean exterior can add $10,000 to $15,000 in perceived buyer value. We recommend scheduling driveway, deck, and house washing 1 to 2 weeks before listing photography for your North Vancouver home."],
  ["Should I pressure wash my North Vancouver deck myself, or hire a professional?", "DIY pressure washing is one of the most common ways North Vancouver homeowners damage their own deck. High PSI gouges wood fibers and can lead to $1,200 or more in board repairs. Professional soft washing at 500 to 1,200 PSI cleans safely without that risk."],
  ["What driveway surfaces can you clean in North Vancouver?", "We clean concrete, asphalt, pavers, and stamped concrete driveways throughout North Vancouver, adjusting PSI and nozzle angle to each surface to avoid damage."],
  ["Can you remove oil stains from my North Vancouver driveway?", "Yes, using eco-friendly degreasers, poultice treatments, or enzymatic cleaners that dwell for 10 to 15 minutes before pressure washing lifts the stain. Fresh oil stains respond better than old, deeply embedded ones on North Vancouver driveways."],
  ["Do I need to seal my North Vancouver driveway after pressure washing?", "We strongly recommend it. Pressure washing opens the pores of concrete, and sealing protects against North Vancouver's freeze-thaw cycles, extending driveway lifespan by 5 to 10 or more years. Wait 24 hours after washing before sealing."],
  ["Will pressure washing damage my North Vancouver wood deck?", "Only if the pressure is too high. Above 1,500 PSI, water can gouge, splinter, or force moisture into wood fibers. Professional soft wash at 500 to 1,200 PSI cleans North Vancouver decks safely, and we test an inconspicuous area first to confirm."],
  ["Can you clean composite decks in North Vancouver, or only wood?", "We clean all deck types in North Vancouver, including wood, composite, vinyl, and PVC. Composite decks need to stay under 1,500 PSI, and our technicians know the specific care guidelines for Trex, TimberTech, and DuxxBak."],
  ["How soon after cleaning can I stain or seal my North Vancouver deck?", "Wait 48 to 72 hours after professional cleaning for your North Vancouver deck to fully dry before applying stain or sealant. Proper drying maximizes adhesion and gives you a finish that lasts longer."],
  ["Is pressure washing safe for my cedar fence in North Vancouver?", "Yes, at low pressure, 500 to 1,000 PSI, with proper technique. Excessive pressure or aggressive nozzles can splinter cedar, so our North Vancouver technicians follow strict PSI guidelines for every cedar fence we clean."],
  ["What's the difference between vinyl and cedar fence cleaning in North Vancouver?", "Vinyl fencing uses higher pressure, 1,500 to 2,000 PSI, because it's more durable. Cedar needs gentle pressure, 500 to 1,000 PSI, to avoid splintering, plus longer drying time before sealing. We adjust our approach to each material for North Vancouver customers."],
  ["Will fence washing remove all mold and mildew in North Vancouver?", "Professional washing removes existing mold and mildew from your North Vancouver fence. To prevent regrowth in our damp climate, we recommend a waterproof sealer or fungicide-based stain within 48 hours of cleaning, extending protection by 2 to 3 years."],
  ["Will professional house washing damage my vinyl siding or stucco in North Vancouver?", "No. Soft washing, our standard method, is safe for all siding types common in North Vancouver. High-pressure washing can bend vinyl panels or crack stucco, which is why we avoid it on home exteriors. Hardie board manufacturers specifically require soft wash to keep the warranty valid."],
  ["How long do house washing results last in North Vancouver's climate?", "Professional soft wash results typically last 12 to 24 months in North Vancouver, depending on shade and exposure. Heavily shaded siding in areas like Seymour Heights and Deep Cove may need washing every 6 months."],
  ["Can I DIY house washing instead of hiring a professional in North Vancouver?", "DIY pressure washer rental is cheaper upfront, but professional soft washing offers better value for North Vancouver homeowners. Rental equipment risks $1,000 or more in siding damage, takes 6 to 8 or more hours versus 2 to 4 hours for a trained crew, and DIY results only last 3 to 6 months without professional-grade solutions."],
  ["What areas of North Vancouver do you serve?", "We serve all of North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, and North Vancouver City Centre, with same-day or next-day appointments in most cases. We also serve West Vancouver, Vancouver, and Burnaby on request."],
];

/* ── Assemble sections ───────────────────────────────────────────── */
const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Pressure Washing Matters in North Vancouver",
    body: [
      await imageBlock(
        "/north-vancouver-driveway-pressure-washing-professional.webp",
        "Professional residential driveway pressure washing in North Vancouver"
      ),
      para(
        "North Vancouver's location at the intersection of Coast Mountains, dense forest, and the Pacific Ocean creates a unique climate challenge: high annual rainfall combined with persistent shade means surfaces stay damp year-round. Unlike drier regions where a few cleaning cycles per year suffice, North Vancouver properties require regular attention to prevent structural damage."
      ),
      para(
        "Moss and algae thrive in moisture and shade. North-facing walls, areas beneath tree coverage, and horizontal surfaces like driveways and decks become host to organic growth that accelerates decay. A driveway left untreated for 18 months can accumulate a quarter-inch of moss and algae, making the surface slippery and potentially liable if guests slip. Failure to address these issues early means they accelerate, with algae sending root-like structures into concrete and moss trapping moisture against wood."
      ),
      para(
        "Research shows homes with strong curb appeal command 7 to 17% higher resale prices than similar properties with neglected exteriors. For homeowners in Edgemont Village or other premium North Vancouver neighbourhoods, professional cleaning often represents the single fastest return on investment before listing."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Soft Wash vs. Pressure Wash — Which Does Your Home Need?",
    cards: [
      {
        _key: key("card"),
        title: "Pressure Washing",
        body: "Uses high force (1,500 to 4,500 PSI) to blast away embedded dirt, oil stains, and grime. Works excellently for concrete driveways, brick, pavers, and hard surfaces where aggressive cleaning is safe.",
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
    _type: "richText",
    body: [
      await imageBlock(
        "/mint-sanitary-service-van-north-vancouver.jpg",
        "Mint Sanitary service van for pressure washing in North Vancouver"
      ),
      para(
        "Many homeowners assume that more pressure equals better cleaning. In reality, high pressure on wood or delicate surfaces causes expensive damage. Soft wash kills moss and algae at the source by breaking down cell structures with specialized detergents, preventing regrowth faster than pressure alone."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Pressure Washing We Offer in North Vancouver",
    tiles: [],
    customTiles: tileEntries,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Driveway Pressure Washing in North Vancouver",
    anchorId: "driveway-pressure-washing",
    body: drivewayBody,
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Driveway Pricing in North Vancouver",
    intro:
      "Professional driveway pressure washing costs $0.30 to $0.55 per square foot, generally $150 to $300 for most North Vancouver driveways, with a $100 to $200 minimum to cover travel and setup.",
    tiers: drivewayPricingTiers.map(([title, body, range]) => ({
      _key: key("tier"),
      title,
      range,
      body,
    })),
    notes: [
      "Add-ons: oil stain pre-treatment ($50 to $150) and driveway sealing ($0.15 to $0.30 per square foot). New customers save 10% on their first clean with code MINT26.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Deck and Patio Cleaning in North Vancouver",
    anchorId: "deck-patio-cleaning",
    body: deckPatioBody,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "House Washing in North Vancouver",
    anchorId: "house-washing",
    body: houseWashingBody,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Fence Washing in North Vancouver",
    anchorId: "fence-washing",
    body: fenceWashingBody,
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    intro:
      "We're not just another pressure washing company. Mint Sanitary is built on reliability, biodegradable methods, and results that protect your property and restore its curb appeal.",
    image: await uploadImage(
      "/eco-friendly-cleaning-products-north-vancouver.jpg",
      "Eco-friendly pressure washing solutions in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
  },
  {
    _key: key("sec"),
    _type: "gallery",
    heading: "See the Difference",
    images: galleryImagesArr,
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Service Areas: North Vancouver and Beyond",
    body: [
      para(
        "Mint Sanitary provides professional pressure washing and soft washing services throughout North Vancouver and the surrounding region. Whether you're in a waterfront property in Lower Lonsdale or a hillside home in Lynn Valley, our team delivers the same professional service, biodegradable methods, and 7-day availability."
      ),
      ...serviceAreaChips.map((area) => bullet(area)),
      paraWithLink("", "View All Service Areas", "/service-areas", ""),
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
    heading: "Get Your Free Pressure Washing Estimate Today",
    body: "No obligation. Our team will assess your surfaces, recommend the right method, and provide a clear quote. Available 7 days a week across all North Vancouver neighbourhoods. New customer? Use code MINT26 for 10% off your first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/contact",
  },
];

await replaceDoc("areaService", "pressure-washing", {
  title: "Pressure Washing in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "pressure-washing"),
  heroHeading: "Pressure Washing Services in North Vancouver",
  heroIntro:
    "North Vancouver's wet Pacific Northwest climate is the reason this page exists. Rain, coastal humidity, and heavy tree canopy create ideal conditions for moss, algae, and mildew on every exterior surface. This page covers our full lineup in one place: driveway cleaning, deck and patio cleaning, house washing, and fence washing. Call 236-688-3248 or use code MINT26 for 10% off your first service.",
  heroImage: await uploadImage(
    "/north-vancouver-skyline-pressure-washing-hero.webp",
    "Pressure washing services in North Vancouver"
  ),
  metaTitle: "Pressure Washing in North Vancouver | Mint Sanitary",
  metaDescription:
    "Pressure washing and soft washing in North Vancouver: driveways, decks, house siding, and fences. Eco-friendly methods, free estimates, 7 days a week.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver pressure washing migrated");
