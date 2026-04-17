import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Recurring Cleaning in North Vancouver | Weekly & Biweekly Plans",
  description:
    "Professional recurring cleaning in North Vancouver. Weekly, biweekly, and monthly plans from Mint Sanitary. Eco-friendly, bonded staff. Call (604) 671-6252 today.",
};

const includedAreas = [
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize toilets, tubs, and showers",
      "Clean mirrors and glass surfaces",
      "Wipe down vanity, countertops, and fixtures",
      "Mop bathroom floors",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Clean and sanitize countertops and sink",
      "Wipe down stovetop, appliance exteriors, and cabinet fronts",
      "Clean inside microwave",
      "Take out trash and replace liners",
    ],
  },
  {
    title: "Living Spaces",
    items: [
      "Dust all surfaces, shelves, and décor",
      "Wipe light switches, door handles, and baseboards",
      "Vacuum upholstery and cushions (as needed)",
      "Clean mirrors and glass surfaces",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces and furniture",
      "Make beds and tidy linens",
      "Vacuum floors, under beds, and closet floors",
      "Wipe down nightstands, dressers, and shelves",
    ],
  },
  {
    title: "Floors",
    items: [
      "Vacuum all carpeted areas",
      "Mop all hard floors (tile, laminate, hardwood)",
      "Spot-clean floor edges and corners",
    ],
  },
];

const notIncluded = [
  "Inside oven, refrigerator, or dishwasher (available with deep cleaning)",
  "Inside windows or exterior window washing",
  "Moving heavy furniture",
  "Deep carpet shampooing or stain treatment",
  "Garage, attic, or storage area cleaning",
  "Laundry or dishwashing (linen changes available as add-on at $15–$25)",
];

const processSteps = [
  {
    title: "Initial Consultation",
    body: "Contact us by phone at (604) 671-6252, through our contact page, or online. We'll discuss your home size, cleaning priorities, and schedule preferences.",
  },
  {
    title: "Choose Your Frequency",
    body: "Select weekly, biweekly, monthly, or a custom schedule. We'll recommend the best option based on your household size, traffic, and lifestyle.",
  },
  {
    title: "Meet Your Team",
    body: "We assign a consistent team to your home so they learn your preferences, layout, and priorities over time.",
  },
  {
    title: "Flexible Scheduling",
    body: "Need to skip a visit, reschedule, or adjust your plan? No problem. We offer full flexibility with no penalties.",
  },
  {
    title: "Quality Assurance",
    body: "We check in regularly to make sure you're happy with the service. If something isn't right, we'll address it immediately.",
  },
  {
    title: "Easy Communication",
    body: "Reach us by phone, email, or text. We keep things simple and responsive so you're never left guessing.",
  },
];

const whyChoose = [
  {
    title: "Eco-Friendly Products",
    desc: "Plant-based, non-toxic cleaning products safe for kids, pets, and the environment.",
  },
  {
    title: "7-Day Availability",
    desc: "We offer cleaning services seven days a week, including evenings and weekends.",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing with no hidden fees. You know exactly what you'll pay.",
  },
  {
    title: "First-Clean Discount",
    desc: "New clients save 10% with promo code MINT25.",
  },
  {
    title: "Experienced and Trained Staff",
    desc: "Our team is professionally trained, detail-oriented, and committed to consistent quality.",
  },
  {
    title: "HEPA-Filter Vacuums",
    desc: "We use HEPA-filter vacuums that capture 99.97% of airborne particles—important for allergy and asthma sufferers.",
  },
  {
    title: "Licensed, Bonded & Insured",
    desc: "Every team member is background-checked, bonded, and insured for your peace of mind.",
  },
  {
    title: "Consistency",
    desc: "Same team, same standards, every visit. Your cleaners learn your home and your preferences over time.",
  },
  {
    title: "Local North Vancouver Company",
    desc: "We're based in North Vancouver and deeply familiar with the neighbourhoods, building types, and property management expectations in the area.",
  },
];

