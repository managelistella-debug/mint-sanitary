import { key, uploadImage, replaceDoc, refTo, heading, para, paraWithLink, imageBlock } from "./lib.mjs";

/**
 * /north-vancouver/school-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/school-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - whatsIncluded is used once for the five-card "What Our Cleaning
 *    Includes" grid. The page has a SECOND six-card grid ("School Cleaning
 *    Services We Provide"), which becomes Rich Text (heading/paragraph pairs
 *    plus the trailing prose paragraph) since the section type isn't
 *    repeatable.
 *  - The eight research-stat bullets under "Why North Vancouver Schools Need
 *    Professional Cleaning" have no card/list section of their own, so they
 *    became a Rich Text paragraph sequence, intro and closing sentence
 *    included.
 *  - "Real Results: A North Vancouver School's Experience" is a short client
 *    anecdote with no other home, so it's a small Rich Text block.
 *  - The three "Related Services" cards link to other /north-vancouver/...
 *    pages, not the general /services/... pages, so they become linked
 *    Rich Text paragraphs rather than serviceTiles.
 */

const researchStats = [
  "Schools with increased professional cleaning see a 14% reduction in student absences.",
  "About 75% of school absences stem from illness, not discipline or family issues.",
  "Influenza A virus can live on up to 50% of student desks in a given week.",
  "Daily disinfection cuts absenteeism by 32%.",
  "40% of teenagers avoid using dirty school bathrooms.",
  "About 6% of school custodians suffer annual injuries related to chemical exposures.",
  "Children breathe 50% more air relative to body weight than adults, which raises their exposure to airborne particles and chemical residue.",
  "Microfiber cleaning technology reduces bacteria by 99%, compared to 30% with traditional cotton mops.",
];

const includedItems = [
  ["Daily Maintenance", "Sweeping, mopping, dusting, and trash removal in classrooms, hallways, and common areas."],
  ["Deep Disinfection", "High-touch surfaces like doorknobs, railings, light switches, and desks get targeted disinfection."],
  ["Health Compliance", "Cleaning practices align with BC health standards and local North Vancouver school district requirements."],
  ["Flexible Scheduling", "After-school cleaning, early morning prep, evening deep cleaning, or weekend service, built around your North Vancouver school's calendar."],
  ["Child-Safe Methods", "Non-toxic, eco-friendly products, since schools serve a more chemically sensitive population than a typical office."],
];

const services = [
  ["Classroom & Learning Space Cleaning in North Vancouver", "Desks, chairs, and tables get sanitized daily. Whiteboards, glass surfaces, and bulletin boards are wiped down, carpets and floors are cleaned with child-safe products, and high-touch surfaces receive extra attention. Cleaning is scheduled after school hours or in the early morning, so North Vancouver classrooms are ready before the first bell."],
  ["School Bathroom & Restroom Sanitization", "Bathrooms get daily disinfection, restocking of supplies, and floor sanitization. Grout and tile receive deep cleaning on a regular basis, using hospital-grade disinfectants that are still safe for children to be around shortly after application."],
  ["Gymnasium & Recreation Area Cleaning in North Vancouver Schools", "Gym floors need daily care to protect the surface, whether it's a wood court or a synthetic one, since each requires a different cleaning approach. Equipment gets sanitized, bleachers are cleaned, and locker rooms are sanitized on a regular schedule. Post-event deep cleaning is available after assemblies, sports days, and tournaments at North Vancouver schools."],
  ["Cafeteria & Food Service Areas", "Cafeterias and kitchens are cleaned with food-safe disinfectants that meet health inspection standards. This includes equipment sanitization, grease trap and drain maintenance, and floor degreasing to prevent slip hazards."],
  ["Hallway, Stairwell & Common Area Cleaning in North Vancouver", "Hallways and stairwells get regular sweeping and mopping, along with disinfection of railings, light switches, door handles, water fountains, and locker areas. These are some of the highest-traffic surfaces in any North Vancouver school building."],
  ["Administrative Offices & Staff Areas", "Front offices, staff rooms, and staff bathrooms get the same level of attention as classrooms, with desk sanitization, break room cleaning, and periodic carpet shampooing."],
];

