import { key, uploadImage, replaceDoc, heading, para, paraWithLink, imageBlock } from "./lib.mjs";

/**
 * /services/steam-cleaning — brand-new page, not a migration from an
 * existing hand-coded page. Content supplied verbatim in
 * Steam-Cleaning-Content-Review.md. That doc described the pages as drafts,
 * but an earlier duplicate pair already existed in the CMS and the client
 * chose this version and asked for it live, so it publishes directly.
 *
 * Images are Dupray's own equipment-in-action product photography (the
 * client supplied the folder and said to use it) — no visible logos in any
 * of the 5 chosen shots. Skipped two supplied images that don't match any
 * service actually described in the content: a bed-bug extermination shot
 * (pest control isn't offered) and a pet-bed shot (doesn't match the
 * "mattress"/"upholstery" wording).
 *
 * Placement decisions:
 *  - No pricing tiers exist in the source ("we do not publish a flat
 *    rate"), so no pricing section — inventing tiers would contradict the
 *    page's own FAQ answer.
 *  - "What We Steam Clean" has no whatsIncluded slot with images (that
 *    section type's cards have no image field), and photos exist for 4 of
 *    the 6 items, so it's richText: heading + image + paragraph per item,
 *    matching the precedent used everywhere else in this migration for
 *    per-item photos.
 *  - "How Our Steam Cleaning Process Works" and "Why Choose Mint Sanitary
 *    for Steam Cleaning" are flowing prose with no discrete numbered steps
 *    or itemized bullets in the source, so they stayed as richText
 *    heading/paragraph blocks rather than forcing them into
 *    processChecklist/whyChoose, which would mean inventing structure that
 *    isn't in the content doc.
 *  - The IICRC S100 standard is named in the source with no URL given, so
 *    it stays plain text rather than an invented link.
 */

const whatWeClean = [
  {
    title: "Tile and Grout",
    image: null,
    body: "Grout is porous, so it traps dirt, soap scum and bacteria in a way flat tile does not. Steam cleaning gets into the grout lines and lifts buildup without needing to scrub it in deeper by hand. We steam clean tile and grout in kitchens, bathrooms and entryways, including floors, backsplashes and shower walls.",
  },
  {
    title: "Kitchen Surfaces and Appliances",
    image: "/steam-cleaning-kitchen-appliance.jpg",
    body: "Grease clings to countertops, backsplashes, stovetops and range hoods, and it is hard to fully remove with a spray cleaner and a rag. Steam cuts through grease on contact. We steam clean countertops, backsplashes, stovetops, range hoods, and the interiors and exteriors of appliances.",
  },
  {
    title: "Bathroom Fixtures",
    image: "/steam-cleaning-bathroom-fixtures.jpg",
    body: "Soap scum, hard water spots and mildew build up fast on showers, tubs, tile walls and faucets. Steam loosens this buildup so it wipes away instead of needing to be scrubbed by hand.",
  },
  {
    title: "Upholstery Spot-Treatment",
    image: "/steam-cleaning-upholstery-spot-treatment.jpg",
    bodyBefore: "This is spot treatment for stains and problem areas on furniture, not a full wet extraction clean. If you need a full upholstery clean, our ",
    linkText: "upholstery cleaning service",
    linkHref: "/services/upholstery-cleaning",
    bodyAfter: " covers that separately.",
  },
  {
    title: "Mattress Sanitizing",
    image: null,
    body: "Mattresses absorb sweat, skin cells and dust over years of use, even though they rarely get a real clean. Because steam cleaning is low moisture, we can sanitize a mattress at the surface level without soaking it.",
  },
  {
    title: "High-Touch Surface Sanitizing",
    image: null,
    body: "Light switches, door handles, railings and shared equipment pick up more contact than almost any other surface in a home or office. Steam sanitizes these surfaces without leaving chemical residue behind, which matters in shared spaces. This service pairs well with our commercial cleaning and strata cleaning programs for buildings with shared common areas.",
  },
];

