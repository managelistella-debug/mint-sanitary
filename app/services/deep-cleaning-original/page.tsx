import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/deep-cleaning-original
// so the CMS version at /services/deep-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Deep Cleaning Services in Greater Vancouver | Mint Sanitary",
  description:
    "Professional deep cleaning for homes across Greater Vancouver. Eco-friendly products, background-checked teams, 24-hour guarantee. Get an instant quote.",
  robots: { index: false, follow: false },
};

const deepCleanAreas = [
  {
    title: "Kitchen",
    image: "/deep-cleaned-kitchen-north-vancouver.jpg",
    items: [
      "Inside oven, refrigerator, and dishwasher",
      "Cabinet interiors and drawer pulls",
      "Backsplash grouting and tile scrubbing",
      "Inside microwave and range hood, including the filter",
      "Behind and under the fridge and stove",
      "Light fixtures and under-cabinet lighting",
      "Countertops, sink, and faucet sanitized",
      "Floors scrubbed in corners and under every appliance",
    ],
  },
  {
    title: "Bathrooms",
    image: "/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg",
    items: [
      "Tile grout scrubbed thoroughly",
      "Behind the toilet and under the sink",
      "Shower corners, tracks, doors, and fixtures descaled",
      "Window sills and ventilation fans dusted and cleared",
      "Cabinet interiors wiped and organized",
      "Mirrors and chrome polished",
      "Floors scrubbed including baseboards and corners",
    ],
  },
  {
    title: "Bedrooms and Living Areas",
    image: "/house-cleaning-bedroom-north-vancouver.jpg",
    items: [
      "Behind and under beds, sofas, and dressers",
      "Baseboards, crown molding, and door frames wiped down",
      "Ceiling fans and light fixtures dusted",
      "Window tracks, sills, and blinds cleaned",
      "Closet interiors dusted and shelves wiped",
      "Upholstery vacuumed and spot-treated",
      "Carpets shampooed or hard floors deep-cleaned",
    ],
  },
  {
    title: "High-Touch Surfaces",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
    items: [
      "Door handles, light switches, and railings sanitized",
      "Remote controls, thermostats, and alarm panels wiped",
      "Cabinet and drawer handles",
      "Stair railings",
    ],
  },
  {
    title: "Hard-to-Reach Areas",
    image: "/recurring-cleaning-hepa-vacuum-north-vancouver.jpg",
    items: [
      "Top of cabinets, the fridge, and wardrobes",
      "Inside vents and air returns",
      "Behind the washer and dryer",
      "Cobwebs in ceiling corners and stairwells",
      "Garage entry or mudroom areas",
    ],
  },
];

const signsYouNeedIt = [
  "It's been more than 3 to 4 months since your last deep clean",
  "You're moving in or out of a property",
  "You're preparing for guests, a holiday, or a special event",
  "You notice buildup on grout, baseboards, or inside appliances",
  "Someone in your household has allergies, asthma, or respiratory issues",
  "You have pets that shed or track in dirt",
  "You just finished a renovation",
  "You're listing your property for sale or rental",
  "You're switching from no cleaning service to a recurring plan (a deep clean is a good starting point)",
];

const pricingTiers = [
  {
    label: "500–800 sq ft",
    range: "$390 – $480",
    details: "Compact condos and small apartments. Typically 3 to 4 hours.",
  },
  {
    label: "900–1,500 sq ft",
    range: "$580 – $620",
    details: "Mid-size homes and townhomes. Usually 4 to 6 hours. This is the most common tier.",
  },
  {
    label: "2,000–5,000+ sq ft",
    range: "$650 – $850+",
    details: "Larger homes with multiple bathrooms. Running 6 to 8+ hours. Properties over 6,000 sq ft should call for a custom quote.",
  },
];

