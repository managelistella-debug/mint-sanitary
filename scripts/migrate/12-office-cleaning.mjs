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
 * /services/office-cleaning — migrated from the hand-coded page now parked
 * at /services/office-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The What's Included section had six card items, one of which
 *    ("Bathroom Cleaning") carries an outbound link to public health
 *    disinfection guidance. whatsIncluded cards only support plain-string
 *    bodies, so that one card was pulled out into its own Rich Text block
 *    (right after the grid, matching its original position) so the link
 *    survives as a real Portable Text mark instead of being flattened.
 *    The inline desk-disinfection photo that sat between the two card
 *    rows moved into that same block.
 *  - "Flexible Scheduling" is a clean fit for the schedules section type.
 *  - "Health and Productivity Benefits" is a second card grid, but
 *    whatsIncluded can only appear once per page (already used above), so
 *    it became a Rich Text section of heading/paragraph pairs.
 *  - "Why Greater Vancouver Businesses Choose Mint Sanitary" is a plain
 *    text grid with no photo of its own on the original page, so it
 *    reuses the hero image for the required whyChoose `image` field,
 *    per the migration guide's explicit allowance to reuse the hero image
 *    when no page-specific photo fits.
 *  - The pricing section's trailing paragraph contains a link to /rates,
 *    which pricing.notes (plain strings) can't preserve, so that
 *    paragraph became its own Rich Text block via paraWithLink instead of
 *    living in `notes`.
 *  - Tile name + blurb reused verbatim from the "Office Cleaning" stub
 *    seeded in 00-globals-and-stubs.mjs.
 */

const scheduleOptions = [
  ["Daily Cleaning", "Built for high-traffic offices, medical practices, and co-working spaces where surfaces need attention every day."],
  ["Weekly Cleaning", "Our most popular option, and a solid fit for most small to mid-size offices."],
  ["Bi-Weekly Cleaning", "A cost-effective choice for offices with lighter foot traffic."],
  ["After-Hours Cleaning", "Early mornings, evenings, or late nights, so cleaning never interrupts your workday."],
  ["Weekend Cleaning", "Saturdays, Sundays, or statutory holidays, so your team walks into a fresh office every Monday morning."],
];

const healthBenefits = [
  ["Reduced Illness and Sick Days", "Regular disinfection of high-touch surfaces cuts down on the spread of cold and flu viruses between coworkers. Research from ISSA's Value of Clean initiative has found that professional cleaning can reduce workplace illness by as much as 46%."],
  ["Better Indoor Air Quality", "HEPA vacuuming and eco-friendly products cut down on the dust, allergens, and volatile organic compounds (VOCs) that build up in enclosed office spaces, an issue the EPA's guidance on indoor air quality points to directly."],
  ["Boosted Employee Morale", "People notice when their workspace is cared for. A clean office signals that management values staff wellbeing, and that shows up in day-to-day attitude."],
  ["Reduced Allergens", "Carpets, upholstery, and HVAC vents trap pollen, dust mites, and pet dander that basic tidying never touches. Professional cleaning removes what a quick wipe-down leaves behind."],
  ["Professional Image", "Clients, partners, and job candidates form an impression within seconds of stepping inside. A spotless office builds credibility before anyone says a word."],
];

const whyChoose = [
  ["7-Day Availability", "Cleaning scheduled around your hours, not the other way around."],
  ["Eco-Friendly Products", "Safer for staff, clients, and the buildings we work in."],
  ["Bonded and Insured", "Every team member is police-checked before they set foot in your office."],
  ["Customized Cleaning Plans", "Built around your floor layout, traffic patterns, operating hours, and priorities."],
  ["Free Estimates", "A detailed, no-obligation walkthrough and written quote."],
  ["Month-to-Month Contracts", "No long-term commitment required."],
  ["10% Off Your First Clean", "Use code MINT26 when you book."],
  ["24-Hour Satisfaction Guarantee", "If something's missed, we come back and fix it."],
];

const pricingTiers = [
  ["Small Office (under 2,000 sq ft)", "$150 – $250", "A good fit for private practices, small startups, and boutique offices."],
  ["Medium Office (2,000–5,000 sq ft)", "$250 – $500", "Built for mid-size businesses with multiple rooms, common areas, and higher daily traffic. This tier can include extras like carpet care."],
  ["Large Office (5,000+ sq ft)", "$500+", "Designed for corporate offices, co-working spaces, and multi-floor buildings with a custom scope and schedule."],
];

