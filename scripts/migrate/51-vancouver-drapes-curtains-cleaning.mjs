import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "drapes-curtains-cleaning";

const whatsIncludedCards = [
  [
    "Silk Drapes",
    "Formal silk drapery still turns up in older Kitsilano and Dunbar living rooms, often original to the house. Silk reacts to moisture, temperature, and pH. Get any of those wrong and you risk shrinkage, fading, or bleeding dye. We use low-moisture methods with pH-balanced, plant-based solvents, and we test colorfastness on a hidden section before starting.",
  ],
  [
    "Velvet Curtains",
    "Heavy velvet drapes are common in older character homes with high ceilings and deep-set windows, the kind you'll find throughout Kitsilano and Dunbar. Velvet's soft nap flattens and mats under aggressive rubbing or high-pressure water. Standard carpet cleaning equipment would damage it permanently. We vacuum gently, spot-treat where needed, use moisture-controlled extraction, and brush the nap back into shape afterward.",
  ],
  [
    "Linen Drapes",
    "Linen shows up in both settings, character-home sitting rooms and condo living spaces alike. It's a natural fiber that shrinks under heat and moisture and wrinkles easily. We control moisture carefully through the whole process and dry linen drapes on specialized racks rather than letting them air dry unevenly.",
  ],
  [
    "Synthetic Fabrics",
    "Floor-to-ceiling panels in Yaletown and West End towers are frequently synthetic, chosen for how well they hold up against direct sun through unshaded glass. Synthetic curtains tolerate more moisture and heat than natural fibers, but they still trap odors and embedded dust over time. Cleaning them keeps them fresh and extends how long they look good.",
  ],
  [
    "Blackout and Thermal-Backed Curtains",
    "Blackout panels are standard in Yaletown and West End condos, where floor-to-ceiling glass lets in early sunrise light and does little to block street noise or heat gain. Blackout curtains have an acrylic resin backing that deteriorates with water exposure. In-home dry cleaning is the only safe method for these curtains in Vancouver units. No water touches the backing at any point.",
  ],
  [
    "Lined and Interlining Drapes",
    "Older Kitsilano and Dunbar homes often have lined drapery from the original build, with bonded layers of fabric. Too much water can separate those layers or shrink them unevenly. We keep moisture levels precise for lined and interlined pieces so the layers stay bonded correctly.",
  ],
  [
    "Specialty Fabrics",
    "Brocade, tapestry, chintz, and lamé curtains turn up as heirloom pieces in some of the older character homes around Dunbar and Kerrisdale. We use hand-cleaning techniques and ultra-gentle methods built for fabrics like these.",
  ],
].map(([title, body]) => ({ _key: key("card"), title, body, items: [] }));

