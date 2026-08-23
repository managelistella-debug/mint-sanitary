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
 * /north-vancouver/office-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/office-cleaning-original.
 *
 * All copy verbatim, including the "in North Vancouver" localization phrases
 * baked into nearly every sentence. Placement decisions:
 *  - The desk-disinfection photo sat decoratively inside the What's Included
 *    grid on the old page, a slot the CMS whatsIncluded cards can't hold
 *    (cards have no image field). whyChoose *requires* an image and the old
 *    page's plain "Why Choose" grid had none, so the photo was moved there —
 *    reused, not invented, and nothing is lost.
 *  - The Bathroom Cleaning card carries an inline link to Health Canada's
 *    disinfectant guidance. whatsIncluded card bodies are plain strings with
 *    no portable-text marks, so the link can't live there. The card keeps its
 *    full text; a short headingless Rich Text block right after the section
 *    repeats just that link as a real paraWithLink mark so it isn't flattened.
 *  - The trailing Service Areas paragraph carries two separate links (general
 *    office cleaning services, NV commercial cleaning). Built as one manual
 *    multi-link block since paraWithLink only supports a single link.
 */

function multiLinkPara(parts) {
  const markDefs = [];
  const children = [];
  for (const part of parts) {
    if (part.href) {
      const k = key("lnk");
      markDefs.push({ _key: k, _type: "link", href: part.href });
      children.push({ _type: "span", _key: key("s"), text: part.text, marks: [k] });
    } else {
      children.push({ _type: "span", _key: key("s"), text: part.text, marks: [] });
    }
  }
  return { _type: "block", _key: key("b"), style: "normal", markDefs, children };
}

const includedCards = [
  [
    "Daily and Weekly Office Tasks",
    "Desk and workstation sanitizing, trash removal and liner replacement, vacuuming carpeted areas, mopping hard floors, dusting, and tidying reception and common areas across your North Vancouver office.",
  ],
  [
    "High-Touch Disinfection in North Vancouver Offices",
    "Door handles, light switches, elevator buttons, shared phones, copier panels, and stair railings get disinfected with hospital-grade products at every visit, a detail that matters in shared buildings around Lower Lonsdale and Central Lonsdale with multiple tenants using the same elevator bank.",
  ],
  [
    "Bathroom Cleaning",
    "Toilet and urinal sanitization, sink and mirror cleaning, floor mopping, supply restocking, and odor treatment. Our washroom cleaning in North Vancouver offices follows Health Canada's hard-surface disinfectant guidance.",
  ],
  [
    "Kitchen and Break Room Cleaning",
    "Counter and table wipe-down, appliance exterior cleaning, sink sanitization, floor mopping, and trash removal for the break room your North Vancouver team uses every day.",
  ],
  [
    "Interior Windows and Glass",
    "Interior glass partitions, office door glass, reception windows, and display cases, cleaned with a streak-free, eco-friendly glass cleaner, ideal for the glass-heavy offices common along the North Vancouver waterfront.",
  ],
  [
    "Carpet and Floor Care",
    "HEPA-filter vacuuming, spot treatment, and periodic deep carpet shampooing. Hard floor stripping and waxing is available on request for North Vancouver offices with vinyl, tile, or hardwood flooring.",
  ],
];

const scheduleOptions = [
  ["Daily Cleaning", "Built for high-traffic North Vancouver offices, medical practices, and co-working spaces."],
  ["Weekly Cleaning", "Our most popular option among North Vancouver small to mid-size offices."],
  ["Bi-Weekly Cleaning", "A cost-effective choice for North Vancouver offices with lighter foot traffic."],
  ["After-Hours Cleaning", "Early mornings, evenings, or late nights, so North Vancouver teams never work around a cleaning crew."],
  ["Weekend Cleaning", "Saturdays, Sundays, or statutory holidays, timed so your North Vancouver office looks fresh every Monday morning."],
];

const healthBenefits = [
  ["Reduced Illness and Sick Days", "Regular disinfection of high-touch surfaces cuts down on the spread of cold and flu between coworkers in a North Vancouver office. Research from ISSA's Value of Clean initiative has found that professional cleaning can reduce workplace illness by as much as 46%."],
  ["Better Indoor Air Quality", "HEPA vacuuming and eco-friendly products cut down on dust, allergens, and VOCs that build up fast in enclosed North Vancouver office buildings, a concern the EPA's indoor air quality guidance addresses directly."],
  ["Boosted Employee Morale", "Staff notice a cared-for workspace. In a North Vancouver office, that signals to your team that their wellbeing matters to management."],
  ["Reduced Allergens", "Carpets, upholstery, and vents trap pollen, dust mites, and pet dander, all of which basic tidying leaves behind. Professional cleaning removes what a quick wipe-down in a North Vancouver office misses."],
  ["Professional Image", "Clients, partners, and job candidates visiting your North Vancouver office form an impression within seconds of walking in. A spotless space builds credibility before anyone says a word."],
];

