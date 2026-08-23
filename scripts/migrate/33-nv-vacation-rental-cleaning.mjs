import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  heading,
  para,
  imageBlock,
} from "./lib.mjs";

/**
 * /north-vancouver/vacation-rental-cleaning — migrated from the hand-coded
 * page now parked at /north-vancouver/vacation-rental-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "What Our Vacation Rental Cleaning Includes" is a card grid where every
 *    card carries its own photo and a bulleted item list. whatsIncluded
 *    cards have no image field, so — to avoid dropping six real photos —
 *    this section became Rich Text instead: heading + image + bullet
 *    paragraphs per area, in source order.
 *  - "Meeting Airbnb and VRBO Cleanliness Standards" (plain cards, no
 *    images) is the section that gets whatsIncluded, since it's the page's
 *    genuine plain-card grid.
 *  - "Turnover Options" has three named options with no per-option price
 *    (the single $120–$400 range applies to all of them together), so it's
 *    modeled as a `pricing` section with range: "" per tier and the pricing
 *    paragraph folded into notes, per the established range:"" convention.
 *  - The closing "Neighbourhoods We Serve" section carries four separate
 *    links across two paragraphs (service areas page, North Vancouver area
 *    page, general vacation rental page, NV house cleaning), built as manual
 *    multi-link blocks since paraWithLink only supports one link per block.
 */

function multiLinkPara(parts) {
  const markDefs = [];
  const children = [];
  for (const part of parts) {
    if (part.href) {
      const k = key("lnk");
      markDefs.push({ _key: k, _type: "link", href: part.href });
      children.push({ _type: "span", _key: key("s"), text: part.text, marks: [k] });
    } else {
      children.push({ _type: "span", _key: key("s"), text: part.text, marks: [] });
    }
  }
  return { _type: "block", _key: key("b"), style: "normal", markDefs, children };
}

const whatsIncluded = [
  [
    "Linen and Towel Reset",
    "/see-difference-towels-detail.webp",
    [
      "Every bed stripped and remade with fresh linens",
      "Towels replaced, folded, and staged the way your listing photos show them",
      "On-site laundry or linen service coordination available",
    ],
  ],
  [
    "Bathroom Deep Clean",
    "/see-difference-bathroom-marble-double.webp",
    [
      "Toilets, showers, tubs, sinks, and mirrors sanitized and left streak-free",
      "Grout scrubbed and drains checked",
      "Toiletries restocked and arranged so the bathroom looks untouched by the last guest",
    ],
  ],
  [
    "Kitchen Reset",
    "/recurring-cleaning-kitchen-result-north-vancouver.jpg",
    [
      "Dishes washed and put away",
      "Counters, stovetop, inside the microwave, and the sink sanitized",
      "Fridge wiped down, trash pulled, fresh liners put in",
    ],
  ],
  [
    "Living Areas and Bedrooms",
    "/spring-cleaned-living-room-north-vancouver.jpg",
    [
      "Dusting, vacuuming, and mopping of every room",
      "Cushions fluffed, remotes and electronics wiped down",
      "Furniture returned to its staged position, matching your listing photos",
    ],
  ],
  [
    "Supply Restocking",
    "/eco-friendly-cleaning-products-north-vancouver.jpg",
    [
      "Host-provided toiletries and paper goods restocked",
      "Coffee, tea, and other guest essentials topped up",
      "Inventory checked on every visit, low items flagged",
    ],
  ],
  [
    "Photo Documentation",
    "/airbnb-cleaning-vancouver.png",
    [
      "Time-stamped photos of every room sent after each clean",
      "Confirm the unit is guest-ready without leaving your house",
      "Photos double as records for Airbnb damage claims",
    ],
  ],
];

const meetingStandards = [
  ["Mold-free bathrooms", "Grout gets scrubbed and problem areas treated before mold has a chance to build up."],
  ["Pest-free kitchens", "Our kitchen and dining protocol removes food residue and closes off the spots that attract pests."],
  ["Dust-free surfaces", "Ceiling fans, baseboards, window sills, and vent covers all get attention, not just the surfaces at eye level."],
  ["The spots most cleaners skip", "Under beds, behind toilets, inside microwaves, light switches, remote controls, and door handles all get checked on every North Vancouver turnover."],
];

const turnoverOptions = [
  ["Standard Turnover", "A full reset between guests: linen and towel replacement, bathroom and kitchen deep clean, floor care, trash removal, and photo documentation."],
  ["Deep Turnover", "Built for after longer stays or high-traffic bookings. Adds inside-appliance cleaning, grout scrubbing, and baseboard detailing on top of the standard turnover."],
  ["Recurring Turnover Plan", "For hosts with predictable booking patterns. We sync our schedule to your Airbnb or VRBO calendar and offer preferred scheduling and competitive rates for ongoing North Vancouver turnovers."],
];