const processSteps = [
  ["Assessment & Planning", "A walkthrough of your North Vancouver school or facility to build a customized cleaning plan based on building size, student population, and daily schedule."],
  ["Daily Maintenance", "After-school cleaning as the standard option, with early morning prep, evening deep cleaning, or weekend service available."],
  ["Weekly Deep Cleaning", "Carpet shampooing and extraction, tile and grout cleaning, window washing, and high-shelf dusting."],
  ["Monthly Specialized Services", "HVAC vent cleaning, carpet deep treatment, floor stripping and waxing, and exterior power washing."],
  ["Compliance Documentation", "Records of all cleaning activities are kept and made available for health audits or district reviews."],
];

const whyChooseItems = [
  ["BC Health Compliance", "Our cleaning practices follow BC Centre for Disease Control guidelines, with regular staff training and documentation that's ready for an audit at any time."],
  ["Eco-Friendly, Child-Safe Products", "No harsh chemicals, no toxic residue left behind on surfaces children touch all day. Our products are consistent with the EPA Safer Choice Program's standards for reduced-hazard cleaning chemistry."],
  ["Reliable, Consistent Staff", "We assign dedicated teams to your North Vancouver school where possible. Every team member is bonded, insured, background-checked, and trained on child safety protocols."],
  ["7-Day Availability", "Cleaning is available nights, weekends, and holidays, including post-event cleaning and full summer deep cleans."],
  ["Transparent Pricing", "No surprise charges. Use code MINT26 for 10% off your first clean."],
  ["Free Estimates", "Every quote starts with a no-cost walkthrough or consultation with a North Vancouver school cleaning specialist."],
];

const relatedServices = [
  ["Commercial Cleaning", "/north-vancouver/commercial-cleaning"],
  ["Office Cleaning", "/north-vancouver/office-cleaning"],
  ["Gym Cleaning", "/north-vancouver/gym-cleaning"],
];

const faqItems = [
  ["What does school cleaning in North Vancouver include?", "School cleaning in North Vancouver from Mint Sanitary covers daily maintenance, deep disinfection of high-touch surfaces, bathroom sanitization, gymnasium and cafeteria cleaning, and health compliance documentation, all built around your North Vancouver school's schedule."],
  ["Do you clean daycares in North Vancouver?", "Yes. We provide daycare cleaning in North Vancouver, with schedules built around nap times and toy and surface sanitization suited to younger children."],
  ["Can you handle before and after school care cleaning in North Vancouver?", "Yes. Before and after school care programs in North Vancouver often share rooms with regular classrooms, and we schedule cleaning around both uses so the space is ready for each group."],
  ["Do you provide custodial services for schools in North Vancouver?", "Yes. We offer full custodial services for North Vancouver schools that need daily building maintenance, as well as scheduled deep cleaning for schools that already have in-house custodial staff."],
  ["What cleaning products do you use in North Vancouver schools?", "We use eco-friendly, non-toxic, biodegradable products in North Vancouver schools, along with hospital-grade disinfectants for bathrooms and high-touch surfaces where extra sanitization is needed."],
  ["How much does school cleaning cost in North Vancouver?", "Pricing for school cleaning in North Vancouver depends on building size, scope of service, and cleaning frequency, so we don't publish flat rates. Visit our rates page or request a free estimate specific to your North Vancouver school."],
  ["Do you follow BC health compliance standards for schools in North Vancouver?", "Yes. Our school cleaning practices in North Vancouver follow BC Centre for Disease Control guidance and Fraser Health resources, with staff training and documentation ready for a compliance audit."],
  ["Can cleaning be scheduled around class hours at North Vancouver schools?", "Yes. After-school cleaning is our standard option for North Vancouver schools, with early morning prep, evening deep cleaning, and weekend service also available."],
  ["Do you offer weekend cleaning for North Vancouver schools?", "Yes. We're available seven days a week, including evenings, weekends, and holidays, for schools throughout North Vancouver."],
  ["Are your North Vancouver school cleaning staff background checked?", "Yes. All Mint Sanitary staff working in North Vancouver schools are bonded, insured, background-checked, and trained on child safety protocols."],
  ["Do you provide summer deep cleaning for North Vancouver schools?", "Yes. Monthly specialized services like floor stripping and waxing, HVAC vent cleaning, and exterior power washing are commonly scheduled during summer break for North Vancouver schools."],
  ["Which North Vancouver neighbourhoods do you serve?", "We provide school cleaning across North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Upper Lonsdale, Forest Hills, and Brockton Point."],
  ["Do you clean school gymnasiums in North Vancouver?", "Yes. We provide daily floor care for both wood and synthetic courts, equipment sanitization, bleacher cleaning, and locker room sanitization for North Vancouver school gymnasiums."],
  ["How do you handle school bathroom cleaning in North Vancouver?", "North Vancouver school bathrooms get daily disinfection, supply restocking, and floor sanitization, with hospital-grade disinfectants that remain safe for children shortly after application."],
  ["Can I get a free estimate for school cleaning in North Vancouver?", "Yes. Request a free estimate for school cleaning in North Vancouver through our rates page or by contacting us directly, and we'll schedule a walkthrough of your facility."],
  ["Is the MINT26 discount available for North Vancouver schools?", "Yes. North Vancouver schools and daycares can use code MINT26 for 10% off their first clean with Mint Sanitary."],
];