const healthBenefits = [
  {
    title: "Allergen and dust mite removal",
    body: "Regular vacuuming misses dust mites hiding in carpets, upholstery, and bedding. A deep clean removes them, which helps households dealing with asthma or allergies.",
  },
  {
    title: "Mold and mildew prevention",
    body: "Coastal BC's moisture speeds up mold growth in grout lines, bathroom corners, and under appliances. Getting into those areas regularly keeps mold from taking hold.",
  },
  {
    title: "Bacteria and pathogen reduction",
    body: "High-touch surfaces and appliance interiors collect bacteria that everyday cleaning skips. A deep clean addresses both.",
  },
  {
    title: "Better indoor air quality",
    body: "Removing built-up dust, pet dander, and other compounds makes the air inside your home noticeably cleaner.",
  },
  {
    title: "Longer-lasting surfaces",
    body: "Grease, grime, and mineral buildup wear down flooring, countertops, and fixtures over time. Deep cleaning slows that wear and extends the life of what you already have.",
  },
  {
    title: "A calmer home",
    body: "A genuinely clean space has an effect on how a home feels day to day, not just how it looks.",
  },
];

const processSteps = [
  { title: "Free estimate", body: "Call us or book online. We discuss your property, your focus areas, and give you a transparent quote up front." },
  { title: "Schedule at your convenience", body: "Mint Sanitary works 7 days a week, including evenings, weekends, and holidays." },
  { title: "Our team arrives ready", body: "We bring our own eco-friendly products and equipment, and do a quick walkthrough before starting." },
  { title: "Room-by-room deep clean", body: "The team works top to bottom, systematically, for 4 to 8 hours depending on the size of your home." },
  { title: "Quality walkthrough", body: "Before we leave, we walk through the home with you to confirm the work meets our standard." },
  { title: "Optional follow-up plan", body: "If you want to maintain the results, we can set up a recurring standard cleaning schedule." },
];

const faqItems = [
  {
    question: "How long does a deep clean take?",
    answer:
      "Most deep cleans take 4 to 8 hours, depending on the size of your home and its current condition. A compact condo may only need 3 to 4 hours, while a larger home with multiple bathrooms can take longer.",
  },
  {
    question: "How often should I book a deep clean?",
    answer:
      "We recommend a deep clean every 2 to 4 months, or whenever you notice buildup on grout, baseboards, or inside appliances. Homes with pets or high foot traffic may need it more often.",
  },
  {
    question: "What's the difference between deep cleaning and standard cleaning?",
    answer:
      "Deep cleaning is a thorough reset that covers inside appliances, grout, baseboards, and behind furniture. Standard cleaning is routine maintenance for surfaces, floors, and bathrooms on a weekly or monthly schedule. Many clients book a deep clean first, then move to a standard plan.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No. Many clients provide access instructions and go about their day. If you prefer to be present, that works too. We'll confirm the arrangement when you book.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use plant-based, non-toxic cleaning products and HEPA-filter vacuums throughout every deep clean. This makes the process safer for kids, pets, and anyone with allergies or respiratory sensitivities.",
  },
  {
    question: "How much does a deep clean cost?",
    answer:
      "Pricing is based on square footage. Homes between 500 and 800 sq ft run $390 to $480, homes between 900 and 1,500 sq ft run $580 to $620, and homes between 2,000 and 5,000+ sq ft run $650 to $850+. For an exact quote based on your home, use our rates page.",
  },
  {
    question: "Is deep cleaning worth it before selling my home?",
    answer:
      "Yes. A deep clean addresses the details buyers and renters notice, like grout, appliance interiors, and baseboards. It's a common step before listing a property.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer: "Yes. If anything isn't up to standard, we return within 24 hours to fix it at no charge.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Mint Sanitary serves Greater Vancouver, including North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. See our service areas page for the full list.",
  },
  {
    question: "Do you require a contract?",
    answer: "No. Mint Sanitary works on transparent, project-based pricing with no long-term contracts required.",
  },
];

