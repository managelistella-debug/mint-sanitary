import { key, uploadImage, replaceDoc, heading, para, paraWithLink } from "./lib.mjs";

/**
 * /services/gym-cleaning — migrated from the hand-coded page now parked at
 * /services/gym-cleaning-original.
 *
 * All copy verbatim except for one light editorial label (see below).
 * Placement decisions:
 *  - Daily and deep-cleaning services were each a flat bulleted list where
 *    every item packed "Title. Body." into one string. Following the same
 *    "split on the first sentence" convention the strata pilot used for a
 *    near-identical shape, each string became a whatsIncluded card with a
 *    real title/body split. The two lists share the page's one whatsIncluded
 *    slot, so the six deep-cleaning cards are prefixed "Deep Clean — " to
 *    keep the daily/deep distinction the source conveyed with a subheading
 *    — this prefix is the one bit of added editorial text in this file,
 *    flagged here rather than left silent.
 *  - "What Professional Gym Cleaning Prevents," "How Gym Cleaning Benefits
 *    Your Business," and "Gym Cleaning Packages" are all card grids with no
 *    image and no free section slot left (whatsIncluded is taken), so each
 *    became its own Rich Text section (heading + heading/para pair per
 *    item), matching the "why it matters" treatment from the strata and
 *    commercial pilots.
 *  - Two short footnote sentences citing external guides (NASM, CDC, Health
 *    Canada) sat directly under the process grid and the Why Choose grid in
 *    the source. Neither processChecklist nor whyChoose has a trailing-note
 *    field, so each footnote became its own heading-less Rich Text block
 *    immediately after, with the citation link preserved as a real mark.
 */

function splitTitleBody(s) {
  const idx = s.indexOf(". ");
  return { title: s.slice(0, idx), body: s.slice(idx + 2) };
}

const preventionItems = [
  { title: "MRSA and Staph Infections", body: "These spread through skin to skin contact and shared equipment like benches and mats. Regular disinfection of high contact surfaces cuts the risk of transmission between members. The CDC's guidance for athletic facilities outlines why this matters for any shared training space." },
  { title: "Athlete's Foot and Ringworm", body: "Fungal infections thrive in warm, moist locker rooms and showers. Floors, benches, and shower stalls need targeted treatment, not a quick mop pass." },
  { title: "Respiratory Infections", body: "Group fitness classes and spin studios pack a lot of heavy breathing into a small room. Clean air handling and surface disinfection matter more here than in most other parts of the gym." },
  { title: "General Infection Spread", body: "Strep, minor cuts, and everyday illness move faster through a gym than most owners realize, and members with compromised immune systems benefit from a facility that holds itself to a higher standard." },
];

const dailyServices = [
  "Equipment Sanitization. Free weights, machines, benches, grips, handles, and barbells get sprayed, given time for the disinfectant to work, then wiped again.",
  "Cardio Equipment Disinfection. Treadmills, ellipticals, rowing machines, and stationary bikes, including screens, buttons, handrails, and foot platforms.",
  "Floor Care. Sweeping, vacuuming, and mopping throughout, with extra attention in locker rooms to control moisture and prevent odor buildup.",
  "High-Touch Surface Disinfection. Door handles, light switches, water fountain buttons, entrance areas, and the reception desk.",
  "Restroom Sanitation. Toilets, sinks, mirrors, soap dispensers, and paper towel holders, with floors mopped and odor control applied.",
  "Reception Area Cleaning. Desks, chairs, and common areas kept presentable for the first impression members get.",
  "Trash Removal. Bins emptied and liners replaced throughout the facility.",
];

const deepServices = [
  "Locker Room and Shower Area Deep Cleaning. Behind equipment, disinfecting benches, and treating shower corners to stop mold before it starts.",
  "Carpet Extraction. Weekly or monthly extraction in cardio areas and group fitness studios, where foot traffic and sweat build up fastest.",
  "Mat and Yoga Studio Disinfection. Yoga mats, resistance bands, and studio floors get their own protocol, since members lie directly on these surfaces.",
  "Group Fitness Class Room Sanitization. Mirrors, floors, and shared equipment cleaned between classes.",
  "Odor Control. Enzyme-based treatments break down sweat residue at the source instead of masking it with fragrance.",
  "Post-Outbreak Sanitization. Emergency deep disinfection if a member reports ringworm, MRSA, or another infection tied to the facility.",
];

const businessBenefits = [
  { title: "Member Retention", body: "A clean facility leads to longer memberships and better reviews. Members notice when equipment looks and smells clean, and they notice just as fast when it doesn't." },
  { title: "New Member Acquisition", body: "Word of mouth and online reviews improve when a facility is visibly well kept. Cleanliness is often the first thing a new member mentions to a friend." },
  { title: "Staff Morale", body: "When cleaning is handled by a professional team, gym staff aren't spending part of every shift wiping down sweat. That time goes back into coaching and member experience." },
  { title: "Equipment Longevity", body: "Regular professional disinfection extends machine lifespan by 20 to 30%, because salt, sweat, and dirt don't get the chance to corrode components over time. For a facility with $50,000 to $100,000 invested in machines, that's a meaningful amount of equipment life saved." },
];

