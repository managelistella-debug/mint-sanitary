import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "house-cleaning";

const whatsIncludedCards = [
  {
    title: "Living Areas",
    items: [
      "Dust all surfaces, shelves, and furniture",
      "Vacuum carpets and rugs, sweep and mop hard floors",
      "Wipe light switches, door handles, and baseboards",
      "Remove cobwebs",
      "Clean mirrors and glass surfaces",
      "Empty trash and replace liners",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Wipe and sanitize countertops and backsplash",
      "Clean the exterior of all appliances",
      "Scrub and sanitize the sink and faucet",
      "Wipe cabinet fronts and drawer handles",
      "Sweep and mop the floor",
      "Clean the stovetop and range hood exterior",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize the toilet inside and behind",
      "Clean and sanitize the sink, faucet, and countertop",
      "Scrub the tub and shower walls, door, and fixtures",
      "Clean mirrors",
      "Wipe cabinet fronts and towel bars",
      "Sweep and mop the floor",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces, nightstands, and dressers",
      "Vacuum carpets or sweep and mop hard floors",
      "Make beds and tuck linens (change linens on request)",
      "Wipe light switches and door handles",
      "Remove cobwebs",
    ],
  },
  {
    title: "General",
    items: [
      "Dust ceiling fan blades within reach",
      "Wipe window sills and ledges",
      "Vacuum stairs and hallways",
      "Spot-clean marks on walls",
      "Wipe railings and banisters",
    ],
  },
].map((c) => ({ _key: key("card"), ...c }));

