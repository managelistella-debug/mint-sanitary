import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "move-in-move-out-cleaning";

const moveInCards = [
  {
    title: "Kitchen",
    items: [
      "Clean and sanitize inside all cabinets and drawers",
      "Deep clean inside the oven, stovetop, and range hood",
      "Clean inside the refrigerator, freezer, and shelves",
      "Wipe down inside the microwave and dishwasher",
      "Sanitize countertops, backsplash, and sink",
      "Clean and polish faucet and fixtures",
      "Degrease cabinet fronts and handles",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize the toilet inside and out",
      "Clean the bathtub, shower walls, and shower door",
      "Scrub tile grout and remove soap scum and buildup",
      "Polish mirrors and glass",
      "Clean and sanitize the vanity, sink, and countertop",
      "Wipe fixtures, towel bars, and hooks",
      "Clean inside medicine cabinets and shelves",
      "Clean the exhaust fan and vents",
      "Mop floors",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces, shelves, and ledges",
      "Clean inside all closets, drawers, and storage",
      "Wipe doors, door frames, and handles",
      "Clean light switches, outlet covers, and baseboards",
      "Remove cobwebs",
      "Clean windows from inside, including tracks and sills",
    ],
  },
  {
    title: "Living Areas",
    items: [
      "Dust and wipe all surfaces and shelving",
      "Clean light fixtures, ceiling fans, and vents",
      "Wipe window sills, blinds, and tracks",
      "Wipe baseboards and door frames",
      "Clean the fireplace mantle and surround, if applicable",
    ],
  },
  {
    title: "Floors",
    items: [
      "Vacuum all carpeted areas thoroughly",
      "Mop all hard floors",
      "Clean floor edges, corners, and under-cabinet toe kicks",
    ],
  },
].map((c) => ({ _key: key("card"), ...c }));

const pricingTier = {
  _key: key("tier"),
  title: "Move-In/Move-Out Cleaning",
  range: "",
  body: "500 to 600 sq ft: $390. 700 to 800 sq ft: $480. 900 to 1,000 sq ft: $580. 1,200 to 1,500 sq ft: $620. 2,000 to 2,500 sq ft: $650. 2,600 to 3,000 sq ft: $780. 4,000 to 5,000 sq ft: $850. 6,000+ sq ft: Call for quote.",
};

const processSteps = [
  {
    title: "Book your date",
    body: "Move-in cleans are usually booked 1 to 2 days ahead. Move-out cleans go smoother booked 1 to 2 weeks ahead, though shorter notice is often possible.",
  },
  {
    title: "Confirm access",
    body: "Tell us about building entry, elevator booking windows, or key pickup so the crew isn't waiting in a lobby.",
  },
  {
    title: "Full checklist clean",
    body: "A 2 to 3 bedroom unit typically takes 4 to 6 hours, covering every appliance, cabinet, bathroom surface, and floor on the checklist.",
  },
  {
    title: "Final walkthrough",
    body: "For move-out cleans, we go through the space before we leave so it's ready for your landlord's or property manager's inspection.",
  },
].map((s) => ({ _key: key("step"), ...s }));

const whyChooseItems = [
  {
    title: "Background-checked and insured",
    body: "Every Mint Sanitary cleaner is background-checked, bonded, and insured, with WorkSafeBC coverage on every job.",
  },
  {
    title: "Eco-friendly products",
    body: "HEPA-filter vacuums and eco-friendly, plant-based products remove allergens and pet dander left behind by a previous occupant, which matters in a compact West End or Fairview unit with limited airflow.",
  },
  {
    title: "Built for condo and strata access",
    body: "Concierge sign-in, elevator booking windows, and visitor parking limits are standard at towers in the West End and Fairview, and we plan crew arrival around them instead of guessing.",
  },
  {
    title: "Book ahead for the fastest slot",
    body: "Because our crews and equipment travel from North Vancouver over the Lions Gate or Ironworkers Memorial Bridge, we recommend booking ahead in Vancouver rather than expecting same-day availability, especially around common lease turnover dates.",
  },
  {
    title: "Scoped for character homes too",
    body: "Kitsilano and Mount Pleasant character homes converted into rental suites get scoped by kitchen and bathroom count, not just total square footage, so the quote matches the actual work.",
  },
  {
    title: "Transparent pricing",
    body: "Every estimate is free and transparent, with no hidden fees and no Vancouver premium on the same rates we quote everywhere else.",
  },
  {
    title: "Satisfaction guarantee",
    body: "If anything's missed, we'll return within 24 hours to fix it at no charge.",
  },
  {
    title: "First clean discount",
    body: "New customers get 10% off their first clean with code MINT26.",
  },
].map((i) => ({ _key: key("why"), ...i }));

