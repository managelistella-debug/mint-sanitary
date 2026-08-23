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
 * /north-vancouver/window-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/window-cleaning-original
 * (WindowCleaningCategoryPageClient.tsx).
 *
 * This page merges THREE sub-services onto one URL via #anchors that
 * next.config.ts permanent redirects depend on:
 *   /north-vancouver/commercial-window-cleaning  -> #commercial-window-cleaning
 *   /north-vancouver/residential-window-cleaning -> #residential-window-cleaning
 *   /north-vancouver/window-screen-cleaning      -> #window-screen-cleaning
 * Each sub-service became its own Rich Text section, with `anchorId` set to
 * the exact original id on that section so the redirects keep landing
 * correctly. All copy verbatim (headings, paragraphs, list items, pricing
 * bullets), including the North-Vancouver-specific phrasing.
 *
 * ONE documented strip: the Commercial and Window Screen "Our Process"
 * ordered lists render in the source as `{i + 1}. {item}` (e.g. "1.
 * Pre-service assessment..."), a JSX-generated numeral prefix baked into the
 * visible text. Portable Text `listItem: "number"` blocks render inside a
 * real <ol>, which already supplies that same numbering via its own marker
 * (RichTextSection's `listItem.number` renderer emits no numeral of its
 * own), so the leading "1. " / "2. " text was dropped from each item string
 * to avoid a duplicate "1. 1." Residential's numbered steps used a title +
 * body two-line card with the number in a separate span badge, never baked
 * into the copy, so nothing was stripped there.
 *
 * Other placement decisions:
 *  - "Why Professional Window Cleaning Matters" and "Why DIY Window
 *    Cleaning Falls Short" are plain image+prose two-column blocks with no
 *    anchor of their own -> two separate Rich Text sections, images via
 *    imageBlock().
 *  - "Our 4 Window Cleaning Services" is a tile grid whose links point at
 *    the in-page anchors above (three of them) plus one external anchor on
 *    the post-construction-cleaning page, not at general /services/* pages,
 *    so per the mapping rules it could not become serviceTiles (refs-only).
 *    It became one Rich Text section: heading + image + paragraph + a real
 *    "Learn more" link per tile, preserving every href exactly.
 *  - Inside "Residential Window Cleaning", "Commercial Window Cleaning", and
 *    "Window Screen Cleaning", card-grid sub-blocks (Our Process steps,
 *    Building Heights We Serve, Fiberglass vs. Aluminum / Repair or
 *    Replacement) have no reusable card section left free on this page
 *    (whatsIncluded/processChecklist/schedules are already unused-but-don't
 *    fit the per-sub-service repeated shape needed here), so they stayed as
 *    Rich Text: an h3 per card title followed by its paragraph. Bulleted
 *    pricing breakdowns and numbered process lists became real Portable
 *    Text bullet/number lists (RichTextSection's PortableText config
 *    already renders both).
 *  - "Why Choose Mint Sanitary" (image left, accordion right) -> whyChoose,
 *    reusing the section's own image.
 *  - The six-photo "See the Difference" grid has no captions -> the new
 *    gallery section, via galleryImage() in source order.
 *  - Google Reviews -> plain testimonials section; this page's own bespoke
 *    review text is deliberately dropped in favor of the shared global
 *    review set, matching every other migrated page.
 *  - "Service Areas: North Vancouver and Beyond" -> Rich Text: the intro
 *    paragraph, the neighbourhood chip list as a bullet list, the map image,
 *    and the "View All Service Areas" link via paraWithLink.
 *  - Hero and the "Trusted by Local Organizations" client-logo strip are
 *    both rendered automatically by CmsPageShell and are not represented as
 *    sections here.
 *  - Small uppercase eyebrow labels that sat above an H2 purely as a visual
 *    pretitle ("Why It Matters", "Our Window Cleaning Services", "Our
 *    Work") are dropped — richText has no separate eyebrow slot (only
 *    heading + intro-below + body), and each label just restates words
 *    already in the H2 directly beneath it, so nothing informational is
 *    lost.
 */

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

/** Numbered list item (RichTextSection's PortableText config renders listItem: "number"). */
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

console.log("→ /north-vancouver/window-cleaning");

/* ── "Our 4 Window Cleaning Services" tile grid ─────────────────── */

const ourServices = [
  {
    title: "Residential Window Cleaning",
    image: "/window-cleaning-residential-north-vancouver.webp",
    href: "#residential-window-cleaning",
    description:
      "Interior and exterior cleaning for homes of all sizes, covering bungalows in Lynn Valley, larger properties in Deep Cove, and everything in between. We handle safe ladder work, accessible skylights, and thorough frame wiping.",
  },
  {
    title: "Commercial Window Cleaning",
    image: "/window-cleaning-commercial-north-vancouver.webp",
    href: "#commercial-window-cleaning",
    description:
      "Professional storefront and office building cleaning that keeps your business looking sharp. We schedule around your business hours to minimize disruption, with certified rope-access equipment for high-rise windows.",
  },
  {
    title: "Window Screen Cleaning",
    image: "/window-cleaning-screen-north-vancouver.webp",
    href: "#window-screen-cleaning",
    description:
      "Salt air and pollen clog screens fast in North Vancouver. We remove, deep clean, and reinstall interior and exterior screens, restoring airflow and cutting the allergen load in your home.",
  },
  {
    title: "Post-Construction Window Cleaning",
    image: "/window-cleaning-post-construction-north-vancouver.webp",
    href: "/north-vancouver/post-construction-cleaning/#post-construction-window-cleaning",
    description:
      "Remove construction dust, primer overspray, and debris after renovation projects. Thorough frame and sill cleaning readies your property for move-in or final inspection.",
  },
];

const ourServiceTiles = [];
for (const s of ourServices) {
  ourServiceTiles.push(await customTile(s));
}

/* ── Residential Window Cleaning (#residential-window-cleaning) ─── */

const residentialProcessSteps = [
  ["Free estimate", "We assess home size, window count, and any special needs like hard water spots or skylights, with transparent pricing and no pressure to book."],
  ["Scheduling", "We work 7 days a week and confirm scope, date, and time before our crew arrives."],
  ["Pre-cleaning inspection", "We check for hard water spots, screen damage, and frame issues before starting."],
  ["Professional cleaning", "We use eco-friendly, green-certified products safe for family and pets, with water-fed poles for high-access windows and drop cloths to protect landscaping."],
  ["Final walk-through", "We inspect every window with you. If you're not satisfied within 48 hours, we return and re-clean at no extra cost."],
];

const residentialPricing = [
  "1-story home (15 to 20 windows): approximately $200 to $250",
  "2-story home (25 to 35 windows): approximately $300 to $400",
  "3-plus story home (40+ windows): custom quote",
  "Exterior-only: 15 to 20% discount versus interior plus exterior",
  "Hard water spot treatment: add $50 to $150",
  "Screen repair or replacement: add $20 to $50 per screen",
  "Skylight or sunroom cleaning: add $75 to $150",
  "Recurring service: quarterly saves 15%, semi-annual saves 10%, annual saves 5%",
  "New customers: 10% off with code MINT26",
];

const residentialBody = [
  para(
    "Sparkling windows change how a North Vancouver home looks and feels. Clean glass brings mountain views into sharper focus and lets more natural light into every room. Mint Sanitary has served North Vancouver homeowners for years, delivering streak-free results with eco-friendly products and professional-grade equipment."
  ),
  heading("What's Included"),
  para(
    "Our standard residential service covers interior and exterior glass panes, window frames, screens, tracks, and sills. Hard water spot treatment is available as an add-on. We also clean skylights and specialty glass for an additional fee. We don't handle window repairs, frame rot treatment, or weatherstripping replacement, but we'll flag those issues if we spot them during the visit. We offer both interior-plus-exterior service (our standard) and exterior-only service at a discounted rate."
  ),
  heading("Homes We Service"),
  para(
    "Single-family detached homes, townhouses and duplexes, condos and strata units, newly constructed homes needing post-construction cleanup, older homes with legacy wood or single-pane windows, and multi-story estates in neighbourhoods like Lynn Valley and Deep Cove. We also work with Low-E coated, tinted, and skylight glass, adjusting our technique for each type."
  ),
  heading("Our Process"),
  ...residentialProcessSteps.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("Hard Water Spot Treatment"),
  para(
    "North Vancouver's mineral-rich water leaves stubborn deposits on glass. Fresh spots respond to standard cleaning, but aged mineral buildup can etch glass permanently if left untreated, and etched glass can only be fixed by replacing the pane. We use eco-friendly, acid-based treatments designed for mineral removal, plus deionized water rinses that prevent new spotting during the clean itself. Professional hard water restoration typically runs $100 to $500 depending on severity; glass replacement, if etching has occurred, can exceed $500 per pane, which is why early treatment saves money."
  ),
  para(
    "How often. Most North Vancouver homeowners benefit from professional window cleaning once or twice a year, in spring and fall. Spring removes winter grime and road salt; fall prepares windows for the wet season. Homes near trees, construction, or busy roads may benefit from quarterly service."
  ),
  heading("Pricing"),
  ...residentialPricing.map(bullet),
  paraWithLink(
    "Overall, residential window cleaning in North Vancouver runs $150 to $400 per cleaning for most homes. Visit ",
    "/rates",
    "/rates",
    " for current pricing, or call 236-688-3248 for a free estimate."
  ),
];

/* ── Commercial Window Cleaning (#commercial-window-cleaning) ───── */

const buildingHeights = [
  ["Ground-level storefronts", "Monthly cleaning is standard here, since foot traffic and weathering degrade appearance quickly. This matters most in retail corridors like Lower Lonsdale and Seymour Heights."],
  ["Mid-rise buildings (3 to 10 stories)", "Typically quarterly or bi-monthly exterior service, using safety harnesses and fall protection systems that comply with WorkSafeBC regulations."],
  ["High-rise buildings (10+ stories)", "Demand certified rope access systems, elevated work platforms, and IRATA-trained technicians, plus documented fall protection plans and anchor system inspection."],
];

const commercialProcessSteps = [
  "Pre-service assessment of glass type, building height, and access points",
  "Safety setup, including anchor points, harnesses, and equipment testing",
  "Exterior cleaning that removes salt spray deposits and buildup",
  "Interior common area cleaning of lobbies, hallways, and conference rooms",
  "Frame and sill treatment to remove oxidized material, mold, and algae",
  "Final inspection with before-and-after photo documentation",
];

const commercialBody = [
  para(
    "Clean windows signal professional operations and protect your property investment. For commercial properties across North Vancouver, coastal salt spray and frequent rain accelerate grime buildup on glass, making regular maintenance part of responsible building management."
  ),
  heading("What's Included"),
  para(
    "Full exterior and interior glass cleaning, frame and sill cleaning, removal of grime and buildup, and interior common area windows like lobbies, hallways, and skylights. We customize scope to your building, with before-and-after photo documentation for your records. Service covers storefront glass and entry doors, multi-story office building windows, strata common area windows, window frames and sills, skylights and overhead glass, and industrial or warehouse facility windows."
  ),
  heading("Building Heights We Serve"),
  ...buildingHeights.flatMap(([title, body]) => [heading(title), para(body)]),
  heading("Insurance and Safety"),
  para(
    "We carry general liability insurance with $1 to $2 million in coverage, depending on project scope, and maintain full WorkSafeBC compliance for all commercial work, including high-rise projects. A Certificate of Insurance is available on request for property managers, building owners, and strata councils. High-rise work follows WorkSafeBC fall protection requirements, which apply to work above 3 meters, using certified anchor systems, harnesses, and IRATA-trained crews."
  ),
  heading("Scheduling"),
  para(
    "We offer after-hours availability, including early morning, evening, weekend, and holiday appointments, so cleaning doesn't interrupt your business. For strata properties, we give 7 days' notice by email and coordinate with property managers and building bylaws across North Vancouver."
  ),
  heading("Our Process"),
  ...commercialProcessSteps.map(numberItem),
  para(
    "Recommended frequency. High-traffic retail storefronts typically need monthly cleaning. Standard office buildings do well on a quarterly schedule at minimum. Strata common areas often need monthly interior windows and bi-monthly or quarterly exterior service. Industrial facilities typically need service every 4 to 6 months depending on dust exposure. We recommend a seasonal deep clean in spring (April to May) and fall (September to October) for all commercial properties."
  ),
  heading("Pricing"),
  paraWithLink(
    "Ground-level storefronts are often priced at $1 to $2 per pane; standard commercial projects run $5 to $7 per pane. Larger buildings are commonly priced by square footage, from $0.50 to $2.50 per square foot depending on size and access complexity. Recurring contracts receive 10 to 15% discounts compared to one-time service. Every quote follows a free, on-site assessment, and new customers save 10% with code MINT26. Visit ",
    "/rates",
    "/rates",
    " for details."
  ),
  para(
    "Property appearance connects directly to business performance. Well-maintained buildings support stronger tenant satisfaction, and clean storefronts influence how customers perceive a business before they walk in the door."
  ),
];

/* ── Window Screen Cleaning (#window-screen-cleaning) ────────────── */

const screenProcessSteps = [
  "Initial assessment of material type and debris level",
  "Safe removal of screens, laid flat to prevent bending",
  "Pre-rinse to loosen debris",
  "Deep clean with soft-bristle brushes and eco-friendly solution",
  "Final low-pressure rinse to remove all soap residue",
  "Drying and careful reinstallation with proper fit",
];

const screenBody = [
  para(
    "Dirty window screens don't just look bad. They trap dust, pollen, and mold spores, restricting airflow and letting allergens back into your home. North Vancouver's pollen season runs from February through October, peaking March to July, and coastal humidity in areas like Deep Cove and Lower Lonsdale creates ideal conditions for mold growth on screens."
  ),
  heading("What's Included"),
  para(
    "Professional removal of screens with damage-free handling, deep cleaning with soft-bristle brushes and a biodegradable solution, frame and sill dusting, careful reinstallation with latch verification, and an optional damage assessment with honest repair or replacement guidance. This works for fiberglass, aluminum, and specialty mesh, on older homes and new builds alike."
  ),
  heading("Our Process"),
  ...screenProcessSteps.map(numberItem),
  para(
    "A typical North Vancouver home with 8 to 12 screens takes 1 to 2 hours, depending on soil level and whether repairs are needed."
  ),
  heading("Health and Air Quality"),
  para(
    "Clogged screens trap pollen, dust mites, and mold spores that pass through into your home whenever you open a window. Professional screen cleaning reduces indoor allergen load, which matters most during North Vancouver's spring pollen peak. In neighbourhoods with heavy tree coverage like Lynn Valley, a spring deep clean before pollen season and a fall refresh after summer debris buildup make the biggest difference."
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
    "How often. Most North Vancouver homes do well with professional screen cleaning 2 to 4 times a year. During peak allergy season, monthly cleaning benefits households with pollen sensitivities. Homes near mature trees, high-traffic areas, or with pets may need more frequent service."
  ),
  heading("Pricing and Combo Savings"),
  para(
    "Screen cleaning pricing depends on the number of screens, material, and any repairs needed, available through a free quote. Combining screen cleaning with a window cleaning visit typically comes with a bundled discount, and screens are cleaned first so both finish looking their best. New customers save 10% with code MINT26."
  ),
];

/* ── Why Choose Mint Sanitary ─────────────────────────────────────── */

const whyChooseItems = [
  ["7-Day Availability", "We're open weekdays, weekends, and holidays. Flexible scheduling accommodates your busy life or business hours. Weekday or weekend, we're here."],
  ["Eco-Friendly Cleaning Products", "Mint Sanitary uses non-toxic, safe solutions for children, pets, and landscaping. Our commitment to environmental responsibility aligns with North Vancouver's values."],
  ["Free Estimates and Transparent Pricing", "No surprises. You know costs upfront. Custom quotes reflect your window count, accessibility, and any add-on services."],
  ["Local North Vancouver Expertise", "Our team is trained to handle salt-air spotting and hard-water stains unique to our coastal region. Quick response times because we're local."],
  ["Satisfaction Guaranteed", "Get 10% off your first clean with code MINT26. Not satisfied with your cleaning? We'll re-clean at no cost."],
];

/* ── Gallery ──────────────────────────────────────────────────────── */

const galleryImages = [
  ["/window-cleaning-floor-to-ceiling-forest-view.webp", "Living room with floor-to-ceiling windows and clear glass overlooking forest views"],
  ["/window-cleaning-modern-farmhouse-exterior-dusk.webp", "Modern farmhouse exterior with large black-framed windows at dusk"],
  ["/window-cleaning-commercial-glass-facade.webp", "Commercial building with expansive clean glass facade and reflections"],
  ["/window-cleaning-condo-bright-windows-city-view.webp", "Bright condominium interior with spotless windows and city views"],
  ["/window-cleaning-retail-storefront-glass.webp", "Large retail storefront with clean reflective glass panels"],
  ["/window-cleaning-residential-open-concept-windows.webp", "Open-concept home with natural light through clear residential windows"],
];

const galleryItems = [];
for (const [src, alt] of galleryImages) {
  galleryItems.push(await galleryImage(src, alt));
}

/* ── Service Areas ────────────────────────────────────────────────── */

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Seymour Heights",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "Norgate",
  "Dollarton",
];

