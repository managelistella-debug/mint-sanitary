import {
  key,
  uploadImage,
  replaceDoc,
  heading,
  para,
  imageBlock,
} from "./lib.mjs";

/**
 * /services/upholstery-cleaning — migrated from the hand-coded page now
 * parked at /services/upholstery-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "Furniture Types We Clean" was a card grid with a photo per card. The
 *    whatsIncluded card shape has no image field, so turning it into that
 *    section would drop four real photos. It became Rich Text instead
 *    (heading + image + paragraph per furniture type), which is what Rich
 *    Text exists for. "Cleaning Methods Matched to Your Fabric" has no
 *    per-card images and fits the checklist shape cleanly, so it took the
 *    one whatsIncluded slot instead.
 *  - The single "What Upholstery Cleaning Costs" info box became a one-tier
 *    Pricing section (the $100–$200 figure is the tier's range) rather than
 *    a note, since Pricing notes are plain strings and this box's price is
 *    the section's whole point.
 *  - The closing "Service Areas" paragraphs each carry two or three inline
 *    links. paraWithLink only carries one link per paragraph, so a small
 *    local `paraLinks` helper (same block/markDef shape, generalized to
 *    multiple marks) keeps every link a real Portable Text mark instead of
 *    splitting one paragraph into several or flattening links to text.
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

const furnitureTypes = [
  ["Sofas & Sectionals", "/upholstery-cleaning-north-vancouver-sofa.jpg", "We clean full sectionals, cushions, and frames, including arms, backs, and base panels. Cushion seams and crevices get deep-cleaned, and we pre-treat body oils and other high-contact areas before the main clean."],
  ["Armchairs & Recliners", "/eco-friendly-cleaning-products-north-vancouver.jpg", "Armrests and headrests get the same full clean as the rest of the chair, and we work carefully around recliner mechanisms. We match the method to the fabric and spot-treat the areas that see the most contact."],
  ["Dining & Office Chairs", "/eco-friendly-cleaning-products-north-vancouver.jpg", "Seat and back panels are cleaned thoroughly, with dedicated treatment for food and drink stains. The process is safe for fabric, vinyl, and mixed materials, and every chair gets a post-clean inspection."],
  ["Ottomans, Headboards & More", "/mint-sanitary-team-north-vancouver.jpg", "We clean ottomans and footstools on all sides, treat headboards with fabric-safe methods, and clean cushions and throw pillows individually. Outdoor patio fabric furniture is also welcome."],
];

const methods = [
  ["Steam and Hot Water Extraction", "This is the most thorough option for durable fabrics like cotton, polyester, and microfiber. Hot water and a cleaning solution are injected deep into the fabric, then extracted along with dirt, allergens, and bacteria. It works well on heavily soiled pieces and in homes with pets or allergy sufferers."],
  ["Dry Cleaning", "Delicate fabrics like silk, velvet, and vintage upholstery need a low-moisture approach. Specialized solvents and compounds clean without saturating the material, which means faster drying and no risk of water damage or shrinkage."],
  ["Foam Cleaning", "Foam cleaning sits in the middle. An encapsulating foam is applied to trap dirt particles, then vacuumed away. It suits lightly soiled furniture and fabrics that are sensitive to moisture."],
  ["Inspection-Based Selection", "There is no single method that works for every fabric. Before any cleaning starts, we check the fabric type, manufacturer care codes, existing damage, and stain type, then recommend the method that fits."],
];

const processSteps = [
  ["Free fabric assessment", "We inspect fabric type, care codes, stain types, and overall condition before recommending a cleaning method."],
  ["Book at your convenience", "We work seven days a week, including evenings and weekends. All cleaning happens on-site, so there is no need to move or drop off furniture."],
  ["Pre-vacuuming and pre-treatment", "Commercial-grade HEPA vacuuming lifts embedded pet hair, crumbs, and debris. We then pre-treat stains and high-traffic areas."],
  ["Deep fabric cleaning", "We apply the method matched to your fabric: steam extraction, dry cleaning, or foam cleaning."],
  ["Odor neutralization and extraction", "Enzyme-based treatments break down pet odors, smoke, food smells, and mustiness at the molecular level instead of masking them. All solution and loosened dirt is fully extracted."],
  ["Post-clean inspection", "We walk through the results with you, check every piece, share care tips, and stand behind the work with our satisfaction guarantee."],
];

const whyChoose = [
  ["Eco-friendly, fabric-safe products", "Non-toxic and biodegradable, matched to the fabric type, and safe around kids and pets."],
  ["Seven-day availability", "Book cleaning when it works for your schedule, including evenings and weekends."],
  ["Multiple cleaning methods", "Steam, dry, or foam cleaning selected based on the fabric, care code, and condition of each piece."],
  ["Transparent pricing", "A free on-site inspection and an honest quote before we start, with no hidden fees."],
  ["Satisfaction guarantee", "If any area does not meet expectations within 24 hours, we come back and fix it."],
  ["First clean savings", "Use code MINT26 for 10% off your first clean."],
];

const faqItems = [
  ["What types of furniture can you clean?", "We clean sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor fabric furniture. If it has upholstery, we can clean it."],
  ["Can you remove pet stains and odors from upholstery?", "Yes. Enzyme-based treatments break down pet urine, vomit, and other organic stains at the molecular level. Odors are neutralized at the source instead of being masked."],
  ["How long does upholstery take to dry after cleaning?", "Steam cleaning takes about 4 to 8 hours, dry cleaning takes 2 to 4 hours, and leather dries in about 1 to 2 hours. Fans and ventilation can speed this up, and we give you specific care instructions after the job."],
  ["Is upholstery cleaning safe for delicate fabrics?", "Yes. We inspect every piece before cleaning and choose the safest method for that fabric. Delicate materials like silk, velvet, and vintage upholstery get dry cleaning, which avoids water damage."],
  ["How often should upholstery be professionally cleaned?", "Most homes do well with a clean every 12 to 24 months. Homes with pets, kids, or allergy sufferers benefit from cleaning every 6 to 12 months. High-traffic commercial furniture should be cleaned quarterly."],
  ["Will cleaning remove all stains?", "Most stains come out fully or improve a great deal. Some, like permanent marker, bleach damage, or very old set-in stains, may not come out completely. We give an honest read on what to expect before we start."],
  ["Do you clean leather furniture?", "Yes. Leather needs different products and techniques than fabric. We clean, condition, and protect leather to help prevent cracking, fading, and drying out."],
  ["Can you clean upholstery on-site, or do I need to bring furniture in?", "All cleaning happens on-site at your home or business. There is no need to move furniture or drop it off anywhere."],
  ["Are your cleaning products safe for kids and pets?", "Yes. We use non-toxic, eco-friendly products with no harsh chemicals and no strong fumes."],
  ["How much does upholstery cleaning cost?", "Most individual pieces run $100 to $200, depending on size, fabric, and condition. Sectionals and larger pieces may cost more. Request a free estimate at /rates, and use code MINT26 for 10% off your first clean."],
];

console.log("→ /services/upholstery-cleaning");

const heroImage = await uploadImage(
  "/upholstery-cleaning-north-vancouver-sofa.jpg",
  "Upholstery cleaning in Greater Vancouver"
);

const furnitureBody = [];
for (const [title, image, description] of furnitureTypes) {
  furnitureBody.push(heading(title), await imageBlock(image, title), para(description));
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "Every visit starts with a free on-site fabric assessment and comes backed by a 24-hour satisfaction guarantee. Our teams are background-checked, bonded, and insured. We hold a 4.9 out of 5 rating from more than 120 reviews, and we book appointments seven days a week, including evenings and weekends. We clean sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor patio fabric furniture. If a piece has upholstery, our technicians can clean it."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Furniture Types We Clean",
    body: furnitureBody,
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Cleaning Methods Matched to Your Fabric",
    intro:
      "Not every fabric responds the same way to cleaning. We inspect each piece before choosing a method, so your furniture gets the treatment it needs.",
    cards: methods.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Upholstery Cleaning Process",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    image: heroImage,
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  {
    _key: key("sec"),
    _type: "pricing",
    tiers: [
      {
        _key: key("tier"),
        title: "What Upholstery Cleaning Costs",
        range: "$100 – $200",
        body: "Most individual pieces cost $100 to $200, depending on the size of the furniture, the fabric type, and its condition. Sectionals and larger pieces may cost more. Pricing also depends on the manufacturer care code, how severe the stains and soiling are, whether odor treatment is needed, and how many pieces you are booking. Multi-piece discounts are available when you book several items at once. For a firm number, request a free estimate at /rates.",
      },
    ],
    notes: [],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Professional Cleaning vs DIY",
    body: [
      para(
        "Rental machines and store-bought sprays can help between deep cleans, but they have real limits. Consumer machines lack the suction power of commercial equipment, which leaves excess moisture behind. That extra moisture can lead to mold, mildew, or lingering odor. Store-bought products can also discolor or damage certain fabrics, and using the wrong product can void a furniture warranty. DIY cleaning tends to stay on the surface and skips the pre-treatment and post-treatment steps that lift stubborn stains."
      ),
      para(
        "Professional cleaning uses HEPA-grade equipment with real extraction power, fabric-specific products chosen to avoid damage or discoloration, and technicians trained to read care codes and identify fiber types. Odors get neutralized at the molecular level, stains are fully removed or improved as much as possible, and professional-grade extraction leaves less moisture behind, so furniture dries faster."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Regular Upholstery Cleaning Matters",
    body: [
      para(
        "Dirt and body oils break down fabric fibers over time. Regular cleaning slows down wear, fading, and thinning, which extends the life of your furniture. Upholstery also traps dust mites, pet dander, pollen, and other allergens, so a deep clean improves indoor air quality, which matters for anyone in the home who deals with allergies. Cleaning also restores how furniture looks. Colors brighten, textures soften, and pieces that seemed tired start to look new again."
      ),
      heading("Drying Times"),
      para(
        "Drying time depends on the method used. Steam cleaning typically takes 4 to 8 hours. Dry cleaning takes 2 to 4 hours. Leather dries fastest, usually in 1 to 2 hours. Fans and good ventilation can speed up drying in every case."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Service Areas",
    body: [
      paraLinks([
        "Mint Sanitary is based in North Vancouver and serves homes and businesses across the North Shore and Greater Vancouver, including West Vancouver, Vancouver, and Burnaby. If you are located in North Vancouver, visit our ",
        ["upholstery cleaning in North Vancouver", "/north-vancouver/upholstery-cleaning"],
        " page for neighborhood-specific details. See our full list of coverage on the ",
        ["service areas", "/service-areas"],
        " page, or learn more about our ",
        ["North Vancouver", "/north-vancouver"],
        " location.",
      ]),
      paraLinks([
        "Upholstery cleaning is one part of a larger home. If you need help with the rest of the house, our ",
        ["house cleaning", "/services/house-cleaning"],
        " service covers everything from kitchens to bathrooms. Fabric window treatments collect the same dust and allergens as upholstery, so many clients pair this service with ",
        ["drapes and curtains cleaning", "/services/drapes-curtains-cleaning"],
        ".",
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
    heading: "Ready to Bring Your Furniture Back to Life?",
    body: "Get a free, no-obligation quote at /rates, or call us at 236-688-3248 to book a time that works for you. Our team is background-checked, insured, and backed by a 24-hour satisfaction guarantee.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "upholstery-cleaning", {
  title: "Upholstery Cleaning Services in Greater Vancouver",
  name: "Upholstery Cleaning",
  tileDescription: "Deep cleaning for sofas, chairs, and other upholstered furniture.",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Upholstery Cleaning Services in Greater Vancouver",
  heroIntro:
    "Your sofa handles a lot. Pets, kids, coffee spills, and years of daily use all leave their mark. Vacuuming only lifts surface dust. It cannot reach the oils, allergens, and bacteria trapped deep in the fibers. Mint Sanitary offers professional upholstery cleaning across Greater Vancouver, using eco-friendly, non-toxic products that are safe for kids, pets, and anyone with sensitivities.",
  heroImage,
  metaTitle: "Upholstery Cleaning in Vancouver | Mint Sanitary",
  metaDescription:
    "Professional upholstery cleaning for sofas, chairs, and more across Greater Vancouver. Eco-friendly products, free estimates, satisfaction guarantee.",
  sections,
  published: true,
});

console.log("\n✓ Upholstery cleaning migrated");
