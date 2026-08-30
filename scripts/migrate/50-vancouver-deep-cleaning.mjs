import {
  key,
  refTo,
  para,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "deep-cleaning";

const whatsIncludedCards = [
  [
    "Kitchen",
    [
      "Inside the oven, refrigerator, and dishwasher",
      "Cabinet interiors and drawer pulls",
      "Backsplash grouting and tile scrubbing",
      "Inside microwave and range hood, including the filter",
      "Behind and under the refrigerator and stove",
      "Light fixtures and under-cabinet lighting",
      "Countertops, sink, and faucet sanitized",
      "Floor scrubbed corner to corner, including under appliances",
    ],
  ],
  [
    "Bathrooms",
    [
      "Tile grout scrubbed, not just wiped",
      "Behind toilets and under sinks",
      "Shower corners, tracks, doors, and fixtures descaled",
      "Window sills and ventilation fans dusted and cleared",
      "Cabinet interiors wiped and organized",
      "Mirrors and chrome polished",
      "Floor scrubbed including baseboards and corners",
    ],
  ],
  [
    "Bedrooms and Living Areas",
    [
      "Behind and under furniture",
      "Baseboards, crown molding, and door frames wiped down",
      "Ceiling fans and light fixtures dusted",
      "Window tracks, sills, and blinds cleaned",
      "Closet interiors dusted and shelves wiped",
      "Upholstery vacuumed and spot-treated",
      "Carpets shampooed or hard floors deep-cleaned",
    ],
  ],
  [
    "High-Touch Surfaces",
    [
      "Door handles, light switches, and railings sanitized",
      "Remote controls, thermostats, and alarm panels wiped",
      "Cabinet and drawer handles throughout the home",
      "Stair railings",
    ],
  ],
  [
    "Hard-to-Reach Areas",
    [
      "Top of cabinets, refrigerators, and wardrobes",
      "Inside vents and air returns",
      "Behind the washer and dryer",
      "Cobwebs in ceiling corners and stairwells",
      "Entryway closets and mudrooms, common in Vancouver's older character homes",
    ],
  ],
].map(([title, items]) => ({ _key: key("card"), title, items }));

const processSteps = [
  ["Free Estimate & Assessment", "We look at your home's size, layout, and condition to give you an accurate quote."],
  ["Schedule at Your Convenience", "We're available seven days a week, including evenings and weekends."],
  ["Team Arrives with Professional Equipment", "Eco-friendly products and HEPA-filter vacuums, ready to go."],
  ["Systematic Room-by-Room Cleaning", "Depending on home size, this takes four to eight hours."],
  ["Quality Walkthrough", "We check every room before we leave your Vancouver home."],
  ["Optional Follow-Up Plan", "We can set up a standard cleaning schedule to keep the results going."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["Eco-Friendly Products", "We clean with plant-based, non-toxic products that are safe around kids, pets, and anyone with sensitivities."],
  ["Background-Checked & Insured", "Our team is vetted, trained, background-checked, bonded, and fully insured, with WorkSafeBC coverage on every job."],
  ["Transparent Pricing", "Pricing is upfront, with no hidden fees added after the fact, whether your unit is in Yaletown or your house is in Dunbar."],
  ["24-Hour Satisfaction Guarantee", "If something's off, we'll come back and fix it at no extra charge."],
  ["Built for Vancouver's Two Housing Types", "We adjust the job to the property. Older Point Grey and Dunbar homes get extra attention on grout, older appliances, and window tracks. Yaletown condos get a faster, seasonal-reset approach suited to smaller footprints and shared building systems."],
  ["Strata and Concierge Ready", "We plan around concierge sign-in, elevator booking windows, and visitor parking limits that come with condo and strata buildings, so the appointment starts on time."],
  ["Book Ahead for the Fastest Slot", "Because our crews and equipment travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge, we recommend booking a few days out in Vancouver rather than expecting same-day availability."],
  ["Same Crew Where Possible", "We aim to send the same cleaners to your home each visit, so they already know the layout and your preferences."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const faqItems = [
  ["What's the difference between deep cleaning and standard cleaning in Vancouver?", "Standard cleaning covers routine maintenance: dusting, vacuuming, wiping surfaces, and sanitizing the bathroom and kitchen, and it takes about two to four hours. Deep cleaning goes further, reaching inside appliances, scrubbing grout, cleaning baseboards and ceiling fans, and moving furniture to clean behind it. A Vancouver deep clean typically takes four to eight hours depending on the size and condition of the home."],
  ["How often should I book a deep clean in Vancouver?", "Most Vancouver households do well with a deep clean every two to four months. Older character homes in Point Grey and Dunbar with more buildup sometimes benefit from a tighter schedule, while a Yaletown condo on a standard cleaning plan might only need a deep reset once or twice a year."],
  ["How long does a deep clean take for a Vancouver home?", "A typical two to four bedroom house takes four to eight hours. A Yaletown or Downtown condo usually takes three to four hours given the smaller footprint. Larger character homes or properties with significant buildup can run a full day, and we give you a time estimate during your free consultation."],
  ["Does deep cleaning damage carpets or furniture in Vancouver homes?", "No. We use professional-grade, eco-friendly products that are safe for carpets, upholstery, hardwood, and tile. Our team matches cleaning methods to the surface, whether that's original hardwood in a Dunbar house or laminate flooring in a Yaletown unit."],
  ["Are your products safe for kids and pets in Vancouver households?", "Yes. Every product we use is non-toxic and biodegradable, with no harsh chemicals, harmful fumes, or lingering residue, which matters in both family homes and smaller condos with less airflow."],
  ["Can you deep clean just one room in my Vancouver home?", "Yes. We offer full-home deep cleans and room-specific cleans. Kitchen-only and bathroom-only requests are common, especially in condos where a full deep clean isn't always needed. We scope and price the job to match exactly what you want done."],
  ["Do you offer deep cleaning after renovations in Vancouver?", "Yes. Post-renovation deep cleaning removes construction dust, debris, and residue, which comes up often given the amount of infill and renovation activity in neighbourhoods like Kerrisdale and Mount Pleasant. We also offer dedicated post-construction cleaning for larger builds."],
  ["How much does deep cleaning cost in Vancouver?", "Pricing depends on square footage and starts at $390 for 500 to 600 sq ft, scaling up from there. It's the same pricing structure we use everywhere we work, with no Vancouver premium. Visit our rates page for the full breakdown, and first-time customers save 10% with code MINT26."],
  ["How do I book a deep cleaning service in Vancouver?", "Call 236-688-3248 or request a free quote through our rates page. Estimates are free with no obligation, and we're available seven days a week, including evenings and weekends."],
  ["Do you offer same-day deep cleaning in Vancouver?", "We can't guarantee same-day service in Vancouver the way we can closer to our North Vancouver base, since our crews and equipment travel over the Lions Gate or Ironworkers Memorial Bridge. Booking a few days ahead gives you the best shot at your preferred time. Call us and we'll tell you plainly what's available."],
  ["Do you clean condos in Yaletown and Downtown Vancouver?", "Yes, condo and strata units are a regular part of our Vancouver work. We're comfortable working within concierge sign-in procedures and building rules, and we'll ask about those details when you book."],
  ["What if my Vancouver building requires concierge sign-in or an elevator booking?", "Just let us know when you schedule. We'll plan the arrival window around your building's concierge sign-in or elevator booking requirements so the crew isn't waiting in the lobby or losing time to a service elevator slot."],
  ["Is a deep clean different for an older character home in Point Grey or Dunbar than a Yaletown condo?", "Yes. Older homes usually need more time on grout, appliance interiors, and window tracks because of years of accumulated buildup. Yaletown condos are typically quicker jobs focused on a seasonal reset rather than reversing long-term buildup, so pricing often lands lower for a comparable square footage."],
  ["Do you need visitor parking or loading access for a Vancouver deep clean?", "It helps. If your building has limited visitor parking or a loading dock booking system, let us know in advance so we can plan the crew's arrival and equipment unloading around it."],
  ["Can a deep clean help with allergies or dust in an older Vancouver home?", "Yes. Deep cleaning removes dust and allergens that build up in carpets, upholstery, and vents, which matters in older homes with original ductwork or carpeting that's held onto dust for years. It won't replace medical advice, but a lot of clients notice a difference."],
  ["Do you deep clean before a move-in or move-out in Vancouver?", "Yes, this is one of the most common reasons we're booked in Vancouver, especially in rental-heavy areas. We also offer a dedicated move-in and move-out cleaning service if you need vacancy-specific scope rather than a standard deep clean."],
  ["What neighbourhoods do you cover for deep cleaning in Vancouver?", "We serve Kitsilano, Yaletown, Downtown Vancouver, the West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar, along with our home base in North Vancouver and the surrounding area."],
  ["Is deep cleaning worth it before listing a Vancouver home for sale?", "Yes. A deep clean is a common first step before photos or showings, particularly for older Point Grey, Dunbar, and Kerrisdale homes where buyers notice grout, appliance interiors, and window tracks during a walkthrough."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Deep Cleaning in Vancouver",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("In Point Grey and Dunbar, a lot of the housing stock is older character homes with original tile, older kitchen exhaust systems, and single-pane or older-style windows. Buildup collects faster in these homes: grout darkens, range hood filters get sticky, and window tracks fill with grit blown in off the street. If it's been more than three or four months since your last deep clean, or you're noticing film on cabinet fronts or grime around baseboards, that's the sign."),
        para("Yaletown looks different. Most of the housing there is high-rise condo towers, often with in-suite laundry, smaller kitchens, and forced-air systems shared across floors. A deep clean here is less about years of buildup and more about a seasonal reset, before renters or owners turn over a unit, before hosting, or simply every few months to clear out what a weekly tidy-up misses in tight spaces like under the kitchen island or behind stacked appliances."),
        para("Across both housing types, the same general triggers apply: moving in or out, getting a property ready to list, recovering from a renovation, or managing allergies, asthma, or pet dander that a light cleaning routine doesn't fully address."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Deep Cleaning Prices",
      intro: "Standard cleaning is routine maintenance: dusting, vacuuming, wiping surfaces, and sanitizing the bathroom and kitchen. It takes about two to four hours and works well on a weekly, bi-weekly, or monthly schedule. Deep cleaning is an intensive reset. It covers everything standard cleaning covers, plus the inside of appliances, grout, baseboards, ceiling fans, and behind furniture. A deep clean takes four to eight hours depending on home size and condition, and we recommend it every two to four months for most Vancouver households.",
      tiers: [
        {
          _key: key("tier"),
          title: "Deep Cleaning",
          range: "",
          body: "500 to 600 sq ft: $390. 700 to 800 sq ft: $480. 900 to 1,000 sq ft: $580. 1,200 to 1,500 sq ft: $620. 2,000 to 2,500 sq ft: $650. 2,600 to 3,000 sq ft: $780. 4,000 to 5,000 sq ft: $850. 6,000+ sq ft: call for quote.",
        },
      ],
      notes: [
        "Pricing is based on square footage, and Vancouver customers pay the same published rates used in North Vancouver and everywhere else we serve. Visit our rates page for full pricing and to request a free estimate. First-time customers save 10% with code MINT26.",
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Deep Cleaning Process Works",
      checklistItems: [],
      steps: processSteps,
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Homeowners Choose Mint Sanitary",
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
        para("Vancouver's deep cleaning needs split along housing lines more than climate alone. In Point Grey and Dunbar, older character homes often carry original tile, older ventilation, and single-glazed windows, and the coastal damp that settles into this region works into those older materials faster than it would into newer construction. Grout, window tracks, and range hood filters in these homes hold onto grime longer between cleanings, which is why we budget extra time for them."),
        para("In Yaletown, the issue is different. High-rise condos share ventilation and air return systems across units, so dust and airborne particles move between suites more than they would in a detached house. A seasonal deep clean matters here less because of buildup and more because shared-air buildings need a periodic reset to keep allergens from accumulating in vents, blinds, and upholstery. That's a distinct problem from the grout and appliance buildup we see a few kilometres away in Dunbar, even though both fall under the same service."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["House Cleaning in Vancouver", "/vancouver/house-cleaning"], ": Routine maintenance cleaning on a weekly, bi-weekly, or monthly schedule to keep your home consistently fresh between deep cleans."]),
        multiLinkPara(["", ["Move-In / Move-Out Cleaning in Vancouver", "/vancouver/move-in-move-out-cleaning"], ": Deep sanitizing before unpacking, or detailed vacancy cleaning that helps protect deposits and prepares your property for handover."]),
        multiLinkPara(["", ["Post-Construction Cleaning in Vancouver", "/vancouver/post-construction-cleaning"], ": HEPA-focused post-build cleanup for renovation dust, debris, and fine particles."]),
        multiLinkPara(["", ["Carpet Cleaning in Vancouver", "/vancouver/carpet-cleaning"], ": Professional carpet cleaning to remove deep stains, allergens, and embedded dirt that regular vacuuming misses."]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Deep Cleaning in Vancouver",
      body: [
        para("We book deep cleans across Vancouver's full range of housing, from the older character homes of Point Grey, Dunbar, and Kerrisdale to the condo towers of Yaletown, Downtown Vancouver, the West End, and Fairview. Kitsilano, Mount Pleasant, and Commercial Drive fall in between, with a mix of houses, low-rises, and apartment buildings that each need a slightly different approach. Wherever your property sits on that spectrum, the crew, products, and process stay the same."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Deep Cleaning in Vancouver?",
      body: "Get your free quote, or call 236-688-3248 to book. Eco-friendly products, background-checked cleaners, and a 24-hour satisfaction guarantee on every job. Since our team travels from North Vancouver, book a few days ahead for the best chance at your preferred time. Use code MINT26 for 10% off your first clean. View our rates.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Deep Cleaning in Vancouver",
    heroHeading: "Deep Cleaning in Vancouver",
    heroIntro: "Mint Sanitary is a North Vancouver based cleaning company with a 5 out of 5 rating across 50+ Google reviews, and we bring that same deep cleaning process across the water into Vancouver. We see two very different situations here: older character homes in Point Grey and Dunbar with decades of buildup in the grout and appliances, and Yaletown condos that need a seasonal reset between move-ins and busy schedules. Every technician is background-checked, bonded, and insured, and we clean with eco-friendly, non-toxic, plant-based products and HEPA-filter vacuums. Because our crews travel from North Vancouver, same-day booking in Vancouver isn't guaranteed the way it is closer to home, so call ahead to lock in your slot. Use code MINT26 for 10% off your first clean.",
    metaTitle: "Deep Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Deep cleaning in Vancouver for condos and character homes, from Point Grey and Dunbar to Yaletown. 5 out of 5 rated, eco-friendly products. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
