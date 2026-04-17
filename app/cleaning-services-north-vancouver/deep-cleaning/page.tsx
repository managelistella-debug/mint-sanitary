import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Deep Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional deep cleaning in North Vancouver. Eco-friendly service for homes and businesses. 7-day availability. Free estimate. MINT25 saves 10%.",
};

const deepCleanAreas = [
  {
    title: "Kitchen",
    items: [
      "Inside oven, refrigerator, and dishwasher",
      "Cabinet interiors and drawer pulls",
      "Backsplash grouting and tile scrubbing",
      "Inside microwave and range hood (interior and filter)",
      "Behind and under refrigerator and stove",
      "Light fixtures and under-cabinet lighting",
      "Countertops, sink, and faucet deep sanitized",
      "Floor scrubbed including corners and under appliances",
    ],
  },
  {
    title: "Bathroom",
    items: [
      "Tile grout scrubbed thoroughly",
      "Behind toilets and under sinks",
      "Shower corners, tracks, doors, and fixtures descaled",
      "Window sills and ventilation fans dusted and cleared",
      "Cabinet interiors wiped and organized",
      "Mirrors, chrome, and glass polished",
      "Floor scrubbed including baseboards and corners",
    ],
  },
  {
    title: "Bedrooms & Living Areas",
    items: [
      "Behind and under furniture (beds, sofas, dressers)",
      "Baseboards, crown molding, and door frames wiped",
      "Ceiling fans and light fixtures dusted",
      "Window tracks, sills, and blinds cleaned",
      "Closet interiors dusted and shelves wiped",
      "Upholstery vacuumed and spot-treated",
      "Carpets shampooed or hard floors deep-cleaned",
    ],
  },
  {
    title: "High-Touch Surfaces",
    items: [
      "All door handles, light switches, and railings sanitized",
      "Remote controls, thermostats, and alarm panels wiped",
      "Cabinet and drawer handles throughout the home",
      "Stair railings and banisters",
    ],
  },
  {
    title: "Hard-to-Reach Areas",
    items: [
      "Top of cabinets, refrigerator, and wardrobes",
      "Inside vents and air returns",
      "Behind washer and dryer",
      "Cobwebs in ceiling corners and stairwells",
      "Garage entry and mudroom areas",
    ],
  },
];

const whenNeeded = [
  "It\u2019s been more than 3\u20134 months since your last deep clean",
  "You\u2019re moving in or moving out of a property",
  "You\u2019re preparing for guests, holidays, or a special event",
  "You notice buildup on grout, baseboards, or inside appliances",
  "Someone in the household has allergies, asthma, or respiratory issues",
  "You have pets that shed or track in dirt",
  "You\u2019ve completed a renovation or construction project",
  "You\u2019re listing your property for sale or rental",
  "You\u2019re transitioning from no cleaning service to a recurring plan (a deep clean makes a great starting point)",
];

const whyChoose = [
  {
    title: "Eco-Friendly Products",
    body: "Safe around kids, pets, and anyone with sensitivities. Non-toxic, biodegradable cleaners that work without harsh chemical residue.",
  },
  {
    title: "7-Day Availability",
    body: "Weekdays, weekends, evenings, and holidays. Life doesn\u2019t fit into Monday-to-Friday, and neither do we.",
  },
  {
    title: "Free Estimates, No Pressure",
    body: "Honest pricing upfront. We provide a detailed quote before any work begins. If you want to think it over, that\u2019s fine.",
  },
  {
    title: "Transparent Pricing",
    body: "No hidden fees, no surprise charges. You know the exact cost before we start. The price we quote is the price you pay.",
  },
  {
    title: "Professional & Insured",
    body: "Every team member is vetted, trained, background-checked, bonded, and fully insured. Your property is protected.",
  },
  {
    title: "Same Team Consistency",
    body: "We aim to send the same cleaners to your home so they learn your space and deliver better results each time.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    body: "If anything doesn\u2019t meet your expectations, contact us within 24 hours and we\u2019ll return to make it right at no extra charge.",
  },
];

const pricingTiers = [
  {
    label: "500–800 sq ft",
    range: "$390 – $480",
    details:
      "Compact condos and small apartments. Typically 3\u20134 hours.",
  },
  {
    label: "900–1500 sq ft",
    range: "$580 – $620",
    details:
      "Mid-size homes and townhomes. Usually 4\u20136 hours. The most common deep clean we perform.",
  },
  {
    label: "2000–5000+ sq ft",
    range: "$650 – $850+",
    details:
      "Larger homes with multiple bathrooms. 6\u20138+ hours depending on layout and condition. Properties over 6000 sq ft \u2014 call for quote.",
  },
];