const processSteps = [
  ["Inspection and Assessment", "We examine the fabric content, current condition, and colorfastness with a test in a hidden area. We also flag anything unusual, like loose beading, delicate embroidery, or backing that needs extra care."],
  ["Pre-Treatment and Vacuuming", "Low-suction vacuuming lifts surface dust, pollen, and loose particles first. Then we apply an eco-friendly pre-treatment matched to the type of staining, whether that's wine, grease, or general organic buildup."],
  ["Cleaning", "For in-home service, we use moisture-controlled dry cleaning with plant-based agents in carefully measured amounts and gentle agitation. For drop-off service at our facility, heavily soiled or delicate fabrics get more intensive treatment. Either way, we monitor moisture levels for the specific fabric on the rod."],
  ["Rinse and Extraction", "Thorough extraction matters because leftover residue causes yellowing and attracts more dirt over time. Heavily soiled curtains get multiple passes. We neutralize odors without masking them under an artificial perfume."],
  ["Drying and Finishing", "In-home cleaning usually leaves curtains hanging with fans running. Drop-off cleaning uses specialized drying racks in a climate-controlled facility, and we can steam-press curtains afterward to restore their original shape."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["Eco-friendly, plant-based products", "that clean thoroughly without damaging delicate fabrics like silk, velvet, or specialty linens."],
  ["Background-checked, bonded, and insured", "technicians on every job, with WorkSafeBC coverage throughout."],
  ["24-hour satisfaction guarantee", "on every clean, no exceptions."],
  ["10% off your first clean", "with code MINT26."],
  ["Comfortable with concierge and access procedures.", "Cleaning floor-to-ceiling drapery in a Yaletown or West End tower usually means signing in with concierge and booking a service elevator window, and our technicians plan appointments around those building rules instead of showing up unannounced."],
  ["Familiar with older hardware.", "Character homes in Kitsilano and Dunbar often have original wood tracks, pelmets, or traverse rods that need careful handling during removal and rehanging, and our technicians know to check for that before they start."],
  ["7-day availability", ", including evenings and weekends, though we ask Vancouver customers to book ahead for the fastest available slot rather than expect same-day service, since our crews are dispatched from North Vancouver."],
  ["Flat, transparent pricing", "by linear foot, quoted before any work begins."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const faqItems = [
  ["How often should I have my drapes cleaned in Vancouver?", "Most Vancouver homes do well with cleaning every 12 to 18 months for lightly used drapes. High-traffic homes, or ones with pets and kids, should clean annually. Condo units with floor-to-ceiling glass often need a shorter interval because of the sun exposure and window condensation, so watch for fading or a musty smell along the hem as your cue."],
  ["What's the difference between in-home and drop-off drapery cleaning in Vancouver?", "In-home cleaning happens on-site with dry, low-moisture methods and typically runs $70 to $150 per set. Drop-off cleaning goes to our North Vancouver facility for more intensive treatment and typically runs $60 to $140 per set plus $25 to $60 for pickup and delivery. In-home suits blackout curtains and regular maintenance, while drop-off suits heavily soiled or delicate fabrics."],
  ["Can you clean delicate silk drapes in Vancouver without damaging them?", "Yes. Our technicians test colorfastness before touching the fabric, then use pH-balanced, plant-based solvents with low-moisture techniques. We never machine wash or dry silk. For older silk drapery in a Kitsilano or Dunbar character home, we typically recommend drop-off service for the extra care it allows."],
  ["Can you clean floor-to-ceiling curtains in a Yaletown or West End condo?", "Yes. Floor-to-ceiling panels are common in Yaletown and West End towers, and we handle the extra length and the fabric types typically used in those units, including synthetic and blackout-lined panels. We coordinate with concierge and building access rules as part of scheduling the appointment."],
  ["Do I need to arrange building access for a condo drapery cleaning appointment?", "Usually yes. Most Vancouver strata buildings require concierge sign-in and a booked service elevator window for a technician carrying equipment. Let us know your building's requirements when you book so we can plan the visit around them."],
  ["Will your eco-friendly products handle heavily soiled curtains in Vancouver?", "Yes. Our plant-based formulas break down embedded grease, wine stains, smoke odor, and pet accidents. Vancouver homes with fireplaces or heavy cooking odors typically see a dramatic difference after a clean. For severe staining, drop-off service allows longer treatment time and stronger results."],
  ["Can you remove allergens and odors from curtains in Vancouver?", "Yes. Curtains act as a reservoir for dust, pollen, and pet dander, and our extraction process removes that buildup along with cooking or smoke odors. Vancouver residents with allergies or asthma often notice a difference in bedrooms especially, since bedroom curtains tend to go the longest without cleaning."],
  ["Can you clean blackout or thermal-backed curtains without damaging the backing?", "Yes. Blackout and thermal-backed curtains have an acrylic resin backing that breaks down with water exposure, so we use in-home dry cleaning exclusively for these. No water touches the backing at any point, which matters for the blackout panels common in Yaletown and West End units."],
  ["How do you handle older curtain tracks and hardware in a character home?", "Our technicians inspect the tracks, pelmets, or traverse rods before removing anything. Older hardware in Kitsilano and Dunbar homes can be original to the house and sometimes fragile, so we handle removal and rehanging carefully and flag any hardware that looks like it needs repair."],
  ["How long does drapery cleaning take in Vancouver?", "In-home cleaning typically takes 2 to 4 hours. Drop-off cleaning takes 3 to 7 business days. Because our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge, we recommend booking ahead rather than expecting same-day service, and we'll confirm a specific window when you call."],
  ["Is same-day drapery cleaning available in Vancouver?", "Not reliably. Our trucks and technicians are based in North Vancouver, so response times in Vancouver depend on current bookings and bridge travel. Calling 236-688-3248 ahead of time is the best way to check for the nearest available slot."],
  ["Are your technicians bonded and insured for work in my Vancouver home or condo?", "Yes. Every technician is background-checked, bonded, and insured before being sent to a job, whether that's a Kitsilano character home or a Yaletown high-rise, with WorkSafeBC coverage on every visit."],
  ["Is pickup and delivery available for drop-off drapery cleaning in Vancouver?", "Yes. We offer pickup and delivery throughout Vancouver, including Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar, for an added $25 to $60 per set."],
  ["What if my drapes need repair while being cleaned?", "Our inspection catches loose hems, missing buttons, and broken pleats before cleaning starts. We'll walk you through repair options and costs upfront. This comes up more often in older Kitsilano and Dunbar homes with original drapery hardware, and we quote any larger repair work separately so there are no surprises."],
  ["Is there a discount for new customers booking drapery cleaning in Vancouver?", "Yes. New customers save 10% off their first clean with code MINT26. Ask about bundle pricing if you're cleaning curtains from more than one room or unit."],
  ["What areas of Vancouver do you serve for drapery cleaning?", "We serve Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar. Call 236-688-3248 or email hello@mintsanitary.com to confirm coverage for your address."],
  ["Do you offer a satisfaction guarantee on Vancouver drapery cleaning?", "Yes. Every job comes with a 24-hour satisfaction guarantee. If something isn't right after your curtains go back up, contact us within 24 hours and we'll address it."],
  ["What products do you use on Vancouver curtains and drapes?", "We use eco-friendly, non-toxic, plant-based products on every job, the same formulas used company-wide. They clean thoroughly without the harsh solvents that can weaken silk fibers or strip coatings off blackout backing."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Drapes & Curtains Cleaning in Vancouver",
      intro: "Different drapery fabrics need different handling, whether they're hanging in a 1930s Dunbar character home or a 40th-floor Yaletown unit. Our technicians assess each fabric before choosing a method.",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("The two housing types in our assigned neighbourhoods show different warning signs. In Kitsilano and Dunbar character homes, drapery that has hung for years develops a visible grey cast along the folds, a musty smell when the curtains are moved, and dust that puffs out when you run a hand along the hem. Original wood tracks and pelmets often trap decades of dust that a vacuum attachment never reaches."),
        para("Condo towers in Yaletown and the West End show a different pattern. Floor-to-ceiling panels pick up window condensation along the bottom few inches during the wet months, since the glass runs colder than the room air. That damp band at the hem is where mildew smell and fabric discoloration usually start first. Sun-facing units also show fading down one side of a panel from months of direct light through unfiltered glass, since high-rise units rarely have the tree cover that shades a Dunbar or Kitsilano window."),
        para("Either way, the same triggers apply: a musty odor when the curtains move, visible dust or staining, allergy symptoms that ease up when you leave the room, or drapery that has simply never been cleaned since move-in."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Drapes & Curtains Cleaning Prices",
      intro: "Both in-home and drop-off options are available for Vancouver bookings.",
      tiers: [
        {
          _key: key("tier"),
          title: "In-Home Cleaning",
          range: "",
          body: "$2 to $7 per linear foot. Typically $70 to $150 per set. It's a good fit for silk sheers, blackout curtains, drapes on a regular maintenance schedule, and anyone on a tight timeline. Less handling means less risk to delicate fabric, and it's the only real option for blackout or thermal-backed curtains that can't tolerate moisture exposure. Because our crews travel from North Vancouver, we recommend booking a few days ahead for Vancouver appointments rather than expecting same-day turnaround.",
        },
        {
          _key: key("tier"),
          title: "Drop-Off Cleaning",
          range: "",
          body: "$1 to $5 per linear foot. Typically $60 to $140 per set, plus $25 to $60 per set if you want pickup and delivery. Turnaround is 3 to 7 business days. This route works best for heavily soiled or delicate fabrics, stubborn stains, hand-beaded or pleated draperies, and bundled multi-set orders. Access to industrial-strength equipment at our North Vancouver facility means a more thorough clean, and we can press and reshape curtains before they go back up.",
        },
      ],
      notes: [
        "Use code MINT26 for 10% off your first cleaning, and ask about bundle discounts if you're cleaning curtains from more than one room. Every quote is free and no-obligation. We'll discuss your specific curtains, take photos if helpful, and provide a written estimate before work begins. Call 236-688-3248 or email hello@mintsanitary.com.",
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink("For a full breakdown of pricing across services, visit the ", "rates page", "/rates", "."),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Drapery Cleaning Process Works",
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
        para("Vancouver's drapery needs split along a line most other cleaning services don't have to think about as much: window glass. A Kitsilano or Dunbar character home usually has smaller, wood-framed windows with some tree cover, which slows fading and limits how much condensation collects on the glass. A Yaletown or West End tower is the opposite. Floor-to-ceiling glass with little or no overhang means curtains absorb direct sun for hours at a stretch and sit inches from glass that runs cold overnight, especially through the wet season from October to April. That combination, heat exposure by day and condensation by night, is a fabric-wear pattern specific to Vancouver's high-rise stock and it isn't something North Vancouver's more suburban housing mix deals with in the same way."),
        para("Access shapes the job too. A character home visit is a driveway, a front door, and a straightforward install. A condo visit means a concierge sign-in, a booked service elevator, and sometimes a strict window for getting curtains down and back up before the elevator booking ends. Both are routine for our technicians, but they call for different scheduling, and that's part of why we ask Vancouver customers to book a little further ahead than a North Vancouver appointment might need."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Carpet cleaning in Vancouver", "/vancouver/carpet-cleaning"]]),
        multiLinkPara(["", ["Upholstery cleaning in Vancouver", "/vancouver/upholstery-cleaning"]]),
        multiLinkPara(["", ["Steam cleaning in Vancouver", "/vancouver/steam-cleaning"]]),
        multiLinkPara(["", ["House cleaning in Vancouver", "/vancouver/house-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Drapes & Curtains Cleaning in Vancouver",
      body: [
        para("Mint Sanitary cleans drapes and curtains throughout Vancouver, including Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar. Kitsilano and Dunbar cover most of our older character-home drapery work, with original hardware and heavier fabrics like velvet and lined linen. Yaletown and the West End cover most of our floor-to-ceiling condo panel work, where blackout linings and synthetic fabrics are more common. Call 236-688-3248 or email hello@mintsanitary.com to confirm coverage for your Vancouver address."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Drapes & Curtains Cleaning in Vancouver?",
      body: "Call 236-688-3248 or email hello@mintsanitary.com for a free, no-obligation estimate. Use code MINT26 for 10% off your first clean. Because our crews travel from North Vancouver, booking a few days ahead gets you the fastest available appointment window. View our rates page for full pricing details.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Drapes and Curtains Cleaning in Vancouver",
    heroHeading: "Drapes and Curtains Cleaning in Vancouver",
    heroIntro: "Vancouver curtains work under two very different conditions. In Kitsilano and Dunbar character homes, older drapery often hangs on original wood tracks and has never had a proper clean since it went up. In Yaletown and West End towers, floor-to-ceiling window treatments face intense sun through unfiltered glass and the condensation that builds on cold glass during the wet season. Mint Sanitary cleans both, using eco-friendly, non-toxic, plant-based products, background-checked, bonded, and insured technicians, and a 24-hour satisfaction guarantee on every job. New customers save 10% off their first clean with code MINT26. Our crews and trucks are based in North Vancouver, so we schedule Vancouver appointments around bridge travel and recommend calling ahead rather than expecting same-day service.",
    metaTitle: "Drapes & Curtains Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Professional drapes and curtains cleaning in Vancouver, from Kitsilano character homes to Yaletown condo towers. In-home and drop-off options. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
