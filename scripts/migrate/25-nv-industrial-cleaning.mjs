import { key, uploadImage, replaceDoc, refTo, para, paraWithLink } from "./lib.mjs";

/**
 * /north-vancouver/industrial-cleaning — migrated from the hand-coded page
 * now parked at /north-vancouver/industrial-cleaning-original.
 *
 * All copy verbatim. This page has no card grids beyond "What's Included",
 * no numbered process, and no photo besides the hero, so the rest of the
 * page (Safety & Compliance, Scheduling, Why Choose, Serving Industrial
 * Areas) is prose — each became its own Rich Text section, matching the
 * "anything else → richText" rule. The one outbound-feeling internal link
 * (to the general /services/industrial-cleaning page) is preserved as a
 * real Portable Text mark.
 */

const includedItems = [
  ["Warehouse and Distribution Center Cleaning in North Vancouver", "North Vancouver's waterfront and rail corridor are home to a number of warehouse and light industrial operations, and large open floors in these buildings take a beating from forklift traffic, pallet movement, and constant foot traffic. Standard mopping doesn't cut it on concrete floors that size, so we use commercial scrubbers and sweepers to clear dust, grit, and debris, and to degrease areas where equipment or product handling leaves residue behind."],
  ["Manufacturing Facility Cleaning in North Vancouver", "On a production floor in a North Vancouver manufacturing facility, we clean the surfaces and areas around equipment, including floors, walls, workstations, and adjacent surfaces, without touching the machinery itself. That keeps cleaning aligned with your facility's own maintenance protocols while keeping the surrounding work environment clear of dust, shavings, and production debris."],
  ["High and Overhead Dusting for North Vancouver Facilities", "Industrial buildings in North Vancouver often have high ceilings, exposed ductwork, overhead piping, and racking that collect dust most cleaning routines never reach. Buildup in those areas can eventually settle back onto floors and work surfaces, so periodic high-level dusting is part of keeping a North Vancouver facility genuinely clean rather than clean at eye level only."],
  ["Break Rooms and Office Areas in North Vancouver Industrial Facilities", "Most industrial sites in North Vancouver have an administrative or break room component tucked inside the building. We clean these areas the way we would any commercial office space in North Vancouver: desks, kitchen surfaces, floors, and common areas kept tidy for staff working across rotating shifts."],
  ["Washroom and Locker Room Sanitization for North Vancouver Facilities", "Washrooms and locker rooms in North Vancouver industrial facilities see heavy use across multiple shifts. We sanitize fixtures, floors, and high-touch surfaces and restock supplies as needed, with attention to facilities where staff are changing in and out of protective gear throughout the day."],
  ["Loading Dock and Exterior Cleanup in North Vancouver", "Loading docks near North Vancouver's rail corridor and waterfront industrial areas collect dust, packaging residue, and tracked-in debris from vehicle and foot traffic. We clean dock areas, entryways, and adjacent exterior spaces so the boundary between outside and inside doesn't become an ongoing source of mess."],
  ["Debris and Packaging Waste Removal in North Vancouver", "Shipping and receiving at North Vancouver warehouses and distribution centers generates cardboard, shrink wrap, strapping, and general packaging waste on an ongoing basis. Cleanup and removal of this debris is built into a regular industrial cleaning schedule rather than left for facility staff to handle between their own tasks."],
];

