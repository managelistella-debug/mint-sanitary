import { key, uploadImage, replaceDoc, heading, para, paraWithLink } from "./lib.mjs";

/**
 * /services/deep-cleaning — migrated from the hand-coded page now parked at
 * /services/deep-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "Signs You Need a Deep Clean" was a bulleted <ul> with no dedicated
 *    slot, so it became a Portable Text bullet list inside its own Rich Text
 *    section (RichTextSection already renders listItem: "bullet").
 *  - Each per-room card in "What's Included in a Deep Clean" carried its own
 *    photo in the source, but whatsIncluded cards have no image field
 *    anywhere on the site (house-cleaning's own checklist cards are
 *    image-less too) — the five room photos are decorative variations on
 *    "a clean room" and aren't reproduced. Nothing textual was dropped: every
 *    bullet item is preserved in the card's `items` list.
 *  - "Why Deep Cleaning Matters for Your Health and Your Home" was a plain
 *    card grid with no image of its own, so it became the whyChoose section
 *    (accordion), reusing the hero photo per the migration brief's guidance
 *    to reuse the hero when a section needs an image the source didn't
 *    supply.
 *  - The trailing pricing paragraph contains a link to /rates, but the
 *    pricing section's `notes` field is plain text only (no Portable Text
 *    marks), so that sentence was moved to its own heading-less Rich Text
 *    block right after Pricing instead of being flattened into `notes`.
 *  - Paragraphs with more than one inline link were split into one paragraph
 *    per link — no text or link dropped.
 */

const deepCleanAreas = [
  {
    title: "Kitchen",
    items: [
      "Inside oven, refrigerator, and dishwasher",
      "Cabinet interiors and drawer pulls",
      "Backsplash grouting and tile scrubbing",
      "Inside microwave and range hood, including the filter",
      "Behind and under the fridge and stove",
      "Light fixtures and under-cabinet lighting",
      "Countertops, sink, and faucet sanitized",
      "Floors scrubbed in corners and under every appliance",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Tile grout scrubbed thoroughly",
      "Behind the toilet and under the sink",
      "Shower corners, tracks, doors, and fixtures descaled",
      "Window sills and ventilation fans dusted and cleared",
      "Cabinet interiors wiped and organized",
      "Mirrors and chrome polished",
      "Floors scrubbed including baseboards and corners",
    ],
  },
  {
    title: "Bedrooms and Living Areas",
    items: [
      "Behind and under beds, sofas, and dressers",
      "Baseboards, crown molding, and door frames wiped down",
      "Ceiling fans and light fixtures dusted",
      "Window tracks, sills, and blinds cleaned",
      "Closet interiors dusted and shelves wiped",
      "Upholstery vacuumed and spot-treated",
      "Carpets shampooed or hard floors deep-cleaned",
    ],
  },
  {
    title: "High-Touch Surfaces",
    items: [
      "Door handles, light switches, and railings sanitized",
      "Remote controls, thermostats, and alarm panels wiped",
      "Cabinet and drawer handles",
      "Stair railings",
    ],
  },
  {
    title: "Hard-to-Reach Areas",
    items: [
      "Top of cabinets, the fridge, and wardrobes",
      "Inside vents and air returns",
      "Behind the washer and dryer",
      "Cobwebs in ceiling corners and stairwells",
      "Garage entry or mudroom areas",
    ],
  },
];

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

const signsYouNeedIt = [
  "It's been more than 3 to 4 months since your last deep clean",
  "You're moving in or out of a property",
  "You're preparing for guests, a holiday, or a special event",
  "You notice buildup on grout, baseboards, or inside appliances",
  "Someone in your household has allergies, asthma, or respiratory issues",
  "You have pets that shed or track in dirt",
  "You just finished a renovation",
  "You're listing your property for sale or rental",
  "You're switching from no cleaning service to a recurring plan (a deep clean is a good starting point)",
];

const pricingTiers = [
  { title: "500–800 sq ft", range: "$390 – $480", body: "Compact condos and small apartments. Typically 3 to 4 hours." },
  { title: "900–1,500 sq ft", range: "$580 – $620", body: "Mid-size homes and townhomes. Usually 4 to 6 hours. This is the most common tier." },
  { title: "2,000–5,000+ sq ft", range: "$650 – $850+", body: "Larger homes with multiple bathrooms. Running 6 to 8+ hours. Properties over 6,000 sq ft should call for a custom quote." },
];

