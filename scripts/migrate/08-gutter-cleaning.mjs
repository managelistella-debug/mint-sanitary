import { key, uploadImage, replaceDoc, para, paraWithLink, imageBlock } from "./lib.mjs";

/**
 * /services/gutter-cleaning — migrated from the hand-coded page now parked at
 * /services/gutter-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The trailing sentence after the process grid ("Most homes take between
 *    1.5 and 2.5 hours...") and the trailing sentence after the Why Choose
 *    grid ("Mint Sanitary is background-checked...") have no home inside
 *    processChecklist / whyChoose (neither section type has a trailing-note
 *    field), so each became its own short heading-less Rich Text block
 *    immediately after, matching the pattern used for cross-link paragraphs
 *    in the strata and commercial pilots.
 *  - The service-area map image that sat at the bottom of the source page is
 *    kept as an image-only block inside the closing Rich Text section, same
 *    treatment as the pilot's strata-cleaning migration.
 */

const included = [
  { title: "Complete Debris Removal", body: "Our team hand removes leaves, twigs, pine needles, moss, shingle granules, dirt, and general buildup from every section of gutter. Vacuum equipment handles the fine particles that hand removal can't catch, so the channel is clear from end to end." },
  { title: "Downspout Flushing", body: "A clogged downspout can undo a clean gutter in one storm. We flush each downspout with high pressure water to confirm it's fully clear and that water moves away from the foundation the way it's supposed to." },
  { title: "System Inspection", body: "While we're up there, a technician checks for loose brackets, missing hardware, rust spots, seam leaks, and pitch issues. Every visit includes before and after photo documentation, so you can see exactly what we found and what we fixed." },
  { title: "Gutter Guard Evaluation", body: "If your home already has gutter guards or screens installed, we clean them as part of the service and let you know if they're damaged or due for replacement." },
  { title: "Environmentally Responsible Disposal", body: "Debris gets bagged and hauled away, not dumped in the yard or washed into a storm drain. Disposal is handled properly, in line with local stormwater rules." },
];

const processSteps = [
  { title: "Safety Setup", body: "We set up extension ladders on stable, level ground and use harnesses and protective gear throughout the job. You don't need to be on a ladder for any part of this." },
  { title: "Manual Debris Removal", body: "Debris comes out by hand with a scoop, working section by section. Heavily clogged gutters on treed properties can take 30 to 45 minutes per side, so we take the time needed to get it right." },
  { title: "Vacuum and Pressure Flushing", body: "A high powered gutter vacuum picks up the fine debris that hand removal leaves behind, and each downspout gets flushed with controlled water pressure to clear any remaining blockage." },
  { title: "Water Testing and Verification", body: "We pour water through the system to confirm it pitches properly toward the downspouts and that nothing pools along the way. This step catches sagging sections that debris removal alone wouldn't reveal." },
  { title: "Bracket and Fastener Check", body: "Loose brackets and fasteners get tightened on the spot. Leaking seams, rust spots, and other damage get noted for the service report." },
  { title: "Documentation and Report", body: "Before and after photos go into a detailed service report, emailed to you the same day, with any repair recommendations and a suggested timeline if follow up work is needed." },
];

const whyChoose = [
  { title: "Professional Safety Equipment", body: "We bring extension ladders, harnesses, and protective gear to every job, so there's zero risk to you from working at height." },
  { title: "Thorough Inspection Included", body: "Every cleaning includes a full inspection, which catches rust developing inside the gutter, seam leaks, and fascia rot hidden behind the gutter line while repairs are still small and inexpensive." },
  { title: "Before and After Photo Documentation", body: "You get photos and a written report by email after every visit, with clear repair recommendations if anything needs attention." },
  { title: "Eco-Friendly Disposal", body: "Debris is bagged and disposed of properly, in line with regional stormwater bylaws, not left in the yard or washed into a storm drain." },
  { title: "7-Day Availability", body: "We work weekdays, evenings, and weekends, with same-week service across most of our Greater Vancouver service area. Call 236-688-3248 to book." },
  { title: "Satisfaction Guarantee", body: "If something isn't right after we leave, call us within 24 hours and we'll come back to fix it at no charge." },
];

const faqItems = [
  { question: "How often should gutters be cleaned in Greater Vancouver?", answer: "Most homes need gutter cleaning at least twice a year, once in spring and once in fall. Properties with heavy tree cover nearby often need three to four cleanings a year to keep up with leaf and needle drop, especially before the fall rains start." },
  { question: "Can I clean my own gutters instead of hiring a professional?", answer: "You can, but a professional does the job more safely and more thoroughly. Ladder falls are one of the leading causes of home injury, and a DIY clean often misses hidden problems like seam leaks, rust, or fascia rot that only show up on close inspection." },
  { question: "What's the difference between gutter cleaning and gutter guards?", answer: "Cleaning removes the debris that's already built up in the gutter. Guards reduce how much debris gets in going forward, but they don't remove the need for cleaning entirely, since fine debris like pine needles and shingle granules still gets through. Most homes do best with guards plus a regular cleaning schedule." },
  { question: "What kind of damage can clogged gutters cause?", answer: "Clogged gutters let water pool and overflow, which damages fascia boards, soffits, siding, and eventually the foundation. Left unaddressed, that water infiltration can lead to mold, basement leaks, and structural repairs costing $3,000 to $25,000." },
  { question: "Is gutter cleaning covered by homeowner's insurance?", answer: "Standard homeowner's policies typically don't cover routine gutter maintenance, and damage traced back to neglected gutters may be excluded from coverage altogether. Some insurers list regular maintenance as a condition for a water damage claim to be paid." },
  { question: "What causes moss to grow in gutters, and how do you prevent it?", answer: "Moss thrives in the mild, wet conditions common across the region, especially on shaded rooflines. It blocks water flow and speeds up rust and seam damage, so trimming back overhanging branches for more sunlight and scheduling regular professional cleaning both help keep it under control." },
  { question: "What happens if gutters are never cleaned during the rainy season?", answer: "Skipping cleaning through the wet months lets debris build up right when rainfall is heaviest, which leads to water backup, overflow, and foundation saturation. In colder snaps, standing water in gutters can also freeze and force water back under the roof shingles." },
  { question: "Do you repair gutters or install gutter guards?", answer: "Our main service is professional cleaning with a full system inspection. If we find damage during a cleaning, we'll point it out and provide a repair quote, and we're happy to talk through gutter guard options and recommend installers we trust." },
  { question: "How much does gutter cleaning cost?", answer: "Pricing depends on the size of the home, roofline complexity, and how clogged the gutters are. For current rates, visit our rates page or call 236-688-3248 for a free, no obligation quote." },
  { question: "How do I book a gutter cleaning?", answer: "You can book online or call 236-688-3248. Free estimates include a property walkthrough, a gutter assessment, a cleaning quote, and any repair recommendations, and usually take 15 to 20 minutes. New customers get 10% off their first clean with code MINT26." },
];

