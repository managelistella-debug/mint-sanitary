import {
  key,
  refTo,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "gym-cleaning";

const whatsIncludedCards = [
  {
    title: "Equipment Sanitization",
    body: "Free weights, machines, benches, grips, handles, and barbells sprayed, given contact time, then wiped again.",
  },
  {
    title: "Cardio Equipment Disinfection",
    body: "Treadmills, ellipticals, rowing machines, and stationary bikes, including screens, buttons, handrails, and foot platforms.",
  },
  {
    title: "Floor Care",
    body: "Sweeping, vacuuming, and mopping throughout, with extra attention in locker rooms to control moisture and prevent odor buildup.",
  },
  {
    title: "High-Touch Surface Disinfection",
    body: "Door handles, light switches, water fountain buttons, entrance areas, and the reception desk.",
  },
  {
    title: "Restroom Sanitation",
    body: "Toilets, sinks, mirrors, soap dispensers, and paper towel holders, with floors mopped and odor control applied.",
  },
  {
    title: "Reception Area Cleaning",
    body: "Desks, chairs, and common areas kept presentable for the first impression members get walking in.",
  },
  {
    title: "Trash Removal",
    body: "Bins emptied and liners replaced throughout the facility.",
  },
  {
    title: "Locker Room and Shower Area Deep Cleaning",
    body: "Behind equipment, disinfecting benches, and treating shower corners to stop mold before it starts.",
  },
  {
    title: "Carpet Extraction",
    body: "Weekly or monthly extraction in cardio areas and group fitness studios, where foot traffic and sweat build up fastest.",
  },
  {
    title: "Mat and Yoga Studio Disinfection",
    body: "Yoga mats, resistance bands, and studio floors get their own protocol, since members lie directly on these surfaces.",
  },
  {
    title: "Group Fitness Class Room Sanitization",
    body: "Mirrors, floors, and shared equipment cleaned between classes.",
  },
  {
    title: "Odor Control",
    body: "Enzyme-based treatments break down sweat residue at the source instead of masking it with fragrance.",
  },
  {
    title: "Post-Outbreak Sanitization",
    body: "Emergency deep disinfection if a member reports ringworm, MRSA, or another infection tied to your facility.",
  },
].map((c) => ({ _key: key("card"), ...c, items: [] }));

const pricingTiers = [
  {
    title: "Daily Surface Disinfection",
    range: "",
    body: "Pre-opening, mid-day, and evening visits keep equipment and high-touch surfaces in check throughout the day.",
  },
  {
    title: "Weekly or Monthly Deep Cleaning",
    range: "",
    body: "Carpet extraction, locker room sanitization, and mat disinfection on a set schedule.",
  },
  {
    title: "Customized Frequency",
    range: "",
    body: "Three times daily, twice daily, or five days a week, built around your facility's needs.",
  },
  {
    title: "Emergency Outbreak Disinfection",
    range: "",
    body: "Priority response when an infection is reported at the gym.",
  },
].map((t) => ({ _key: key("tier"), ...t }));

const processSteps = [
  {
    title: "Initial Assessment and Custom Plan Development",
    body: "A visit to your facility to measure square footage, count equipment, identify high risk areas, and learn peak hours and member demographics. From there, we design a schedule that fits how your gym operates.",
  },
  {
    title: "Pre-Service Equipment and Staff Setup",
    body: "Professional disinfectants, microfiber cloths, and gym-certified spray bottles go out with a team trained in proper disinfection contact times, usually around 10 seconds per surface.",
  },
  {
    title: "Daily Cleaning Execution",
    body: "Most gyms get three visits a day: pre-opening, mid-day, and evening or post-close. Each visit is documented, and any maintenance issues get flagged as they're found.",
  },
  {
    title: "Deep Cleaning and Maintenance",
    body: "Weekly or monthly, depending on the facility. Carpet extraction, locker room deep disinfection, mat sanitization, and odor control all happen during off-hours so they don't interrupt members.",
  },
  {
    title: "Quality Assurance and Reporting",
    body: "A report after each service details what was cleaned, when, and any issues noticed. If equipment breaks or a member reports a concern, response is available seven days a week.",
  },
].map((s) => ({ _key: key("step"), ...s }));

const whyChooseItems = [
  {
    title: "Book Ahead for the Fastest Slot",
    body: "We're available 7 days a week, including evenings and weekends, but our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge. Booking ahead gets your studio the fastest available slot instead of hoping for a same-day opening.",
  },
  {
    title: "Eco-Friendly Commitment",
    body: "We use eco-friendly, non-toxic, plant-based disinfectants that are safe for members with asthma, allergies, or sensitive skin, and safe for the rubber flooring and foam mats common in Vancouver's smaller studio spaces.",
  },
  {
    title: "Certified Professional Staff",
    body: "Our team is background-checked, bonded, and insured, and trained in gym disinfection protocols aligned to Health Canada's cleaning and disinfecting guidance and WorkSafeBC standards.",
  },
  {
    title: "We Plan Around Class Schedules, Not Just Business Hours",
    body: "Boutique studios in Kitsilano and Mount Pleasant often run classes every 45 to 60 minutes from early morning to late evening. We build cleaning windows around gaps in your class schedule, not a generic open-to-close routine.",
  },
  {
    title: "Transparent Pricing and Free Estimates",
    body: "Every quote is itemized, with no hidden fees and no contract lock-in.",
  },
  {
    title: "We Coordinate With Strata and Building Access Rules",
    body: "Studios in Yaletown condo towers and mixed-use Mount Pleasant buildings often require concierge sign-in, freight elevator bookings, or a strata-approved contractor list. We handle that coordination ahead of your first visit.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    body: "If anything about a clean isn't right, we come back within 24 hours to fix it, no extra charge.",
  },
  {
    title: "Local Studio Cluster Experience",
    body: "We've worked with fitness spaces across Yaletown, Mount Pleasant, Kitsilano, and Commercial Drive, and we build schedules around the density and class turnover typical of these neighbourhoods.",
  },
].map((i) => ({ _key: key("why"), ...i }));

const faqItems = [
  ["How often should my gym be cleaned in Vancouver?", "It depends on member traffic and facility size, but most Vancouver gyms benefit from daily cleaning split across pre-opening, mid-day, and post-close visits. Boutique studios running back-to-back classes in Kitsilano, Mount Pleasant, or Commercial Drive often need more frequent attention to high-touch equipment between sessions."],
  ["What disinfectants does Mint Sanitary use in Vancouver gyms?", "We use eco-friendly, non-toxic, plant-based disinfectants that meet Health Canada and WorkSafeBC standards. They're safe for members with allergies or sensitivities and effective against MRSA, staph, strep, and fungal infections, and safe for rubber flooring and foam mats."],
  ["Is Mint Sanitary based in Vancouver?", "Our crews and trucks are based in North Vancouver, across the Burrard Inlet. We serve Vancouver gyms and studios regularly, but because our team travels over the Lions Gate or Ironworkers Memorial Bridge, we recommend calling ahead rather than expecting same-day service."],
  ["Can your team respond quickly if a member contracts MRSA or ringworm at my Vancouver gym?", "We prioritize outbreak calls and mobilize as quickly as bridge travel from North Vancouver allows. Call as soon as an issue is reported so we can plan the fastest route into Yaletown, Mount Pleasant, Kitsilano, or wherever your facility sits."],
  ["Do you offer gym cleaning in Vancouver for boutique studios?", "Yes. Yoga studios, CrossFit boxes, spin studios, and Pilates spaces across Yaletown, Mount Pleasant, Kitsilano, and Commercial Drive get the same level of professional care as a full-size gym, scaled to the size of the space."],
  ["How do you schedule cleaning around back-to-back class times?", "We map your class calendar during the initial walkthrough and slot cleaning into the gaps, whether that's a 15-minute window between spin classes or a longer block before your first morning session. Deep cleaning work is scheduled for off-hours so it never interrupts a class."],
  ["What's included in locker room and shower cleaning?", "Locker room service covers benches, behind equipment, floor mopping, and shower corners treated to stop mold before it starts. This gets extra attention through Vancouver's wet season, since smaller studio footprints hold moisture longer than larger, more ventilated gym floors."],
  ["How do you control odor in gyms and studios?", "We use enzyme-based treatments that break down sweat residue at the source instead of masking it with fragrance. This matters most in compact Vancouver studios where a small footprint means odor builds up faster than in a larger facility."],
  ["How often do high-traffic boutique studios need cleaning compared to a traditional gym?", "Boutique studios running multiple back-to-back classes a day, common in Kitsilano and Mount Pleasant, generally need more frequent surface disinfection between sessions than a traditional gym with steadier, spread-out foot traffic through the day."],
  ["Are your products safe for gym flooring, mats, and turf?", "Yes. Our eco-friendly, non-toxic products are formulated to be safe on rubber flooring, foam mats, turf, and the finishes used in Vancouver's studio and gym spaces, without leaving a residue that affects grip."],
  ["How much does gym cleaning cost in Vancouver?", "Cost depends on square footage, equipment volume, and how many visits per week your facility needs. Pricing is the same across our whole service area, so a Yaletown studio pays the same rate structure as a comparable space in North Vancouver. Head to our rates page for a free, itemized estimate."],
  ["Can Mint Sanitary clean my Vancouver gym outside of business hours?", "Yes. Most gyms schedule cleaning before opening, during a mid-day lull, or after close, and deep cleaning work is typically done during off-hours so it never interrupts members or class schedules."],
  ["Do you need building or strata access to clean studios inside Vancouver condo towers?", "Often, yes. Studios in Yaletown and other mixed-use towers may require concierge sign-in or a strata-approved contractor list. We coordinate that access ahead of your first visit so it doesn't delay service."],
  ["What happens if a Vancouver member reports an infection linked to my gym?", "Call us and we'll prioritize outbreak disinfection at your facility as soon as travel allows. We treat the affected equipment and surrounding areas and document the work in a report you can share with staff or members if needed."],
  ["Can I get a first-time discount on gym cleaning in Vancouver?", "Yes. New Vancouver clients get 10% off their first service with code MINT26."],
  ["How do I know your Vancouver gym cleaning is working?", "You'll get a detailed report after each service showing what was cleaned and when. Clients who want extra confirmation can request ATP testing to measure bacteria levels before and after service at their Vancouver location."],
  ["Do you clean CrossFit boxes and spin studios in Vancouver, or just traditional gyms?", "We clean every type of fitness space in Vancouver, including CrossFit boxes, spin studios, Pilates and yoga studios, and full-service gyms. Equipment and floor protocols are adjusted to match what each space needs."],
  ["Do Vancouver gym owners need a contract to use Mint Sanitary?", "No. We don't lock Vancouver clients into contracts. Every quote is itemized and transparent, and you can adjust or cancel service as your facility's needs change."],
  ["Are your Vancouver gym cleaning staff bonded and insured?", "Yes. Every team member who services a Vancouver facility is background-checked, bonded, and insured, with training aligned to Health Canada and WorkSafeBC standards."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Gym Cleaning in Vancouver",
      intro: "Daily and deep cleaning coverage includes:",
      cards: whatsIncludedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("A lot of Vancouver's fitness studios operate out of tight ground-floor commercial space, tucked into mixed-use buildings along 4th Avenue and Broadway in Kitsilano, the converted warehouse and brewery blocks of Mount Pleasant, and the storefronts lining Commercial Drive. That footprint means less square footage per member than a suburban gym, so sweat, moisture, and odor concentrate faster. If a studio smells noticeably different by the fourth or fifth class of the day, that's a sign the daily cleaning pass isn't keeping pace with the schedule."),
        para("Studios in Yaletown often sit on the ground floor of residential condo towers, sharing walls, ventilation, or plumbing with the building above. A locker room or shower area that stays damp between visits becomes a mold risk for the studio and, in some buildings, a strata complaint waiting to happen."),
        para("Boutique studios running back-to-back class formats, spin at 6am, HIIT at noon, yoga in the evening, hand equipment and mats to a new group of members every 45 to 60 minutes with barely a break to wipe anything down. If staff are relying on members to spray their own mat between classes, high-touch surfaces like grips, straps, and door handles are getting missed."),
        para("Older character buildings converted into gym space, more common in Mount Pleasant and along Commercial Drive than in Vancouver's glass towers, tend to have less airflow and older flooring underneath rubber mats. Musty smell in the weight room or a sticky feel on cardio equipment screens are both signs the space needs more than a surface wipe."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Gym Cleaning Prices",
      intro: "Pricing depends on square footage, equipment count, and how often your Vancouver facility needs service. Packages typically include:",
      tiers: pricingTiers,
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink(
          "Regular professional disinfection extends equipment lifespan by 20 to 30%, which matters for a Vancouver studio with $50,000 to $100,000 invested in machines and mats packed into a small footprint. Visit our ",
          "rates page",
          "/rates",
          " for a free, itemized estimate, or call 236-688-3248 to talk through your space."
        ),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Gym Cleaning Process Works",
      intro: "A clean gym isn't a once-a-week job. It's built through daily attention to the surfaces members touch most.",
      checklistItems: [],
      steps: processSteps,
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Businesses Choose Mint Sanitary",
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
        para("Vancouver's fitness market is dense in a way North Vancouver's is not. Kitsilano's stretch along 4th Avenue, Mount Pleasant's converted industrial units, and the storefronts on Commercial Drive pack boutique studios into small commercial footprints, often with shared walls, shared HVAC, or a residential tower sitting directly above. A locker room that stays damp or a mat that isn't disinfected between classes doesn't just affect that one studio, it can become an odor or moisture complaint that reaches the building's strata council or neighbouring tenant."),
        para("Class format is the other real difference. Many Vancouver studios run tight, back-to-back schedules, spin, HIIT, and yoga sessions stacked through the day with only a few minutes between groups. That leaves little to no time for staff to disinfect mats, grips, and floors between classes, which is exactly the gap professional cleaning is built to close. A traditional gym with open-floor access spread across the day doesn't face that same compressed turnover."),
        para("Vancouver's wet season, roughly October through April, adds moisture to locker rooms and shower areas in these smaller footprints faster than in a more spread-out facility, since there's simply less air volume to dry things out between visits. Mold prevention in shower corners and behind equipment needs more consistent attention in these tighter Vancouver studio spaces than it does in a larger, more ventilated gym floor."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Commercial Cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
        multiLinkPara(["", ["Office Cleaning in Vancouver", "/vancouver/office-cleaning"]]),
        multiLinkPara(["", ["Strata Cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
        multiLinkPara(["", ["School Cleaning in Vancouver", "/vancouver/school-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Gym Cleaning in Vancouver",
      body: [
        para("We clean gyms, studios, and fitness centers across Yaletown, Mount Pleasant, Kitsilano, and Commercial Drive, the four neighbourhoods with the densest concentration of boutique fitness spaces in the city, along with Downtown Vancouver, West End, Fairview, Kerrisdale, Point Grey, and Dunbar. A spin studio on the ground floor of a Yaletown condo tower needs a different access plan than a CrossFit box in a converted Mount Pleasant warehouse or a yoga studio on a Kitsilano storefront strip, so we build the schedule around your building type and your class calendar rather than a one-size template."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Gym Cleaning in Vancouver?",
      body: "Call 236-688-3248 or request a free estimate online. New clients get 10% off their first service with code MINT26. Because our crews travel from North Vancouver, book ahead of when you need service. Visit our rates page for full pricing details.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Gym Cleaning in Vancouver",
    heroHeading: "Gym Cleaning in Vancouver",
    heroIntro: "Yaletown, Mount Pleasant, Kitsilano, and Commercial Drive pack more boutique fitness studios and gyms into a few blocks than almost anywhere else in the region, and members judge a space by how it smells and feels before they judge the equipment. Mint Sanitary cleans gyms, spin studios, yoga rooms, and CrossFit boxes across Vancouver, rated 5 out of 5 from 50+ Google reviews. Crews are background-checked, bonded, and insured, use eco-friendly, non-toxic, plant-based products, and carry WorkSafeBC coverage on every job. We're based in North Vancouver, so we ask Vancouver gym owners to book ahead rather than expect same-day service. New clients get 10% off their first clean with code MINT26.",
    metaTitle: "Gym Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Gym and fitness studio cleaning for Yaletown, Mount Pleasant, Kitsilano, and Commercial Drive. Eco-friendly disinfection, 5 out of 5 rating. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
