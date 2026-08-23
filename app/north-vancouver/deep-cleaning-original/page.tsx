import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/deep-cleaning-original
// so the CMS version at /north-vancouver/deep-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "North Vancouver Deep Cleaning Services | Mint Sanitary",
  description:
    "Deep cleaning in North Vancouver from a local, background-checked team. Eco-friendly products, transparent pricing, 4.9/5 rating. Get a free quote today.",
  robots: { index: false, follow: false },
};

const deepCleanAreas = [
  {
    title: "Kitchen",
    image: "/deep-cleaned-kitchen-north-vancouver.jpg",
    items: [
      "Inside the oven, refrigerator, and dishwasher",
      "Cabinet interiors and drawer pulls",
      "Backsplash grouting and tile scrubbing",
      "Inside microwave and range hood, including the filter",
      "Behind and under the refrigerator and stove",
      "Light fixtures and under-cabinet lighting",
      "Countertops, sink, and faucet sanitized",
      "Floor scrubbed corner to corner, including under appliances",
    ],
  },
  {
    title: "Bathrooms",
    image: "/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg",
    items: [
      "Tile grout scrubbed, not just wiped",
      "Behind toilets and under sinks",
      "Shower corners, tracks, doors, and fixtures descaled",
      "Window sills and ventilation fans dusted and cleared",
      "Cabinet interiors wiped and organized",
      "Mirrors and chrome polished",
      "Floor scrubbed including baseboards and corners",
    ],
  },
  {
    title: "Bedrooms and Living Areas",
    image: "/house-cleaning-bedroom-north-vancouver.jpg",
    items: [
      "Behind and under furniture",
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
      "Cabinet and drawer handles throughout the home",
      "Stair railings",
    ],
  },
  {
    title: "Hard-to-Reach Areas",
    image: "/recurring-cleaning-hepa-vacuum-north-vancouver.jpg",
    items: [
      "Top of cabinets, refrigerators, and wardrobes",
      "Inside vents and air returns",
      "Behind the washer and dryer",
      "Cobwebs in ceiling corners and stairwells",
      "Garage entry or mudroom, common in North Vancouver homes with North Shore access",
    ],
  },
];

const whyChoose = [
  {
    title: "Eco-Friendly Products",
    body: "We clean with plant-based, non-toxic products that are safe around kids, pets, and anyone with sensitivities.",
  },
  {
    title: "7-Day Availability",
    body: "We're available seven days a week, including evenings and weekends.",
  },
  {
    title: "Free Estimates, No Pressure",
    body: "Every estimate is free with no pressure to book.",
  },
  {
    title: "Transparent Pricing",
    body: "Pricing is upfront, with no hidden fees added after the fact.",
  },
  {
    title: "Professional & Insured",
    body: "Our team is vetted, trained, background-checked, bonded, and fully insured.",
  },
  {
    title: "Same Team Consistency",
    body: "We aim to send the same cleaners to your home each visit where possible.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    body: "If something's off, we'll come back and fix it at no extra charge.",
  },
];

const pricingTiers = [
  { label: "500–800 sq ft", range: "$390 – $480", details: "Compact condos and small apartments. Typically 3 to 4 hours." },
  { label: "900–1,500 sq ft", range: "$580 – $620", details: "Mid-size homes and townhomes, our most common booking. Typically 4 to 6 hours." },
  { label: "2,000–5,000+ sq ft", range: "$650 – $850+", details: "Larger homes with multiple bathrooms. Typically 6 to 8+ hours." },
];

const relatedServices = [
  {
    title: "House Cleaning",
    href: "/north-vancouver/house-cleaning",
    description: "Routine maintenance cleaning on a weekly, bi-weekly, or monthly schedule to keep your home consistently fresh between deep cleans.",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    href: "/north-vancouver/move-in-move-out-cleaning",
    description: "Deep sanitizing before unpacking, or detailed vacancy cleaning that helps protect deposits and prepares your property for handover inspections.",
  },
  {
    title: "Post-Construction Cleaning",
    href: "/north-vancouver/post-construction-cleaning/",
    description: "HEPA-focused post-build cleanup for renovation dust, debris, adhesive residue, and fine particles.",
  },
  {
    title: "Carpet Cleaning",
    href: "/north-vancouver/carpet-cleaning/",
    description: "Professional carpet cleaning to remove deep stains, allergens, and embedded dirt that regular vacuuming misses.",
  },
];

