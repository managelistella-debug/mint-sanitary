import {
  key,
  uploadImage,
  replaceDoc,
  heading,
  para,
  paraWithLink,
  imageBlock,
} from "./lib.mjs";

/**
 * /services/move-in-move-out-cleaning — migrated from the hand-coded page
 * now parked at /services/move-in-move-out-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The old page has two separate checklist card grids (Move-In and
 *    Move-Out), but whatsIncluded only allows one per page and several
 *    card titles collide between the two lists ("Kitchen", "Bathrooms").
 *    Both grids were combined into a single whatsIncluded section, with
 *    each card title prefixed "Move-In:" / "Move-Out:" to disambiguate.
 *    Every item is preserved verbatim; only the prefix is added.
 *  - The surrounding prose (what move-in/move-out cleaning is, booking
 *    windows, the BC Residential Tenancy Act paragraph) sits in its own
 *    Rich Text sections immediately around the checklist grid, matching
 *    its original position.
 *  - Every internal link (North Vancouver page, /rates, /service-areas)
 *    is preserved as a real Portable Text mark via paraWithLink.
 *  - Tile name + blurb reused verbatim from the "Move-In / Move-Out
 *    Cleaning" tile on /services/house-cleaning, the only place this
 *    slug already had established tile copy.
 *  - The page passes no ctaHref prop to ServicePageLayout, so the final
 *    CTA uses the component's default of /contact, not /rates.
 */

const moveInChecklist = [
  ["Move-In: Kitchen", [
    "Clean and sanitize inside all cabinets and drawers",
    "Deep clean inside the oven, stovetop, and range hood",
    "Clean inside the refrigerator, freezer, and shelves",
    "Wipe down inside the microwave and dishwasher",
    "Sanitize countertops, backsplash, and sink",
    "Clean and polish faucet and fixtures",
    "Degrease cabinet fronts and handles",
  ]],
  ["Move-In: Bathrooms", [
    "Scrub and sanitize the toilet inside and out",
    "Clean the bathtub, shower walls, and shower door",
    "Scrub tile grout and remove soap scum and buildup",
    "Polish mirrors and glass",
    "Clean and sanitize the vanity, sink, and countertop",
    "Wipe fixtures, towel bars, and hooks",
    "Clean inside medicine cabinets and shelves",
    "Clean the exhaust fan and vents",
    "Mop floors",
  ]],
  ["Move-In: Bedrooms", [
    "Dust all surfaces, shelves, and ledges",
    "Clean inside all closets, drawers, and storage",
    "Wipe doors, door frames, and handles",
    "Clean light switches, outlet covers, and baseboards",
    "Remove cobwebs",
    "Clean windows from the inside, including tracks and sills",
  ]],
  ["Move-In: Living Areas", [
    "Dust and wipe all surfaces and shelving",
    "Clean light fixtures, ceiling fans, and vents",
    "Wipe window sills, blinds, and tracks",
    "Wipe baseboards and door frames",
    "Clean the fireplace mantle and surround, if applicable",
  ]],
  ["Move-In: Floors", [
    "Vacuum all carpeted areas thoroughly",
    "Mop all hard floors",
    "Clean floor edges, corners, and under-cabinet toe kicks",
  ]],
];

const moveOutChecklist = [
  ["Move-Out: Bedrooms & Living Areas", [
    "Dust all surfaces, shelves, and ledges",
    "Clean inside closets and drawers",
    "Wipe doors, handles, light switches, and baseboards",
    "Vacuum and mop floors",
    "Clean windows from the inside",
  ]],
  ["Move-Out: Kitchen", [
    "Deep clean the oven, stovetop, and range hood",
    "Clean inside the refrigerator and freezer",
    "Wipe down all cabinets inside and out",
    "Sanitize the sink, faucet, and countertops",
    "Clean inside the microwave and dishwasher",
    "Degrease the backsplash",
  ]],
  ["Move-Out: Bathrooms", [
    "Scrub and sanitize the toilet, tub, and shower",
    "Clean tile grout and remove soap scum",
    "Polish mirrors and fixtures",
    "Wipe the vanity, medicine cabinet, and shelves",
    "Mop floors",
  ]],
  ["Move-Out: Throughout the Property", [
    "Dust and clean all light fixtures and ceiling fans",
    "Wipe all door handles, switches, and outlet covers",
    "Vacuum and mop all floors",
    "Clean interior windows, tracks, and sills",
    "Remove cobwebs",
    "Remove all trash and cleaning debris",
  ]],
];

