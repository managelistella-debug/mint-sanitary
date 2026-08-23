import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  para,
  paraWithLink,
  customTile,
} from "./lib.mjs";

/**
 * /north-vancouver (area landing page) — migrated from the hand-coded page
 * now parked at /north-vancouver-original. Restyled to match the section
 * system used by every other CMS page, per the client's request; content is
 * verbatim except the eyebrow ("North Vancouver's Home Base Cleaning
 * Company") and hero trust-badge line, dropped per the standing convention
 * used on every other migrated page (CmsPageShell's hero has no slot for
 * either).
 *
 * Placement decisions:
 *  - "Neighborhoods We Serve" (intro + 11 chips) → the new `neighborhoods`
 *    section, referencing the 11 Neighborhood docs seeded in
 *    42-nv-neighborhoods.mjs. The closing "if your street isn't listed"
 *    sentence (with its /service-areas link) followed the chips in the
 *    source, so it's a small trailing Rich Text paragraph rather than
 *    invented as this section's own outro field.
 *  - The service-area map image → the new `map` section, sized larger per
 *    the client's explicit request ("maybe the map can be bigger").
 *  - "Cleaning Services in North Vancouver" (3 groups: Residential,
 *    Specialty, Commercial) → three `serviceTiles` sections using
 *    `customTiles`, one per group, per the client's explicit request to
 *    make these "cards with images similar to what we've built previously."
 *    The original directory had NO images at all (plain text links); each
 *    tile's image is that same service's own already-established hero photo
 *    (reused, not newly invented), and every description is the original's
 *    own text verbatim. The Commercial group's links never had description
 *    text in the source, so those 6 tiles carry no description, same as
 *    every other tile without source copy elsewhere in this migration.
 *  - "Why North Vancouver Chooses Mint" (AccordionWithImage) → whyChoose,
 *    direct mapping.
 *  - Pricing rows → a real `pricing` section; the closing "/rates" link
 *    became its own small Rich Text paragraph since `pricing.notes` is
 *    plain text and can't carry a link, same pattern as every pricing
 *    section elsewhere in this migration.
 */

const residentialTiles = [
  {
    title: "House Cleaning",
    image: "/standard-cleaning-kitchen-north-vancouver.jpg",
    href: "/north-vancouver/house-cleaning",
    description: "Regular weekly, biweekly, or monthly cleaning for North Vancouver homes and condos.",
  },
  {
    title: "Deep Cleaning",
    image: "/deep-cleaning-bathroom-north-vancouver.jpg",
    href: "/north-vancouver/deep-cleaning",
    description:
      "A top-to-bottom clean that tackles baseboards, inside appliances, and buildup regular cleaning skips.",
  },
  {
    title: "Move-In Move-Out Cleaning",
    image: "/move-in-cleaning-north-vancouver-apartment.jpg",
    href: "/north-vancouver/move-in-move-out-cleaning",
    description: "Detailed cleaning for North Vancouver's active rental market.",
  },
  {
    title: "Vacation Rental Cleaning",
    image: "/vacation-rental-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/vacation-rental-cleaning",
    description: "Fast turnovers for short-term rental hosts.",
  },
];

const specialtyTiles = [
  {
    title: "Post-Construction Cleaning",
    image: "/post-construction-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/post-construction-cleaning",
    description: "Dust and debris removal after a renovation or build.",
  },
  {
    title: "Upholstery Cleaning",
    image: "/upholstery-cleaning-north-vancouver-sofa.jpg",
    href: "/north-vancouver/upholstery-cleaning",
    description: "Deep cleaning for sofas, chairs, and fabric surfaces.",
  },
  {
    title: "Carpet Cleaning",
    image: "/carpet-cleaning-in-north-vancouver.webp",
    href: "/north-vancouver/carpet-cleaning",
    description: "Lifts dirt and moisture North Vancouver's wet climate tracks indoors.",
  },
  {
    title: "Window Cleaning",
    image: "/window-cleaning-hero-north-vancouver.webp",
    href: "/north-vancouver/window-cleaning",
    description: "Streak-free interior and exterior window cleaning.",
  },
  {
    title: "Pressure Washing",
    image: "/north-vancouver-skyline-pressure-washing-hero.webp",
    href: "/north-vancouver/pressure-washing",
    description: "Clears moss and grime off driveways, decks, and siding.",
  },
  {
    title: "Gutter Cleaning",
    image: "/gutter-cleaning-north-vancouver-hero.webp",
    href: "/north-vancouver/gutter-cleaning",
    description: "Keeps water flowing away from your home.",
  },
];