const processSteps = [
  { title: "Free Estimate & Assessment", body: "We look at your home's size, layout, and condition to give you an accurate quote." },
  { title: "Schedule at Your Convenience", body: "We're available seven days a week, including evenings and weekends." },
  { title: "Team Arrives with Professional Equipment", body: "Eco-friendly products and HEPA-filter vacuums, ready to go." },
  { title: "Systematic Room-by-Room Cleaning", body: "Depending on home size, this takes four to eight hours." },
  { title: "Quality Walkthrough", body: "We check every room before we leave your North Vancouver home." },
  { title: "Optional Follow-Up Plan", body: "We can set up a standard cleaning schedule to keep the results going." },
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
    body: "A deep clean removes allergens and dust mites that build up in carpets, upholstery, and vents.",
  },
  {
    title: "Mold & Mildew Prevention",
    body: "It gets ahead of mold and mildew before it spreads, which matters given how much moisture North Vancouver sees.",
  },
  {
    title: "Bacteria & Pathogen Reduction",
    body: "It cuts down on bacteria and pathogens on high-touch surfaces and appliance interiors.",
  },
  {
    title: "Improved Indoor Air Quality",
    body: "Removing built-up dust and dander improves indoor air quality throughout the home.",
  },
  {
    title: "Property Protection",
    body: "It also protects your property, since grime and buildup wear down surfaces over time.",
  },
  {
    title: "A Calmer Home",
    body: "Many North Vancouver clients tell us a freshly deep-cleaned home just feels calmer to live in.",
  },
];

const faqItems = [
  {
    question: "What's the difference between deep cleaning and regular cleaning in North Vancouver?",
    answer:
      "Standard cleaning in North Vancouver covers routine maintenance: dusting, vacuuming, wiping surfaces, and sanitizing the bathroom and kitchen. Deep cleaning goes further, reaching inside appliances, scrubbing grout, cleaning baseboards and ceiling fans, and moving furniture to clean behind it. Standard cleaning takes about two to three hours; a North Vancouver deep clean takes four to eight hours.",
  },
  {
    question: "How often should I get a deep clean in North Vancouver?",
    answer:
      "Most North Vancouver homes do well with a deep clean every two to four months. Households with kids, pets, or heavy foot traffic often benefit from a quarterly schedule. If you're already on a weekly or bi-weekly standard cleaning plan, a deep clean once or twice a year is usually enough.",
  },
  {
    question: "How long does a deep clean take in a North Vancouver home?",
    answer:
      "A typical two to four bedroom North Vancouver home takes four to eight hours. A small condo usually takes three to four hours. Larger homes or homes with significant buildup can take a full day. We give you a time estimate during your free consultation.",
  },
  {
    question: "Does deep cleaning damage carpets or furniture in North Vancouver homes?",
    answer:
      "No. We use professional-grade, eco-friendly products that are safe for carpets, upholstery, hardwood, and tile. Our North Vancouver team matches cleaning methods to each surface type to protect your home while we work.",
  },
  {
    question: "Are your products safe for kids and pets in North Vancouver households?",
    answer:
      "Yes. Every product we use in North Vancouver homes is non-toxic and biodegradable, with no harsh chemicals, harmful fumes, or lingering residue.",
  },
  {
    question: "Can you deep clean just one room in my North Vancouver home?",
    answer:
      "Yes. We offer full-house deep cleans and room-specific cleans for North Vancouver clients. Kitchen-only and bathroom-only requests are common. We scope and price the job to match exactly what you need.",
  },
  {
    question: "What if I'm not home during my North Vancouver deep clean?",
    answer:
      "Many North Vancouver clients step out while we work. We just need access to your home and any special instructions. We'll go over entry details together when you book.",
  },
  {
    question: "Do you offer deep cleaning after renovations in North Vancouver?",
    answer:
      "Yes. Post-renovation deep cleaning removes construction dust, debris, and residue from North Vancouver homes. We also offer dedicated post-construction cleaning for new builds, and move-in deep cleaning for homes changing hands.",
  },
  {
    question: "How much does deep cleaning cost in North Vancouver?",
    answer:
      "Pricing depends on square footage. North Vancouver deep cleans start at $390 for 500 to 600 sq ft and scale up from there based on home size. Visit our rates page for the full breakdown, or call for a free estimate. First-time North Vancouver clients save 10% with code MINT26.",
  },
  {
    question: "How do I book a deep cleaning service in North Vancouver?",
    answer:
      "Call 236-688-3248 or request a free quote through our rates page. Estimates for North Vancouver homes are free with no obligation, and we're available seven days a week, including evenings and weekends. First-time customers save 10% with code MINT26.",
  },
];

