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
 * /north-vancouver/drapes-curtains-cleaning — migrated from the hand-coded
 * page now parked at /north-vancouver/drapes-curtains-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The original page's heroImage was an external Unsplash URL
 *    ("https://images.unsplash.com/photo-1513694203232-...", not a file
 *    under /public), so it can't be uploaded via uploadImage(), which only
 *    reads from /public. Treated the same as a missing local asset: skipped,
 *    heroImage is left unset on this doc. Flagged in the migration report.
 *  - The "In-Home vs. Drop-Off" comparison (each with its own per-linear-
 *    foot price) maps cleanly onto Pricing tiers; the near-duplicate later
 *    "Pricing" section on the original page (same discount reminder, plus a
 *    "Free Estimate Process" blurb) had no new tier data, so it became the
 *    Pricing section's notes instead of a second pricing block.
 *  - Related Services and the Service Areas cross-links all point at other
 *    /north-vancouver/... pages, so per the mapping rules they're Rich Text
 *    paragraphs with real links rather than Service Tiles.
 */

const fabricTypes = [
  ["Silk Drapes", "Silk reacts to moisture, temperature, and pH. Get any of those wrong and you risk shrinkage, fading, or bleeding dye. We use low-moisture methods with pH-balanced, plant-based solvents, and we test colorfastness on a hidden section before starting."],
  ["Velvet Curtains", "Velvet's soft nap flattens and mats under aggressive rubbing or high-pressure water. Standard carpet cleaning equipment would damage it permanently. We vacuum gently, spot-treat where needed, use moisture-controlled extraction, and brush the nap back into shape afterward."],
  ["Linen Drapes", "Linen is a natural fiber that shrinks under heat and moisture and wrinkles easily. We control moisture carefully through the whole process and dry linen drapes on specialized racks rather than letting them air dry unevenly."],
  ["Synthetic Fabrics", "Synthetic curtains tolerate more moisture and heat than natural fibers, but they still trap odors and embedded dust over time. Cleaning them keeps them fresh and extends how long they look good."],
  ["Blackout and Thermal-Backed Curtains", "Blackout curtains have an acrylic resin backing that deteriorates with water exposure. In-home dry cleaning is the only safe method for these curtains in North Vancouver homes. No water touches the backing at any point."],
  ["Lined and Interlining Drapes", "Lined drapes have bonded layers of fabric. Too much water can separate those layers or shrink them unevenly. We keep moisture levels precise for lined and interlined pieces so the layers stay bonded correctly."],
  ["Specialty Fabrics", "Brocade, tapestry, chintz, and lamé curtains are often heirloom pieces or a real investment. We use hand-cleaning techniques and ultra-gentle methods built for fabrics like these."],
];

const processSteps = [
  ["Inspection and Assessment", "We examine the fabric content, current condition, and colorfastness with a test in a hidden area. We also flag anything unusual, like loose beading, delicate embroidery, or backing that needs extra care."],
  ["Pre-Treatment and Vacuuming", "Low-suction vacuuming lifts surface dust, pollen, and loose particles first. Then we apply an eco-friendly pre-treatment matched to the type of staining, whether that's wine, grease, or general organic buildup."],
  ["Cleaning", "For in-home service, we use moisture-controlled dry cleaning with plant-based agents in carefully measured amounts and gentle agitation. For drop-off service at our North Vancouver facility, heavily soiled or delicate fabrics get more intensive treatment. Either way, we monitor moisture levels for the specific fabric on the rod."],
  ["Rinse and Extraction", "Thorough extraction matters because leftover residue causes yellowing and attracts more dirt over time. Heavily soiled curtains get multiple passes. We neutralize odors without masking them under an artificial perfume."],
  ["Drying and Finishing", "In-home cleaning usually leaves curtains hanging with fans running, and they're often dry within a few hours when North Vancouver weather cooperates. Drop-off cleaning uses specialized drying racks in a climate-controlled facility, and we can steam-press curtains afterward to restore their original shape."],
];

