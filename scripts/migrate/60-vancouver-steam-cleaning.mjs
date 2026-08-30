import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "steam-cleaning";

const whatsIncludedCards = [
  {
    title: "How the Dupray Hill Injection System Works",
    body: "The machine has a dual-tank design. One tank can be refilled while the other keeps running, so our crews work straight through a job without stopping to reheat. For a busy household or a strata common area, that means less time waiting around and more surfaces done in one visit. Steam is mostly water vapor, so it carries very little moisture compared to a wet mop or a spray-and-wipe clean. Surfaces dry fast. At the point of contact, steam is still hot enough to kill many bacteria, viruses, mold spores, dust mites, and fleas, which makes it a solid option for households with kids, pets, allergy sufferers, or anyone sensitive to cleaning chemicals. It's not right for every surface though. We don't recommend it on unsealed or unfinished hardwood, paper-based materials, or anything that can't handle heat and moisture, and we assess the surface first on every Vancouver job.",
    items: [],
  },
  {
    title: "Surfaces We Cover Most Often",
    items: [
      "Tile and grout in kitchens, bathrooms, and entryways, in both older buildings and newer condo installations",
      "Kitchen surfaces and appliances, including countertops, backsplashes, stovetops, range hoods, and appliance interiors and exteriors",
      "Bathroom fixtures, including showers, tubs, tile walls, and faucets",
      "Upholstery and mattress spot-treatment and sanitizing (not a full wet extraction clean)",
      "High-touch surface sanitizing, including light switches, door handles, railings, and shared equipment in homes, offices, gyms, schools, and strata common areas",
    ],
  },
].map((c) => ({ _key: key("card"), ...c }));

