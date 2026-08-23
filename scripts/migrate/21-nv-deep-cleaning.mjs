import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  heading,
  para,
  paraWithLink,
  imageBlock,
} from "./lib.mjs";

/**
 * /north-vancouver/deep-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/deep-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The five "Included Areas" cards each carried their own photo, but
 *    Whats Included cards have no per-card image field. Card text (title +
 *    bullet items) went into a Whats Included section as usual; the two
 *    card photos not reused anywhere else on the page (bedroom, hard-to-
 *    reach) were kept as a small image pair in the Rich Text block right
 *    after, alongside the "Signs You Need a Deep Clean" callout that sat in
 *    the same spot on the original page. Nothing was dropped, just
 *    regrouped around the schema's limits.
 *  - The page showed the same pricing tiers twice (once mid-page next to a
 *    comparison paragraph, once lower down next to a kitchen photo). Both
 *    were merged into one Pricing section, since that section type is
 *    single-instance; the surrounding link paragraphs (to house cleaning
 *    and to /rates) moved to a short Rich Text block right after so their
 *    links stay live.
 *  - Why Choose reuses the bathroom tile/grout photo, which is the exact
 *    image the original page's own AccordionWithImage used for this block.
 */

const deepCleanAreas = [
  ["Kitchen", [
    "Inside the oven, refrigerator, and dishwasher",
    "Cabinet interiors and drawer pulls",
    "Backsplash grouting and tile scrubbing",
    "Inside microwave and range hood, including the filter",
    "Behind and under the refrigerator and stove",
    "Light fixtures and under-cabinet lighting",
    "Countertops, sink, and faucet sanitized",
    "Floor scrubbed corner to corner, including under appliances",
  ]],
  ["Bathrooms", [
    "Tile grout scrubbed, not just wiped",
    "Behind toilets and under sinks",
    "Shower corners, tracks, doors, and fixtures descaled",
    "Window sills and ventilation fans dusted and cleared",
    "Cabinet interiors wiped and organized",
    "Mirrors and chrome polished",
    "Floor scrubbed including baseboards and corners",
  ]],
  ["Bedrooms and Living Areas", [
    "Behind and under furniture",
    "Baseboards, crown molding, and door frames wiped down",
    "Ceiling fans and light fixtures dusted",
    "Window tracks, sills, and blinds cleaned",
    "Closet interiors dusted and shelves wiped",
    "Upholstery vacuumed and spot-treated",
    "Carpets shampooed or hard floors deep-cleaned",
  ]],
  ["High-Touch Surfaces", [
    "Door handles, light switches, and railings sanitized",
    "Remote controls, thermostats, and alarm panels wiped",
    "Cabinet and drawer handles throughout the home",
    "Stair railings",
  ]],
  ["Hard-to-Reach Areas", [
    "Top of cabinets, refrigerators, and wardrobes",
    "Inside vents and air returns",
    "Behind the washer and dryer",
    "Cobwebs in ceiling corners and stairwells",
    "Garage entry or mudroom, common in North Vancouver homes with North Shore access",
  ]],
];

const whyChoose = [
  ["Eco-Friendly Products", "We clean with plant-based, non-toxic products that are safe around kids, pets, and anyone with sensitivities."],
  ["7-Day Availability", "We're available seven days a week, including evenings and weekends."],
  ["Free Estimates, No Pressure", "Every estimate is free with no pressure to book."],
  ["Transparent Pricing", "Pricing is upfront, with no hidden fees added after the fact."],
  ["Professional & Insured", "Our team is vetted, trained, background-checked, bonded, and fully insured."],
  ["Same Team Consistency", "We aim to send the same cleaners to your home each visit where possible."],
  ["24-Hour Satisfaction Guarantee", "If something's off, we'll come back and fix it at no extra charge."],
];