const faqItems = [
  ["What is chemical-free steam cleaning, and how is it different from regular cleaning?", "Chemical-free steam cleaning uses hot water vapor instead of spray cleaners to break down dirt and grease. Regular cleaning usually relies on a chemical solution and manual scrubbing. Steam uses heat and pressure to loosen grime, so it often needs less scrubbing and leaves less residue behind."],
  ["Is steam cleaning the same as carpet cleaning?", "No. This service treats hard surfaces, fixtures and fabric spot areas, like tile, grout, countertops and mattresses. Our carpet cleaning service uses hot water extraction for full carpet cleans, which people sometimes also call steam cleaning, but it is a separate process built for carpet fibers."],
  ["How hot does the steam get, and is that enough to kill germs?", "The Dupray Hill Injection machine we use heats water up to 345°F at the machine, and steam is still well over 300°F at the point of surface contact. That is hot enough to kill many types of bacteria, viruses, mold spores and dust mites without chemicals."],
  ["Does steam cleaning disinfect, or does it just clean surfaces?", "It does both. The heat from the steam breaks down dirt and grease while also killing many common germs on contact, so surfaces come out clean and sanitized in the same pass."],
  ["Is steam cleaning safe for tile, grout and natural stone?", "Yes, steam cleaning works well on tile and sealed grout, and it is generally safe for sealed natural stone. Unsealed or sensitive stone should be checked first, since heat and moisture can affect some finishes. We assess surfaces before starting any job."],
  ["Can steam cleaning damage kitchen appliances or bathroom fixtures?", "Steam cleaning is safe for most kitchen appliances and bathroom fixtures when it is applied correctly by a trained technician. We check each surface first and adjust our approach for anything delicate, so nothing is exposed to more heat or pressure than it can handle."],
  ["Is steam cleaning safe for upholstery and mattresses, or will they be left wet?", "Steam cleaning for upholstery and mattresses is a spot-level, low-moisture treatment, not a full soak. Because steam is mostly water vapor, treated areas dry much faster than they would with a wet cleaning method."],
  ["Does steam cleaning remove mold and mildew?", "Steam's heat can kill many types of mold spores and mildew on contact, and it helps loosen buildup on tile, grout and bathroom fixtures. For serious or widespread mold problems, a full remediation assessment may be needed first."],
  ["Is steam cleaning safe around kids, pets and allergy sufferers?", "Yes. Because it does not require harsh chemicals, chemical-free steam cleaning is a good option for households with kids, pets, allergy sufferers or chemical sensitivities. There is no chemical residue or fumes left behind once the job is done."],
  ["How much does steam cleaning cost?", "Steam cleaning pricing depends on the surfaces involved and the size of the job, so we do not publish a flat rate. Request a free estimate and we will give you an accurate price based on your space."],
];

console.log("→ /services/steam-cleaning");

