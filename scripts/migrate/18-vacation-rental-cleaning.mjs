import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  heading,
  para,
  paraWithLink,
  imageBlock,
} from "./lib.mjs";

/**
 * /services/vacation-rental-cleaning — migrated from the hand-coded page now
 * parked at /services/vacation-rental-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "What's Included in a Mint Sanitary Turnover" was a card grid with a
 *    photo per card (six images). whatsIncluded cards have no image field,
 *    so it became Rich Text (heading + image + bulleted-as-paragraphs items
 *    per area) to keep every photo. "Meeting Airbnb and VRBO Cleanliness
 *    Standards" has no images and is a clean title/body checklist, so it
 *    took the one whatsIncluded slot instead.
 *  - The old page's AccordionWithImage block ("Why Hosts Across Greater
 *    Vancouver Choose Mint Sanitary") already carried its own image and
 *    title/body items — a direct, lossless fit for whyChoose, including its
 *    non-default "View Rates" button label.
 *  - The trailing "How Long Does a Turnover Take?" paragraph and the pricing
 *    paragraph that precedes it both had to leave the Pricing section: one
 *    has no tier of its own, and the other contains a "/rates" link that
 *    Pricing's plain-string notes field can't carry as a real link. Both
 *    moved into a short Rich Text block immediately after Pricing, keeping
 *    the link live via paraWithLink and nothing reordered.
 *  - "Areas We Serve" has three inline links in one paragraph. paraWithLink
 *    only carries one link per paragraph, so a small local `paraLinks`
 *    helper (same block/markDef shape as paraWithLink, generalized to
 *    multiple marks) keeps every link a real mark in a single paragraph.
 */

/** Multi-link paragraph. `parts` alternates plain strings and [text, href] link tuples. */
function paraLinks(parts) {
  const markDefs = [];
  const children = [];
  for (const part of parts) {
    if (Array.isArray(part)) {
      const [text, href] = part;
      const linkKey = key("lnk");
      markDefs.push({ _key: linkKey, _type: "link", href });
      children.push({ _type: "span", _key: key("s"), text, marks: [linkKey] });
    } else {
      children.push({ _type: "span", _key: key("s"), text: part, marks: [] });
    }
  }
  return { _type: "block", _key: key("b"), style: "normal", markDefs, children };
}

const whatsIncludedAreas = [
  ["Linens and Towels", "/see-difference-towels-detail.webp", [
    "Every bed fully stripped and reset with fresh linens",
    "Towels replaced, folded, and staged the way your listing photos show them",
    "Off-site laundry coordination available if needed",
  ]],
  ["Bathroom Deep Clean", "/see-difference-bathroom-marble-double.webp", [
    "Toilets, showers, tubs, sinks, and mirrors sanitized and left streak-free",
    "Grout scrubbed and drains checked",
    "Toiletries restocked and arranged for the next guest",
  ]],
  ["Kitchen Reset", "/recurring-cleaning-kitchen-result-north-vancouver.jpg", [
    "Dishes washed and put away",
    "Counters, stovetop, inside the microwave, and the sink sanitized",
    "Fridge wiped down, trash removed, fresh liners placed",
  ]],
  ["Living Areas and Bedrooms", "/spring-cleaned-living-room-north-vancouver.jpg", [
    "Dusting, vacuuming, and mopping every room",
    "Cushions fluffed, remotes and electronics wiped down",
    "Furniture returned to the staged position from your listing photos",
  ]],
  ["Supply Restocking", "/eco-friendly-cleaning-products-north-vancouver.jpg", [
    "Host-provided toiletries and paper goods restocked",
    "Coffee, tea, and basic guest essentials topped up",
    "Inventory check on every visit",
  ]],
  ["Photo Documentation", "/airbnb-cleaning-vancouver.png", [
    "Time-stamped photos of each room sent after every turnover",
    "Confirm the property is guest-ready without setting foot inside",
    "Photos double as documentation for damage claims",
  ]],
];

const meetingStandards = [
  ["Mold-free bathrooms", "Grout gets scrubbed and known problem spots get treated before they turn into a review complaint."],
  ["Pest-free kitchens", "Food residue is the main draw for pests, so counters, appliances, and dining areas get cleared of it every visit."],
  ["Dust-free surfaces", "Ceiling fans, baseboards, window sills, and vent covers get attention, not just the surfaces guests notice first."],
  ["The spots hosts forget", "Under beds, behind toilets, inside microwaves, light switches, remote controls, and door handles all get checked on every clean."],
];

