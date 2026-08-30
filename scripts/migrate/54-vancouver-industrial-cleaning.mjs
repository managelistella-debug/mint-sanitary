import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "industrial-cleaning";

const whatsIncludedCards = [
  {
    title: "Warehouse and Distribution Center Cleaning in Vancouver",
    body: "Vancouver's remaining warehouse and light industrial space is concentrated in pockets like the False Creek Flats near Commercial Drive and Mount Pleasant, where large open floors take a beating from forklift traffic, pallet movement, and constant foot traffic. Standard mopping doesn't cut it on concrete floors that size, so we use commercial scrubbers and sweepers to clear dust, grit, and debris, and to degrease areas where equipment or product handling leaves residue behind.",
  },
  {
    title: "Manufacturing Facility Cleaning in Vancouver",
    body: "On a production floor in a Vancouver manufacturing facility, we clean the surfaces and areas around equipment, including floors, walls, workstations, and adjacent surfaces, without touching the machinery itself. That keeps cleaning aligned with your facility's own maintenance protocols while keeping the surrounding work environment clear of dust, shavings, and production debris.",
  },
  {
    title: "High and Overhead Dusting for Vancouver Facilities",
    body: "Industrial buildings in Vancouver, including the older brick-and-timber structures common in Mount Pleasant, often have high ceilings, exposed ductwork, overhead piping, and racking that collect dust most cleaning routines never reach. Buildup in those areas can eventually settle back onto floors and work surfaces, so periodic high-level dusting is part of keeping a Vancouver facility genuinely clean rather than clean at eye level only.",
  },
  {
    title: "Break Rooms and Office Areas in Vancouver Industrial Facilities",
    body: "Most industrial sites in Vancouver have an administrative or break room component tucked inside the building. We clean these areas the way we would any commercial office space in Vancouver: desks, kitchen surfaces, floors, and common areas kept tidy for staff working across rotating shifts.",
  },
  {
    title: "Washroom and Locker Room Sanitization for Vancouver Facilities",
    body: "Washrooms and locker rooms in Vancouver industrial facilities see heavy use across multiple shifts. We sanitize fixtures, floors, and high-touch surfaces and restock supplies as needed, with attention to facilities where staff are changing in and out of protective gear throughout the day.",
  },
  {
    title: "Loading Dock and Exterior Cleanup in Vancouver",
    body: "Loading access in Vancouver's light industrial pockets is often a shared laneway or a small dock apron rather than the larger truck courts common at bigger suburban warehouses, and that tighter footprint collects dust, packaging residue, and tracked-in debris just as fast. We clean dock areas, entryways, and adjacent exterior spaces so the boundary between outside and inside doesn't become an ongoing source of mess.",
  },
  {
    title: "Debris and Packaging Waste Removal in Vancouver",
    body: "Shipping and receiving at Vancouver warehouses and light industrial buildings generates cardboard, shrink wrap, strapping, and general packaging waste on an ongoing basis. Cleanup and removal of this debris is built into a regular industrial cleaning schedule rather than left for facility staff to handle between their own tasks.",
  },
].map((c) => ({ _key: key("card"), ...c, items: [] }));

const whyChooseItems = [
  {
    title: "5-Star Rating",
    body: "5 out of 5 rating from 50+ Google reviews.",
  },
  {
    title: "Vetted Cleaners",
    body: "Background-checked, bonded, and insured cleaners on every job.",
  },
  {
    title: "Eco-Friendly Products",
    body: "Eco-friendly, non-toxic, plant-based products, including in settings where WHMIS handling matters.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "24-hour satisfaction guarantee on every clean.",
  },
  {
    title: "WorkSafeBC Coverage",
    body: "WorkSafeBC coverage on every job.",
  },
  {
    title: "Book Ahead for the Fastest Slot",
    body: "Available 7 days a week; book ahead for the fastest available slot, since crews travel from North Vancouver rather than a Vancouver depot.",
  },
  {
    title: "Local Access Know-How",
    body: "Crews are familiar with the tighter laneway loading access and shared-building layouts common in Mount Pleasant and the False Creek Flats.",
  },
  {
    title: "Production-Calendar Scheduling",
    body: "Scheduling built around your production calendar, which matters more in a mixed-use industrial building where office or creative-studio neighbours keep normal daytime hours.",
  },
].map((i) => ({ _key: key("why"), ...i }));