const whyChoose = [
  ["7-Day Availability", "Office cleaning scheduled around your North Vancouver business hours."],
  ["Eco-Friendly Products", "Safer for staff and clients in every North Vancouver office we service."],
  ["Bonded and Insured", "Every cleaner working in your North Vancouver office is police-checked first."],
  ["Customized Cleaning Plans", "Built around your floor layout, traffic patterns, operating hours, and priorities."],
  ["Free Estimates", "A detailed, no-obligation walkthrough of your North Vancouver office and a written quote."],
  ["Month-to-Month Contracts", "No long-term commitment for North Vancouver clients."],
  ["10% Off Your First Clean", "Use code MINT26 on your first North Vancouver office cleaning."],
  ["24-Hour Satisfaction Guarantee", "If anything's missed at your North Vancouver office, we come back and fix it."],
];

const pricingTiers = [
  ["Small Office (under 2,000 sq ft)", "$150 – $250", "A good fit for private practices, small startups, and boutique offices around North Vancouver."],
  ["Medium Office (2,000–5,000 sq ft)", "$250 – $500", "Built for mid-size North Vancouver businesses with multiple rooms, common areas, and higher daily traffic. This tier can include extras like carpet care."],
  ["Large Office (5,000+ sq ft)", "$500+", "Designed for corporate offices, co-working spaces, and multi-floor North Vancouver buildings with a custom scope and schedule."],
];

const faqItems = [
  ["How often should an office be professionally cleaned in North Vancouver?", "Most North Vancouver offices do well with weekly or bi-weekly cleaning. High-traffic spaces like medical practices, co-working spaces, and call centres in North Vancouver often need daily touchpoint disinfection on top of that."],
  ["Can you clean our office after business hours in North Vancouver?", "Yes. We offer early-morning, evening, late-night, and weekend cleaning for North Vancouver offices, so your team never has to work around a crew."],
  ["Are your cleaning products safe for office environments in North Vancouver?", "Yes. We use eco-friendly, non-toxic products in every North Vancouver office we service, and safety data sheets are available on request."],
  ["Do you offer free office cleaning estimates in North Vancouver?", "Yes. Call 236-688-3248 for a no-obligation walkthrough of your North Vancouver office and a written quote."],
  ["What's included in a standard office cleaning in North Vancouver?", "Desk and surface sanitizing, floor vacuuming and mopping, washroom cleaning, kitchen and break room wipe-down, trash removal, and disinfection of high-touch surfaces, all standard on every North Vancouver office visit."],
  ["Do you bring your own supplies and equipment to North Vancouver offices?", "Yes. Our teams arrive fully equipped at every North Vancouver job, so there's nothing for you to stock or store."],
  ["Are your cleaning staff background-checked for North Vancouver office jobs?", "Yes. Every cleaner working in a North Vancouver office is police-checked, bonded, and fully insured."],
  ["Can I adjust my cleaning plan after signing up in North Vancouver?", "Yes. Our North Vancouver contracts are month-to-month, so you can change frequency or scope without a long-term commitment."],
  ["What does the MINT26 code get me on a North Vancouver office cleaning?", "10% off your first office cleaning in North Vancouver."],
  ["How quickly can you start cleaning my North Vancouver office?", "In most cases, within 48 hours of your estimate. We work 7 days a week across North Vancouver, so a same-week start is common."],
  ["Do you clean offices in older buildings in Lower Lonsdale?", "Yes. We regularly clean offices in the older mixed-use buildings around Lower Lonsdale, and we adjust our approach for narrower stairwells, single washrooms, and shared entryways common in that part of North Vancouver."],
  ["Can you service co-working spaces in North Vancouver?", "Yes. Co-working spaces in North Vancouver often need daily cleaning because of the number of different people using the same desks and kitchen areas, and we scope those jobs accordingly."],
  ["What happens if I'm not happy with a cleaning at my North Vancouver office?", "We back every North Vancouver office cleaning with a 24-hour satisfaction guarantee. If something was missed, call us and we'll send a crew back to fix it at no extra cost."],
  ["Do you clean medical or dental offices in North Vancouver?", "Yes. Medical and dental offices in North Vancouver come with extra disinfection requirements, and we build those into the cleaning plan and frequency for that type of space."],
  ["Is there a cancellation fee for North Vancouver office cleaning contracts?", "No. Our North Vancouver contracts run month-to-month, so you can pause or cancel without a penalty."],
  ["Do you clean offices outside central North Vancouver, like Deep Cove or Lynn Valley?", "Yes. Our North Vancouver service area covers Deep Cove, Lynn Valley, Edgemont Village, and Seymour Heights, in addition to Lower and Upper Lonsdale."],
];