const ecoReasons = [
  ["Safer for Delicate Fibers", "Harsh solvents like PERC can weaken silk fibers, strip coatings off blackout backing, and fade color over repeated use. Plant-based products are gentler on delicate fabric while still handling real soils, including grease, wine, food stains, smoke residue, and pet accidents."],
  ["Healthier Home Environment", "Off-gassing and toxic fumes from harsh chemicals aren't something you want lingering in a home, especially where someone deals with chemical sensitivities, asthma, or has young children around. Biodegradable products also don't end up polluting local waterways or soil."],
  ["Built for North Vancouver's Climate", "In a moisture-rich environment, curtains need to dry fast after cleaning. Residual chemical solvents slow that drying process and can attract more moisture. Plant-based products dry faster and resist mold growth better, which is exactly what North Vancouver's damp conditions call for."],
];

const relatedServices = [
  ["Carpet cleaning in North Vancouver", "/north-vancouver/carpet-cleaning"],
  ["Area rug cleaning in North Vancouver", "/north-vancouver/carpet-cleaning#area-rug-cleaning"],
  ["Upholstery cleaning in North Vancouver", "/north-vancouver/upholstery-cleaning"],
  ["House cleaning in North Vancouver", "/north-vancouver/house-cleaning"],
];

const faqItems = [
  ["How often should I have my drapes cleaned in North Vancouver?", "Most North Vancouver homes do well with cleaning every 12 to 18 months for lightly used drapes. High-traffic homes, or ones with pets and kids, should clean annually. Blackout curtains benefit from yearly cleaning too, while formal drapes that see little use can stretch to every two years. If you notice visible dust, odors, or allergy symptoms flaring up, that's your sign to book sooner."],
  ["Can you clean delicate silk drapes in North Vancouver without damaging them?", "Yes. Our trained North Vancouver technicians test colorfastness before touching the fabric, then use pH-balanced, plant-based solvents with low-moisture techniques. We never machine wash or dry silk. For the best result on silk, we typically recommend drop-off service."],
  ["What's the difference between dry cleaning and steam cleaning for curtains in North Vancouver?", "Dry cleaning uses minimal moisture and works faster, often finishing in hours, which makes it the standard choice for in-home service and for blackout curtains. Steam cleaning uses hot water extraction and takes longer, but it's more thorough on heavily soiled fabric. In North Vancouver's humid climate, dry cleaning is often the better everyday choice since it dries faster and resists mold. Heavily soiled drapes still benefit from steam-based extraction through our drop-off service."],
  ["Will your eco-friendly products handle heavily soiled curtains in North Vancouver?", "Yes. Our plant-based formulas break down embedded grease, wine stains, smoke odor, and pet accidents. North Vancouver homes with fireplaces or heavy cooking odors typically see a dramatic difference after a clean. For severe staining, drop-off service allows longer treatment time and stronger results."],
  ["How do I prepare my North Vancouver home for in-home drapery cleaning?", "Not much prep is needed. Just make sure our technicians can reach the windows and curtain rods without having to move heavy furniture, and contain pets if that's easier for your household. We bring our own equipment and drop cloths to every North Vancouver appointment."],
  ["Is pickup and delivery available for drop-off drapery cleaning in North Vancouver?", "Yes. We offer pickup and delivery throughout North Vancouver, including Lower Lonsdale, Lynn Valley, and Deep Cove. You're also welcome to drop off and pick up curtains directly at our facility."],
  ["Can you remove smoke odor from curtains in North Vancouver?", "Yes. Our extraction and odor-neutralizing treatments remove smoke smell from fireplaces, cooking, or past smoking. If the odor is severe, our North Vancouver drop-off service gives us more time with the fabric for a deeper result."],
  ["How long does drapery cleaning take in North Vancouver?", "In-home cleaning typically takes 2 to 4 hours and often finishes same day. Drop-off cleaning takes 3 to 7 business days. We'll give you a specific estimate for your North Vancouver home when you book."],
  ["Are your technicians bonded and insured for work in my North Vancouver home?", "Yes. Every technician working in North Vancouver homes is bonded and insured, so you're covered from the moment they arrive."],
  ["What if my drapes need repair while being cleaned in North Vancouver?", "Our inspection catches loose hems, missing buttons, and broken pleats before cleaning starts. We'll walk you through repair options and costs upfront. Small repairs are sometimes included, while larger restoration work gets quoted separately, so there are no surprises for North Vancouver clients."],
];