const commercialTiles = [
  {
    title: "Commercial Cleaning",
    image: "/commercial-janitorial-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/commercial-cleaning",
  },
  {
    title: "Office Cleaning",
    image: "/office-cleaning-north-vancouver-workspace.jpg",
    href: "/north-vancouver/office-cleaning",
  },
  {
    title: "Church Cleaning",
    image: "/church-cleaning-sanctuary-north-vancouver.jpg",
    href: "/north-vancouver/church-cleaning",
  },
  {
    title: "Gym Cleaning",
    image: "/gym-cleaning-equipment-north-vancouver.jpg",
    href: "/north-vancouver/gym-cleaning",
  },
  {
    title: "School Cleaning",
    image: "/school-cleaning-classroom-north-vancouver.jpg",
    href: "/north-vancouver/school-cleaning",
  },
  {
    title: "Strata Cleaning",
    image: "/strata-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/strata-cleaning",
  },
];

const whyChooseItems = [
  {
    title: "Eco-friendly and safe",
    body: "We use plant-based, non-toxic products safe for kids and pets, paired with HEPA-filter vacuums that pull allergens and fine dust out of carpets and air. One Lynn Valley client with young kids specifically praised how the team used eco-friendly products throughout a deep clean of her home.",
  },
  {
    title: "Background-checked and insured",
    body: "Every team member working in North Vancouver is background-checked, bonded, and insured.",
  },
  {
    title: "Built for North Vancouver's housing mix",
    body: "Between Lynn Valley and Edgemont Village's older character homes and Lower Lonsdale's newer condo towers, North Vancouver properties vary a lot. Our crews adjust their approach to fit each one, and we know the wear patterns that come with North Vancouver's wet winters and tracked-in mud.",
  },
  {
    title: "Consistency you can count on",
    body: "We assign the same team to your home whenever possible. A recurring biweekly client has praised exactly this kind of consistency, along with fair, predictable pricing.",
  },
  {
    title: "A rental market that moves fast",
    body: "North Vancouver has a large tenant population turning over units regularly, and our move-in move-out cleaning is built for that pace. One recent move-out client told us they got their full damage deposit back after our clean.",
  },
  {
    title: "7-day availability",
    body: "We work evenings, weekends, and holidays, with same-day availability that's strongest right here since it's our home base.",
  },
  {
    title: "No surprises",
    body: "Every quote is free, transparent, and comes with no hidden fees or long-term contracts.",
  },
  {
    title: "Trusted by local institutions",
    body: "We've cleaned for organizations like Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction, alongside hundreds of North Vancouver households.",
  },
];