const serviceAreasBody = [
  para(
    "Mint Sanitary is based on the North Shore and provides window cleaning services across all North Vancouver neighborhoods and the wider Greater Vancouver region. Our local team ensures quick scheduling and response times."
  ),
  ...serviceAreas.map(bullet),
  paraWithLink("", "View All Service Areas", "/service-areas", ""),
];

/* ── FAQ ──────────────────────────────────────────────────────────── */

const faqItems = [
  ["How often should windows be cleaned in North Vancouver?", "Most North Vancouver homeowners benefit from professional window cleaning once or twice a year, ideally in spring and fall. Spring removes winter grime and road salt; fall prepares glass for the wet season. Homes near trees, construction, or busy roads, and coastal properties near Deep Cove, may need quarterly service."],
  ["How often should commercial windows be cleaned in North Vancouver?", "Most office buildings in North Vancouver do well with quarterly cleaning to address seasonal changes and salt spray accumulation. Retail storefronts and ground-level windows benefit from monthly cleaning to maintain curb appeal. Strata common areas typically need monthly interior windows and bi-monthly exterior service."],
  ["How often should window screens be cleaned in North Vancouver?", "Most North Vancouver homes benefit from professional screen cleaning 2 to 4 times a year. During peak allergy season, from March to July, monthly cleaning helps households with pollen sensitivities. Homes near mature trees or with pets may need more frequent visits."],
  ["How much does residential window cleaning cost in North Vancouver?", "Residential window cleaning in North Vancouver typically runs $150 to $400 per cleaning, depending on home size and window count. A 1-story home runs approximately $200 to $250, a 2-story home runs $300 to $400, and larger homes get a custom quote. Call 236-688-3248 or visit /rates for a free estimate."],
  ["How much does commercial window cleaning cost in North Vancouver?", "Pricing depends on building size, height, and access. Ground-level storefronts in North Vancouver often run $1 to $2 per pane, with standard commercial projects at $5 to $7 per pane or $0.50 to $2.50 per square foot for larger buildings. Recurring contracts save 10 to 15% compared to one-time service."],
  ["How much does window screen cleaning cost in North Vancouver?", "Pricing depends on the number of screens, material, and any repairs needed, so we provide a free, no-obligation quote. Screen repair or re-screening in North Vancouver typically runs $15 to $50 per screen. Combining screen cleaning with a window cleaning visit often comes with a bundled discount."],
  ["Are your window cleaning products safe for families, pets, and landscaping in North Vancouver?", "Yes. Mint Sanitary uses eco-friendly, biodegradable products across all our North Vancouver services, residential, commercial, and screen cleaning alike. They're non-toxic, safe for children and pets, and gentle on the landscaping around your North Vancouver property."],
  ["What areas of North Vancouver do you serve?", "We serve all of North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also extend service to West Vancouver, Vancouver, Burnaby, and the wider Greater Vancouver region. Call 236-688-3248 to confirm availability at your North Vancouver address."],
  ["What's included in residential window cleaning in North Vancouver?", "Our standard North Vancouver residential package covers interior and exterior glass, window frames, screens, tracks, and sills. Hard water spot treatment, skylights, and specialty glass are available as add-ons. We'll flag window repairs or frame issues if we spot them, though we don't perform those repairs ourselves."],
  ["What's included in commercial window cleaning in North Vancouver?", "Full exterior and interior glass cleaning, frame and sill cleaning, and interior common area windows in lobbies, hallways, and conference rooms. We assess each North Vancouver property individually and document work with before-and-after photos."],
  ["What's included in window screen cleaning in North Vancouver?", "Professional removal, deep cleaning with soft-bristle brushes and biodegradable solution, sill and track dusting, and careful reinstallation with latch verification. We also offer an optional damage assessment with honest repair or replacement guidance."],
  ["How long does window cleaning take at a North Vancouver home?", "For a typical 1 to 3-story North Vancouver home with 20 to 35 windows, expect 2 to 4 hours. Larger homes, homes with many skylights, or properties with severe hard water spotting may take longer. We give you a specific time estimate during your free quote."],
  ["How long does window screen cleaning take in North Vancouver?", "A typical North Vancouver home with 8 to 12 screens takes 1 to 2 hours, depending on soil level and whether repairs are needed."],
  ["Do you clean windows in the rain in North Vancouver?", "Yes, we can often work in light rain, since pure water rinses are effective in damp conditions. Heavy rain or storms may require rescheduling for safety, and we rebook affected North Vancouver appointments at no penalty."],
  ["What safety measures do you use for high-rise window cleaning in North Vancouver?", "High-rise work in North Vancouver follows WorkSafeBC fall protection requirements, mandatory for work above 3 meters. We use certified anchor systems, safety harnesses, rope access equipment, and IRATA-trained technicians, with documented safety plans for every project."],
  ["Do you carry insurance for commercial window cleaning in North Vancouver?", "Yes. Mint Sanitary carries general liability insurance with $1 to $2 million in coverage, depending on project scope, and maintains full WorkSafeBC compliance for commercial and high-rise work across North Vancouver. A Certificate of Insurance is available on request."],
  ["Can you clean high windows, skylights, and specialty glass in my North Vancouver home?", "Yes. We safely clean second-story, third-story, and taller windows using professional-grade water-fed poles and safety-approved techniques. Skylights, Low-E glass, and other specialty windows are available as add-on services, and we're fully insured for high-access work."],
  ["What's the difference between window cleaning and screen cleaning in North Vancouver? Can you do both?", "Window cleaning covers glass panes, interior and exterior. Screen cleaning covers the mesh, frame, and sill. Most North Vancouver customers combine both services at a bundled rate, with screens cleaned first so both finish looking their best."],
  ["Can dirty window screens affect my allergies or indoor air quality in North Vancouver?", "Yes. Clogged screens trap pollen, dust mites, and mold spores that pass through when you open a window. North Vancouver's extended pollen season, from February through October, makes clean screens especially important for allergy sufferers."],
  ["What if I'm not satisfied with my window cleaning in North Vancouver?", "We stand behind our work with a 48-hour re-clean guarantee. If you're not completely satisfied, contact us within 48 hours and we'll return to re-clean the affected windows in your North Vancouver home at no extra cost."],
  ["Do you offer recurring maintenance plans in North Vancouver?", "Yes. Residential customers can choose quarterly (15% off), semi-annual (10% off), or annual (5% off) plans. Commercial customers can set up monthly, bi-monthly, or quarterly contracts with discounted rates. Recurring North Vancouver customers also get priority scheduling."],
];