console.log("→ /services/gutter-cleaning");

const heroImage = await uploadImage(
  "/gutter-cleaning-north-vancouver-hero.webp",
  "Gutter cleaning in Greater Vancouver"
);

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Our Gutter Cleaning Service",
    intro: "Every gutter cleaning visit covers the full system, not just the parts you can see from the ground.",
    cards: included.map(({ title, body }) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Gutter Cleaning Matters in a Coastal Climate",
    body: [
      para(
        "Coastal Greater Vancouver gets a lot of rain, and most of it lands between October and March. When gutters are clogged, that water has nowhere to go but over the edge and down the side of the house. Standing water sitting in a blocked gutter for weeks at a time damages fascia boards, soffits, siding, and eventually the foundation itself. Water that gets past the gutter line and into the foundation can lead to mold, basement leaks, and structural damage. Repairs for that kind of water infiltration commonly run from $3,000 to $25,000, depending on how far the damage has spread before anyone notices it. A clean gutter system is one of the cheapest ways to avoid that bill entirely."
      ),
      para(
        "The region's tree cover adds another layer to the problem. Leafy, treed neighbourhoods across Greater Vancouver see a single residential gutter accumulate a surprising amount of leaves, twigs, and shingle granules in the fall alone, more than most homeowners expect. Left in place over a wet winter, that debris turns into a dense, waterlogged mat that blocks water flow completely. Moisture and mild temperatures also create good conditions for moss growth on rooftops and inside gutter channels. Moss blocks water flow the same way leaf debris does, and it holds moisture against the metal or vinyl of the gutter itself, which speeds up rust and seam failure over time."
      ),
      para(
        "Homeowner's insurance usually doesn't cover the cost of gutter maintenance, and damage caused by neglected gutters may be excluded from a claim entirely. Regular cleaning is one of the few maintenance tasks that directly affects whether a future water damage claim gets paid or denied."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Gutter Cleaning Process",
    intro:
      "We follow the same six step process on every job, whether it's a single storey rancher or a three storey home with steep rooflines.",
    steps: processSteps.map(({ title, body }) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "Most homes take between 1.5 and 2.5 hours from start to finish, depending on size, roofline complexity, and how long it's been since the last cleaning."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Greater Vancouver Homeowners Choose Mint Sanitary",
    image: heroImage,
    items: whyChoose.map(({ title, body }) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Gutter Cleaning Across Greater Vancouver",
    body: [
      para(
        "Mint Sanitary provides gutter cleaning for homes and businesses in North Vancouver, West Vancouver, Vancouver, Burnaby, and other communities across the region."
      ),
      paraWithLink(
        "If you're not sure whether your address falls inside our service area, call 236-688-3248 or reach out through our ",
        "contact page",
        "/contact",
        " and we'll let you know."
      ),
      paraWithLink(
        "If you're located specifically in North Vancouver, visit our ",
        "gutter cleaning in North Vancouver",
        "/north-vancouver/gutter-cleaning",
        " page for local detail."
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
    heading: "Ready to Book Gutter Cleaning?",
    body: "Get a free, no obligation quote for your home or business. Background-checked, bonded, and insured technicians, with a 4.9 out of 5 rating from more than 120 reviews.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "gutter-cleaning", {
  title: "Gutter Cleaning Services in Greater Vancouver",
  name: "Gutter Cleaning",
  // Verbatim from the homepage "What We Do" tile grid (app/page.tsx) — the
  // only place this slug already carries generic, non-city tile copy.
  tileDescription:
    "Clogged gutters lead to water damage, foundation problems, and pest issues. We clear debris and check for blockages so water flows where it should.",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Gutter Cleaning Services in Greater Vancouver",
  heroIntro:
    "Your gutters have one job: move rainwater off the roof and away from the foundation. When they fill with leaves, needles, and grit, that water backs up under the roofline instead. Mint Sanitary provides professional gutter cleaning for homes and light commercial properties across Greater Vancouver, with hand debris removal, downspout flushing, and a full inspection on every visit.",
  heroImage,
  metaTitle: "Professional Gutter Cleaning Services | Mint Sanitary",
  metaDescription:
    "Professional gutter cleaning across Greater Vancouver. Hand debris removal, downspout flushing, and a full inspection on every visit. Get a free quote.",
  sections,
  published: true,
});

console.log("\n✓ Gutter cleaning migrated");
