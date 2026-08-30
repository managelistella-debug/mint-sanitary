import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "upholstery-cleaning";

const whatsIncludedCards = [
  {
    title: "Sofas & Sectionals",
    body: "Sectionals get a full clean, cushions, frames, arms, backs, and base panels included. We deep-clean cushion seams and crevices and pre-treat body oils and other high-contact areas before the main clean.",
  },
  {
    title: "Armchairs & Recliners",
    body: "Armrests and headrests get the same full clean as the rest of the chair, and we work carefully around recliner mechanisms. We match the method to the fabric and spot-treat high-contact zones.",
  },
  {
    title: "Dining & Office Chairs",
    body: "Seat and back panels get a thorough clean, with dedicated treatment for food and drink stains. The process is safe for fabric, vinyl, and mixed materials.",
  },
  {
    title: "Ottomans, Headboards & More",
    body: "We clean ottomans and footstools on all sides, treat headboards with fabric-safe methods, and clean cushions and throw pillows individually. Outdoor patio fabric furniture is also welcome.",
  },
  {
    title: "Cleaning Methods",
    body: "Vancouver homes see a wide mix of fabrics, from durable family-room microfiber to delicate vintage pieces passed down through generations. We inspect each item before choosing a method, so your furniture gets the treatment it needs.",
  },
  {
    title: "Steam and Hot Water Extraction",
    body: "This is the most thorough option for durable fabrics like cotton, polyester, and microfiber, and it is the method we reach for most often in homes with pets or kids. Hot water and a cleaning solution are injected deep into the fabric, then extracted along with dirt, allergens, and bacteria.",
  },
  {
    title: "Dry Cleaning",
    body: "Delicate fabrics like silk, velvet, and vintage upholstery need a low-moisture approach. Many clients with heirloom or designer pieces choose this method, since specialized solvents clean without saturating the material. Drying is faster, with no risk of water damage or shrinkage.",
  },
  {
    title: "Foam Cleaning",
    body: "Foam cleaning sits in the middle and works well for lightly soiled furniture or fabric that is sensitive to moisture. An encapsulating foam traps dirt particles, which are then vacuumed away.",
  },
  {
    title: "Inspection-Based Selection",
    body: "There is no single method that works for every fabric in every home. Before any cleaning starts, we check the fabric type, manufacturer care codes, existing damage, and stain type, then recommend the method that fits your piece.",
  },
].map((c) => ({ _key: key("card"), items: [], ...c }));

