import {
  key,
  refTo,
  heading,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "commercial-cleaning";

const services = [
  {
    title: "Office Cleaning",
    href: "/vancouver/office-cleaning",
    description: "Desks, break rooms, washrooms, and common areas cleaned on your schedule, daily, weekly, or bi-weekly.",
  },
  {
    title: "Restaurant Cleaning",
    href: "/vancouver/restaurant-cleaning",
    description: "Deep cleaning from hood systems to floor drains, built around health code requirements and off-hours access.",
  },
  {
    title: "Strata Cleaning",
    href: "/vancouver/strata-cleaning",
    description: "Lobbies, hallways, elevators, shared washrooms, recycling areas, and grounds maintained on a schedule your council sets.",
  },
  {
    title: "School Cleaning",
    href: "/vancouver/school-cleaning",
    description: "Hospital-grade disinfection for classrooms, washrooms, gyms, and cafeterias.",
  },
  {
    title: "Gym Cleaning",
    href: "/vancouver/gym-cleaning",
    description: "Equipment, locker rooms, and shower areas disinfected to reduce the spread of bacteria and viruses.",
  },
  {
    title: "Church Cleaning",
    href: "/vancouver/church-cleaning",
    description: "Sanctuaries, fellowship halls, nurseries, kitchens, and administrative spaces cleaned with care for your building and congregation.",
  },
];

const processSteps = [
  ["Daily Cleaning", "Ideal for high-traffic offices, retail spaces, medical facilities, and restaurants that need consistent hygiene every day."],
  ["Weekly Cleaning", "The most popular option for small to mid-size offices. Covers thorough cleaning of all areas once per week to maintain a professional environment."],
  ["Bi-Weekly Cleaning", "A budget-friendly option for smaller offices or businesses with lighter foot traffic. Deep cleaning every two weeks keeps spaces fresh."],
  ["Monthly Deep Cleaning", "Sessions that tackle carpet shampooing, floor stripping, high dusting, and areas that don't need weekly attention."],
  ["After-Hours & Evening Cleaning", "We work around your operating hours. Most commercial clients prefer evening or early-morning cleaning so there's zero disruption to their workday."],
  ["Weekend & Holiday Cleaning", "Restaurants, gyms, churches, and retail spaces often need weekend and holiday service. We're available 7 days a week, including evenings and weekends."],
  ["Custom Schedules", "Every business is different. We build tailored cleaning schedules based on foot traffic patterns, operating hours, and specific requirements."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["Book Ahead for the Fastest Slot", "We're available 7 days a week, including evenings and weekends, but our crews travel from North Vancouver across the Lions Gate or Ironworkers Memorial Bridge. Booking ahead gets you the fastest available slot instead of hoping for a same-day opening."],
  ["Eco-Friendly Products", "Biodegradable, non-toxic cleaning products that deliver results without leaving harmful residue behind. That matters more in shared-air towers where your cleaning products can affect the office two doors down."],
  ["WorkSafeBC and WHMIS Compliant", "Our team is trained in WorkSafeBC standards and current WHMIS protocols, so you stay compliant without carrying the training burden yourself."],
  ["Ready for Property Manager Paperwork", "Every cleaner is background-checked, bonded, and insured. If your building's property manager or strata council needs a certificate of insurance before granting after-hours access, we provide it before your first visit."],
  ["Customizable Contracts", "Month-to-month, with no long-term commitment required. Adjust your cleaning scope or frequency as your Vancouver business changes."],
  ["We Work Around Concierge and Security Sign-In", "Downtown, Yaletown, and Fairview office towers usually require checking in with building security, signing a visitor log, or booking a freight elevator window. We plan our arrival time around those steps so your building's access rules don't cost you cleaning time."],
  ["24-Hour Satisfaction Guarantee", "If anything about a clean isn't right, we come back within 24 hours to fix it, no extra charge."],
  ["Crews That Plan Routes Around Bridge Traffic", "Because we're crossing from North Vancouver, we build travel time into every quote so an after-hours appointment in Yaletown or Commercial Drive still starts on time."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const faqItems = [
  ["What does commercial cleaning include in Vancouver?", "Commercial cleaning covers floors, carpets, washrooms, break rooms, desks, common areas, windows, and disposal systems. The exact scope depends on your business type and size. We customize every plan for your Vancouver location during a free walkthrough estimate."],
  ["How much does commercial cleaning cost in Vancouver?", "Commercial cleaning in Vancouver typically costs between $200 and $1,000 or more per month, depending on the size of your space, how often you need cleaning, and the scope of work involved. We provide a free, no-obligation estimate after a quick walkthrough. Visit our rates page or call 236-688-3248 to talk through your space."],
  ["Is Mint Sanitary based in Vancouver?", "Our crews and trucks are based in North Vancouver, across the Burrard Inlet. We serve Vancouver businesses regularly, but because our team travels over the Lions Gate or Ironworkers Memorial Bridge, we recommend calling ahead rather than expecting same-day service."],
  ["Can you clean around our Vancouver business's operating hours?", "Yes. We offer early morning, evening, late night, and weekend service built around your schedule. Most Vancouver clients prefer after-hours cleaning so there's zero disruption to the workday, and we plan our crew's bridge travel time so those windows start on time."],
  ["Do you handle building security sign-in for Downtown and Yaletown towers?", "Yes. Our cleaners check in with concierge or building security, sign visitor logs, and work within booked freight elevator windows where required. Let us know your building's specific access procedure ahead of your first clean so we can plan around it."],
  ["Do you offer month-to-month contracts?", "Yes. All of our commercial contracts are month-to-month with no long-term commitment required. You can adjust the schedule or scope as your Vancouver business changes."],
  ["Are your Vancouver commercial cleaners insured and bonded?", "Every team member is professionally trained, fully insured, bonded, and background-checked. We also maintain WorkSafeBC coverage and current WHMIS certification for all work performed in Vancouver."],
  ["Can you provide proof of insurance for our property manager or strata council?", "Yes. Many Downtown, Yaletown, and Fairview buildings require a certificate of insurance before granting after-hours access. We provide that documentation ahead of your first scheduled clean."],
  ["Do you use eco-friendly products in shared-air office buildings?", "Yes. All of our products are eco-friendly and non-toxic, which matters in towers where one HVAC system serves multiple tenants. Safety data sheets are available on request for any Vancouver business or building manager who needs them."],
  ["What's the difference between janitorial and commercial cleaning?", "Janitorial service handles routine daily maintenance like emptying bins and restocking supplies. Commercial cleaning goes deeper with floor stripping, window cleaning, deep disinfection, and specialized work. Most Vancouver businesses end up needing both."],
  ["Do you clean small offices as well as large commercial spaces?", "Yes. We work with everything from a single-suite office in Fairview to a multi-floor tower in Downtown Vancouver. Scope and frequency scale with the size of your space, and pricing is quoted after a walkthrough."],
  ["Do you clean strata buildings and condominiums in Vancouver?", "Yes. We handle lobbies, hallways, common areas, underground parking, elevators, and exterior grounds for strata buildings across Vancouver, including the dense towers in Downtown, Yaletown, West End, and Fairview."],
  ["Can strata councils set up a recurring contract for common areas?", "Yes. Many Vancouver strata councils choose a weekly or bi-weekly schedule for common areas, with a month-to-month contract that can adjust as the building's needs change."],
  ["Do you offer one-time deep cleaning for a move-in, move-out, or renovation?", "Yes. In addition to recurring contracts, we provide one-time deep cleaning for move-ins, move-outs, post-renovation cleanup, and special events at Vancouver commercial properties. Call for a free estimate."],
  ["Do you clean restaurants and commercial kitchens along Commercial Drive?", "Yes. We regularly clean restaurant kitchens and dining areas along the Commercial Drive strip, including hood systems, floor drains, and grease traps, worked around your closing hours."],
  ["Do you cover holiday cleaning for Vancouver businesses?", "Yes. We're available 7 days a week, including statutory holidays, for businesses like restaurants, gyms, and retail spaces that need service when they're closed to customers."],
  ["What types of Vancouver businesses do you work with?", "We clean offices, commercial kitchens, strata buildings, schools, gyms, and churches, and have worked with organizations including Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction."],
  ["Do you clean medical and dental offices in Vancouver?", "Yes. Medical and dental offices need a higher standard of disinfection than a typical office. Our team follows Health Canada guidelines for high-touch surfaces and can build a schedule around patient hours."],
  ["Can I get a customized cleaning checklist for my Vancouver business?", "Yes. During your free walkthrough, we build a checklist specific to your space, covering everything from daily desk wipe-downs to monthly deep cleaning tasks. That applies the same way to a Downtown tower office and a Commercial Drive storefront."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const servicesBody = [];
  for (const s of services) {
    servicesBody.push(
      heading(s.title),
      paraWithLink(s.description + " ", "Learn more", s.href, "")
    );
  }
  servicesBody.push(
    paraWithLink(
      "We also handle post-construction cleaning for new builds and renovations, clearing dust, debris, and adhesive residue to deliver a move-in-ready commercial space. ",
      "Learn more",
      "/vancouver/post-construction-cleaning",
      ""
    )
  );

  const sections = [
    {
      _key: key("sec"),
      _type: "richText",
      heading: "What's Included in Commercial Cleaning in Vancouver",
      body: [
        para("We build commercial programs around six core service types, each customized to your Vancouver space:"),
        ...servicesBody,
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Downtown and Yaletown office towers concentrate a lot of foot traffic into a small footprint, and it shows fast. Elevator lobbies pick up scuff marks, glass entry doors smudge within a single business day, and shared washrooms on multi-tenant floors need attention more than once a week just to keep pace."),
        para("Ground-floor retail and restaurant units in Fairview and along Commercial Drive have a different problem: grease and food residue that builds up behind equipment even when staff wipe down surfaces nightly. If a hood system hasn't had a proper degrease in a while, or a walk-in cooler floor has a sticky film, that's your sign."),
        para("In older character buildings converted to commercial space, especially the small storefronts and studios scattered through Commercial Drive and Fairview, carpet and baseboards hold onto dust and allergens longer than newer construction. If staff are reporting stuffiness or allergy symptoms by mid-afternoon, the HVAC system usually isn't the only culprit."),
        para("Shared-air office floors in Downtown and Yaletown towers are also worth watching. When one tenant's cleaning routine is inconsistent, odours and dust can travel through common ventilation to neighbouring units, which is a common reason strata councils and building managers start asking every tenant to prove they have a real cleaning contract in place."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Commercial Cleaning Prices",
      tiers: [
        {
          _key: key("tier"),
          title: "Commercial Cleaning",
          range: "",
          body: "$200 to $1,000 or more per month, depending on the size of your space, how often you need service, and the scope of work involved. A small office in Fairview cleaned weekly costs less than a full-service restaurant on Commercial Drive needing nightly degreasing. Pricing is identical across our whole service area, so a Downtown Vancouver office pays the same rate structure as a comparable space in North Vancouver. We provide a free, no-obligation estimate after a walkthrough of your space.",
        },
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      body: [
        paraWithLink("Visit our ", "rates page", "/rates", " for more detail, or call 236-688-3248 to talk through your Vancouver location."),
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Commercial Cleaning Process Works",
      intro: "Every business has different cleaning needs, so we build the schedule around your operating hours and budget.",
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
        para("Commercial cleaning in Vancouver's core neighbourhoods runs into a problem North Vancouver's lower-density business parks rarely create: shared air. A single HVAC system often serves an entire floor or an entire tower in Downtown, Yaletown, and Fairview, which means the cleaning products and odours from one tenant's suite can reach the unit next door. That's part of why we lean on non-toxic, low-odour products in these buildings specifically, not just as a general selling point but as a practical requirement for staying on good terms with neighbouring tenants and building management."),
        para("Access is the other real difference. A North Vancouver office park usually means a parking lot and a door. A Downtown or Yaletown tower means concierge sign-in, a booked freight elevator window, and sometimes a strata-approved contractor list your cleaning company has to be on before you're allowed in after hours. Commercial Drive's mixed-use storefronts add a third variable: many sit in older buildings with street-level loading limitations, so equipment and supplies have to be carried in rather than wheeled from a van parked out front."),
        para("Vancouver's wet season, roughly October through April, also tracks more grit and salt into ground-floor entryways and lobbies in these dense commercial strips than a suburban office building sees, simply because of the volume of foot traffic moving between transit, sidewalks, and building entrances all day. Entry mats and lobby floors in Downtown and Yaletown towers need more frequent attention during those months than the same square footage would in a lower-traffic part of the region."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Office Cleaning in Vancouver", "/vancouver/office-cleaning"]]),
        multiLinkPara(["", ["Strata Cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
        multiLinkPara(["", ["Restaurant Cleaning in Vancouver", "/vancouver/restaurant-cleaning"]]),
        multiLinkPara(["", ["Window Cleaning in Vancouver", "/vancouver/window-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Commercial Cleaning in Vancouver",
      body: [
        para("We clean businesses across Downtown Vancouver, Yaletown, Fairview, Commercial Drive, Kitsilano, Mount Pleasant, West End, Kerrisdale, Point Grey, and Dunbar. The building types shift block to block: glass office towers with shared freight elevators in Downtown and Yaletown, low-rise commercial strips in Kitsilano and Commercial Drive, and the mix of medical offices and small retail found along Fairview's Broadway corridor. Wherever your business sits, we build the schedule around your building's access rules and your operating hours, not a generic template."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Commercial Cleaning in Vancouver?",
      body: "Call 236-688-3248 or request a free estimate online. New clients get 10% off their first clean with code MINT26. Because our crews travel from North Vancouver, book ahead of when you need service. Visit our rates page for full pricing details.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Commercial Cleaning in Vancouver",
    heroHeading: "Commercial Cleaning in Vancouver",
    heroIntro: "From glass-walled offices on the Broadway corridor in Fairview to retail units and restaurants along Commercial Drive, Vancouver businesses run on tight schedules and shared building access. Mint Sanitary provides commercial cleaning across Downtown Vancouver, Yaletown, Fairview, and Commercial Drive, rated 5 out of 5 from 50+ Google reviews. Our crews are background-checked, bonded, and insured, use eco-friendly, non-toxic products, and carry WorkSafeBC coverage on every job. We're based across the Burrard Inlet in North Vancouver, so we ask Vancouver businesses to book ahead rather than expect same-day service. New clients get 10% off their first clean with code MINT26.",
    metaTitle: "Commercial Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Commercial cleaning for Downtown, Yaletown, Fairview, and Commercial Drive businesses. Eco-friendly products, WorkSafeBC coverage, 5 out of 5 rating. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
