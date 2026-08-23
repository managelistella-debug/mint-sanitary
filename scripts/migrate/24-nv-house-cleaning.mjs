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
 * /north-vancouver/house-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/house-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The page had two checklist card grids (Standard Clean, Recurring
 *    Cleaning). Whats Included is single-instance, so Standard Clean's
 *    cards became the Whats Included section; Recurring Cleaning's cards
 *    became heading/paragraph pairs in a Rich Text block, preserving every
 *    bullet as prose.
 *  - The Recurring section's "What's Not Included" callout became the same
 *    Whats Included section's exclusions fields (the field exists for
 *    exactly this shape); its one bulleted link (to deep cleaning) was
 *    pulled into a short follow-up Rich Text paragraph so the link stays
 *    live — exclusionsBody is plain text and can't carry a link mark.
 *  - Booking Steps mapped to Process & Checklist's steps (the only
 *    numbered-step content on this page).
 *  - The two pricing cards (Standard/Deep) plus the Common Add-Ons chips
 *    became one Pricing section; the add-ons list is a note since it's
 *    flat pricing text, not tiered.
 */

const standardChecklist = [
  ["Living Areas", [
    "Dust all surfaces, shelves, and furniture",
    "Vacuum carpets and rugs, sweep and mop hard floors",
    "Wipe light switches, door handles, and baseboards",
    "Remove cobwebs",
    "Clean mirrors and glass surfaces",
    "Empty trash and replace liners",
  ]],
  ["Kitchen", [
    "Wipe and sanitize countertops and backsplash",
    "Clean the exterior of all appliances",
    "Scrub and sanitize the sink and faucet",
    "Wipe cabinet fronts and drawer handles",
    "Sweep and mop the floor",
    "Clean the stovetop and range hood exterior",
  ]],
  ["Bathrooms", [
    "Scrub and sanitize the toilet inside and behind",
    "Clean and sanitize the sink, faucet, and countertop",
    "Scrub the tub and shower walls, door, and fixtures",
    "Clean mirrors",
    "Wipe cabinet fronts and towel bars",
    "Sweep and mop the floor",
  ]],
  ["Bedrooms", [
    "Dust all surfaces, nightstands, and dressers",
    "Vacuum carpets or sweep and mop hard floors",
    "Make beds and tuck linens (change linens on request)",
    "Wipe light switches and door handles",
    "Remove cobwebs",
  ]],
  ["General", [
    "Dust ceiling fan blades within reach",
    "Wipe window sills and ledges",
    "Vacuum stairs and hallways",
    "Spot-clean marks on walls",
    "Wipe railings and banisters",
  ]],
];

const recurringChecklist = [
  ["Bathrooms", [
    "Scrub and sanitize toilets, tubs, and showers",
    "Clean mirrors and glass surfaces",
    "Wipe down the vanity, countertops, and fixtures",
    "Mop bathroom floors",
  ]],
  ["Kitchen", [
    "Clean and sanitize countertops and the sink",
    "Wipe down the stovetop, appliance exteriors, and cabinet fronts",
    "Clean inside the microwave",
    "Take out trash and replace liners",
  ]],
  ["Living Spaces", [
    "Dust all surfaces, shelves, and decor",
    "Wipe light switches, door handles, and baseboards",
    "Vacuum upholstery and cushions as needed",
    "Clean mirrors and glass surfaces",
  ]],
  ["Bedrooms", [
    "Dust all surfaces and furniture",
    "Make beds and tidy linens",
    "Vacuum floors, under beds, and closet floors",
    "Wipe down nightstands, dressers, and shelves",
  ]],
  ["Floors", [
    "Vacuum all carpeted areas",
    "Mop all hard floors",
    "Spot-clean floor edges and corners",
  ]],
];