const faqItems = [
  ["How often should an office be professionally cleaned?", "Most offices in Greater Vancouver do well with weekly or bi-weekly cleaning. High-traffic environments like medical clinics, co-working spaces, and call centres often need daily touchpoint disinfection on top of that."],
  ["Can you clean our office after business hours?", "Yes. We offer early-morning, evening, late-night, and weekend cleaning so your team never has to work around a cleaning crew."],
  ["Are your cleaning products safe for office environments?", "Yes. We use eco-friendly, non-toxic products across every job, and safety data sheets are available on request."],
  ["Do you offer free office cleaning estimates?", "Yes. Call 236-688-3248 or request a quote at our rates page for a no-obligation walkthrough and written estimate."],
  ["What's included in a standard office cleaning?", "Desk and surface sanitizing, floor vacuuming and mopping, washroom cleaning, kitchen and break room wipe-down, trash removal, and disinfection of high-touch surfaces like door handles and light switches."],
  ["Do you bring your own supplies and equipment?", "Yes. Our teams arrive fully equipped, so there's nothing for you to stock or store."],
  ["Are your cleaning staff background-checked?", "Yes. Every team member is police-checked, bonded, and fully insured."],
  ["Can I adjust my cleaning plan after signing up?", "Yes. Our contracts are month-to-month, so you can change frequency or scope without a long-term commitment."],
  ["What does the MINT26 code get me?", "10% off your first office cleaning when you book with us."],
  ["How quickly can you start cleaning our office?", "In most cases, within 48 hours of your estimate. We work 7 days a week, so a same-week start is common."],
];

