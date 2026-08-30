import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "church-cleaning";

const whatsIncludedCards = [
  [
    "Sanctuary and Worship Areas",
    "Vacuuming carpets and rugs, dusting pews, railings, and wooden surfaces, polishing wood finishes, and handling altars and religious symbols with reverence. Communion items are cleaned and sanitized according to your preferences, and lighting fixtures and trim get regular attention.",
  ],
  [
    "Bathrooms",
    "Deep disinfection, tile and grout cleaning, toilet and urinal sanitation, and drain treatment to stop odors before they start. We restock supplies and can handle floor stripping and waxing as needed.",
  ],
  [
    "Fellowship Halls and Common Areas",
    "Floor care suited to the surface, table and chair sanitizing after events, trash and recycling management, and spot cleaning on walls where hands and shoes leave marks.",
  ],
  [
    "Nurseries and Children's Rooms",
    "Non-toxic, eco-friendly sanitizing that's safe for infants and toddlers, crib and changing table disinfection, toy and equipment cleaning, and steps to cut down allergens in the rooms your youngest members use most.",
  ],
  [
    "Kitchens and Food Service Areas",
    "Appliance cleaning inside and out, countertop and backsplash sanitizing, floor and baseboard care, and food prep practices that meet local health standards.",
  ],
  [
    "Administrative Offices and Storage",
    "Dusting and surface cleaning, trash removal and recycling, vacuuming and mopping, and organization or tidying when your staff wants it.",
  ],
  [
    "Specialized Services",
    "Electrostatic spraying for virus protection, deep carpet extraction, pressure washing for exterior areas, post-event cleanup after weddings, funerals, or gatherings, and seasonal deep cleaning for the rainy winters and pollen-heavy springs common to the coast.",
  ],
].map(([title, body]) => ({ _key: key("card"), title, body, items: [] }));