const faqItems = [
  ["How much does house cleaning cost in Vancouver?", "Standard cleaning starts at $220 for a 500 to 600 square foot home and scales up to $620 for 4000 to 5000 square feet, since pricing is based on size and scope rather than which city you're in. See our rates page for the full table."],
  ["What's the difference between standard and deep cleaning in Vancouver?", "Standard cleaning covers every main room top to bottom for regular upkeep. Deep cleaning in Vancouver adds inside appliances, baseboards, and detail work that builds up over time, and it's the usual starting point for a first clean or a seasonal reset."],
  ["How long does a standard house cleaning take in Vancouver?", "Most standard cleans take 2 to 4 hours. A one-bedroom condo in Yaletown might be finished in about 90 minutes, while a character house in Kitsilano or Dunbar with multiple suites usually takes closer to 3 to 4 hours."],
  ["Can I schedule weekly cleaning in Vancouver without a contract?", "Yes. Recurring cleaning is available weekly, biweekly, monthly, or on a custom schedule with no contract, so you can pause or cancel anytime."],
  ["Is recurring cleaning cheaper than one-time cleaning in Vancouver?", "Yes. Recurring plans are priced lower per visit because ongoing maintenance takes less work each time than a full first clean."],
  ["What's included in a recurring cleaning visit in Vancouver?", "Bathrooms, kitchen, living spaces, bedrooms, and floors, with a slightly lighter scope than a first standard clean since the home is already maintained."],
  ["What's not included in a house cleaning in Vancouver?", "Inside the oven, fridge, and dishwasher, inside window washing, moving heavy furniture, deep carpet shampooing, and garage or attic cleaning. Most of these are available as add-ons or through deep cleaning."],
  ["Which Vancouver neighbourhoods does Mint Sanitary serve?", "Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar."],
  ["Is Mint Sanitary based in Vancouver?", "No. Our team and vehicles are based in North Vancouver, and crews travel across the Lions Gate or Ironworkers Memorial bridge for every Vancouver job. We still cover all ten Vancouver neighbourhoods above, but booking ahead is the best way to lock in your preferred time."],
  ["Is same-day house cleaning available in Vancouver?", "Sometimes, but it isn't guaranteed the way it is closer to our North Vancouver base. Bridge and tunnel travel time affects how quickly we can fit in a same-day request, so call ahead and we'll tell you plainly what's available that day."],
  ["Can Mint Sanitary clean condos and apartment towers in Vancouver?", "Yes. Downtown, Yaletown, and West End towers are a regular part of our schedule, and we plan arrivals around concierge sign-in, elevator booking windows, and visitor parking limits rather than treating condo access the same as a house driveway."],
  ["Do you clean character homes with rental suites in Kitsilano or Dunbar?", "Yes. Many of these homes have been split into two or three suites, and we scope the quote based on how many kitchens and bathrooms need cleaning, not just the total square footage."],
  ["Does Mint Sanitary offer move-out cleaning in Vancouver for renters?", "Yes. Our move-in/move-out cleaning in Vancouver is a popular choice for renters and landlords, especially in the West End, Kitsilano, and Fairview where units turn over often."],
  ["How does Vancouver's rainy season affect house cleaning?", "Wet months from roughly October through April mean more mud, grit, and moisture tracked into entryways and floors. A recurring schedule helps keep that buildup under control between visits, in a ground-floor Dunbar house or a Downtown tower with a shared lobby alike."],
  ["Do I get a discount on my first house cleaning in Vancouver?", "Yes. New customers save 10% off their first clean with code MINT26."],
  ["Is Mint Sanitary's Vancouver cleaning team background-checked and insured?", "Yes. Every team member is background-checked, bonded, and fully insured, with WorkSafeBC coverage on every job."],
  ["Does Mint Sanitary use eco-friendly products for house cleaning in Vancouver?", "Yes. Every clean uses eco-friendly, non-toxic, plant-based products safe for kids, pets, and indoor air quality."],
  ["What happens if I'm not happy with my house cleaning in Vancouver?", "Every clean comes with a 24-hour satisfaction guarantee. If something's missed, we return to fix it at no extra charge within 24 hours."],
  ["Can I book weekend house cleaning in Vancouver?", "Yes. We're available 7 days a week, including evenings and weekends. Since crews are coming from North Vancouver, weekend slots fill up, so book a few days ahead when you can."],
  ["Does Mint Sanitary need building access instructions in advance for Vancouver condos?", "Yes. If your building requires concierge sign-in, a booked elevator, or visitor parking passes, let us know when you book so your crew isn't stuck waiting in the lobby."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in House Cleaning in Vancouver",
      intro: "A standard clean is Mint Sanitary's most popular service for Vancouver homes and apartments, covering every main living space top to bottom.",
      cards: whatsIncludedCards,
      exclusionsTitle: "What's Not Included in Vancouver Recurring Cleaning",
      exclusionsBody: "We'd rather be upfront than surprise you at the door: inside the oven, refrigerator, or dishwasher (available with deep cleaning in Vancouver); inside windows or exterior window washing; moving heavy furniture; deep carpet shampooing or stain treatment; garage, attic, or storage area cleaning; laundry or dishwashing (linen changes available as an add-on, about $15 to $25).",
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        para("Most standard cleans take 2 to 4 hours, depending on the size and layout of the home. A one-bedroom condo in Yaletown might be done in about 90 minutes. A character house in Kitsilano or Dunbar, especially one split into two or three rental suites, usually needs closer to 3 to 4 hours since each suite gets its own kitchen and bathroom pass."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Recurring Cleaning: Keep Your Vancouver Home Consistently Clean",
      body: [
        para("For homeowners who want ongoing help instead of a one-off visit, Mint Sanitary offers recurring cleaning in Vancouver on a weekly, biweekly, monthly, or custom schedule. Recurring cleans focus on maintaining a home that's already in good shape, so the scope is slightly lighter than a first-time standard clean."),
        para("Bathrooms: Scrub and sanitize toilets, tubs, and showers; clean mirrors and glass surfaces; wipe down the vanity, countertops, and fixtures; mop bathroom floors."),
        para("Kitchen: Clean and sanitize countertops and the sink; wipe down the stovetop, appliance exteriors, and cabinet fronts; clean inside the microwave; take out trash and replace liners."),
        para("Living Spaces: Dust all surfaces, shelves, and decor; wipe light switches, door handles, and baseboards; vacuum upholstery and cushions as needed; clean mirrors and glass surfaces."),
        para("Bedrooms: Dust all surfaces and furniture; make beds and tidy linens; vacuum floors, under beds, and closet floors; wipe down nightstands, dressers, and shelves."),
        para("Floors: Vacuum all carpeted areas; mop all hard floors; spot-clean floor edges and corners."),
        para("Recurring plans are priced lower per visit than a one-time standard clean, since our team spends less time per visit once your home is on a regular rotation. No contract attached: pause, adjust, or cancel your schedule anytime."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink(
          "Deep cleaning covers what a recurring visit skips, including inside the oven, refrigerator, and dishwasher. See our ",
          "deep cleaning in Vancouver",
          "/vancouver/deep-cleaning",
          " page for details."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Condo towers in Downtown and Yaletown collect a different kind of grime than a house. Shared ventilation and less natural airflow mean dust and cooking odours build up faster on countertops and window ledges, even in units that look tidy at a glance. Floor-to-ceiling glass shows every smudge and water spot, and small square footage means clutter and dust get noticed quickly by anyone who walks in."),
        para("Character homes in Kitsilano and Dunbar tell a different story. Older hardwood, wainscoting, and built-in shelving trap dust in corners a quick tidy misses, and homes that have been split into rental suites see heavier day-to-day wear from multiple households sharing kitchens, entryways, and stairwells. Basement suites in these neighbourhoods often need extra attention to window wells and lower-level flooring where moisture and grit settle."),
        para("Renter turnover adds another layer across the city, but especially in Kitsilano, Dunbar, and the West End, where lease terms often flip every year. A unit changing hands needs a full reset before the next tenant moves in, and landlords managing multiple suites in one house tend to book cleaning around each move rather than on a fixed calendar."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver House Cleaning Prices",
      intro: "Pricing is the same across every city we serve, including Vancouver, and depends mostly on the size of your home and the scope of work.",
      tiers: [
        {
          _key: key("tier"),
          title: "Standard Cleaning",
          range: "",
          body: "500 to 600 sq ft: $220. 700 to 800 sq ft: $250. 900 to 1000 sq ft: $320. 1200 to 1500 sq ft: $390. 2000 to 2500 sq ft: $460. 2600 to 3000 sq ft: $550. 4000 to 5000 sq ft: $620. 6000+ sq ft: call for a custom quote.",
        },
        {
          _key: key("tier"),
          title: "Deep Cleaning",
          range: "",
          body: "500 to 600 sq ft: $390. 700 to 800 sq ft: $480. 900 to 1000 sq ft: $580. 1200 to 1500 sq ft: $620. 2000 to 2500 sq ft: $650. 2600 to 3000 sq ft: $780. 4000 to 5000 sq ft: $850. 6000+ sq ft: call for a custom quote.",
        },
        {
          _key: key("tier"),
          title: "Move-In/Move-Out Cleaning",
          range: "",
          body: "Starts at $390 for 500 to 600 sq ft, scaling the same as deep cleaning above.",
        },
      ],
      notes: [
        "Common Add-Ons: Inside oven $30, inside fridge $30, inside windows and frames $30 per window, inside cabinets and closets $45, marks on walls or baseboards $25 per room, balconies swept $30 per balcony, blinds washed $30 per room, walls washed $50 for one room, dishes washed $15 flat, linens and towels changed $15 per bed, damage/toiletries/supplies inspection $25, carpet cleaning add-on $60 per room.",
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [paraWithLink("For the full price list, visit our ", "rates", "/rates", " page.")],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver House Cleaning Process Works",
      checklistItems: [],
      steps: [
        { _key: key("step"), title: "Book by phone or online", body: "Tell us what you need and where you're located." },
        { _key: key("step"), title: "Get a free estimate", body: "A clear, transparent quote before any work starts." },
        { _key: key("step"), title: "Confirm your schedule", body: "Pick a time that works, any day of the week." },
        { _key: key("step"), title: "Enjoy the clean", body: "Your team walks through the home with you and gets to work." },
      ],
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Homeowners Choose Mint Sanitary",
      items: [
        { _key: key("why"), title: "Eco-friendly products", body: "All cleaning products are non-toxic, plant-based, and biodegradable, safe for kids, pets, and indoor air quality, which matters most in smaller condo units where airflow is limited." },
        { _key: key("why"), title: "Transparent pricing", body: "Free estimates with a clear scope and no hidden fees, and no Vancouver premium added to the same square-footage rates we quote everywhere else." },
        { _key: key("why"), title: "Flexible scheduling", body: "Available 7 days a week, including evenings and weekends. Since our crews travel over from North Vancouver for every job, booking a day or two ahead gets you the widest pick of times." },
        { _key: key("why"), title: "Vetted teams", body: "Every team member is background-checked, bonded, and fully insured, with WorkSafeBC coverage on every job." },
        { _key: key("why"), title: "Built for building access", body: "Concierge sign-in, elevator booking windows, and visitor parking limits are routine at Downtown and Yaletown towers, and our teams plan arrival times around them instead of showing up and hoping." },
        { _key: key("why"), title: "Consistency", body: "Trained professional teams, with the same team sent whenever possible, so a recurring client in Kitsilano or Dunbar gets a crew that already knows the layout." },
        { _key: key("why"), title: "Satisfaction guarantee", body: "If something's missed, we return within 24 hours to fix it at no extra charge." },
        { _key: key("why"), title: "First clean discount", body: "New customers save 10% off their first clean with code MINT26." },
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
        para("Vancouver's rental market moves faster than most cities its size, and house cleaning here has to account for it. The West End alone is one of the densest rental markets in Canada, and Kitsilano and Mount Pleasant aren't far behind, so a meaningful share of Vancouver cleaning bookings are turnover jobs sandwiched between one tenant leaving and the next one arriving, sometimes with only a day or two of gap. That's a different rhythm than a homeowner booking a recurring clean on their own schedule, and it means our scheduling has to flex around move dates set by landlords and property managers, not just the calendar."),
        para("The condo-versus-house split shapes the work itself. A Yaletown or Downtown tower unit is compact, sealed, and shared with dozens of other units on the same ventilation system, so surface dust and cooking smells build up in a way that's rarely a factor in a detached Kitsilano or Dunbar house with its own windows and yard. Those houses bring the opposite problem: more square footage, older finishes, and in many cases multiple rental suites stacked under one roof, each with its own kitchen and bathroom that needs its own pass. Add Vancouver's wet season, roughly October through April, and both property types see more grit and moisture tracked in at entryways, though a ground-floor character home deals with it at more entry points than a fifteenth-floor condo does."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Deep Cleaning in Vancouver", "/vancouver/deep-cleaning"]]),
        multiLinkPara(["", ["Move-In/Move-Out Cleaning in Vancouver", "/vancouver/move-in-move-out-cleaning"]]),
        multiLinkPara(["", ["Upholstery Cleaning in Vancouver", "/vancouver/upholstery-cleaning"]]),
        multiLinkPara(["", ["Vacation Rental Cleaning in Vancouver", "/vancouver/vacation-rental-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for House Cleaning in Vancouver",
      body: [
        para("Mint Sanitary cleans houses and apartments across Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar. Booking patterns differ block by block: condo towers in Downtown, Yaletown, West End, and Fairview lean toward recurring maintenance visits around a fixed schedule, while character homes in Kitsilano, Dunbar, Point Grey, and Kerrisdale mix regular upkeep with move-in and move-out cleans tied to rental turnover. Wherever you are in the city, our crews route over from North Vancouver, so a confirmed booking window matters more here than it does closer to home base."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book House Cleaning in Vancouver?",
      body: "Get a free, no-obligation quote for house or apartment cleaning in Vancouver on our rates page, or call us to book a standard clean, set up a recurring schedule, or ask about deep cleaning, move-out cleaning, or any of our specialty services. Use code MINT26 for 10% off your first clean.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "House & Apartment Cleaning in Vancouver",
    heroHeading: "House & Apartment Cleaning in Vancouver",
    heroIntro: "Vancouver's housing stock swings fast between styles: glass condo towers in Downtown and Yaletown, then character houses and duplexes just a short drive away in Kitsilano and Dunbar, often split into rental suites with tenants moving in and out every year. Mint Sanitary cleans both, and adjusts the approach for each. Every visit uses eco-friendly, non-toxic, plant-based products and comes with a 24-hour satisfaction guarantee, backed by a 5 out of 5 rating across 50+ Google reviews. New customers save 10% off their first clean with code MINT26. Our crews are based in North Vancouver and cross the bridge for every Vancouver job, so booking ahead gets you the widest choice of times.",
    metaTitle: "House & Apartment Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "House and apartment cleaning in Vancouver, from Yaletown condo towers to Kitsilano character homes. 5 out of 5 rating, 50+ Google reviews. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