console.log("→ /north-vancouver/school-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why North Vancouver Schools Need Professional Cleaning",
    body: [
      para(
        "Children in a school building move through the same spaces all day, share supplies, and touch far more surfaces than adults typically do. That matters just as much in North Vancouver as anywhere else."
      ),
      ...researchStats.map((stat) => para(stat)),
      para(
        "For reference, the BC Centre for Disease Control publishes K-12 prevention guidance, and Fraser Health has its own resource, “Keeping Your Classroom Clean,” both of which shape how we structure cleaning plans for schools in North Vancouver."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What Our North Vancouver School Cleaning Includes",
    intro: "Every school cleaning plan we run in North Vancouver is built around five standards.",
    cards: includedItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "School Cleaning Services We Provide in North Vancouver",
    body: [
      ...services.flatMap(([title, body]) => [heading(title), para(body)]),
      para(
        "Not every North Vancouver school or care facility runs on the same schedule. Some need full custodial services covering daily maintenance and general building upkeep. Others operate a daycare cleaning program built around nap schedules and toy and surface sanitization for younger children. Before and after school care programs in North Vancouver have their own timing needs too, since a single room can get used twice a day by two different groups of kids. Mint Sanitary works with North Vancouver schools, daycares, and before and after school care programs to set a schedule and scope of service around how the space is used, rather than applying one generic plan across every facility."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our School Cleaning Process in North Vancouver",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Schools Choose Mint Sanitary",
    image: await uploadImage(
      "/eco-friendly-cleaning-products-north-vancouver.jpg",
      "Eco-friendly, child-safe cleaning products used in North Vancouver schools"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Real Results: A North Vancouver School's Experience",
    body: [
      para(
        "One client from Seymour Heights shared that after switching to our eco-friendly approach, their school nurse reported fewer visits for asthma attacks and respiratory complaints. That's what happens when chemical irritants are removed from the spaces where children spend their school day breathing."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "School Cleaning Across North Vancouver Neighbourhoods",
    body: [
      para(
        "Mint Sanitary provides school cleaning throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Upper Lonsdale, Forest Hills, and Brockton Point. We also serve schools and daycares in West Vancouver, Vancouver, and Burnaby. Wherever your school or care facility sits within North Vancouver, our teams build a schedule around its specific hours and layout rather than a one-size-fits-all plan."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Services in North Vancouver",
    body: relatedServices.flatMap(([title, href]) => [
      heading(title),
      paraWithLink("", "Learn more", href, ""),
    ]),
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
    heading: "Ready for a Cleaner, Healthier North Vancouver School?",
    body: "A clean school affects attendance, health, and how staff and students feel about the building they spend their day in. Request a free estimate and use code MINT26 for 10% off your first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "school-cleaning", {
  title: "Professional School Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "school-cleaning"),
  heroHeading: "Professional School Cleaning in North Vancouver",
  heroIntro:
    "When you walk into a clean school, you notice it immediately. Fresh air. Bright hallways. Sanitized classrooms. That's not luck. It's the result of professional school cleaning in North Vancouver. Mint Sanitary is based in North Vancouver, and school cleaning here means working around a specific set of realities: rain for much of the school year, a mix of older and newer school buildings, and daycare and before and after school care programs sharing space with elementary classrooms across the district.",
  heroImage: await uploadImage(
    "/school-cleaning-classroom-north-vancouver.jpg",
    "School cleaning classroom in North Vancouver"
  ),
  metaTitle: "School Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "School cleaning in North Vancouver for K-12 schools and daycares. Custodial services, BC health compliance, and eco-friendly products. Free estimates.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver school cleaning migrated");