export default function ServicesDeepCleaningPage() {
  return (
    <ServicePageLayout
      title="Deep Cleaning Services in Greater Vancouver"
      heroImage="/deep-cleaning-bathroom-north-vancouver.jpg"
      heroSubtitle="A Top-to-Bottom Reset"
      heroIntro="A deep clean resets your home from top to bottom. It goes past the surfaces you wipe every week and into the spots that build up over months: inside the oven, behind the fridge, along the grout lines, under the furniture. Every team member is background-checked, bonded, and insured, and we use plant-based, non-toxic products and HEPA-filter vacuums."
      faqItems={faqItems}
      ctaHeading="Ready to Book?"
      ctaBody="Get an instant quote for your home, or call 236-688-3248 to speak with our team. First-time customers get 10% off with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Intro + NV cross-link (white bg) ─────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary provides deep cleaning across Greater Vancouver,
            including West Vancouver, Vancouver, Burnaby, New Westminster,
            and Maple Ridge. We&apos;re based in North Vancouver, and if you
            live there, check out our page on{" "}
            <a href="/north-vancouver/deep-cleaning" className="underline underline-offset-2">
              deep cleaning in North Vancouver
            </a>{" "}
            for details specific to your area. This page covers what deep
            cleaning looks like for homes across the whole region. If
            something isn&apos;t right, we come back within 24 hours to fix
            it at no charge.
          </p>
        </div>
      </section>

      {/* ── What's Included — Card Grid with images ──────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in a Deep Clean
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            A deep clean covers every room, working from the ceiling down to
            the baseboards.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {deepCleanAreas.map((area) => (
              <div key={area.title} className="overflow-hidden rounded-[14px] bg-white/[0.12] backdrop-blur-sm">
                <img
                  src={area.image}
                  alt={`${area.title} deep cleaning`}
                  className="h-[150px] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-body text-[17px] font-extrabold text-white">{area.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {area.items.map((item) => (
                      <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                        &bull; {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep vs Standard (blue bg) ────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Deep Cleaning vs Standard Cleaning
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            These two services solve different problems. Deep cleaning is an
            intensive reset. It tackles buildup and neglected areas: inside
            appliances, grout, baseboards, ceiling fans, and behind
            furniture. It takes 4 to 8 hours depending on the size of your
            home, and we recommend it every 2 to 4 months, or whenever your
            home needs it. Standard cleaning is routine upkeep. It covers
            surfaces, floors, bathrooms, kitchens, and living areas in 2 to
            4 hours, and works well on a weekly, bi-weekly, or monthly
            schedule.
          </p>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Many clients start with a deep clean, then set up a recurring
            standard cleaning plan to keep the home at that level. Read more
            about our{" "}
            <a href="/services/house-cleaning" className="underline underline-offset-2">
              house cleaning services
            </a>{" "}
            to see how the two fit together.
          </p>
        </div>
      </section>

      {/* ── Signs You Need a Deep Clean (white bg) ───────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Signs You Need a Deep Clean
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
            A deep clean makes sense if any of these apply to you:
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {signsYouNeedIt.map((item) => (
              <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                &bull; {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pricing (f4f8ff bg) ───────────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Deep Cleaning Pricing
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary offers transparent, project-based pricing with no
            hourly rates and no contracts. Pricing depends on the size of
            your home:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.label} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.label}</h3>
                <p className="mt-2 font-display-reg text-[24px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Every job starts with a free estimate. For an exact number based
            on your home,{" "}
            <a href="/rates" className="underline underline-offset-2">
              get an instant quote
            </a>{" "}
            or call 236-688-3248. First-time customers get 10% off with code
            MINT26.
          </p>
        </div>
      </section>

      {/* ── Health Benefits (white bg) ───────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Deep Cleaning Matters for Your Health and Your Home
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {healthBenefits.map((b) => (
              <div key={b.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{b.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps (blue bg) ──────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              How the Process Works
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/20 font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Serving Greater Vancouver (white bg) ─────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Serving Homes Across Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is based in North Vancouver and serves homes
            throughout the region, including West Vancouver, Vancouver,
            Burnaby, New Westminster, and Maple Ridge. See our full{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              service areas
            </a>{" "}
            for a list of the communities we cover, or visit our{" "}
            <a href="/north-vancouver" className="underline underline-offset-2">
              North Vancouver
            </a>{" "}
            hub page for local details. If you&apos;re located specifically
            in North Vancouver, our{" "}
            <a href="/north-vancouver/deep-cleaning" className="underline underline-offset-2">
              deep cleaning in North Vancouver
            </a>{" "}
            page has more detail on that area.
          </p>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Deep cleaning pairs well with a few other services we offer,
            including move-in/move-out cleaning, post-construction cleaning,
            and recurring standard cleaning for ongoing maintenance.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