const faqItems = [
  ["How much does house cleaning cost in North Vancouver?", "Standard house cleaning in North Vancouver starts around $220 for a 500 to 600 square foot home and increases with size, since most North Vancouver jobs are priced by square footage. Visit our rates page for exact numbers."],
  ["What areas of North Vancouver do you serve?", "We serve all of North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Norgate, Pemberton Heights, Capilano, Dollarton, and Blueridge. If you're outside these neighborhoods, contact us to check availability."],
  ["Do you offer same-day cleaning in North Vancouver?", "Yes. North Vancouver is our home base, so it's where we have the fastest response times and the best chance of same-day availability. Call us or request a quote to check what's open today."],
  ["Are your cleaning products safe for kids and pets in North Vancouver homes?", "Yes. We use plant-based, non-toxic products in every North Vancouver home we clean, along with HEPA-filter vacuums that help with dust and allergens."],
  ["What happens if I'm not happy with my clean in North Vancouver?", "We back every North Vancouver clean with a 24-hour satisfaction guarantee. Contact us within 24 hours of your appointment and we'll come back to fix it at no charge."],
  ["Do you clean both homes and businesses in North Vancouver?", "Yes. We handle residential cleaning like house cleaning and deep cleaning, plus commercial cleaning for North Vancouver offices, gyms, schools, churches, and strata buildings."],
  ["Do you offer carpet cleaning in North Vancouver?", "Yes. Our carpet cleaning in North Vancouver removes dirt, stains, and the extra moisture that tends to get tracked indoors during the region's wet months."],
  ["Do you offer window cleaning in North Vancouver?", "Yes. We provide interior and exterior window cleaning across North Vancouver, helpful for homes with mountain or water views worth keeping clear."],
  ["Do you offer pressure washing in North Vancouver?", "Yes. Pressure washing in North Vancouver clears moss, algae, and grime off driveways, decks, and siding, all common problems given the amount of rain the North Shore gets."],
  ["Do you offer gutter cleaning in North Vancouver?", "Yes. Gutter cleaning in North Vancouver is one of our most requested services heading into the fall and winter, when heavy rain can back up clogged gutters and cause water damage."],
  ["Do you clean commercial buildings in North Vancouver?", "Yes. We offer commercial cleaning throughout North Vancouver for offices, gyms, schools, churches, and strata-managed buildings."],
  ["How do I book a cleaning in North Vancouver?", "Booking a North Vancouver cleaning starts with a free, no-obligation quote through our rates page or by calling 236-688-3248."],
  ["Is there a discount for first-time customers in North Vancouver?", "Yes. New North Vancouver customers save 10% off their first clean using code MINT26 at booking."],
  ["Will I get the same cleaning team each time in North Vancouver?", "We assign the same team to your North Vancouver home or business whenever possible."],
  ["Do you clean apartments and condos in Lower Lonsdale?", "Yes. Lower Lonsdale's condo towers are a regular part of our North Vancouver route. One Lower Lonsdale office cleaning client has specifically praised our punctuality."],
  ["Do you serve Deep Cove and Lynn Valley?", "Yes. Deep Cove and Lynn Valley are both part of our standard North Vancouver service area. We've handled everything from a Lynn Valley deep clean with eco-friendly products to post-construction cleanup after a Deep Cove renovation."],
  ["Do you clean character homes in Edgemont Village?", "Yes. Edgemont Village has a lot of older character homes, and our North Vancouver crews are used to working around the layouts, trim, and finishes that come with them."],
  ["Do you offer move-in and move-out cleaning in North Vancouver?", "Yes. Move-in and move-out cleaning is one of our most requested services in North Vancouver. Pricing for a 500 to 600 square foot home starts around $390."],
  ["Do you clean vacation rentals in North Vancouver?", "Yes. We offer fast, reliable turnover cleaning for vacation rental hosts across North Vancouver."],
  ["Do you offer post-construction cleanup in North Vancouver?", "Yes. Post-construction cleaning in North Vancouver clears dust, debris, and residue left behind after a renovation or new build."],
  ["Are your North Vancouver cleaners background-checked and insured?", "Yes. Every member of our North Vancouver cleaning team is background-checked, bonded, and insured."],
  ["Do you offer evening or weekend cleaning in North Vancouver?", "Yes. We're available 7 days a week in North Vancouver, including evenings and holidays."],
  ["What's included in a deep clean in North Vancouver?", "A deep clean in North Vancouver covers everything a standard clean does, plus detailed work like baseboards, inside appliances, and buildup in areas that don't get touched during regular visits."],
  ["Do you require long-term contracts for North Vancouver cleaning?", "No. Every quote is transparent with no hidden fees, and you can adjust or cancel your schedule as your needs change."],
  ["Does Mint Sanitary serve areas near North Vancouver, like West Vancouver?", "Yes. Alongside North Vancouver, we also serve West Vancouver, Vancouver, Burnaby, and other parts of Greater Vancouver."],
];

console.log("→ /north-vancouver (area)");

const residentialCustomTiles = [];
for (const t of residentialTiles) residentialCustomTiles.push(await customTile(t));
const specialtyCustomTiles = [];
for (const t of specialtyTiles) specialtyCustomTiles.push(await customTile(t));
const commercialCustomTiles = [];
for (const t of commercialTiles) commercialCustomTiles.push(await customTile(t));

