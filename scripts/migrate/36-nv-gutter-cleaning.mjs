import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  para,
  paraWithLink,
  imageBlock,
} from "./lib.mjs";

/**
 * /north-vancouver/gutter-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/gutter-cleaning-original
 * (GutterCleaningCategoryPageClient.tsx).
 *
 * All copy verbatim, including the North-Vancouver-specific phrasing baked
 * into nearly every sentence. Placement decisions:
 *  - The hero's small uppercase eyebrow ("Professional Gutter Cleaning in
 *    North Vancouver") and its trust-chip list ("Full System Inspection",
 *    "Before & After Photos", "10% Off With Code MINT26") have no field on
 *    PageBase/CmsPageShell (hero only renders H1 + heroIntro + the two
 *    standard buttons), so both are dropped — consistent with every other
 *    migrated page, where the hero is handled automatically and never gets
 *    its own section.
 *  - "Every Gutter Clean Includes" is a photo-less card grid of
 *    {title, body}, and whatsIncluded is otherwise unused on this page, so
 *    it maps to whatsIncluded per the mapping guidance.
 *  - The trailing sentence after the 6-step process grid ("This process
 *    typically takes 1.5 to 2.5 hours...") has no home inside
 *    processChecklist (no trailing-note field), so it became its own short
 *    heading-less Rich Text block immediately after, matching the pattern
 *    used in the already-migrated /services/gutter-cleaning script.
 *  - "Why Choose Mint Sanitary" has no CTA button in the source page (unlike
 *    some other Why Choose sections), so ctaLabel/ctaHref are left unset;
 *    AccordionWithImage only renders the button when both are present.
 *  - Google Reviews is rendered as a plain testimonials section pulling the
 *    shared global review set; this page's own bespoke review text is
 *    deliberately dropped, matching how every other migrated page works.
 *  - The Service Areas section (chips + map + "View All Service Areas"
 *    button) became one Rich Text block: intro paragraph, the neighbourhood
 *    chip list as a bullet list (Portable Text has no chip/pill primitive),
 *    the map image, and the button preserved as a real link via
 *    paraWithLink(). A local bulletItem() helper builds the list blocks
 *    since no prior migration script needed one.
 *  - Final CTA body is kept verbatim, including "Use code MINT26 for 10%
 *    off your first service." This duplicates the auto-rendered promo line
 *    FinalCtaSection adds from siteGlobals.promoCode, but that's the same
 *    tradeoff already made in 20-nv-church-cleaning.mjs (verbatim wins over
 *    de-duplicating the automatic promo blurb).
 *  - Final CTA and hero both link "Get a Free Estimate" to /contact (not
 *    /rates, which other pages use) — that's what the source page actually
 *    does, so ctaHref is set to /contact here.
 */