console.log("→ /north-vancouver/drapes-curtains-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Professional Drapes and Curtains Cleaning Matters in North Vancouver",
    body: [
      await imageBlock(
        "/eco-friendly-cleaning-products-north-vancouver.jpg",
        "Eco-friendly drapery cleaning products in North Vancouver"
      ),
      paraWithLink(
        "Mint Sanitary cleans drapes and curtains for homes across North Vancouver, from silk sheers in Lower Lonsdale condos to heavy blackout panels in Lynn Valley bedrooms. Our trained technicians use eco-friendly, plant-based products that clean thoroughly without damaging delicate fabrics like silk, velvet, or specialty linens. We offer flexible scheduling with 7-day availability, free estimates, and 10% off your first clean with code MINT26. If you're outside North Vancouver, our general ",
        "drapes and curtains cleaning page",
        "/services/drapes-curtains-cleaning",
        " covers the same service across Greater Vancouver."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      heading("Why North Vancouver's Climate Makes Drapery Cleaning Different"),
      para(
        "North Vancouver sits closer to the mountains and gets more rain than most of Metro Vancouver. That moisture doesn't stay outside. It settles into fabric, and curtains absorb it year-round whether they're near an open window or not."
      ),
      para(
        "Damp fabric plus household dust is a bad combination. Dust that lands on a slightly damp curtain becomes a place for mold spores to start and dust mites to multiply. Vacuuming the surface doesn't reach what's happening inside the fibers. Homes in Lower Lonsdale, Deep Cove, and Seymour Heights deal with this constantly because of their proximity to the water and the North Shore mountains."
      ),
      para(
        "Regular professional cleaning breaks that cycle before it becomes a bigger issue for the fabric or for anyone in the house with allergies or asthma."
      ),
      heading("Why Professional Cleaning Matters for North Vancouver Curtains"),
      para(
        "Quality drapes cost real money, and dirt left too long works against the fabric permanently. Ground-in soil is abrasive, and dye that's set into fibers by delayed cleaning doesn't always come back out. Regular professional cleaning protects that investment. It also restores how curtains look. Faded color and trapped odors don't go away on their own, and only proper cleaning brings vibrancy back."
      ),
      para(
        "There's a health benefit too, particularly in bedrooms. Curtains act as a reservoir for allergens, and North Vancouver residents with allergies or asthma often notice better sleep and fewer morning symptoms once that reservoir is removed."
      ),
      para(
        "DIY attempts tend to backfire. Regular detergent shrinks fabric. Hot water bleeds silk dye. A machine dryer can melt blackout backing. Scrubbing crushes velvet nap flat. Professional cleaning avoids all of that."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "In-Home vs. Drop-Off Drapery Cleaning in North Vancouver",
    intro: "Both options are available with pickup and delivery throughout North Vancouver.",
    tiers: [
      {
        _key: key("tier"),
        title: "In-Home Cleaning",
        range: "$2 – $7 per linear foot",
        body: "Typically $70 to $150 per set. It's a good fit for silk sheers, blackout curtains, drapes on a regular maintenance schedule, and anyone on a tight timeline. Turnaround is a few hours, often same day. Less handling means less risk to delicate fabric, and it's the only real option for blackout or thermal-backed curtains that can't tolerate moisture exposure.",
      },
      {
        _key: key("tier"),
        title: "Drop-Off Cleaning",
        range: "$1 – $5 per linear foot",
        body: "Typically $60 to $140 per set, plus $25 to $60 per set if you want pickup and delivery. Turnaround is 3 to 7 business days. This route works best for heavily soiled or delicate fabrics, stubborn stains, hand-beaded or pleated draperies, and bundled multi-set orders. Access to industrial-strength equipment at our facility means a more thorough clean, and we can press and reshape curtains before they go back up.",
      },
    ],
    notes: [
      "Use code MINT26 for 10% off your first cleaning, and ask about bundle discounts if you're cleaning curtains from more than one room. For in-home or drop-off cleaning, we service North Vancouver completely, including Lynn Valley, Edgemont Village, Seymour Heights, and Lower Lonsdale. Customers in West Vancouver and across Greater Vancouver also benefit from our flexible scheduling and fast service.",
      "Free Estimate Process: Every quote is no-obligation and free. We'll discuss your specific curtains, take photos if helpful, and provide a written estimate before work begins. No surprises. No hidden fees. Just honest, upfront pricing. Call 236-688-3248 or email hello@mintsanitary.com for your free estimate.",
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Fabric Types We Clean Across North Vancouver Homes",
    intro:
      "Different drapery fabrics need different handling. Treating a silk panel the same way you'd treat a synthetic curtain can ruin it. Our North Vancouver technicians assess each fabric before choosing a method.",
    cards: fabricTypes.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Drapery Cleaning Process for North Vancouver Homes",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why We Use Eco-Friendly Products on North Vancouver Curtains",
    intro:
      "We've chosen plant-based, non-toxic cleaning products intentionally. This isn't a marketing gimmick. It's the smarter approach for your home, your family, and your fabrics.",
    image: await uploadImage("/mint-sanitary-team-north-vancouver.jpg", "Mint Sanitary team in North Vancouver"),
    items: ecoReasons.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/contact",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Areas We Serve Near North Vancouver",
    body: [
      para(
        "Mint Sanitary cleans drapes and curtains throughout North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also serve West Vancouver, Vancouver, and Burnaby."
      ),
      paraWithLink(
        "If your carpets need attention too, our ",
        "North Vancouver carpet cleaning",
        "/north-vancouver/carpet-cleaning",
        " team uses the same eco-friendly approach."
      ),
      paraWithLink("", "View All Service Areas", "/service-areas", ""),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Ready to Restore Your North Vancouver Drapes?",
    body: [
      para(
        "Your curtains deserve professional care. Whether they're delicate silk sheers, cozy velvet drapes, or blackout curtains that block the morning light, we handle them with expertise. North Vancouver's humidity, dust, and allergens take their toll on fabric. Professional cleaning restores them completely."
      ),
      para(
        "A client in Lower Lonsdale put off cleaning her silk drapes for three years. She loved them, but she was afraid the process would damage the fabric, so she kept putting it off. When we brought the drapes back, she cried. The color had come back to life, they hung the way they had when they were new, and she told us it felt like getting new curtains without paying for new curtains. That's the kind of result we aim for with every silk piece that comes through our North Vancouver service, especially ones people have been nervous to clean."
      ),
      para("Call: 236-688-3248"),
      para("Email: hello@mintsanitary.com"),
      para("Discount: MINT26 for 10% off your first clean"),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Services in North Vancouver",
    body: [
      para(
        "If you're investing in professional drapery care, consider these complementary services we offer throughout North Vancouver:"
      ),
      ...relatedServices.map(([title, href]) => paraWithLink("", title, href, "")),
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
    heading: "Ready to Restore Your North Vancouver Drapes?",
    body: "Don't wait. Get a free North Vancouver drapery cleaning estimate. Call 236-688-3248 or email hello@mintsanitary.com. Use MINT26 for 10% off your first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "drapes-curtains-cleaning", {
  title: "Drapes and Curtains Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "drapes-curtains-cleaning"),
  heroHeading: "Drapes and Curtains Cleaning in North Vancouver",
  heroIntro:
    "Your curtains work harder than you'd think. In North Vancouver, they filter rain-heavy air, trap dust, and absorb months of moisture before anyone notices a problem. Mint Sanitary cleans drapes and curtains for homes across North Vancouver, from silk sheers in Lower Lonsdale condos to heavy blackout panels in Lynn Valley bedrooms. Our teams are background-checked, bonded, and insured, and every job comes with a 24-hour satisfaction guarantee.",
  // No heroImage: the source page's heroImage was an external Unsplash URL,
  // not a file under /public, so it can't be migrated with uploadImage().
  metaTitle: "Drapes & Curtains Cleaning North Vancouver | Mint Sanitary",
  metaDescription:
    "North Vancouver drapes and curtains cleaning from trained pros. Eco-friendly, in-home or drop-off service, free estimates. Get a quote today.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver drapes & curtains cleaning migrated");