const healthBenefits = [
  { title: "Allergen and dust mite removal", body: "Regular vacuuming misses dust mites hiding in carpets, upholstery, and bedding. A deep clean removes them, which helps households dealing with asthma or allergies." },
  { title: "Mold and mildew prevention", body: "Coastal BC's moisture speeds up mold growth in grout lines, bathroom corners, and under appliances. Getting into those areas regularly keeps mold from taking hold." },
  { title: "Bacteria and pathogen reduction", body: "High-touch surfaces and appliance interiors collect bacteria that everyday cleaning skips. A deep clean addresses both." },
  { title: "Better indoor air quality", body: "Removing built-up dust, pet dander, and other compounds makes the air inside your home noticeably cleaner." },
  { title: "Longer-lasting surfaces", body: "Grease, grime, and mineral buildup wear down flooring, countertops, and fixtures over time. Deep cleaning slows that wear and extends the life of what you already have." },
  { title: "A calmer home", body: "A genuinely clean space has an effect on how a home feels day to day, not just how it looks." },
];

const processSteps = [
  { title: "Free estimate", body: "Call us or book online. We discuss your property, your focus areas, and give you a transparent quote up front." },
  { title: "Schedule at your convenience", body: "Mint Sanitary works 7 days a week, including evenings, weekends, and holidays." },
  { title: "Our team arrives ready", body: "We bring our own eco-friendly products and equipment, and do a quick walkthrough before starting." },
  { title: "Room-by-room deep clean", body: "The team works top to bottom, systematically, for 4 to 8 hours depending on the size of your home." },
  { title: "Quality walkthrough", body: "Before we leave, we walk through the home with you to confirm the work meets our standard." },
  { title: "Optional follow-up plan", body: "If you want to maintain the results, we can set up a recurring standard cleaning schedule." },
];

const faqItems = [
  { question: "How long does a deep clean take?", answer: "Most deep cleans take 4 to 8 hours, depending on the size of your home and its current condition. A compact condo may only need 3 to 4 hours, while a larger home with multiple bathrooms can take longer." },
  { question: "How often should I book a deep clean?", answer: "We recommend a deep clean every 2 to 4 months, or whenever you notice buildup on grout, baseboards, or inside appliances. Homes with pets or high foot traffic may need it more often." },
  { question: "What's the difference between deep cleaning and standard cleaning?", answer: "Deep cleaning is a thorough reset that covers inside appliances, grout, baseboards, and behind furniture. Standard cleaning is routine maintenance for surfaces, floors, and bathrooms on a weekly or monthly schedule. Many clients book a deep clean first, then move to a standard plan." },
  { question: "Do I need to be home during the cleaning?", answer: "No. Many clients provide access instructions and go about their day. If you prefer to be present, that works too. We'll confirm the arrangement when you book." },
  { question: "What products do you use?", answer: "We use plant-based, non-toxic cleaning products and HEPA-filter vacuums throughout every deep clean. This makes the process safer for kids, pets, and anyone with allergies or respiratory sensitivities." },
  { question: "How much does a deep clean cost?", answer: "Pricing is based on square footage. Homes between 500 and 800 sq ft run $390 to $480, homes between 900 and 1,500 sq ft run $580 to $620, and homes between 2,000 and 5,000+ sq ft run $650 to $850+. For an exact quote based on your home, use our rates page." },
  { question: "Is deep cleaning worth it before selling my home?", answer: "Yes. A deep clean addresses the details buyers and renters notice, like grout, appliance interiors, and baseboards. It's a common step before listing a property." },
  { question: "Do you offer a satisfaction guarantee?", answer: "Yes. If anything isn't up to standard, we return within 24 hours to fix it at no charge." },
  { question: "Which areas do you serve?", answer: "Mint Sanitary serves Greater Vancouver, including North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. See our service areas page for the full list." },
  { question: "Do you require a contract?", answer: "No. Mint Sanitary works on transparent, project-based pricing with no long-term contracts required." },
];

console.log("→ /services/deep-cleaning");