const turnoverOptions = [
  ["Standard Turnover", "A full reset between guests. Linens and towels get replaced, bathrooms and kitchens get a deep clean, floors get cared for, trash gets removed, and photos get sent when the job is done."],
  ["Deep Turnover", "Recommended after a longer stay or a high-traffic booking. Everything in the standard turnover, plus inside appliances, grout scrubbing, baseboards, and a more thorough reset of the whole unit."],
  ["Recurring Turnover Plan", "Built for hosts with a predictable booking pattern. We coordinate the cleaning schedule around your Airbnb or VRBO calendar and offer preferred scheduling with competitive rates for repeat bookings."],
];

const whyChooseItems = [
  ["Same-day turnovers", "Back-to-back bookings and last-minute schedule changes get handled without disrupting your calendar."],
  ["Photo proof after every clean", "No guessing whether the unit is ready. You get photos of every room before the next guest arrives."],
  ["Eco-friendly products", "Our plant-based, non-toxic cleaning products are safe around guests and pets, and they don't leave a strong chemical smell behind when someone walks in."],
  ["Supply restocking built in", "Toiletries, paper goods, and guest essentials get checked and topped up automatically, with alerts when something needs reordering."],
  ["Consistent teams", "The same trained cleaners return to your property over time, so they learn your layout, your staging preferences, and where everything belongs."],
  ["Background-checked and insured", "Every team member is background-checked, bonded, and insured before they ever step into your rental."],
  ["A 24-hour satisfaction guarantee", "If something's missed, we come back and fix it at no charge."],
];

const processSteps = [
  ["Initial assessment", "We walk through your property to learn the layout, your staging preferences, and where supplies live."],
  ["Flexible scheduling", "Cleanings get built around your booking calendar, including same-day, back-to-back, and last-minute requests."],
  ["Professional execution", "Each visit follows a checklist customized to your property, not a generic template."],
  ["Photo documentation", "Time-stamped photos land in your inbox after every clean."],
  ["Satisfaction guarantee", "If anything falls short, we return within 24 hours to fix it."],
];

const faqItems = [
  ["How fast can you turn around a unit between guests?", "Most 1-bedroom units take 60 to 90 minutes, and 2-bedroom units take 90 to 120 minutes. Larger properties or units that need a deep clean take longer, and we'll scope the time during your quote."],
  ["Do you handle same-day turnovers?", "Yes. Same-day service is one of the main reasons hosts switch to us, especially when checkout and check-in fall on the same day."],
  ["What's the difference between a Standard and a Deep Turnover?", "A Standard Turnover covers linens, bathrooms, kitchens, floors, and trash removal for a normal guest changeover. A Deep Turnover adds inside-appliance cleaning, grout scrubbing, and baseboards, and we recommend it after longer stays or high-traffic bookings."],
  ["How much does vacation rental cleaning cost?", "Turnovers range from $120 to $400 depending on property size, condition after checkout, linen needs, restocking, and whether you book recurring service. For a precise number, request a quote at /rates."],
  ["Do you restock supplies like toiletries and coffee?", "Yes. Restocking host-provided toiletries, paper goods, and basic guest essentials is included with every turnover, along with an inventory check so you can reorder before you run out."],
  ["How do I know the unit is ready before my next guest checks in?", "We send time-stamped photos of every room after each clean, so you can confirm the property is guest-ready from anywhere."],
  ["What areas do you clean vacation rentals in?", "We serve hosts across Greater Vancouver, including West Vancouver, Vancouver, Burnaby, New Westminster, Maple Ridge, and North Vancouver, where we're based. See our full service area list for details."],
  ["What products do you use?", "Plant-based, non-toxic products throughout. They're safe for guests and pets and don't leave a strong smell behind before check-in."],
  ["Can you work around my Airbnb or VRBO calendar?", "Yes. We build recurring turnover schedules around your booking calendar and can accommodate last-minute changes when a guest books unexpectedly."],
  ["Is there a discount for first-time hosts?", "First-time customers get 10% off with code MINT26. There are no contracts, so you can try a turnover before committing to a recurring plan."],
];

console.log("→ /services/vacation-rental-cleaning");

const heroImage = await uploadImage(
  "/vacation-rental-cleaning-north-vancouver.jpg",
  "Vacation rental turnover cleaning in Greater Vancouver"
);