const pricingTiers = [
  ["500–800 sq ft", "$390 – $480", "Compact condos and small apartments. Typically 3 to 4 hours."],
  ["900–1,500 sq ft", "$580 – $620", "Mid-size homes and townhomes, our most common booking. Typically 4 to 6 hours."],
  ["2,000–5,000+ sq ft", "$650 – $850+", "Larger homes with multiple bathrooms. Typically 6 to 8+ hours."],
];

const relatedServices = [
  ["House Cleaning", "/north-vancouver/house-cleaning", "Routine maintenance cleaning on a weekly, bi-weekly, or monthly schedule to keep your home consistently fresh between deep cleans."],
  ["Move-In / Move-Out Cleaning", "/north-vancouver/move-in-move-out-cleaning", "Deep sanitizing before unpacking, or detailed vacancy cleaning that helps protect deposits and prepares your property for handover inspections."],
  ["Post-Construction Cleaning", "/north-vancouver/post-construction-cleaning/", "HEPA-focused post-build cleanup for renovation dust, debris, adhesive residue, and fine particles."],
  ["Carpet Cleaning", "/north-vancouver/carpet-cleaning/", "Professional carpet cleaning to remove deep stains, allergens, and embedded dirt that regular vacuuming misses."],
];

const processSteps = [
  ["Free Estimate & Assessment", "We look at your home's size, layout, and condition to give you an accurate quote."],
  ["Schedule at Your Convenience", "We're available seven days a week, including evenings and weekends."],
  ["Team Arrives with Professional Equipment", "Eco-friendly products and HEPA-filter vacuums, ready to go."],
  ["Systematic Room-by-Room Cleaning", "Depending on home size, this takes four to eight hours."],
  ["Quality Walkthrough", "We check every room before we leave your North Vancouver home."],
  ["Optional Follow-Up Plan", "We can set up a standard cleaning schedule to keep the results going."],
];

const healthBenefits = [
  ["Allergen & Dust Mite Removal", "A deep clean removes allergens and dust mites that build up in carpets, upholstery, and vents."],
  ["Mold & Mildew Prevention", "It gets ahead of mold and mildew before it spreads, which matters given how much moisture North Vancouver sees."],
  ["Bacteria & Pathogen Reduction", "It cuts down on bacteria and pathogens on high-touch surfaces and appliance interiors."],
  ["Improved Indoor Air Quality", "Removing built-up dust and dander improves indoor air quality throughout the home."],
  ["Property Protection", "It also protects your property, since grime and buildup wear down surfaces over time."],
  ["A Calmer Home", "Many North Vancouver clients tell us a freshly deep-cleaned home just feels calmer to live in."],
];