const specialtyLinks = [
  ["Deep Cleaning in North Vancouver", "/north-vancouver/deep-cleaning", "for homes that need more than a routine wipe-down, tackling baseboards, inside appliances, and buildup."],
  ["Move-In/Move-Out Cleaning in North Vancouver", "/north-vancouver/move-in-move-out-cleaning", "gets a space spotless for a fresh start or a full deposit back."],
  ["Vacation Rental Cleaning in North Vancouver", "/north-vancouver/vacation-rental-cleaning", "hosts near Deep Cove and Lower Lonsdale rely on this for fast turnovers between guests."],
  ["Post-Construction Cleaning in North Vancouver", "/north-vancouver/post-construction-cleaning", "clears out dust, debris, and residue after a renovation or new build."],
  ["Upholstery Cleaning in North Vancouver", "/north-vancouver/upholstery-cleaning", "lifts stains and refreshes fabric on sofas, chairs, and area rugs."],
];

const whyChooseItems = [
  ["Eco-friendly products", "All cleaning products are biodegradable and safe for kids, pets, and indoor air quality."],
  ["Transparent pricing", "Free estimates with a clear scope and no hidden fees."],
  ["Flexible scheduling", "Available 7 days a week, including weekends and holidays."],
  ["Vetted teams", "Every team member is background-checked, bonded, and fully insured."],
  ["Consistency", "Trained professional teams, with the same team sent whenever possible."],
  ["Satisfaction guarantee", "If something's missed, we return within 24 hours to fix it at no extra charge."],
  ["No contracts", "Recurring schedules can be paused, adjusted, or canceled anytime."],
  ["First clean discount", "New customers save 10% off their first clean with code MINT26."],
];

const bookingSteps = [
  ["Book by phone or online", "Tell us what you need and where you're located."],
  ["Get a free estimate", "A clear, transparent quote before any work starts."],
  ["Confirm your schedule", "Pick a time that works, any day of the week."],
  ["Enjoy the clean", "Your team walks through the home with you and gets to work."],
];

const addOns = [
  "Inside oven $30",
  "Inside fridge $30",
  "Inside windows $30 per window",
  "Inside cabinets/closets $45",
  "Wall/baseboard marks $25 per room",
  "Balconies swept $30",
  "Blinds washed $30 per room",
  "Walls washed $50 per room",
  "Dishes washed $15 flat",
  "Linens changed $15 per bed",
  "Carpet cleaning add-on $60 per room",
];

