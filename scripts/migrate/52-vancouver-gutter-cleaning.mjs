import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "gutter-cleaning";

const whatsIncludedCards = [
  {
    title: "Complete Debris Removal",
    body: "Hand removal of leaves, twigs, pine needles, moss, shingle granules, dirt, and organic buildup. Vancouver's dense tree cover in neighbourhoods like Dunbar and Point Grey means fine particles build up fast too, so vacuum equipment catches what hand removal can't.",
  },
  {
    title: "Downspout Flushing",
    body: "High pressure flushing confirms every downspout is fully clear and routing water away from the foundation.",
  },
  {
    title: "System Inspection",
    body: "Technician checks loose brackets, missing hardware, rust spots, seam leaks, and pitch problems, with before and after photo documentation on every visit.",
  },
  {
    title: "Gutter Guard Evaluation",
    body: "Plenty of homes, especially in treed pockets like Point Grey and Kerrisdale, already have guards installed. We clean and evaluate them for damage.",
  },
  {
    title: "Environmentally Responsible Disposal",
    body: "Debris bagged and hauled away following Metro Vancouver stormwater rules, never dumped in the yard or a storm drain.",
  },
].map((c) => ({ _key: key("card"), ...c, items: [] }));

const processSteps = [
  {
    title: "Safety Setup",
    body: "We position extension ladders on stable, level ground, with extra care taken on Vancouver's sloped yards. All equipment and surrounding landscaping are protected, and our team wears appropriate safety harnesses and protective gear.",
  },
  {
    title: "Manual Debris Removal",
    body: "Working systematically from end to end, the technician hand-removes bulk debris (leaves, branches, moss buildup) using a scoop or by hand. For heavily clogged gutters on Vancouver's densely treed properties, this step can take 30 to 45 minutes per side.",
  },
  {
    title: "Vacuum and Pressure Flushing",
    body: "High-powered gutter vacuum removes fine debris that hand removal misses. The downspout is then flushed with controlled water pressure to keep water flowing from the gutter opening all the way to the ground.",
  },
  {
    title: "Water Testing and Verification",
    body: "A small amount of water is poured through the gutter to verify proper pitch toward downspouts. The technician observes the flow path and confirms water is moving as intended, not pooling anywhere along the gutter line.",
  },
  {
    title: "Bracket and Fastener Check",
    body: "Loose hardware is tightened on the spot. Leaking seams are noted. Rust or damage is documented so you know exactly what may need repair in the coming months.",
  },
  {
    title: "Documentation and Report",
    body: "Before and after photos are taken. A detailed service report is emailed to you the same day, along with any repair recommendations and a timeline for follow-up cleaning.",
  },
].map((s) => ({ _key: key("step"), ...s }));

const whyChooseItems = [
  {
    title: "Professional Safety Equipment",
    body: "We position extension ladders on stable, level ground. Our team wears appropriate safety harnesses and protective gear, keeping ladder work and roof access off your plate entirely.",
  },
  {
    title: "Thorough Inspection Included",
    body: "Every visit includes a full inspection, which catches rust developing inside the gutter, seam leaks, and fascia rot hidden behind the gutter line while repairs are still small and inexpensive, especially valuable on the decades-old gutter systems common on character homes in Kerrisdale and Dunbar.",
  },
  {
    title: "Before & After Photo Documentation",
    body: "We photograph your gutters before and after the service. You receive a detailed service report by email, including any repair recommendations and follow-up timeline.",
  },
  {
    title: "Eco-Friendly Disposal",
    body: "Debris is removed and disposed of properly, in line with Metro Vancouver bylaws, keeping it out of storm drains that feed English Bay and False Creek, not left in the yard or washed into the street.",
  },
  {
    title: "Book Ahead for the Fastest Slot",
    body: "We're available 7 days a week, including evenings and weekends, but our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial bridge to reach Vancouver addresses. Booking a few days ahead gets you the fastest available slot, especially heading into fall.",
  },
  {
    title: "Local Tree Canopy Knowledge",
    body: "Our crews know the difference between a deciduous leaf-drop job in Mount Pleasant and a conifer-needle job under the second-growth trees bordering Pacific Spirit Regional Park in Dunbar and Point Grey, and plan equipment and timing around it.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "If you're not satisfied with any aspect of our service, we'll return within 24 hours to make it right, no questions asked, no extra charge.",
  },
].map((i) => ({ _key: key("why"), ...i }));