/* ── Assemble ─────────────────────────────────────────────────────── */

const heroImage = await uploadImage(
  "/window-cleaning-hero-north-vancouver.webp",
  "Window cleaning in North Vancouver"
);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Professional Window Cleaning Matters in North Vancouver",
    body: [
      await imageBlock(
        "/north-vancouver-professional-window-cleaning-residential.webp",
        "Professional residential window cleaner on ladder with safety equipment in North Vancouver"
      ),
      para(
        "North Vancouver's unique coastal environment presents distinct challenges that most homeowners underestimate. The combination of high rainfall, ocean-influenced humidity, and construction activity in neighborhoods like Edgemont Village and Seymour Heights creates a perfect storm for window deterioration. Rainwater dries on glass leaving mineral deposits that build up over weeks. Salt air from Burrard Inlet accelerates spotting and can corrode window frames, screens, and hardware if left untreated."
      ),
      para(
        "Clean windows maximize natural light entering your home or business. In North Vancouver's climate, where overcast days dominate, this boost to available daylight matters for energy savings and mental health during darker months. Cleaner windows also reduce allergen buildup on frames and sills, affecting air quality and aggravating respiratory sensitivities. First impressions from clean windows also influence property values and rental inquiries."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why DIY Window Cleaning Falls Short",
    body: [
      para(
        "Streaking and haze plague most DIY attempts. Tap water contains dissolved minerals that leave residue as water evaporates. In North Vancouver, where salt air is already an issue, standard tap water compounds the problem. You end up with windows that look worse after cleaning than before."
      ),
      para(
        "Safety hazards intensify when working at height. Multi-story homes, skylights, second-floor windows, and exterior frames require ladder work that homeowners often underestimate. Falls from ladders represent a significant injury risk, especially on sloped roofs or wet surfaces common in our rainy climate."
      ),
      para(
        "Professional window cleaners use water-fed poles with purified water systems that eliminate mineral residue causing spotting. Our trained team also catches maintenance issues — frame rot, degraded seals, hardware corrosion — before they require expensive repairs."
      ),
      await imageBlock(
        "/north-vancouver-window-cleaning-skyline-harness.webp",
        "Professional window cleaner with harness on high-rise residential glass overlooking North Vancouver and Vancouver skyline"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Window Cleaning We Offer",
    tiles: [],
    customTiles: ourServiceTiles,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Residential Window Cleaning in North Vancouver",
    anchorId: "residential-window-cleaning",
    body: residentialBody,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Commercial Window Cleaning in North Vancouver",
    anchorId: "commercial-window-cleaning",
    body: commercialBody,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Window Screen Cleaning in North Vancouver",
    anchorId: "window-screen-cleaning",
    body: screenBody,
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    intro:
      "We're not just another window cleaning company. Mint Sanitary is built on reliability, transparency, and eco-conscious practices that make a real difference for North Vancouver families and businesses.",
    image: await uploadImage(
      "/mint-sanitary-service-van-north-vancouver.jpg",
      "Mint Sanitary service van"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  {
    _key: key("sec"),
    _type: "gallery",
    heading: "See the Difference",
    images: galleryItems,
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Service Areas: North Vancouver and Beyond",
    body: serviceAreasBody,
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
    heading: "Ready for Sparkling Windows in North Vancouver?",
    body: "Our window cleaning experts are prepared to deliver sparkling results tailored to your North Vancouver home or business. Call 236-688-3248 or email hello@mintsanitary.com. Use promo code MINT26 for 10% off your first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/contact",
  },
];

await replaceDoc("areaService", "window-cleaning", {
  title: "Window Cleaning Services in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "window-cleaning"),
  heroHeading: "Window Cleaning Services in North Vancouver",
  heroIntro:
    "North Vancouver's windows work harder than most. Coastal salt air, frequent rain, and mineral-rich tap water combine to leave hard water spotting, salt residue, and grime that a quick wipe-down won't fix. This page covers our full lineup in one place: residential, commercial, and window screen cleaning. Seven-day availability, free estimates, and 10% off your first clean with code MINT26. Call 236-688-3248 today.",
  heroImage,
  metaTitle: "Window Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "Residential, commercial & screen window cleaning in North Vancouver. Eco-friendly, insured, 7-day availability. 10% off first clean with MINT26.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver window cleaning migrated");