const whyChooseItems = [
  ["Same-day turnovers", "When your schedule allows it, we support tight checkout-to-check-in windows."],
  ["Photo documentation", "Sent after every clean, so you can confirm guest-readiness without driving over."],
  ["Eco-friendly products", "Safe for guests, pets, and the environment."],
  ["Supply restocking with low-inventory alerts", "So you're not caught without toilet paper."],
  ["Consistent, trained teams", "Who learn your property's layout and your standards."],
  ["Transparent pricing", "Free estimates and no contracts."],
  ["24-hour satisfaction guarantee", "On every clean."],
];

const processSteps = [
  ["Initial assessment", "We walk your property to learn its layout, your staging preferences, where supplies live, and any special instructions."],
  ["Flexible scheduling", "We build our schedule around your bookings, including same-day, back-to-back, and last-minute turnovers."],
  ["Professional execution", "Our team works from a checklist customized to your property, not a generic template."],
  ["Photo documentation", "You get time-stamped photos after every clean, sent before your next guest arrives."],
  ["Satisfaction guarantee", "If something's missed, we come back and fix it at no charge within 24 hours."],
];

const faqItems = [
  ["Can you handle same-day turnover cleaning for a North Vancouver rental?", "Yes, when our schedule allows it. We support tight checkout-to-check-in windows and often accommodate same-day requests for North Vancouver hosts with just a few hours notice."],
  ["What is included in vacation rental turnover cleaning in North Vancouver?", "A North Vancouver turnover includes a full linen and towel reset, bathroom and kitchen deep clean, dusting and vacuuming of living areas, floor care, trash removal, supply restocking, and photo documentation sent after the clean."],
  ["Do I need to be at the property during a North Vancouver turnover clean?", "No. Most North Vancouver hosts give us secure entry through a lockbox or smart lock. We complete the service, lock up, and send photo confirmation once the unit is guest-ready."],
  ["Can you restock guest supplies at my North Vancouver vacation rental?", "Yes. We restock host-provided toiletries, paper goods, coffee, tea, and other basic essentials at every North Vancouver turnover. We track inventory and let you know when something runs low."],
  ["Do you offer recurring turnover schedules for North Vancouver properties?", "Yes. Our Recurring Turnover Plan supports predictable booking patterns and can sync directly with your Airbnb or VRBO calendar for hosts across North Vancouver."],
  ["How long does a typical vacation rental turnover take in North Vancouver?", "A one-bedroom North Vancouver unit takes 60 to 90 minutes, and a two-bedroom unit takes 90 to 120 minutes. Larger properties or deep cleans in areas like Lynn Valley or Dollarton can take longer."],
  ["Do you handle laundry as part of a North Vancouver turnover?", "We can coordinate on-site laundry or work with your linen service. Laundry turnaround is factored into scheduling so back-to-back bookings at your North Vancouver rental stay on track."],
  ["What happens if a guest leaves my North Vancouver rental in bad shape?", "We handle heavy-mess turnovers, including excess trash and stains. If there's damage, we document it with photos so you have records for any claim, which matters for North Vancouver hosts managing Airbnb disputes."],
  ["Are your cleaning products eco-friendly for North Vancouver vacation rentals?", "Yes, all products we use are non-toxic and safe for guests, pets, and the environment. Many North Vancouver hosts highlight this in their listings, since guests increasingly look for eco-conscious properties."],
  ["How much does vacation rental turnover cleaning cost in North Vancouver?", "Pricing runs from $120 to $400 depending on property size, condition, and the services included, whether that's a rental near Capilano or a larger home near Seymour Heights. Call for a free estimate, or request a quote at /rates. First bookings qualify for 10% off with code MINT26."],
];

console.log("→ /north-vancouver/vacation-rental-cleaning");

