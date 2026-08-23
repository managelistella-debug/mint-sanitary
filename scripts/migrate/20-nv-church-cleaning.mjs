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
 * /north-vancouver/church-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/church-cleaning-original.
 *
 * All copy verbatim, including the North-Vancouver-specific phrasing baked
 * into nearly every sentence. Placement decisions:
 *  - The "Professional vs. Volunteer" comparison grid has three fields per
 *    row (factor/volunteer/professional), which doesn't fit any card shape,
 *    so it became a Rich Text section: one heading + one merged paragraph
 *    per factor.
 *  - "Why Choose" has no dedicated photo on this page, so it reuses the hero
 *    sanctuary image (that section type requires an image).
 *  - Related Services all link to other /north-vancouver/... pages, not the
 *    general /services/... pages, so per the mapping rules they became a
 *    Rich Text block with real links rather than forced into Service Tiles
 *    (which only accepts cleaningType references).
 */

const includedAreas = [
  ["Sanctuary and Worship Areas", "Vacuuming carpets and rugs, dusting pews, railings, and wooden surfaces, polishing wood finishes, and handling altars and religious symbols with reverence. Communion items are cleaned and sanitized according to your preferences, and lighting fixtures and trim get regular attention."],
  ["Bathrooms", "Deep disinfection, tile and grout cleaning, toilet and urinal sanitation, and drain treatment to stop odors before they start. We restock supplies and can handle floor stripping and waxing as needed."],
  ["Fellowship Halls and Common Areas", "Floor care suited to the surface, table and chair sanitizing after events, trash and recycling management, and spot cleaning on walls where hands and shoes leave marks."],
  ["Nurseries and Children's Rooms", "Non-toxic, eco-friendly sanitizing that's safe for infants and toddlers, crib and changing table disinfection, toy and equipment cleaning, and steps to cut down allergens in the rooms your youngest members use most."],
  ["Kitchens and Food Service Areas", "Appliance cleaning inside and out, countertop and backsplash sanitizing, floor and baseboard care, and food prep practices that meet local health standards."],
  ["Administrative Offices and Storage", "Dusting and surface cleaning, trash removal and recycling, vacuuming and mopping, and organization or tidying when your staff wants it."],
  ["Specialized Services", "Electrostatic spraying for virus protection, deep carpet extraction, pressure washing for exterior areas, post-event cleanup after weddings, funerals, or gatherings, and seasonal deep cleaning for North Vancouver's rainy winters and pollen-heavy springs."],
];

const comparisonFactors = [
  ["Consistency", "Irregular, depends on who's available", "Scheduled and reliable, same quality every visit"],
  ["Time Investment", "20 to 40+ volunteer hours monthly", "2 to 4 hours per session with trained staff"],
  ["Expertise", "General housekeeping knowledge", "Trained specifically in place of worship cleaning"],
  ["Equipment", "Basic household supplies", "Professional-grade tools and disinfectants"],
  ["Burnout Risk", "High, ongoing commitment wears people down", "None, paid professionals handle the work"],
  ["Health and Safety", "Varies by volunteer", "Certified, trained, and insured staff"],
];

const processSteps = [
  ["Consultation and Walkthrough", "We start with a free consultation at your North Vancouver church. Our team assesses square footage, traffic patterns, special areas like the sanctuary and nursery, and your priorities. No obligation, just a clear picture of what your building needs."],
  ["Customized Cleaning Plan", "We build a plan around your schedule, whether that's weekly, biweekly, or monthly, and it fits your budget. Cleanings can be scheduled for early mornings, late evenings, or weekday slots so Sunday services are never disrupted."],
  ["Eco-Friendly Preparation", "We use green, non-toxic products that are safe for children, elderly congregants, and anyone with sensitivities."],
  ["Professional Execution", "Our bonded and insured team arrives with all necessary equipment and works efficiently and respectfully throughout your building."],
  ["Final Inspection", "Before we leave, we walk through the space with you to confirm everything meets your standards. Any concerns get addressed right away."],
  ["Ongoing Communication", "Scheduling changes, special events, or last-minute requests all go through one call, so managing your North Vancouver church cleaning stays simple."],
];

const whyChoose = [
  ["Flexibility and Availability", "We work 7 days a week, including early mornings and evenings, so your Sunday service is never disrupted. We schedule around midweek programs, special events, and holidays too."],
  ["Eco-Friendly Commitment", "Green, non-toxic products mean your congregation breathes cleaner air, and children in the nursery and Sunday school stay safer."],
  ["Local North Vancouver Expertise", "We've served places of worship in Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights, and our teams are familiar with the local climate, water quality, and facility types common across North Vancouver."],
  ["Background-Checked Professional Staff", "Every team member is bonded, insured, and background-checked, and trained to handle sacred spaces with the respect they deserve."],
  ["Transparent Pricing", "Free estimates and fixed pricing, with a 10 percent discount on your first clean using code MINT26."],
  ["Proven Track Record", "References from North Vancouver congregations are available on request."],
];

