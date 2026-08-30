import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "strata-cleaning";

const whatsIncludedCards = [
  {
    title: "Lobbies and Main Entrances",
    body: "The lobby is the first impression for residents, guests, and prospective buyers. Daily cleaning keeps floors, glass doors, baseboards, and seating areas free of dirt and debris.",
  },
  {
    title: "Hallways and Corridors",
    body: "High-traffic hallways collect dust, footprints, and debris throughout the day. Regular cleaning keeps floors and walls looking cared for between resident move-ins and move-outs.",
  },
  {
    title: "Elevators and Elevator Lobbies",
    body: "Elevators are among the highest-touch surfaces in any strata building. Buttons, handrails, and mirrors need frequent attention to stay free of fingerprints and smudges.",
  },
  {
    title: "Stairwells and Emergency Exits",
    body: "Stairwells matter for daily use and for safety. Clean, clear stairwells and emergency exits support both cleanliness standards and building safety requirements.",
  },
  {
    title: "Parkades and Underground Garages",
    body: "Parkades take a beating from dirt, salt residue, and automotive fluids, especially through the wetter winter months. Routine cleaning helps extend the life of the concrete and keeps the space presentable for residents.",
  },
  {
    title: "Amenity Rooms",
    body: "Fitness centers, lounges, meeting rooms, and pool areas all need consistent attention to stay usable and sanitary for residents.",
  },
  {
    title: "Recycling and Garbage Areas",
    body: "Waste and recycling rooms can quickly turn into a source of odors and pests without regular cleaning and disinfecting. Consistent service prevents contamination and keeps these areas under control.",
  },
  {
    title: "Restrooms and Common Washrooms",
    body: "Common washrooms require toilet cleaning, sink sanitizing, and consistent restocking of supplies so they stay ready for residents and guests.",
  },
  {
    title: "Exterior Common Spaces",
    body: "Balconies, patios, and courtyards benefit from pressure washing and seasonal leaf cleanup to stay presentable throughout the year.",
  },
  {
    title: "Windows and Glass Surfaces",
    body: "Interior and exterior glass, lobby doors, and mailroom windows all need regular attention to keep a building looking sharp from the street and from inside.",
  },
].map((c) => ({ _key: key("card"), items: [], ...c }));