const faqItems = [
  ["How much does house cleaning cost in North Vancouver?", "Standard cleaning starts at $220 for a 500 to 600 square foot home and scales up to $620 for 4000 to 5000 square feet, since most jobs are quoted by size and scope. See our rates page for the full table."],
  ["What's the difference between standard and deep cleaning in North Vancouver?", "Standard cleaning covers every main room top to bottom for regular upkeep. Deep cleaning in North Vancouver adds inside appliances, baseboards, and detail work that builds up over time. Many clients start with a deep clean, then switch to recurring standard visits."],
  ["How long does a standard house cleaning take in North Vancouver?", "Most standard cleans take 2 to 4 hours. A one-bedroom condo in Lower Lonsdale might be finished in about 90 minutes, while a three-bedroom house in Lynn Valley usually takes 3 to 4 hours."],
  ["Can I schedule weekly cleaning in North Vancouver without a contract?", "Yes. Recurring cleaning is available weekly, biweekly, monthly, or on a custom schedule with no contract."],
  ["Is recurring cleaning cheaper than one-time cleaning in North Vancouver?", "Yes. Recurring plans are priced lower per visit because ongoing maintenance takes less work each time."],
  ["What's included in a recurring cleaning visit in North Vancouver?", "Bathrooms, kitchen, living spaces, bedrooms, and floors, with a slightly lighter scope than a first standard clean since the home is already maintained."],
  ["What's not included in a house cleaning in North Vancouver?", "Inside the oven, fridge, and dishwasher, inside window washing, moving heavy furniture, deep carpet shampooing, and garage or attic cleaning. Most are available as add-ons or through deep cleaning."],
  ["Which North Vancouver neighborhoods does Mint Sanitary serve?", "Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Norgate, Pemberton Heights, Capilano, Dollarton, and Blueridge, plus West Vancouver, Vancouver, Burnaby, and the rest of Greater Vancouver."],
  ["Is Mint Sanitary's North Vancouver cleaning team background-checked and insured?", "Yes. Every team member is vetted, background-checked, bonded, and fully insured."],
  ["Does Mint Sanitary use eco-friendly products for house cleaning in North Vancouver?", "Yes. All house cleaning uses biodegradable products safe for kids, pets, and indoor air quality."],
  ["What happens if I'm not happy with my house cleaning in North Vancouver?", "Every clean comes with a 24-hour satisfaction guarantee. If something's missed, we return to fix it at no extra charge within 24 hours."],
  ["Can I book weekend or holiday house cleaning in North Vancouver?", "Yes. We're available 7 days a week, including weekends and holidays."],
  ["How do I book house cleaning in North Vancouver?", "Contact us by phone or online, get a free estimate, confirm a schedule that works for you, and your team walks through the home before starting."],
  ["Do I get a discount on my first house cleaning in North Vancouver?", "Yes. New customers save 10% off their first clean with code MINT26."],
  ["Does Mint Sanitary offer move-out cleaning in North Vancouver for renters?", "Yes. Our move-in/move-out cleaning in North Vancouver is a popular choice for renters. One recent client used it before their move-out inspection and got their full deposit back."],
  ["Can Mint Sanitary clean condos and apartment towers in North Vancouver?", "Yes. Waterfront condo towers near Lower Lonsdale are common on our schedule, and we plan visits around building access and elevator booking windows."],
  ["Does Mint Sanitary clean commercial or office spaces in North Vancouver?", "We focus mainly on residential house and apartment cleaning, but we also clean for commercial and institutional clients, including offices, healthcare facilities, and construction sites."],
  ["How does North Vancouver's rainy climate affect house cleaning?", "Wet winters mean more mud, grit, and moisture tracked into entryways and floors. A recurring cleaning schedule helps keep that buildup under control between visits."],
  ["Does Mint Sanitary serve areas near North Vancouver, like West Vancouver?", "Yes. Alongside North Vancouver, we also serve West Vancouver, Vancouver, Burnaby, and other parts of Greater Vancouver."],
];