const includedBody = [];
for (const [title, image, items] of whatsIncluded) {
  includedBody.push(
    heading(title),
    await imageBlock(image, `${title} for North Vancouver vacation rentals`),
    ...items.map((item) => para(`• ${item}`))
  );
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why North Vancouver Hosts Choose Mint Sanitary",
    body: [
      para(
        "North Vancouver's short-term rental market runs on tight timelines. Guests fly into YVR, drive up from the ferry, or hike down from Grouse and expect a spotless unit waiting for them. A late or sloppy turnover costs you a booking, or worse, a bad review. We built our vacation rental service around what North Vancouver hosts need: same-day turnovers when your schedule allows it, photo documentation sent after every clean, so you can confirm guest-readiness without driving over, eco-friendly products that are safe for guests, pets, and the environment, supply restocking with low-inventory alerts, consistent, trained teams who learn your property's layout, and transparent pricing with free estimates and no contracts."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What Our North Vancouver Vacation Rental Cleaning Includes",
    body: [
      para("Every turnover follows a checklist built for short-term rentals, not a standard house clean."),
      ...includedBody,
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Meeting Airbnb and VRBO Cleanliness Standards in North Vancouver",
    intro:
      "Platform reviews live and die on the small stuff. Our checklist targets the details Airbnb and VRBO guests notice, and the details that trigger complaints if they're missed.",
    cards: meetingStandards.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Cleanliness Affects Your North Vancouver Rental's Ratings and Revenue",
    body: [
      para(
        "Cleanliness is the top reason vacation rental listings lose stars. From what we see across North Vancouver properties, cleanliness complaints show up in more than 80% of negative vacation rental reviews. That single category can undo months of good reviews. Airbnb's search algorithm weighs your cleanliness score heavily. Listings with 4.8 stars or higher for cleanliness tend to book more nights and can charge higher rates. A single bad score can drag your average below the Superhost threshold and cost you the badge. Back-to-back bookings raise the stakes further. If your North Vancouver rental can't turn around fast and reliably, you lose the ability to accept tight-turnaround bookings, and those bookings are often the most profitable ones on your calendar."
      ),
      heading("Turnover Times for North Vancouver Vacation Rentals"),
      para(
        "One-bedroom units take 60 to 90 minutes, two-bedroom units take 90 to 120 minutes, and larger properties or deep cleans take more time, scheduled around your checkout and check-in windows. We plan our North Vancouver team's day around your listing calendar so a clean never runs into a check-in."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Turnover Options for North Vancouver Hosts",
    intro: "Not every stay needs the same level of clean. We offer three turnover types for North Vancouver properties.",
    tiers: turnoverOptions.map(([title, body]) => ({ _key: key("tier"), title, range: "", body })),
    notes: [
      "Turnover pricing runs from $120 to $400, depending on property size, condition, whether linen and laundry are included, restocking needs, and how often you book us. For an exact number, request a free estimate at /rates. First-time hosts can apply MINT26 for 10% off.",
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "How Our North Vancouver Turnover Cleaning Process Works",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Hosts Choose Mint Sanitary",
    image: await uploadImage(
      "/mint-sanitary-service-van-north-vancouver.jpg",
      "Mint Sanitary service van in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Neighbourhoods We Serve Across North Vancouver",
    body: [
      para(
        "We clean vacation rentals throughout North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Capilano, Norgate, Seymour Heights, Dollarton, and Blueridge. Waterfront condos near Lower Lonsdale, hillside homes near Edgemont Village, and family rentals near Deep Cove all get the same checklist and the same guarantee."
      ),
      multiLinkPara([
        { text: "We also serve West Vancouver, Vancouver, and Burnaby. Check our full list of covered areas on the " },
        { text: "North Vancouver service area page", href: "/service-areas" },
        { text: ", or see our " },
        { text: "North Vancouver page", href: "/north-vancouver" },
        { text: " for an overview of everything we offer locally. If your rental sits outside North Vancouver, our " },
        { text: "vacation rental cleaning services", href: "/services/vacation-rental-cleaning" },
        { text: " page covers the same turnover service across Greater Vancouver. Hosts who also need standard home cleaning between longer stays can check our " },
        { text: "house cleaning in North Vancouver", href: "/north-vancouver/house-cleaning" },
        { text: " page." },
      ]),
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
    heading: "Ready to Hand Off Your Turnovers?",
    body: "Get a free, no-contract quote for your North Vancouver vacation rental, or call us directly at 236-688-3248 to talk through your booking calendar.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "vacation-rental-cleaning", {
  title: "Vacation Rental Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "vacation-rental-cleaning"),
  heroHeading: "Vacation Rental Cleaning in North Vancouver",
  heroIntro:
    "Running a short-term rental in North Vancouver means racing the clock between guests. A checkout at 11 a.m. and a check-in at 3 p.m. doesn't leave room for a slow clean or a missed detail. Mint Sanitary handles vacation rental turnovers for hosts across North Vancouver, from condos in Lower Lonsdale to family homes near Lynn Valley and Deep Cove. We're a local North Vancouver cleaning company with a 4.9 out of 5 rating across 120+ reviews. Use code MINT26 for 10% off your first turnover.",
  heroImage: await uploadImage(
    "/vacation-rental-cleaning-north-vancouver.jpg",
    "Vacation rental cleaning in North Vancouver"
  ),
  metaTitle: "Vacation Rental Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "North Vancouver vacation rental cleaning for Airbnb and VRBO hosts. Fast turnovers, photo proof, eco-friendly supplies. Free quote at /rates.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver vacation rental cleaning migrated");