const processSteps = [
  { title: "Initial Assessment and Custom Plan Development", body: "A visit to measure square footage, count equipment, identify high risk areas, and learn peak hours and member demographics. From there, we design a schedule that fits how the facility operates." },
  { title: "Pre-Service Equipment and Staff Setup", body: "Professional disinfectants, microfiber cloths, and gym-certified spray bottles go out with a team trained in proper disinfection contact times, usually around 10 seconds per surface." },
  { title: "Daily Cleaning Execution", body: "Most gyms get three visits a day: pre-opening, mid-day, and evening or post-close. Each visit is documented, and any maintenance issues get flagged as they're found." },
  { title: "Deep Cleaning and Maintenance", body: "Weekly or monthly, depending on the facility. Carpet extraction, locker room deep disinfection, mat sanitization, and odor control all happen during off-hours so they don't interrupt members." },
  { title: "Quality Assurance and Reporting", body: "A report after each service details what was cleaned, when, and any issues noticed. If equipment breaks or a member reports a concern, response is available seven days a week." },
];

const whyChoose = [
  { title: "Eco-Friendly Commitment", body: "We use 100% green, non-toxic disinfectants that are safe for members with asthma, allergies, or sensitive skin." },
  { title: "7-Day Availability", body: "Pre-opening, mid-day, and post-close cleaning fits around any gym schedule, seven days a week." },
  { title: "Certified Professional Staff", body: "Our team is bonded, insured, and trained in gym disinfection protocols, with training aligned to Health Canada's cleaning and disinfecting guidance and WorkSafeBC standards." },
  { title: "Transparent Pricing and Free Estimates", body: "Every quote is itemized, with no hidden fees and no contract lock-in." },
  { title: "Emergency Response", body: "Same-day mobilization is available for MRSA, ringworm, or other outbreak disinfection needs." },
  { title: "Local Expertise Across the Region", body: "From boutique studios to full-size fitness centers, our teams understand what different gyms across Greater Vancouver need, including member traffic patterns and seasonal demand." },
  { title: "First-Clean Discount", body: "New clients get 10% off their first service with code MINT26." },
];

const packages = [
  { title: "Daily Surface Disinfection", body: "Pre-opening, mid-day, and evening visits keep equipment and high-touch surfaces in check throughout the day." },
  { title: "Weekly or Monthly Deep Cleaning", body: "Carpet extraction, locker room sanitization, and mat disinfection on a set schedule." },
  { title: "Customized Frequency", body: "Three times daily, twice daily, or five days a week, built around the facility's needs." },
  { title: "Emergency Outbreak Disinfection", body: "Same-day response when an infection is reported at the facility." },
];

const faqItems = [
  { question: "How often should a gym be cleaned?", answer: "It depends on member traffic and facility size, but most gyms benefit from daily cleaning split across pre-opening, mid-day, and post-close visits. High-traffic facilities and boutique studios with back to back classes often need more frequent attention to high-touch equipment." },
  { question: "What disinfectants does Mint Sanitary use in gyms?", answer: "We use 100% eco-friendly, non-toxic disinfectants that meet Health Canada and WorkSafeBC standards. They're safe for members with allergies or sensitive skin and effective against MRSA, staph, strep, and fungal infections." },
  { question: "Can your team respond quickly if a member contracts MRSA or ringworm?", answer: "Yes. We offer same-day emergency disinfection and are available seven days a week for outbreak response." },
  { question: "Do you clean boutique studios as well as large gyms?", answer: "Yes. Large fitness centers, small yoga studios, CrossFit boxes, and spin studios all get the same level of professional care, scaled to the size of the space." },
  { question: "What makes professional gym cleaning different from staff cleaning it themselves?", answer: "Professional cleaning uses commercial-grade products, follows certified contact-time protocols, and targets high-risk areas like equipment grips and locker rooms in a set order. Most in-house staff aren't trained disinfection specialists, so coverage tends to be less consistent." },
  { question: "How does gym cleaning help with equipment longevity?", answer: "Sweat, salt, dirt, and bacteria corrode metal and plastic components over time. Regular professional disinfection extends equipment lifespan by 20 to 30%, which adds up to real savings for a facility with $50,000 to $100,000 invested in machines." },
  { question: "Is your staff bonded and insured?", answer: "Yes. Our team is bonded and insured, with training aligned to Health Canada and WorkSafeBC standards." },
  { question: "What's included in a weekly deep clean?", answer: "Carpet extraction, locker room and shower sanitization, mat and yoga studio disinfection, group fitness room deep cleaning, and odor control. Post-complaint disinfection is added if a member has reported a concern." },
  { question: "Do you offer a first-time discount?", answer: "Yes. New clients get 10% off their first service with code MINT26." },
  { question: "How do I know the cleaning is working?", answer: "You'll get a detailed report after each service showing what was cleaned and when. Clients who want extra confirmation can request ATP testing to measure bacteria levels before and after service." },
  { question: "How much does gym cleaning cost in Greater Vancouver?", answer: "Cost depends on square footage, equipment volume, and how many visits per week the facility needs. Head to our rates page for a free, itemized estimate with no hidden fees." },
  { question: "Do you serve gyms outside the immediate Vancouver core?", answer: "Yes. Mint Sanitary provides gym cleaning to fitness facilities throughout Greater Vancouver. Check our rates page or call to confirm coverage for a specific location." },
];