console.log("→ /north-vancouver/house-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in a Standard Clean in North Vancouver",
    intro:
      "A standard clean is Mint Sanitary's most popular service for North Vancouver homes and apartments, covering every main living space top to bottom.",
    cards: standardChecklist.map(([title, items]) => ({ _key: key("card"), title, items })),
    exclusionsTitle: "What's Not Included in North Vancouver Recurring Cleaning",
    exclusionsBody:
      "We'd rather be upfront than surprise you at the door: inside the oven, refrigerator, or dishwasher (available with deep cleaning in North Vancouver); inside windows or exterior window washing; moving heavy furniture; deep carpet shampooing or stain treatment; garage, attic, or storage area cleaning; laundry or dishwashing (linen changes available as an add-on, about $15 to $25).",
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "Most standard cleans in North Vancouver take 2 to 4 hours, depending on the size and condition of the home. A one-bedroom condo in Lower Lonsdale might be done in about 90 minutes. A three-bedroom house in Lynn Valley or Blueridge usually needs 3 to 4 hours."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Recurring Cleaning: Keep Your North Vancouver Home Consistently Clean",
    body: [
      para(
        "For homeowners who want ongoing help instead of a one-off visit, Mint Sanitary offers recurring cleaning in North Vancouver on a weekly, biweekly, monthly, or custom schedule. Recurring cleans focus on maintaining a home that's already in good shape, so the scope is slightly lighter than a first-time standard clean."
      ),
      ...recurringChecklist.flatMap(([title, items]) => [heading(title), para(items.join("; "))]),
      para(
        "Recurring plans are priced lower per visit than a one-time standard clean, since our team spends less time per visit once your home is on a regular rotation. No contract attached: pause, adjust, or cancel your schedule anytime."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Deep cleaning covers what a recurring visit skips, including inside the oven, refrigerator, and dishwasher — see our ",
        "deep cleaning in North Vancouver",
        "/north-vancouver/deep-cleaning",
        " page for details."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Specialty House Cleaning Services in North Vancouver",
    body: specialtyLinks.flatMap(([label, href, desc]) => [
      paraWithLink("", label, href, ""),
      para(desc),
    ]),
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Homeowners Choose Mint Sanitary",
    intro:
      "North Vancouver mixes older character homes in Lower Lonsdale and Pemberton Heights with newer condo towers along the waterfront, plus everything in between across Lynn Valley, Norgate, and Capilano. Each type of home collects dirt differently, and our teams adjust for it.",
    image: await uploadImage(
      "/mint-sanitary-team-north-vancouver.jpg",
      "Mint Sanitary house cleaning team in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "How Booking Works in North Vancouver",
    steps: bookingSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "North Vancouver clients have left more than 120 reviews on Google, averaging 4.9 out of 5. A Lynn Valley client with young kids praised a deep clean for how thorough it was and for the eco-friendly products used around her family. A Lower Lonsdale office manager has praised the team's punctuality. A North Vancouver renter who booked a move-out clean got their full damage deposit back. A biweekly recurring client likes that the same team shows up every visit and that pricing stays fair. Another client had carpets and upholstery cleaned after a renovation and was happy with the results."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "House Cleaning Rates in North Vancouver",
    intro:
      "Pricing depends mostly on the size of your home and the scope of work, since most North Vancouver jobs are quoted by square footage.",
    tiers: [
      {
        _key: key("tier"),
        title: "Standard Cleaning",
        range: "",
        body: "500 to 600 sq ft: starts at $220. Up to 4000 to 5000 sq ft: starts at $620. Above 6000 sq ft: call for a custom quote.",
      },
      {
        _key: key("tier"),
        title: "Deep Cleaning",
        range: "",
        body: "500 to 600 sq ft: starts at $390. Up to 4000 to 5000 sq ft: $850 and up.",
      },
    ],
    notes: [`Common Add-Ons: ${addOns.join(", ")}.`],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "For the full price list, visit our ",
        "North Vancouver cleaning rates page",
        "/rates",
        "."
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
    heading: "Ready to Book House Cleaning in North Vancouver?",
    body: "Get a free, no-obligation quote for house or apartment cleaning in North Vancouver on our rates page, or call us to book a standard clean, set up a recurring schedule, or ask about deep cleaning, move-out cleaning, or any of our specialty services.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "house-cleaning", {
  title: "House & Apartment Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "house-cleaning"),
  heroHeading: "House & Apartment Cleaning in North Vancouver",
  heroIntro:
    "North Vancouver homes range from waterfront condos near Lower Lonsdale to hillside character houses in Edgemont Village and family homes tucked into Lynn Valley and Deep Cove. Mint Sanitary has been the local choice for house and apartment cleaning in North Vancouver for homeowners and renters who want a team that shows up and does the work right. Every visit uses eco-friendly, biodegradable products, backed by a 24-hour satisfaction guarantee.",
  heroImage: await uploadImage(
    "/standard-cleaning-kitchen-north-vancouver.jpg",
    "House and apartment cleaning in North Vancouver"
  ),
  metaTitle: "House & Apartment Cleaning in North Vancouver",
  metaDescription:
    "House and apartment cleaning in North Vancouver. Eco-friendly products, bonded and insured teams, free estimates, and flexible recurring plans.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver house cleaning migrated");
