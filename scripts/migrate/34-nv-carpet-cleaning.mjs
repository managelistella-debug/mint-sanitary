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
 * /north-vancouver/carpet-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/carpet-cleaning-original.
 *
 * This is the most structurally complex page migrated so far: three full
 * sub-service mini-pages (Area Rug Cleaning, Carpet Steam Cleaning, Carpet
 * Stain Removal) were merged onto one URL via #anchors on the original page,
 * and those anchors are permanent-redirect targets in next.config.ts
 * (/north-vancouver/area-rug-cleaning → .../carpet-cleaning#area-rug-cleaning,
 * etc.), so the section carrying each sub-service's H2 gets an explicit
 * `anchorId` matching the original id exactly.
 *
 * All copy is verbatim. Placement / judgment calls:
 *  - "Our Carpet Cleaning Service Types" was a 4-tile grid where 3 of 4 tiles
 *    link to in-page anchors on this same page and only the 4th (Drapes &
 *    Curtains) points at a real page, so — same reasoning as the general
 *    /services/carpet-cleaning migration — all 4 became one Rich Text
 *    section (image + heading + paragraph with a "Learn More" link per
 *    item) rather than a serviceTiles section, which only accepts
 *    cleaningType references.
 *  - Each sub-service's numbered process steps (4-step rug process, 4-step
 *    steam-cleaning process, 5-step stain-removal process) became
 *    heading+paragraph pairs inside Rich Text. There's no numbered-badge UI
 *    in Rich Text, but the step titles never carried a "Step 1:"-style
 *    numeric prefix in the source text itself (numbering was purely a
 *    separate UI badge), so nothing needed stripping — titles are verbatim.
 *  - Pricing boxes: Area Rug and Carpet Stain Removal pricing broke cleanly
 *    into title/range/body tiers (e.g. "Wool rugs" / "$3 to $8 per square
 *    foot"), so those became dedicated `pricing` sections with the trailing
 *    paragraph as `notes`. One Area Rug bullet ("Optional add-ons: pet
 *    treatment, protectant, rush drying") has no numeric range, so it's a
 *    tier with an empty range and the add-on list as `body` — the pricing
 *    card just hides the empty range line. Carpet Steam Cleaning's pricing
 *    was a single sentence with no tiers to speak of, so per the fallback
 *    rule it stayed as a paragraph (with its "rates page" link preserved)
 *    inside that sub-service's Rich Text instead of a pricing section.
 *  - Each sub-service's content had to be split across multiple sections to
 *    preserve original visual order once pricing was pulled into its own
 *    section type (e.g. Area Rug: Rich Text for intro/rug-types/process →
 *    Pricing → Rich Text again for "Caring for Your Rug", which came after
 *    the pricing box on the original page). Only the first chunk of each
 *    sub-service carries the anchorId, since that's where a redirect needs
 *    to land.
 *  - The three hero trust badges ("Eco-Friendly Products", "Fast-Dry
 *    Technology", "10% Off With Code MINT26") have no slot in CmsPageShell's
 *    fixed hero (title/intro/image/CTAs only) and aren't prose, so they're
 *    dropped as decorative chrome — same treatment as every other migrated
 *    page's hero eyebrow/badge decoration. Nothing is actually lost: all
 *    three facts already appear verbatim elsewhere on the page (Why Choose
 *    Mint Sanitary items, the MINT26 mentions in pricing/CTA copy).
 *  - Mid-page CTA buttons and the "View All Service Areas" / "View Rates"
 *    buttons are preserved as real links (paraWithLink, or whyChoose's own
 *    ctaHref/ctaLabel) rather than dropped, since they're literal <a href>
 *    elements on the source page.
 *  - Per the site-wide policy already applied to every other migrated page,
 *    the page's own bespoke Google reviews (Sarah M., James T., etc.) are
 *    dropped in favor of the shared site-wide review set via a plain
 *    `testimonials` section.
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

const serviceTiles = [
  {
    title: "Area Rug Cleaning",
    href: "#area-rug-cleaning",
    image: "/area-rug-cleaning-north-vancouver.jpg",
    description:
      "Hand-wash cleaning for delicate area rugs using specialized techniques that preserve color and texture, including Persian, Turkish, wool, and handmade rugs. Free pickup and delivery available.",
  },
  {
    title: "Carpet Steam Cleaning",
    href: "#carpet-steam-cleaning",
    image: "/carpet-steam-cleaning-north-vancouver.jpg",
    description:
      "Deep cleaning using hot water extraction to remove embedded dirt, allergens, and stains from residential and commercial carpet, priced per room starting at $60.",
  },
  {
    title: "Carpet Stain Removal",
    href: "#carpet-stain-removal",
    image: "/carpet-stain-removal-north-vancouver.jpg",
    description:
      "Expert stain removal for pet accidents, food spills, wine, ink, and other stubborn marks using targeted treatments and 200 to 500 PSI extraction equipment.",
  },
  {
    title: "Drapes & Curtains Cleaning",
    href: "/north-vancouver/drapes-curtains-cleaning/",
    image: "/drapes-curtains-cleaning-north-vancouver.webp",
    description:
      "Professional cleaning for all fabric types to remove dust, allergens, and odors while maintaining fabric integrity.",
  },
];

const rugTypes = [
  "Persian and Oriental rugs",
  "Wool rugs and silk rugs",
  "Synthetic, Kilim, and tribal rugs",
  "Shag, berber, and textured rugs",
  "Natural fiber rugs, including jute, sisal, and seagrass",
  "Antique and heirloom rugs",
];

const rugProcessSteps = [
  ["Free assessment and inspection", "We inspect the rug in your North Vancouver home, test for dye stability, identify any damage, and plan the safest approach for that specific rug."],
  ["Pickup and transport", "For most North Vancouver homes, we roll, wrap, and transport the rug to our facility. Rugs too large or delicate to move safely can be cleaned in-home instead."],
  ["Hand-wash cleaning", "We pre-spot stains, hand-wash with plant-based non-toxic solutions, use low-moisture extraction, and rinse fully so no residue is left behind."],
  ["Controlled drying and return", "The rug dries in a climate-controlled facility, typically 3 to 5 days, then goes through a quality check before free delivery back to your North Vancouver home."],
];

const rugCareTips = [
  "Vacuum regularly with gentle settings on delicate rugs",
  "Blot spills immediately; don't rub them",
  "Use rug pads to prevent slipping and reduce wear",
  "Rotate rugs quarterly to distribute wear evenly",
  "Address stains fast for better outcomes",
];

const rugPricingTiers = [
  ["Synthetic rugs", "$1 to $4 per square foot", ""],
  ["Wool rugs", "$3 to $8 per square foot", ""],
  ["Silk and Oriental rugs", "$5 to $8+ per square foot", ""],
  ["Optional add-ons", "", "pet treatment, protectant, rush drying"],
];

const steamWhyChoose = [
  "The deepest clean available for North Vancouver carpet",
  "Sanitization power from 200°F+ heat",
  "Pet-friendly results with enzymatic treatment for urine and odor",
  "Warranty protection for your carpet investment",
  "Long-lasting results with no sticky residue left behind",
];

const steamWhatsIncluded = [
  "Professional pre-inspection and carpet fiber assessment",
  "Eco-friendly pre-treatment of stains and high-traffic zones",
  "Commercial-grade hot water extraction cleaning",
  "Spot treatment and light furniture moving",
  "Detailed drying guidance and a satisfaction guarantee",
];

const steamProcessSteps = [
  ["Pre-inspection and assessment", "We identify high-traffic zones and stains, and test delicate or wool carpet for colorfastness before treatment."],
  ["Targeted pre-treatment", "Eco-friendly pre-treatment goes on for 10 to 15 minutes. Pet odors get enzymatic pre-treatment to neutralize urine compounds at the source."],
  ["Hot water extraction", "Commercial-grade equipment injects hot water and cleaning solution while extracting the dirty water, typically with 2 to 3 passes per section."],
  ["Grooming, final extraction, and drying setup", "We groom the pile, make final extraction passes, and set up airflow. Most North Vancouver carpet dries within 6 to 12 hours."],
];

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
  ["Assessment", "We examine the stain under normal and UV light, estimate its age, and check carpet fiber type before choosing a treatment."],
  ["Pre-treatment", "An eco-friendly pre-spray goes on based on stain chemistry. Pet stains get enzymatic treatment, and we respect proper dwell time."],
  ["Extraction", "Using professional-grade equipment, we perform hot water or hot carbonated extraction to pull dissolved stain particles out of the carpet."],
  ["Secondary spot treatment", "Stubborn stains get a secondary treatment formula and focused extraction. Some need two or three applications."],
  ["Final inspection", "We confirm results under proper lighting and give drying guidance. Optional carpet protectant can be added."],
];

const stainPricingTiers = [
  ["Single stain removal", "$120 to $180", ""],
  ["Multiple stains (3+)", "$200 to $280", ""],
  ["Pet stain and odor treatment", "$150 to $240", ""],
  ["Optional carpet protectant", "$20 to $40", ""],
];

const whyChooseItems = [
  ["Eco-Friendly & Safe Cleaning Products", "We use non-toxic, eco-friendly products that are safe for children, pets, and sensitive individuals. Our solutions are free from harsh chemicals and harmful fumes."],
  ["7-Day Availability", "We're open 7 days a week to fit your schedule with same-day estimates and flexible appointment times whenever possible."],
  ["Free Estimates & Transparent Pricing", "No surprises. We assess carpet condition, discuss your needs, and provide clear pricing for carpet cleaning in North Vancouver."],
  ["Residential, Commercial & Industrial Experience", "From townhouses in Lynn Valley to office buildings in Lower Lonsdale, we clean all property types and fiber conditions."],
  ["Fast-Dry Technology", "Advanced extraction leaves carpets nearly dry. Most homes see dry times between 4 and 12 hours depending on humidity and airflow."],
];

const galleryImages = [
  ["/carpet-cleaning-vacuum-lines-bedroom-north-vancouver.webp", "Bedroom carpet with professional vacuum lines after cleaning"],
  ["/carpet-cleaning-commercial-office-pattern-carpet.webp", "Commercial office carpet with geometric pattern after maintenance cleaning"],
  ["/carpet-cleaning-living-room-plush-carpet.webp", "Bright living room with clean plush carpet and natural light"],
  ["/carpet-cleaning-grey-carpet-vacuum-tracks.webp", "Light grey carpet with visible vacuum tracks in a clean room"],
  ["/carpet-cleaning-beige-carpet-bright-room.webp", "Beige wall-to-wall carpet in a bright empty room after cleaning"],
  ["/carpet-cleaning-commercial-carpet-hallway.webp", "Commercial hallway with clean patterned office carpeting"],
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Norgate",
  "Seymour Heights",
  "Dollarton",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const faqItems = [
  ["How often should carpets be professionally cleaned in North Vancouver?", "Most North Vancouver homes do well with cleaning every 12 to 18 months. With pets or kids in the house, every 6 to 12 months keeps odors and allergens under control, which matters given how much moisture North Vancouver's climate already adds to the mix."],
  ["Do you offer commercial carpet cleaning in North Vancouver?", "Yes. We clean carpet in North Vancouver offices and commercial hallways as well as homes, and we can work around business hours to avoid disrupting your day."],
  ["Do you offer same-day carpet cleaning in North Vancouver?", "Often, yes. Call 236-688-3248 with your details and we'll schedule same-day or next-day service in North Vancouver depending on availability. We work seven days a week."],
  ["Are your cleaning products safe for kids and pets in North Vancouver homes?", "Yes. All products we use in North Vancouver homes are eco-friendly, plant-based, and non-toxic, with no harsh chemicals or fumes. Treated areas are safe once dry."],
  ["What is carpet steam cleaning in North Vancouver?", "It's the common name for hot water extraction, the deep-cleaning method carpet manufacturers require for warranty protection. We heat water to 200 to 230°F, inject it with an eco-friendly cleaning solution, and extract it with commercial-grade equipment, reaching dirt and allergens a vacuum in a North Vancouver home can't touch."],
  ["How long does carpet steam cleaning take in North Vancouver?", "A typical 3-bedroom North Vancouver home takes 2 to 4 hours, depending on square footage and carpet condition. We'll confirm a specific timeline during your free estimate."],
  ["What's the drying time after carpet steam cleaning in North Vancouver?", "Most North Vancouver carpet dries within 6 to 12 hours with good airflow. We set up fans and give you specific guidance; just avoid placing heavy furniture back for at least 6 hours."],
  ["Will carpet steam cleaning help with allergens in my North Vancouver home?", "Yes. Hot water extraction reduces dust mites by roughly 87% and removes 94%+ of allergens, including pet dander, pollen, and mold spores, which matters in North Vancouver's damp climate when windows stay closed for months at a time."],
  ["Can I steam clean a new carpet installation in North Vancouver?", "Yes, but we recommend waiting 6 to 8 weeks after installation in your North Vancouver home so the new-carpet sizing treatment can set properly first."],
  ["Do you move furniture during carpet steam cleaning in North Vancouver?", "Yes. We move light to medium furniture such as sofas, chairs, and tables as part of the North Vancouver service. Heavier or specialty pieces get discussed during your estimate."],
  ["How quickly should I call for stain removal in North Vancouver?", "The faster, the better. Fresh spills respond best to treatment within hours. Calling within 24 hours of a spill in North Vancouver gives us the best chance at complete removal, though we successfully treat set-in stains that have been sitting for weeks too."],
  ["Can you remove pet stains permanently in North Vancouver?", "Yes, in most cases. Pet urine contains uric acid crystals that can reactivate if not fully removed. We use enzymatic treatments in North Vancouver homes specifically designed to break down these crystals and eliminate odor at the source."],
  ["What's the drying time after stain removal in North Vancouver?", "Our extraction method removes 85 to 95% of moisture, so North Vancouver carpet typically dries in 4 to 6 hours after stain treatment, versus 24+ hours after a rental machine."],
  ["What stains can't be removed from North Vancouver carpets?", "Bleach or chemical damage, fiber melting from heat, very old dye-based marker or ink, and rust or mineral stains in some cases can't be fully removed. We'll assess your North Vancouver carpet during a free estimate and give you a straight answer rather than promise a result we can't deliver."],
  ["How much does carpet stain removal cost in North Vancouver?", "Single stain removal in North Vancouver runs $120 to $180, multiple stains (3+) run $200 to $280, and pet stain plus odor treatment runs $150 to $240. All quotes are free, and new customers can use code MINT26 for 10% off."],
  ["How often should area rugs be professionally cleaned in North Vancouver?", "For North Vancouver homes, we recommend professional cleaning every 12 to 18 months for medium-traffic rugs, or annually for high-traffic areas and homes with pets or kids. North Vancouver's damp climate makes regular cleaning especially important to prevent mold and mildew."],
  ["Do you offer pickup and delivery for area rug cleaning in North Vancouver?", "Yes. Free pickup and delivery comes with qualifying orders for North Vancouver residents. We handle the logistics; you just schedule the appointment, and we'll confirm during your free estimate call whether your address qualifies."],
  ["How much does area rug cleaning cost in North Vancouver?", "Pricing ranges from $1 to $8+ per square foot depending on material. Synthetic rugs in North Vancouver start at $1 to $4/sq ft, wool at $3 to $8/sq ft, and delicate Oriental or silk rugs at $5 to $8+/sq ft. Call 236-688-3248 for a specific quote."],
  ["Is professional rug cleaning safe for antique and wool rugs in North Vancouver?", "Yes, when done by trained professionals. Antique and wool rugs need specialized care. Our North Vancouver team tests dyes and inspects for fragile areas before cleaning, adjusting the process to protect heirloom pieces and preserve wool's softness and color."],
];

console.log("→ /north-vancouver/carpet-cleaning");

const rugProcessBody = [];
for (const [title, body] of rugProcessSteps) {
  rugProcessBody.push(heading(title), para(body));
}

const steamProcessBody = [];
for (const [title, body] of steamProcessSteps) {
  steamProcessBody.push(heading(title), para(body));
}

const stainProcessBody = [];
for (const [title, body] of stainProcessSteps) {
  stainProcessBody.push(heading(title), para(body));
}

const serviceTileEntries = [];
for (const item of serviceTiles) {
  serviceTileEntries.push(await customTile(item));
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Professional Carpet Cleaning Matters in North Vancouver",
    body: [
      await imageBlock(
        "/eco-friendly-carpet-stain-removal-north-vancouver.jpg",
        "Eco-friendly carpet stain removal in North Vancouver"
      ),
      para(
        "Carpet in a North Vancouver home works harder than carpet almost anywhere else in the region. Rain rolls in off the North Shore mountains for months at a time, humidity stays high, and wet shoes, boots, and paws track moisture in from Lower Lonsdale to Deep Cove. That moisture settles into carpet fibers and padding, and it doesn't just sit there quietly. It feeds mold, mildew, and dust mites, and it locks in odor that a vacuum can't touch."
      ),
      para(
        "Mint Sanitary cleans carpet, area rugs, and upholstery throughout North Vancouver using hot water extraction, the method carpet manufacturers require to keep warranty coverage valid. We're a local, background-checked, bonded, and insured team. We use eco-friendly, non-toxic products safe for kids and pets, we're available seven days a week, and every job comes with a 24-hour satisfaction guarantee. If something needs a second pass after we leave, we'll come back and fix it at no charge."
      ),
      heading("Why It Matters in North Vancouver"),
      bullet("Coastal moisture and rain create ideal conditions for mold and mildew in carpet and padding"),
      bullet("Homes in Lynn Valley, Upper Lonsdale, and Edgemont Village often have wool or natural-fiber rugs that need specialized, gentler care"),
      bullet("Pet urine and outdoor mud track in more here than in drier parts of Greater Vancouver, and both soak into fibers and backing fast"),
      bullet("Professional cleaning extends carpet and rug life by 5 to 10+ years and protects the investment you made in your floors"),
      bullet("Removing trapped allergens improves indoor air quality, which matters more when North Vancouver weather keeps windows closed for months"),
      para(
        "Carpet, rugs, and upholstery in North Vancouver homes are exposed to more moisture than almost anywhere else in the region, and DIY cleaning without proper extraction and drying control can make that worse, not better. Professional hot water extraction pulls 85 to 95% of moisture back out, versus roughly 50% from a rental machine, so carpet dries faster and stays cleaner."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "How Professional Carpet Cleaning Benefits Your North Vancouver Home",
    body: [
      para(
        "Regular professional carpet cleaning extends carpet life by years. It removes allergens that trigger asthma and allergies, a concern in North Vancouver's damp climate where mold spores thrive. Clean carpets also improve air quality by eliminating dust, pet dander, and bacteria trapped in fibers."
      ),
      para(
        "One customer in Deep Cove had the same carpet for 8 years and thought it was time for replacement. After one professional steam cleaning, the carpet looked almost new. They saved thousands by restoring what they already had. Our fast-dry extraction technology means carpets are ready to use in just 4 to 12 hours."
      ),
      paraWithLink("", "Get a Free Estimate", "/contact", ""),
      await imageBlock(
        "/carpet-cleaning-benefits-living-room-north-vancouver.webp",
        "Bright living room with clean plush carpet and family pet in North Vancouver"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Carpet Cleaning We Offer in North Vancouver",
    tiles: [],
    customTiles: serviceTileEntries,
  },
  {
    // Area Rug Cleaning — part 1: intro, rug types, process. Carries the
    // anchorId since redirects land here.
    _key: key("sec"),
    _type: "richText",
    heading: "Area Rug Cleaning in North Vancouver",
    anchorId: "area-rug-cleaning",
    body: [
      para(
        "Your area rugs deserve more than a quick vacuum. In North Vancouver's damp climate, dirt, allergens, and moisture settle deep into rug fiber where a vacuum can't reach, and left alone, that moisture can lead to mold and mildew. Professional area rug cleaning removes what's trapped inside and extends the life of a rug by 5 to 10+ years."
      ),
      heading("Rug Types We Clean in North Vancouver"),
      ...rugTypes.map(bullet),
      para(
        "For antique rugs, our team tests dye stability and inspects for fragile areas in your North Vancouver home before cleaning starts, and adjusts the process to protect the piece. A generic carpet cleaner without that training shouldn't be trusted with an heirloom."
      ),
      heading("Our 4-Step Area Rug Cleaning Process"),
      ...rugProcessBody,
    ],
  },
  {
    // Area Rug Cleaning — part 2: pricing box (came after the process steps
    // and before "Caring for Your Rug" on the original page).
    _key: key("sec"),
    _type: "pricing",
    heading: "Pricing for Area Rug Cleaning in North Vancouver",
    tiers: rugPricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "A 9x12 Persian rug covers 108 square feet. At $6 per square foot, mid-range Oriental rug pricing, the total runs around $650 to $700. Free pickup and delivery comes with qualifying orders for North Vancouver residents, so you don't have to lift or transport a heavy rug yourself. For an exact quote, call 236-688-3248 or email hello@mintsanitary.com. First-time customers can use code MINT26 for 10% off.",
    ],
  },
  {
    // Area Rug Cleaning — part 3: care tips, which followed the pricing box.
    _key: key("sec"),
    _type: "richText",
    body: [heading("Caring for Your Rug Between Professional Cleanings"), ...rugCareTips.map(bullet)],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Carpet Steam Cleaning in North Vancouver",
    anchorId: "carpet-steam-cleaning",
    body: [
      para(
        '"Steam cleaning" is a nickname. The actual process is hot water extraction, and it\'s the gold standard for deep carpet cleaning in North Vancouver homes. We heat water to 200 to 230°F, mix it with an eco-friendly cleaning solution, and inject it deep into the carpet under pressure. A powerful vacuum extracts the dirty water at the same time, leaving carpet sanitized rather than just surface-clean. Carpet manufacturers require this method to keep warranty coverage valid, so if you want your carpet to stay protected, hot water extraction is the method that does it.'
      ),
      heading("Why Choose Steam Cleaning Over Other Methods"),
      ...steamWhyChoose.map(bullet),
      heading("What's Included"),
      ...steamWhatsIncluded.map(bullet),
      heading("How It Works, Step by Step"),
      ...steamProcessBody,
      para(
        "Commercial equipment applies 3 to 5 times the pressure and extraction power of a rental machine, and reaches 200 to 230°F compared to much lower heat in rental units. North Vancouver homeowners who've tried a DIY rental first tell us the difference in results is not close. Studies show hot water extraction reduces dust mites by roughly 87% and removes 94%+ of allergens, including pet dander, pollen, and mold spores. In North Vancouver's damp climate, where windows stay closed for months at a stretch, that makes a real difference for anyone dealing with allergies."
      ),
      para(
        "A typical 3-bedroom North Vancouver home takes 2 to 4 hours to clean, depending on square footage and carpet condition. Most carpet is ready for light foot traffic within 6 to 12 hours; avoid placing heavy furniture back for at least 6 hours. If you've just had new carpet installed, wait 6 to 8 weeks before your first steam clean so the new-carpet sizing treatment can set properly."
      ),
      paraWithLink(
        "Pricing: Carpet steam cleaning in North Vancouver is priced at $60 per room. Final cost depends on total rooms, traffic level, stain severity, and add-ons like pet odor treatment. Visit our ",
        "rates page",
        "/rates",
        " for details."
      ),
    ],
  },
  {
    // Carpet Stain Removal — part 1: intro, treatable/non-treatable stains,
    // process steps, drying-time paragraph.
    _key: key("sec"),
    _type: "richText",
    heading: "Carpet Stain Removal in North Vancouver",
    anchorId: "carpet-stain-removal",
    body: [
      para(
        "That wine spill during dinner. The pet accident discovered this morning. The mystery coffee stain that's been sitting for weeks. Stains happen in every North Vancouver home. When something spills, it doesn't just sit on the surface; it bonds to the carpet fibers through chemical and mechanical processes, and the longer it sits, the stronger that bond gets. DIY rental machines apply about 20 to 40 PSI of extraction force. Professional stain removal in North Vancouver uses industrial-grade equipment with 200 to 500 PSI of extraction power, along with stain chemistry knowledge and targeted treatment selection."
      ),
      heading("Types of Stains We Treat"),
      ...stainsWeTreat.map(bullet),
      heading("Stains That Typically Can't Be Removed"),
      ...stainsCantRemove.map(bullet),
      para(
        "We'll assess your stain during a free estimate at your North Vancouver home and give you a straight answer about removal odds. We won't promise a miracle we can't deliver."
      ),
      heading("Our 5-Step Stain Removal Process"),
      ...stainProcessBody,
      para(
        "Our extraction method removes 85 to 95% of moisture, so North Vancouver carpet typically dries in 4 to 6 hours after stain treatment, compared to 24+ hours after a rental machine clean. All treatments use eco-friendly, non-toxic products safe for kids, pets, and the environment. Enzymatic cleaners break down organic matter at a molecular level, and acidic solutions for beverage stains neutralize stains without harsh chlorine."
      ),
    ],
  },
  {
    // Carpet Stain Removal — part 2: pricing box.
    _key: key("sec"),
    _type: "pricing",
    heading: "Pricing for Carpet Stain Removal in North Vancouver",
    tiers: stainPricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "Call 236-688-3248 with stain details and we'll schedule same-day or next-day service where available; we work seven days a week. If a treated stain returns, let us know and we'll retreat it at no charge.",
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    intro:
      "We're not just another carpet cleaning company. Mint Sanitary brings eco-friendly solutions, fast-dry technology, and reliable seven-day availability to every carpet cleaning job in North Vancouver.",
    image: await uploadImage(
      "/freshly-cleaned-carpets-north-vancouver.jpg",
      "Freshly cleaned carpets in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  {
    _key: key("sec"),
    _type: "gallery",
    heading: "See the Difference",
    images: await Promise.all(galleryImages.map(([src, alt]) => galleryImage(src, alt))),
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Carpet Cleaning Service Areas in North Vancouver",
    body: [
      para(
        "Mint Sanitary is based on the North Shore and provides professional carpet cleaning across all North Vancouver neighborhoods, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights."
      ),
      paraWithLink(
        "We also serve ",
        "West Vancouver, Vancouver, and Burnaby",
        "/service-areas/",
        " throughout Greater Vancouver. Same professional service, same eco-friendly products, same 7-day availability wherever you are."
      ),
      paraWithLink(
        "Need carpet cleaning outside these areas? Call ",
        "236-688-3248",
        "tel:+12366883248",
        " and we'll do our best to accommodate you."
      ),
      ...serviceAreas.map(bullet),
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
    heading: "Ready for Cleaner Carpets in North Vancouver?",
    body: "Call Mint Sanitary at 236-688-3248 or email hello@mintsanitary.com. Use promo code MINT26 for 10% off carpet cleaning in North Vancouver. Free estimates. 7-day availability. Eco-friendly products. Bonded, insured technicians.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/contact",
  },
];

await replaceDoc("areaService", "carpet-cleaning", {
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "carpet-cleaning"),
  title: "Carpet Cleaning Services in North Vancouver",
  heroHeading: "Carpet Cleaning Services in North Vancouver",
  heroIntro:
    "Carpet in a North Vancouver home works harder than almost anywhere else in the region — rain, humidity, and tracked-in moisture settle deep into fibers and padding. Mint Sanitary cleans carpet, area rugs, and upholstery using hot water extraction, the method manufacturers require to keep warranty coverage valid. Eco-friendly products, seven-day availability, and a 24-hour satisfaction guarantee. Call 236-688-3248 for a free estimate or use code MINT26 for 10% off your first service.",
  heroImage: await uploadImage(
    "/carpet-cleaning-in-north-vancouver.webp",
    "Carpet cleaning in North Vancouver"
  ),
  metaTitle: "Carpet Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "Professional carpet, area rug, and stain removal cleaning in North Vancouver. Eco-friendly products, 7-day service, free estimates. Call 236-688-3248.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver carpet cleaning migrated");