const faqItems = [
  ["What types of furniture do you clean in Vancouver?", "We clean sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor fabric furniture. If it has upholstery, our Vancouver team can clean it."],
  ["Can you remove pet stains and odors from upholstery in Vancouver homes?", "Yes. Enzyme-based treatments break down pet urine, vomit, and other organic stains at the molecular level. Odors are neutralized at the source instead of being masked."],
  ["How long does upholstery take to dry after cleaning in Vancouver?", "Steam cleaning takes about 4 to 8 hours, dry cleaning takes 2 to 4 hours, and leather dries in about 1 to 2 hours. Vancouver's damper months make fans and good ventilation especially useful, and we give you specific care instructions after the job."],
  ["Is upholstery cleaning safe for delicate fabrics?", "Yes. We inspect every piece before cleaning and choose the safest method for that fabric. Delicate materials like silk, velvet, and vintage upholstery get dry cleaning, which avoids water damage."],
  ["How often should upholstery be professionally cleaned in a Vancouver home?", "Most homes do well with a clean every 12 to 24 months. Homes with pets, kids, or allergy sufferers benefit from cleaning every 6 to 12 months, and high-traffic commercial furniture should be cleaned quarterly."],
  ["Will cleaning remove all the stains from my furniture?", "Most stains come out fully or improve a great deal. Some, like permanent marker, bleach damage, or very old set-in stains, may not come out completely. We give an honest read on what to expect before we start."],
  ["Do you clean leather furniture in Vancouver?", "Yes. Leather needs different products and techniques than fabric. Our team cleans, conditions, and protects leather to help prevent cracking, fading, and drying out."],
  ["Can you clean upholstery on-site in Vancouver, or do I need to bring furniture in?", "All cleaning happens on-site at your home or business. There is no need to move furniture or drop it off anywhere."],
  ["Are your cleaning products safe for kids, pets, and people with allergies?", "Yes. We use non-toxic, eco-friendly, plant-based products with no harsh chemicals and no strong fumes, which also helps in condo units where fumes have nowhere to vent quickly."],
  ["How much does upholstery cleaning cost in Vancouver?", "Most individual pieces run $100 to $200, depending on size, fabric, and condition. Sectionals and larger pieces may cost more. Request a free estimate at /rates, and use code MINT26 for 10% off your first Vancouver clean."],
  ["Do you offer same-day upholstery cleaning in Vancouver?", "Not guaranteed. Our crews are based in North Vancouver and travel across the bridges for Vancouver appointments, so same-day availability depends on that day's route and traffic. Booking a day or two ahead gives you a much wider choice of times."],
  ["Can you clean upholstery in a Yaletown or downtown condo with concierge or elevator booking rules?", "Yes. Let us know your building's sign-in process and elevator booking window when you schedule, and we will plan the visit around it. This comes up often enough in Yaletown and downtown towers that it is a normal part of booking."],
  ["Do you clean upholstery in Kitsilano and Dunbar character homes with older or vintage fabric?", "Yes. We check fabric type and care codes before starting, and heirloom or vintage pieces typically get dry cleaning to avoid water damage or shrinkage. This comes up regularly in Kitsilano and Dunbar homes with older furniture."],
  ["How far in advance should I book upholstery cleaning in Vancouver?", "A few days ahead is a safe bet, especially for evening or weekend slots. Since our team travels from North Vancouver for every Vancouver job, advance booking gives us more flexibility to fit your appointment into the day's route."],
  ["Do you serve Kerrisdale and Point Grey for upholstery cleaning?", "Yes. We clean upholstery in Kerrisdale and Point Grey along with Kitsilano, Dunbar, Mount Pleasant, Commercial Drive, Fairview, Downtown Vancouver, Yaletown, and the West End."],
  ["Is Mint Sanitary based in Vancouver?", "Mint Sanitary is based in North Vancouver, and our crews travel across the Lions Gate or Ironworkers Memorial Bridge to serve Vancouver. We still offer the same 24-hour satisfaction guarantee and background-checked, bonded, and insured team on every Vancouver job."],
  ["Can I book upholstery cleaning together with house cleaning in Vancouver?", "Yes. Many clients pair upholstery cleaning with a regular house cleaning or add carpet cleaning for a fuller refresh. Ask about bundling when you request your estimate."],
  ["Do you offer multi-piece discounts for a Vancouver condo with several small furniture pieces?", "Yes. Multi-piece discounts apply when you book several items together, which suits condo living rooms that often have a sectional, an accent chair, and dining chairs all needing attention at once."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Upholstery Cleaning in Vancouver",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Kitsilano and Dunbar are full of older character homes where the same sofa or wingback chair has sat in the living room for fifteen or twenty years. Sun through east and west facing windows fades and dries out fabric over time, and older upholstery in these homes often has stitching or filling that needs a gentler method than a newer piece would. If cushions have gone flat, the fabric under the seams looks noticeably brighter than the rest of the piece, or a pet has claimed a favorite armchair, that is usually a sign it is due."),
        para("Downtown and Yaletown condos see a different pattern. Furniture in a compact unit gets used constantly because there is nowhere else to sit, work, or eat, and there is rarely a spare room to rotate a piece out of daily use. A sectional or accent chair that would last a decade in a larger house can show wear in half that time in a condo living room that doubles as a home office and a dining area. Move-in and move-out cleanings in these buildings often turn up upholstery a previous tenant never had cleaned at all, which is worth checking before you settle in or hand back the keys."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Upholstery Cleaning Prices",
      tiers: [
        {
          _key: key("tier"),
          title: "Individual Pieces",
          range: "$100 to $200",
          body: "Depending on the size of the furniture, the fabric type, and its condition. Sectionals and larger pieces may cost more. Multi-piece discounts are available when you book several items together.",
        },
      ],
      notes: [
        "Price depends on: size and type of furniture piece, fabric type and manufacturer care code, severity of stains and soiling, odor treatment requirements, and number of pieces being cleaned.",
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink(
          "For a firm number for your Vancouver home, request a free estimate at ",
          "/rates",
          "/rates",
          "."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Upholstery Cleaning Process Works",
      checklistItems: [],
      steps: [
        { _key: key("step"), title: "Free fabric assessment", body: "We inspect fabric type, care codes, stain types, and condition at your Vancouver home before recommending a cleaning method." },
        { _key: key("step"), title: "Book at your convenience", body: "Vancouver appointments run seven days a week, including evenings and weekends. All cleaning happens on-site, so there is no need to move or drop off furniture." },
        { _key: key("step"), title: "Pre-vacuuming and pre-treatment", body: "Commercial-grade HEPA vacuuming lifts embedded pet hair, crumbs, and debris. We then pre-treat stains and high-traffic areas." },
        { _key: key("step"), title: "Deep fabric cleaning", body: "We apply the method matched to your fabric: steam extraction, dry cleaning, or foam cleaning." },
        { _key: key("step"), title: "Odor neutralization and extraction", body: "Enzyme-based treatments break down pet odors, smoke, food smells, and mustiness at the molecular level instead of masking them. All solution and loosened dirt is fully extracted." },
        { _key: key("step"), title: "Post-clean inspection", body: "We walk through the results with you, check every piece, share care tips, and stand behind the work with our 24-hour satisfaction guarantee." },
      ],
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Homeowners Choose Mint Sanitary",
      items: [
        { _key: key("why"), title: "Eco-friendly, fabric-safe products", body: "Non-toxic, plant-based, and biodegradable, matched to the fabric type, and safe around kids and pets." },
        { _key: key("why"), title: "Multiple cleaning methods", body: "Steam, dry, or foam cleaning selected based on the fabric, care code, and condition of each piece." },
        { _key: key("why"), title: "Transparent pricing", body: "A free on-site inspection and an honest quote before we start, with no hidden fees." },
        { _key: key("why"), title: "Satisfaction guarantee", body: "If any area does not meet expectations, we return within 24 hours to fix it." },
        { _key: key("why"), title: "Book ahead for the fastest slot", body: "Our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge for every Vancouver appointment, so same-day booking is not guaranteed the way it is closer to home base. Booking a few days out gets you the widest choice of times, especially for evening and weekend slots." },
        { _key: key("why"), title: "Built for condo and strata access", body: "Downtown and Yaletown buildings often mean concierge sign-in, a booked elevator window, and a set visitor parking limit. We plan arrival times around those rules instead of leaving you to manage them." },
        { _key: key("why"), title: "Comfortable with older, heirloom fabric", body: "Kitsilano and Dunbar character homes often have vintage or inherited pieces with fabric a newer sofa would not have. We check care codes and condition before choosing steam, dry, or foam cleaning so an older piece is not put at risk." },
        { _key: key("why"), title: "First clean savings", body: "Use code MINT26 for 10% off your first Vancouver clean." },
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
        para("Vancouver's downtown, Yaletown, and West End towers are built for shared air. A steam-cleaned sectional in a high floor unit with one operable window does not dry the way the same sectional would in a Kitsilano or Dunbar character home with cross breezes through several rooms. That is one reason our technicians lean on foam or dry cleaning more often for condo upholstery during the wet season between October and April, when leaving windows open for hours after a clean is not always practical."),
        para("Character homes bring the opposite problem. Older sofas and armchairs in Point Grey, Dunbar, and Kitsilano houses have often sat in the same spot for years, picking up sun exposure through south facing windows and settled dust in seams that a newer condo sectional has not had time to accumulate. Vancouver's housing stock spans both extremes within a few kilometres, which is why a fabric assessment before every job matters more here than a one-size-fits-all approach would."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["House Cleaning in Vancouver", "/vancouver/house-cleaning"]]),
        multiLinkPara(["", ["Deep Cleaning in Vancouver", "/vancouver/deep-cleaning"]]),
        multiLinkPara(["", ["Drapes and Curtains Cleaning in Vancouver", "/vancouver/drapes-curtains-cleaning"]]),
        multiLinkPara(["", ["Carpet Cleaning in Vancouver", "/vancouver/carpet-cleaning"]]),
        multiLinkPara(["", ["Move-In Move-Out Cleaning in Vancouver", "/vancouver/move-in-move-out-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Upholstery Cleaning in Vancouver",
      body: [
        para("Mint Sanitary cleans upholstery throughout Vancouver, from character-home living rooms in Kitsilano, Dunbar, and Point Grey to condo towers in Yaletown, Downtown Vancouver, the West End, and Fairview. Mount Pleasant and Commercial Drive add their own mix again, with older character homes and low-rise apartments side by side, and Kerrisdale's larger family homes bring their own set of sofas, dining chairs, and window seat cushions. Crews travel from our North Vancouver base for every visit, so Vancouver bookings are scheduled around bridge and tunnel travel time rather than promised same-day. If your neighbourhood is not listed here, call and ask. We may already be covering it."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Upholstery Cleaning in Vancouver?",
      body: "Get a free, no-obligation quote at /rates, or call 236-688-3248 to book a time that works for you. Our team is background-checked, bonded, and insured, and backed by a 24-hour satisfaction guarantee. Because crews travel from North Vancouver, book a few days ahead when you can. Use code MINT26 for 10% off your first clean.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Upholstery Cleaning in Vancouver",
    heroHeading: "Upholstery Cleaning in Vancouver",
    heroIntro: "Kitsilano and Dunbar character homes often hold onto the same sofa or armchair for decades, and older fabric holds onto sun fading, pet hair, and years of daily use in ways vacuuming never touches. A few kilometres away, downtown and Yaletown condos pack smaller sectionals and accent chairs into tighter square footage, where the same pieces get used harder and cleaned less often. Mint Sanitary brings professional upholstery cleaning to both, using eco-friendly, non-toxic, plant-based products, with a 5 out of 5 rating from 50+ Google reviews. Our crews travel from our North Vancouver base across the bridges for every Vancouver visit, so book ahead rather than expecting same-day service. Use code MINT26 for 10% off your first clean.",
    metaTitle: "Upholstery Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Professional upholstery cleaning in Vancouver for condos and character homes. Eco-friendly products, 5 out of 5 rating. Code MINT26 saves 10%.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
