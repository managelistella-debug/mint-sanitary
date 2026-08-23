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
 * /north-vancouver/upholstery-cleaning — migrated from the hand-coded page
 * now parked at /north-vancouver/upholstery-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "Furniture Types We Clean" is a card grid where every card carries its
 *    own photo. whatsIncluded cards have no image field, so — to avoid
 *    dropping four real photos — this section became Rich Text instead:
 *    a heading + image + paragraph per furniture type, in source order.
 *  - "Cleaning Methods" (no images) is the section that gets whatsIncluded,
 *    since it's the page's genuine plain-card grid.
 *  - "What Upholstery Cleaning Costs" has one flat price range plus a list
 *    of pricing factors rather than distinct tiers, so it's modeled as a
 *    single-tier `pricing` section with the factors as notes, closest match
 *    to the source's intent without inventing tier boundaries that aren't
 *    there.
 *  - The closing Service Areas + "part of caring for a home" paragraph
 *    carries four separate links (general upholstery page, house cleaning,
 *    drapes/curtains, carpet cleaning), so it's built as manual multi-link
 *    Rich Text blocks since paraWithLink only supports one link per block.
 *  - The "View All Service Areas" button is preserved as its own linked
 *    paragraph immediately after the map image, matching its position.
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

const furnitureTypes = [
  ["Sofas & Sectionals", "/upholstery-cleaning-north-vancouver-sofa.jpg", "North Vancouver's family-sized sectionals get a full clean, cushions, frames, arms, backs, and base panels included. We deep-clean cushion seams and crevices and pre-treat body oils and other high-contact areas before the main clean."],
  ["Armchairs & Recliners", "/eco-friendly-cleaning-products-north-vancouver.jpg", "Armrests and headrests in North Vancouver living rooms get the same full clean as the rest of the chair, and we work carefully around recliner mechanisms. We match the method to the fabric and spot-treat high-contact zones."],
  ["Dining & Office Chairs", "/eco-friendly-cleaning-products-north-vancouver.jpg", "From Edgemont Village dining rooms to Lower Lonsdale home offices, seat and back panels get a thorough clean, with dedicated treatment for food and drink stains. The process is safe for fabric, vinyl, and mixed materials."],
  ["Ottomans, Headboards & More", "/mint-sanitary-team-north-vancouver.jpg", "We clean ottomans and footstools on all sides, treat headboards with fabric-safe methods, and clean cushions and throw pillows individually. North Vancouver's outdoor patio fabric furniture, including pieces near Deep Cove and Dollarton, is also welcome."],
];

const cleaningMethods = [
  ["Steam and Hot Water Extraction", "This is the most thorough option for durable fabrics like cotton, polyester, and microfiber, and it is the method we reach for most often in North Vancouver homes with pets or kids. Hot water and a cleaning solution are injected deep into the fabric, then extracted along with dirt, allergens, and bacteria."],
  ["Dry Cleaning", "Delicate fabrics like silk, velvet, and vintage upholstery need a low-moisture approach. Many North Vancouver clients with heirloom or designer pieces choose this method, since specialized solvents clean without saturating the material. Drying is faster, with no risk of water damage or shrinkage."],
  ["Foam Cleaning", "Foam cleaning sits in the middle and works well for lightly soiled furniture or fabric that is sensitive to moisture. An encapsulating foam traps dirt particles, which are then vacuumed away."],
  ["Inspection-Based Selection", "There is no single method that works for every fabric in every North Vancouver home. Before any cleaning starts, we check the fabric type, manufacturer care codes, existing damage, and stain type, then recommend the method that fits your piece."],
];

const processSteps = [
  ["Free fabric assessment", "We inspect fabric type, care codes, stain types, and condition at your North Vancouver home before recommending a cleaning method."],
  ["Book at your convenience", "North Vancouver appointments run seven days a week, including evenings and weekends. All cleaning happens on-site, so there is no need to move or drop off furniture."],
  ["Pre-vacuuming and pre-treatment", "Commercial-grade HEPA vacuuming lifts embedded pet hair, crumbs, and debris. We then pre-treat stains and high-traffic areas."],
  ["Deep fabric cleaning", "We apply the method matched to your fabric: steam extraction, dry cleaning, or foam cleaning."],
  ["Odor neutralization and extraction", "Enzyme-based treatments break down pet odors, smoke, food smells, and mustiness at the molecular level instead of masking them. All solution and loosened dirt is fully extracted."],
  ["Post-clean inspection", "We walk through the results with you, check every piece, share care tips, and stand behind the work with our North Vancouver satisfaction guarantee."],
];

const whyChoose = [
  ["Eco-friendly, fabric-safe products", "Non-toxic and biodegradable, matched to the fabric type, and safe around kids and pets in North Vancouver homes."],
  ["Seven-day availability", "Book North Vancouver appointments when they work for your schedule, including evenings and weekends."],
  ["Multiple cleaning methods", "Steam, dry, or foam cleaning selected based on the fabric, care code, and condition of each piece."],
  ["Transparent pricing", "A free on-site inspection and an honest quote before we start, with no hidden fees."],
  ["Satisfaction guarantee", "If any area does not meet expectations within 24 hours, we return to fix it."],
  ["First clean savings", "Use code MINT26 for 10% off your first North Vancouver clean."],
];