const faqItems = [
  ["What does industrial cleaning cost in Vancouver?", "Cost depends on the size of your Vancouver facility, the scope of work, and how often you need service. Request a free estimate and we'll put together a quote based on your specific space."],
  ["What types of facilities do you clean in Vancouver?", "We clean warehouses, distribution centers, manufacturing plants, and similar industrial spaces in Vancouver, including production floors, break rooms, washrooms, loading docks, and exterior areas."],
  ["Can you clean around active machinery in a Vancouver facility?", "We clean the surfaces and floor areas around equipment in Vancouver facilities, including workstations and adjacent surfaces. We don't clean or service the machinery itself, which stays within your own maintenance protocols."],
  ["Do you clean during business hours or after hours in Vancouver?", "Either. Many Vancouver industrial facilities run shift work or 24-hour operations, so we schedule cleaning around your production calendar, including evenings, overnight, weekends, and holidays."],
  ["What cleaning products do you use in Vancouver industrial facilities?", "We use eco-friendly, non-toxic, biodegradable products in Vancouver, and our staff follow WHMIS guidelines for handling and labeling cleaning chemicals used in an industrial setting."],
  ["Are your staff trained to work safely in an industrial environment in Vancouver?", "Yes. Our cleaning staff are trained on WHMIS-compliant product handling and follow WorkSafeBC-aligned safety practices for working around forklift traffic, loading docks, and active production areas in Vancouver facilities."],
  ["Do you offer one-time cleaning or ongoing service in Vancouver?", "Both. We can do a one-time deep clean of a Vancouver warehouse or light industrial building, or set up a recurring schedule that matches your shift pattern and operational needs."],
  ["What's the difference between industrial cleaning and standard commercial cleaning in Vancouver?", "Industrial cleaning in Vancouver deals with concrete dust, metal shavings, oil and grease residue, and packaging debris that don't come up in office cleaning, and often calls for equipment like floor scrubbers and sweepers instead of standard mopping."],
  ["Do you clean loading docks and exterior areas in Vancouver?", "Yes, loading dock and adjacent exterior cleanup is part of our Vancouver industrial cleaning scope, since these areas track dust and debris into the rest of the facility, especially where loading access is a shared laneway rather than a private dock."],
  ["Is Mint Sanitary insured for industrial work in Vancouver?", "Yes. Our staff are bonded, insured, and background-checked, and they follow WorkSafeBC-aligned safety practices when working in industrial environments in Vancouver."],
  ["Do you offer a satisfaction guarantee for Vancouver industrial cleaning?", "Yes. Every clean we perform in Vancouver is backed by a 24-hour satisfaction guarantee, so if something's missed, we come back and address it."],
  ["How do I get a quote for my Vancouver facility?", "Call 236-688-3248, email hello@mintsanitary.com, or visit our rates page to request a free estimate for your Vancouver facility."],
  ["Do you offer a discount for new industrial clients in Vancouver?", "Yes. New Vancouver clients can use code MINT26 for 10% off their first clean, including industrial cleaning services."],
  ["Which parts of Vancouver do you serve for industrial cleaning?", "Most of our industrial cleaning work in Vancouver is concentrated in Mount Pleasant and the False Creek Flats near Commercial Drive, where light industrial and warehouse buildings cluster, but we cover light industrial addresses across the wider 10-neighbourhood area we serve in Vancouver."],
  ["Since Mint Sanitary is based in North Vancouver, how does scheduling work for a Vancouver facility?", "Crews travel from North Vancouver across the Lions Gate or Ironworkers bridge for scheduled jobs, so same-day booking in Vancouver isn't guaranteed the way it is closer to home base. For overnight or early-morning work, booking a few days ahead gets you the best chance at your preferred window."],
  ["Can you work around a 24-hour or shift-based operation in Vancouver?", "Yes. We're available seven days a week, including evenings, weekends, and holidays, so cleaning can be scheduled around round-the-clock production at a Vancouver facility, with the schedule built to work around your shift changes."],
  ["Do you clean industrial buildings that share space with offices or creative studios in Mount Pleasant or the False Creek Flats?", "Yes. Mixed-use industrial buildings are common in that part of Vancouver, and we work with facility managers to schedule around neighbouring tenants' hours and keep dust, odor, and noise contained to the areas being cleaned."],
  ["How often should a high-traffic Vancouver facility book cleaning?", "It depends on shift volume and the type of work happening on-site, but a warehouse or production floor running multiple shifts typically needs more frequent scrubbing and dusting than a single-shift operation. We'll recommend a frequency based on what we see during the initial walkthrough."],
  ["Do narrower laneway loading areas in Vancouver change how you clean loading docks?", "Somewhat. A shared laneway or small dock apron collects tracked-in debris and moisture just as fast as a larger dock, so we treat entryways and adjacent exterior space as part of the regular cleaning scope rather than an occasional extra."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Industrial Cleaning in Vancouver",
      intro: "Industrial facilities in Vancouver need a broader range of cleaning tasks than a typical commercial space, and the scope usually depends on what the facility does and how it's laid out. Here's what our Vancouver industrial cleaning services can cover.",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Vancouver's light industrial buildings are older on average than a lot of the newer stock in North Vancouver, and that shows up in the cleaning problems that come up. In Mount Pleasant's converted brick warehouses, dust settles on exposed timber ceiling beams and low overhead racking that a walk-through inspection can miss. In the False Creek Flats, buildings zoned for light manufacturing sit close to office and creative-studio tenants, so grease residue or an odor from a production floor becomes a shared-building problem faster than it would in a standalone plant."),
        para("A few concrete signs it's time to book: concrete floors with a visible film of dust or grit despite regular sweeping, oil or grease marks building up around fixed equipment, packaging waste piling up faster than staff can clear it in a tight laneway loading area, staff or neighbouring tenants raising a dust or odor concern, and washrooms or locker rooms that are hard to keep sanitized across multiple shift changes. Buildings scheduled for eventual redevelopment still need to meet the same WorkSafeBC and WHMIS standards in the meantime, so deferred cleaning isn't a workable option just because a lease is finite."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Vancouver Industrial Cleaning Prices",
      body: [
        paraWithLink(
          "Industrial cleaning pricing depends on the size of your Vancouver facility, the scope of work, and how often you need service, the same way it does everywhere else Mint Sanitary works. There's no fixed size-based rate card for industrial space the way there is for home cleaning, since a small production floor and a full distribution center need very different scopes and equipment. Call 236-688-3248, email hello@mintsanitary.com, or visit our ",
          "rates page",
          "/rates",
          " to request a free estimate built around your specific Vancouver facility."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "WHMIS and WorkSafeBC Compliance",
      body: [
        para("Cleaning an industrial facility in Vancouver isn't only about appearance. WorkSafeBC sets workplace safety requirements for BC employers, including standards for chemical handling under WHMIS, and those requirements apply to the cleaning products and processes used inside a Vancouver facility just as much as to the work happening on the production floor. Products that aren't handled or labeled correctly create a compliance problem on top of a cleanliness one."),
        para("There's also a practical safety angle. Dust, oil, grease, and packaging debris on warehouse or manufacturing floors create slip and trip hazards, and buildup around machinery can interfere with equipment performance over time. Keeping floors, walkways, and work areas clear is general facility maintenance best practice for any Vancouver industrial site, not an optional add-on."),
        para("Our cleaning staff working in Vancouver are trained on WHMIS-compliant handling of the products they use, and they follow WorkSafeBC-aligned safety practices when working in an active industrial environment, including around forklift traffic, loading zones, and areas near production equipment."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Flexible Scheduling for Shift Work",
      body: [
        para("Many industrial facilities run multiple shifts, and some run around the clock. Cleaning that only happens during standard daytime business hours doesn't fit that reality, and it can mean cleaning crews working in the way of active production. Mint Sanitary is available seven days a week, including evenings, weekends, and holidays, so cleaning can be scheduled for the window that works best for your Vancouver operation, whether that's overnight, between shift changes, or on a quieter weekend."),
        para("We build the schedule around how your Vancouver facility runs rather than asking you to work around ours, including coordinating with facility managers on which areas need to stay clear during active production. Since crews are traveling from North Vancouver for these jobs, overnight and early-morning bookings work best when confirmed a few days ahead rather than requested the same day."),
      ],
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
        para("Vancouver's light industrial land is concentrated in a handful of older, narrower pockets, mainly Mount Pleasant and the False Creek Flats near Commercial Drive, rather than spread across large dedicated industrial parks the way it is closer to North Vancouver's waterfront and rail corridor. That density means an industrial building often sits a few doors down from an office, a design studio, or a food and beverage tenant, so dust containment, noise timing, and odor control carry more weight than they would at a standalone warehouse with no neighbours to consider."),
        para("The wet season, roughly October through April, adds another layer specific to this service. Shared laneway loading areas track grit and moisture into a building faster than a large private dock apron would, and older concrete floors in converted Mount Pleasant buildings show that buildup sooner. Add in the fact that some of this stock is under redevelopment pressure, and facility operators have less flexibility to shut down for a deep clean, which is part of why scheduling around active shifts, rather than a fixed maintenance window, matters more here than in a newer, larger facility."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Commercial Cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
        multiLinkPara(["", ["Post-Construction Cleaning in Vancouver", "/vancouver/post-construction-cleaning"]]),
        multiLinkPara(["", ["Office Cleaning in Vancouver", "/vancouver/office-cleaning"]]),
        multiLinkPara(["", ["Pressure Washing in Vancouver", "/vancouver/pressure-washing"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Industrial Cleaning in Vancouver",
      body: [
        para("Industrial cleaning demand in Vancouver isn't spread evenly across the city the way house cleaning or office cleaning is. Most of it comes from Mount Pleasant and the False Creek Flats near Commercial Drive, where light industrial, manufacturing, and warehouse buildings still cluster. We also pick up smaller light-industrial and maker-space units tucked into mixed-use buildings in Fairview and Downtown Vancouver, and we cover the full 10-neighbourhood area Mint Sanitary serves in Vancouver: Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar. If your facility sits outside these areas, call 236-688-3248 to confirm coverage."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Industrial Cleaning in Vancouver?",
      body: "Every Vancouver facility has a different layout, shift pattern, and cleaning scope, so pricing starts with understanding your space. Reach out to Mint Sanitary for a free estimate on warehouse, manufacturing, or light industrial cleaning in Vancouver, and we'll build a schedule around how your facility runs and when our crews can realistically get there from North Vancouver. Use code MINT26 for 10% off your first service. View our rates. Call 236-688-3248 or email hello@mintsanitary.com to get started.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Industrial Cleaning in Vancouver",
    heroHeading: "Industrial Cleaning in Vancouver",
    heroIntro: "Vancouver's light industrial buildings don't look like a big waterfront warehouse. In the False Creek Flats near Commercial Drive and the older brick-and-timber blocks of Mount Pleasant, manufacturing space, food production, and creative-industry tenants often share narrow floor plates and laneway loading access instead of a large dock apron. Mint Sanitary holds a 5 out of 5 rating from 50+ Google reviews and brings WHMIS-compliant industrial cleaning to facilities across the city. We're based in North Vancouver, so crews cross the Ironworkers or Lions Gate bridge for scheduled jobs, and same-day booking in Vancouver isn't guaranteed the way it is closer to home. Call ahead, and use code MINT26 for 10% off your first clean.",
    metaTitle: "Industrial Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "WHMIS-compliant industrial cleaning for Vancouver warehouses, manufacturing space, and light industrial buildings. Shift-friendly scheduling. Use code MINT26 for 10% off.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
