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
 * /north-vancouver/gym-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/gym-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The "Daily Cleaning Services" and "Deep Cleaning Services" bullet lists
 *    sat between Prevention and Business Benefits on the original page, but
 *    they're flat checklist bullets, not cards. Process & Checklist supports
 *    a steps column AND a checklist column at once, so both lists were
 *    merged into the checklistItems of the same section that holds the
 *    later "5-Step Process" steps — that's the section type's intended use,
 *    and it keeps every bullet intact without inventing a new section.
 *  - Why Choose has no dedicated photo on this page, so it reuses the hero
 *    gym-equipment image (that section type requires an image).
 *  - Related Services all link to other /north-vancouver/... pages, so per
 *    the mapping rules they're a Rich Text block with real links.
 */

const preventionItems = [
  ["MRSA and Staph Infections", "These spread through skin to skin contact and shared equipment like benches and mats. Regular disinfection of high contact surfaces cuts the risk of transmission between members at your North Vancouver facility. The CDC's guidance for athletic facilities outlines why this matters for any shared training space."],
  ["Athlete's Foot and Ringworm", "Fungal infections thrive in warm, moist locker rooms and showers, and North Vancouver's damp climate for much of the year doesn't help. Floors, benches, and shower stalls need targeted treatment, not a quick mop pass."],
  ["Respiratory Infections", "Group fitness classes and spin studios pack a lot of heavy breathing into a small room. This matters even more for North Vancouver studios running back to back classes through the evening rush."],
  ["General Infection Spread", "Strep, minor cuts, and everyday illness move faster through a gym than most owners realize, and members with compromised immune systems benefit from a North Vancouver facility that holds itself to a higher standard."],
];

const dailyServices = [
  "Equipment Sanitization. Free weights, machines, benches, grips, handles, and barbells get sprayed, given time for the disinfectant to work, then wiped again.",
  "Cardio Equipment Disinfection. Treadmills, ellipticals, rowing machines, and stationary bikes, including screens, buttons, handrails, and foot platforms.",
  "Floor Care. Sweeping, vacuuming, and mopping throughout, with extra attention in locker rooms to control moisture and prevent odor buildup, which matters through North Vancouver's wetter months.",
  "High-Touch Surface Disinfection. Door handles, light switches, water fountain buttons, entrance areas, and the reception desk.",
  "Restroom Sanitation. Toilets, sinks, mirrors, soap dispensers, and paper towel holders, with floors mopped and odor control applied.",
  "Reception Area Cleaning. Desks, chairs, and common areas kept presentable for the first impression members get walking in off the street.",
  "Trash Removal. Bins emptied and liners replaced throughout the facility.",
];

const deepServices = [
  "Locker Room and Shower Area Deep Cleaning. Behind equipment, disinfecting benches, and treating shower corners to stop mold before it starts, an important step given how much rain North Vancouver gets.",
  "Carpet Extraction. Weekly or monthly extraction in cardio areas and group fitness studios, where foot traffic and sweat build up fastest.",
  "Mat and Yoga Studio Disinfection. Yoga mats, resistance bands, and studio floors get their own protocol, since members lie directly on these surfaces.",
  "Group Fitness Class Room Sanitization. Mirrors, floors, and shared equipment cleaned between classes.",
  "Odor Control. Enzyme-based treatments break down sweat residue at the source instead of masking it with fragrance.",
  "Post-Outbreak Sanitization. Emergency deep disinfection if a member reports ringworm, MRSA, or another infection tied to your North Vancouver facility.",
];

const businessBenefits = [
  ["Member Retention", "A clean facility leads to longer memberships and better reviews. North Vancouver members notice when equipment looks and smells clean, and they notice just as fast when it doesn't."],
  ["New Member Acquisition", "Word of mouth and online reviews improve when a facility is visibly well kept, and North Vancouver has no shortage of gyms competing for the same members."],
  ["Staff Morale", "When cleaning is handled by a professional team, your North Vancouver staff aren't spending part of every shift wiping down sweat. That time goes back into coaching and member experience."],
  ["Equipment Longevity", "Regular professional disinfection extends machine lifespan by 20 to 30%, because salt, sweat, and dirt don't get the chance to corrode components over time. For a North Vancouver facility with $50,000 to $100,000 invested in machines, that's a meaningful amount of equipment life saved."],
];