const frequencyOptions = [
  {
    title: "Weekly Cleaning",
    body: "Best for busy households with children, pets, or high daily traffic. Weekly cleaning keeps dust, dirt, and allergens from building up, and ensures your home is consistently ready for guests, work-from-home days, or just everyday comfort. Most families find that weekly cleaning reduces their personal cleaning time to near zero.",
  },
  {
    title: "Biweekly Cleaning",
    body: "Our most popular plan. Biweekly cleaning strikes the right balance between cost and cleanliness for most North Vancouver homes. It's ideal for couples, small families, or anyone who wants a reliably clean home without the commitment of weekly service.",
  },
  {
    title: "Monthly Cleaning",
    body: "A good fit for smaller households, low-traffic homes, or as a supplement to your own cleaning routine. Monthly cleaning helps reset the space and address areas that tend to get neglected over time, like baseboards, light fixtures, and behind furniture.",
  },
];

const pricingFactors = [
  "Home size (number of bedrooms and bathrooms)",
  "Cleaning frequency (weekly clients get the best rates)",
  "Current condition of the home",
  "Any add-on services requested",
  "Accessibility and layout",
];

const benefitCards = [
  {
    title: "Consistent Cleanliness",
    body: "Your home stays reliably clean week after week or visit after visit. No more catch-up cleaning on weekends.",
  },
  {
    title: "Prevents Buildup",
    body: "Dust, grime, and allergens accumulate quickly. Regular cleaning prevents deep buildup that requires more time and effort to address later.",
  },
  {
    title: "Cost Efficiency",
    body: "Recurring plans are priced lower per visit than one-time cleanings. You get better value for consistent, reliable service.",
  },
  {
    title: "Healthier Home",
    body: "Regular removal of dust, pet dander, and bacteria improves indoor air quality and reduces allergy and asthma triggers.",
  },
  {
    title: "Mental Health and Reduced Stress",
    body: "A clean home reduces mental clutter and stress. Studies consistently link tidy environments with better focus, mood, and sleep quality.",
  },
  {
    title: "Time Freedom",
    body: "The average Canadian spends hours each week cleaning. Recurring cleaning gives you that time back for family, hobbies, or rest.",
  },
  {
    title: "Protects Your Investment",
    body: "Regular cleaning extends the life of your floors, fixtures, and appliances by preventing buildup and wear from accumulated grime.",
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

const faqItems = [
  {
    question: "What is recurring cleaning?",
    answer:
      "Recurring cleaning is a scheduled cleaning service that happens on a regular basis—weekly, biweekly, monthly, or on a custom schedule. It maintains your home's cleanliness consistently so you never have to do a big catch-up clean.",
  },
  {
    question: "Which frequency is best for my home?",
    answer:
      "It depends on your household size, traffic, and preferences. Weekly is ideal for busy homes with kids or pets. Biweekly is the most popular choice for most families. Monthly works for smaller or low-traffic homes. We'll help you choose during your consultation.",
  },
  {
    question: "Can I change my cleaning frequency later?",
    answer:
      "Absolutely. You can switch between weekly, biweekly, monthly, or custom schedules at any time with no penalties.",
  },
  {
    question: "Will I have the same cleaning team each visit?",
    answer:
      "Yes, whenever possible. We prioritize team consistency so your cleaners learn your home, preferences, and priorities over time.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use plant-based, non-toxic, eco-friendly products that are safe for children, pets, and anyone with sensitivities. No harsh chemicals like ammonia or bleach.",
  },
  {
    question: "Is recurring cleaning cheaper than one-time cleaning?",
    answer:
      "Yes. Recurring plans are priced lower per visit than one-time services because regular maintenance requires less intensive work each time.",
  },
  {
    question: "What if I need to skip or reschedule a visit?",
    answer:
      "No problem. We offer full flexibility—just let us know in advance and we'll adjust your schedule.",
  },
  {
    question: "Do you bring your own supplies and equipment?",
    answer:
      "Yes. We bring all cleaning products, equipment, and supplies. You don't need to provide anything.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve North Vancouver, West Vancouver, Vancouver, Burnaby, and the Greater Vancouver area.",
  },
  {
    question: "How do I get started?",
    answer:
      "Call (604) 671-6252 or visit our contact page for a free, no-obligation estimate. We'll help you choose the right plan and schedule your first cleaning.",
  },
];

export default function RecurringCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Recurring Cleaning in North Vancouver"
      heroImage="/recurring-cleaning-kitchen-north-vancouver.jpg"
      heroSubtitle="Scheduled Home Cleaning"
      heroIntro="Recurring cleaning keeps your North Vancouver home consistently clean without the weekend catch-up. Mint Sanitary provides weekly, bi-weekly, and monthly cleaning plans with the same trusted team, eco-friendly products, and 7-day availability. Use code MINT25 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready to Set Up Recurring Cleaning?"
      ctaBody="Call Mint Sanitary at (604) 671-6252 or book online. Free estimates, no long-term contracts, 7-day availability. Use code MINT25 for 10% off your first booking."
    >
      {/* ── Image + Text: What's Included Intro ──────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/recurring-cleaning-kitchen-north-vancouver.jpg"
                alt="Recurring cleaning service in North Vancouver kitchen"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Scheduled Home Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What&apos;s Included in Every Recurring Visit
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Every recurring visit covers your home room by room — bathrooms,
                kitchen, living areas, bedrooms, and floors. Your team follows a
                consistent checklist while adapting to your specific preferences
                over time.
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

      {/* ── Included Areas — Card Grid ────────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedAreas.map((area) => (
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
              What&apos;s Not Included in Recurring Cleaning
            </h3>
            <ul className="mt-3 space-y-1.5">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="font-body text-[15px] leading-[1.7] text-[#5c6075]"
                >
                  &bull; {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Need these services? They&apos;re available as part of our{" "}
              <a
                href="/cleaning-services-north-vancouver/deep-cleaning/"
                className="underline underline-offset-2"
              >
                deep cleaning
              </a>{" "}
              service or as add-ons to your recurring plan.
            </p>
          </div>
        </div>
      </section>

      {/* ── Recurring vs One-Time Comparison ─────────────── */}
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
            Recurring Cleaning vs. One-Time Service
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Recurring Cleaning
              </h3>
              <ul className="mt-4 space-y-2">
                {benefitCards.slice(0, 4).map((card) => (
                  <li
                    key={card.title}
                    className="font-body text-[15px] leading-[1.7] text-white/80"
                  >
                    &bull; {card.body}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                One-Time Cleaning
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Great for special occasions or a one-off refresh
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Higher per-visit cost than recurring plans
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; No ongoing schedule or team familiarity with your home
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Recommended before moving in, after a renovation, or for seasonal resets
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Many clients start with a{" "}
            <a
              href="/cleaning-services-north-vancouver/deep-cleaning/"
              className="underline underline-offset-2"
            >
              deep clean
            </a>{" "}
            to reset their home, then switch to a recurring plan for ongoing
            maintenance. Not sure which is right for you? Call{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            and we&apos;ll help you decide.
          </p>
        </div>
      </section>

      {/* ── Process Steps — Numbered Circles ──────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Recurring Cleaning Process: Step by Step
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

      {/* ── Why Choose — Image + Accordion ────────────────── */}
      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Recurring Cleaning"
        intro="We're not just another cleaning company. Mint Sanitary is built on reliability, transparency, and eco-conscious practices that make a real difference for North Vancouver families."
        image="/recurring-cleaning-hepa-vacuum-north-vancouver.jpg"
        imageAlt="HEPA vacuum recurring cleaning in North Vancouver"
        items={whyChoose.map((item) => ({ title: item.title, body: item.desc }))}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Frequency & Pricing ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Flexible Plans
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Recurring Cleaning Frequency &amp; Pricing Guidance
              </h2>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/recurring-cleaning-kitchen-result-north-vancouver.jpg"
                alt="Recurring cleaning results in North Vancouver kitchen"
                className="h-[280px] w-full object-cover sm:h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {frequencyOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {option.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {option.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Pricing Factors
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Recurring cleaning in North Vancouver is priced lower per visit
              than one-time services. Your specific price depends on:
            </p>
            <ul className="mt-3 space-y-1.5">
              {pricingFactors.map((factor) => (
                <li
                  key={factor}
                  className="font-body text-[15px] leading-[1.7] text-[#5c6075]"
                >
                  &bull; {factor}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
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
        </div>
      </section>

      {/* ── Service Areas — Chips + Map ───────────────────── */}
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
                Mint Sanitary provides recurring cleaning across all North
                Vancouver neighborhoods, including Lower Lonsdale, Upper Lonsdale,
                Lynn Valley, Deep Cove, Edgemont Village, Capilano, Norgate,
                Seymour Heights, Dollarton, and Blueridge.
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
                trusted team, same eco-friendly products, same 7-day availability
                wherever you are.
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

      {/* ── Benefits — Image + Cards ───────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Your Home, Your Time
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Recurring Cleaning Matters: Benefits &amp; Results
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Regular recurring cleaning isn&apos;t just about appearances. It
                has measurable benefits for your health, your home, and your
                quality of life.
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
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {card.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