const faqItems = [
  ["What does industrial cleaning cost in North Vancouver?", "Cost depends on the size of your North Vancouver facility, the scope of work, and how often you need service. Request a free estimate and we'll put together a quote based on your specific North Vancouver space."],
  ["What types of facilities do you clean in North Vancouver?", "We clean warehouses, distribution centers, manufacturing plants, and similar industrial spaces in North Vancouver, including production floors, break rooms, washrooms, loading docks, and exterior areas."],
  ["Can you clean around active machinery in a North Vancouver facility?", "We clean the surfaces and floor areas around equipment in North Vancouver facilities, including workstations and adjacent surfaces. We don't clean or service the machinery itself, which stays within your own maintenance protocols."],
  ["Do you clean during business hours or after hours in North Vancouver?", "Either. Many North Vancouver industrial facilities run shift work or 24-hour operations, so we schedule cleaning around your production calendar, including evenings, overnight, weekends, and holidays."],
  ["What cleaning products do you use in North Vancouver industrial facilities?", "We use eco-friendly, non-toxic, biodegradable products in North Vancouver, and our staff follow WHMIS guidelines for handling and labeling cleaning chemicals used in an industrial setting."],
  ["Are your North Vancouver staff trained to work safely in an industrial environment?", "Yes. Our North Vancouver cleaning staff are trained on WHMIS-compliant product handling and follow WorkSafeBC-aligned safety practices for working around forklift traffic, loading docks, and active production areas."],
  ["Do you offer one-time cleaning or ongoing service in North Vancouver?", "Both. We can do a one-time deep clean of a North Vancouver warehouse or facility, or set up a recurring schedule that matches your shift pattern and operational needs."],
  ["What's the difference between industrial cleaning and standard commercial cleaning in North Vancouver?", "Industrial cleaning in North Vancouver deals with concrete dust, metal shavings, oil and grease residue, and packaging debris that don't come up in office cleaning, and often calls for equipment like floor scrubbers and sweepers instead of standard mopping."],
  ["Do you clean loading docks and exterior areas in North Vancouver?", "Yes, loading dock cleanup and adjacent exterior areas are part of our North Vancouver industrial cleaning scope, since these areas track dust and debris into the rest of the facility."],
  ["Which parts of North Vancouver do you serve for industrial cleaning?", "We serve industrial and light industrial areas throughout North Vancouver, including facilities near the waterfront and rail corridor and along the Low Level Road industrial corridor."],
  ["Is Mint Sanitary insured for industrial work in North Vancouver?", "Yes. Our North Vancouver staff are bonded, insured, and background-checked, and they follow WorkSafeBC-aligned safety practices when working in industrial environments."],
  ["Can you work around a 24-hour operation in North Vancouver?", "Yes. We're available seven days a week in North Vancouver, including evenings, weekends, and holidays, so cleaning can be scheduled around round-the-clock North Vancouver production."],
  ["Do you offer a satisfaction guarantee for North Vancouver industrial cleaning?", "Yes. Every clean we perform in North Vancouver is backed by a 24-hour satisfaction guarantee, so if something's missed, we come back and address it."],
  ["How do I get a quote for my North Vancouver facility?", "Call 236-688-3248, email hello@mintsanitary.com, or visit our rates page to request a free estimate for your North Vancouver facility."],
  ["Do you offer a discount for new industrial clients in North Vancouver?", "Yes. New North Vancouver clients can use code MINT26 for 10% off their first clean, including industrial cleaning services."],
];

