import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  heading,
  para,
  paraWithLink,
} from "./lib.mjs";

/**
 * /north-vancouver/move-in-move-out-cleaning — migrated from the hand-coded
 * page now parked at /north-vancouver/move-in-move-out-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The page has two checklist card grids (Move-In, Move-Out). Whats
 *    Included is single-instance, so Move-In's cards became the Whats
 *    Included section; Move-Out's cards became heading/paragraph pairs in a
 *    Rich Text block (which also carries the BC Residential Tenancy Branch
 *    link as a real Portable Text mark).
 *  - "More Cleaning Services" links all point at other /north-vancouver/...
 *    pages, so per the mapping rules they're Rich Text paragraphs with real
 *    links rather than Service Tiles.
 */

const moveInChecklist = [
  ["Kitchen", [
    "Clean and sanitize inside all cabinets and drawers",
    "Deep clean inside the oven, stovetop, and range hood",
    "Clean inside the refrigerator, freezer, and shelves",
    "Wipe down inside the microwave and dishwasher",
    "Sanitize countertops, backsplash, and sink",
    "Clean and polish faucet and fixtures",
    "Degrease cabinet fronts and handles",
  ]],
  ["Bathrooms", [
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
  ["Bedrooms", [
    "Dust all surfaces, shelves, and ledges",
    "Clean inside all closets, drawers, and storage",
    "Wipe doors, door frames, and handles",
    "Clean light switches, outlet covers, and baseboards",
    "Remove cobwebs",
    "Clean windows from inside, including tracks and sills",
  ]],
  ["Living Areas", [
    "Dust and wipe all surfaces and shelving",
    "Clean light fixtures, ceiling fans, and vents",
    "Wipe window sills, blinds, and tracks",
    "Wipe baseboards and door frames",
    "Clean the fireplace mantle and surround, if applicable",
  ]],
  ["Floors", [
    "Vacuum all carpeted areas thoroughly",
    "Mop all hard floors",
    "Clean floor edges, corners, and under-cabinet toe kicks",
  ]],
];

const moveOutChecklist = [
  ["Bedrooms & Living Areas", [
    "Dust all surfaces, shelves, and ledges",
    "Clean inside closets and drawers",
    "Wipe doors, handles, and light switches",
    "Wipe baseboards",
    "Vacuum and mop floors",
    "Clean windows from inside",
  ]],
  ["Kitchen", [
    "Deep clean the oven, stovetop, and range hood",
    "Clean inside the refrigerator and freezer",
    "Wipe down all cabinets, inside and out",
    "Sanitize the sink, faucet, and countertops",
    "Clean inside the microwave and dishwasher",
    "Degrease the backsplash",
  ]],
  ["Bathrooms", [
    "Scrub and sanitize the toilet, tub, and shower",
    "Clean tile grout and remove soap scum",
    "Polish mirrors and fixtures",
    "Wipe the vanity, medicine cabinet, and shelves",
    "Mop floors",
  ]],
  ["Throughout the Property", [
    "Dust and clean all light fixtures and ceiling fans",
    "Wipe all door handles, switches, and outlet covers",
    "Vacuum and mop all floors",
    "Clean interior windows, tracks, and sills",
    "Remove cobwebs",
    "Remove all trash and cleaning debris",
  ]],
];

const whyChooseItems = [
  ["Background-checked and insured", "Every Mint Sanitary cleaner is background-checked, bonded, and insured."],
  ["7-day availability", "We're available 7 days a week, including evenings."],
  ["Transparent pricing", "Every estimate is free and transparent, with no hidden fees."],
  ["Satisfaction guarantee", "If anything's missed, we'll return within 24 hours to fix it at no charge."],
  ["First clean discount", "New customers get 10% off their first clean with code MINT26."],
];

const moreServicesLinks = [
  ["Deep cleaning in North Vancouver", "/north-vancouver/deep-cleaning"],
  ["Post-construction cleaning in North Vancouver", "/north-vancouver/post-construction-cleaning"],
  ["Vacation rental cleaning in North Vancouver", "/north-vancouver/vacation-rental-cleaning"],
  ["House cleaning in North Vancouver", "/north-vancouver/house-cleaning"],
];

const faqItems = [
  ["What's included in move-in cleaning in North Vancouver?", "Inside your kitchen appliances and cabinets, bathrooms, closets, and floors: a deep clean meant to get every surface ready before your furniture arrives."],
  ["What's included in move-out cleaning in North Vancouver?", "The same deep-clean scope as move-in cleaning, with extra attention paid to the details a landlord checks during inspection."],
  ["How much does move-in cleaning cost in North Vancouver?", "Starts around $390 for a 500 to 600 square foot home and increases with square footage."],
  ["How much does move-out cleaning cost in North Vancouver?", "Also starts around $390 for 500 to 600 square feet, up to $850 or more for larger homes between 4,000 and 5,000 square feet."],
  ["How long does move-in cleaning take in North Vancouver?", "A typical 2 to 3 bedroom home takes 4 to 6 hours, depending on the condition left by the previous occupant."],
  ["How long does move-out cleaning take in North Vancouver?", "About 4 to 6 hours for a 2 to 3 bedroom property, similar to move-in timing."],
  ["When should I book move-in cleaning in North Vancouver?", "1 to 2 days before your move date, ideally after the previous occupant has left and before furniture arrives."],
  ["How far ahead should I book move-out cleaning in North Vancouver?", "1 to 2 weeks in advance is ideal, though our team can often fit in last-minute requests."],
  ["Will move-out cleaning guarantee I get my full deposit back in North Vancouver?", "A thorough clean can't guarantee anything, since deposit decisions rest with your landlord, but it directly addresses the cleaning standard required under BC's Residential Tenancy Act. One recent North Vancouver client got their full deposit back after booking with us."],
  ["What can North Vancouver landlords deduct from a security deposit?", "Cleaning costs if the unit wasn't left reasonably clean, repair costs beyond normal wear and tear, and disposal fees for anything left behind."],
  ["Do you offer same-day or short-notice cleaning in North Vancouver?", "We can often fit in short-notice move-out cleaning, though booking 1 to 2 weeks ahead gives you the most flexibility."],
  ["What areas of North Vancouver do you serve?", "Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Norgate, Pemberton Heights, Capilano, Dollarton, and Blueridge, plus West Vancouver, Vancouver, and Burnaby."],
  ["Do I need to be present during move-in cleaning in North Vancouver?", "No. Many clients schedule their move-in clean before picking up keys, and our team can work independently."],
  ["What's the difference between move-in and move-out cleaning in North Vancouver?", "Move-in cleaning prepares a home for you to live in; move-out cleaning prepares a rental for inspection and protects your deposit. Both cover the same deep-clean checklist."],
  ["Do you clean inside appliances during move-out cleaning in North Vancouver?", "Yes, including the oven, fridge, freezer, microwave, and dishwasher, since landlords often check these during inspection."],
  ["Are your cleaning products safe for kids and pets in North Vancouver homes?", "Yes. Eco-friendly, plant-based products and HEPA-filter vacuums in every North Vancouver home we clean."],
  ["Do you offer discounts for move-in or move-out cleaning in North Vancouver?", "New clients get 10% off their first move-in or move-out clean with code MINT26."],
  ["Can you clean North Vancouver condos and apartments, not just houses?", "Yes, including condo towers in Lower Lonsdale and Capilano, with the checklist and crew size adjusted to fit the unit."],
];

console.log("→ /north-vancouver/move-in-move-out-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Move-In Cleaning in North Vancouver",
    intro:
      "Move-in cleaning is a deep clean of your new North Vancouver home before your furniture arrives, covering the inside of appliances, cabinets, closets, bathrooms, and floors. Book for 1 to 2 days before your move date, after the previous occupant has fully vacated and before boxes and furniture show up. A typical 2 to 3 bedroom home in North Vancouver takes 4 to 6 hours.",
    cards: moveInChecklist.map(([title, items]) => ({ _key: key("card"), title, items })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "A move-in clean saves you time during an already busy week and removes allergens, pet dander, and residue left behind by the previous occupant. Our team uses HEPA-filter vacuums and eco-friendly, plant-based products, so you unpack into a genuinely clean space. Years of cleaning homes across North Vancouver taught us the difference between a Lower Lonsdale condo with in-suite laundry and a character home in Pemberton Heights with an older kitchen layout. That familiarity means our team shows up knowing what to expect."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Move-Out Cleaning in North Vancouver",
    body: [
      paraWithLink(
        "Move-out cleaning is built around one goal: protecting your security deposit. British Columbia's Residential Tenancy Act requires tenants to leave a rental in a reasonably clean condition. You can review the province's official guidance through the ",
        "BC Residential Tenancy Branch",
        "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies",
        ". Under the Act, a landlord in North Vancouver can generally deduct for cleaning costs (if the unit wasn't left reasonably clean), repair or damage costs beyond normal wear and tear, and disposal fees for items left behind."
      ),
      para(
        "Book 1 to 2 weeks ahead if you can, though our team can often accommodate last-minute requests. A 2 to 3 bedroom North Vancouver property takes about 4 to 6 hours."
      ),
      ...moveOutChecklist.flatMap(([title, items]) => [heading(title), para(items.join("; "))]),
      para(
        "Our team has worked with enough North Vancouver landlords and property managers to know what they look for during a move-out inspection, including rental towers in Lower Lonsdale and house shares in Norgate. One recent North Vancouver client got their full security deposit back after booking a move-out clean with us."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Move-In vs. Move-Out: What's the Difference in North Vancouver",
    body: [
      para(
        "Move-in and move-out cleaning cover the same ground, appliances, cabinets, bathrooms, and floors, but serve different purposes: getting a home ready to live in versus getting a rental ready for inspection. Both take about the same time for a similar-sized property."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Trusts Mint Sanitary",
    intro:
      "North Vancouver's rainy climate means floors and entryways track in dirt fast, especially during a move when doors stay open and boxes go back and forth. North Vancouver's mix of rental condo towers in Lower Lonsdale and larger family homes in Lynn Valley and Edgemont Village means turnover looks different from one job to the next, and our team adjusts scope and crew size to match.",
    image: await uploadImage(
      "/mint-sanitary-team-north-vancouver.jpg",
      "Mint Sanitary move-in and move-out cleaning team in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Move-In and Move-Out Cleaning Pricing in North Vancouver",
    body: [
      paraWithLink(
        "Move-in cleaning starts around $390 for 500 to 600 square feet and scales up from there. Move-out cleaning follows a similar starting point, $390 for 500 to 600 square feet, up to $850 or more for larger homes in the 4,000 to 5,000 square foot range. Most jobs are priced by square footage rather than a flat rate. See the full ",
        "North Vancouver rate breakdown",
        "/rates",
        " for exact pricing."
      ),
      heading("More Cleaning Services in North Vancouver"),
      ...moreServicesLinks.map(([label, href]) => paraWithLink("", label, href, "")),
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
    heading: "Get a Free Quote for Move-In or Move-Out Cleaning",
    body: "Get a free, transparent estimate and see the full pricing breakdown on our North Vancouver rates page. Prefer to talk it through first? Call 236-688-3248 or email hello@mintsanitary.com.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "move-in-move-out-cleaning", {
  title: "Move-In and Move-Out Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "move-in-move-out-cleaning"),
  heroHeading: "Move-In and Move-Out Cleaning in North Vancouver",
  heroIntro:
    "Moving is stressful enough without worrying about scrub marks in the oven or a landlord holding back your deposit. Mint Sanitary handles move-in and move-out cleaning across North Vancouver, in condo towers in Lower Lonsdale and family homes in Lynn Valley alike. We're based right here in North Vancouver, so our crews know which condo towers have strict move-out checklists and which local landlords do a walk-through with a flashlight.",
  heroImage: await uploadImage(
    "/move-in-cleaning-north-vancouver-apartment.jpg",
    "Move-in and move-out cleaning in North Vancouver"
  ),
  metaTitle: "Move-In & Move-Out Cleaning North Vancouver | Mint",
  metaDescription:
    "Move-in and move-out cleaning in North Vancouver. Protect your deposit, start fresh in your new home. Free estimates, 10% off your first clean.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver move-in/move-out cleaning migrated");