const processSteps = [
  ["Consultation and Walkthrough", "We start with a free consultation at your Vancouver church. Our team assesses square footage, traffic patterns, special areas like the sanctuary and nursery, and your priorities. No obligation, just a clear picture of what your building needs."],
  ["Customized Cleaning Plan", "We build a plan around your schedule, whether that's weekly, biweekly, or monthly, and it fits your budget. Cleanings can be scheduled for early mornings, late evenings, or weekday slots so Sunday services are never disrupted."],
  ["Eco-Friendly Preparation", "We use green, non-toxic products that are safe for children, elderly congregants, and anyone with sensitivities."],
  ["Professional Execution", "Our bonded and insured team arrives with all necessary equipment and works efficiently and respectfully throughout your building."],
  ["Final Inspection", "Before we leave, we walk through the space with you to confirm everything meets your standards. Any concerns get addressed right away."],
  ["Ongoing Communication", "Scheduling changes, special events, or last-minute requests all go through one call, so managing your Vancouver church cleaning stays simple."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["Eco-Friendly Commitment", "Green, non-toxic products mean your congregation breathes cleaner air, and children in the nursery and Sunday school stay safer."],
  ["Background-Checked Professional Staff", "Every team member is bonded, insured, and background-checked, and trained to handle sacred spaces with the respect they deserve. That matters when staff are often working alone in a sanctuary or office during off hours."],
  ["Transparent Pricing", "Free estimates and fixed pricing, with a 10 percent discount on your first clean using code MINT26."],
  ["Scheduling Built Around Services, Not the Other Way Around", "We plan cleaning around your service times and midweek programs rather than asking your congregation to work around us. Because our crews travel from North Vancouver, we ask for advance notice rather than promising same-day turnaround, and we'll tell you plainly if a request is tight."],
  ["Familiar with Vancouver's Older Buildings", "We've cleaned character-home-era buildings in Kitsilano and Dunbar and brick sanctuaries in Mount Pleasant and Commercial Drive, so we know to check with facility staff before using anything on original wood trim, stained glass, or older plaster."],
  ["Comfortable Coordinating Shared Spaces", "A number of Vancouver churches share their building with a second or third congregation, a preschool, or a community group. We work with whoever manages the calendar to keep every user's schedule straight and avoid overlap."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const faqItems = [
  ["How often should a church in Vancouver schedule cleaning?", "Most Vancouver churches do well with weekly or biweekly cleaning. If your building hosts more than one congregation or runs frequent community events, twice-weekly cleaning keeps shared spaces consistently ready between groups."],
  ["Are the eco-friendly products you use in Vancouver churches safe for children?", "Yes. We use eco-friendly, non-toxic, plant-based products that are safe for sensitive skin and respiratory systems. Vancouver churches with nurseries and Sunday schools trust these products around their youngest members."],
  ["Can you clean around our scheduled services in Vancouver?", "Yes. We build cleaning schedules around your Sunday services, midweek programs, and any groups renting your hall. We work early mornings, late evenings, or weekday slots so cleaning never overlaps with a service already underway."],
  ["Do your cleaners work alone in the building, and are they background-checked?", "Yes, cleaning is often done outside service hours when a small crew may be working alone in the building. Every Mint Sanitary team member is background-checked, bonded, and insured before they're ever assigned to a place of worship."],
  ["Does church cleaning in Vancouver cover only the sanctuary, or the whole building?", "It covers whatever your plan includes. Most congregations have us clean the sanctuary, fellowship hall, bathrooms, nursery, kitchen, and offices, since these are the spaces that see the most weekly traffic, but we scope the plan to your specific building."],
  ["How do you handle a church that shares its building with another congregation or tenant?", "We coordinate directly with whoever manages the building calendar, whether that's a single facility manager or two pastors sharing a space. We schedule around every group's service and rental times so cleaning fits between them without conflict."],
  ["Is same-day cleaning available for Vancouver churches?", "We can sometimes accommodate short-notice requests, but because our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge, same-day service in Vancouver isn't guaranteed the way it is closer to home. Call ahead and we'll tell you plainly what's possible for your timeline."],
  ["Can you handle post-event cleanup for weddings and funerals in Vancouver?", "Yes. We handle post-event cleanup for Vancouver congregations after weddings, funerals, and larger gatherings, restoring the sanctuary and hall to a clean, welcoming condition promptly."],
  ["How do you protect religious items and artwork in older Vancouver churches?", "Our staff ask upfront about what's sacred or delicate in your building, then use soft cloths, appropriate products, and careful technique. This matters especially in heritage buildings around Mount Pleasant and Commercial Drive, where original stained glass, wood carvings, and older finishes need gentler handling than a standard office."],
  ["What's your availability for emergency cleaning in Vancouver?", "We work 7 days a week, including evenings and weekends, and can often accommodate urgent requests with advance notice. Call 236-688-3248 and we'll let you know what's realistic given travel time from North Vancouver."],
  ["Do you offer customized plans for different denominational requirements in Vancouver?", "Yes. We work with pastors, facility managers, and congregations of different traditions across Vancouver to build plans that respect the specific practices and priorities of your church."],
  ["Is cleaning safe for a shared church kitchen used by outside community groups?", "Yes. We use eco-friendly, non-toxic products throughout kitchens and food service areas, and we follow food-safe cleaning practices whether the kitchen is used only by your congregation or shared with outside renters and community programs."],
  ["Do you clean churches in Kitsilano and Dunbar as well as Mount Pleasant and Commercial Drive?", "Yes. We serve congregations throughout Vancouver, including Kitsilano, Dunbar, Mount Pleasant, Commercial Drive, Kerrisdale, Point Grey, Fairview, Yaletown, the West End, and Downtown, with the same standard of care at every location."],
  ["How does parking or building access affect scheduling for Vancouver church cleaning?", "Older buildings in neighbourhoods like Mount Pleasant and Commercial Drive often have limited street parking on Sundays, which we factor into when our crew arrives and unloads equipment. We'll ask about your building's access when we set up your first walkthrough."],
  ["Can a small congregation in Vancouver get a plan that fits a limited budget?", "Yes. Our plans scale to your building's size and needs, and small facilities typically fall in the $200 to $400 monthly range, with a free walkthrough to confirm the right fit for your Vancouver church."],
  ["Do you offer a discount for new Vancouver churches?", "Yes. New clients get 10% off your first clean with code MINT26."],
  ["Is Mint Sanitary insured for work in Vancouver churches?", "Yes. We carry WorkSafeBC coverage on every job, and all staff working in Vancouver churches are bonded, insured, and background-checked before being assigned to your building."],
  ["Do you provide floor stripping and waxing for Vancouver church fellowship halls?", "Yes, this is available as part of our specialized services and can be scheduled as a one-time deep clean or built into your regular plan."],
  ["Can you handle pressure washing for church exteriors in Vancouver?", "Yes. Exterior pressure washing is one of our specialized services, useful for entryways and walkways that take a beating during the rainy season, common across Vancouver's coastal climate."],
  ["How do I get a quote for church cleaning in Vancouver?", "Call 236-688-3248 or request a free walkthrough, and we'll assess your Vancouver church and provide a fixed monthly quote with no obligation."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Church Cleaning in Vancouver",
      intro: "We build every plan around your building's layout and how your congregation uses it. Most Vancouver churches need coverage across these areas.",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Vancouver's houses of worship don't fit one mold. Mount Pleasant and Commercial Drive have older brick and wood-frame sanctuaries, some over a century old, with hardwood floors, stained glass, and plaster surfaces that show wear differently than newer construction. Kitsilano and Dunbar have a mix of standalone chapels and converted character buildings, several of which host more than one congregation on a rotating schedule, a Sunday morning service followed by an evening gathering in a different language, then a community group renting the hall midweek."),
        para("That kind of turnover is the clearest sign a congregation needs professional help. When three or four different groups pass through the same fellowship hall in a week, the floors, bathrooms, and kitchen show it fast, and volunteers who show up once a week can't keep pace. Watch for carpet in the sanctuary holding onto ground-in grit from rainy-season foot traffic, a nursery that needs sanitizing more than once a week because it doubles as a weekday daycare space, or a kitchen that gets used for potlucks, community meals, and outside rental groups without a consistent cleaning routine behind it."),
        para("Older heritage buildings in Mount Pleasant and Commercial Drive also come with narrower stairwells, older wiring for equipment access, and delicate finishes like original wood trim or leaded glass that need the right products and technique, not just more elbow grease. Street parking near these buildings is limited on Sundays, which matters for scheduling a crew's arrival and equipment unload."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Church Cleaning Prices",
      intro: "Pricing depends on the size of your building, how often you need service, and what areas need attention. Most Vancouver churches fall into one of these monthly ranges.",
      tiers: [
        { _key: key("tier"), title: "Small Facility", range: "", body: "$200 to $400 monthly rate." },
        { _key: key("tier"), title: "Medium Facility", range: "", body: "$400 to $800 monthly rate." },
        { _key: key("tier"), title: "Large Facility", range: "", body: "$800 to $1,500+ monthly rate." },
      ],
      notes: [
        "Every quote starts with a free walkthrough at your Vancouver church, so the number you get is based on your actual building, not a guess.",
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Church Cleaning Process Works",
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
        para("Vancouver's church buildings carry more shared-use pressure than a typical North Shore congregation. Many sanctuaries and halls in Mount Pleasant, Commercial Drive, Kitsilano, and Dunbar host multiple distinct congregations or community tenants across a single week, each with their own schedule, which means a fellowship hall can see three or four different groups of feet, chairs, and coffee cups before Sunday even arrives. That turnover, not just the wet season, is what drives cleaning frequency up in Vancouver's older worship buildings compared to a single-congregation building with one weekly service. Add in heritage construction, original hardwood, leaded glass, plaster walls with decades of paint layers, and the cleaning approach has to account for surfaces that a newer building simply doesn't have. Street parking limits near these older buildings on Sundays also shape when a crew can realistically load in equipment, which is why scheduling around your specific building and neighbourhood matters more here than a generic weekly slot would."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Commercial Cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
        multiLinkPara(["", ["Office Cleaning in Vancouver", "/vancouver/office-cleaning"]]),
        multiLinkPara(["", ["School Cleaning in Vancouver", "/vancouver/school-cleaning"]]),
        multiLinkPara(["", ["Gym Cleaning in Vancouver", "/vancouver/gym-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Church Cleaning in Vancouver",
      body: [
        para("We clean houses of worship across Mount Pleasant, Commercial Drive, Kitsilano, and Dunbar, where congregations range from long-established heritage sanctuaries to newer spaces renting shared halls. We also serve churches in Kerrisdale, Point Grey, Fairview, Yaletown, the West End, and Downtown Vancouver, adjusting our approach to whether the building is a standalone chapel with its own lot or a shared space inside a larger multi-tenant building. Wherever your congregation gathers, we schedule around your services rather than asking you to work around us."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Church Cleaning in Vancouver?",
      body: "Get your rates today for your Vancouver church. New clients save 10% on their first clean with code MINT26. Call 236-688-3248 or view our rates page to get started.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Church Cleaning in Vancouver",
    heroHeading: "Church Cleaning in Vancouver",
    heroIntro: "Vancouver's congregations range from century-old sanctuaries in Mount Pleasant and Commercial Drive to shared worship spaces in Kitsilano and Dunbar, often serving several different faith communities under one roof on different days of the week. Mint Sanitary brings background-checked, bonded, and insured cleaners, eco-friendly and non-toxic products, and a 5 out of 5 rating from 50+ Google reviews to every sanctuary, hall, and nursery we clean. New clients get 10% off your first clean with code MINT26. Our crews and trucks are based in North Vancouver and cross the Lions Gate Bridge or Ironworkers Memorial Bridge to reach Vancouver churches, so same-day service isn't guaranteed the way it is closer to home. Call ahead and we'll build a schedule around your services.",
    metaTitle: "Church Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Professional church cleaning in Vancouver for congregations in Mount Pleasant, Commercial Drive, Kitsilano, Dunbar, and beyond. 5-star rated, background-checked, eco-friendly. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