const heroImage = await uploadImage(
  "/deep-cleaning-bathroom-north-vancouver.jpg",
  "Deep cleaning in Greater Vancouver"
);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Mint Sanitary provides deep cleaning across Greater Vancouver, including West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. We're based in North Vancouver, and if you live there, check out our page on ",
        "deep cleaning in North Vancouver",
        "/north-vancouver/deep-cleaning",
        " for details specific to your area. This page covers what deep cleaning looks like for homes across the whole region. If something isn't right, we come back within 24 hours to fix it at no charge."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in a Deep Clean",
    intro: "A deep clean covers every room, working from the ceiling down to the baseboards.",
    cards: deepCleanAreas.map(({ title, items }) => ({ _key: key("card"), title, items })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Deep Cleaning vs Standard Cleaning",
    body: [
      para(
        "These two services solve different problems. Deep cleaning is an intensive reset. It tackles buildup and neglected areas: inside appliances, grout, baseboards, ceiling fans, and behind furniture. It takes 4 to 8 hours depending on the size of your home, and we recommend it every 2 to 4 months, or whenever your home needs it. Standard cleaning is routine upkeep. It covers surfaces, floors, bathrooms, kitchens, and living areas in 2 to 4 hours, and works well on a weekly, bi-weekly, or monthly schedule."
      ),
      paraWithLink(
        "Many clients start with a deep clean, then set up a recurring standard cleaning plan to keep the home at that level. Read more about our ",
        "house cleaning services",
        "/services/house-cleaning",
        " to see how the two fit together."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Signs You Need a Deep Clean",
    body: [para("A deep clean makes sense if any of these apply to you:"), ...signsYouNeedIt.map(bullet)],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Deep Cleaning Pricing",
    intro:
      "Mint Sanitary offers transparent, project-based pricing with no hourly rates and no contracts. Pricing depends on the size of your home:",
    tiers: pricingTiers.map(({ title, range, body }) => ({ _key: key("tier"), title, range, body })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Every job starts with a free estimate. For an exact number based on your home, ",
        "get an instant quote",
        "/rates",
        " or call 236-688-3248. First-time customers get 10% off with code MINT26."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Deep Cleaning Matters for Your Health and Your Home",
    image: heroImage,
    items: healthBenefits.map(({ title, body }) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "How the Process Works",
    steps: processSteps.map(({ title, body }) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Serving Homes Across Greater Vancouver",
    body: [
      para(
        "Mint Sanitary is based in North Vancouver and serves homes throughout the region, including West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge."
      ),
      paraWithLink("See our full ", "service areas", "/service-areas", " for a list of the communities we cover."),
      paraWithLink("Visit our ", "North Vancouver", "/north-vancouver", " hub page for local details."),
      paraWithLink(
        "If you're located specifically in North Vancouver, our ",
        "deep cleaning in North Vancouver",
        "/north-vancouver/deep-cleaning",
        " page has more detail on that area."
      ),
      para(
        "Deep cleaning pairs well with a few other services we offer, including move-in/move-out cleaning, post-construction cleaning, and recurring standard cleaning for ongoing maintenance."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(({ question, answer }) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Ready to Book?",
    body: "Get an instant quote for your home, or call 236-688-3248 to speak with our team. First-time customers get 10% off with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "deep-cleaning", {
  title: "Deep Cleaning Services in Greater Vancouver",
  name: "Deep Cleaning",
  // Verbatim from the "Types of House Cleaning We Offer" tile grid on
  // app/services/house-cleaning/page.tsx — the only generic (non-city) copy
  // for this slug found elsewhere on the site.
  tileDescription:
    "A more intensive clean that reaches inside appliances, behind furniture, and into buildup a standard clean doesn't touch.",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Deep Cleaning Services in Greater Vancouver",
  heroIntro:
    "A deep clean resets your home from top to bottom. It goes past the surfaces you wipe every week and into the spots that build up over months: inside the oven, behind the fridge, along the grout lines, under the furniture. Every team member is background-checked, bonded, and insured, and we use plant-based, non-toxic products and HEPA-filter vacuums.",
  heroImage,
  metaTitle: "Deep Cleaning Services in Greater Vancouver | Mint Sanitary",
  metaDescription:
    "Professional deep cleaning for homes across Greater Vancouver. Eco-friendly products, background-checked teams, 24-hour guarantee. Get an instant quote.",
  sections,
  published: true,
});

console.log("\n✓ Deep cleaning migrated");
