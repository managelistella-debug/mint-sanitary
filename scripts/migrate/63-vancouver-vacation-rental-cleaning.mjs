import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "vacation-rental-cleaning";

const whatsIncludedCards = [
  {
    title: "Linen and Towel Reset",
    items: [
      "Every bed stripped and remade with fresh linens",
      "Towels replaced, folded, and staged the way your listing photos show them",
      "On-site laundry or linen service coordination available",
    ],
  },
  {
    title: "Bathroom Deep Clean",
    items: [
      "Toilets, showers, tubs, sinks, and mirrors sanitized and left streak-free",
      "Grout scrubbed and drains checked",
      "Toiletries restocked and arranged so the bathroom looks untouched by the last guest",
    ],
  },
  {
    title: "Kitchen Reset",
    items: [
      "Dishes washed and put away",
      "Counters, stovetop, inside the microwave, and the sink sanitized",
      "Fridge wiped down, trash pulled, fresh liners put in",
    ],
  },
  {
    title: "Living Areas and Bedrooms",
    items: [
      "Dusting, vacuuming, and mopping of every room",
      "Cushions fluffed, remotes and electronics wiped down",
      "Furniture returned to its staged position, matching your listing photos",
    ],
  },
  {
    title: "Supply Restocking",
    items: [
      "Host-provided toiletries and paper goods restocked",
      "Coffee, tea, and other guest essentials topped up",
      "Inventory checked on every visit, low items flagged",
    ],
  },
  {
    title: "Photo Documentation",
    items: [
      "Time-stamped photos of every room sent after each clean",
      "Confirm the unit is guest-ready without leaving your house",
      "Photos double as records for Airbnb damage claims",
    ],
  },
  {
    title: "Meeting Airbnb and VRBO Cleanliness Standards in Vancouver",
    body: "Platform reviews live and die on the small stuff. Our checklist targets the details Airbnb and VRBO guests notice, and the details that trigger complaints if they're missed.",
    items: [
      "Mold-free bathrooms: Grout gets scrubbed and problem areas treated before mold has a chance to build up.",
      "Pest-free kitchens: Our kitchen and dining protocol removes food residue and closes off the spots that attract pests.",
      "Dust-free surfaces: Ceiling fans, baseboards, window sills, and vent covers all get attention, not just the surfaces at eye level.",
      "The spots most cleaners skip: Under beds, behind toilets, inside microwaves, light switches, remote controls, and door handles all get checked on every Vancouver turnover.",
    ],
  },
].map((c) => ({ _key: key("card"), ...c }));