const whatsIncludedBody = [];
for (const [title, image, items] of whatsIncludedAreas) {
  whatsIncludedBody.push(heading(title), await imageBlock(image, title), ...items.map((i) => para(i)));
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Every clean follows the same checklist, no matter the property type: downtown Vancouver condo, Burnaby townhouse, or Maple Ridge house. Beds get stripped and remade. Bathrooms and kitchens get scrubbed and sanitized. Supplies get restocked. Photos get sent so you can confirm the property is guest-ready without driving over yourself. If your property sits in North Vancouver specifically, our ",
        "vacation rental cleaning in North Vancouver",
        "/north-vancouver/vacation-rental-cleaning",
        " page covers neighbourhood-level detail for that area. This page is built for hosts managing properties anywhere across the region."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Turnover Cleaning Affects Your Bookings",
    body: [
      para(
        "Cleanliness drives more guest complaints than any other single issue. In our experience, most negative reviews on vacation rental listings mention something related to how clean the unit was at check-in. Properties that hold a 4.8-plus cleanliness score tend to book more nights and command higher rates. Airbnb and VRBO both use cleanliness scores in their search ranking, so a few bad reviews can quietly push your listing down the page. Fast, reliable turnovers also protect your calendar. When a cleaning team can reset a unit same-day, you can accept back-to-back bookings instead of blocking buffer nights between guests. Over a year, that adds up to real revenue."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What's Included in a Mint Sanitary Turnover",
    body: whatsIncludedBody,
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Meeting Airbnb and VRBO Cleanliness Standards",
    intro: "Guest platforms hold rentals to a higher bar than a typical home clean. Our checklist is built around that bar:",
    cards: meetingStandards.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Turnover Options",
    tiers: turnoverOptions.map(([title, body]) => ({ _key: key("tier"), title, range: "", body })),
    notes: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Turnovers run $120 to $400, depending on property size, condition after checkout, linen and laundry needs, restocking requirements, and whether you're on a recurring schedule. For an exact number based on your property, ",
        "get a quote",
        "/rates",
        ". First-time customers save 10% with code MINT26."
      ),
      heading("How Long Does a Turnover Take?"),
      para(
        "One-bedroom units run 60 to 90 minutes, two-bedroom units run 90 to 120 minutes, and larger properties or units needing a deep clean take longer, scoped during your quote. These windows let hosts run same-day turnovers between an 11 a.m. checkout and a 3 or 4 p.m. check-in, which is often the tightest gap in a booking calendar."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Hosts Across Greater Vancouver Choose Mint Sanitary",
    image: await uploadImage(
      "/mint-sanitary-service-van-north-vancouver.jpg",
      "Mint Sanitary service van"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "How It Works",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Areas We Serve",
    body: [
      paraLinks([
        "Mint Sanitary is based in ",
        ["North Vancouver", "/north-vancouver"],
        " and cleans vacation rentals across ",
        ["Greater Vancouver", "/service-areas"],
        ", including West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. We offer 7-day availability, so a checkout on a Sunday gets handled the same as one on a Wednesday. Looking for standard residential cleaning instead of turnovers? Visit our ",
        ["house cleaning", "/services/house-cleaning"],
        " page.",
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
    heading: "Ready to Book?",
    body: "Get a free quote and see what a Mint Sanitary turnover costs for your property, or call 236-688-3248 to talk through your schedule directly. First-time customers save 10% with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "vacation-rental-cleaning", {
  title: "Vacation Rental Cleaning for Airbnb and VRBO Hosts Across Greater Vancouver",
  name: "Vacation Rental Cleaning",
  tileDescription: "Turnover cleaning for Airbnb and short-term rental hosts.",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Vacation Rental Cleaning for Airbnb and VRBO Hosts Across Greater Vancouver",
  heroIntro:
    "Guests judge a rental the moment they open the door. A clean unit earns a good review. A rushed one costs a booking, a star rating, or both. Mint Sanitary handles turnover cleaning for Airbnb and VRBO hosts across Greater Vancouver, and our teams travel to your property on your schedule, not the other way around.",
  heroImage,
  metaTitle: "Vacation Rental Cleaning | Greater Vancouver Turnovers",
  metaDescription:
    "Airbnb and VRBO turnover cleaning across Greater Vancouver. Fast, reliable resets with photo proof after every clean. Free quote at Mint Sanitary.",
  sections,
  published: true,
});

console.log("\n✓ Vacation rental cleaning migrated");
