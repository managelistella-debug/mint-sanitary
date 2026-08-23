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
 * /services/school-cleaning — migrated from the hand-coded page now parked
 * at /services/school-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "Why Professional Cleaning Matters in Schools" was an intro paragraph,
 *    a bulleted list of research stats, and a closing paragraph, with no
 *    matching section type, so it became Rich Text (heading + paragraphs,
 *    one per stat, verbatim).
 *  - "School Cleaning Services We Provide" was a second title/body card grid
 *    on the same page as the real "What's Included" grid. Since What's
 *    Included is non-repeatable and already spoken for, this one became
 *    Rich Text (heading + paragraph pairs), the same treatment the strata
 *    pilot used for its "Why It Matters" card grid.
 *  - Why Choose has no image of its own on this page, so it reuses the hero
 *    photo, which is an image already used on the page — nothing invented.
 */

const researchStats = [
  "Schools with increased professional cleaning see a 14% reduction in student absences.",
  "About 75% of school absences stem from illness, not discipline or family issues.",
  "Influenza A virus can live on up to 50% of student desks in a given week.",
  "Daily disinfection cuts absenteeism by 32%.",
  "40% of teenagers avoid using dirty school bathrooms.",
  "About 6% of school custodians suffer annual injuries related to chemical exposures.",
  "Children breathe 50% more air relative to body weight than adults, which raises their exposure to airborne particles and cleaning chemical residue.",
  "Microfiber cleaning technology reduces bacteria by 99%, compared to 30% with traditional cotton mops.",
];

const includedItems = [
  ["Daily Maintenance", "Sweeping, mopping, dusting, and trash removal in classrooms, hallways, and common areas."],
  ["Deep Disinfection", "High-touch surfaces like doorknobs, railings, light switches, and desks get targeted disinfection, not just a wipe-down."],
  ["Health Compliance", "Cleaning practices align with BC health standards and local school district requirements."],
  ["Flexible Scheduling", "After-school cleaning, early morning prep, evening deep cleaning, or weekend service, built around your school's calendar."],
  ["Child-Safe Methods", "Non-toxic, eco-friendly products suited to a population that is more sensitive to chemical residue than adults."],
];

const services = [
  ["Classroom & Learning Space Cleaning", "Desks, chairs, and tables get sanitized daily. Whiteboards, glass surfaces, and bulletin boards are wiped down, carpets and floors are cleaned with child-safe products, and high-touch surfaces receive extra attention. Cleaning is scheduled after school hours or in the early morning so classrooms are ready before the first bell."],
  ["School Bathroom & Restroom Sanitization", "Bathrooms get daily disinfection, restocking of supplies, and floor sanitization. Grout and tile receive deep cleaning on a regular basis, using hospital-grade disinfectants that are still safe for children to be around shortly after application."],
  ["Gymnasium & Recreation Area Cleaning", "Gym floors need daily care to protect the surface, whether it's a wood court or a synthetic one, since each requires a different cleaning approach. Equipment gets sanitized, bleachers are cleaned, and locker rooms are sanitized on a regular schedule. Post-event deep cleaning is available after assemblies, sports days, and tournaments."],
  ["Cafeteria & Food Service Areas", "Cafeterias and kitchens are cleaned with food-safe disinfectants that meet health inspection standards. This includes equipment sanitization, grease trap and drain maintenance, and floor degreasing to prevent slip hazards."],
  ["Hallway, Stairwell & Common Area Cleaning", "Hallways and stairwells get regular sweeping and mopping, along with disinfection of railings, light switches, door handles, water fountains, and locker areas. These are some of the highest-traffic surfaces in any school building."],
  ["Administrative Offices & Staff Areas", "Front offices, staff rooms, and staff bathrooms get the same level of attention as classrooms, with desk sanitization, break room cleaning, and periodic carpet shampooing."],
];

const processSteps = [
  ["Assessment & Planning", "A walkthrough of your school or facility to build a customized cleaning plan based on building size, student population, and daily schedule."],
  ["Daily Maintenance", "After-school cleaning as the standard option, with early morning prep, evening deep cleaning, or weekend service available."],
  ["Weekly Deep Cleaning", "Carpet shampooing and extraction, tile and grout cleaning, window washing, and high-shelf dusting."],
  ["Monthly Specialized Services", "HVAC vent cleaning, carpet deep treatment, floor stripping and waxing, and exterior power washing."],
  ["Compliance Documentation", "Records of all cleaning activities are kept and made available for health audits or district reviews."],
];

const whyChoose = [
  ["BC Health Compliance", "Our cleaning practices follow BC Centre for Disease Control guidelines, with regular staff training and documentation that's ready for an audit at any time."],
  ["Eco-Friendly, Child-Safe Products", "No harsh chemicals, no toxic residue left behind on surfaces children touch all day."],
  ["Reliable, Consistent Staff", "We assign dedicated teams to your school where possible. Every team member is bonded, insured, background-checked, and trained on child safety protocols."],
  ["7-Day Availability", "Cleaning is available nights, weekends, and holidays, including post-event cleaning and full summer deep cleans."],
  ["Transparent Pricing", "No surprise charges. Use code MINT26 for 10% off your first clean."],
  ["Free Estimates", "Every quote starts with a no-cost walkthrough or consultation."],
];