const faqItems = [
  ["What's included in move-in cleaning in Vancouver?", "Inside your kitchen appliances and cabinets, bathrooms, closets, and floors: a full deep clean meant to get every surface ready before your furniture arrives."],
  ["What's included in move-out cleaning in Vancouver?", "The same deep-clean scope as move-in cleaning, with extra attention on the details a landlord or property manager checks during a move-out inspection."],
  ["How much does move-in or move-out cleaning cost in Vancouver?", "Pricing starts at $390 for 500 to 600 square feet and scales up with size, the same structure used for deep cleaning, up to $850 or more for units between 4,000 and 5,000 square feet. See our rates page for the full table."],
  ["How long does move-in or move-out cleaning take in Vancouver?", "A typical 2 to 3 bedroom unit takes 4 to 6 hours, depending on the condition left by the previous occupant and how much building access slows the crew down."],
  ["When should I book move-in cleaning in Vancouver?", "1 to 2 days before your move date, ideally after the previous occupant has left and before furniture arrives."],
  ["How far ahead should I book move-out cleaning in Vancouver?", "1 to 2 weeks in advance is ideal, especially with West End and Fairview leases that often end and begin on the same date. Shorter notice is often possible, so call and we'll tell you what's available."],
  ["Do you offer same-day move-out cleaning in Vancouver?", "Same-day isn't guaranteed the way it is closer to our North Vancouver base, since crews travel over the Lions Gate or Ironworkers Memorial Bridge. Call ahead and we'll tell you plainly what's available that day."],
  ["Can you clean an occupied unit, or does it need to be empty first?", "Move-in and move-out cleaning works best once the unit is fully empty, since we're cleaning inside cabinets, closets, and appliances that need to be clear. If furniture or belongings are still in place, let us know when you book so we can scope around it."],
  ["Will move-out cleaning guarantee I get my full deposit back in Vancouver?", "A thorough clean can't guarantee anything, since deposit decisions rest with your landlord or property manager, but it directly addresses the cleaning standard required under BC's Residential Tenancy Act."],
  ["What can Vancouver landlords deduct from a security deposit?", "Cleaning costs if the unit wasn't left reasonably clean, repair costs beyond normal wear and tear, and disposal fees for anything left behind."],
  ["Do you work with Vancouver property managers who handle multiple units?", "Yes. We regularly clean for property managers coordinating turnover across several units in the same West End or Fairview building, and we can set up consolidated billing for multiple bookings."],
  ["Can you book an elevator or loading dock slot for a Vancouver condo move-out?", "We can work around a building's booking window if you give us the timeframe when you schedule. Many West End and Downtown towers require a freight elevator reservation, so the earlier we know the window, the better we can plan the crew's arrival."],
  ["Is same-day turnaround realistic for a Vancouver condo between tenants?", "It depends on the building and how far in advance we know about it. Where a freight elevator needs booking, a same-day turnaround is tight, and we'd rather set honest expectations upfront than promise a slot we can't guarantee."],
  ["Do you clean inside appliances during move-out cleaning in Vancouver?", "Yes, including the oven, fridge, freezer, microwave, and dishwasher, since landlords and property managers often check these during a move-out inspection."],
  ["Are your cleaning products safe for kids and pets in Vancouver units?", "Yes. Eco-friendly, plant-based products and HEPA-filter vacuums are used in every Vancouver home we clean."],
  ["Do you offer a discount for move-in or move-out cleaning in Vancouver?", "New customers get 10% off their first move-in or move-out clean with code MINT26."],
  ["Can you clean Vancouver condos and apartments, not just houses?", "Yes, including West End, Yaletown, and Downtown condo towers, with the checklist and crew size adjusted to fit the unit and its building's access rules."],
  ["What's the difference between move-in/move-out cleaning and a standard cleaning in Vancouver?", "Move-in and move-out cleaning goes inside every appliance, cabinet, and closet since the unit is empty and needs to be inspection-ready or move-in ready. Standard cleaning is lighter, ongoing maintenance for a home that's already lived in."],
  ["Do you serve Kitsilano and Mount Pleasant character homes as well as Fairview condos?", "Yes. Character homes split into rental suites are scoped by kitchen and bathroom count, while condo units are scoped by square footage and building access requirements."],
  ["Is Mint Sanitary based in Vancouver?", "No. Our team and vehicles are based in North Vancouver, and crews cross the Lions Gate or Ironworkers Memorial Bridge for every Vancouver job. We still cover all ten Vancouver neighbourhoods we list, but booking ahead is the best way to lock in a tight move date."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Move-In and Move-Out Cleaning in Vancouver",
      intro: "A deep clean of your new Vancouver home before furniture arrives, covering the inside of appliances, cabinets, closets, bathrooms, and floors. Book for 1 to 2 days before your move date, once the previous occupant has fully vacated and before boxes show up. A typical 2 to 3 bedroom unit takes 4 to 6 hours.",
      cards: moveInCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Move-Out Cleaning",
      body: [
        para("Move-out cleaning is built around one goal: protecting your security deposit. British Columbia's Residential Tenancy Act requires tenants to leave a rental in a reasonably clean condition, and you can review the province's official guidance through the BC Residential Tenancy Branch. Under the Act, a landlord can generally deduct for cleaning costs if the unit wasn't left reasonably clean, repair or damage costs beyond normal wear and tear, and disposal fees for anything left behind. Book 1 to 2 weeks ahead if you can, though our team can often accommodate shorter notice. A 2 to 3 bedroom Vancouver unit takes about 4 to 6 hours."),
        para("Bedrooms & Living Areas: Dust all surfaces, shelves, and ledges; clean inside closets and drawers; wipe doors, handles, and light switches; wipe baseboards; vacuum and mop floors; clean windows from inside."),
        para("Kitchen: Deep clean the oven, stovetop, and range hood; clean inside the refrigerator and freezer; wipe down all cabinets, inside and out; sanitize the sink, faucet, and countertops; clean inside the microwave and dishwasher; degrease the backsplash."),
        para("Bathrooms: Scrub and sanitize the toilet, tub, and shower; clean tile grout and remove soap scum; polish mirrors and fixtures; wipe the vanity, medicine cabinet, and shelves; mop floors."),
        para("Throughout the Property: Dust and clean all light fixtures and ceiling fans; wipe all door handles, switches, and outlet covers; vacuum and mop all floors; clean interior windows, tracks, and sills; remove cobwebs; remove all trash and cleaning debris."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("West End rental towers turn over constantly, and it shows in specific ways: a studio or one-bedroom unit that's had three or four tenants in as many years usually has buildup in the oven and bathroom exhaust fan that a light tidy never touches, plus scuffed baseboards and carpet that needs a real clean before the next tenant's walkthrough. In a market that dense, a unit can sit empty for only a day or two between leases, so the window to clean it is short and needs to be booked precisely."),
        para("Kitsilano and Fairview add a mix of low-rise apartment buildings and older character homes converted into rental suites. These units often have older kitchen exhaust systems and window tracks that collect more grit than a newer tower, and a full move-out clean here usually takes a bit longer per square foot than a comparable Yaletown condo."),
        para("Mount Pleasant's rental stock spans both worlds: converted character homes split into suites and newer low-rise apartment buildings near the Broadway corridor. The trigger is the same either way: a lease ending on the last day of the month, with the new tenant's lease starting the next day, leaves no room for a delayed cleaning appointment."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Move-In and Move-Out Cleaning Prices",
      intro: "Move-in and move-out cleaning is priced the same as deep cleaning, based on square footage, with no Vancouver premium added.",
      tiers: [pricingTier],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink(
          "Most jobs are priced by square footage rather than a flat rate. Visit our ",
          "rates",
          "/rates",
          " page for the full breakdown and a free estimate. First-time customers save 10% with code MINT26."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Move-In and Move-Out Cleaning Process Works",
      checklistItems: [],
      steps: processSteps,
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Renters and Landlords Choose Mint Sanitary",
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
        para("Vancouver's rental turnover doesn't run on the same schedule as North Vancouver's. The West End is one of the densest rental markets in Canada, and a large share of its leases end and begin on the same date, the first of the month being the most common. That clustering means a lot of Vancouver move-out cleans need to happen in a tight window right before the next tenant's move-in, sometimes on the same day, which is a different scheduling problem than a homeowner booking a deep clean whenever suits them."),
        para("Building access adds another layer specific to this service. A West End or Fairview condo move-out often needs a booked freight elevator or loading dock slot, on top of the actual cleaning time, so the appointment has to be planned around the building's booking window, not just our crew's availability. Kitsilano and Mount Pleasant character homes split into suites face the opposite issue: no elevator booking, but often narrower stairwells and shared entryways that slow down carrying in equipment and hauling out debris left behind by a previous tenant. Add Vancouver's wet season, roughly October through April, and a move day with doors propped open for hours tracks in more mud and grit than a quick day-to-day clean, which is exactly the kind of buildup a move-in or move-out clean is scoped to catch."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["House Cleaning in Vancouver", "/vancouver/house-cleaning"]]),
        multiLinkPara(["", ["Deep Cleaning in Vancouver", "/vancouver/deep-cleaning"]]),
        multiLinkPara(["", ["Upholstery Cleaning in Vancouver", "/vancouver/upholstery-cleaning"]]),
        multiLinkPara(["", ["Strata Cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Move-In and Move-Out Cleaning in Vancouver",
      body: [
        para("We book the most move-in and move-out cleans in the West End, Kitsilano, Fairview, and Mount Pleasant, where rental turnover is highest, but the service covers all ten neighbourhoods we work in: Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar. Condo towers in Yaletown, Downtown, and the West End tend to need elevator booking coordination, while character homes and low-rise buildings in Kitsilano, Mount Pleasant, and Fairview are scoped around suite count and older fixtures. Wherever your move is happening, our crews route over from North Vancouver, so locking in your date early matters more here than closer to home base."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Move-In or Move-Out Cleaning in Vancouver?",
      body: "Get a free, transparent estimate and see the full pricing breakdown on our rates page. Prefer to talk it through first? Call 236-688-3248 or email hello@mintsanitary.com. Use code MINT26 for 10% off your first clean.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Move-In and Move-Out Cleaning in Vancouver",
    heroHeading: "Move-In and Move-Out Cleaning in Vancouver",
    heroIntro: "The West End is one of the densest rental markets in Canada, and turnover keeps a similar pace in Kitsilano, Fairview, and Mount Pleasant. Mint Sanitary handles move-in and move-out cleaning for renters, landlords, and property managers across Vancouver, rated 5 out of 5 across 50+ Google reviews. Every job uses background-checked, bonded, and insured cleaners and eco-friendly, non-toxic, plant-based products. New customers save 10% off their first clean with code MINT26. Our crews and equipment travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge, so same-day booking in Vancouver isn't guaranteed the way it is closer to home. Book ahead and we'll get you the fastest available slot.",
    metaTitle: "Move-In & Move-Out Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Move-in and move-out cleaning in Vancouver for renters and landlords in the West End, Kitsilano, Fairview, and Mount Pleasant. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
