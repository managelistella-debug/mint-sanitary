import { key, uploadImage, replaceDoc, heading, para, paraWithLink } from "./lib.mjs";

/**
 * /services/industrial-cleaning — migrated from the hand-coded page now
 * parked at /services/industrial-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The page has no card grid, accordion, process timeline, or pricing
 *    section beyond the "What's Included" cards — "Safety & Compliance",
 *    "Scheduling", and "Why Choose Mint Sanitary" are each a heading plus
 *    a few paragraphs, so all three became Rich Text sections.
 *  - The closing paragraph's North Vancouver link is preserved as a real
 *    Portable Text mark via paraWithLink, not flattened to plain text.
 *  - No tile blurb existed for this slug anywhere on the site, so
 *    tileDescription is left undefined rather than inventing copy.
 */

const includedItems = [
  ["Warehouse and Distribution Center Floors", "Large open floors in warehouses and distribution centers take a beating from forklift traffic, pallet movement, and constant foot traffic. Standard mopping doesn't cut it on concrete floors that size, so we use commercial scrubbers and sweepers to clear dust, grit, and debris, and to degrease areas where equipment or product handling leaves residue behind."],
  ["Manufacturing Facility Cleaning", "On a production floor, we clean the surfaces and areas around equipment, including floors, walls, workstations, and adjacent surfaces, without touching the machinery itself. That keeps cleaning aligned with your facility's own maintenance protocols while still keeping the surrounding work environment clear of dust, shavings, and production debris."],
  ["High and Overhead Dusting", "Industrial spaces often have high ceilings, exposed ductwork, overhead piping, and racking that collect dust most cleaning routines never reach. Buildup in those areas can eventually settle back onto floors and work surfaces, so periodic high-level dusting is part of keeping a facility genuinely clean rather than just clean at eye level."],
  ["Break Rooms, Offices, and Staff Areas", "Most industrial sites have an administrative or break room component tucked inside the building. We clean these areas the way we would any commercial office space: desks, kitchen surfaces, floors, and common areas kept tidy for staff on rotating shifts."],
  ["Washrooms and Locker Rooms", "Washrooms and locker rooms in industrial facilities see heavy use across multiple shifts. We sanitize fixtures, floors, and high-touch surfaces and restock supplies as needed, with attention to facilities where staff may be changing in and out of protective gear throughout the day."],
  ["Loading Docks and Exterior Areas", "Loading docks collect dust, packaging residue, and tracked-in debris from vehicle and foot traffic. We clean dock areas, entryways, and adjacent exterior spaces so the boundary between outside and inside doesn't become a source of ongoing mess."],
  ["Debris and Packaging Waste Removal", "Shipping and receiving generates cardboard, shrink wrap, strapping, and general packaging waste on an ongoing basis. Cleanup and removal of this debris is built into a regular industrial cleaning schedule rather than left for facility staff to handle between their own tasks."],
];

const faqItems = [
  ["What does industrial cleaning cost?", "Cost depends on the size of your facility, the scope of work, and how often you need service. Request a free estimate and we'll put together a quote based on your specific space."],
  ["What types of facilities do you clean?", "We clean warehouses, distribution centers, manufacturing plants, and similar industrial spaces, including production floors, break rooms, washrooms, loading docks, and exterior areas."],
  ["Can you clean around active machinery?", "We clean the surfaces and floor areas around equipment, including workstations and adjacent surfaces. We don't clean or service the machinery itself, which stays within your own maintenance protocols."],
  ["Do you clean during business hours or after hours?", "Either. Many industrial facilities run shift work or 24-hour operations, so we schedule cleaning around your production calendar, including evenings, overnight, weekends, and holidays."],
  ["What cleaning products do you use in industrial facilities?", "We use eco-friendly, non-toxic, biodegradable products, and our staff follow WHMIS guidelines for handling and labeling cleaning chemicals used in an industrial setting."],
  ["Are your staff trained to work safely in an industrial environment?", "Yes. Our cleaning staff are trained on WHMIS-compliant product handling and follow WorkSafeBC-aligned safety practices for working around forklift traffic, loading docks, and active production areas."],
  ["Do you offer one-time cleaning or ongoing service?", "Both. We can do a one-time deep clean of a warehouse or facility, or set up a recurring schedule that matches your shift pattern and operational needs."],
  ["What's the difference between industrial cleaning and standard commercial cleaning?", "Industrial cleaning deals with concrete dust, metal shavings, oil and grease residue, and packaging debris that don't come up in office cleaning, and often calls for equipment like floor scrubbers and sweepers instead of standard mopping."],
  ["Do you clean loading docks and exterior areas?", "Yes, loading dock cleanup and adjacent exterior areas are part of our industrial cleaning scope, since these areas track dust and debris into the rest of the facility."],
  ["How do I get a quote for my facility?", "Call 236-688-3248, email hello@mintsanitary.com, or visit our rates page to request a free estimate for your facility."],
];

