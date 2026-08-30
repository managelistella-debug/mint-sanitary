import { key, uploadImage, replaceDoc, refTo, para, paraWithLink, heading, imageBlock } from "./lib.mjs";

/**
 * /north-vancouver/steam-cleaning — brand-new page, companion to
 * scripts/migrate/44-steam-cleaning.mjs (run that first — this doc
 * references cleaningType-steam-cleaning). Published live alongside it, per
 * the client's instruction to use this version of the content.
 *
 * Reuses the same 5 images as the general page (same equipment, same
 * client-supplied folder) rather than re-uploading duplicates.
 *
 * Placement decisions mirror 44-steam-cleaning.mjs:
 *  - No pricing section — source explicitly doesn't publish a flat rate.
 *  - "Steam Cleaning Services We Offer" and the multi-paragraph prose
 *    sections stayed richText for the same reasons as the general page
 *    (no itemized structure to map onto whatsIncluded/processChecklist/
 *    whyChoose without inventing it).
 *  - "carpet steam cleaning in North Vancouver" links point at
 *    /north-vancouver/carpet-cleaning#carpet-steam-cleaning — the real
 *    anchorId already on that page's Carpet Steam Cleaning sub-section
 *    (see scripts/migrate/34-nv-carpet-cleaning.mjs), not a new page.
 *  - "Other Cleaning Services in North Vancouver" has many links in a
 *    couple of paragraphs, so it uses a small local multiLinkPara() helper
 *    (same pattern used throughout this migration) rather than flattening
 *    any of them to plain text.
 */

