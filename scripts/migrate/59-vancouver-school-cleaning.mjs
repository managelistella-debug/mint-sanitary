import {
  key,
  refTo,
  para,
  multiLinkPara,
  replaceAreaServiceDoc,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "school-cleaning";

/**
 * Source: vancouver-content/vancouver-pages/school-cleaning.md (verbatim
 * copy, already approved). Placement decisions:
 *  - "What's Included" has two title+body card grids in the source (the
 *    five-standard intro grid, then the six-item "School Cleaning Services
 *    We Provide in Vancouver" grid). Both become whatsIncluded sections
 *    (whatsIncluded is used twice on this page, same as on the
 *    post-construction-cleaning page), keeping each grid intact rather than
 *    flattening it into prose.
 *  - The trailing paragraph after the second grid ("Not every Vancouver
 *    school or care facility runs on the same schedule...") has no card
 *    shape, so it becomes its own richText paragraph, matching how the
 *    reference script handles trailing prose after a checklist.
 *  - "Vancouver School Cleaning Prices" is pure prose with no named tiers or
 *    price figures, so it becomes a richText section rather than a pricing
 *    section with an empty tier list.
 *  - The bullet list inside "Signs Vancouver Properties Need This Service"
 *    has no bullet-list Portable Text helper available, so each bullet
 *    becomes its own paragraph, same as the research-stat bullets in
 *    30-nv-school-cleaning.mjs.
 */

const includedCards = [
  ["Daily Maintenance", "Sweeping, mopping, dusting, and trash removal in classrooms, hallways, and common areas."],
  ["Deep Disinfection", "High-touch surfaces like doorknobs, railings, light switches, and desks get targeted disinfection."],
  ["Health Compliance", "Cleaning practices align with BC health standards and Vancouver School Board requirements."],
  ["Flexible Scheduling", "After-school cleaning, early morning prep, evening deep cleaning, or weekend service, built around your Vancouver school's calendar."],
  ["Child-Safe Methods", "Non-toxic, eco-friendly products, since schools serve a more chemically sensitive population than a typical office."],
].map(([title, body]) => ({ _key: key("card"), title, body, items: [] }));

const servicesCards = [
  ["Classroom & Learning Space Cleaning", "Desks, chairs, and tables get sanitized daily. Whiteboards, glass surfaces, and bulletin boards are wiped down, carpets and floors are cleaned with child-safe products, and high-touch surfaces receive extra attention. Cleaning is scheduled after school hours or in the early morning, so Vancouver classrooms are ready before the first bell."],
  ["School Bathroom & Restroom Sanitization", "Bathrooms get daily disinfection, restocking of supplies, and floor sanitization. Grout and tile receive deep cleaning on a regular basis, using hospital-grade disinfectants that are still safe for children to be around shortly after application."],
  ["Gymnasium & Recreation Area Cleaning", "Gym floors need daily care to protect the surface, whether it's a wood court or a synthetic one, since each requires a different cleaning approach. Equipment gets sanitized, bleachers are cleaned, and locker rooms are sanitized on a regular schedule. Post-event deep cleaning is available after assemblies, sports days, and tournaments at Vancouver schools."],
  ["Cafeteria & Food Service Areas", "Cafeterias and kitchens are cleaned with food-safe disinfectants that meet health inspection standards. This includes equipment sanitization, grease trap and drain maintenance, and floor degreasing to prevent slip hazards."],
  ["Hallway, Stairwell & Common Area Cleaning", "Hallways and stairwells get regular sweeping and mopping, along with disinfection of railings, light switches, door handles, water fountains, and locker areas. These are some of the highest-traffic surfaces in any Vancouver school building."],
  ["Administrative Offices & Staff Areas", "Front offices, staff rooms, and staff bathrooms get the same level of attention as classrooms, with desk sanitization, break room cleaning, and periodic carpet shampooing."],
].map(([title, body]) => ({ _key: key("card"), title, body, items: [] }));

const processSteps = [
  ["Assessment & Planning", "A walkthrough of your Vancouver school or facility to build a customized cleaning plan based on building size, student population, and daily schedule."],
  ["Daily Maintenance", "After-school cleaning as the standard option, with early morning prep, evening deep cleaning, or weekend service available."],
  ["Weekly Deep Cleaning", "Carpet shampooing and extraction, tile and grout cleaning, window washing, and high-shelf dusting."],
  ["Monthly Specialized Services", "HVAC vent cleaning, carpet deep treatment, floor stripping and waxing, and exterior power washing."],
  ["Compliance Documentation", "Records of all cleaning activities are kept and made available for health audits or district reviews."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["BC Health Compliance", "Our cleaning practices follow BC Centre for Disease Control guidelines, with regular staff training and documentation that's ready for an audit at any time."],
  ["Eco-Friendly, Child-Safe Products", "No harsh chemicals, no toxic residue left behind on surfaces children touch all day. Our products are consistent with the EPA Safer Choice Program's standards for reduced-hazard cleaning chemistry."],
  ["Background-Checked Staff on School Grounds", "Every cleaner sent to a Vancouver school or daycare is bonded, insured, and background-checked before they set foot on site, and teams are trained on child safety protocols before their first visit."],
  ["Book Ahead for the Fastest Slot", "Because our crews travel from North Vancouver, Vancouver bookings work best with some notice, particularly for after-hours or weekend appointments. Calling ahead gets you the schedule you want instead of whatever is left over."],
  ["Built Around Condo and Strata Access", "Daycares operating out of mixed-use buildings in Fairview and Mount Pleasant often mean concierge sign-in, an elevator booking window, and limited visitor parking. Our teams plan the visit around those building rules instead of showing up and figuring it out on-site."],
  ["Care for Older, Character Buildings", "Hardwood floors, older plaster walls, and radiator heat show up often in Dunbar, Point Grey, and Kerrisdale schools and converted-home daycares. We match products and methods to the building instead of running one generic process everywhere."],
  ["Transparent Pricing", "No surprise charges. Use code MINT26 for 10% off your first clean."],
  ["Free Estimates", "Every quote starts with a no-cost walkthrough or consultation with a Vancouver school cleaning specialist."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const faqItems = [
  ["What does school cleaning in Vancouver include?", "School cleaning in Vancouver from Mint Sanitary covers daily maintenance, deep disinfection of high-touch surfaces, bathroom sanitization, gymnasium and cafeteria cleaning, and health compliance documentation, all built around your Vancouver school's schedule."],
  ["Do you clean daycares in Vancouver?", "Yes. We provide daycare cleaning in Vancouver, with schedules built around nap times and toy and surface sanitization suited to younger children."],
  ["Can you handle before and after school care cleaning in Vancouver?", "Yes. Before and after school care programs in Vancouver often share rooms with regular classrooms, and we schedule cleaning around both uses so the space is ready for each group."],
  ["Do you provide custodial services for schools in Vancouver?", "Yes. We offer full custodial services for Vancouver schools that need daily building maintenance, as well as scheduled deep cleaning for schools that already have in-house custodial staff."],
  ["What cleaning products do you use in Vancouver schools?", "We use eco-friendly, non-toxic, plant-based products in Vancouver schools, along with hospital-grade disinfectants for bathrooms and high-touch surfaces where extra sanitization is needed. Everything is chosen with a chemically sensitive, younger population in mind."],
  ["How much does school cleaning cost in Vancouver?", "Pricing for school cleaning in Vancouver depends on building size, scope of service, and cleaning frequency, so we don't publish flat rates. Visit our rates page or request a free estimate specific to your Vancouver school."],
  ["Do you follow BC health compliance standards for schools in Vancouver?", "Yes. Our school cleaning practices in Vancouver follow BC Centre for Disease Control guidance, with staff training and documentation ready for a compliance audit at any time."],
  ["Can cleaning be scheduled around class hours at Vancouver schools?", "Yes. After-school cleaning is our standard option for Vancouver schools, with early morning prep, evening deep cleaning, and weekend service also available depending on the building's calendar."],
  ["Do you offer weekend cleaning for Vancouver schools?", "Yes, we're available 7 days a week, including evenings and weekends, for schools throughout Vancouver. Since crews travel from North Vancouver, weekend and evening slots fill up faster in Vancouver, so book a few days ahead where you can."],
  ["Are your Vancouver school cleaning staff background checked?", "Yes. Every Mint Sanitary team member working in a Vancouver school or daycare is bonded, insured, and background-checked, with training on child safety protocols before they're assigned to a site."],
  ["Do you provide summer deep cleaning for Vancouver schools?", "Yes. Monthly specialized services like floor stripping and waxing, HVAC vent cleaning, and exterior power washing are commonly scheduled during summer break for Vancouver schools, when classrooms are empty and the full building is accessible."],
  ["Do you increase cleaning frequency during flu season for Vancouver schools?", "Yes. Many Vancouver schools add extra disinfection passes on high-touch surfaces like doorknobs, railings, and desks through the fall and winter months when absences from illness tend to climb. We can adjust frequency for a set stretch and scale back once flu season passes."],
  ["Which Vancouver neighbourhoods do you serve for school cleaning?", "We provide school cleaning across Vancouver, with regular coverage in Dunbar, Kerrisdale, Point Grey, Mount Pleasant, Fairview, Kitsilano, Yaletown, Downtown Vancouver, West End, and Commercial Drive."],
  ["Do you clean school gymnasiums in Vancouver?", "Yes. We provide daily floor care for both wood and synthetic courts, equipment sanitization, bleacher cleaning, and locker room sanitization for Vancouver school gymnasiums, plus post-event deep cleaning after assemblies or tournaments."],
  ["How do you handle school bathroom cleaning in Vancouver?", "Vancouver school bathrooms get daily disinfection, supply restocking, and floor sanitization, with hospital-grade disinfectants that remain safe for children shortly after application."],
  ["How do you access daycares located in Vancouver condo or strata buildings?", "For daycares operating in mixed-use or strata buildings in neighbourhoods like Fairview and Mount Pleasant, we coordinate with building management ahead of time for concierge sign-in, elevator booking windows, and any visitor parking limits before the crew arrives."],
  ["Does Mint Sanitary have a location in Vancouver?", "No. Mint Sanitary is based in North Vancouver, across the Burrard Inlet, and crews travel over the Lions Gate or Ironworkers Memorial Bridge to reach Vancouver schools. Same-day service isn't guaranteed the way it is closer to home base, so calling ahead helps secure your preferred time."],
  ["Do you sign long-term contracts with Vancouver schools?", "No long-term contract is required. Vancouver schools can book a one-time deep clean, set up a recurring schedule, or arrange full custodial coverage, and adjust frequency as the school's needs change."],
  ["Can I get a free estimate for school cleaning in Vancouver?", "Yes. Request a free estimate for school cleaning in Vancouver through our rates page or by contacting us directly, and we'll schedule a walkthrough of your facility."],
  ["Is the MINT26 discount available for Vancouver schools?", "Yes. Vancouver schools and daycares can use code MINT26 for 10% off their first clean with Mint Sanitary."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in School Cleaning in Vancouver",
      intro: "Every school cleaning plan we run in Vancouver is built around five standards.",
      cards: includedCards,
    },
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "School Cleaning Services We Provide in Vancouver",
      cards: servicesCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        para("Not every Vancouver school or care facility runs on the same schedule. Some need full custodial services covering daily maintenance and general building upkeep. Others operate a daycare cleaning program built around nap schedules and toy and surface sanitization for younger children. Before and after school care programs in Vancouver have their own timing needs too, since a single room can get used twice a day by two different groups of kids. Mint Sanitary works with Vancouver schools, daycares, and before and after school care programs to set a schedule and scope of service around how the space is used, rather than applying one generic plan across every facility."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Vancouver's schools and daycares fall into two building types, and each one wears differently. Dunbar, Point Grey, and Kerrisdale still have detached, house-scale properties that were converted into daycares or small independent schools years ago, sitting alongside older Vancouver School Board elementary buildings with hardwood floors, radiator heat, and grounds big enough for a real playing field. Mount Pleasant and Fairview run denser. Some early learning centres and after-school programs operate out of ground-floor units in low-rise or mixed-use buildings, sharing a lobby, elevator, or entrance with residential tenants next door."),
        para("The signs that it's time to call differ by building type, but a few show up everywhere:"),
        para("Mud and grit tracked down hallways after recess, worse through the wet season from October to April in schools with larger outdoor fields around Dunbar and Point Grey."),
        para("Scuffed, dull floors in older buildings where daily sweeping alone hasn't kept pace with foot traffic."),
        para("Rising absences during flu season, especially in classrooms with shared toy bins or supply stations."),
        para("Sticky gym or cafeteria floors after an assembly, sports day, or tournament."),
        para("Door handles, railings, and water fountain buttons that get missed in a quick daily wipe down."),
        para("A daycare in a mixed-use building where staff notice buildup around a shared entrance or elevator that residential cleaning doesn't reach."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Vancouver School Cleaning Prices",
      body: [
        para("Pricing for school cleaning in Vancouver depends on building size, scope of service, and cleaning frequency, so we don't publish flat rates the way we do for standard home cleaning. A single classroom wing on a weekly schedule costs differently than a full elementary school with daily custodial coverage. Visit our rates page or request a free estimate specific to your Vancouver school, and a walkthrough will settle the actual number before anything is booked."),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver School Cleaning Process Works",
      checklistItems: [],
      steps: processSteps,
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Homeowners/Businesses Choose Mint Sanitary",
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
        para("Vancouver's school buildings sit at two extremes with not much in between. A Dunbar or Point Grey elementary school built decades ago carries wood floors, older plaster, and a wide field that turns to mud through the wet season, tracking dirt into hallways for months at a stretch. A few kilometres away in Fairview or Mount Pleasant, an early learning centre might run out of a ground-floor unit in a low-rise strata building, with a locked lobby, an elevator booking window, and no outdoor field at all, just a fenced patio for recess. The cleaning problem in the first building is moisture and floor wear across a large footprint. In the second, it's a shared-air building where a handful of classrooms sit boxed into a space the size of a single house, and everything that touches the air in one unit reaches the next. Both fall under school cleaning in Vancouver, but the plan for each is different because the building is different, not because the city name changed."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Office Cleaning in Vancouver", "/vancouver/office-cleaning"]]),
        multiLinkPara(["", ["Commercial Cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
        multiLinkPara(["", ["Gym Cleaning in Vancouver", "/vancouver/gym-cleaning"]]),
        multiLinkPara(["", ["Carpet Cleaning in Vancouver", "/vancouver/carpet-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for School Cleaning in Vancouver",
      body: [
        para("Mint Sanitary provides school and daycare cleaning throughout Vancouver, with regular work in Dunbar, Kerrisdale, Point Grey, Mount Pleasant, and Fairview, where schools and childcare centres range from converted character homes to ground-floor units in mixed-use buildings. We also cover Kitsilano, Yaletown, Downtown Vancouver, West End, and Commercial Drive. Wherever your school or care facility sits in the city, our teams build the schedule and access plan around that specific building rather than a one-size-fits-all routine."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book School Cleaning in Vancouver?",
      body: "A clean school affects attendance, health, and how staff and students feel about the building they spend their day in. Request a free estimate and use code MINT26 for 10% off your first clean. Call 236-688-3248 or view our rates for a full price breakdown.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "School Cleaning in Vancouver",
    heroHeading: "School Cleaning in Vancouver",
    heroIntro: "Vancouver's schools and daycares run a wide range, from older neighbourhood elementary buildings in Dunbar and Point Grey to ground-floor early learning centres tucked into mixed-use buildings in Fairview and Mount Pleasant. Mint Sanitary is based across the Burrard Inlet in North Vancouver, and crews travel over the Lions Gate or Ironworkers Memorial Bridge to reach schools throughout the city, so same-day service in Vancouver isn't something we guarantee the way we can closer to home base. Call ahead to line up a slot. We're rated 5 out of 5 based on 50+ Google reviews, and new schools and daycares get 10% off their first clean with code MINT26.",
    metaTitle: "School Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Professional school and daycare cleaning in Vancouver from Mint Sanitary. Background-checked staff, child-safe products, flexible scheduling around class hours. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