const faqItems = [
  ["What's the difference between deep cleaning and regular cleaning in North Vancouver?", "Standard cleaning in North Vancouver covers routine maintenance: dusting, vacuuming, wiping surfaces, and sanitizing the bathroom and kitchen. Deep cleaning goes further, reaching inside appliances, scrubbing grout, cleaning baseboards and ceiling fans, and moving furniture to clean behind it. Standard cleaning takes about two to three hours; a North Vancouver deep clean takes four to eight hours."],
  ["How often should I get a deep clean in North Vancouver?", "Most North Vancouver homes do well with a deep clean every two to four months. Households with kids, pets, or heavy foot traffic often benefit from a quarterly schedule. If you're already on a weekly or bi-weekly standard cleaning plan, a deep clean once or twice a year is usually enough."],
  ["How long does a deep clean take in a North Vancouver home?", "A typical two to four bedroom North Vancouver home takes four to eight hours. A small condo usually takes three to four hours. Larger homes or homes with significant buildup can take a full day. We give you a time estimate during your free consultation."],
  ["Does deep cleaning damage carpets or furniture in North Vancouver homes?", "No. We use professional-grade, eco-friendly products that are safe for carpets, upholstery, hardwood, and tile. Our North Vancouver team matches cleaning methods to each surface type to protect your home while we work."],
  ["Are your products safe for kids and pets in North Vancouver households?", "Yes. Every product we use in North Vancouver homes is non-toxic and biodegradable, with no harsh chemicals, harmful fumes, or lingering residue."],
  ["Can you deep clean just one room in my North Vancouver home?", "Yes. We offer full-house deep cleans and room-specific cleans for North Vancouver clients. Kitchen-only and bathroom-only requests are common. We scope and price the job to match exactly what you need."],
  ["What if I'm not home during my North Vancouver deep clean?", "Many North Vancouver clients step out while we work. We just need access to your home and any special instructions. We'll go over entry details together when you book."],
  ["Do you offer deep cleaning after renovations in North Vancouver?", "Yes. Post-renovation deep cleaning removes construction dust, debris, and residue from North Vancouver homes. We also offer dedicated post-construction cleaning for new builds, and move-in deep cleaning for homes changing hands."],
  ["How much does deep cleaning cost in North Vancouver?", "Pricing depends on square footage. North Vancouver deep cleans start at $390 for 500 to 600 sq ft and scale up from there based on home size. Visit our rates page for the full breakdown, or call for a free estimate. First-time North Vancouver clients save 10% with code MINT26."],
  ["How do I book a deep cleaning service in North Vancouver?", "Call 236-688-3248 or request a free quote through our rates page. Estimates for North Vancouver homes are free with no obligation, and we're available seven days a week, including evenings and weekends. First-time customers save 10% with code MINT26."],
];