const faqItems = [
  ["What is chemical-free steam cleaning in Vancouver, and how is it different from carpet steam cleaning?", "Chemical-free steam cleaning uses hot water vapor to clean hard surfaces like tile, grout, and kitchen counters, plus light fabric spot-treatment. Carpet steam cleaning in Vancouver refers to hot water extraction, a wet method for cleaning whole carpets. They're separate services built for different jobs."],
  ["Is your Vancouver steam cleaning the same as your carpet cleaning service?", "No. Our carpet cleaning page uses \"steam cleaning\" as another name for hot water extraction on carpets. This steam cleaning service is a dry vapor process for hard surfaces and fixtures, not carpets."],
  ["How hot does the steam cleaning equipment get for Vancouver jobs?", "Our Dupray Hill Injection system heats water up to 345°F and delivers it at up to 121 psi of pressure. At the surface, the steam is still hot enough to kill many bacteria, viruses, and mold spores without any chemicals."],
  ["Do you offer tile and grout steam cleaning for Vancouver condos and character homes?", "Yes. It's one of our most requested services in Vancouver, from newer tile installations in Downtown and Yaletown towers to original bathroom tile in older Kitsilano and Dunbar homes."],
  ["Can you steam clean kitchen appliances and bathroom fixtures in Vancouver?", "Yes. We steam clean countertops, backsplashes, stovetops, range hoods, and appliance surfaces, along with showers, tubs, tile walls, and faucets. It's popular for Vancouver kitchens dealing with grease film and bathrooms dealing with grout mold."],
  ["Is steam cleaning safe for upholstery and mattresses in Vancouver homes?", "Yes, with some limits. On upholstery, it's used for spot-treatment rather than a full wet clean, and on mattresses it sanitizes the surface with very low moisture. We assess each piece first, since it's not suitable for every fabric or unsealed surface."],
  ["Is steam cleaning safe for kids, pets, and people with allergies?", "Yes, that's one of the main reasons Vancouver households book it. Since the process relies on heat instead of chemical spray, there's no residue or fumes left behind, which matters in homes with crawling kids, pets, or anyone sensitive to scented cleaning products."],
  ["Do you offer chemical-free disinfecting for high-touch surfaces at Vancouver offices, gyms, and strata buildings?", "Yes. Light switches, door handles, railings, and shared equipment are common trouble spots at any Vancouver workplace or strata common area. We offer this sanitizing for homes, offices, gyms, schools, and shared building spaces across the city."],
  ["How long do surfaces take to dry after steam cleaning?", "Fast. Steam is mostly water vapor, so it leaves far less moisture behind than a wet mop or spray-and-wipe clean. Most tile, fixtures, and countertops are dry within minutes, and upholstery or mattress spot-treatment dries quicker than a full wet clean would."],
  ["Do I need to be home during a Vancouver steam cleaning appointment?", "Not necessarily, though many condo owners choose to be there for the first visit to walk the crew through building access. After that, some clients arrange building entry or a lockbox so the crew can work while they're out."],
  ["Do condo and strata buildings in Downtown or Yaletown require anything before you can steam clean a unit?", "Often, yes. Many towers require concierge sign-in, a booked elevator window for equipment, or advance notice to building management. We work around whatever your building requires, so let us know your building's process when you book."],
  ["How does Mint Sanitary handle scheduling for Vancouver jobs since your crews are based in North Vancouver?", "Our crews and equipment are based in North Vancouver and travel across the Lions Gate or Ironworkers Memorial Bridge for every Vancouver appointment. That travel time is factored into scheduling, so booking a day or two ahead gets you a wider choice of time slots."],
  ["Can you guarantee same-day steam cleaning in Vancouver?", "We can't guarantee same-day service in Vancouver the way we can closer to our North Vancouver base, since bridge traffic affects arrival windows. Call ahead and we'll fit you in as soon as a slot opens up."],
  ["How much does steam cleaning cost in Vancouver?", "Cost depends on the surfaces involved and the scope of the job, so we don't publish a flat rate. Request a free estimate through our rates page and we'll give you an accurate number for your Vancouver home or business."],
  ["Do you offer a discount for first-time Vancouver customers?", "Yes. First-time customers get 10% off their first clean with code MINT26, whether that's a single room of tile and grout or a full high-touch sanitizing visit."],
  ["What is your guarantee if I'm not happy with the steam cleaning?", "Every job comes with a 24-hour satisfaction guarantee. If something's off after we leave, tell us within 24 hours and we'll make it right."],
  ["How often should condo owners in Yaletown or the West End book steam cleaning for allergen control?", "It depends on the household, but many condo owners in shared-air buildings book every few months for bathroom and kitchen surfaces, with high-touch sanitizing added more often if someone in the unit has allergies or a compromised immune system. We can suggest a schedule once we see the space."],
  ["What Vancouver neighbourhoods do you serve for steam cleaning?", "We serve Downtown Vancouver, Yaletown, the West End, Kitsilano, Mount Pleasant, Fairview, Kerrisdale, Point Grey, Commercial Drive, and Dunbar."],
  ["How do I book steam cleaning in Vancouver?", "Call 236-688-3248 or book online, 7 days a week including evenings and weekends. First-time customers can use promo code MINT26 for 10% off their first clean with Mint Sanitary."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Steam Cleaning in Vancouver",
      intro: "Chemical-free steam cleaning uses hot water vapor instead of scrub brushes and bleach. Mint Sanitary runs the Dupray Hill Injection, a commercial-grade steam cleaner that heats water to as high as 345°F and pushes it out under up to 121 psi of pressure. That heat and pressure combination breaks down grease, soap scum, and mold without a single chemical spray.",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Is This the Same as Carpet Steam Cleaning?",
      body: [
        para("No, and this trips a lot of people up, so it's worth spelling out clearly. Mint Sanitary's carpet cleaning page uses \"steam cleaning\" as a nickname for hot water extraction, a wet cleaning method that soaks carpet fibers, agitates them, and extracts the dirty water back out. That's a different process, built for a different job."),
        para("This page describes dry vapor steam cleaning for hard surfaces, fixtures, and light fabric spot-treatment. It uses very little moisture and no soaking. Hot water extraction is the industry standard for deep carpet cleaning, recognized under the IICRC S100 standard for textile care, and it's not something the Dupray steam system is built to replace."),
        paraWithLink(
          "If you need your carpets cleaned in Vancouver, our ",
          "carpet cleaning in Vancouver",
          "/vancouver/carpet-cleaning",
          " page covers hot water extraction. If you need tile, grout, kitchen surfaces, bathroom fixtures, or high-touch sanitizing, you're in the right place."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("In Downtown, Yaletown, and West End towers, bathroom exhaust fans often vent into shared shafts, and units stacked above and below each other pass humidity through shared plumbing walls. Grout that looks fine on the surface can be holding mold spores that move through a building's shared air more than a single-family home's would. If a unit smells musty near the bathroom or kitchen backsplash even after a normal clean, that's usually the grout itself, not the visible surface."),
        para("Character homes in Kitsilano and Dunbar deal with a different version of the same problem. Original tile from decades-old bathrooms often sits on a drier subfloor than a high-rise unit, but the grout still absorbs Vancouver's rain-season humidity through joints that were never sealed for today's climate, and a hard scrub can push mildew deeper into the grout instead of out."),
        para("Households managing allergies or asthma are one of the more common reasons Vancouver residents book this service. Because steam sanitizes with heat instead of chemical residue, it's worth considering when someone in the home reacts to scented cleaners, or when a building's shared air makes chemical odors travel between units. Shared laundry rooms, gym equipment, and lobby high-touch points in Fairview and Mount Pleasant strata buildings run into the same issue: odor-free sanitizing works better in spaces other residents pass through all day."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Steam Cleaning Prices",
      tiers: [],
      notes: [
        "Cost depends on the surfaces involved and the scope of the job, so we don't publish a flat rate.",
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink(
          "Request a free estimate through our ",
          "rates",
          "/rates",
          " page and we'll give you an accurate number for your Vancouver home or business."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Steam Cleaning Process Works",
      checklistItems: [],
      steps: [
        {
          _key: key("step"),
          title: "We assess the surfaces first",
          body: "We confirm what's steam-safe and rule out anything that isn't, like unsealed hardwood, paper-based materials, or finishes that can't handle heat and moisture.",
        },
        {
          _key: key("step"),
          title: "We run the Dupray Hill Injection system",
          body: "Heating water to up to 345°F and delivering it at up to 121 psi, working through grout lines, fixtures, appliances, or fabric spot-treatment areas as needed.",
        },
        {
          _key: key("step"),
          title: "The dual-tank design keeps the crew working",
          body: "One tank refills while the other keeps running, so the crew works through a full unit or common area without stopping to reheat mid-job.",
        },
        {
          _key: key("step"),
          title: "Surfaces dry fast",
          body: "Because steam carries very little moisture, rooms and shared spaces are usable again shortly after the crew finishes.",
        },
      ],
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Homeowners/Businesses Choose Mint Sanitary",
      items: [
        { _key: key("why"), title: "Vetted teams", body: "Every cleaner is background-checked, bonded, and insured, with WorkSafeBC coverage on every job." },
        { _key: key("why"), title: "Mostly plain water", body: "We use eco-friendly, non-toxic, plant-based products, and this steam service takes that a step further with plain water doing most of the work. Detergent injection is available for tougher jobs, but it's not required for most homes." },
        { _key: key("why"), title: "Satisfaction guarantee", body: "Every clean comes with a 24-hour satisfaction guarantee, so if something's off, we'll make it right." },
        { _key: key("why"), title: "Flexible scheduling", body: "Booking is open 7 days a week, including evenings and weekends. Because our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge for every Vancouver job, book ahead for the fastest available slot rather than expecting same-day service." },
        { _key: key("why"), title: "Top-rated", body: "We're rated 5 out of 5 from 50+ Google reviews." },
        { _key: key("why"), title: "First clean discount", body: "New customers get 10% off their first clean with code MINT26." },
        { _key: key("why"), title: "Built for building access", body: "Our crews know the difference between running the Dupray system in a Yaletown high-rise, where building management may require a concierge sign-in and a booked elevator window, and a Dunbar character home with driveway access and no scheduling constraints beyond the homeowner's own." },
        { _key: key("why"), title: "Made for shared-air buildings", body: "In shared-air buildings across Downtown, West End, and Fairview, going chemical-free matters more than it might in a detached home, since odors and airborne residue travel through shared hallways and ventilation in a way they don't when walls are exterior." },
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
        para("Vancouver's rain season runs roughly October through April, the same general pattern as North Vancouver, but the way that moisture interacts with steam cleaning changes with the building type. In a Downtown or Yaletown high-rise, bathroom and kitchen ventilation is often mechanical rather than a simple window, and multiple units can share exhaust infrastructure. Mold that takes hold in one unit's grout can be a symptom of a shared humidity problem the homeowner didn't cause and can't fix by scrubbing harder. Steam treats what's already there without adding chemical vapor into ductwork or air handling systems other residents share."),
        para("Character homes in Kitsilano, Point Grey, and Dunbar face the opposite structural issue. These properties often have older single-pane windows and less consistent bathroom exhaust, so grout and tile grow mildew even with regular cleaning. Because steam works on contact instead of depending on ventilation to carry away chemical fumes, it fits both situations without switching products between jobs."),
        para("Density is the other factor specific to Vancouver. With ten neighbourhoods spanning high-rise cores and low-rise streets often only a few kilometres apart, a chemical-heavy clean in one unit can be noticed by a neighbour through a shared wall or hallway in a way that rarely happens in a detached North Vancouver home. Chemical-free steam cleaning avoids that entirely, which is part of why it gets requested specifically in Vancouver's denser buildings."),
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
      heading: "Neighbourhoods We Serve for Steam Cleaning in Vancouver",
      body: [
        para("We offer chemical-free steam cleaning across Vancouver, including Downtown Vancouver, Yaletown, and the West End, where condo towers and shared-air buildings make chemical-free sanitizing especially useful, along with Kitsilano, Mount Pleasant, Fairview, Kerrisdale, Point Grey, Commercial Drive, and Dunbar. Whether it's a high-rise bathroom or a character-home kitchen, we bring the same Dupray equipment and assess each surface before we start."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Steam Cleaning in Vancouver?",
      body: "Vancouver's condo towers and character homes both give grout, tile, and shared surfaces plenty of chances to hold onto mold and grime. Mint Sanitary's chemical-free steam cleaning tackles that without adding chemicals into a home or a shared building's air. Call 236-688-3248 or request a free estimate to get your Vancouver space steamed and sanitized. Use code MINT26 for 10% off your first clean, and see full pricing on our rates page.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Chemical-Free Steam Cleaning in Vancouver",
    heroHeading: "Chemical-Free Steam Cleaning in Vancouver",
    heroIntro: "Downtown, Yaletown, and West End condo towers share hallways, elevators, and often the same ventilation infrastructure across dozens of units, so mold in one bathroom's grout rarely stays a one-unit problem. Mint Sanitary brings chemical-free steam cleaning to Vancouver homes and buildings, a good fit for anyone managing allergies, shared-air concerns, or a building where chemical odor travels between units. We're rated 5 out of 5 across 50+ Google reviews, and first-time customers get 10% off with code MINT26. Our crews travel from North Vancouver for every Vancouver job, so same-day booking isn't guaranteed the way it is closer to home base. Call ahead to lock in a slot.",
    metaTitle: "Chemical-Free Steam Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Chemical-free steam cleaning for Vancouver condos and character homes. Tile, grout, and high-touch sanitizing without chemicals. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