const processSteps = [
  ["Initial Assessment and Custom Plan Development", "A visit to your North Vancouver facility to measure square footage, count equipment, identify high risk areas, and learn peak hours and member demographics. From there, we design a schedule that fits how your gym operates."],
  ["Pre-Service Equipment and Staff Setup", "Professional disinfectants, microfiber cloths, and gym-certified spray bottles go out with a team trained in proper disinfection contact times, usually around 10 seconds per surface."],
  ["Daily Cleaning Execution", "Most North Vancouver gyms get three visits a day: pre-opening, mid-day, and evening or post-close. Each visit is documented, and any maintenance issues get flagged as they're found."],
  ["Deep Cleaning and Maintenance", "Weekly or monthly, depending on the facility. Carpet extraction, locker room deep disinfection, mat sanitization, and odor control all happen during off-hours so they don't interrupt North Vancouver members."],
  ["Quality Assurance and Reporting", "A report after each service details what was cleaned, when, and any issues noticed. If equipment breaks or a member reports a concern, response is available seven days a week."],
];

const whyChoose = [
  ["Eco-Friendly Commitment", "We use 100% green, non-toxic disinfectants that are safe for North Vancouver members with asthma, allergies, or sensitive skin."],
  ["7-Day Availability", "Pre-opening, mid-day, and post-close cleaning fits around any North Vancouver gym schedule, seven days a week."],
  ["Certified Professional Staff", "Our team is bonded, insured, and trained in gym disinfection protocols, with training aligned to Health Canada's cleaning and disinfecting guidance and WorkSafeBC standards."],
  ["Transparent Pricing and Free Estimates", "Every quote is itemized, with no hidden fees and no contract lock-in."],
  ["Emergency Response", "Same-day mobilization is available for MRSA, ringworm, or other outbreak disinfection needs anywhere in North Vancouver."],
  ["Local North Vancouver Expertise", "We serve gyms and studios across Deep Cove, Edgemont Village, Seymour Heights, and Lower Lonsdale, and our team knows the local demographics, member expectations, and seasonal demands that shape how a North Vancouver gym runs."],
  ["First-Clean Discount", "New North Vancouver clients get 10% off their first service with code MINT26."],
];

const packages = [
  ["Daily Surface Disinfection", "Pre-opening, mid-day, and evening visits keep equipment and high-touch surfaces in check throughout the day."],
  ["Weekly or Monthly Deep Cleaning", "Carpet extraction, locker room sanitization, and mat disinfection on a set schedule."],
  ["Customized Frequency", "Three times daily, twice daily, or five days a week, built around your North Vancouver facility's needs."],
  ["Emergency Outbreak Disinfection", "Same-day response when an infection is reported at the gym."],
];

const relatedServices = [
  ["Commercial Cleaning", "/north-vancouver/commercial-cleaning/"],
  ["Office Cleaning", "/north-vancouver/office-cleaning/"],
  ["School Cleaning", "/north-vancouver/school-cleaning/"],
];

