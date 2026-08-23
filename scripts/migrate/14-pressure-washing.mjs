import {
  key,
  uploadImage,
  replaceDoc,
  heading,
  para,
  paraWithLink,
  customTile,
} from "./lib.mjs";

/**
 * /services/pressure-washing — migrated from the hand-coded page now
 * parked at /services/pressure-washing-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "Pressure Washing vs. Soft Washing" is a two-card grid, so it took
 *    the page's one whatsIncluded slot.
 *  - "Our Pressure Washing Services" was four image tiles linking to
 *    same-page anchors on /north-vancouver/pressure-washing, not to
 *    /services/* pages, so it can't be a ref-based serviceTiles section.
 *    It uses serviceTiles' `customTiles` (hand-written tiles carrying their
 *    own href), retitled "Types of Pressure Washing We Offer" per the
 *    client, so it matches the site's standard tile styling.
 *  - "Why Professional Cleaning Matters" is a second four-card grid, but
 *    whatsIncluded is already used above (not repeatable), so it became
 *    a Rich Text section of heading/paragraph pairs.
 *  - "Our Process" (four numbered steps, no separate checklist) is a
 *    clean fit for processChecklist, with checklistItems left empty.
 *  - "Pricing" is now a real pricing section: the three price ranges from
 *    the old narrative paragraph became tiers, with short bodies adapted
 *    from each service's own description. The /rates link follows in a small
 *    Rich Text block, since pricing `notes` can't hold a link.
 *  - The "Serving Greater Vancouver" block was removed at the client's
 *    request. That also dropped its links to /north-vancouver,
 *    /north-vancouver/pressure-washing, and /service-areas.
 *  - Tile name + blurb reused verbatim from the "Pressure Washing" tile
 *    on the homepage, the only place this slug already had established
 *    tile copy.
 */

const ourServices = [
  ["Driveway Pressure Washing", "/pressure-washing-driveway-north-vancouver.webp", "/north-vancouver/pressure-washing#driveway-pressure-washing", "Concrete, asphalt, and paver driveways collect oil stains, tire marks, and organic growth over time. High-pressure treatment strips these away, removes slippery moss and algae, and preps the surface for sealing."],
  ["Deck and Patio Cleaning", "/pressure-washing-deck-patio-north-vancouver.webp", "/north-vancouver/pressure-washing#deck-patio-cleaning", "Wood decks and composite patios need soft washing: low pressure with a biodegradable detergent that lifts organic growth without damaging the wood grain or voiding a composite warranty."],
  ["House Washing", "/pressure-washing-house-washing-north-vancouver.webp", "/north-vancouver/pressure-washing#house-washing", "Home siding builds up algae and mold over time, especially on shaded walls. Vinyl, fiber cement, cedar, and stucco all call for soft washing to clean thoroughly without risking damage."],
  ["Fence Washing", "/pressure-washing-fence-north-vancouver.webp", "/north-vancouver/pressure-washing#fence-washing", "Cedar, vinyl, and composite fencing hold up better with regular cleaning. Soft washing clears algae and moss without scarring the wood grain, and preps the surface for staining or sealing."],
];

const whyItMatters = [
  ["Curb Appeal and Property Value", "Homes with strong curb appeal sell for 7 to 17% more than similar homes with a neglected exterior. A clean driveway, deck, and set of siding shapes the first impression buyers, guests, and neighbors form of your home."],
  ["Protecting Your Investment", "Moss and algae don't just sit on the surface. They feed on organic material in paint, wood, and mortar joints, which speeds up rot, cracking, and paint failure. Cleaning at the right interval catches this before it turns into a repair bill."],
  ["Safety", "Moss and algae make driveways, decks, and walkways slippery, and that risk climbs during the wet months of the year. Regular cleaning removes the growth before it becomes a hazard for kids, pets, and older family members."],
  ["Maintenance Timing", "Most surfaces benefit from cleaning every 12 to 24 months. Spring cleaning, in April and May, clears out winter buildup. Fall cleaning, in September and October, gets surfaces ready for the wet season ahead."],
];