const faqItems = [
  ["What's the difference between move-in and move-out cleaning?", "Move-in cleaning prepares an empty property for a new occupant to unpack into. Move-out cleaning prepares a property to be handed back after a tenant leaves, meeting the condition standard expected at inspection."],
  ["How much does move-in or move-out cleaning cost?", "Both start around $390 for 500 to 600 square feet, scaling up by size. Move-out cleaning can reach $850 or more for larger properties."],
  ["How far in advance should I book?", "For move-in cleaning, book one to two days before your move-in date, once the property is empty. For move-out cleaning, one to two weeks ahead is recommended, though we can often accommodate last-minute requests."],
  ["Do you clean inside appliances?", "Yes. Both services include the inside of the oven, stovetop, range hood, refrigerator, freezer, microwave, and dishwasher."],
  ["Will move-out cleaning help me get my deposit back?", "A thorough move-out clean addresses the reasonably clean condition standard set by the BC Residential Tenancy Act, reducing the risk of cleaning-related deductions."],
  ["How long does a move-in or move-out clean take?", "A typical two to three bedroom property takes four to six hours for either service."],
  ["Do I need to be present during the clean?", "No. Many clients arrange access and aren't on site, especially for move-out cleaning after they've already relocated."],
  ["Can you clean a property that still has furniture in it?", "Both services are designed for an empty property, which is what makes them more thorough than a standard visit."],
  ["What products do you use?", "Eco-friendly, plant-based, non-toxic products along with HEPA-filter vacuums."],
  ["Do you offer a satisfaction guarantee?", "Yes. Every clean comes with a 24-hour satisfaction guarantee."],
  ["Is there a discount for first-time customers?", "Yes. New customers get 10% off their first clean with code MINT26."],
  ["Do you serve areas outside North Vancouver?", "Yes. We serve Greater Vancouver broadly, including West Vancouver, Vancouver, Burnaby, and surrounding areas."],
];

console.log("→ /services/move-in-move-out-cleaning");