const neighborhoodSlugs = [
  "Lower Lonsdale", "Upper Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont Village",
  "Seymour Heights", "Norgate", "Pemberton Heights", "Capilano", "Dollarton", "Blueridge",
].map((n) => n.toLowerCase().replace(/\s+/g, "-"));

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "We know the difference between a Lower Lonsdale condo tower and a character home in Edgemont Village, because we clean both every week. We know North Vancouver's rain finds its way into entryways and tracks mud across hardwood floors from October through April. We know Lynn Valley's older homes have different needs than the newer builds near the waterfront. That local knowledge shapes how we clean, not just where we show up."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "neighborhoods",
    heading: "Neighborhoods We Serve in North Vancouver",
    intro:
      "Mint Sanitary covers all of North Vancouver, from the waterfront up into the hillside communities. Lower Lonsdale's condo towers and Upper Lonsdale's family homes both fall inside our regular route, so scheduling doesn't add a travel surcharge or push your booking to next week. Deep Cove's tucked-away streets and Lynn Valley's tree-lined neighborhoods get the same punctual, background-checked crews as anywhere else on the North Shore.",
    neighborhoods: neighborhoodSlugs.map((slug) => refTo("neighborhood", slug)),
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "If your street isn't listed above, reach out anyway. We also serve West Vancouver, Vancouver, Burnaby, and the wider Greater Vancouver area. Check our ",
        "service areas page",
        "/service-areas",
        " for the full coverage map."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "map",
    image: await uploadImage(
      "/mint-service-area-map.png",
      "Map of Greater Vancouver showing Mint Sanitary service area"
    ),
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Residential Cleaning in North Vancouver",
    tiles: [],
    customTiles: residentialCustomTiles,
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Specialty Cleaning in North Vancouver",
    tiles: [],
    customTiles: specialtyCustomTiles,
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Commercial and Institutional Cleaning in North Vancouver",
    tiles: [],
    customTiles: commercialCustomTiles,
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Homeowners and Businesses Choose Mint Sanitary",
    intro:
      "We currently hold a 4.9 out of 5 rating across more than 120 Google reviews, including feedback from an office cleaning client in Lower Lonsdale who praised our punctuality, and a homeowner in Deep Cove who hired us for post-construction cleanup after a renovation.",
    image: await uploadImage(
      "/mint-sanitary-team-north-vancouver.jpg",
      "Mint Sanitary cleaning team in North Vancouver"
    ),
    items: whyChooseItems.map(({ title, body }) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "What to Expect: Pricing for Cleaning in North Vancouver",
    intro:
      "Pricing for cleaning in North Vancouver depends mostly on your property's size and the scope of the job. Most jobs get priced by square footage rather than a flat rate.",
    tiers: [
      { _key: key("tier"), title: "Standard Cleaning", range: "", body: "500–600 sq ft: from $220. Scales up with size." },
      { _key: key("tier"), title: "Deep Cleaning", range: "", body: "500–600 sq ft: from $390." },
      { _key: key("tier"), title: "Move-In / Move-Out Cleaning", range: "", body: "500–600 sq ft: from $390." },
    ],
    notes: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [paraWithLink("For the full breakdown, visit our ", "rates page", "/rates", ".")],
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
    heading: "Ready to Book a Cleaning in North Vancouver?",
    body: "Get a free, no-obligation quote on our rates page, or call us directly at 236-688-3248. You can also reach us anytime at hello@mintsanitary.com.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("area", "north-vancouver", {
  title: "North Vancouver",
  name: "North Vancouver",
  heroHeading: "Cleaning Services in North Vancouver",
  heroIntro:
    "Mint Sanitary started in North Vancouver, and it's still where we do most of our work. Our trucks are based here, our fastest response times are here, and our same-day availability is strongest here. Whether you need a one-time deep clean, a recurring schedule, or ongoing commercial cleaning, we handle it with eco-friendly products, background-checked staff, and a straightforward 24-hour satisfaction guarantee. New customers save 10% on their first clean with code MINT26.",
  heroImage: await uploadImage(
    "/mint-sanitary-professional-cleaning-north-vancouver-hero.jpg",
    "Professional cleaning in North Vancouver"
  ),
  metaTitle: "Cleaning Services in North Vancouver | Mint Sanitary",
  metaDescription:
    "Mint Sanitary is North Vancouver's home base cleaning company. Serving Lonsdale, Lynn Valley, Deep Cove and more. Free quotes, same-day availability.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver area page migrated");