const pricingFactors = [
  "Size and type of furniture piece",
  "Fabric type and manufacturer care code",
  "Severity of stains and soiling",
  "Odor treatment requirements",
  "Number of pieces being cleaned",
];

const benefits = [
  ["Extends furniture lifespan", "Dirt and body oils break down fabric fibers over time. Regular cleaning slows down wear, fading, and thinning, which extends the life of your furniture."],
  ["Improves indoor air quality", "Upholstery also traps dust mites, pet dander, pollen, and other allergens, so a deep clean improves indoor air quality inside your North Vancouver home."],
  ["Restores appearance", "Colors brighten, textures soften, and pieces that seemed tired start to look new again."],
  ["Protects your investment", "Since quality furniture is expensive to replace, professional cleaning that adds years of use is often the smarter financial choice for North Vancouver families."],
  ["Pet and family safe results", "Enzyme-based treatments handle pet accidents at the source rather than covering up the smell, which keeps results safe for pets and family."],
  ["More life than expected", "Many North Vancouver clients are surprised at how much life is left in furniture they assumed needed replacing."],
];

const faqItems = [
  ["What types of furniture do you clean in North Vancouver?", "In North Vancouver, we clean sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor fabric furniture. If it has upholstery, our North Vancouver team can clean it."],
  ["Can you remove pet stains and odors from upholstery in North Vancouver homes?", "Yes. Enzyme-based treatments break down pet urine, vomit, and other organic stains at the molecular level in North Vancouver homes. Odors are neutralized at the source instead of being masked."],
  ["How long does upholstery take to dry after cleaning in North Vancouver?", "Steam cleaning takes about 4 to 8 hours, dry cleaning takes 2 to 4 hours, and leather dries in about 1 to 2 hours, even in North Vancouver's damper months. Fans and ventilation can speed this up, and we give you specific care instructions after the job."],
  ["Is upholstery cleaning safe for delicate fabrics in North Vancouver?", "Yes. We inspect every North Vancouver piece before cleaning and choose the safest method for that fabric. Delicate materials like silk, velvet, and vintage upholstery get dry cleaning, which avoids water damage."],
  ["How often should upholstery be professionally cleaned in North Vancouver?", "Most North Vancouver homes do well with a clean every 12 to 24 months. Homes with pets, kids, or allergy sufferers benefit from cleaning every 6 to 12 months, and high-traffic North Vancouver commercial furniture should be cleaned quarterly."],
  ["Will cleaning remove all stains from my North Vancouver furniture?", "Most stains on North Vancouver furniture come out fully or improve a great deal. Some, like permanent marker, bleach damage, or very old set-in stains, may not come out completely. We give an honest read on what to expect before we start."],
  ["Do you clean leather furniture in North Vancouver?", "Yes. Leather needs different products and techniques than fabric. Our North Vancouver team cleans, conditions, and protects leather to help prevent cracking, fading, and drying out."],
  ["Can you clean upholstery on-site in North Vancouver, or do I need to bring furniture in?", "All North Vancouver cleaning happens on-site at your home or business. There is no need to move furniture or drop it off anywhere."],
  ["Are your cleaning products safe for kids and pets in North Vancouver homes?", "Yes. We use non-toxic, eco-friendly products with no harsh chemicals and no strong fumes in every North Vancouver home we visit."],
  ["How much does upholstery cleaning cost in North Vancouver?", "Most individual pieces in North Vancouver run $100 to $200, depending on size, fabric, and condition. Sectionals and larger pieces may cost more. Request a free estimate at /rates, and use code MINT26 for 10% off your first North Vancouver clean."],
];

console.log("→ /north-vancouver/upholstery-cleaning");

const furnitureTypesBody = [];
for (const [title, image, description] of furnitureTypes) {
  furnitureTypesBody.push(
    heading(title),
    await imageBlock(image, `${title} in North Vancouver`),
    para(description)
  );
}