console.log("→ /services/office-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Our Office Cleaning Service",
    intro:
      "Every plan is built around your space, but most office cleaning contracts across Greater Vancouver draw from the same core service list.",
    cards: [
      {
        _key: key("card"),
        title: "Daily and Weekly Tasks",
        body: "Desk and workstation sanitizing, trash removal and liner replacement, vacuuming carpeted areas, mopping hard floors, dusting, and tidying reception and common areas.",
        items: [],
      },
      {
        _key: key("card"),
        title: "High-Touch Disinfection",
        body: "Door handles, light switches, elevator buttons, shared phones, copier panels, and stair railings get disinfected with hospital-grade products at every visit. These are the surfaces dozens of people touch in a single day, and they're often the last thing a standard cleaning crew gets to.",
        items: [],
      },
      {
        _key: key("card"),
        title: "Kitchen and Break Room",
        body: "Counter and table wipe-down, appliance exterior cleaning, sink sanitization, floor mopping, and trash removal, so the space your staff eats lunch in is treated with the same care as the boardroom.",
        items: [],
      },
      {
        _key: key("card"),
        title: "Interior Windows and Glass",
        body: "Interior glass partitions, office door glass, reception windows, and display cases cleaned with a streak-free, eco-friendly glass cleaner.",
        items: [],
      },
      {
        _key: key("card"),
        title: "Carpet and Floor Care",
        body: "HEPA-filter vacuuming, spot treatment, and periodic deep carpet shampooing. Hard floor stripping and waxing is available on request for offices with vinyl, tile, or hardwood flooring.",
        items: [],
      },
    ],
  },
  {
    // "Bathroom Cleaning" pulled out of the card grid to preserve its
    // outbound link, plus the inline desk-disinfection photo that
    // originally sat between the two card rows.
    _key: key("sec"),
    _type: "richText",
    heading: "Bathroom Cleaning",
    body: [
      paraWithLink(
        "Toilet and urinal sanitization, sink and mirror cleaning, floor mopping, supply restocking, and odor treatment. Our bathroom cleaning follows ",
        "public health disinfection guidance",
        "https://www.canada.ca/en/health-canada/services/drugs-health-products/disinfectants/hard-surface-disinfectants.html",
        " for shared washrooms."
      ),
      await imageBlock(
        "/office-desk-disinfection-north-vancouver.jpg",
        "Office desk and workstation being disinfected during a Greater Vancouver office cleaning visit"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "schedules",
    heading: "Flexible Scheduling for Greater Vancouver Offices",
    intro:
      "Office cleaning doesn't work on one schedule. A call centre with 80 people needs something different than a two-person design studio, so we offer five scheduling options and build the rest around your traffic patterns.",
    items: scheduleOptions.map(([title, body]) => ({ _key: key("sch"), title, body })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Health and Productivity Benefits of Office Cleaning",
    intro:
      "A clean office isn't just about appearances. It changes how people feel at work and how often they get sick.",
    body: healthBenefits.flatMap(([title, body]) => [heading(title), para(body)]),
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Greater Vancouver Businesses Choose Mint Sanitary",
    image: await uploadImage(
      "/office-cleaning-north-vancouver-workspace.jpg",
      "Office cleaning in Greater Vancouver"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Eco-Friendly Office Cleaning Products",
    body: [
      para(
        "Traditional cleaning products contain VOCs that degrade air quality fast in enclosed offices with recirculated air. Over a workday, that can mean headaches, respiratory irritation, and allergic reactions for staff who spend eight or more hours in the same rooms."
      ),
      para(
        "Mint Sanitary uses third-party certified, biodegradable products across every office we clean. Our HEPA-filter vacuums trap 99.97% of particles instead of pushing dust back into the air, and microfiber cloths cut down on chemical use compared to disposable wipes. We also run a color-coded cleaning system that keeps cloths and tools used in washrooms separate from those used in kitchens, which prevents cross-contamination between the two."
      ),
      await imageBlock(
        "/eco-friendly-office-cleaning-products-north-vancouver.jpg",
        "Eco-friendly, biodegradable cleaning products used by Mint Sanitary on Greater Vancouver office cleaning jobs"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Office Cleaning Pricing in Greater Vancouver",
    intro:
      "Pricing is based on square footage, not a flat hourly charge, and every quote comes from a free walkthrough of your space.",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "A few things move the price within each tier: square footage and number of rooms, cleaning frequency, number of washrooms and kitchens, the ratio of carpet to hard flooring, special requirements like medical or food service environments, and whether you need after-hours or weekend scheduling. For an exact number, request a ",
        "free quote",
        "/rates",
        "."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Office Cleaning Across Greater Vancouver",
    body: [
      paraWithLink(
        "We clean offices throughout Vancouver, Burnaby, North Vancouver, West Vancouver, New Westminster, Richmond, Coquitlam, Port Coquitlam, Port Moody, Surrey, Delta, and Langley. If your team is based in North Vancouver specifically, our ",
        "office cleaning in North Vancouver",
        "/north-vancouver/office-cleaning",
        " page covers local scheduling and service area details."
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
    heading: "Ready for a Spotless Office?",
    body: "Get a free, no-obligation quote for your office. First-time customers get 10% off with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "office-cleaning", {
  title: "Office Cleaning Services in Greater Vancouver",
  name: "Office Cleaning",
  tileDescription:
    "Daily and weekly office cleaning that covers desks, common areas, kitchens, and washrooms, keeping your workspace ready for clients and staff every morning.",
  tileImage: await uploadImage(
    "/office-cleaning-north-vancouver-workspace.jpg",
    "Office cleaning in Greater Vancouver"
  ),
  hasOwnPage: true,
  heroHeading: "Office Cleaning Services in Greater Vancouver",
  heroIntro:
    "A clean office is the foundation of a healthy, productive workplace. Employees work better in spaces that are free of clutter, dust, and germs, and clients form an impression of your business within seconds of walking through the door. Mint Sanitary provides professional office cleaning for businesses across Greater Vancouver, from small private practices to multi-floor corporate buildings, using eco-friendly products and bonded, insured, police-checked teams, 7 days a week.",
  heroImage: await uploadImage(
    "/office-cleaning-north-vancouver-workspace.jpg",
    "Office cleaning in Greater Vancouver"
  ),
  metaTitle: "Greater Vancouver Office Cleaning Services | Mint Sanitary",
  metaDescription:
    "Professional office cleaning across Greater Vancouver. Eco-friendly products, bonded staff, flexible scheduling, free estimates. Get a quote today.",
  sections,
  published: true,
});

console.log("\n✓ Office cleaning migrated");