console.log("→ /north-vancouver/deep-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "A deep clean goes past what a weekly tidy-up covers. Our North Vancouver team works room by room, tackling the buildup that regular cleaning leaves behind. If you're outside North Vancouver, our ",
        "deep cleaning services across Greater Vancouver",
        "/services/deep-cleaning",
        " cover the same process for Vancouver, West Vancouver, and Burnaby homes."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in a North Vancouver Deep Clean",
    cards: deepCleanAreas.map(([title, items]) => ({ _key: key("card"), title, items })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Signs Your North Vancouver Home Needs a Deep Clean",
    body: [
      para(
        "A deep clean makes sense if it's been more than three or four months since your last one. It's also a smart move before moving in or out, before guests arrive for the holidays or a special event, or once you start noticing buildup on grout, baseboards, or appliances. Households with allergies, asthma, or other respiratory concerns benefit from a deep clean too, as do homes with shedding pets. If you've just finished a renovation, or you're listing a North Vancouver property for sale or rent, a deep clean is the right starting point. It also works well as the reset before switching from no service at all to a regular cleaning plan."
      ),
      await imageBlock(
        "/house-cleaning-bedroom-north-vancouver.jpg",
        "Bedrooms and living areas deep cleaning in North Vancouver"
      ),
      await imageBlock(
        "/recurring-cleaning-hepa-vacuum-north-vancouver.jpg",
        "Hard-to-reach areas deep cleaning in North Vancouver"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "North Vancouver Deep Cleaning Prices",
    intro:
      "Standard cleaning is routine maintenance: dusting, vacuuming, wiping surfaces, and sanitizing the bathroom and kitchen. It takes about two to four hours and works well on a weekly, bi-weekly, or monthly schedule. Deep cleaning is an intensive reset. It covers everything standard cleaning covers, plus the inside of appliances, grout, baseboards, ceiling fans, and behind furniture. A deep clean takes four to eight hours depending on home size and condition, and we recommend it every two to four months for most North Vancouver households.",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "Pricing is based on square footage. These are our published tiers. Homes over 6,000 sq ft need a custom quote.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      await imageBlock("/deep-cleaned-kitchen-north-vancouver.jpg", "Deep cleaned kitchen in North Vancouver"),
      paraWithLink(
        "If you're ready to set up ongoing service, our ",
        "house cleaning plans for North Vancouver",
        "/north-vancouver/house-cleaning",
        " cover weekly, bi-weekly, and monthly visits after your initial deep clean."
      ),
      paraWithLink(
        "Visit ",
        "our rates page",
        "/rates",
        " for full pricing and to request a free estimate for your North Vancouver home. First-time customers save 10% with code MINT26."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "How Our North Vancouver Deep Cleaning Process Works",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Homeowners Choose Mint Sanitary",
    intro: "We're available seven days a week, and every estimate is free with no pressure to book.",
    image: await uploadImage(
      "/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg",
      "Deep cleaned bathroom tile and grout in North Vancouver"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why North Vancouver's Climate Makes Deep Cleaning Different",
    body: [
      para(
        "North Vancouver sits against the North Shore mountains, which means more rain and higher humidity than many other parts of the Lower Mainland. That moisture works its way into grout lines, bathroom corners, and the space under appliances, where mold and mildew can take hold faster than in drier climates. Homes in North Vancouver need more frequent attention to these damp-prone spots than a general cleaning checklist accounts for. Our deep cleaning process targets exactly those areas, which is one reason a North Vancouver deep clean looks different from a general Greater Vancouver visit."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Cleaning Services",
    body: relatedServices.flatMap(([title, href, description]) => [
      heading(title),
      para(description),
      paraWithLink("", "Learn more →", href, ""),
    ]),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Neighbourhoods We Serve Across North Vancouver",
    body: [
      para(
        "We clean homes throughout North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Capilano, Norgate, Seymour Heights, Dollarton, and Blueridge."
      ),
      paraWithLink(
        "We also serve ",
        "West Vancouver, Vancouver, Burnaby",
        "/service-areas/",
        ", and surrounding cities throughout Greater Vancouver. Same trusted team, same eco-friendly products, same 7-day availability wherever you are."
      ),
      paraWithLink(
        "Moving soon? Our ",
        "move-in and move-out cleaning in North Vancouver",
        "/north-vancouver/move-in-move-out-cleaning",
        " handles the deep clean your old or new place needs."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Health Benefits of Deep Cleaning for North Vancouver Households",
    body: [
      para(
        "A professional deep clean isn't just about appearances. It has measurable benefits for your health, your home, and the people who live in it."
      ),
      await imageBlock(
        "/eco-friendly-cleaning-products-north-vancouver.jpg",
        "Eco-friendly cleaning products used in North Vancouver"
      ),
      ...healthBenefits.flatMap(([title, body]) => [heading(title), para(body)]),
      paraWithLink(
        "Need carpets refreshed too? Check our ",
        "carpet cleaning in North Vancouver",
        "/north-vancouver/carpet-cleaning",
        " page."
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
    heading: "Ready to Book a Deep Clean in North Vancouver?",
    body: "Get your free quote, or call 236-688-3248 to book. 7-day availability. Eco-friendly products. Use code MINT26 for 10% off your first booking.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "deep-cleaning", {
  title: "Deep Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "deep-cleaning"),
  heroHeading: "Deep Cleaning in North Vancouver",
  heroIntro:
    "Mint Sanitary is a North Vancouver based cleaning company with a 4.9 out of 5 rating across 120+ Google reviews. We built our deep cleaning service around the homes we see every week: condos near Lower Lonsdale, family houses in Lynn Valley, and waterfront properties out near Deep Cove. Every technician we send is background-checked, bonded, and insured, and we clean with plant-based, non-toxic products and HEPA-filter vacuums. Use code MINT26 for 10% off your first clean.",
  heroImage: await uploadImage(
    "/deep-cleaning-bathroom-north-vancouver.jpg",
    "Deep cleaning in North Vancouver"
  ),
  metaTitle: "North Vancouver Deep Cleaning Services | Mint Sanitary",
  metaDescription:
    "Deep cleaning in North Vancouver from a local, background-checked team. Eco-friendly products, transparent pricing, 4.9/5 rating. Get a free quote today.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver deep cleaning migrated");