const benefitsBody = benefits.flatMap(([title, body]) => [heading(title), para(body)]);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "Every North Vancouver visit starts with a free on-site fabric assessment and comes backed by a 24-hour satisfaction guarantee. We are a North Vancouver based company with a 4.9 out of 5 rating from more than 120 reviews. Our North Vancouver teams are background-checked, bonded, and insured, and we book appointments seven days a week, including evenings and weekends. North Vancouver households call us for sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor patio fabric furniture. Whether you live in a Lower Lonsdale condo or a larger home in Edgemont Village, if a piece has upholstery, our North Vancouver technicians can clean it."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Furniture Types We Clean in North Vancouver",
    body: furnitureTypesBody,
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Cleaning Methods for North Vancouver Fabrics",
    intro:
      "North Vancouver homes see a wide mix of fabrics, from durable family-room microfiber to delicate vintage pieces passed down through generations. We inspect each item before choosing a method, so your North Vancouver furniture gets the treatment it needs.",
    cards: cleaningMethods.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our North Vancouver Upholstery Cleaning Process",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Chooses Mint Sanitary",
    intro: "North Vancouver homes see a wide mix of fabrics, and our team matches the method to the piece every time.",
    image: await uploadImage(
      "/eco-friendly-cleaning-products-north-vancouver.jpg",
      "Eco-friendly upholstery cleaning products used in North Vancouver"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "View Rates",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Professional Cleaning vs DIY in North Vancouver Homes",
    body: [
      para(
        "Rental machines and store-bought sprays can help between deep cleans, but they have real limits. Consumer machines lack the suction power of commercial equipment, which leaves excess moisture behind in your North Vancouver home. That extra moisture can lead to mold, mildew, or lingering odor. Store-bought products can also discolor or damage certain fabrics, and the wrong product can void a furniture warranty."
      ),
      para(
        "Mint Sanitary's professional cleaning uses HEPA-grade equipment with real extraction power, fabric-specific products chosen to avoid damage or discoloration, and North Vancouver technicians trained to read care codes and identify fiber types. Odors get neutralized at the molecular level, stains are fully removed or improved as much as possible, and professional-grade extraction leaves less moisture behind, so furniture dries faster."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "What Upholstery Cleaning Costs in North Vancouver",
    tiers: [
      {
        _key: key("tier"),
        title: "Individual Pieces",
        range: "$100 – $200",
        body: "Depending on the size of the furniture, the fabric type, and its condition. Sectionals and larger pieces may cost more. Multi-piece discounts are available when you book several items together.",
      },
    ],
    notes: [
      ...pricingFactors,
      "For a firm number for your North Vancouver home, request a free estimate at /rates.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Regular Upholstery Cleaning Matters for North Vancouver Homes",
    body: [
      ...benefitsBody,
      heading("Drying Times for North Vancouver Upholstery"),
      para(
        "Drying time depends on the method used. Steam cleaning typically takes 4 to 8 hours. Dry cleaning takes 2 to 4 hours. Leather dries fastest, usually in 1 to 2 hours. North Vancouver's damper months make fans and good ventilation especially useful for speeding up drying."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "North Vancouver Neighbourhoods We Serve",
    body: [
      multiLinkPara([
        {
          text: "Mint Sanitary is based in North Vancouver and cleans upholstery throughout the district and city, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Capilano, Norgate, Seymour Heights, Dollarton, and Blueridge. We also serve nearby West Vancouver, Vancouver, and Burnaby. If you live outside the North Shore, our general ",
        },
        { text: "upholstery cleaning", href: "/services/upholstery-cleaning" },
        { text: " page covers the same service for the rest of Greater Vancouver." },
      ]),
      paraWithLink("", "View All Service Areas", "/service-areas", ""),
      multiLinkPara([
        { text: "Upholstery cleaning is one part of caring for a North Vancouver home. Our " },
        { text: "North Vancouver house cleaning", href: "/north-vancouver/house-cleaning" },
        { text: " service covers the rest of the house, from kitchens to bathrooms. Fabric window treatments collect the same dust and allergens as upholstery, so many North Vancouver clients pair this service with " },
        { text: "drapes and curtains cleaning", href: "/north-vancouver/drapes-curtains-cleaning" },
        { text: " or add on " },
        { text: "carpet cleaning", href: "/north-vancouver/carpet-cleaning" },
        { text: " for a full refresh." },
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
    heading: "Ready to Bring Your North Vancouver Furniture Back to Life?",
    body: "Get a free, no-obligation quote at /rates, or call 236-688-3248 to book a time that works for you. Our North Vancouver team is background-checked, insured, and backed by a 24-hour satisfaction guarantee.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "upholstery-cleaning", {
  title: "Upholstery Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "upholstery-cleaning"),
  heroHeading: "Upholstery Cleaning in North Vancouver",
  heroIntro:
    "Your sofa handles a lot over the years, from muddy paws after a Deep Cove hike to daily use in a busy Lynn Valley family room. Vacuuming only lifts surface dust. It cannot reach the oils, allergens, and bacteria that settle deep in the fibers. Mint Sanitary provides professional upholstery cleaning throughout North Vancouver, using eco-friendly, non-toxic products that are safe for kids, pets, and anyone with sensitivities. Use code MINT26 for 10% off your first clean.",
  heroImage: await uploadImage(
    "/upholstery-cleaning-north-vancouver-sofa.jpg",
    "Upholstery cleaning sofa in North Vancouver"
  ),
  metaTitle: "Upholstery Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "North Vancouver upholstery cleaning for sofas, chairs, and more. Eco-friendly products, free estimates, and a 24-hour satisfaction guarantee.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver upholstery cleaning migrated");