console.log("→ /north-vancouver/industrial-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Our North Vancouver Industrial Cleaning Services",
    intro:
      "Industrial facilities in North Vancouver need a broader range of cleaning tasks than a typical commercial space, and the scope usually depends on what the facility does and how it's laid out. Here's what our North Vancouver industrial cleaning services can cover.",
    cards: includedItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Industrial Cleaning Matters for North Vancouver Facilities",
    body: [
      para(
        "Cleaning an industrial facility in North Vancouver isn't only about appearance. WorkSafeBC sets workplace safety requirements for BC employers, including standards for chemical handling under WHMIS, and those requirements apply to the cleaning products and processes used inside a North Vancouver facility just as much as to the work happening on the production floor. Products that aren't handled or labeled correctly create a compliance problem on top of a cleanliness one."
      ),
      para(
        "There's also a practical safety angle for North Vancouver operations. Dust, oil, grease, and packaging debris on warehouse or manufacturing floors create slip and trip hazards, and buildup around machinery can interfere with equipment performance over time. Keeping floors, walkways, and work areas clear is general facility maintenance best practice for any North Vancouver industrial site, not an optional add-on. A North Vancouver facility that stays on top of dust, debris, and residue is easier to inspect, easier to move through safely, and easier to keep running without unplanned downtime tied to housekeeping issues."
      ),
      para(
        "Our cleaning staff working in North Vancouver are trained on WHMIS-compliant handling of the products they use, and they follow WorkSafeBC-aligned safety practices when working in an active industrial environment, including around forklift traffic, loading zones, and areas near production equipment."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Flexible Scheduling for North Vancouver Shift Work",
    body: [
      para(
        "Many industrial facilities in North Vancouver run multiple shifts, and some run around the clock. Cleaning that only happens during standard daytime business hours doesn't fit that reality, and it can mean cleaning crews working in the way of active production. Mint Sanitary is available seven days a week in North Vancouver, including evenings, weekends, and holidays, so cleaning can be scheduled for the window that works best for your North Vancouver operation, whether that's overnight, between shift changes, or on a weekend when the floor is quieter."
      ),
      para(
        "We build the schedule around how your North Vancouver facility runs rather than asking you to work around ours. That includes coordinating with facility managers on which areas need to stay clear during active production and which can be cleaned at any time."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why North Vancouver Facilities Choose Mint Sanitary",
    body: [
      para(
        "Mint Sanitary is headquartered in North Vancouver and holds a 4.9 out of 5 rating from more than 120 Google reviews. Our staff are bonded, insured, and background-checked, and we use eco-friendly, non-toxic, biodegradable cleaning products throughout our North Vancouver services, including in industrial settings where product handling has to meet WHMIS standards. Every clean in North Vancouver is backed by a 24-hour satisfaction guarantee, so if something's missed, we come back and make it right."
      ),
      para(
        "We've worked with organizations including BC Hydro and Powers Construction, alongside commercial and institutional clients across the North Vancouver area and the wider region. New North Vancouver clients can use code MINT26 for 10% off their first clean."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Serving Industrial Areas Across North Vancouver",
    body: [
      para(
        "North Vancouver's light industrial and warehouse operations tend to cluster in a few recognizable parts of the city: near the waterfront and rail corridor, along the Low Level Road industrial corridor, and in light industrial pockets near Mountain Highway. Wherever your facility sits in North Vancouver, our crews schedule around your shift pattern and bring the right equipment for the job, whether that's a warehouse floor scrubber, degreasing products, or standard janitorial supplies for an office area inside a larger industrial building."
      ),
      paraWithLink(
        "If your facility is outside North Vancouver, our ",
        "industrial cleaning services",
        "/services/industrial-cleaning",
        " page covers the areas we serve across Greater Vancouver, including West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge."
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
    heading: "Get a Free Estimate for Your North Vancouver Facility",
    body: "Every North Vancouver facility has a different layout, shift pattern, and cleaning scope, so pricing starts with understanding your space. Reach out to Mint Sanitary for a free estimate on warehouse, manufacturing, or distribution center cleaning in North Vancouver, and we'll build a schedule around how your facility runs.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "industrial-cleaning", {
  title: "Industrial Cleaning Services in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "industrial-cleaning"),
  heroHeading: "Industrial Cleaning Services in North Vancouver",
  heroIntro:
    "Warehouses, manufacturing plants, and distribution centers in North Vancouver deal with a different kind of mess than a typical office. Concrete dust, metal shavings, packaging debris, and oil or grease residue from machinery build up in ways that standard mopping isn't built to handle. Mint Sanitary is based in North Vancouver and provides industrial cleaning services to facilities throughout the city, using WHMIS-compliant products and equipment suited to industrial floors, high bays, loading docks, and staff areas. Cleaning is scheduled around your production calendar, not the other way around, so North Vancouver crews can work between shifts, overnight, or on weekends without interrupting your operation.",
  heroImage: await uploadImage(
    "/commercial-janitorial-cleaning-north-vancouver.jpg",
    "Industrial cleaning in North Vancouver"
  ),
  metaTitle: "Industrial Cleaning North Vancouver | Mint Sanitary",
  metaDescription:
    "Industrial cleaning for warehouses, plants, and distribution centers in North Vancouver. WHMIS-compliant crews, flexible shift scheduling. Free estimates.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver industrial cleaning migrated");