const faqItems = [
  ["How often should my gym be cleaned in North Vancouver?", "It depends on member traffic and facility size, but most North Vancouver gyms benefit from daily cleaning split across pre-opening, mid-day, and post-close visits. Boutique studios running back to back classes often need more frequent attention to high-touch equipment."],
  ["What disinfectants does Mint Sanitary use in North Vancouver gyms?", "We use 100% eco-friendly, non-toxic disinfectants that meet Health Canada and WorkSafeBC standards. They're safe for North Vancouver members with allergies or sensitivities and effective against MRSA, staph, strep, and fungal infections."],
  ["Can your team respond quickly if a member contracts MRSA or ringworm at my North Vancouver gym?", "Yes. We offer same-day emergency disinfection for North Vancouver facilities and are available seven days a week for outbreak response."],
  ["Do you offer gym cleaning in North Vancouver for boutique studios?", "Yes. Large gyms, small yoga studios, CrossFit boxes, and spin studios across North Vancouver all get the same level of professional care, scaled to the size of the space."],
  ["What makes professional gym cleaning in North Vancouver different from staff cleaning it themselves?", "Professional cleaning uses commercial-grade products, follows certified contact-time protocols, and targets high-risk areas like equipment grips and locker rooms in a set order. Most North Vancouver gym staff aren't trained disinfection specialists, so coverage tends to be less consistent when it's left to them alone."],
  ["How does gym cleaning help with equipment longevity for North Vancouver facilities?", "Sweat, salt, dirt, and bacteria corrode metal and plastic components over time. Regular professional disinfection extends equipment lifespan by 20 to 30%, which adds up to real savings for a North Vancouver gym with $50,000 to $100,000 invested in machines."],
  ["Are your North Vancouver gym cleaning staff bonded and insured?", "Yes. Every team member who services a North Vancouver facility is bonded and insured, with training aligned to Health Canada and WorkSafeBC standards."],
  ["What's included in weekly deep cleaning for North Vancouver gyms?", "For North Vancouver facilities, weekly deep cleaning covers carpet extraction, locker room and shower sanitization, mat and yoga studio disinfection, group fitness room deep cleaning, and odor control. Post-complaint disinfection gets added if a member has reported a concern."],
  ["Can I get a first-time discount on gym cleaning in North Vancouver?", "Yes. New North Vancouver clients get 10% off their first service with code MINT26."],
  ["How do I know your North Vancouver gym cleaning is working?", "You'll get a detailed report after each service showing what was cleaned and when. Clients who want extra confirmation can request ATP testing to measure bacteria levels before and after service at their North Vancouver location."],
  ["Do you clean CrossFit boxes and spin studios in North Vancouver, or just traditional gyms?", "We clean every type of fitness space in North Vancouver, including CrossFit boxes, spin studios, Pilates and yoga studios, and full-service gyms. Equipment and floor protocols are adjusted to match what each space needs."],
  ["Does Mint Sanitary serve gyms in Deep Cove and Edgemont Village, or just central North Vancouver?", "We serve gyms across all of North Vancouver, including Deep Cove, Edgemont Village, Seymour Heights, Lower Lonsdale, and Lynn Valley. Scheduling is built around your location and your peak hours, wherever in North Vancouver you're located."],
  ["How much does gym cleaning cost in North Vancouver?", "Cost depends on square footage, equipment volume, and how many visits per week your North Vancouver facility needs. Head to our rates page for a free, itemized estimate with no hidden fees."],
  ["Can Mint Sanitary clean my North Vancouver gym outside of business hours?", "Yes. Most North Vancouver gyms schedule cleaning before opening, during a mid-day lull, or after close, and deep cleaning work is typically done during off-hours so it never interrupts members."],
  ["What happens if a North Vancouver member reports an infection linked to my gym?", "Call us and we'll mobilize the same day for emergency disinfection at your North Vancouver facility. We treat the affected equipment and surrounding areas and document the work in a report you can share with staff or members if needed."],
  ["Is Mint Sanitary experienced with North Vancouver's specific gym and fitness market?", "Yes. We've worked with facilities across North Vancouver, from boutique studios in Lower Lonsdale to larger fitness centers further up the hill, and we build schedules around the traffic patterns and seasonal demand specific to this market."],
  ["Do North Vancouver gym owners need a contract to use Mint Sanitary?", "No. We don't lock North Vancouver clients into contracts. Every quote is itemized and transparent, and you can adjust or cancel service as your facility's needs change."],
];