const pricingTiers = [
  ["Small Facility", "$200 – $400", "Monthly rate"],
  ["Medium Facility", "$400 – $800", "Monthly rate"],
  ["Large Facility", "$800 – $1,500+", "Monthly rate"],
];

const relatedServices = [
  ["Commercial Cleaning", "/north-vancouver/commercial-cleaning/"],
  ["Office Cleaning", "/north-vancouver/office-cleaning/"],
  ["School Cleaning", "/north-vancouver/school-cleaning/"],
];

const faqItems = [
  ["How often should a church in North Vancouver schedule cleaning?", "Most North Vancouver churches do well with weekly or biweekly cleaning. If your congregation meets multiple times a week or hosts frequent events, twice-weekly cleaning keeps the building consistently ready."],
  ["Are the eco-friendly products you use in North Vancouver churches safe for children?", "Yes. We use EPA-approved products that are safe for sensitive skin and respiratory systems. North Vancouver churches with nurseries and Sunday schools trust these products around their youngest members."],
  ["Can you clean around our scheduled events in North Vancouver?", "Yes. Our North Vancouver scheduling is flexible, and we work before Sunday services, after midweek programs, and around weddings and funerals so cleaning never interrupts your congregation."],
  ["What makes church cleaning in North Vancouver different from standard office cleaning?", "Church cleaning in North Vancouver respects sacred spaces. Our staff are trained in proper handling of altars, religious symbols, and delicate furnishings, with a sensitivity that standard office cleaning doesn't require."],
  ["How do you handle allergens in North Vancouver church buildings?", "We use HEPA filtration vacuums and electrostatic spraying, with special attention to nurseries, carpets, and upholstered pews, areas where allergens build up fastest in North Vancouver's damp climate."],
  ["Can you handle post-event cleanup for funerals and weddings in North Vancouver?", "Yes. We've handled countless post-event cleanups for North Vancouver churches, restoring the facility to a clean, welcoming condition quickly and respectfully."],
  ["How do you protect religious items and artwork in North Vancouver churches?", "Our staff are trained to handle these items with care. We ask questions upfront about what's sacred or delicate in your North Vancouver church, then use soft cloths, appropriate products, and careful techniques."],
  ["What's your availability for emergency cleaning in North Vancouver?", "We offer 7-day-a-week service across North Vancouver and can often accommodate urgent requests. Call 236-688-3248 for same-day or emergency cleaning after unexpected damage or illness."],
  ["Do you offer customized plans for different denominational requirements in North Vancouver?", "Yes. We work with pastors, facility managers, and congregations across North Vancouver to build plans that align with the specific needs and values of your church."],
  ["How much can a North Vancouver church save by switching to professional cleaning?", "Most North Vancouver churches save money and volunteer hours by making the switch. Volunteer cleaning often costs more in hidden labor and materials, while professional service typically runs $300 to $800 monthly and replaces 20 to 40+ volunteer hours."],
  ["Do you clean churches in Lynn Valley and Deep Cove as well as Lower Lonsdale?", "Yes. We serve churches throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights, with the same standard of care at every location."],
  ["What time of day do you clean North Vancouver churches so services aren't disrupted?", "We typically schedule around your service and program times, which often means early mornings, late evenings, or weekday slots. This keeps our North Vancouver crews out of the way during Sunday worship."],
  ["Can a small congregation in North Vancouver get a plan that fits a limited budget?", "Yes. Our North Vancouver plans scale to your building's size and needs, and small facilities typically fall in the $200 to $400 monthly range, with a free walkthrough to confirm the right fit."],
  ["Do you offer a discount for new North Vancouver churches?", "Yes. New North Vancouver clients get 10 percent off their first clean with code MINT26."],
  ["Is Mint Sanitary insured and background-checked for work in North Vancouver churches?", "Yes. All staff working in North Vancouver churches are bonded, insured, and background-checked, and trained to handle sacred spaces with proper respect."],
  ["Do you provide floor stripping and waxing for North Vancouver church fellowship halls?", "Yes, this is available as part of our specialized services for North Vancouver churches and can be scheduled as a one-time deep clean or built into your regular plan."],
  ["Can you handle pressure washing for church exteriors in North Vancouver?", "Yes. Exterior pressure washing is one of our specialized services for North Vancouver churches, useful for entryways and walkways that take a beating during the rainy season."],
  ["How do I get a quote for church cleaning in North Vancouver?", "Call 236-688-3248 or request a free walkthrough, and we'll assess your North Vancouver church and provide a fixed monthly quote with no obligation."],
];