const faqItems = [
  ["What is included in school cleaning services?", "School cleaning services typically cover daily maintenance like sweeping, mopping, and dusting, plus deep disinfection of high-touch surfaces, bathroom sanitization, gymnasium and cafeteria cleaning, and compliance with health standards. Mint Sanitary builds a custom plan for each school based on building size and schedule."],
  ["Do you clean daycares and before and after school care programs?", "Yes. We provide daycare cleaning and before and after school care cleaning, with schedules built around nap times, program hours, and the fact that these spaces often get used by more than one group in a single day."],
  ["How is school cleaning different from regular commercial cleaning?", "Schools have a younger, more chemically sensitive population, higher surface contact rates, and specific health compliance requirements. Products used need to be non-toxic, and cleaning needs to work around class schedules rather than standard business hours."],
  ["What products do you use in schools?", "We use eco-friendly, non-toxic, biodegradable products suited to environments with children present, along with hospital-grade disinfectants for bathrooms and high-touch surfaces where a stronger level of sanitization is needed."],
  ["Can cleaning be scheduled around school hours?", "Yes. After-school cleaning is our standard scheduling option, with early morning prep, evening deep cleaning, and weekend service also available depending on your school's calendar."],
  ["Do you provide custodial services, or just cleaning?", "We offer both. Some schools need daily custodial services covering ongoing building maintenance, while others need scheduled deep cleaning layered on top of an in-house custodial team. We can scope either approach during a free walkthrough."],
  ["Are your staff background checked?", "Yes. All Mint Sanitary staff are bonded, insured, and background-checked, and trained on child safety protocols before working in a school or daycare setting."],
  ["How much does school cleaning cost?", "Pricing depends on the size of your facility, the scope of service, and how often cleaning is needed. We don't publish flat rates because school needs vary too much for that to be accurate. Visit our rates page or request a free estimate for a quote specific to your school."],
  ["Do you offer summer deep cleaning for schools?", "Yes. Monthly specialized services and full deep cleans, including floor stripping and waxing, HVAC vent cleaning, and exterior power washing, are commonly scheduled during summer break when buildings are empty."],
  ["How do I get a quote?", "Request a free estimate through our rates page or contact us directly. A walkthrough helps us build a plan and quote specific to your school or daycare."],
];

console.log("→ /services/school-cleaning");

const heroImage = await uploadImage(
  "/school-cleaning-classroom-north-vancouver.jpg",
  "School cleaning in Greater Vancouver"
);

const whyMattersBody = [
  para(
    "Cleaning in a school building carries a different weight than cleaning an office. Children move through the same spaces all day, share supplies, and touch far more surfaces than adults do. The research backs up what school administrators already sense."
  ),
  ...researchStats.map((stat) => para(stat)),
  para(
    "That last point is part of why our approach matters. The tools and products used in a school affect indoor air quality, allergy symptoms, and how many chemical exposure incidents custodial staff deal with over a year."
  ),
];

const servicesBody = [];
for (const [title, body] of services) {
  servicesBody.push(heading(title), para(body));
}
servicesBody.push(
  para(
    "Not every school or care facility needs the same setup. Some need full custodial services covering daily maintenance and ongoing building upkeep. Others need a dedicated daycare cleaning plan built around nap schedules and toy and surface sanitization for younger children. Before and after school care programs have their own timing needs, since rooms often get used twice in one day by two different groups of kids. Mint Sanitary works with schools, daycares, and before and after school care programs to build a schedule and scope of service that fits how the space gets used, rather than applying one generic cleaning template to every facility."
  )
);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Professional Cleaning Matters in Schools",
    body: whyMattersBody,
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included",
    intro: "Every school cleaning plan from Mint Sanitary is built around five core standards.",
    cards: includedItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "School Cleaning Services We Provide",
    body: servicesBody,
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our School Cleaning Process",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Schools Across Greater Vancouver Choose Mint Sanitary",
    image: heroImage,
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Serving Schools Across Greater Vancouver",
    body: [
      paraWithLink(
        "Mint Sanitary provides school cleaning services throughout North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. If your school is located in North Vancouver, visit our dedicated page on ",
        "school cleaning in North Vancouver",
        "/north-vancouver/school-cleaning",
        " for details specific to that area, including neighbourhood coverage and local health compliance notes."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    tiles: [
      refTo("cleaningType", "commercial-cleaning"),
      refTo("cleaningType", "office-cleaning"),
      refTo("cleaningType", "gym-cleaning"),
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
    heading: "Ready for a Cleaner, Healthier School?",
    body: "A clean school affects attendance, health, and how staff and students feel about the building they spend their day in. Request a free estimate and use code MINT26 for 10% off your first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "school-cleaning", {
  title: "Professional School Cleaning Services for Greater Vancouver Schools",
  name: "School Cleaning",
  tileDescription:
    "Classroom and common area cleaning built around school hours, with sanitization protocols that help reduce the spread of germs among students and staff.",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Professional School Cleaning Services for Greater Vancouver Schools",
  heroIntro:
    "When you walk into a clean school, you notice it immediately. Fresh air. Bright hallways. Sanitized classrooms. That's not luck. It's the result of professional school cleaning. Mint Sanitary provides school cleaning services for elementary schools, secondary schools, private schools, and daycares across Greater Vancouver, supporting before and after school care programs and working around class schedules, extracurricular activities, and school events.",
  heroImage,
  metaTitle: "School Cleaning Services | Greater Vancouver",
  metaDescription:
    "Professional school cleaning services for K-12 schools and daycares across Greater Vancouver. Custodial support, health compliance, and free estimates.",
  sections,
  published: true,
});

console.log("\n✓ School cleaning migrated");