const processSteps = [
  ["Assessment", "We inspect the surface, identify the material, and test an inconspicuous spot to confirm the right PSI and cleaning method. This step is free and comes with a transparent quote."],
  ["Pre-treatment", "We apply a biodegradable cleaning solution that breaks down moss, algae, and mildew at the root. The solution dwells for several minutes before rinsing, so it does the work instead of raw pressure."],
  ["Washing and rinsing", "We clean at the correct PSI for the surface, using wide-angle nozzles and steady, even strokes."],
  ["Final inspection and drying", "We check for missed spots and give you a drying timeline before any staining, sealing, or other follow-up work."],
];

const faqItems = [
  ["What's the difference between pressure washing and soft washing?", "Pressure washing uses high PSI, 1,500 to 4,500, for hard surfaces like concrete and pavers. Soft washing uses low pressure, under 700 PSI, with a biodegradable detergent for wood, composite, and siding. We match the method to your surface during the free assessment."],
  ["How often should I have my property pressure washed?", "Most homes benefit from cleaning every 12 to 24 months, with spring (April to May) and fall (September to October) as the two ideal windows. Shaded or heavily wooded properties may need more frequent service."],
  ["Is pressure washing safe for all surfaces?", "Only when the technique matches the material. Concrete, asphalt, and pavers handle higher PSI, while wood, composite, and siding need soft washing at lower pressure. Using the wrong method on the wrong surface is the most common cause of DIY damage."],
  ["Do you use eco-friendly cleaning products?", "Yes. Our cleaning solutions are biodegradable and safe for pets, plants, and local stormwater systems, and our process complies with municipal stormwater regulations."],
  ["How much does pressure washing cost?", "Pricing depends on square footage, surface type, and condition. Driveways typically run $150 to $300, deck cleaning runs $150 to $400, and house washing runs $200 to $850+ depending on home size. Visit /rates for a detailed breakdown or request a free estimate."],
  ["Can pressure washing help before I sell my home?", "Yes. Homes with strong curb appeal sell for 7 to 17% more than comparable homes with a dirty exterior. A clean driveway and freshly washed siding make a strong first impression in listing photos and showings."],
  ["Should I pressure wash my deck myself, or hire a professional?", "DIY pressure washing is one of the most common ways homeowners damage their own deck. Excessive PSI gouges wood fibers and can lead to $1,200 or more in board repairs. Professional soft washing uses controlled pressure and the right chemistry to clean safely."],
  ["Do you offer free estimates?", "Yes. Every job starts with a free, no-obligation on-site or phone assessment, and we provide a transparent quote before any work begins."],
  ["What areas do you serve?", "We serve Greater Vancouver, with North Vancouver as our home base. Visit /service-areas for the full list of neighborhoods and cities we cover, or see our North Vancouver page at /north-vancouver for local details."],
  ["What's included in a house washing service?", "House washing typically covers siding, fascia, soffits, foundation trim, window exteriors, and exterior trim boards, cleaned with soft washing to protect the surface material."],
];

console.log("→ /services/pressure-washing");