function bulletItem(text) {
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

const included = [
  {
    title: "Complete Debris Removal",
    body: "Hand removal of leaves, twigs, pine needles, moss, shingle granules, dirt, and organic buildup. North Vancouver's dense tree cover means fine particles build up fast too, so vacuum equipment catches what hand removal can't.",
  },
  {
    title: "Downspout Flushing",
    body: "High pressure flushing confirms every downspout is fully clear and routing water away from the foundation.",
  },
  {
    title: "System Inspection",
    body: "Technician checks loose brackets, missing hardware, rust spots, seam leaks, and pitch problems, with before and after photo documentation on every visit.",
  },
  {
    title: "Gutter Guard Evaluation",
    body: "Plenty of homes, especially in treed pockets like Edgemont Village and Seymour Heights, already have guards installed. We clean and evaluate them for damage.",
  },
  {
    title: "Environmentally Responsible Disposal",
    body: "Debris bagged and hauled away following Metro Vancouver stormwater rules, never dumped in the yard or a storm drain.",
  },
];

const processSteps = [
  {
    title: "Safety Setup",
    body: "We position extension ladders on stable, level ground, with extra care taken on North Vancouver's sloped yards. All equipment and surrounding landscaping are protected, and our team wears appropriate safety harnesses and protective gear.",
  },
  {
    title: "Manual Debris Removal",
    body: "Working systematically from end to end, the technician hand-removes bulk debris (leaves, branches, moss buildup) using a scoop or by hand. For heavily clogged gutters on North Vancouver's densely treed properties, this step can take 30 to 45 minutes per side.",
  },
  {
    title: "Vacuum and Pressure Flushing",
    body: "High-powered gutter vacuum removes fine debris that hand removal misses. The downspout is then flushed with controlled water pressure to keep water flowing from the gutter opening all the way to the ground.",
  },
  {
    title: "Water Testing and Verification",
    body: "A small amount of water is poured through the gutter to verify proper pitch toward downspouts. The technician observes the flow path and confirms water is moving as intended, not pooling anywhere along the gutter line.",
  },
  {
    title: "Bracket and Fastener Check",
    body: "Loose hardware is tightened on the spot. Leaking seams are noted. Rust or damage is documented so you know exactly what may need repair in the coming months.",
  },
  {
    title: "Documentation and Report",
    body: "Before and after photos are taken. A detailed service report is emailed to you the same day, along with any repair recommendations and a timeline for follow-up cleaning.",
  },
];

const whyChoose = [
  {
    title: "Professional Safety Equipment",
    body: "We position extension ladders on stable, level ground. Our team wears appropriate safety harnesses and protective gear — zero risk to you from ladder falls or accidents.",
  },
  {
    title: "Thorough Inspection Included",
    body: "Every visit includes a full inspection, which catches rust developing inside the gutter, seam leaks, and fascia rot hidden behind the gutter line while repairs are still small and inexpensive, especially valuable on the decades-old gutter systems scattered through Lower Lonsdale and Norgate.",
  },
  {
    title: "Before & After Photo Documentation",
    body: "We photograph your gutters before and after the service. You receive a detailed service report by email, including any repair recommendations and follow-up timeline.",
  },
  {
    title: "Eco-Friendly Disposal",
    body: "Debris is removed and disposed of properly, in line with Metro Vancouver bylaws, keeping it out of drains feeding the Burrard Inlet and the Capilano and Seymour watersheds, not left in the yard or washed into a storm drain.",
  },
  {
    title: "7-Day Availability",
    body: "We're available weekdays, evenings, and weekends. Book online or call 236-688-3248 for same-week service across most North Vancouver neighbourhoods.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "If you're not satisfied with any aspect of our service, we'll return within 24 hours to make it right — no questions asked, no extra charge.",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Seymour Heights",
  "Norgate",
  "Dollarton",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const faqItems = [
  {
    question: "How often do gutters in North Vancouver need to be cleaned?",
    answer:
      "Minimum twice per year, spring and fall. Homes with heavy tree coverage should schedule cleaning three to four times annually. North Vancouver's approximately 2,400 millimeters of annual precipitation, concentrated between October and March, makes fall cleaning critical. Don't skip it.",
  },
  {
    question: "Can I clean my gutters myself, or should I hire a professional in North Vancouver?",
    answer:
      "Professional cleaning is safer and more thorough. Ladder falls are a leading cause of home injury. Professionals carry insurance and use specialized equipment (vacuums, pressure washers, inspection tools) that homeowners typically lack. DIY cleaning misses hidden damage like seam leaks, rust, and fascia rot that professionals identify during inspection.",
  },
  {
    question: "What's the difference between gutter cleaning and gutter guards in North Vancouver?",
    answer:
      "Cleaning removes accumulated debris. Guards prevent debris from entering gutters in the first place. Guards reduce cleaning frequency but don't eliminate it. Pine needles, shingle granules, and fine debris still accumulate on or around guards. Best practice: install guards and maintain a regular North Vancouver cleaning schedule.",
  },
  {
    question: "What damage can clogged gutters cause in North Vancouver?",
    answer:
      "Standing water causes fascia, soffit, siding, and foundation damage. Rust and seam failure accelerate in gutters filled with standing water, and pest infestations thrive. Water infiltration at the foundation leads to mold, basement leaks, and structural damage costing $3,000 to $25,000 to repair. Winter ice dams form in clogged gutters, backing water under shingles and into your home.",
  },
  {
    question: "Is gutter cleaning covered by my homeowner's insurance in North Vancouver?",
    answer:
      "Standard homeowner's insurance does not cover gutter cleaning maintenance costs. However, damage from neglected gutters may be excluded from your coverage entirely. Some insurers recommend regular maintenance as a condition of coverage.",
  },
  {
    question: "What causes moss growth in North Vancouver gutters, and how do I prevent it?",
    answer:
      "North Vancouver's wet, mild climate with frequent rain, moderate temperatures, and tree shade creates ideal moss-growing conditions. Moss blocks water flow and accelerates rust and seam failure. Prevention includes trimming overhanging branches to increase sunlight, and scheduling professional cleaning three to four times per year to remove moss spores.",
  },
  {
    question: "What happens if I skip gutter cleaning during the rainy season in North Vancouver?",
    answer:
      "Skipping fall and winter cleaning is high-risk in North Vancouver. The region receives approximately 2,400 millimeters of annual rainfall, much concentrated October to March. Clogged gutters cause water backup, overflow, and foundation saturation. Winter cold snaps can also freeze standing water in gutters and force it back under the shingles.",
  },
  {
    question: "Do you offer gutter repair or gutter guard installation in North Vancouver?",
    answer:
      "Our primary service is professional gutter cleaning with complete system inspection. During cleaning, we identify damage and provide repair quotes. We can discuss gutter guard options and recommend trusted installers.",
  },
  {
    question: "How do I get a free estimate for gutter cleaning in North Vancouver?",
    answer:
      "Book online or call 236-688-3248. We provide free, no-obligation estimates including property walk-through, gutter assessment, cleaning quote, and repair recommendations. Estimates typically take 15 to 20 minutes. New customers receive 10% off first clean with code MINT26.",
  },
  {
    question: "What areas of North Vancouver do you service?",
    answer:
      "We serve North Vancouver including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, and surrounding areas. We also service West Vancouver, Vancouver, Burnaby, and select areas across Greater Vancouver.",
  },
  {
    question: "How much does gutter cleaning cost in North Vancouver?",
    answer:
      "Pricing depends on the size of the home, roofline complexity, and how clogged the gutters are. For current rates, visit our rates page or call 236-688-3248 for a free, no obligation quote for your North Vancouver property.",
  },
  {
    question: "How long does a gutter cleaning take in North Vancouver?",
    answer:
      "Most North Vancouver homes take 1.5 to 2.5 hours from start to finish, depending on the size of the roofline and how long it's been since the last cleaning.",
  },
  {
    question: "Why do North Vancouver homes need more frequent gutter cleaning than other areas?",
    answer:
      "North Vancouver's heavier rainfall and dense tree cover mean gutters here fill up faster than in drier or less treed parts of the region, so most North Vancouver homes benefit from cleaning three to four times a year instead of the standard twice.",
  },
  {
    question: "Are homes on sloped lots in North Vancouver at higher risk from clogged gutters?",
    answer:
      "Yes. Homes on sloped lots in areas like Upper Lonsdale and Capilano see overflow run straight down a hillside foundation, which speeds up the kind of water damage clogged gutters cause.",
  },
  {
    question: "Does the North Vancouver gutter cleaning service include an inspection, or just debris removal?",
    answer:
      "Every North Vancouver gutter cleaning includes a full system inspection for brackets, rust, seam leaks, and pitch issues, along with debris removal, not just the debris.",
  },
  {
    question: "When is the busiest season for gutter cleaning bookings in North Vancouver?",
    answer:
      "Fall, right before the heavy October to March rains start, is the busiest booking window for North Vancouver homeowners. Booking early in the season helps avoid a wait during peak weeks.",
  },
  {
    question: "Are gutter guards worth it for treed North Vancouver properties?",
    answer:
      "Often, yes, especially in heavily treed pockets like Edgemont Village and Seymour Heights, though guards reduce debris rather than eliminate the need for cleaning, since fine particles still get through.",
  },
  {
    question: "Do you offer same-day or emergency gutter cleaning in North Vancouver?",
    answer:
      "We offer 7-day availability with same-week service across most North Vancouver neighbourhoods. Call 236-688-3248 to check same-day availability during a heavy storm or emergency.",
  },
];

console.log("→ /north-vancouver/gutter-cleaning");

const heroImage = await uploadImage(
  "/gutter-cleaning-north-vancouver-hero.webp",
  "Gutter cleaning in North Vancouver"
);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Gutter Cleaning Matters in North Vancouver",
    body: [
      await imageBlock(
        "/gutter-cleaning-north-vancouver-why-matters.webp",
        "Professional gutter cleaning on a North Vancouver home with ladder and service van"
      ),
      para(
        "North Vancouver gets roughly 2,400mm of rain a year, more than two and a half times the North American average of about 900mm, concentrated between October and March. Standing water in a clogged gutter works into fascia boards, soffits, siding, and eventually the foundation, and repairs for that kind of infiltration commonly run $3,000 to $25,000. Homes on sloped lots in areas like Upper Lonsdale and Capilano see this play out fast, since overflow often runs straight down a hillside foundation."
      ),
      para(
        "A single residential gutter here can collect more than 50 pounds of leaves, twigs, needles, and granules in the fall alone. Streets in Lynn Valley and around Dollarton back onto forested slopes and see the heaviest debris load in the district."
      ),
      para(
        "More than a few North Vancouver rooflines end up with the gutter itself invisible under a mat of wet needles and moss, holding water against the metal for months. It isn't rare here. The wet, mild climate and heavy tree shade create close to ideal moss growing conditions, and moss blocks water flow while trapping moisture that speeds up rust and seam failure."
      ),
      para(
        "Homeowner's insurance usually doesn't cover gutter maintenance, and neglect-related water damage may be excluded from a claim entirely. For many North Vancouver homeowners, a twice yearly cleaning is cheaper than a single deductible."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Every Gutter Clean Includes",
    intro:
      "Homes in North Vancouver deal with more leaf litter, moss, and standing water than most of the region, so every visit here covers the full system from the roofline down to the downspout outlet.",
    cards: included.map(({ title, body }) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "The Professional Gutter Cleaning Process",
    steps: processSteps.map(({ title, body }) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "This process typically takes 1.5 to 2.5 hours for most homes, depending on the complexity of your roof, the length of your gutter system, and the amount of debris accumulated."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    image: await imageBlock(
      "/gutter-cleaning-north-vancouver-hero.webp",
      "Close-up of professional gutter cleaning and debris removal in North Vancouver"
    ),
    items: whyChoose.map(({ title, body }) => ({ _key: key("why"), title, body })),
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Service Areas: North Vancouver and Beyond",
    body: [
      para(
        "Mint Sanitary provides professional gutter cleaning throughout North Vancouver and the surrounding region. We serve every neighborhood from Lower Lonsdale to Deep Cove, and beyond to West Vancouver, Vancouver, and Burnaby."
      ),
      ...serviceAreas.map((area) => bulletItem(area)),
      paraWithLink("", "View All Service Areas", "/service-areas", ""),
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
    heading: "Ready to Protect Your North Vancouver Home?",
    body: "Clogged gutters cause water damage that costs thousands to repair. Don't wait for overflow or foundation problems. Schedule your professional gutter cleaning in North Vancouver today. Call 236-688-3248 or email hello@mintsanitary.com. Use code MINT26 for 10% off your first service.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/contact",
  },
];

await replaceDoc("areaService", "gutter-cleaning", {
  title: "Gutter Cleaning Services in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "gutter-cleaning"),
  heroHeading: "Gutter Cleaning Services in North Vancouver",
  heroIntro:
    "North Vancouver homes sit at the base of the North Shore mountains, in one of the wettest climates in Canada. Gutters are the first line of defense against that rain, moving water off the roof and away from siding, fascia, and the foundation. When they clog with leaves, needles, and moss, that protection disappears, and clogged gutters cause expensive damage fast, from rotted fascia boards to soaked basements. Mint Sanitary provides professional gutter cleaning for homes throughout North Vancouver, from Lower Lonsdale to Lynn Valley to Deep Cove, with hand debris removal, downspout flushing, and a full inspection on every visit.",
  heroImage,
  metaTitle: "Gutter Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "Professional gutter cleaning in North Vancouver. Hand debris removal, downspout flushing, and a full inspection on every visit. Free quotes.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver gutter cleaning migrated");
