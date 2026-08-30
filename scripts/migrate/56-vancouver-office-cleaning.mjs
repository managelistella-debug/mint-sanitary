import {
  key,
  refTo,
  para,
  multiLinkPara,
  replaceAreaServiceDoc,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "office-cleaning";

/**
 * Source: vancouver-content/vancouver-pages/office-cleaning.md (verbatim
 * copy, already approved). Placement decisions:
 *  - "Flexible Scheduling for Vancouver Offices" is a distinct bulleted list
 *    of five booking options (bold label + sentence each), the same shape
 *    the existing `schedules` section type is built for (see
 *    12-office-cleaning.mjs / 27-nv-office-cleaning.mjs, which use it for
 *    this exact content) — used here rather than folding it into the
 *    whatsIncluded cards.
 *  - Pricing tiers each carry a clean, separable price figure ("$150 to
 *    $250"), so it lives in `range` with the descriptive sentence in `body`,
 *    matching how 12-office-cleaning.mjs / 27-nv-office-cleaning.mjs handled
 *    the identical tier shape.
 *  - The Final CTA source sentence ends with a markdown link ("[rates
 *    page](/rates)"); finalCta.body is a plain string with no rich-text
 *    support, so the link is kept as plain words with the CTA button still
 *    pointing at /rates.
 */

const includedCards = [
  [
    "Daily and Weekly Office Tasks",
    "Desk and workstation sanitizing, trash removal and liner replacement, vacuuming carpeted areas, mopping hard floors, dusting, and tidying reception and common areas across your Vancouver office.",
  ],
  [
    "High-Touch Disinfection in Vancouver Offices",
    "Door handles, light switches, elevator buttons, shared phones, copier panels, and stair railings get disinfected with hospital-grade products at every visit, a detail that matters in Downtown and Yaletown towers where dozens of tenants share the same elevator bank and lobby.",
  ],
  [
    "Bathroom Cleaning",
    "Toilet and urinal sanitization, sink and mirror cleaning, floor mopping, supply restocking, and odor treatment. Our washroom cleaning in Vancouver offices follows Health Canada's hard-surface disinfectant guidance.",
  ],
  [
    "Kitchen and Break Room Cleaning",
    "Counter and table wipe-down, appliance exterior cleaning, sink sanitization, floor mopping, and trash removal for the break room your Vancouver team uses every day.",
  ],
  [
    "Interior Windows and Glass",
    "Interior glass partitions, office door glass, reception windows, and display cases, cleaned with a streak-free, eco-friendly glass cleaner, ideal for the glass-partitioned open-plan offices common in Yaletown and along the Broadway corridor.",
  ],
  [
    "Carpet and Floor Care",
    "HEPA-filter vacuuming, spot treatment, and periodic deep carpet shampooing. Hard floor stripping and waxing is available on request for Vancouver offices with vinyl, tile, or hardwood flooring.",
  ],
].map(([title, body]) => ({ _key: key("card"), title, body, items: [] }));

const scheduleItems = [
  ["Daily Cleaning", "Built for high-traffic Vancouver offices, medical practices, and co-working spaces."],
  ["Weekly Cleaning", "Our most popular option among Vancouver small to mid-size offices."],
  ["Bi-Weekly Cleaning", "A cost-effective choice for Vancouver offices with lighter foot traffic."],
  ["After-Hours Cleaning", "Early mornings, evenings, or late nights, so your Vancouver team never works around a crew."],
  ["Weekend Cleaning", "Saturdays, Sundays, or statutory holidays, timed so your Vancouver office looks fresh every Monday morning."],
].map(([title, body]) => ({ _key: key("sch"), title, body }));

const processSteps = [
  ["Free walkthrough and quote", "We visit your Vancouver office, look at floor layout, washroom count, and traffic patterns, and give you a written quote on the spot."],
  ["A customized plan", "Frequency, scope, and timing get built around your operating hours, whether that means a daily touchpoint pass for a busy co-working floor or a weekly visit for a smaller suite."],
  ["Scheduled cleaning", "Choose daily, weekly, bi-weekly, after-hours, or weekend service, and our crew travels over for every visit on that schedule."],
  ["Follow-up and guarantee", "Every visit is backed by our 24-hour satisfaction guarantee. If anything's missed, call and we send a crew back to fix it at no extra cost."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["Eco-Friendly Products", "Safer for staff and clients in every Vancouver office we service."],
  ["Bonded and Insured", "Every cleaner working in your Vancouver office is background-checked first."],
  ["Customized Cleaning Plans", "Built around your floor layout, traffic patterns, operating hours, and priorities."],
  ["Free Estimates", "A detailed, no-obligation walkthrough of your Vancouver office and a written quote."],
  ["Month-to-Month Contracts", "No long-term commitment for Vancouver clients."],
  ["24-Hour Satisfaction Guarantee", "If anything's missed at your Vancouver office, we come back and fix it."],
  ["Available 7 Days a Week", "We schedule around your Vancouver business hours, though because crews travel from North Vancouver, booking ahead gets you the fastest available slot rather than a guaranteed same-day visit."],
  ["Built for Strata and Concierge Buildings", "We work within visitor sign-in and elevator booking windows common in Downtown and Yaletown towers, so cleaning happens without disrupting building security."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const pricingTiers = [
  ["Small Office (under 2,000 sq ft)", "$150 to $250", "A good fit for private practices, small startups, and boutique offices in Yaletown and along the Broadway corridor."],
  ["Medium Office (2,000 to 5,000 sq ft)", "$250 to $500", "Built for mid-size Vancouver businesses with multiple rooms, common areas, and higher daily traffic. This tier can include extras like carpet care."],
  ["Large Office (5,000+ sq ft)", "$500+", "Designed for corporate offices, co-working spaces, and multi-floor Downtown buildings with a custom scope and schedule."],
].map(([title, range, body]) => ({ _key: key("tier"), title, range, body }));

const faqItems = [
  ["How often should an office be professionally cleaned in Vancouver?", "Most Vancouver offices do well with weekly or bi-weekly cleaning. High-traffic spaces like medical practices, co-working spaces, and call centres in Downtown and Yaletown towers often need daily touchpoint disinfection on top of that."],
  ["Can you clean our office after business hours in Vancouver?", "Yes. We offer early-morning, evening, late-night, and weekend cleaning for Vancouver offices, so your team never has to work around a crew. Just keep in mind that after-hours slots in strata buildings often need to line up with a booked elevator window, so we ask for a bit of advance notice."],
  ["Do you clean during the day if our office can't be accessed after hours?", "Yes. Some Downtown and Fairview buildings restrict after-hours contractor access, so we run daytime visits timed around meeting schedules and lunch breaks for offices where that's the only option."],
  ["Are your cleaning products safe for office environments in Vancouver?", "Yes. We use eco-friendly, non-toxic, plant-based products in every Vancouver office we service, and safety data sheets are available on request."],
  ["Do you offer free office cleaning estimates in Vancouver?", "Yes. Call 236-688-3248 for a no-obligation walkthrough of your Vancouver office and a written quote."],
  ["What's included in a standard office cleaning in Vancouver?", "Desk and surface sanitizing, floor vacuuming and mopping, washroom cleaning, kitchen and break room wipe-down, trash removal, and disinfection of high-touch surfaces, all standard on every Vancouver office visit."],
  ["Does the kitchen or break room get cleaned every visit?", "Yes. Counters, tables, appliance exteriors, and the sink get wiped down and sanitized on every visit as part of the standard scope, not as an add-on."],
  ["Do you bring your own supplies and equipment to Vancouver offices?", "Yes. Our teams arrive fully equipped at every Vancouver job, so there's nothing for you to stock or store."],
  ["Are your cleaning staff background-checked for Vancouver office jobs?", "Yes. Every cleaner working in a Vancouver office is background-checked, bonded, and fully insured."],
  ["Can I adjust my cleaning plan after signing up in Vancouver?", "Yes. Our contracts are month-to-month, so you can change frequency or scope for your Vancouver office without a long-term commitment."],
  ["Is there a minimum contract length for Vancouver office cleaning?", "No. Contracts run month-to-month with no minimum term, so you can start with a trial frequency and adjust once you see how it fits your space."],
  ["How do your cleaners get into concierge or strata-managed buildings?", "We coordinate sign-in with your building's concierge or property manager ahead of each visit and follow whatever visitor log or elevator booking process your Downtown or Yaletown building requires."],
  ["What does the MINT26 code get me on a Vancouver office cleaning?", "10% off your first office cleaning in Vancouver."],
  ["How quickly can you start cleaning my Vancouver office?", "Response times depend on crew travel from our North Vancouver base over the Lions Gate or Ironworkers Memorial bridge, so same-day starts in Vancouver aren't guaranteed the way they are closer to home. Call ahead and we'll give you a realistic start date, often within a few days of your estimate."],
  ["Do you clean offices in older, lower-rise buildings, not just high-rises?", "Yes. We clean offices in the low-rise and mid-rise buildings around Mount Pleasant, Commercial Drive, Kitsilano, and Dunbar as well as the high-rise towers Downtown and in Yaletown, and we adjust our approach to each layout."],
  ["Can you service co-working spaces in Vancouver?", "Yes. Co-working spaces in Vancouver often need daily cleaning because of the number of different people using the same desks and kitchen areas, and we scope those jobs accordingly."],
  ["What happens if I'm not happy with a cleaning at my Vancouver office?", "We back every Vancouver office cleaning with a 24-hour satisfaction guarantee. If something was missed, call us and we'll send a crew back to fix it at no extra cost."],
  ["Do you clean medical or dental offices in Vancouver?", "Yes. Medical and dental offices in Vancouver come with extra disinfection requirements, and we build those into the cleaning plan and frequency for that type of space."],
  ["Do you offer cleaning around statutory holidays in Vancouver?", "Yes. Weekend and holiday cleaning is available so your Vancouver office looks fresh on the next business day, including the Monday after a long weekend."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Office Cleaning in Vancouver",
      intro: "Every Vancouver office cleaning plan starts from the same core service list, then gets adjusted for your floor layout, tenant mix, and traffic.",
      cards: includedCards,
    },
    {
      _key: key("sec"),
      _type: "schedules",
      heading: "Flexible Scheduling for Vancouver Offices",
      intro: "Vancouver businesses don't run on one schedule, so we offer five ways to book office cleaning.",
      items: scheduleItems,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Downtown and Yaletown office towers show wear fast around shared entry points. Smudged glass partitions, grimy elevator buttons, and a break room sink that never quite looks clean between visits are usually the first complaints from staff in a shared high-rise, especially in buildings where the lobby, elevators, and washrooms serve several tenants instead of just one."),
        para("Fairview's Broadway corridor is a different mix. Tech firms, health practices, and professional offices in low-rise and mid-rise buildings near the Broadway Tech Centre tend to run tighter floor plans with fewer washrooms per staff count, so bathroom turnaround and kitchen upkeep get noticed quickly when they slip. Construction dust from the ongoing Broadway corridor rezoning and infill projects also finds its way into HVAC intakes and window ledges nearby, which shows up as a fine grey film on desks and monitors within days of a cleaning."),
        para("Across both areas, a strata-managed building often restricts after-hours access to a booked elevator window, so a crew that misses a visit can leave a floor uncleaned until the next scheduled slot rather than getting a quick same-day fix. That makes consistent scheduling more important in Vancouver's dense office buildings than in a standalone office with its own entrance."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Office Cleaning Prices",
      intro: "Pricing for Vancouver office cleaning is based on square footage, and every quote starts with a free walkthrough of your space. Pricing is the same across every city we serve, so a Downtown suite and a North Vancouver suite of the same size and scope are quoted the same way.",
      tiers: pricingTiers,
      notes: [
        "A few things move the price within each tier: square footage and number of rooms, cleaning frequency, number of washrooms and kitchens, the ratio of carpet to hard flooring, special requirements like medical or food service spaces, and whether you need after-hours or weekend scheduling. For an exact number for your Vancouver office, request a free quote.",
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Office Cleaning Process Works",
      checklistItems: [],
      steps: processSteps,
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Businesses Choose Mint Sanitary",
      items: whyChooseItems,
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
    { _key: key("sec"), _type: "testimonials" },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Why Vancouver's Climate and Market Make This Different",
      body: [
        para("Downtown, Yaletown, and Fairview office towers run on sealed, recirculated-air HVAC systems that trap dust and VOCs faster than the lower-rise, more naturally ventilated business parks common closer to North Vancouver. That makes eco-friendly, low-VOC products and HEPA-filter vacuuming matter more here, since anything harsh gets breathed in by every tenant on the floor, not just your own staff. On the Broadway corridor, active rezoning and infill construction under Vancouver's Broadway Plan means nearby offices deal with more construction dust drifting into window tracks and HVAC intakes than a comparable North Vancouver suite would see in a given month. Add in Vancouver's wet season from October through April, when shared lobbies and elevator floors in Downtown and Yaletown towers track in far more grit per square foot than a standalone office with its own entrance, and the cleaning load in a dense Vancouver tower looks different from the same job in a lower-density building across the water."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Commercial cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
        multiLinkPara(["", ["Strata cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
        multiLinkPara(["", ["Window cleaning in Vancouver", "/vancouver/window-cleaning"]]),
        multiLinkPara(["", ["Carpet cleaning in Vancouver", "/vancouver/carpet-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Office Cleaning in Vancouver",
      body: [
        para("Our Vancouver office cleaning work is concentrated in the Downtown core, Yaletown, and the Fairview office cluster along Broadway, where high-rise and mid-rise tenants make up most of our client base. We also clean offices in Mount Pleasant and Commercial Drive, where small studios and agencies often share converted commercial buildings, and in Kitsilano, West End, Kerrisdale, Point Grey, and Dunbar, where professional offices tend to sit in smaller, standalone storefronts and low-rise buildings rather than shared towers. Wherever your office sits, we schedule around your building's access rules and your team's hours."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Office Cleaning in Vancouver?",
      body: "Call Mint Sanitary at 236-688-3248 or request a free Vancouver office cleaning quote, and ask about 10% off your first clean with code MINT26. See full pricing details on our rates page.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Office Cleaning in Vancouver",
    heroHeading: "Office Cleaning in Vancouver",
    heroIntro: "Vancouver's office stock covers glass towers in the Downtown core and Yaletown alongside the low-rise medical and tech suites along Fairview's Broadway corridor, and each layout cleans differently. Mint Sanitary is rated 5 out of 5 from 50+ Google reviews, using background-checked, bonded, and insured staff and eco-friendly, non-toxic products on every job. Crews travel over from our North Vancouver base for every Vancouver visit, so while we work 7 days a week, same-day booking in Vancouver isn't guaranteed the way it is closer to home. Call ahead when you can, and take 10% off your first clean with code MINT26.",
    metaTitle: "Office Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Office cleaning in Vancouver for Downtown, Yaletown, and Fairview businesses. Eco-friendly products, background-checked staff, 5 out of 5 rating. 10% off your first clean with code MINT26.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