const allCards = [...moveInChecklist, ...moveOutChecklist].map(([title, items]) => ({
  _key: key("card"),
  title,
  items,
}));

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "These are two distinct services built around a specific moment: the handoff between one occupant and the next. A move-in clean gets a property ready for you to unpack into. A move-out clean gets a property ready to hand back, whether that's to a landlord, a new buyer, or a property manager. Both go deeper than a standard house cleaning because both happen when a space is empty, the only time you can reach every cabinet, closet, and appliance without furniture in the way."
      ),
      paraWithLink(
        "If you're in North Vancouver and want neighborhood-specific detail, visit our ",
        "North Vancouver move-in and move-out cleaning page",
        "/north-vancouver/move-in-move-out-cleaning",
        "."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Move-In Cleaning",
    body: [
      para(
        "Move-in cleaning is a deep clean performed before you move your belongings in, covering every room, including areas a regular clean doesn't touch: inside appliances, inside cabinets and closets, bathrooms top to bottom, and every floor surface. Book it one to two days before your move-in date, once the previous occupant has moved out and before your furniture arrives. A typical two to three bedroom home takes four to six hours."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Move-In and Move-Out Cleaning Checklists",
    cards: allCards,
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "A professional move-in clean saves you time during an already busy week, removes allergens and residue left by previous occupants, and gives you a documented, clean baseline for the property's condition. We use HEPA-filter vacuums and eco-friendly products that reach places household supplies typically can't match."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Move-Out Cleaning",
    body: [
      para(
        "Move-out cleaning is a deep, one-time clean performed after your belongings are out and before the keys change hands, built around the standard a property needs to meet when a tenant leaves. The BC Residential Tenancy Act requires tenants to leave a rental in reasonably clean condition. Landlords are permitted to deduct from a security deposit for cleaning costs, for repair or damage beyond normal wear and tear, or for disposal of items left behind. A thorough move-out clean is the most direct way to protect your deposit and avoid a dispute."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "Book one to two weeks before your move-out date if you can, especially near month-end when moving demand is high. Last-minute requests can often still be accommodated. A typical two to three bedroom property takes four to six hours."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Move-In vs. Move-Out: What's the Difference",
    body: [
      para(
        "Both are deep, one-time cleans covering the whole property, inside appliances included. Move-in cleaning is about a fresh start, timed to your arrival. Move-out cleaning is about handover, timed to your departure and focused on meeting the condition standard a landlord or property manager expects at inspection. If you're doing both, we can schedule the two cleans back to back to fit your timeline."
      ),
      await imageBlock(
        "/move-out-cleaning-north-vancouver-living-room.jpg",
        "Move-out cleaning turning an empty living room spotless"
      ),
      para(
        "Eco-friendly, non-toxic, plant-based cleaning products · HEPA-filter vacuums · background-checked, bonded, and insured staff · available 7 days a week, including evenings · transparent free estimates with no hidden fees · 24-hour satisfaction guarantee · 10% off your first clean with code MINT26."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Pricing Overview",
    body: [
      paraWithLink(
        "Move-in and move-out cleaning both start around $390 for a 500 to 600 square foot property, scaling up with size and condition. Move-out cleaning can range up to $850 or more for larger properties in the 4000 to 5000 square foot range. Most jobs are priced by property size and condition rather than a flat rate. For the full pricing table, visit our ",
        "rates page",
        "/rates",
        "."
      ),
      heading("We Serve These Cities"),
      para(
        "Mint Sanitary is based in North Vancouver and provides move-in and move-out cleaning across the Lower Mainland, including West Vancouver, Vancouver, and Burnaby."
      ),
      paraWithLink(
        "If you're in North Vancouver, see our ",
        "North Vancouver move-in and move-out cleaning page",
        "/north-vancouver/move-in-move-out-cleaning",
        " for local detail."
      ),
      paraWithLink(
        "To check whether we cover your neighborhood, visit our ",
        "service areas page",
        "/service-areas",
        "."
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
    heading: "Ready to Book?",
    body: "Get a free, transparent estimate for your move-in or move-out clean. Visit our rates page for pricing by property size, or call 236-688-3248 or email hello@mintsanitary.com to schedule.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/contact",
  },
];

await replaceDoc("cleaningType", "move-in-move-out-cleaning", {
  title: "Move-In and Move-Out Cleaning in Greater Vancouver",
  name: "Move-In / Move-Out Cleaning",
  tileDescription:
    "A thorough clean for empty units, built for tenants, landlords, and homeowners closing out a lease or a sale.",
  tileImage: await uploadImage(
    "/move-in-cleaning-north-vancouver-apartment.jpg",
    "Move-in and move-out cleaning in Greater Vancouver"
  ),
  hasOwnPage: true,
  heroHeading: "Move-In and Move-Out Cleaning in Greater Vancouver",
  heroIntro:
    "Moving is one of the few times a home needs more than a routine clean: it needs a full reset. Mint Sanitary provides move-in cleaning and move-out cleaning across Greater Vancouver, including North Vancouver, West Vancouver, Vancouver, and Burnaby.",
  heroImage: await uploadImage(
    "/move-in-cleaning-north-vancouver-apartment.jpg",
    "Move-in and move-out cleaning in Greater Vancouver"
  ),
  metaTitle: "Move-In & Move-Out Cleaning | Greater Vancouver",
  metaDescription:
    "Move-in and move-out cleaning across Greater Vancouver. Deep cleans for a fresh start or a smooth handover. Free estimates, 10% off first clean.",
  sections,
  published: true,
});

console.log("\n✓ Move-in/move-out cleaning migrated");