console.log("→ /north-vancouver/gym-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      await imageBlock(
        "/gym-cleaning-team-north-vancouver.jpg",
        "Mint Sanitary technician disinfecting gym equipment in North Vancouver"
      ),
      paraWithLink(
        "Free weights carry 362 times more germs than a toilet seat. Treadmills hold 74 times more bacteria than a public restroom faucet. Given numbers like that, it makes sense that 81% of gym members say cleanliness is the deciding factor when choosing a facility, according to ",
        "this fitness facility hygiene guide",
        "https://zogics.com/product-guide-library/how-clean-is-clean-enough-hygiene-standards-every-gym-should-know/",
        ". North Vancouver gym owners who take cleaning seriously see it show up in retention, in reviews, and in how long their equipment lasts."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What Professional Gym Cleaning Prevents in North Vancouver",
    intro:
      "Sweat, shared equipment, and warm, damp locker rooms make any gym in North Vancouver a natural breeding ground for bacteria and fungus. A trained cleaning team targets the conditions that let these problems spread before members ever notice a smell or a sticky bench.",
    cards: preventionItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "How Gym Cleaning Benefits Your North Vancouver Business",
    body: businessBenefits.flatMap(([title, body]) => [heading(title), para(body)]),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our 5-Step Gym Cleaning Process in North Vancouver",
    intro:
      "A clean gym isn't a once a week job in North Vancouver any more than it is anywhere else. It's built through daily attention to the surfaces members touch most. Daily cleaning keeps a North Vancouver gym running, and deep cleaning catches what a daily pass can't.",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistHeading: "Daily & Deep Cleaning Checklist for North Vancouver Gyms",
    checklistItems: [...dailyServices, ...deepServices],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Contact-time protocols follow practices outlined in ",
        "this industry guide to disinfecting fitness facilities",
        "https://blog.nasm.org/how-to-clean-your-gym",
        "."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Gyms Choose Mint Sanitary",
    image: await uploadImage(
      "/gym-cleaning-equipment-north-vancouver.jpg",
      "Gym cleaning equipment disinfected by Mint Sanitary in North Vancouver"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Training aligned with ",
        "Health Canada's cleaning and disinfecting guidance",
        "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks/cleaning-disinfecting.html",
        "."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Gym Cleaning Packages for North Vancouver Facilities",
    body: [
      para(
        "Every North Vancouver gym runs differently, so packages are built around how the facility operates day to day."
      ),
      ...packages.flatMap(([title, body]) => [heading(title), para(body)]),
      paraWithLink(
        "Pricing depends on square footage, equipment count, and how often your North Vancouver facility needs service. Visit our ",
        "rates page",
        "/rates",
        " for a free, itemized estimate."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "North Vancouver Areas We Serve",
    body: [
      para(
        "Mint Sanitary cleans gyms, studios, and fitness centers throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. Waterfront facilities in Lower Lonsdale and gyms up in the Lynn Valley corridor both get a cleaning schedule built around their hours and their members."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related North Vancouver Services",
    body: relatedServices.map(([title, href]) => paraWithLink("", title, href, "")),
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
    heading: "Ready to See What a Properly Cleaned Gym Looks Like?",
    body: "Call Mint Sanitary at 236-688-3248 or request a free estimate to get a custom cleaning plan built around your facility's hours.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "gym-cleaning", {
  title: "Gym Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "gym-cleaning"),
  heroHeading: "Gym Cleaning in North Vancouver",
  heroIntro:
    "A gym in North Vancouver is only as good as it is clean. Members size up a facility within seconds of walking through the door, and cleanliness is usually the first thing they judge before they judge the equipment or the class schedule. Mint Sanitary handles the daily disinfection and deep cleaning work for gyms across North Vancouver, from Lower Lonsdale to Lynn Valley, so owners and staff can put their attention into members instead of mop buckets.",
  heroImage: await uploadImage(
    "/gym-cleaning-equipment-north-vancouver.jpg",
    "Gym cleaning in North Vancouver"
  ),
  metaTitle: "Gym Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "Trusted gym cleaning in North Vancouver. Daily disinfection, deep cleaning, and odor control that keeps members and equipment protected. Free estimate.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver gym cleaning migrated");