const faqItems = [
  ["How often do gutters in Vancouver need to be cleaned?", "Twice a year, spring and fall, is the minimum for most Vancouver homes. Character homes under heavy tree cover in Dunbar, Point Grey, Kerrisdale, or Mount Pleasant usually need three to four cleanings a year to keep up with leaf and needle drop."],
  ["Can I clean my gutters myself, or should I hire a professional in Vancouver?", "Professional cleaning is safer and more thorough. Ladder falls are a leading cause of home injury, and professionals carry insurance plus equipment like vacuums and pressure washers that most homeowners don't have on hand. DIY cleaning also tends to miss hidden damage like seam leaks and fascia rot that only shows up during a proper inspection."],
  ["Do condos and apartment buildings in Vancouver need gutter cleaning?", "No. Condo and strata towers in Yaletown, downtown Vancouver, and the West End drain through internal roof systems, not exterior gutters, so this service doesn't apply to them. It's almost exclusively single-family homes, duplexes, and townhouses with their own roofline that need it."],
  ["What's the difference between gutter cleaning and gutter guards?", "Cleaning removes debris that's already built up. Guards are installed to slow down how much debris gets in going forward, but they don't eliminate cleaning altogether since fine particles like shingle granules and pine needle tips still get through. Most Vancouver homes with guards, especially in Point Grey and Kerrisdale, still book a cleaning once a year or so."],
  ["What damage can clogged gutters cause on a Vancouver home?", "Standing water in a clogged gutter works into fascia boards, soffits, siding, and eventually the foundation. Left long enough, that kind of water infiltration commonly runs $3,000 to $25,000 to repair, and rust or seam failure accelerates the longer the gutter sits full."],
  ["Is gutter cleaning covered by my homeowner's insurance in Vancouver?", "Usually not. Standard homeowner's insurance treats gutter cleaning as routine maintenance, and damage traced back to neglected gutters may be excluded from a claim entirely. A twice yearly cleaning is cheaper than most deductibles."],
  ["What causes moss and needle buildup in gutters in Dunbar and Point Grey?", "Homes backing onto Pacific Spirit Regional Park sit under second-growth conifers that shed needles year round, and the shade those trees create keeps gutters damp enough for moss to take hold. Moss then blocks water flow and traps moisture against the metal, which speeds up rust."],
  ["Are Mount Pleasant's older character homes more prone to gutter problems than newer builds?", "Often, yes. Many of Mount Pleasant's Craftsman-style character homes still run original or older gutter systems that were sized for a smaller tree canopy than stands over them now, so they clog faster and show wear sooner than a newer install on infill housing nearby."],
  ["Is my Kerrisdale home at higher risk if it backs onto a park or mature trees?", "Properties near Kerrisdale's older tree-lined streets and larger lots do see heavier leaf and seed drop from established maples and chestnuts, which fills gutters faster than a home on a newer, less-planted block. It's worth the extra cleaning per year if your lot backs onto older trees."],
  ["Do you clean gutters on townhouses as well as single-family houses in Vancouver?", "Yes. Any Vancouver property with its own private roofline, whether that's a full single-family house, a duplex, or a townhouse, qualifies for the same service. Shared strata buildings with internal roof drains are the exception, not the rule, here."],
  ["Are your technicians insured for roof and ladder work at Vancouver properties?", "Yes. Every technician is background-checked, bonded, and insured, and every job carries WorkSafeBC coverage, regardless of whether it's a single-storey Kerrisdale bungalow or a steeper roofline in Point Grey."],
  ["How much does gutter cleaning cost in Vancouver?", "Pricing depends on the size of the home, the roofline, and how clogged the gutters are, the same pricing used company-wide. There's no Vancouver premium. Visit our rates page or call 236-688-3248 for a free quote."],
  ["Do you offer gutter guard installation in Vancouver?", "Our main service is professional gutter cleaning with a full system inspection. During that visit we'll flag existing guard damage and can point you to trusted installers if you're considering adding guards to a Dunbar, Point Grey, or Kerrisdale property."],
  ["How do I get a free estimate for gutter cleaning in Vancouver?", "Book online or call 236-688-3248. Estimates take 15 to 20 minutes and include a property walk-through, a gutter assessment, and a cleaning quote. New customers get 10% off their first clean with code MINT26."],
  ["Do you offer same-day gutter cleaning in Vancouver?", "Not guaranteed. Our crews and trucks are based in North Vancouver, so same-day service in Vancouver depends on current bookings and bridge travel time that day. Call 236-688-3248 and we'll give you a straight answer on what's available."],
  ["How long does it take your crew to get to Vancouver from North Vancouver?", "It depends on traffic on the Lions Gate Bridge or the Ironworkers Memorial Bridge and which part of Vancouver you're in, since a westside address in Dunbar or Point Grey sits further from either crossing than downtown does. We build that travel time into scheduling rather than promising a fixed window."],
  ["When should I book gutter cleaning before the fall rains hit Vancouver?", "Late September through early October, ahead of the wet season that typically runs October through April, is the best window. Booking early avoids getting stuck behind everyone else who waited until the first big storm."],
  ["What happens if a downspout is clogged underground on my Vancouver property?", "We flush and clear what's accessible from the surface, which handles the vast majority of clogs. If a downspout ties into an older underground drain line, common on some of Kerrisdale and Dunbar's older lots, and the blockage sits deeper than we can reach, we'll let you know so you can bring in a drain specialist."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Gutter Cleaning in Vancouver",
      intro: "Vancouver's character homes in tree-canopied pockets like Dunbar and Point Grey collect more leaf litter, moss, and standing water than the city's condo towers, which don't have gutters at all, so every visit here covers the full system from the roofline down to the downspout outlet.",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Vancouver's gutter cleaning calls come almost entirely from single-family and low-rise character homes, not condo towers, since condos drain through internal roof systems that strata manages, not a gutter line a homeowner books directly. In Dunbar and Point Grey, the usual trigger is a visible mat of wet conifer needles sitting under the eaves of homes backing onto Pacific Spirit Regional Park, sometimes with moss already growing on top of the debris. Kerrisdale's older character homes, many with decades-old gutter systems under mature chestnut and maple trees, tend to show water streaking down siding or fascia boards starting to peel at the corners."),
        para("Mount Pleasant's mix of older Craftsman-style houses and newer infill sees a wider range, from gutters overwhelmed by street tree leaf drop each October to smaller issues like a downspout that overflows onto a shared walkway between a house and its laneway home. Overflow pooling near a foundation after a heavy rain, sagging gutter sections pulling away from the fascia, and plants sprouting out of the gutter itself are all signs it's time to book, whether the property is a full single-family lot or a townhouse with its own private roofline."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Vancouver Gutter Cleaning Prices",
      body: [
        para("Pricing depends on the size of the home, roofline complexity, and how clogged the gutters are, the same as everywhere else Mint Sanitary works. There's no Vancouver premium and no discount built into the location. For current rates, visit our rates page or call 236-688-3248 for a free, no obligation quote for your Vancouver property."),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Gutter Cleaning Process Works",
      checklistItems: [],
      steps: processSteps,
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        para("This process typically takes 1.5 to 2.5 hours for most homes, depending on the complexity of your roof, the length of your gutter system, and the amount of debris accumulated."),
      ],
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
        para("Gutter cleaning in Vancouver is a story about tree canopy and housing type more than sheer rainfall volume. Vancouver sits at sea level away from the North Shore mountains, so it doesn't get the same orographic rain boost that soaks North Vancouver, but that doesn't take gutters off the hook. Dunbar and Point Grey border Pacific Spirit Regional Park directly, and homes along that edge collect a steady drop of conifer needles and broadleaf litter for most of the year, not just a fall burst. Kerrisdale and parts of Mount Pleasant carry some of Vancouver's oldest surviving single-family housing stock, with original or long-since-replaced gutter systems sized for a smaller, less mature tree canopy than stands over them today."),
        para("Condo towers downtown, in Yaletown, and along the West End skyline never enter this conversation at all, since they drain through internal roof systems, not exterior gutters, which is exactly why this service concentrates so heavily in the city's house-heavy west side and Mount Pleasant rather than spreading evenly across every Vancouver neighbourhood."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Pressure Washing in Vancouver", "/vancouver/pressure-washing"]]),
        multiLinkPara(["", ["Window Cleaning in Vancouver", "/vancouver/window-cleaning"]]),
        multiLinkPara(["", ["House Cleaning in Vancouver", "/vancouver/house-cleaning"]]),
        multiLinkPara(["", ["Deep Cleaning in Vancouver", "/vancouver/deep-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Gutter Cleaning in Vancouver",
      body: [
        para("Mint Sanitary provides gutter cleaning throughout Vancouver, including Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar, though the calls concentrate where the houses are. Dunbar, Point Grey, Kerrisdale, and Mount Pleasant make up the bulk of our Vancouver gutter cleaning bookings, since single-family and low-rise character homes there sit under mature trees that condo towers downtown and in Yaletown simply don't have to deal with. If your Vancouver address isn't listed above, call 236-688-3248 or email hello@mintsanitary.com to confirm coverage."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Gutter Cleaning in Vancouver?",
      body: "Clogged gutters cause water damage that costs thousands to repair. Don't wait for overflow or foundation problems, especially on a character home in Dunbar, Point Grey, Kerrisdale, or Mount Pleasant sitting under mature trees. Call 236-688-3248 or email hello@mintsanitary.com. Use code MINT26 for 10% off your first service. View our rates.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Gutter Cleaning in Vancouver",
    heroHeading: "Gutter Cleaning in Vancouver",
    heroIntro: "Vancouver's character homes in Dunbar, Point Grey, Kerrisdale, and Mount Pleasant sit under some of the city's biggest street trees, chestnuts and old maples in Kerrisdale, second-growth conifers spilling over from Pacific Spirit Regional Park in Dunbar and Point Grey, and they drop leaves and needles straight into the gutter line every fall. Mint Sanitary is rated 5 out of 5 across 50+ Google reviews, and new customers get 10% off their first clean with code MINT26. Our crews and trucks are based across the water in North Vancouver, so same-day service in Vancouver isn't guaranteed the way it is closer to home. Book a few days ahead, especially before the fall rains start.",
    metaTitle: "Gutter Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Gutter cleaning for Vancouver character homes in Dunbar, Point Grey, Kerrisdale, and Mount Pleasant. 5 out of 5 rated, 10% off first clean with code MINT26.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