const serviceTiles = [];
for (const [title, image, href, description] of ourServices) {
  serviceTiles.push(await customTile({ title, image, href, description }));
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para("We're insured, rated 4.9/5 from 120+ reviews, and available 7 days a week."),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Pressure Washing vs. Soft Washing: What's the Difference?",
    intro:
      "These are two different techniques, and using the wrong one on the wrong surface causes damage. A trained technician tests the surface first and picks the method and pressure level that fits the material, not the other way around.",
    cards: [
      {
        _key: key("card"),
        title: "Pressure Washing",
        body: "Uses high-pressure water, typically 1,500 to 4,500 PSI, to strip dirt, grime, and stains from hard surfaces. It works well on concrete, pavers, asphalt, and stone.",
        items: [],
      },
      {
        _key: key("card"),
        title: "Soft Washing",
        body: "Uses low pressure, under 700 PSI, paired with a biodegradable detergent. It's the safer choice for wood decks, composite decking, painted trim, and home siding, where high pressure can gouge fibers, crack panels, or force water behind the surface.",
        items: [],
      },
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Pressure Washing We Offer",
    tiles: [],
    customTiles: serviceTiles,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Professional Cleaning Matters",
    body: whyItMatters.flatMap(([title, body]) => [heading(title), para(body)]),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Process",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why DIY Pressure Washing Backfires",
    body: [
      para(
        "Renting equipment looks like the cheaper option, but the math rarely works out. Rental units cost $40 to $100 per day, and an untrained homeowner typically needs 9 or more hours to finish a job a trained crew handles in about 2.5 hours. The bigger cost is damage. Incorrect pressure or technique can crack a window (repairs run $300 to $750) or splinter deck boards badly enough to need $1,200 or more in repairs. A rental machine has no way to tell you the safe PSI for your specific material, so that judgment call is left entirely to you."
      ),
      heading("Eco-Friendly, Insured, and Available 7 Days a Week"),
      para(
        "Our cleaning solutions are biodegradable and safe for pets, plants, and stormwater systems, and our methods comply with local stormwater bylaws. We carry WCB coverage and liability insurance, offer free estimates and transparent pricing, and never lock customers into contracts. New customers get 10% off their first clean with code MINT26."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Pricing",
    intro:
      "Every property is different, so we quote based on square footage, material, and condition. As a general guide:",
    tiers: [
      {
        _key: key("tier"),
        title: "Driveway Pressure Washing",
        range: "$150 to $300",
        body: "Concrete, asphalt, and paver driveways, cleaned at the correct PSI for the surface.",
      },
      {
        _key: key("tier"),
        title: "Deck Cleaning",
        range: "$150 to $400",
        body: "Wood decks and composite patios, soft washed so the pressure never gouges the grain.",
      },
      {
        _key: key("tier"),
        title: "House Washing",
        range: "$200 to $850+",
        body: "Siding, fascia, soffits, and trim. The final number depends on home size.",
      },
    ],
    notes: [],
  },
  {
    // The rates link that closed the old Pricing paragraph. Pricing's `notes`
    // are plain strings and can't carry a real link, so it sits just below.
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Visit our ",
        "rates page",
        "/rates",
        " for full pricing details, or call for a free, no-obligation estimate."
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
    heading: "Ready to Restore Your Driveway, Deck, Siding, or Fence?",
    body: "Get a free, transparent quote at /rates or call 236-688-3248. New customers save 10% with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "pressure-washing", {
  title: "Professional Pressure Washing and Soft Washing Services",
  name: "Pressure Washing",
  tileDescription:
    "Driveways, siding, walkways, and commercial exteriors take a beating from rain, moss, and everyday traffic. Our pressure washing service strips away buildup and restores surfaces without damaging them.",
  tileImage: await uploadImage(
    "/pressure-washing-house-washing-north-vancouver.webp",
    "Pressure washing in Greater Vancouver"
  ),
  hasOwnPage: true,
  heroHeading: "Professional Pressure Washing and Soft Washing Services",
  heroIntro:
    "Dirt, moss, algae, and grime build up on every exterior surface over time. Left alone, that buildup turns slippery, stains permanently, and speeds up wear on wood, concrete, and siding. Mint Sanitary provides professional exterior cleaning across Greater Vancouver, covering driveways, decks, patios, house siding, and fences.",
  heroImage: await uploadImage(
    "/pressure-washing-house-washing-north-vancouver.webp",
    "Pressure washing in Greater Vancouver"
  ),
  metaTitle: "Pressure Washing & Soft Washing | Mint Sanitary",
  metaDescription:
    "Professional pressure washing and soft washing for driveways, decks, siding, and fences across Greater Vancouver. Eco-friendly, insured, free estimates.",
  sections,
  published: true,
});

console.log("\n✓ Pressure washing migrated");