console.log("→ /services/industrial-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Industrial Cleaning",
    intro:
      "Industrial facilities need a broader range of cleaning tasks than a typical commercial space, and the scope usually depends on what the facility does and how it's laid out. Here's what our industrial cleaning services can cover.",
    cards: includedItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Industrial Cleaning Matters for Safety and Compliance",
    body: [
      para(
        "Cleaning an industrial facility isn't only about appearance. WorkSafeBC sets workplace safety requirements for BC employers, including standards for chemical handling under WHMIS, and those requirements apply just as much to the cleaning products and processes used inside a facility as they do to the work being done on the production floor. Products that aren't handled or labeled correctly can create a compliance problem on top of a cleanliness one."
      ),
      para(
        "There's also a practical safety angle. Dust, oil, grease, and packaging debris on warehouse or manufacturing floors create slip and trip hazards, and buildup around machinery can interfere with equipment performance over time. Keeping floors, walkways, and work areas clear is part of general facility maintenance best practice, not an optional add-on. A facility that stays on top of dust, debris, and residue is easier to inspect, easier to move through safely, and easier to keep running without unplanned downtime tied to housekeeping issues."
      ),
      para(
        "Our cleaning staff are trained on WHMIS-compliant handling of the products they use, and they follow WorkSafeBC-aligned safety practices when working in an active industrial environment, including around forklift traffic, loading zones, and areas near production equipment."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Scheduling Built Around Your Shifts",
    body: [
      para(
        "Many industrial facilities run multiple shifts, and some run around the clock. Cleaning that only happens during standard daytime business hours doesn't fit that reality, and it can mean cleaning crews working in the way of active production. Mint Sanitary is available seven days a week, including evenings, weekends, and holidays, so cleaning can be scheduled for the window that works best for your operation, whether that's overnight, between shift changes, or on a weekend when the floor is quieter."
      ),
      para(
        "We build the schedule around your production calendar rather than asking you to work around ours. That includes coordinating with facility managers on which areas need to stay clear during active production and which can be cleaned at any time."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Choose Mint Sanitary",
    body: [
      para(
        "Mint Sanitary holds a 4.9 out of 5 rating from more than 120 Google reviews. Our staff are bonded, insured, and background-checked, and we use eco-friendly, non-toxic, biodegradable cleaning products throughout our services, including in industrial settings where product handling has to meet WHMIS standards. Every clean is backed by a 24-hour satisfaction guarantee, so if something's missed, we come back and make it right."
      ),
      para(
        "We've worked with organizations including BC Hydro and Powers Construction, alongside commercial and institutional clients across the region. New clients can use code MINT26 for 10% off their first clean."
      ),
      paraWithLink(
        "Mint Sanitary is based in North Vancouver and provides industrial cleaning services throughout Greater Vancouver, including West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. If your facility is in North Vancouver specifically, you can find more detail on our ",
        "industrial cleaning in North Vancouver",
        "/north-vancouver/industrial-cleaning",
        " page."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(([question, answer]) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Get a Free Estimate for Your Facility",
    body: "Every industrial facility has a different layout, shift pattern, and cleaning scope, so pricing starts with understanding your space. Reach out to Mint Sanitary for a free estimate on warehouse, manufacturing, or distribution center cleaning, and we'll build a schedule around how your facility runs.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "industrial-cleaning", {
  title: "Industrial Cleaning Services",
  name: "Industrial Cleaning",
  // No tile blurb existed for this slug on any other page — left undefined
  // rather than inventing copy.
  tileImage: await uploadImage(
    "/commercial-janitorial-cleaning-north-vancouver.jpg",
    "Industrial cleaning in Greater Vancouver"
  ),
  hasOwnPage: true,
  heroHeading: "Industrial Cleaning Services",
  heroIntro:
    "Warehouses, manufacturing plants, and distribution centers generate a different kind of mess than an office or retail space. Concrete dust, metal shavings, packaging debris, and oil or grease residue from machinery build up in ways that standard mop-and-vacuum routines aren't built to handle. Mint Sanitary provides industrial cleaning services for facilities across Greater Vancouver, using WHMIS-compliant products and equipment suited to large industrial floors, staff areas, and loading docks. Cleaning gets scheduled around your production calendar rather than a standard nine-to-five, so crews can work between shifts, overnight, or on weekends without slowing your operation down.",
  heroImage: await uploadImage(
    "/commercial-janitorial-cleaning-north-vancouver.jpg",
    "Industrial cleaning in Greater Vancouver"
  ),
  metaTitle: "Industrial Cleaning Services | Mint Sanitary",
  metaDescription:
    "Industrial cleaning for warehouses, manufacturing plants, and distribution centers across Greater Vancouver. WHMIS-compliant crews, flexible scheduling. Free estimates.",
  sections,
  published: true,
});

console.log("\n✓ Industrial cleaning migrated");