const faqItems = [
  ["How much does strata cleaning cost in Vancouver?", "Pricing depends on building size and service frequency. Small buildings (30 to 50 units) typically run $600 to $1,200 per month for twice-weekly service, or $1,500 to $2,500 per month for daily service. Medium and larger Vancouver buildings run higher, based on amenities and parkade size."],
  ["What common areas do you clean in Vancouver strata buildings?", "We clean lobbies, hallways, elevators, stairwells, parkades, amenity rooms, recycling and garbage areas, restrooms, exterior common spaces, and windows and glass surfaces."],
  ["Is Mint Sanitary based in Vancouver?", "Our crews and trucks are based in North Vancouver, across the Burrard Inlet. We serve strata buildings across Vancouver regularly, but because our team travels over the Lions Gate or Ironworkers Memorial Bridge, we recommend booking ahead rather than expecting same-day service."],
  ["Do you clean strata buildings in Downtown Vancouver, Yaletown, and the West End?", "Yes. These neighbourhoods have some of the densest concentrations of high-rise strata towers we serve, along with Fairview. We also serve lower-rise strata complexes in neighbourhoods like Kitsilano, Mount Pleasant, and Dunbar."],
  ["Do you offer daily cleaning for Vancouver condo buildings?", "Yes. We offer daily, twice-weekly, and bi-weekly service, depending on building size, occupancy, and traffic. Larger high-rise towers with heavier foot traffic often benefit from daily service on lobbies and elevators."],
  ["How do you handle concierge sign-in and visitor parking limits for high-rise buildings?", "Many Downtown, Yaletown, and West End towers require checking in with concierge, signing a visitor log, or booking a service elevator window. We coordinate with your building manager ahead of the first visit so those access rules don't cost cleaning time."],
  ["Are you insured for strata cleaning in Vancouver?", "Yes. Mint Sanitary carries $2 million in liability insurance for all strata cleaning work, is registered with WorkSafeBC, and every staff member is background-checked."],
  ["Do you offer free estimates for strata cleaning in Vancouver?", "Yes. We walk the property and provide a written estimate before any commitment, at no cost."],
  ["What is the first clean discount for Vancouver strata properties?", "New Vancouver strata clients get 10% off their first clean with code MINT26."],
  ["Do you clean parkades in Vancouver strata buildings?", "Yes. Parkade cleaning is part of our standard service, covering dirt, salt residue, and automotive fluid buildup common through the wetter winter months. Larger towers with multi-level underground parking are cleaned on a schedule that matches their traffic volume."],
  ["How do you handle high-touch surfaces in Vancouver elevators?", "We give extra attention to buttons, handrails, and mirrors on every visit, since these are among the highest-touch surfaces in any building. High-rise towers with heavier elevator use often need this attention more than once a visit."],
  ["Do you provide cleaning logs for Vancouver strata councils?", "Yes. Property managers and strata councils receive cleaning logs and reports after each visit as part of our standard service."],
  ["What products do you use for strata cleaning in Vancouver?", "We use eco-friendly, non-toxic, and biodegradable products throughout common areas, which is safer for residents with allergies or sensitivities, particularly in shared-air towers."],
  ["Do you serve smaller strata complexes outside the downtown core, like in Kerrisdale or Dunbar?", "Yes. We serve strata buildings of all sizes across Vancouver, from small 30 to 50 unit low-rise complexes in neighbourhoods like Kerrisdale and Dunbar to large towers with 150 or more units Downtown."],
  ["Do you clean garbage and recycling rooms in Vancouver strata buildings?", "Yes. Waste and recycling rooms are part of our standard scope, cleaned and disinfected regularly to prevent odors, contamination, and pest issues, which is especially important in buildings where chute rooms sit close to resident traffic."],
  ["Do you offer same-day response for urgent cleaning needs in Vancouver?", "We prioritize urgent requests like a lobby spill or a parkade mess whenever we can, but because our crews travel from North Vancouver, same-day availability in Vancouver isn't guaranteed the way it is closer to home base. Calling ahead gets the fastest response."],
  ["Is strata cleaning legally required in Vancouver?", "The BC Strata Property Act, Section 72, requires strata corporations in Vancouver and across the province to maintain common property, and residents can file complaints if cleaning standards aren't met. The Province of BC and CHOA both publish resources covering these maintenance obligations."],
  ["How do I switch cleaning companies for my Vancouver strata building?", "We start with a free consultation and site walkthrough for your building, review your current pain points with the strata council, and build a plan and schedule around them before taking over service."],
  ["Can you work around resident schedules and building activity in Vancouver?", "Yes. Every building we service gets a cleaning schedule built around resident schedules and building activity, whether that means early-morning lobby service in a busy Downtown tower or a quieter weekday window in a smaller complex."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Strata Cleaning in Vancouver",
      intro: "Common areas we clean in Vancouver strata buildings:",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Downtown, Yaletown, and West End towers run hundreds of units through a single lobby and a handful of elevators every day. That kind of traffic shows up fast: scuffed lobby floors by mid-week, elevator buttons and handrails that need wiping more than once a shift, and glass entry doors that pick up fingerprints and smudges within hours of the last clean."),
        para("Parkades in these dense buildings are another early warning sign. Vancouver's wet season tracks salt, grit, and oil residue into underground garages, and in a 150-plus unit tower with two or three levels of parking, that buildup accumulates faster than a smaller property's parkade would."),
        para("Garbage and recycling rooms are a common trigger point too, especially in Fairview and Yaletown buildings where chute rooms and bin storage sit close to resident traffic. Once odor complaints start reaching the strata council, that's usually a sign the room needs a firmer cleaning and disinfecting schedule, not just a bigger bin."),
        para("The BC Strata Property Act, Section 72, requires strata corporations to maintain common property, and residents can file complaints with the council if standards slip. In a building with hundreds of units and a correspondingly larger resident base, that pressure on property managers to keep a consistent program in place is higher than it is in a smaller complex. The Province of BC's guidance on repairs and maintenance and resources from the Condominium Home Owners Association (CHOA) both cover this obligation in more detail."),
        para("A less obvious sign: inconsistent contractor turnover. Strata councils that have cycled through two or three cleaning companies in a year, often because a smaller contractor couldn't keep pace with a high-rise's traffic volume, are a common source of new inquiries in Vancouver's denser buildings."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Strata Cleaning Prices",
      intro: "Pricing for Vancouver strata buildings depends on building size, unit count, amenity mix, and how often the building needs service. Here is what strata cleaning typically costs.",
      tiers: [
        {
          _key: key("tier"),
          title: "Small Buildings (30 to 50 units)",
          range: "",
          body: "Twice-weekly: $600 to $1,200/mo. Daily: $1,500 to $2,500/mo.",
        },
        {
          _key: key("tier"),
          title: "Medium Buildings (50 to 150 units)",
          range: "",
          body: "Twice-weekly: $1,200 to $2,000/mo. Daily: $2,500 to $4,500/mo.",
        },
        {
          _key: key("tier"),
          title: "Larger Buildings (150+ units)",
          range: "",
          body: "Twice-weekly: $2,000 to $5,000+/mo. Daily: $5,000 to $10,000+/mo.",
        },
      ],
      notes: [
        "Pricing depends on square footage, number of units, amenity mix, service frequency, specific cleaning requirements, and parkade size and condition. Rates are the same across our whole service area, so a Downtown Vancouver tower pays the same rate structure as a comparable building in North Vancouver.",
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink(
          "For an accurate quote, request a free estimate and site walkthrough, or see our ",
          "rates page",
          "/rates",
          "."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Strata Cleaning Process Works",
      checklistItems: [],
      steps: [
        { _key: key("step"), title: "Initial Consultation and Site Assessment", body: "We walk the property and look at building size, occupancy, and traffic patterns before recommending a plan." },
        { _key: key("step"), title: "Customized Cleaning Plan", body: "Every building gets a schedule built around its layout and around resident schedules, not a generic template." },
        { _key: key("step"), title: "Eco-Friendly Product Selection", body: "We use non-toxic, environmentally responsible products throughout common areas." },
        { _key: key("step"), title: "High-Touch Surface Focus", body: "Elevator buttons, handrails, door handles, and light switches get extra attention on every visit." },
        { _key: key("step"), title: "Flexible Scheduling", body: "Service is available seven days a week, including weekends and holidays, to fit around building activity." },
        { _key: key("step"), title: "Documentation and Reporting", body: "Property managers receive cleaning logs and reports so the strata council has a clear record of service." },
        { _key: key("step"), title: "Quality Assurance", body: "We inspect completed work and fix any issues right away, rather than waiting for the next scheduled visit." },
      ],
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Property Managers and Strata Councils Choose Mint Sanitary",
      items: [
        { _key: key("why"), title: "Book Ahead for the Fastest Slot", body: "We're available 7 days a week, including evenings and weekends, but our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge. Booking ahead gets your building the fastest available slot instead of counting on a same-day opening." },
        { _key: key("why"), title: "Eco-Friendly Products", body: "Our products are non-toxic and biodegradable, which matters for residents with allergies or sensitivities, especially in shared-air towers where ventilation runs building-wide." },
        { _key: key("why"), title: "Bonded, Insured, and Registered", body: "Mint Sanitary carries $2 million in liability insurance, is registered with WorkSafeBC, and every team member is background-checked, which covers the documentation most Vancouver buildings require before granting access." },
        { _key: key("why"), title: "Free Estimates and Consultations", body: "We walk the property and provide a written estimate before any commitment." },
        { _key: key("why"), title: "First Clean Discount", body: "New Vancouver strata clients get 10% off their first clean with code MINT26." },
        { _key: key("why"), title: "Flexible Service Frequency", body: "Daily, twice-weekly, or bi-weekly service, based on what your building needs. High-rise towers with heavier foot traffic often need daily lobby and elevator attention, while smaller low-rise complexes tend to manage well on a twice-weekly schedule." },
        { _key: key("why"), title: "Built for Concierge and Visitor Sign-In", body: "Many Downtown, Yaletown, and West End buildings require checking in with concierge, signing a visitor log, or booking a service elevator window before a crew can start. We plan arrival times around those steps so your building's access rules don't cost you cleaning time." },
        { _key: key("why"), title: "Crews That Plan Routes Around Bridge Traffic", body: "Because we're crossing from North Vancouver, we build travel time into every quote so a scheduled visit in Yaletown or Fairview still starts on time." },
      ],
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
    { _key: key("sec"), _type: "testimonials" },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Why Vancouver's Climate and Market Make This Different",
      body: [
        para("Vancouver has a much higher concentration of high-rise strata buildings than North Vancouver, and that changes what strata cleaning requires. A 40-unit low-rise walk-up and a 300-unit tower in Yaletown both fall under the same section of the BC Strata Property Act, but the volume of foot traffic moving through a Downtown or West End lobby in a single day is on a different scale entirely. Elevators, entry doors, and common washrooms in these buildings see far more use per square foot than a comparable North Shore complex, which means the same twice-weekly schedule that works for a smaller building often isn't enough for a 150-plus unit tower."),
        para("Building access is the other real difference. Many Downtown, Yaletown, West End, and Fairview towers run concierge sign-in, booked service elevator windows, and limited visitor parking for cleaning vehicles and equipment, conditions that a North Vancouver or West Vancouver property with a driveway and a side door rarely creates. That means scheduling a Vancouver strata contract involves coordinating with a building manager's booking system, not just showing up with a cart."),
        para("Vancouver's wet season, roughly October through April, also plays out differently at scale. A single ground-floor lobby serving hundreds of units tracks in far more grit, salt, and moisture over a rainy week than a smaller building's entryway does, and underground parkades in these towers, often two or three levels deep, hold onto salt residue and automotive fluid longer without regular attention."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Commercial Cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
        multiLinkPara(["", ["Office Cleaning in Vancouver", "/vancouver/office-cleaning"]]),
        multiLinkPara(["", ["Post-Construction Cleaning in Vancouver", "/vancouver/post-construction-cleaning"]]),
        multiLinkPara(["", ["Window Cleaning in Vancouver", "/vancouver/window-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Strata Cleaning in Vancouver",
      body: [
        para("We provide strata cleaning across Downtown Vancouver, Yaletown, West End, Fairview, Kitsilano, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, and Dunbar. The building types shift with the neighbourhood: dense high-rise condo towers concentrated in Downtown, Yaletown, the West End, and Fairview, and smaller low-rise strata complexes and townhouse developments spread through Kitsilano, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, and Dunbar. Whether your building is a 300-unit tower or a 30-unit walk-up, we build the cleaning schedule around its layout and resident activity, not a generic template."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Strata Cleaning in Vancouver?",
      body: "Call 236-688-3248 or request a free estimate online. New clients get 10% off their first clean with code MINT26. Because our crews travel from North Vancouver, book ahead of when your building needs service. Visit our rates page for full pricing details.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Strata Cleaning in Vancouver",
    heroHeading: "Strata Cleaning in Vancouver",
    heroIntro: "Vancouver has a much higher concentration of high-rise strata buildings than most of the North Shore, and Downtown, Yaletown, the West End, and Fairview carry the bulk of it. Towers in these neighbourhoods push far more people through a lobby, an elevator bank, and a parkade every day than a low-rise complex ever will, which means common areas need more attention, not less. Mint Sanitary provides strata cleaning for condo buildings, townhouse complexes, and multi-unit properties across Vancouver, rated 5 out of 5 from 50+ Google reviews. Our crews are background-checked, bonded, and insured, and carry WorkSafeBC coverage on every job. We're based across the Burrard Inlet in North Vancouver, so we ask Vancouver strata councils and property managers to book ahead rather than expect same-day availability. New clients get 10% off their first clean with code MINT26.",
    metaTitle: "Strata Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Strata cleaning for Downtown, Yaletown, West End, and Fairview condo towers. Eco-friendly products, WorkSafeBC coverage, 5 out of 5 rating. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