const whatWeCleanBody = [
  para(
    "Steam cleaning works on a wide range of hard surfaces and fabrics, in homes and in commercial spaces. Below are the surfaces we treat most often."
  ),
];
for (const item of whatWeClean) {
  whatWeCleanBody.push(heading(item.title));
  if (item.image) whatWeCleanBody.push(await imageBlock(item.image, item.title));
  if (item.linkHref) {
    whatWeCleanBody.push(paraWithLink(item.bodyBefore, item.linkText, item.linkHref, item.bodyAfter));
  } else {
    whatWeCleanBody.push(para(item.body));
  }
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Mint Sanitary now offers chemical-free steam cleaning for homes and businesses across Greater Vancouver, using commercial-grade Dupray equipment that produces steam hot enough to break down grease and lift grime using nothing but water. This is a different service from our hot water extraction carpet cleaning, which some people also call \"steam cleaning.\" If you want your carpets deep cleaned, visit our ",
        "carpet cleaning page",
        "/services/carpet-cleaning",
        " instead. This page covers steam cleaning for tile, kitchens, bathrooms, upholstery spots, mattresses and high-touch surfaces. Call 236-688-3248 or request a free estimate to book."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What Is Chemical-Free Steam Cleaning?",
    body: [
      await imageBlock("/steam-cleaning-tile-grout-detail.jpg", "Dupray steam cleaner brush attachment cleaning tile grout"),
      para(
        "Chemical-free steam cleaning uses hot water vapor instead of liquid cleaners to break down dirt, grease and buildup. Our technicians use a Dupray Hill Injection steam cleaner, a commercial machine that heats water up to 345°F (174°C) and pushes it out under up to 121 psi (8 bar) of pressure. That heat and pressure combination loosens grime on contact, so most surfaces come clean using only water. Detergent injection is available for tougher jobs, but it is not required for a standard clean."
      ),
      para(
        "A household steam mop works on a similar idea, but at a much smaller scale. Most steam mops run on one small tank, so you have to stop, wait for it to reheat, and refill partway through a job. The Dupray Hill Injection machine we use has a dual-tank design, so one tank can be refilled with water while the other keeps producing steam. That means continuous work with no reheating downtime, which matters on a full kitchen, a whole bathroom, or a larger commercial space."
      ),
      para(
        "Because the process uses steam rather than a wet spray, treated surfaces carry very little moisture. Steam is mostly water vapor, so surfaces dry fast compared to a wet mop or a soaked cleaning cloth. That is part of why chemical-free steam cleaning works well for households with kids, pets, allergy sufferers or anyone who wants to cut down on chemical exposure at home."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What We Steam Clean",
    body: whatWeCleanBody,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "How Our Steam Cleaning Process Works",
    body: [
      para(
        "Every job starts with a quick inspection. Our technician checks the surfaces you want cleaned and flags anything that should not be steamed, such as unsealed hardwood, paper-based materials, or anything else that cannot handle heat and moisture."
      ),
      para(
        "From there, the technician applies steam directly to each surface, working section by section so nothing gets missed. Loosened grime is wiped away as we go, and grout lines, fixtures and appliance surfaces often get a second pass in spots with heavier buildup."
      ),
      para(
        "Once the steam cleaning is finished, we do a final walk-through to check the results together with you where possible. Because steam carries so little moisture, most treated surfaces are dry within minutes rather than hours, so you can use the space again quickly."
      ),
      para(
        "Our technicians are background-checked, insured, and trained on this equipment before they use it in a client's home or business. WorkSafeBC coverage applies on every job, and every clean comes with our 100% happiness guarantee. If something is not right, tell us within 24 hours and we will make it right."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Is Steam Cleaning the Same as Carpet Cleaning?",
    body: [
      para(
        'No, and this trips people up because both services use the word "steam." Chemical-free steam cleaning, described on this page, is for hard surfaces, fixtures and spot-level fabric treatment, like tile, grout, countertops, bathroom fixtures, upholstery spots and mattresses.'
      ),
      para(
        "Our carpet cleaning service is a different process built for whole-room carpet cleaning. It uses hot water extraction, which some people also call steam cleaning, spraying a hot water and cleaning solution mix deep into carpet fibers before extracting it back out along with the dirt. That method follows the IICRC S100 standard, the recognized standard for professional carpet and textile cleaning, and it is built to fully saturate and rinse carpet fibers, not just treat the surface."
      ),
      paraWithLink(
        "If you want your carpets deep cleaned, book our ",
        "carpet cleaning service",
        "/services/carpet-cleaning",
        ". If you want your tile, grout, kitchen, bathroom fixtures, mattress or high-touch surfaces cleaned without chemicals, this steam cleaning service is the right one."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Benefits of Chemical-Free Steam Cleaning",
    body: [
      para(
        "Steam leaves the machine at very high heat and is still hot, well over 300°F, at the point of surface contact. That heat is enough to kill many types of bacteria, viruses, mold spores, dust mites and fleas without needing a chemical disinfectant."
      ),
      para(
        "Because the process does not rely on harsh chemicals, it is a good option for households with kids, pets, allergy sufferers or anyone managing chemical sensitivities. There is no chemical smell left behind, and no chemical residue on surfaces your family touches every day."
      ),
      para(
        "Steam cleaning is also fast to dry. Since steam is mostly water vapor, treated surfaces carry far less moisture than they would with a wet mop or a spray cleaner, so you can use the space again sooner."
      ),
      para(
        "That said, steam cleaning is not right for every surface. It should not be used on unsealed or unfinished hardwood floors, paper-based materials, or anything else that cannot tolerate heat and moisture. We assess surfaces first so we only steam clean what is safe to steam clean."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Choose Mint Sanitary for Steam Cleaning",
    body: [
      await imageBlock("/steam-cleaning-hardwood-floor.jpg", "Dupray steam mop cleaning a hardwood floor"),
      para(
        "Mint Sanitary is based in North Vancouver and serves homes and businesses across North Vancouver, West Vancouver, Vancouver and Burnaby. We hold a 4.9 out of 5 rating from more than 120 Google reviews, and every clean follows the same standards: background-checked and insured cleaners, eco-friendly products, on-time arrival, and WorkSafeBC coverage on every job."
      ),
      para(
        "We book 7 days a week, including evenings and weekends, so you can schedule steam cleaning around your routine instead of the other way around. New clients can use code MINT26 for 10% off their first clean. We work with single homes and with ongoing commercial contracts, and our team can build a plan that fits your space."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(([question, answer]) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Ready for Chemical-Free Steam Cleaning?",
    body: "Call Mint Sanitary at 236-688-3248 or request a free estimate online. New clients can use code MINT26 for 10% off their first clean.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "steam-cleaning", {
  title: "Chemical-Free Steam Cleaning Services in Greater Vancouver",
  name: "Steam Cleaning",
  tileDescription:
    "Chemical-free steam cleaning for tile, grout, kitchens, bathrooms, upholstery spots and mattresses using commercial-grade Dupray equipment — no harsh chemicals, no residue.",
  tileImage: await uploadImage("/steam-cleaning-tile-grout-detail.jpg", "Chemical-free steam cleaning in Greater Vancouver"),
  hasOwnPage: true,
  heroHeading: "Chemical-Free Steam Cleaning Services in Greater Vancouver",
  heroIntro:
    "Grease builds up on stovetops no matter how often you wipe them down. Grout turns gray even when you scrub it by hand. A mattress collects dust and skin cells for years without ever getting a real clean. Chemical cleaners can help with some of this, but they leave behind fumes and residue, and they are not always a good fit for homes with kids, pets, allergy sufferers or anyone managing chemical sensitivities.",
  heroImage: await uploadImage("/steam-cleaning-tile-grout-detail.jpg", "Chemical-free steam cleaning in Greater Vancouver"),
  metaTitle: "Chemical-Free Steam Cleaning | Mint Sanitary",
  metaDescription:
    "Chemical-free steam cleaning for tile, grout, kitchens, bathrooms, upholstery and mattresses across Greater Vancouver. Call 236-688-3248 to book.",
  sections,
  published: true,
});

console.log("\n✓ Steam cleaning (general) published");