console.log("→ /services/gym-cleaning");

const heroImage = await uploadImage(
  "/gym-cleaning-equipment-north-vancouver.jpg",
  "Gym cleaning in Greater Vancouver"
);

const dailyDeepCards = [
  ...dailyServices.map((s) => {
    const { title, body } = splitTitleBody(s);
    return { _key: key("card"), title, body, items: [] };
  }),
  ...deepServices.map((s) => {
    const { title, body } = splitTitleBody(s);
    return { _key: key("card"), title: `Deep Clean — ${title}`, body, items: [] };
  }),
];

const preventionBody = [
  para(
    "Sweat, shared equipment, and warm, damp air make gyms a natural breeding ground for bacteria and fungus. A trained cleaning team targets the conditions that let these problems spread."
  ),
];
for (const item of preventionItems) {
  preventionBody.push(heading(item.title), para(item.body));
}

const businessBenefitsBody = [];
for (const item of businessBenefits) {
  businessBenefitsBody.push(heading(item.title), para(item.body));
}

const packagesBody = [
  para(
    "Every gym runs differently, so packages are built around how the facility operates, not a one size fits all schedule."
  ),
];
for (const item of packages) {
  packagesBody.push(heading(item.title), para(item.body));
}
packagesBody.push(
  paraWithLink(
    "Pricing depends on square footage, equipment count, and how often the facility needs service. Visit our ",
    "rates page",
    "/rates",
    " for a free, itemized estimate."
  )
);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Free weights carry 362 times more germs than a toilet seat. Treadmills hold 74 times more bacteria than a public restroom faucet. Given numbers like that, it makes sense that 81% of gym members say cleanliness is the deciding factor when they choose a facility, according to ",
        "this fitness facility hygiene guide",
        "https://zogics.com/product-guide-library/how-clean-is-clean-enough-hygiene-standards-every-gym-should-know/",
        ". A cleaning routine built around real infection control, not just wiping down mirrors, protects members and protects the business."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What Professional Gym Cleaning Prevents",
    body: preventionBody,
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Daily and Deep Gym Cleaning Services",
    intro:
      "A clean gym isn't a once a week job. It's built through daily attention to the surfaces members touch most, backed by weekly or monthly deep cleaning that catches what a daily pass can't.",
    cards: dailyDeepCards,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "How Gym Cleaning Benefits Your Business",
    body: businessBenefitsBody,
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our 5-Step Gym Cleaning Process",
    steps: processSteps.map(({ title, body }) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "A step in this process follows practices outlined in ",
        "this industry guide to disinfecting fitness facilities",
        "https://blog.nasm.org/how-to-clean-your-gym",
        ", and disinfection protocols reference "
      ),
      paraWithLink(
        "",
        "the CDC's guidance for athletic facilities",
        "https://www.cdc.gov/mrsa/prevention/coaches-athletic-directors.html",
        "."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Gyms Across Greater Vancouver Choose Mint Sanitary",
    image: heroImage,
    items: whyChoose.map(({ title, body }) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Certified staff training aligned with ",
        "Health Canada's cleaning and disinfecting guidance",
        "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks/cleaning-disinfecting.html",
        "."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Gym Cleaning Packages",
    body: packagesBody,
  },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(({ question, answer }) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Ready to See What a Properly Cleaned Gym Looks Like?",
    body: "Request a free, itemized estimate built around your facility's schedule. New clients get 10% off their first service with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "gym-cleaning", {
  title: "Gym Cleaning Services in Greater Vancouver",
  name: "Gym Cleaning",
  // Verbatim from the existing stub (00-globals-and-stubs.mjs) — reused
  // rather than rewritten.
  tileDescription:
    "Equipment sanitization, locker room cleaning, and floor care for fitness facilities that deal with heavy daily use and high hygiene expectations.",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Gym Cleaning Services in Greater Vancouver",
  heroIntro:
    "A gym is only as good as it is clean. Members size up a facility within seconds of walking through the door, and what they smell and see on the equipment shapes whether they sign up or walk back out. Mint Sanitary provides gym cleaning for fitness centers, yoga studios, CrossFit boxes, and spin studios across Greater Vancouver, handling the daily disinfection and deep cleaning work so owners and staff can focus on running the business.",
  heroImage,
  metaTitle: "Gym Cleaning Services in Greater Vancouver | Mint Sanitary",
  metaDescription:
    "Professional gym cleaning across Greater Vancouver. Daily disinfection, deep cleaning, and odor control for fitness facilities. Get a free estimate today.",
  sections,
  published: true,
});

console.log("\n✓ Gym cleaning migrated");
