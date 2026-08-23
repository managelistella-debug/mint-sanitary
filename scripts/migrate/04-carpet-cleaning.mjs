import { key, uploadImage, replaceDoc, heading, para, paraWithLink, customTile } from "./lib.mjs";

/**
 * /services/carpet-cleaning — migrated from the hand-coded page now parked at
 * /services/carpet-cleaning-original.
 *
 * All copy is verbatim. Placement decisions:
 *  - "Signs Your Carpet Needs Professional Cleaning" was a bulleted <ul> with
 *    no dedicated slot, so it became a Portable Text bullet list inside the
 *    "Why It Matters" Rich Text section (RichTextSection's PortableText
 *    config already supports listItem: "bullet", so this needs no new
 *    component work).
 *  - "What We Clean" was a 4-tile image grid where 3 of 4 tiles link to
 *    anchors on /north-vancouver/carpet-cleaning and only the 4th points at
 *    a real /services/* page, so it can't be a ref-based serviceTiles
 *    section. It now uses serviceTiles' `customTiles` (hand-written tiles
 *    that carry their own href), retitled "Types of Carpet Cleaning We
 *    Offer" per the client, so it matches the tile styling used by
 *    "Types of House Cleaning We Offer" and every href is preserved.
 *  - "Why Choose Mint Sanitary" was a flat 7-pill bullet list with no
 *    title/body split, buried at the end of the DIY section. It's now a real
 *    whyChoose section. The pills carried no expandable body text, so the
 *    title/body pairs are the client-approved wording from the North
 *    Vancouver carpet page (de-localized), extended with two items covering
 *    the insured-teams and satisfaction-guarantee pills that page omits —
 *    so every point the original pills made still appears.
 *  - Paragraphs with more than one inline link (paraWithLink only supports
 *    one) were split into one paragraph per link — no text or link dropped,
 *    just more granular paragraph breaks than the source.
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

const whatWeClean = [
  {
    title: "Area Rug Cleaning",
    image: "/area-rug-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/carpet-cleaning#area-rug-cleaning",
    description:
      "Hand-wash cleaning for delicate area rugs, including Persian, Oriental, wool, and silk rugs. We test dyes and fiber type before we start so color and texture stay intact.",
  },
  {
    title: "Carpet Steam Cleaning",
    image: "/carpet-steam-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/carpet-cleaning#carpet-steam-cleaning",
    description:
      "Hot water extraction that pulls embedded dirt, allergens, and odors out of residential and commercial carpet. This is the deep clean your carpet warranty likely requires.",
  },
  {
    title: "Carpet Stain Removal",
    image: "/carpet-stain-removal-north-vancouver.jpg",
    href: "/north-vancouver/carpet-cleaning#carpet-stain-removal",
    description:
      "Targeted treatment for pet accidents, wine, coffee, and other stubborn stains. We use industrial-grade extraction and stain-specific chemistry, not a rented machine.",
  },
  {
    title: "Drapes & Curtains Cleaning",
    image: "/drapes-curtains-cleaning-north-vancouver.webp",
    href: "/services/drapes-curtains-cleaning",
    description:
      "Professional cleaning for drapes and curtains in every fabric type, removing dust, allergens, and odors while protecting the fabric.",
  },
];

const processSteps = [
  { title: "Pre-inspection and assessment", body: "We check carpet fiber type, high-traffic zones, and existing stains before we start." },
  { title: "Targeted pre-treatment", body: "Eco-friendly pre-spray goes on first, with enzymatic treatment for pet odors so it can break down urine compounds at the source." },
  { title: "Hot water extraction", body: "Commercial-grade equipment injects hot water and cleaning solution, then extracts it, usually with two to three passes per section." },
  { title: "Grooming and drying setup", body: "We groom the pile, make final extraction passes, and set up airflow so your carpet dries as fast as possible." },
];

const signs = [
  "Carpet looks dull or matted in high-traffic paths, even after vacuuming",
  "Odor lingers in a room even when it's clean",
  "Allergy symptoms flare up more indoors than outdoors",
  "A stain has been treated at home but keeps reappearing",
  "It's been over a year since the last professional clean",
  "You're moving in or out and need the carpet reset for new tenants or a sale",
];

const whyChooseItems = [
  {
    title: "Eco-Friendly & Safe Cleaning Products",
    body: "We use non-toxic, eco-friendly products that are safe for children, pets, and sensitive individuals. Our solutions are free from harsh chemicals and harmful fumes.",
  },
  {
    title: "7-Day Availability",
    body: "We're open 7 days a week to fit your schedule with same-day estimates and flexible appointment times whenever possible.",
  },
  {
    title: "Free Estimates & Transparent Pricing",
    body: "No surprises. We assess carpet condition, discuss your needs, and provide clear pricing before any work starts. No contracts, ever.",
  },
  {
    title: "Background-Checked, Bonded & Insured Teams",
    body: "Every technician who enters your home or business is background-checked, bonded, and insured.",
  },
  {
    title: "Residential, Commercial & Industrial Experience",
    body: "From townhouses to office buildings, we clean all property types and fiber conditions.",
  },
  {
    title: "Fast-Dry Technology",
    body: "Advanced extraction leaves carpets nearly dry. Most homes see dry times between 4 and 12 hours depending on humidity and airflow.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    body: "If something needs a second pass, tell us within 24 hours and we'll come back and make it right at no charge. We hold a 4.9 out of 5 rating from more than 120 reviews.",
  },
];

const faqItems = [
  { question: "How often should carpets be professionally cleaned?", answer: "Most homes do well with professional cleaning every 12 to 18 months. If you have pets or young children, every 6 to 12 months keeps odors and allergens under control and helps maintain your carpet warranty." },
  { question: "What is carpet steam cleaning?", answer: "It's the common name for hot water extraction, the industry's deep-cleaning standard. We heat water to 200 to 230°F, inject it into the carpet with an eco-friendly cleaning solution, then extract it with commercial-grade equipment. The result reaches dirt and allergens a vacuum can't touch." },
  { question: "How long do carpets take to dry after cleaning?", answer: "Most carpets dry in 4 to 12 hours depending on the service and airflow in the home. We set up fans and give you specific drying guidance before we leave." },
  { question: "Can you remove pet stains and odors?", answer: "Yes. Pet urine contains uric acid crystals that cause lingering odor if they aren't fully removed. We use enzymatic pre-treatment designed to break those crystals down, followed by extraction that pulls the residue out of the carpet." },
  { question: "Are your cleaning products safe for kids and pets?", answer: "Yes. All our products are eco-friendly, plant-based, and non-toxic, with no harsh chemicals or fumes. Treated areas are safe once dry." },
  { question: "Do you offer commercial carpet cleaning?", answer: "Yes. We clean carpet in offices and commercial hallways as well as homes. We work around your business hours to minimize disruption." },
  { question: "How much does carpet cleaning cost?", answer: "Carpet steam cleaning starts at $60 per room. Stain removal starts at $120 for a single stain, and area rug cleaning runs $1 to $8+ per square foot depending on material. For a specific quote, visit our rates page or call 236-688-3248." },
  { question: "Do you clean area rugs too?", answer: "Yes. We hand-wash Persian, Oriental, wool, silk, and synthetic rugs using specialized techniques that protect color and fiber. See our full North Vancouver carpet cleaning page for the complete process and pricing breakdown." },
  { question: "Is same-day carpet cleaning available?", answer: "Often, yes. Call 236-688-3248 with details about your carpet and we'll schedule same-day or next-day service depending on availability." },
  { question: "What areas do you serve?", answer: "We serve Vancouver, North Vancouver, West Vancouver, Burnaby, and the wider Greater Vancouver area. See our full service area list for details." },
];

console.log("→ /services/carpet-cleaning");

const whatWeCleanTiles = [];
for (const item of whatWeClean) {
  whatWeCleanTiles.push(await customTile(item));
}

const sections = [
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "What Professional Carpet Cleaning Involves",
    intro:
      '"Steam cleaning" is a common name for hot water extraction, the industry\'s deep-cleaning standard. We heat water to 200 to 230°F, mix it with an eco-friendly cleaning solution, and inject it into the carpet under pressure. A powerful vacuum extracts the dirty water at the same time. The carpet ends up sanitized, not just surface-clean.',
    steps: processSteps.map(({ title, body }) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why It Matters",
    body: [
      para(
        "Dirty carpet is more than a cosmetic problem. Hot water extraction reduces dust mites by roughly 87% and removes 94%+ of common allergens, including pet dander, pollen, and mold spores. That matters if anyone in the home deals with allergies or asthma. Regular cleaning also protects your carpet warranty, since most manufacturers require periodic professional hot water extraction to keep coverage valid. Most homes do well with cleaning every 12 to 18 months. If you have pets or young kids, every 6 to 12 months keeps odors and allergens from building up."
      ),
      heading("Signs Your Carpet Needs Professional Cleaning"),
      ...signs.map(bullet),
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Carpet Cleaning We Offer",
    intro:
      "A dirty spot on the carpet is rarely just one problem. We handle delicate handmade rugs, full-home carpet, and everything in between.",
    tiles: [],
    customTiles: whatWeCleanTiles,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Stains, Pets, and Everyday Life",
    body: [
      para(
        "A fresh spill responds well to blotting with cold water. But once a stain sits for a few hours, or someone's already tried a store-bought spray on it, the liquid has bonded to the fibers and a rental machine usually can't finish the job. DIY equipment applies about 20 to 40 PSI of extraction force. Professional equipment applies 200 to 500 PSI, which is why dry times run 4 to 6 hours after professional stain removal instead of 24+ hours after a rental. Pet accidents are one of the most common calls we get. Urine contains uric acid crystals that can reactivate later if they aren't fully removed, so we pre-treat with enzymatic spotters that break the crystals down before extraction."
      ),
      heading("Residential and Commercial Carpet Cleaning"),
      para(
        "We clean living rooms, bedrooms, and stairs in single-family homes, and we clean hallway and office carpet in commercial buildings too. Jobs typically take 2 to 4 hours depending on square footage and carpet condition. Same-day and next-day appointments are often available, and we work seven days a week. For a rental property between tenants, a strata hallway, or an office that gets foot traffic all week, commercial carpet holds dirt differently than a living room. We adjust pre-treatment and pass count to match the traffic level, so a busy hallway gets more attention than a quiet meeting room."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "DIY vs. Professional Cleaning",
    body: [
      para(
        "Renting a machine seems like the cheaper option, but rental units extract far less moisture than commercial equipment, often leaving carpet wet for 24 hours or more. That extra moisture is also why DIY-cleaned carpet re-soils faster: leftover cleaning solution attracts new dirt. Professional extraction pulls out 85 to 95% of the moisture we put in, so carpet dries faster and stays cleaner longer."
      ),
      heading("Pricing"),
      paraWithLink(
        "Carpet steam cleaning is priced per room, starting at $60 per room, with final cost depending on room count, traffic level, and any add-ons like pet odor treatment. Single stain removal runs $120 to $180, multiple stains are $200 to $280, and pet stain plus odor treatment is $150 to $240. Area rug cleaning ranges from $1 to $8+ per square foot depending on material, with synthetic rugs at the low end and silk or fine Oriental rugs at the high end. For an exact number for your home, visit our ",
        "rates page",
        "/rates",
        " or call 236-688-3248. New customers can use code MINT26 for 10% off their first clean."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    image: await uploadImage(
      "/freshly-cleaned-carpets-north-vancouver.jpg",
      "Freshly cleaned carpets by Mint Sanitary"
    ),
    items: whyChooseItems.map(({ title, body }) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Serving Greater Vancouver",
    body: [
      paraWithLink(
        "Mint Sanitary is based in ",
        "North Vancouver",
        "/north-vancouver",
        " and cleans carpets throughout the region."
      ),
      paraWithLink(
        "If you're in North Vancouver, our ",
        "North Vancouver carpet cleaning",
        "/north-vancouver/carpet-cleaning",
        " page has the full pricing breakdown and local detail."
      ),
      paraWithLink("See our ", "service areas", "/service-areas", " for the full coverage list."),
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
    heading: "Ready for Cleaner Carpet?",
    body: "Get a free quote at /rates or call Mint Sanitary at 236-688-3248. New customers save 10% on their first clean with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "carpet-cleaning", {
  title: "Carpet Cleaning Services",
  name: "Carpet Cleaning",
  // Verbatim from the homepage "What We Do" tile grid (app/page.tsx) — the
  // only place this slug already carries generic, non-city tile copy.
  tileDescription:
    "Carpets trap dust, allergens, and everyday grime long after a quick vacuum stops helping. Our carpet cleaning lifts embedded dirt and stains from homes and offices alike, using HEPA-filter equipment and products that are safe around kids and pets.",
  tileImage: await uploadImage("/carpet-cleaning-in-north-vancouver.webp", "Carpet cleaning in Greater Vancouver"),
  hasOwnPage: true,
  heroHeading: "Carpet Cleaning Services",
  heroIntro:
    "Carpets collect more than dust. Dirt, pet dander, allergens, and old spills settle deep in the fibers, past where a vacuum can reach. Mint Sanitary cleans carpets across Greater Vancouver using hot water extraction, the method carpet manufacturers recommend to protect your warranty and keep carpet looking new.",
  heroImage: await uploadImage("/carpet-cleaning-in-north-vancouver.webp", "Carpet cleaning in Greater Vancouver"),
  metaTitle: "Carpet Cleaning in Greater Vancouver | Mint Sanitary",
  metaDescription:
    "Eco-friendly carpet cleaning across Greater Vancouver. Steam cleaning, stain removal, and area rug care. Free estimates. Call 236-688-3248.",
  sections,
  published: true,
});

console.log("\n✓ Carpet cleaning migrated");