const faqItems = [
  ["Can you handle same-day turnover cleaning for a Vancouver rental?", "We can sometimes fit in a same-day Vancouver turnover, but because our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge, availability isn't guaranteed the way it is closer to home. Booking ahead, even a day or two out, gives you the best shot at your preferred time slot."],
  ["What is included in vacation rental turnover cleaning in Vancouver?", "A Vancouver turnover includes a full linen and towel reset, bathroom and kitchen deep clean, dusting and vacuuming of living areas, floor care, trash removal, supply restocking, and photo documentation sent after the clean."],
  ["Do I need to be at the property during a Vancouver turnover clean?", "No. Most Vancouver hosts give us secure entry through a lockbox, smart lock, or a concierge sign-in at the building. We complete the service, lock up, and send photo confirmation once the unit is guest-ready."],
  ["Can you restock guest supplies at my Vancouver vacation rental?", "Yes. We restock host-provided toiletries, paper goods, coffee, tea, and other basic essentials at every Vancouver turnover. We track inventory and flag anything running low."],
  ["Do you offer recurring turnover schedules for Vancouver properties?", "Yes. Our Recurring Turnover Plan syncs with your Airbnb or VRBO calendar and comes with preferred scheduling and competitive rates for hosts who book us regularly across their Vancouver units."],
  ["Is there a discount for hosts with multiple recurring Vancouver bookings?", "Hosts on our Recurring Turnover Plan get preferred scheduling and better rates than one-off bookings, which adds up for anyone managing several units across Downtown or Yaletown on an ongoing calendar."],
  ["How long does a typical vacation rental turnover take in Vancouver?", "A one-bedroom Vancouver unit takes 60 to 90 minutes, and a two-bedroom unit takes 90 to 120 minutes. Larger properties or deep turnovers in areas like Point Grey or Kerrisdale can take longer."],
  ["Do you handle laundry as part of a Vancouver turnover?", "We can coordinate on-site laundry or work with your linen service. Laundry turnaround is factored into scheduling so back-to-back bookings at your Vancouver rental stay on track."],
  ["What happens if a guest leaves my Vancouver rental in bad shape?", "We handle heavy-mess turnovers, including excess trash and stains. If there's damage, we document it with time-stamped photos so you have records for any Airbnb or VRBO claim, along with our $25 damage and toiletries inspection add-on if you want a closer look-over."],
  ["Are your cleaning products eco-friendly for Vancouver vacation rentals?", "Yes, we use eco-friendly, non-toxic, plant-based products that are safe for guests, pets, and the environment. Many Vancouver hosts mention this in their listing descriptions, since guests increasingly search for eco-conscious properties."],
  ["How much does vacation rental turnover cleaning cost in Vancouver?", "Pricing runs from $120 to $400 depending on property size, condition, and the services included, whether that's a Yaletown high-rise unit or a larger Kerrisdale house. Call for a free estimate, or request a quote at /rates. First bookings qualify for 10% off with code MINT26."],
  ["Is there a discount for first-time Vancouver hosts?", "Yes. New customers get 10% off their first clean with code MINT26, whether that's a Downtown condo or a Dunbar rental suite."],
  ["Do you require a contract for Vancouver turnover cleaning?", "No. Turnovers are booked as needed, with no long-term contract required, though our Recurring Turnover Plan is available if you want a standing schedule."],
  ["Are your cleaners background-checked and insured for Vancouver properties?", "Yes. Every cleaner is background-checked, bonded, and insured, and every job carries WorkSafeBC coverage."],
  ["How do you handle condo or strata building access for Vancouver turnovers?", "We work with whatever access your building requires, whether that's a concierge sign-in, a booked service elevator window, or a fob left at the front desk. Our teams learn each building's rules the same way they learn your unit's layout."],
  ["Since your crews travel from North Vancouver, how does that affect scheduling in Vancouver?", "It mostly affects how much notice we need. We plan Vancouver routes around Lions Gate Bridge and Ironworkers Memorial Bridge traffic, so booking ahead gets you a more reliable arrival window than a last-minute request."],
  ["Do you clean vacation rentals in Yaletown and Downtown high-rise towers?", "Yes. Downtown and Yaletown towers make up a large share of our Vancouver turnover bookings, and our teams are used to concierge check-ins and elevator booking windows in these buildings."],
  ["Can you turn around a Kitsilano or West End rental during peak beach season?", "Yes, though summer weekends bring more back-to-back bookings across Kitsilano and the West End, so hosts in those areas tend to get the most reliable results by locking in their turnover schedule a few days ahead rather than same day."],
  ["What neighbourhoods in Vancouver do you cover for vacation rental cleaning?", "We clean vacation rentals across Downtown Vancouver, Yaletown, the West End, Kitsilano, Mount Pleasant, Fairview, Commercial Drive, Point Grey, Dunbar, and Kerrisdale."],
  ["Can you coordinate turnovers across multiple units in the same Vancouver building on the same day?", "Yes. For hosts managing more than one unit in the same Downtown or Yaletown tower, we can plan a single visit that covers several turnovers back to back, which usually means one concierge sign-in and one elevator booking window instead of several."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Vacation Rental Cleaning in Vancouver",
      intro: "Every turnover follows a checklist built for short-term rentals, not a standard house clean.",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("A Downtown or Yaletown condo tower unit shows wear differently than a Kitsilano character suite. In the towers, the giveaways are streaked balcony glass, a bathroom fan that hasn't cleared shower steam fast enough and left a faint mildew smell, and dust collecting on the wide window sills that face False Creek or the harbour. In Kitsilano and the West End, older buildings closer to the beach pick up sand tracked in from the seawall, salt residue on window screens, and grime along baseboards in units with more foot traffic per square foot."),
        para("Back-to-back bookings are the other trigger. A host running a Downtown tower unit or a West End suite through peak summer weekends often has same-day checkout and check-in pressure, and a rushed clean is where the small misses happen: a hair in the shower drain, a coffee ring on the counter, a remote that didn't get wiped down. Guests photograph these details and put them in reviews."),
        para("Strata and building rules also shape when a clean can happen. Many Yaletown and Downtown towers restrict move and service access to certain hours, and a cleaning crew arriving without a booked elevator slot can lose 20 minutes just getting into the unit. Hosts in these buildings need a cleaner who plans around building rules, not just the guest calendar."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Vacation Rental Cleaning Prices",
      intro: "Turnover pricing runs from $120 to $400, depending on property size, condition, whether linen and laundry are included, restocking needs, and how often you book us. Pricing is the same across every city we serve, so a Yaletown high-rise unit and a Kitsilano character suite are priced on the same scale. One-bedroom units take 60 to 90 minutes, two-bedroom units take 90 to 120 minutes, and larger properties or deep turnovers take longer, scheduled around your checkout and check-in windows. We offer three turnover types for Vancouver properties.",
      tiers: [
        {
          _key: key("tier"),
          title: "Standard Turnover",
          range: "",
          body: "A full reset between guests: linen and towel replacement, bathroom and kitchen deep clean, floor care, trash removal, and photo documentation.",
        },
        {
          _key: key("tier"),
          title: "Deep Turnover",
          range: "",
          body: "Built for after longer stays or high-traffic bookings. Adds inside-appliance cleaning, grout scrubbing, and baseboard detailing on top of the standard turnover.",
        },
        {
          _key: key("tier"),
          title: "Recurring Turnover Plan",
          range: "",
          body: "For hosts with predictable booking patterns. We sync our schedule to your Airbnb or VRBO calendar and offer preferred scheduling and competitive rates for ongoing Vancouver turnovers.",
        },
      ],
      notes: [
        "For an exact number, request a free estimate at /rates. First-time hosts can apply MINT26 for 10% off.",
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Vacation Rental Cleaning Process Works",
      checklistItems: [],
      steps: [
        { _key: key("step"), title: "Initial assessment", body: "We walk your property to learn its layout, your staging preferences, where supplies live, and any special instructions." },
        { _key: key("step"), title: "Flexible scheduling", body: "We build our schedule around your bookings as far ahead as you can give us. Because our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge, we recommend booking your Vancouver turnovers ahead of time rather than relying on last-minute openings." },
        { _key: key("step"), title: "Professional execution", body: "Our team works from a checklist customized to your property, not a generic template." },
        { _key: key("step"), title: "Photo documentation", body: "You get time-stamped photos after every clean, sent before your next guest arrives." },
        { _key: key("step"), title: "Satisfaction guarantee", body: "If something's missed, we come back and fix it at no charge within 24 hours." },
      ],
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Homeowners/Businesses Choose Mint Sanitary",
      items: [
        { _key: key("why"), title: "Book-ahead scheduling", body: "We plan Vancouver turnovers around bridge and tunnel travel from North Vancouver, so we ask hosts to lock in their calendar with us in advance rather than counting on a same-day opening." },
        { _key: key("why"), title: "Photo documentation", body: "Sent after every clean, so you can confirm guest-readiness without driving over." },
        { _key: key("why"), title: "Eco-friendly products", body: "Safe for guests, pets, and the environment." },
        { _key: key("why"), title: "Supply restocking with low-inventory alerts", body: "So you're not caught without toilet paper." },
        { _key: key("why"), title: "Teams trained on condo and strata access", body: "Concierge sign-in, elevator booking windows, and visitor parking limits are routine in Downtown, Yaletown, and West End towers. Our teams learn each building's rules along with your unit's layout." },
        { _key: key("why"), title: "Transparent pricing", body: "Free estimates and no contracts." },
        { _key: key("why"), title: "24-hour satisfaction guarantee", body: "On every clean." },
        { _key: key("why"), title: "Crews that plan around the water", body: "Vancouver is surrounded by water on three sides, and our teams route around Lions Gate Bridge, the Ironworkers Memorial Bridge, and SeaBus schedules to keep turnover windows realistic." },
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
        para("Vancouver's short-term rental supply is concentrated in a handful of dense pockets, Downtown, Yaletown, the West End, and Kitsilano among them, which means a single crew can end up cleaning several units in the same tower on the same day. That's a different logistics problem than a one-off house turnover: it means coordinating one concierge check-in and one elevator booking window for multiple visits instead of one driveway per job. Buildings that cap service elevator access to certain hours can compress an entire day's schedule into a narrower window than a house-based turnover ever would."),
        para("The coastal climate adds its own pressure. Vancouver's wet season runs roughly October through April, and condo bathrooms with smaller windows or shared ventilation shafts hold humidity longer after a guest's shower than a house with an exterior-vented fan. Left unchecked between short turnovers, that moisture is exactly what lets mold start in grout lines, which is one of the fastest ways a listing loses its cleanliness score. Beach-adjacent units in Kitsilano and the West End see a second, more seasonal issue: sand and salt air tracked in from the seawall and English Bay, which settles into carpets and window tracks in ways a downtown tower unit rarely deals with."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["House Cleaning in Vancouver", "/vancouver/house-cleaning"]]),
        multiLinkPara(["", ["Move In Move Out Cleaning in Vancouver", "/vancouver/move-in-move-out-cleaning"]]),
        multiLinkPara(["", ["Strata Cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
        multiLinkPara(["", ["Steam Cleaning in Vancouver", "/vancouver/steam-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Vacation Rental Cleaning in Vancouver",
      body: [
        para("Vancouver's short-term rental stock is heaviest in Downtown, Yaletown, the West End, and Kitsilano, all within walking distance of the seawall, the beaches, or the downtown core, and that's where most of our turnover bookings come from. We also handle vacation rental turnovers in Mount Pleasant, Fairview, Commercial Drive, Point Grey, Dunbar, and Kerrisdale for hosts running character-home rentals or secondary suites outside the downtown core. Whether it's a tower unit with a concierge desk or a house-based rental with its own entrance, the same checklist and the same 24-hour satisfaction guarantee apply."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Vacation Rental Cleaning in Vancouver?",
      body: "Get a free, no-contract quote for your Vancouver vacation rental, or call us directly at 236-688-3248 to talk through your booking calendar. Use code MINT26 for 10% off your first service. View our rates.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Vacation Rental Cleaning in Vancouver",
    heroHeading: "Vacation Rental Cleaning in Vancouver",
    heroIntro: "Vancouver's short-term rental market is dense and fast-moving, from high-rise towers in Yaletown and Downtown to walk-up suites a few blocks from Kitsilano Beach and the West End. A checkout at 11 a.m. and a check-in at 3 p.m. still leaves no room for a slow clean or a missed detail. Mint Sanitary handles vacation rental turnovers for hosts across Vancouver, with a 5 out of 5 rating across 50+ Google reviews. Our crews are based in North Vancouver and cross the Lions Gate or Ironworkers Memorial Bridge for every job, so same-day availability here isn't guaranteed the way it is closer to home. Book ahead when your calendar allows it, and use code MINT26 for 10% off your first turnover.",
    metaTitle: "Vacation Rental Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Airbnb and VRBO turnover cleaning for Vancouver hosts in Yaletown, Downtown, the West End, and Kitsilano. Photo documentation, restocking, and 10% off with code MINT26.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
