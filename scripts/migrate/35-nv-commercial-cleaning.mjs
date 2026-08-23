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
 * /north-vancouver/commercial-cleaning — migrated from the hand-coded page
 * now parked at /north-vancouver/commercial-cleaning-original.
 *
 * All copy verbatim, including the North-Vancouver-specific phrasing baked
 * into nearly every sentence. Placement decisions:
 *  - "Why Professional Commercial Cleaning Matters" rendered four paragraphs
 *    with an inline bold lead-in ("Productivity & Health:", etc.) rather than
 *    a separate title field. Following the exact precedent set by the
 *    general /services/commercial-cleaning migration (02-commercial-cleaning
 *    .mjs, whyMattersBody), each bold lead-in became an h3 heading() and the
 *    remainder of the sentence became the paragraph below it — every word is
 *    preserved, only the inline-bold + colon formatting is converted to a
 *    structural sub-heading.
 *  - "Our 6 Commercial Cleaning Services" was a photo-per-card grid (each
 *    card links to its own /north-vancouver/... page via a "Learn More"
 *    label). Cards have no image field on whatsIncluded, so this became one
 *    Rich Text section: image + heading + paragraph+"Learn More" link per
 *    service, in source order, followed by the post-construction cross-link
 *    paragraph that sat directly beneath the grid on the original page.
 *  - "Commercial Cleaning Compliance & Best Practices" was a photo-less
 *    title/body card grid. whatsIncluded is otherwise unused on this page,
 *    so it was used here per the mapping guidance.
 *  - "Service Areas in Greater Vancouver" (prose + city chips + map image +
 *    a closing linked paragraph) became Rich Text: paragraph, chips as a
 *    Portable Text bullet list, the map image, then the closing paragraph
 *    with its real link.
 *  - Two two-column prose+image blocks ("What Sets Commercial Cleaning Apart
 *    from Residential" and "The Cost of Skipping Professional Cleaning")
 *    became Rich Text sections with the image placed in the same relative
 *    position (before/after the prose) as the source DOM order, and their
 *    single inline links preserved as real paraWithLink marks.
 *  - "Clean Spaces Build Better Businesses" was a plain two-column text
 *    block with no image, so it became a headingless-image Rich Text section
 *    (just the four paragraphs, left column then right column).
 *  - The source page has no Google Reviews block and no standalone photo
 *    gallery, so no testimonials or gallery section was added — every other
 *    section on the page maps to real source content.
 *  - The "Trusted by Local Organizations" client-logo strip (Vancouver
 *    Coastal Health, BC Hydro, etc.) is handled automatically by
 *    CmsPageShell from site globals, per the standard rule, and was not
 *    migrated as a page section.
 */

function bullet(text) {
  return {
    _type: "block",
    _key: key("b"),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  };
}

const services = [
  {
    title: "Office Cleaning",
    href: "/north-vancouver/office-cleaning/",
    image: "/office-cleaning-north-vancouver-workspace.jpg",
    description:
      "A clean workspace boosts morale, reduces sick days, and makes a strong impression on clients. We handle desks, break rooms, washrooms, and common areas on your schedule - daily, weekly, or bi-weekly.",
  },
  {
    title: "Restaurant Cleaning",
    href: "/north-vancouver/restaurant-cleaning/",
    image: "/commercial-kitchen-cleaning-north-vancouver.webp",
    description:
      "Restaurant and commercial kitchens face unique challenges - grease buildup, health code requirements, and the need for speed during off-hours. We tackle deep cleaning from hood systems to floor drains, ensuring compliance with local health standards.",
  },
  {
    title: "Strata Cleaning",
    href: "/north-vancouver/strata-cleaning/",
    image: "/strata-cleaning-north-vancouver.jpg",
    description:
      "Condominiums and multi-unit buildings need consistent care across shared spaces. We manage lobbies, hallways, elevators, shared washrooms, recycling areas, and landscaping perimeters on a schedule that works for your council.",
  },
  {
    title: "School Cleaning",
    href: "/north-vancouver/school-cleaning/",
    image: "/school-cleaning-classroom-north-vancouver.jpg",
    description:
      "Schools demand the highest standards for student and staff safety. We use hospital-grade disinfection products and follow strict protocols to keep classrooms, washrooms, gyms, and cafeterias hygienic.",
  },
  {
    title: "Gym Cleaning",
    href: "/north-vancouver/gym-cleaning/",
    image: "/commercial-gym-cleaning-north-vancouver.webp",
    description:
      "Fitness facilities get heavy traffic and high-touch surfaces. We prioritize disinfection of equipment, locker rooms, and shower areas to keep members healthy and reduce the spread of bacteria and viruses.",
  },
  {
    title: "Church Cleaning",
    href: "/north-vancouver/church-cleaning/",
    image: "/church-cleaning-sanctuary-north-vancouver.jpg",
    description:
      "Houses of worship deserve respect and reverent care. We clean sanctuaries, fellowship halls, nurseries, kitchens, and administrative spaces with attention to your building's character and your congregation's needs.",
  },
];

const complianceItems = [
  [
    "WorkSafeBC Compliance",
    "All Mint Sanitary staff are trained in WorkSafeBC workplace safety standards. We carry valid coverage and follow regulated protocols for hazardous materials, fall protection, and safe equipment use in commercial environments.",
  ],
  [
    "WHMIS Training",
    "Our team holds current WHMIS certification. Every chemical product we bring into your facility is properly labeled with safety data sheets available on request. We handle, store, and dispose of cleaning agents according to federal regulations.",
  ],
  [
    "Disinfection Protocols",
    "We follow Health Canada guidelines for disinfection in commercial spaces. High-touch surfaces - door handles, elevator buttons, shared equipment, washroom fixtures - receive targeted treatment with hospital-grade products during every visit.",
  ],
  [
    "Eco-Friendly Commitment",
    "Our commitment to green cleaning goes beyond marketing. We select products certified by third-party organizations and avoid volatile organic compounds (VOCs) that compromise indoor air quality. This matters especially in enclosed commercial spaces where staff spend 8+ hours daily.",
  ],
];

const scheduleOptions = [
  ["Daily Cleaning", "Ideal for high-traffic offices, retail spaces, medical facilities, and restaurants that need consistent hygiene every day."],
  ["Weekly Cleaning", "The most popular option for small to mid-size offices. Covers thorough cleaning of all areas once per week to maintain a professional environment."],
  ["Bi-Weekly Cleaning", "A budget-friendly option for smaller offices or businesses with lighter foot traffic. Deep cleaning every two weeks keeps spaces fresh."],
  ["Monthly Deep Cleaning", "Comprehensive deep cleaning sessions that tackle carpet shampooing, floor stripping, high dusting, and areas that don't need weekly attention."],
  ["After-Hours & Evening Cleaning", "We work around your operating hours. Most commercial clients prefer evening or early-morning cleaning so there's zero disruption to their workday."],
  ["Weekend & Holiday Cleaning", "Restaurants, gyms, churches, and retail spaces often need weekend and holiday service. We're available 7 days a week, 365 days a year."],
  ["Custom Schedules", "Every business is different. We create tailored cleaning schedules based on your foot traffic patterns, operating hours, and specific requirements."],
];

const serviceAreas = [
  "North Vancouver",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "New Westminster",
  "Richmond",
  "Coquitlam",
  "Port Coquitlam",
  "Port Moody",
  "Surrey",
  "Delta",
  "Langley",
];

const whyChooseItems = [
  ["7-Day Availability", "Your business doesn't stop on weekends or holidays, and neither do we. Early morning, late night, weekends, statutory holidays - we're available when you need us."],
  ["Eco-Friendly Products", "We use biodegradable, non-toxic cleaning products that deliver powerful results without harmful chemical residues. Better for your staff, your visitors, and the planet."],
  ["WorkSafeBC & WHMIS Compliant", "Our team is fully trained in WorkSafeBC regulations and WHMIS protocols. Every product we use is properly labeled, stored, and handled according to provincial safety standards."],
  ["Transparent Pricing", "No surprise charges, no hidden fees, no confusing invoices. We provide a clear written estimate before work begins so you know exactly what to expect."],
  ["Customizable Contracts", "We offer month-to-month contracts with no long-term commitment required. Adjust your cleaning schedule and scope as your business needs change."],
  ["Bonded & Insured", "Every team member is police-checked, bonded, and fully insured. Your security and peace of mind matter as much as your cleanliness."],
  ["Satisfaction Guarantee", "If you're not satisfied with any aspect of our service, we'll return within 24 hours to make it right - no questions asked, no extra charge."],
];

const faqItems = [
  ["What does commercial cleaning include in North Vancouver?", "Commercial cleaning covers floors, carpets, washrooms, break rooms, desks, common areas, windows, and disposal systems. The exact scope varies by business type and size. We customize every plan for your North Vancouver location during a free walkthrough estimate."],
  ["How often should a North Vancouver commercial space be cleaned?", "Most North Vancouver offices need daily or weekly service depending on foot traffic. Retail spaces benefit from daily attention. Restaurants typically need nightly deep cleans. We recommend a schedule during your estimate based on your specific situation."],
  ["Do you use eco-friendly products for commercial spaces in North Vancouver?", "Yes. All of our products are eco-friendly and non-toxic. They perform as well as harsh chemicals without the toxins that harm indoor air quality and employee health. Safety data sheets are available on request for any North Vancouver business."],
  ["Can you clean around our North Vancouver business's operating hours?", "Absolutely. We offer early morning, evening, late night, and weekend service that works around your business schedule. Most North Vancouver clients prefer after-hours cleaning so there's zero disruption."],
  ["How much does commercial cleaning cost in North Vancouver?", "Commercial cleaning in North Vancouver typically costs between $200 and $1,000 or more per month, depending on the size of your space, how often you need cleaning, and the scope of work involved. Every business is different, so we provide a free, no-obligation estimate after a quick walkthrough. Visit our rates page for more detail, or call 236-688-3248 to talk through your North Vancouver location."],
  ["Are your North Vancouver commercial cleaners trained and insured?", "Every team member is professionally trained, fully insured, bonded, and police-checked. We also maintain WorkSafeBC coverage and current WHMIS certification for all work performed in North Vancouver."],
  ["What's the difference between janitorial and commercial cleaning in North Vancouver?", "Janitorial service handles routine daily maintenance like emptying bins and restocking supplies. Commercial cleaning goes deeper with floor stripping, window cleaning, deep disinfection, and specialized work. Most North Vancouver clients need both."],
  ["Do you serve strata buildings and condominiums in North Vancouver?", "Yes. We handle lobbies, hallways, common areas, underground parking, elevators, and exterior grounds for strata buildings throughout North Vancouver and Greater Vancouver."],
  ["Do you offer one-time deep cleaning for North Vancouver commercial spaces?", "Yes. In addition to recurring contracts, we provide one-time deep cleaning for move-ins, move-outs, post-renovation cleanup, and special events in North Vancouver. Call for a free estimate."],
  ["What sets Mint Sanitary apart from other commercial cleaners in North Vancouver?", "We combine 7-day availability, eco-friendly products, WorkSafeBC and WHMIS compliance, transparent pricing, month-to-month flexibility, and a 24-hour satisfaction guarantee. We treat every North Vancouver facility like our own."],
  ["Do you clean commercial spaces in Lower Lonsdale and other North Vancouver business districts?", "Yes. We regularly clean offices and retail spaces throughout Lower Lonsdale, along with businesses further up the hill in Lynn Valley and Edgemont Village."],
  ["Can strata councils in North Vancouver set up a recurring commercial cleaning contract?", "Yes. Many strata councils in North Vancouver choose a weekly or bi-weekly schedule for common areas, with a month-to-month contract that can adjust as the building's needs change."],
  ["Do you clean medical and dental offices in North Vancouver?", "Yes. Medical and dental offices need a higher standard of disinfection than a typical office. Our North Vancouver team follows Health Canada guidelines for high-touch surfaces and can build a schedule around patient hours."],
  ["What safety measures do your North Vancouver commercial cleaners follow?", "Our team is trained in WorkSafeBC workplace safety standards and current WHMIS chemical handling protocols. Every cleaner working in North Vancouver carries proper coverage before stepping onto a client's property."],
  ["Can I get a customized cleaning checklist for my North Vancouver business?", "Yes. During your free walkthrough, we build a checklist specific to your North Vancouver space, covering everything from daily desk wipe-downs to monthly deep cleaning tasks."],
  ["Do you clean retail stores in North Vancouver?", "Yes. Retail spaces in North Vancouver, from Lower Lonsdale storefronts to shops near Edgemont Village, typically benefit from daily or near-daily cleaning to stay presentable for customers."],
  ["What types of North Vancouver businesses do you work with?", "We clean offices, commercial kitchens, strata buildings, schools, gyms, and churches across North Vancouver, and have worked with organizations including Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction."],
  ["Do you clean office buildings near Deep Cove and Seymour Heights?", "Yes. We cover all of North Vancouver, including smaller commercial spaces out toward Deep Cove and the Seymour Heights area, on the same flexible scheduling options available closer to downtown North Vancouver."],
];

console.log("→ /north-vancouver/commercial-cleaning");

const servicesBody = [];
for (const s of services) {
  servicesBody.push(
    await imageBlock(s.image, `${s.title} in North Vancouver`),
    heading(s.title),
    paraWithLink(s.description + " ", "Learn More", s.href, "")
  );
}
servicesBody.push(
  paraWithLink(
    "We also provide ",
    "post-construction cleaning",
    "/north-vancouver/post-construction-cleaning/",
    " for new builds and renovations - removing dust, debris, adhesive residue, and construction film to deliver move-in-ready commercial spaces."
  )
);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Clean Spaces Build Better Businesses",
    body: [
      para(
        "Whether you run a small office, a multi-unit strata building, a restaurant, or a fitness facility, cleanliness shapes how clients, employees, and visitors experience your space. A well-maintained environment communicates professionalism, builds trust, and creates a healthier workplace."
      ),
      para(
        "Studies consistently show that clean workplaces reduce absenteeism and increase employee productivity. A report by the International Sanitary Supply Association found that 90% of employees feel more productive in a clean environment. For businesses in North Vancouver, professional commercial cleaning isn't an overhead - it's an investment that pays dividends in staff retention, customer satisfaction, and brand perception."
      ),
      para(
        "Mint Sanitary provides comprehensive commercial cleaning services across North Vancouver and Greater Vancouver. We serve offices, commercial kitchens, strata buildings, schools, gyms, and churches with customized cleaning programs tailored to each facility's unique needs. That includes everything from small offices in Lynn Valley to multi-unit strata buildings closer to the waterfront."
      ),
      para(
        "Our team is fully trained in WorkSafeBC safety standards and WHMIS chemical handling protocols. We use only eco-friendly, non-toxic cleaning products. And we're available seven days a week - including evenings, early mornings, weekends, and statutory holidays - so your cleaning never disrupts your operations."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Professional Commercial Cleaning Matters",
    body: [
      await imageBlock(
        "/office-desk-disinfection-north-vancouver.jpg",
        "Professional desk and surface disinfection in an office"
      ),
      heading("Productivity & Health"),
      para(
        "Research published in the Harvard Business Review found that employees in cleaner offices are up to 5% more productive. Reduced dust, allergens, and bacteria mean fewer sick days and better focus. In shared commercial spaces, regular professional cleaning is one of the most cost-effective health interventions available."
      ),
      heading("WorkSafeBC & WHMIS Compliance"),
      para(
        "British Columbia businesses are required to maintain safe working environments under WorkSafeBC regulations. This includes proper handling and storage of cleaning chemicals under WHMIS guidelines. Mint Sanitary's team is fully certified, so you stay compliant without the training burden."
      ),
      heading("Eco-Friendly Matters"),
      para(
        "Traditional cleaning chemicals release volatile organic compounds (VOCs) that degrade indoor air quality and pose health risks. Our eco-friendly products are third-party certified, biodegradable, and effective - without the toxic trade-offs."
      ),
      heading("Regular Schedules Prevent Costly Problems"),
      para(
        "Infrequent cleaning leads to buildup - grease in kitchens, mold in washrooms, carpet deterioration in offices. Regular professional cleaning extends the life of your flooring, fixtures, and furniture while preventing health hazards before they escalate."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Our 6 Commercial Cleaning Services",
    body: servicesBody,
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    image: await uploadImage(
      "/commercial-janitorial-cleaning-north-vancouver.jpg",
      "Commercial cleaning team at work in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Commercial Cleaning Compliance & Best Practices",
    cards: complianceItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "schedules",
    heading: "Service Schedules & Flexibility",
    intro:
      "Every business has different cleaning needs. We offer flexible scheduling options designed to work around your operating hours and budget.",
    items: scheduleOptions.map(([title, body]) => ({ _key: key("sch"), title, body })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Service Areas in Greater Vancouver",
    body: [
      para(
        "Mint Sanitary provides commercial cleaning services throughout the Greater Vancouver area. Whether your business is in downtown Vancouver or the suburbs, you get the same team, the same quality standards, and the same commitment."
      ),
      ...serviceAreas.map(bullet),
      paraWithLink(
        "Visit our ",
        "service areas page",
        "/service-areas",
        " for more information about coverage in your neighborhood."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What Sets Commercial Cleaning Apart from Residential",
    body: [
      para(
        "Commercial cleaning and residential cleaning share basic principles, but the execution is fundamentally different. Commercial spaces have higher foot traffic, stricter regulatory requirements, specialized equipment needs, and unique scheduling demands that residential cleaning simply doesn't encounter."
      ),
      para(
        "A home might need vacuuming and kitchen cleaning once a week. A commercial kitchen needs nightly degreasing, hood cleaning, and floor sanitization to meet health department standards. An office building requires systematic high-touch disinfection protocols that go far beyond residential surface wiping."
      ),
      para(
        "Commercial cleaning also requires compliance with WorkSafeBC regulations and WHMIS chemical handling standards - requirements that don't apply to residential work. Insurance, bonding, and security clearances are essential when your cleaning team has access to business premises, sensitive equipment, and confidential areas. This holds whether the property sits in a busy commercial strip in Lower Lonsdale or a quieter business park near Deep Cove."
      ),
      paraWithLink(
        "At Mint Sanitary, our commercial cleaning team is specifically trained for business environments. We carry commercial-grade insurance, maintain WorkSafeBC coverage, and use industrial equipment designed for larger spaces and heavier-duty cleaning. Looking for ",
        "residential cleaning services",
        "/north-vancouver/house-cleaning/",
        "? We offer those too."
      ),
      await imageBlock(
        "/commercial-new.jpg",
        "Commercial cleaning setup in North Vancouver"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "The Cost of Skipping Professional Cleaning",
    body: [
      await imageBlock(
        "/commercial-3-new.jpg",
        "Office cleaned professionally in North Vancouver"
      ),
      para(
        "We once visited a North Vancouver office that had been relying on staff to handle their own cleaning for over a year. The carpets were visibly stained, the break room had a persistent odor, and the washrooms had mineral buildup that no amount of consumer spray could remove. Within one deep clean, the transformation was dramatic - and the office manager told us three employees commented on the difference the very next morning."
      ),
      para(
        "That story isn't unusual. Many businesses underestimate how quickly dirt, grime, and bacteria accumulate in commercial spaces. What starts as a minor inconvenience becomes a health hazard, a morale issue, and eventually a costly restoration project."
      ),
      para(
        "The real costs of skipping professional cleaning include premature carpet and flooring replacement, HVAC system strain from dust buildup, increased sick days among staff, negative impressions on clients and visitors, and potential WorkSafeBC compliance issues."
      ),
      paraWithLink(
        "Professional commercial cleaning isn't an expense - it's preventive maintenance for your most valuable asset: your workspace. A consistent cleaning schedule keeps your space healthy, your team productive, and your business looking its best. Contact us for a ",
        "free estimate",
        "/contact",
        " and see the difference for yourself."
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
    heading: "Let's Talk About Your Cleaning Needs",
    body: "Your space reflects your business values. Mint Sanitary handles commercial cleaning in North Vancouver so you can focus on running your operation. We're available 7 days a week with transparent pricing, eco-friendly products, and free estimates. Call 236-688-3248 today or request a free estimate online.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/contact",
  },
];

await replaceDoc("areaService", "commercial-cleaning", {
  title: "Commercial Cleaning Services in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "commercial-cleaning"),
  heroHeading: "Commercial Cleaning Services in North Vancouver",
  heroIntro:
    "A clean business environment is more than aesthetics - it's a competitive advantage. Mint Sanitary delivers reliable commercial cleaning across North Vancouver with eco-friendly products, WorkSafeBC compliance, seven-day availability, and transparent pricing. We work with businesses from Lower Lonsdale's waterfront offices to properties further up the hill in Edgemont Village and Seymour Heights.",
  heroImage: await uploadImage(
    "/commercial-janitorial-cleaning-north-vancouver.jpg",
    "Commercial cleaning in North Vancouver"
  ),
  metaTitle: "Commercial Cleaning Services in North Vancouver | Mint Sanitary",
  metaDescription:
    "Commercial cleaning across North Vancouver. Eco-friendly products, WorkSafeBC compliant staff, flexible schedules, and transparent pricing. Get a free estimate.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver commercial cleaning migrated");