const relatedServices = [
  {
    title: "Standard Cleaning",
    href: "/cleaning-services-north-vancouver/standard-cleaning/",
    description:
      "Routine maintenance cleaning on a weekly, bi-weekly, or monthly schedule to keep your home consistently fresh between deep cleans.",
  },
  {
    title: "Move-Out Cleaning",
    href: "/cleaning-services-north-vancouver/move-out-cleaning/",
    description:
      "Detailed vacancy cleaning that helps protect deposits and prepares your property for handover inspections.",
  },
  {
    title: "Move-In Cleaning",
    href: "/cleaning-services-north-vancouver/move-in-cleaning/",
    description:
      "Deep sanitizing before unpacking so your new space starts clean, safe, and move-in ready.",
  },
  {
    title: "Post-Construction Cleaning",
    href: "/cleaning-services-north-vancouver/post-construction-cleaning/",
    description:
      "HEPA-focused post-build cleanup for renovation dust, debris, adhesive residue, and fine particles.",
  },
  {
    title: "Carpet Cleaning",
    href: "/carpet-cleaning-north-vancouver/",
    description:
      "Professional carpet cleaning to remove deep stains, allergens, and embedded dirt that regular vacuuming misses.",
  },
];

const faqItems = [
  {
    question:
      "What\u2019s the difference between deep cleaning and regular cleaning?",
    answer:
      "Regular (standard) cleaning handles routine maintenance \u2014 dusting, vacuuming, surface wiping, and bathroom sanitizing. Deep cleaning goes much further: inside appliances, grout scrubbing, baseboards, ceiling fans, behind furniture, and buildup removal in hard-to-reach areas. Standard takes 2\u20133 hours; deep cleaning takes 4\u20138 hours.",
  },
  {
    question: "How often should I get a deep clean?",
    answer:
      "Every 2\u20134 months for most homes. Households with kids, pets, or high foot traffic benefit from quarterly deep cleans. If you already have weekly or bi-weekly standard cleaning, once or twice a year is often enough to maintain freshness.",
  },
  {
    question: "How long does a deep cleaning take?",
    answer:
      "For a 2\u20134 bedroom home, plan on 4\u20138 hours. A small condo may take 3\u20134 hours. Larger homes or properties with significant buildup may require a full day. We provide a time estimate during your free consultation.",
  },
  {
    question: "Does deep cleaning damage carpets or furniture?",
    answer:
      "No. We use professional-grade, eco-friendly products that are safe for carpets, upholstery, hardwood, tile, and all common household materials. We match cleaning methods to each surface type.",
  },
  {
    question: "Are your products safe for kids and pets?",
    answer:
      "Yes. Every product is non-toxic, biodegradable, and free from harsh chemicals. No harmful fumes or residue. Safe for children, pets, and anyone with sensitivities.",
  },
  {
    question: "Can you deep clean specific rooms only?",
    answer:
      "Absolutely. We offer both full-house deep cleaning and room-specific deep cleaning. Common requests include kitchen-only or bathroom-only deep cleans. We customize the scope and adjust pricing accordingly.",
  },
  {
    question: "What if I\u2019m not home during the deep clean?",
    answer:
      "Many clients step out during the service. We just need access to the property and any special instructions. Discuss entry details and specific concerns when you book.",
  },
  {
    question: "Do you offer deep cleaning after renovations?",
    answer:
      "Yes. Post-renovation deep cleaning removes construction dust, debris, and residue. We also offer dedicated post-construction cleaning for new builds. Move-in deep cleaning is available for newly purchased or rented properties.",
  },
  {
    question: "How much does deep cleaning cost in North Vancouver?",
    answer:
      "Pricing is based on property size (square footage). Deep cleaning starts at $390 for 500\u2013600 sq ft and scales up based on size. Visit our rates page for the full pricing table, or call (604) 671-6252 for a free estimate. First-time clients save 10% with code MINT25.",
  },
  {
    question: "How do I book a deep cleaning?",
    answer:
      "Call (604) 671-6252 or request a quote online. We provide a free estimate with no obligation. Available 7 days a week, including evenings and weekends. Use code MINT25 for 10% off your first service.",
  },
];