console.log("→ /north-vancouver/office-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "We first started cleaning a small accounting office in Lower Lonsdale a few years back, a two-room suite above a coffee shop with exactly one washroom and a lot of foot traffic during tax season. The owner switched us to early-morning visits so the printer wasn't blocked mid-afternoon, and that's stayed the model for a lot of our North Vancouver office clients since. Every space runs differently, and the schedule should match it."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Office Cleaning in North Vancouver",
    intro:
      "Every North Vancouver office cleaning plan starts from the same core service list, then gets adjusted for your floor layout and traffic.",
    cards: includedCards.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    // The Bathroom Cleaning card above carries this link in the source; card
    // bodies can't hold marks, so it's repeated here as a real link.
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Our washroom cleaning in North Vancouver offices follows ",
        "Health Canada's hard-surface disinfectant guidance",
        "https://www.canada.ca/en/health-canada/services/drugs-health-products/disinfectants/hard-surface-disinfectants.html",
        "."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "schedules",
    heading: "Flexible Scheduling for North Vancouver Offices",
    intro: "North Vancouver businesses don't run on one schedule, so we offer five ways to book office cleaning.",
    items: scheduleOptions.map(([title, body]) => ({ _key: key("sch"), title, body })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Health and Productivity Benefits of Office Cleaning in North Vancouver",
    body: [
      para("A clean office changes how people feel at work, not just how the space looks."),
      ...healthBenefits.flatMap(([title, body]) => [heading(title), para(body)]),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Businesses Choose Mint Sanitary",
    image: await uploadImage(
      "/office-desk-disinfection-north-vancouver.jpg",
      "Office desk and workstation being disinfected during a North Vancouver office cleaning visit"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Eco-Friendly Cleaning Products for North Vancouver Offices",
    body: [
      para(
        "Traditional cleaning products contain VOCs that degrade air quality fast in enclosed offices with recirculated air, and North Vancouver's older commercial buildings, many with limited ventilation, feel that faster than newer towers downtown. Over a workday, that can mean headaches, respiratory irritation, and allergic reactions for staff."
      ),
      para(
        "Mint Sanitary uses third-party certified, biodegradable products in every North Vancouver office we clean. Our HEPA-filter vacuums trap 99.97% of particles instead of pushing dust back into the air, and microfiber cloths cut down on chemical use compared to disposable wipes. We also run a color-coded cleaning system that keeps washroom tools separate from kitchen tools, which stops cross-contamination between the two in every North Vancouver office on our schedule."
      ),
      await imageBlock(
        "/eco-friendly-office-cleaning-products-north-vancouver.jpg",
        "Eco-friendly, biodegradable cleaning products used by Mint Sanitary for North Vancouver office cleaning"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Office Cleaning Pricing in North Vancouver",
    intro:
      "Pricing for North Vancouver office cleaning is based on square footage, and every quote starts with a free walkthrough of your space.",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "A few things move the price within each tier: square footage and number of rooms, cleaning frequency, number of washrooms and kitchens, the ratio of carpet to hard flooring, special requirements like medical or food service spaces, and whether you need after-hours or weekend scheduling. For an exact number for your North Vancouver office, request a free quote.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "North Vancouver Service Areas",
    body: [
      para(
        "Mint Sanitary cleans offices throughout North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also serve neighbouring West Vancouver, Vancouver, and Burnaby, with extended service into New Westminster, Richmond, Coquitlam, Port Coquitlam, Port Moody, Surrey, Delta, and Langley."
      ),
      multiLinkPara([
        { text: "If you're outside North Vancouver, our " },
        { text: "general office cleaning services", href: "/services/office-cleaning" },
        { text: " page covers the same plans for businesses across Greater Vancouver, and our " },
        { text: "North Vancouver commercial cleaning", href: "/north-vancouver/commercial-cleaning" },
        { text: " page covers our broader commercial services beyond offices." },
      ]),
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
    heading: "Ready for a Spotless North Vancouver Office?",
    body: "Call Mint Sanitary at 236-688-3248 or request a free North Vancouver office cleaning quote, and ask about 10% off your first clean with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "office-cleaning", {
  title: "Office Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "office-cleaning"),
  heroHeading: "Office Cleaning in North Vancouver",
  heroIntro:
    "A clean office is the foundation of a healthy, productive workplace, and that matters even more in North Vancouver, where offices range from converted warehouse spaces near the shipyards to glass-front suites along Marine Drive. Mint Sanitary provides office cleaning for businesses throughout North Vancouver, using eco-friendly products, bonded and insured staff, and scheduling that runs 7 days a week.",
  heroImage: await uploadImage(
    "/office-cleaning-north-vancouver-workspace.jpg",
    "Office cleaning workspace in North Vancouver"
  ),
  metaTitle: "Office Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "Office cleaning in North Vancouver from Mint Sanitary. Eco-friendly products, bonded staff, 7-day service. Free estimates, 10% off with MINT26.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver office cleaning migrated");