export default function DeepCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Deep Cleaning in North Vancouver"
      heroImage="/deep-cleaning-bathroom-north-vancouver.jpg"
      heroSubtitle="Professional Deep Cleaning Service"
      heroIntro="Mint Sanitary is a North Vancouver based cleaning company with a 4.9 out of 5 rating across 120+ Google reviews. We built our deep cleaning service around the homes we see every week: condos near Lower Lonsdale, family houses in Lynn Valley, and waterfront properties out near Deep Cove. Every technician we send is background-checked, bonded, and insured, and we clean with plant-based, non-toxic products and HEPA-filter vacuums. Use code MINT26 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready to Book a Deep Clean in North Vancouver?"
      ctaBody="Get your free quote, or call 236-688-3248 to book. 7-day availability. Eco-friendly products. Use code MINT26 for 10% off your first booking."
      ctaHref="/rates"
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Beyond the Surface
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                What&apos;s Included in a North Vancouver Deep Clean
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                A deep clean goes past what a weekly tidy-up covers. Our
                North Vancouver team works room by room, tackling the
                buildup that regular cleaning leaves behind. If you&apos;re
                outside North Vancouver, our{" "}
                <a href="/services/deep-cleaning" className="underline underline-offset-2">
                  deep cleaning services across Greater Vancouver
                </a>{" "}
                cover the same process for Vancouver, West Vancouver, and
                Burnaby homes.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── B. Included Areas — Card Grid with images ─────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {deepCleanAreas.map((area) => (
              <div key={area.title} className="overflow-hidden rounded-[14px] bg-white/[0.12] backdrop-blur-sm">
                <img
                  src={area.image}
                  alt={`${area.title} deep cleaning in North Vancouver`}
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

          <div className="mt-8 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Signs Your North Vancouver Home Needs a Deep Clean
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              A deep clean makes sense if it&apos;s been more than three or
              four months since your last one. It&apos;s also a smart move
              before moving in or out, before guests arrive for the holidays
              or a special event, or once you start noticing buildup on
              grout, baseboards, or appliances. Households with allergies,
              asthma, or other respiratory concerns benefit from a deep
              clean too, as do homes with shedding pets. If you&apos;ve just
              finished a renovation, or you&apos;re listing a North
              Vancouver property for sale or rent, a deep clean is the right
              starting point. It also works well as the reset before
              switching from no service at all to a regular cleaning plan.
            </p>
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
            Deep Cleaning vs Standard Cleaning in North Vancouver
          </h2>
          <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Standard cleaning is routine maintenance: dusting, vacuuming,
            wiping surfaces, and sanitizing the bathroom and kitchen. It
            takes about two to four hours and works well on a weekly,
            bi-weekly, or monthly schedule. Deep cleaning is an intensive
            reset. It covers everything standard cleaning covers, plus the
            inside of appliances, grout, baseboards, ceiling fans, and
            behind furniture. A deep clean takes four to eight hours
            depending on home size and condition, and we recommend it every
            two to four months for most North Vancouver households.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.label} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.label}</h3>
                <p className="mt-2 font-display-reg text-[24px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            If you&apos;re ready to set up ongoing service, our{" "}
            <a href="/north-vancouver/house-cleaning" className="underline underline-offset-2">
              house cleaning plans for North Vancouver
            </a>{" "}
            cover weekly, bi-weekly, and monthly visits after your initial
            deep clean.
          </p>
        </div>
      </section>

      {/* ── D. Process Steps — Numbered Circles ───────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              How Our North Vancouver Deep Cleaning Process Works
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
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

      {/* ── E. Why Choose — AccordionWithImage ────────────── */}
      <AccordionWithImage
        heading="Why North Vancouver Homeowners Choose Mint Sanitary"
        intro="We're available seven days a week, and every estimate is free with no pressure to book."
        image="/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg"
        imageAlt="Deep cleaned bathroom tile and grout in North Vancouver"
        items={whyChoose}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Climate Section (white bg) ────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why North Vancouver&apos;s Climate Makes Deep Cleaning Different
          </h2>
          <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            North Vancouver sits against the North Shore mountains, which
            means more rain and higher humidity than many other parts of
            the Lower Mainland. That moisture works its way into grout
            lines, bathroom corners, and the space under appliances, where
            mold and mildew can take hold faster than in drier climates.
            Homes in North Vancouver need more frequent attention to these
            damp-prone spots than a general cleaning checklist accounts
            for. Our deep cleaning process targets exactly those areas,
            which is one reason a North Vancouver deep clean looks
            different from a general Greater Vancouver visit.
          </p>
        </div>
      </section>

      {/* ── F. Pricing Section ────────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Transparent Pricing
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                North Vancouver Deep Cleaning Prices
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                Pricing is based on square footage. These are our published
                tiers. Homes over 6,000 sq ft need a custom quote.
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
              <div key={tier.label} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.label}</h3>
                <p className="mt-2 font-display-reg text-[24px] text-[#6191e9]">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Visit{" "}
            <a href="/rates" className="underline underline-offset-2">
              our rates page
            </a>{" "}
            for full pricing and to request a free estimate for your North
            Vancouver home. First-time customers save 10% with code MINT26.
          </p>
        </div>
      </section>

      {/* ── G. Related Services ───────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Related Cleaning Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((s) => (
              <div key={s.href} className="flex flex-col rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">{s.title}</h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-[1.7] text-white/80">{s.description}</p>
                <a href={s.href} className="mt-5 inline-block w-fit font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#6191e9] underline underline-offset-2">
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
              Neighbourhoods We Serve Across North Vancouver
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We clean homes throughout North Vancouver, including Lower
                Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont
                Village, Capilano, Norgate, Seymour Heights, Dollarton, and
                Blueridge.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We also serve{" "}
                <a href="/service-areas/" className="underline underline-offset-2">
                  West Vancouver, Vancouver, Burnaby
                </a>
                , and surrounding cities throughout Greater Vancouver. Same
                trusted team, same eco-friendly products, same 7-day
                availability wherever you are.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Moving soon? Our{" "}
                <a href="/north-vancouver/move-in-move-out-cleaning" className="underline underline-offset-2">
                  move-in and move-out cleaning in North Vancouver
                </a>{" "}
                handles the deep clean your old or new place needs.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25">
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Your Home, Your Health
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Health Benefits of Deep Cleaning for North Vancouver Households
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                A professional deep clean isn&apos;t just about appearances.
                It has measurable benefits for your health, your home, and
                the people who live in it.
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
              <div key={benefit.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{benefit.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{benefit.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Need carpets refreshed too? Check our{" "}
            <a href="/north-vancouver/carpet-cleaning" className="underline underline-offset-2">
              carpet cleaning in North Vancouver
            </a>{" "}
            page.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