const processSteps = [
  {
    title: "Free Estimate & Assessment",
    body: "Call (604) 671-6252 or book online. We discuss your property, focus areas, and any special requirements. You receive a transparent quote with no obligation.",
  },
  {
    title: "Schedule at Your Convenience",
    body: "Pick a day and time that works. We\u2019re available 7 days a week, including evenings and weekends. We confirm your appointment and send a reminder.",
  },
  {
    title: "Team Arrives with Professional Equipment",
    body: "Your cleaners arrive on time with eco-friendly products and professional-grade equipment. We do a quick walkthrough to confirm priorities and address any special instructions.",
  },
  {
    title: "Systematic Room-by-Room Deep Clean",
    body: "We work top to bottom through every room \u2014 inside appliances, grout scrubbing, behind furniture, ceiling fans, baseboards, and every corner that routine cleaning misses. Expect 4\u20138 hours depending on home size.",
  },
  {
    title: "Quality Walkthrough",
    body: "Before we leave, we walk through the space with you. We show you the results and address any concerns on the spot. If something doesn\u2019t meet your expectations, we fix it immediately.",
  },
  {
    title: "Follow-Up Standard Cleaning Plan",
    body: "Happy with the results? We can set you up with a recurring standard cleaning plan to maintain the results between deep cleans. Adjust, pause, or cancel anytime.",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Norgate",
  "Seymour Heights",
  "Dollarton",
  "Blueridge",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const healthBenefits = [
  {
    title: "Allergen & Dust Mite Removal",
    body: "Deep cleaning eliminates the allergen hotspots that standard cleaning misses \u2014 inside vents, under furniture, and deep in carpet fibers. Ideal for households with asthma, allergies, or respiratory sensitivities.",
  },
  {
    title: "Mold & Mildew Prevention",
    body: "North Vancouver\u2019s coastal moisture accelerates mold growth in grout lines, bathroom corners, and under appliances. A thorough deep clean removes existing growth and reduces conditions that allow it to return.",
  },
  {
    title: "Bacteria & Pathogen Reduction",
    body: "Deep sanitizing of inside appliances, cabinet interiors, and high-touch surfaces removes bacteria that builds up over months of regular use. Especially important after illness or when vulnerable family members are present.",
  },
  {
    title: "Improved Indoor Air Quality",
    body: "Dust, pet dander, and volatile compounds trapped in hard-to-reach areas are removed during a deep clean, resulting in measurably cleaner air throughout your home.",
  },
  {
    title: "Property & Surface Preservation",
    body: "Grout, appliances, and surfaces degrade faster when buildup is left untreated. A deep clean extends the life of your flooring, countertops, and fixtures by removing corrosive deposits before permanent damage sets in.",
  },
  {
    title: "Mental Clarity & Reduced Stress",
    body: "Returning to a deeply cleaned home \u2014 free of hidden grime and clutter \u2014 has a measurable effect on stress levels and mental wellbeing. A reset environment supports a reset mindset.",
  },
];

export default function DeepCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Deep Cleaning in North Vancouver"
      heroImage="/deep-cleaning-bathroom-north-vancouver.jpg"
      heroSubtitle="Professional Deep Cleaning Service"
      heroIntro="Deep cleaning goes beyond regular maintenance — reaching inside appliances, scrubbing grout, cleaning behind furniture, and tackling every corner that routine cleaning misses. Mint Sanitary provides professional deep cleaning across North Vancouver with eco-friendly products and 7-day availability. Use code MINT25 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready to Book a Deep Clean in North Vancouver?"
      ctaBody="Call Mint Sanitary at (604) 671-6252 or book online. Free estimates. 7-day availability. Eco-friendly products. Use code MINT25 for 10% off your first booking."
    >
      {/* ── A. Image + Text Intro ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/deep-cleaning-bathroom-north-vancouver.jpg"
                alt="Professional deep cleaning bathroom in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Beyond the Surface
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What&apos;s Included in a Deep Clean
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                A deep clean goes well beyond standard maintenance. While regular
                cleaning keeps surfaces tidy, deep cleaning reaches inside
                appliances, scrubs grout lines, cleans behind furniture, and
                tackles every corner that routine cleaning misses. Here&apos;s
                exactly what our team handles:
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── B. Included Areas — Card Grid ─────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {deepCleanAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-[14px] bg-white p-5 shadow-sm"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {area.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[15px] leading-[1.7] text-[#5c6075]"
                    >
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[14px] bg-white p-5 shadow-sm">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              When Do You Need a Deep Clean?
            </h3>
            <ul className="mt-3 space-y-1.5">
              {whenNeeded.map((item) => (
                <li
                  key={item}
                  className="font-body text-[15px] leading-[1.7] text-[#5c6075]"
                >
                  &bull; {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── C. Deep vs Standard Comparison ───────────────── */}
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
            Deep Cleaning vs. Standard Cleaning
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Deep Cleaning
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Intensive reset that tackles buildup and neglected areas
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Includes inside appliances, grout scrubbing, baseboards, ceiling fans, and behind furniture
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Takes 4&ndash;8 hours depending on home size and condition
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Recommended every 2&ndash;4 months or as needed
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Pricing: $180&ndash;$500+ depending on home size
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Standard Cleaning
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Routine maintenance for a consistently clean home
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Covers surfaces, floors, bathrooms, kitchen, and living areas
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Takes 2&ndash;4 hours depending on home size
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Ideal on a weekly, bi-weekly, or monthly schedule
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Pricing: $220&ndash;$620+ based on property size (sq ft)
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-[14px] bg-white/10 p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {tier.label}
                </h3>
                <p className="mt-2 font-display-reg text-[24px] text-[#66DAD5]">
                  {tier.range}
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  {tier.details}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Most clients start with a deep clean to establish a baseline, then
            switch to{" "}
            <a
              href="/cleaning-services-north-vancouver/standard-cleaning/"
              className="underline underline-offset-2"
            >
              standard cleaning
            </a>{" "}
            on a recurring schedule, with deep cleans 2&ndash;4 times per year
            for maintenance.
          </p>
        </div>
      </section>

      {/* ── D. Process Steps — Numbered Circles ───────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Deep Cleaning Process: Step by Step
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-[#5c6075]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. Why Choose — AccordionWithImage ────────────── */}
      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Deep Cleaning"
        intro="Deep cleaning demands more time, more expertise, and more thoroughness than routine maintenance. Here's what sets Mint Sanitary apart."
        image="/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg"
        imageAlt="Deep cleaned bathroom tile and grout in North Vancouver"
        items={whyChoose}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── F. Pricing Section ────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Transparent Pricing
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Deep Cleaning Pricing in North Vancouver
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Deep cleaning pricing depends on home size, current condition,
                and any add-on services requested. Larger homes with significant
                buildup or multiple bathrooms will take longer and cost more than
                smaller, well-maintained spaces. We always provide a transparent
                quote before any work begins &mdash; no surprises.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Factors that affect your final price include total square
                footage, number of bathrooms, severity of buildup, and any
                add-ons like carpet treatment or interior window washing.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/deep-cleaned-kitchen-north-vancouver.jpg"
                alt="Deep cleaned kitchen in North Vancouver"
                className="h-[280px] w-full object-cover sm:h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {tier.label}
                </h3>
                <p className="mt-2 font-display-reg text-[24px] text-[#6191e9]">
                  {tier.range}
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {tier.details}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Call{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            for a free estimate. Use code MINT25 for 10% off your first
            booking. See full pricing details on our{" "}
            <a href="/rates/" className="underline underline-offset-2">
              rates page
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── G. Related Services ───────────────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Related Cleaning Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((s) => (
              <div
                key={s.href}
                className="flex flex-col rounded-[14px] bg-white p-6 shadow-sm"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {s.description}
                </p>
                <a
                  href={s.href}
                  className="mt-5 inline-block w-fit font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#6191e9] underline underline-offset-2"
                >
                  Learn more &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H. Service Areas — Chips + Map ───────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Service Areas
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary provides deep cleaning across all North Vancouver
                neighborhoods, including Lower Lonsdale, Upper Lonsdale, Lynn
                Valley, Deep Cove, Edgemont Village, Capilano, Norgate, Seymour
                Heights, Dollarton, and Blueridge.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We also serve{" "}
                <a
                  href="/service-areas/"
                  className="underline underline-offset-2"
                >
                  West Vancouver, Vancouver, Burnaby
                </a>
                , and surrounding cities throughout Greater Vancouver. Same
                trusted team, same eco-friendly products, same 7-day
                availability wherever you are.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  {area}
                </span>
              ))}
            </div>
            <img
              src="/mint-service-area-map.png"
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
            <a
              href="/service-areas"
              className="mt-8 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
            >
              View All Service Areas
            </a>
          </div>
        </div>
      </section>

      {/* ── Health Benefits — Image + Cards ───────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Your Home, Your Health
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Deep Cleaning Matters: Health &amp; Environmental Benefits
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                A professional deep clean isn&apos;t just about appearances. It
                has measurable benefits for your health, your home, and the
                people who live in it.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/eco-friendly-cleaning-products-north-vancouver.jpg"
                alt="Eco-friendly cleaning products used in North Vancouver"
                className="h-[300px] w-full object-cover sm:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {healthBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {benefit.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