console.log("→ /north-vancouver/church-cleaning");

const comparisonBody = [];
for (const [factor, volunteer, professional] of comparisonFactors) {
  comparisonBody.push(
    heading(factor),
    para(`Volunteer: ${volunteer}. Professional: ${professional}.`)
  );
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Church Cleaning in North Vancouver Matters",
    body: [
      para(
        "A church is often the busiest building in a congregation's life. Sunday services, midweek Bible studies, youth programs, funerals, weddings, and community meals all happen under one roof, sometimes in the same week. In North Vancouver's wetter months, mud and moisture get tracked in constantly, and that adds pressure on entryways, carpets, and fellowship hall floors."
      ),
      para(
        "A clean building says something to the people who walk through the doors. It tells visitors they matter, and it tells your congregation the space is cared for the same way they care for each other. Professional church cleaning in North Vancouver keeps that message consistent, week after week, without pulling volunteers away from their families or their rest."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Our North Vancouver Church Cleaning",
    intro:
      "We build every plan around your building's layout and how your congregation uses it. Most North Vancouver churches need coverage across these areas.",
    cards: includedAreas.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Professional Cleaning vs. Volunteer Cleaning in North Vancouver Churches",
    body: [
      para(
        "Many North Vancouver congregations start out relying on volunteer cleaning crews. It can work for a while, but it tends to come with costs that are easy to miss at first."
      ),
      ...comparisonBody,
      para(
        "Volunteers give their time because they love their church, and that matters. But a cleaning schedule that depends entirely on volunteer availability tends to break down during busy seasons, exactly when a North Vancouver congregation needs its building to look its best."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Process for Church Cleaning in North Vancouver",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Churches Choose Mint Sanitary",
    image: await uploadImage(
      "/church-cleaning-sanctuary-north-vancouver.jpg",
      "Church sanctuary cleaned by Mint Sanitary in North Vancouver"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "A North Vancouver Congregation We've Helped",
    body: [
      para(
        "A few years ago, we started working with a growing congregation in North Vancouver that had outgrown its volunteer cleaning system. The pastor told us the volunteers were exhausted, spending their Sunday afternoons cleaning instead of resting or spending time with their families."
      ),
      para(
        "After the first month of weekly service, the pastor told us the volunteers were happier, the space looked better than it ever had, and people had mentioned how clean and welcoming it felt walking in. That's the kind of change we aim for with every North Vancouver church we work with."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Church Cleaning Pricing in North Vancouver",
    intro:
      "Pricing depends on the size of your building, how often you need service, and what areas need attention. Most North Vancouver churches fall into one of these monthly ranges.",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "Every quote starts with a free walkthrough at your North Vancouver church, so the number you get is based on your actual building, not a guess.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Church Cleaning Across North Vancouver and Nearby Areas",
    body: [
      para(
        "We serve congregations throughout North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights, along with nearby communities in West Vancouver, Vancouver, and Burnaby."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Services",
    body: [
      para(
        "If your North Vancouver church has additional facility needs, we also offer commercial cleaning, office cleaning, and school cleaning for congregations that run daycare or school programs."
      ),
      paraWithLink("", "Commercial Cleaning", "/north-vancouver/commercial-cleaning/", ""),
      paraWithLink("", "Office Cleaning", "/north-vancouver/office-cleaning/", ""),
      paraWithLink("", "School Cleaning", "/north-vancouver/school-cleaning/", ""),
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
    heading: "Ready for a Free Walkthrough and a Fixed Quote?",
    body: "Get your rates today for your North Vancouver church. New clients save 10% on their first clean with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "church-cleaning", {
  title: "Church Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "church-cleaning"),
  heroHeading: "Church Cleaning in North Vancouver",
  heroIntro:
    "Your congregation deserves a clean, welcoming sanctuary to gather in every week. Mint Sanitary specializes in professional church cleaning in North Vancouver, bringing respect, expertise, and care to every space we touch, from the sanctuary floor to the nursery toys. North Vancouver is home to congregations of every size and tradition, from small chapels in Lower Lonsdale to larger facilities near Lynn Valley and Deep Cove.",
  heroImage: await uploadImage(
    "/church-cleaning-sanctuary-north-vancouver.jpg",
    "Church cleaning in North Vancouver"
  ),
  metaTitle: "Church Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "Professional church cleaning in North Vancouver. Eco-friendly, respectful care for sanctuaries, nurseries, and fellowship halls. Free quotes.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver church cleaning migrated");