function multiLinkPara(parts) {
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

const services = [
  {
    title: "Tile and Grout Steam Cleaning in North Vancouver",
    image: null,
    body: "Grout is porous, and North Vancouver's humidity gives mold a head start most other cities don't deal with. Steam gets into the grout lines themselves, not just the surface, and lifts out buildup that scrubbing alone tends to leave behind. This works in kitchens, bathrooms, and entryways, on both older tile and newer condo installations.",
  },
  {
    title: "Kitchen Surfaces and Appliances",
    image: "/steam-cleaning-kitchen-appliance.jpg",
    body: "Countertops, backsplashes, stovetops, range hoods, and appliance interiors and exteriors all pick up grease film over time. Steam cuts through it without leaving a chemical residue anywhere near food prep areas, which matters to a lot of North Vancouver families who cook daily.",
  },
  {
    title: "Bathroom Fixture Steam Cleaning in North Vancouver",
    image: "/steam-cleaning-bathroom-fixtures.jpg",
    body: "Showers, tubs, tile walls, and faucets are where North Vancouver's damp climate shows up first. Steam sanitizes these surfaces and helps knock back the mildew that keeps returning between cleanings, especially in bathrooms with limited ventilation.",
  },
  {
    title: "Upholstery and Mattress Sanitizing",
    image: "/steam-cleaning-upholstery-spot-treatment.jpg",
    body: "For upholstery, this is spot-treatment, not a full wet extraction clean. It's a good option between deeper cleans, or for a specific stain or odor on a couch or chair. On mattresses, steam sanitizes the surface with very low moisture, so there's no soaking and a much shorter dry time than a wet clean.",
  },
  {
    title: "High-Touch Surface Sanitizing for North Vancouver Homes and Businesses",
    image: null,
    body: "Light switches, door handles, railings, and shared equipment collect germs fast in any household or workplace. We offer chemical-free high-touch sanitizing for North Vancouver homes, and for commercial clients including offices, gyms, schools, and strata common areas. It's a straightforward way to cut down on shared surface contact without introducing chemical odors into a shared space.",
  },
];

const faqItems = [
  ["What is chemical-free steam cleaning in North Vancouver, and how is it different from carpet steam cleaning?", "Chemical-free steam cleaning uses hot water vapor to clean hard surfaces like tile, grout, and kitchen counters, plus light fabric spot-treatment. Carpet steam cleaning in North Vancouver refers to hot water extraction, a wet method for cleaning whole carpets. They're separate services built for different jobs."],
  ["Is your North Vancouver steam cleaning the same as your carpet cleaning service?", "No. Our North Vancouver carpet cleaning page uses \"steam cleaning\" as another name for hot water extraction on carpets. This steam cleaning service is a dry vapor process for hard surfaces and fixtures, not carpets."],
  ["How hot does the steam cleaning equipment get for North Vancouver jobs?", "Our Dupray Hill Injection system heats water up to 345°F and delivers it at up to 121 psi of pressure. At the surface, the steam is still hot enough to kill many bacteria, viruses, and mold spores without any chemicals."],
  ["Do you offer tile and grout steam cleaning for North Vancouver condos and homes?", "Yes, tile and grout steam cleaning is one of our most requested services in North Vancouver, especially in bathrooms and entryways. It works well in both older character homes and newer condo or strata buildings across the city."],
  ["Can you steam clean kitchen appliances and bathroom fixtures in North Vancouver?", "Yes. We steam clean countertops, backsplashes, stovetops, range hoods, and appliance surfaces, along with showers, tubs, tile walls, and faucets. It's a popular option for North Vancouver kitchens and bathrooms dealing with grease film or grout mold."],
  ["Is steam cleaning safe for upholstery and mattresses in North Vancouver homes?", "Yes, with some limits. On upholstery, it's used for spot-treatment rather than a full wet clean, and on mattresses it sanitizes the surface with very low moisture. We assess each piece first, since it's not suitable for every fabric or unsealed surface."],
  ["Do you offer chemical-free disinfecting for high-touch surfaces at North Vancouver offices, gyms, and schools?", "Yes. Light switches, door handles, railings, and shared equipment are common trouble spots at any North Vancouver workplace. We offer this sanitizing for homes, offices, gyms, schools, and strata common areas across the city."],
  ["What North Vancouver neighbourhoods do you serve for steam cleaning?", "We serve all of North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, and Edgemont Village. We also cover West Vancouver, Vancouver, and Burnaby for readers outside the North Vancouver core."],
  ["How much does steam cleaning cost in North Vancouver?", "Cost depends on the surfaces involved and the scope of the job, so we don't publish a flat rate. Request a free estimate through our rates page and we'll give you an accurate number for your North Vancouver home or business."],
  ["How do I book steam cleaning in North Vancouver?", "Call 236-688-3248 or book online, 7 days a week including evenings and weekends. First-time customers can use promo code MINT26 for 10% off their first clean with Mint Sanitary."],
];

console.log("→ /north-vancouver/steam-cleaning");

const servicesBody = [
  para(
    "Chemical-free steam cleaning covers a wide range of surfaces around a North Vancouver home or business. Here's what we clean most often."
  ),
];
for (const item of services) {
  servicesBody.push(heading(item.title));
  if (item.image) servicesBody.push(await imageBlock(item.image, item.title));
  servicesBody.push(para(item.body));
}
servicesBody.push(
  para(
    "A family in Lynn Valley called us last spring about grout in their upstairs bathroom that kept turning green no matter how often they scrubbed it. They had a crawling baby and two dogs, so bleach wasn't an option they wanted in the house. We ran the Dupray system over the shower tile and grout lines, and the mold came off without a single chemical touching the floor their baby crawls on."
  )
);

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "Mint Sanitary now offers chemical-free steam cleaning in North Vancouver, using commercial-grade Dupray equipment to lift grime and kill mold spores with hot water vapor alone. No harsh chemicals, no lingering fumes."
      ),
      multiLinkPara([
        "One thing to clear up first. This is not the same service as ",
        ["carpet steam cleaning in North Vancouver", "/north-vancouver/carpet-cleaning#carpet-steam-cleaning"],
        ". If you need a full carpet clean, our carpet steam cleaning in North Vancouver page covers that. This page is about hard surfaces, fixtures, and spot-treatment on fabric. There's a full section below that explains the difference so you book the right service the first time.",
      ]),
      paraWithLink(
        "Ready to book steam cleaning in North Vancouver? Call 236-688-3248, or use promo code ",
        "MINT26",
        "/rates",
        " for 10% off your first clean with Mint Sanitary."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What Is Chemical-Free Steam Cleaning in North Vancouver?",
    body: [
      await imageBlock("/steam-cleaning-tile-grout-detail.jpg", "Dupray steam cleaner brush attachment cleaning tile grout in North Vancouver"),
      para(
        "Chemical-free steam cleaning uses hot water vapor instead of scrub brushes and bleach. Mint Sanitary runs the Dupray Hill Injection, a commercial-grade steam cleaner that heats water to as high as 345°F and pushes it out under up to 121 psi of pressure. That heat and pressure combination breaks down grease, soap scum, and mold without a single chemical spray."
      ),
      para(
        "The machine has a dual-tank design. One tank can be refilled while the other keeps running, so our North Vancouver crews work straight through a job without stopping to reheat. For a busy household or a strata common area, that means less time waiting around and more surfaces done in one visit."
      ),
      para(
        "Steam is mostly water vapor, so it carries very little moisture compared to a wet mop or a spray-and-wipe clean. Surfaces dry fast, which matters in North Vancouver's older homes where grout lines and window sills already deal with enough dampness from the climate."
      ),
      para(
        "At the point of contact, steam is still hot enough to kill many bacteria, viruses, mold spores, dust mites, and fleas. That makes it a solid option for households with kids, pets, allergy sufferers, or anyone sensitive to cleaning chemicals. It's not right for every surface though. We don't recommend it on unsealed or unfinished hardwood, paper-based materials, or anything that can't handle heat and moisture, and we assess the surface first on every North Vancouver job."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Steam Cleaning Services We Offer in North Vancouver",
    body: servicesBody,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Is This the Same as Carpet Steam Cleaning in North Vancouver?",
    body: [
      para(
        "No, and this trips a lot of people up, so it's worth spelling out clearly. Mint Sanitary's carpet cleaning page uses \"steam cleaning\" as a nickname for hot water extraction, a wet cleaning method that soaks carpet fibers, agitates them, and extracts the dirty water back out. That's a different process, built for a different job."
      ),
      para(
        "This page describes dry vapor steam cleaning for hard surfaces, fixtures, and light fabric spot-treatment. It uses very little moisture and no soaking. Hot water extraction is the industry standard for deep carpet cleaning, a method recognized under the IICRC S100 standard for textile care, and it's not something the Dupray steam system is built to replace."
      ),
      multiLinkPara([
        "If you need your carpets cleaned in North Vancouver, head over to our ",
        ["carpet steam cleaning in North Vancouver", "/north-vancouver/carpet-cleaning#carpet-steam-cleaning"],
        " page. If you need tile, grout, kitchen surfaces, bathroom fixtures, or high-touch sanitizing, you're in the right place.",
      ]),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why North Vancouver Homeowners and Businesses Choose Mint Sanitary",
    body: [
      await imageBlock("/steam-cleaning-hardwood-floor.jpg", "Dupray steam mop cleaning a hardwood floor in North Vancouver"),
      para(
        "Mint Sanitary is based in North Vancouver, not dispatched from somewhere across the bridge. Our crews know the difference between a Lower Lonsdale condo and an Upper Lonsdale character home, and that shows up in how we handle each job."
      ),
      para(
        "Every cleaner is background-checked, insured, and covered under WorkSafeBC. We show up on time, and every clean comes with a 100% happiness guarantee, so if something's off, we'll make it right within 24 hours."
      ),
      para(
        "We use eco-friendly cleaning products across all our services, and this steam cleaning service takes that a step further with plain water doing most of the work. Detergent injection is available for tougher jobs, but it's not required for most homes."
      ),
      para(
        "Booking is open 7 days a week, including evenings and weekends, so it fits around a North Vancouver work schedule instead of the other way around. And with a 4.9 out of 5 rating from more than 120 Google reviews, North Vancouver residents have already told us what they think."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Other Cleaning Services in North Vancouver",
    body: [
      multiLinkPara([
        "Steam cleaning is one piece of what Mint Sanitary offers around North Vancouver. If you're setting up a regular routine, take a look at our ",
        ["house cleaning in North Vancouver", "/north-vancouver/house-cleaning"],
        " and ",
        ["deep cleaning in North Vancouver", "/north-vancouver/deep-cleaning"],
        " services, or our ",
        ["upholstery cleaning in North Vancouver", "/north-vancouver/upholstery-cleaning"],
        " for full fabric cleans.",
      ]),
      multiLinkPara([
        "For businesses, we also offer ",
        ["commercial cleaning in North Vancouver", "/north-vancouver/commercial-cleaning"],
        ", ",
        ["strata cleaning in North Vancouver", "/north-vancouver/strata-cleaning"],
        ", ",
        ["office cleaning in North Vancouver", "/north-vancouver/office-cleaning"],
        ", ",
        ["gym cleaning in North Vancouver", "/north-vancouver/gym-cleaning"],
        ", and ",
        ["school cleaning in North Vancouver", "/north-vancouver/school-cleaning"],
        ".",
      ]),
      multiLinkPara([
        "Live outside North Vancouver? We also serve West Vancouver, Vancouver, and Burnaby. Visit our ",
        ["general steam cleaning page", "/services/steam-cleaning"],
        " for details on the service across Greater Vancouver.",
      ]),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions About Steam Cleaning in North Vancouver",
    items: faqItems.map(([question, answer]) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Steam-Clean Your North Vancouver Space",
    body: "North Vancouver's grout, tile, and kitchen surfaces don't stand much of a chance against the local climate on their own. Mint Sanitary's chemical-free steam cleaning gives North Vancouver homes and businesses a way to fight back without chemicals in the mix. Call 236-688-3248 or request a free estimate to get your North Vancouver space steamed and sanitized.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "steam-cleaning", {
  title: "Chemical-Free Steam Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "steam-cleaning"),
  heroHeading: "Chemical-Free Steam Cleaning in North Vancouver",
  heroIntro:
    "North Vancouver's damp coastal climate is great for hiking and hard on grout. Bathroom tile, shower corners, and kitchen backsplashes grow mold and mildew faster here than in drier cities, whether you live in an older character home in Lower Lonsdale or a newer strata building near Lynn Valley.",
  heroImage: await uploadImage("/steam-cleaning-tile-grout-detail.jpg", "Chemical-free steam cleaning in North Vancouver"),
  metaTitle: "Chemical-Free Steam Cleaning in North Vancouver | Mint",
  metaDescription:
    "Chemical-free steam cleaning in North Vancouver for tile, grout, kitchens, bathrooms and more. Book online, 7 days a week. Call 236-688-3248.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver steam cleaning published");
