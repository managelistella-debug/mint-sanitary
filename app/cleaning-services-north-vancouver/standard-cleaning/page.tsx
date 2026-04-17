import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Standard Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional standard cleaning in North Vancouver. Eco-friendly services, 7 days/week, free estimates. MINT25 for 10% off first clean.",
};

const includedAreas = [
  {
    title: "Living Areas",
    items: [
      "Dust all surfaces, shelves, and furniture",
      "Vacuum carpets and rugs, sweep and mop hard floors",
      "Wipe light switches, door handles, and baseboards",
      "Remove cobwebs from corners and ceilings",
      "Clean mirrors and glass surfaces",
      "Empty trash and replace liners",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Wipe and sanitize countertops and backsplash",
      "Clean exterior of all appliances (fridge, oven, microwave, dishwasher)",
      "Scrub and sanitize sink and faucet",
      "Wipe cabinet fronts and drawer handles",
      "Sweep and mop floor",
      "Empty trash and replace liner",
      "Clean stovetop and range hood exterior",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize toilet, including base and behind",
      "Clean and sanitize sink, faucet, and countertop",
      "Scrub tub and shower walls, door, and fixtures",
      "Clean mirrors",
      "Wipe cabinet fronts and towel bars",
      "Sweep and mop floor",
      "Empty trash and replace liner",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces, nightstands, and dressers",
      "Vacuum carpets or sweep and mop hard floors",
      "Make beds and tuck linens (change linens on request)",
      "Wipe light switches and door handles",
      "Remove cobwebs",
    ],
  },
  {
    title: "General",
    items: [
      "Dust ceiling fan blades (within reach)",
      "Wipe window sills and ledges",
      "Vacuum stairs and hallways",
      "Spot-clean marks on walls",
      "Wipe railings and banisters",
    ],
  },
];

const notIncluded = [
  "Inside oven, refrigerator, or dishwasher (available with deep cleaning)",
  "Inside windows or exterior window washing",
  "Moving heavy furniture",
  "Deep carpet shampooing or stain treatment",
  "Garage, attic, or storage area cleaning",
  "Laundry or dishwashing (linen changes available as add-on at $15\u2013$25)",
];

const processSteps = [
  {
    title: "Request Your Free Estimate",
    body: "Call (604) 671-6252 or book online. Tell us about your space, and we\u2019ll provide a transparent quote with no obligation.",
  },
  {
    title: "Confirm Your Schedule",
    body: "Pick a day and time that works. We\u2019re available 7 days a week, including evenings and weekends.",
  },
  {
    title: "Our Team Arrives Prepared",
    body: "Your cleaners arrive on time with eco-friendly products and professional equipment. We do a quick walkthrough to confirm priorities and any special instructions.",
  },
  {
    title: "Systematic Room-by-Room Cleaning",
    body: "We work through each room methodically \u2014 bathrooms, kitchen, bedrooms, and living areas \u2014 following our standard checklist while addressing your specific needs.",
  },
  {
    title: "Quality Walkthrough",
    body: "Before we leave, we walk through the space with you. If anything doesn\u2019t meet your expectations, we fix it on the spot.",
  },
  {
    title: "Set Up Recurring Service",
    body: "Happy with the results? Set up a weekly, bi-weekly, or monthly plan. Adjust, pause, or cancel anytime. No contracts or penalties.",
  },
];

const whyChoose = [
  {
    title: "Eco-Friendly Products",
    body: "Every job uses non-toxic, biodegradable cleaners that are safe for children, pets, and indoor air quality. No harsh chemical residue left behind.",
  },
  {
    title: "7-Day Availability",
    body: "Early mornings, evenings, weekends, and holidays. We work when it\u2019s convenient for you, not just during business hours.",
  },
  {
    title: "Same Team Every Time",
    body: "Consistency matters. We assign the same cleaners to your home so they learn your space, your preferences, and your expectations.",
  },
  {
    title: "Transparent Pricing",
    body: "Free estimates with clear scope. No hidden fees, no surprise charges. You know exactly what you\u2019re paying for before we start.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    body: "If any area doesn\u2019t meet your expectations, let us know within 24 hours and we\u2019ll return to make it right at no extra charge.",
  },
  {
    title: "MINT25: 10% Off First Clean",
    body: "New customers save 10% on their first standard cleaning with promo code MINT25. No strings attached.",
  },
];

const frequencyOptions = [
  {
    title: "Weekly Cleaning",
    body: "Best for busy households, families with kids or pets, and anyone who wants a consistently clean home without effort. Weekly service keeps dust, allergens, and clutter from building up. Clients on weekly plans also receive preferred scheduling and the most competitive rates.",
  },
  {
    title: "Bi-Weekly Cleaning",
    body: "Our most popular option. Bi-weekly cleaning strikes a balance between maintaining cleanliness and budget. Ideal for couples, smaller households, and homes that stay relatively tidy between visits.",
  },
  {
    title: "Monthly Cleaning",
    body: "A good choice for individuals or couples who handle day-to-day tidying but want a thorough professional clean once a month. Monthly cleans are more intensive than weekly visits since there\u2019s more buildup to address each time.",
  },
];

const pricingFactors = [
  "Home size (number of bedrooms and bathrooms)",
  "Cleaning frequency (weekly clients get the best rates)",
  "Current condition of the home",
  "Any add-on services requested",
  "Accessibility and layout",
];

const healthBenefits = [
  {
    title: "Allergen Reduction",
    body: "Regular dusting, vacuuming, and surface wiping removes dust mites, pollen, pet dander, and other allergens that accumulate in your home. This is especially important for families with asthma, allergies, or respiratory sensitivities.",
  },
  {
    title: "Improved Indoor Air Quality",
    body: "North Vancouver\u2019s coastal moisture creates conditions where mold spores and mildew thrive. Consistent cleaning keeps these at bay and helps maintain healthier indoor air for your family.",
  },
  {
    title: "Reduced Bacteria and Germs",
    body: "High-touch surfaces like door handles, light switches, countertops, and faucets harbor bacteria. Regular sanitizing reduces the spread of illness, especially during cold and flu season.",
  },
  {
    title: "Mental Health and Stress Reduction",
    body: "A clean, organized environment reduces stress and improves focus. Coming home to a professionally cleaned space makes a measurable difference in daily wellbeing.",
  },
  {
    title: "Eco-Friendly Impact",
    body: "Our non-toxic, biodegradable products clean effectively without introducing harmful chemicals into your home or the environment. Better for your family, better for North Vancouver\u2019s waterways and ecosystems.",
  },
  {
    title: "Property Preservation",
    body: "Regular cleaning extends the life of carpets, hardwood floors, countertops, and fixtures by preventing buildup that causes wear and damage over time.",
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
    question: "What\u2019s the difference between standard and deep cleaning?",
    answer:
      "Standard cleaning handles routine maintenance \u2014 dusting, vacuuming, mopping, and surface sanitizing. Deep cleaning goes further with inside appliances, baseboards, crown molding, grout scrubbing, and hard-to-reach areas. Most clients do standard cleaning regularly and schedule a deep clean 2\u20134 times per year.",
  },
  {
    question: "How long does a standard cleaning take?",
    answer:
      "Most standard cleanings take 2 to 4 hours depending on home size and condition. A one-bedroom condo might finish in 90 minutes. A three-bedroom house usually takes 3\u20134 hours.",
  },
  {
    question: "Do I need to tidy up before cleaners arrive?",
    answer:
      "You don\u2019t have to. However, picking up toys, clothes, and clutter from surfaces helps us focus on actual cleaning rather than organizing, which means better results in less time.",
  },
  {
    question: "Are your products safe for pets and kids?",
    answer:
      "Yes. Every product we use is non-toxic, biodegradable, and pet-safe. No harsh chemicals, no harmful fumes, and no residue that could affect your family or animals.",
  },
  {
    question: "Can I schedule weekly cleaning without a long-term commitment?",
    answer:
      "Absolutely. No contracts required. You can cancel, pause, or adjust your schedule anytime. We believe in earning your business through quality, not locking you into agreements.",
  },
  {
    question: "How much does standard cleaning cost in North Vancouver?",
    answer:
      "Standard cleaning is priced by property size (square footage), starting at $220 for 500\u2013600 sq ft and scaling based on size. Weekly clients get preferred rates. Visit our rates page for full pricing details. First-time clients save 10% with code MINT25. Call (604) 671-6252 for a free estimate.",
  },
  {
    question: "Can I request the same cleaner every time?",
    answer:
      "Yes. We assign consistent team members to your home whenever possible. Your cleaners get to know your space and your preferences, which means better results over time.",
  },
  {
    question: "What if I\u2019m not satisfied with the cleaning?",
    answer:
      "We stand behind our work with a 24-hour satisfaction guarantee. If we miss something or the results don\u2019t meet your expectations, contact us within 24 hours and we\u2019ll return to fix it free of charge.",
  },
  {
    question: "Do you offer move-in or move-out cleaning?",
    answer:
      "Yes. For specialized move-in or move-out cleaning, we offer dedicated services designed for property transitions. Visit our move-in cleaning and move-out cleaning pages or call (604) 671-6252 to discuss your needs.",
  },
  {
    question: "What areas in North Vancouver do you serve?",
    answer:
      "We serve all North Vancouver neighborhoods including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Capilano, and Seymour Heights. We also serve West Vancouver, Vancouver, Burnaby, and Greater Vancouver.",
  },
];

export default function StandardCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Standard Cleaning in North Vancouver"
      heroImage="/standard-cleaning-kitchen-north-vancouver.jpg"
      heroSubtitle="Professional House Cleaning"
      heroIntro="Standard cleaning keeps your home consistently fresh between deep cleans. Mint Sanitary provides professional standard cleaning across North Vancouver with eco-friendly products, trained teams, and flexible scheduling 7 days a week. Choose weekly, bi-weekly, or monthly service and use code MINT25 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready to Get Your Home Clean?"
      ctaBody="Book a free estimate today. Call Mint Sanitary at (604) 671-6252. We&apos;re open seven days a week, including evenings and weekends. New clients, use code MINT25 for 10% off your first booking."
    >
      {/* ── Image + Text: What's Included Intro ──────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/deep-cleaned-kitchen-north-vancouver.jpg"
                alt="Professionally cleaned kitchen in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Room-by-Room Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What&apos;s Included in a Standard Clean
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                A standard clean covers every room in your home with thorough
                attention to surfaces, floors, and high-touch areas. Here&apos;s
                exactly what our team handles in each area:
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
              What&apos;s Not Included in Standard Cleaning
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
              service or as add-ons to your standard clean.
            </p>
          </div>
        </div>
      </section>

      {/* ── Standard vs Deep Comparison ───────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] bg-fixed bg-cover bg-center px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Standard Cleaning vs. Deep Cleaning
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
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
                  &bull; Recommended 2&ndash;4 times per year or as needed
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Pricing: $390&ndash;$850+ based on property size (sq ft)
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Most clients combine both: standard cleaning on a recurring schedule
            to maintain cleanliness, with a{" "}
            <a
              href="/cleaning-services-north-vancouver/deep-cleaning/"
              className="underline underline-offset-2"
            >
              deep clean
            </a>{" "}
            2&ndash;4 times per year for a thorough reset. Not sure which you
            need? Call{" "}
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
              The Standard Cleaning Process: Step by Step
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
        heading="Why Choose Mint Sanitary for Standard Cleaning"
        intro="We're not just another cleaning company. Mint Sanitary is built on reliability, transparency, and eco-conscious practices that make a real difference for North Vancouver families."
        image="/mint-sanitary-service-van-north-vancouver.jpg"
        imageAlt="Mint Sanitary service van in North Vancouver"
        items={whyChoose}
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
                Standard Cleaning Frequency &amp; Pricing Guidance
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
              Standard cleaning in North Vancouver is priced by property size
              (square footage), starting at $220 for a 500–600 sq ft home. Your specific price depends on:
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
                Mint Sanitary provides standard cleaning across all North
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
                Why Standard Cleaning Matters: Health &amp; Environmental Benefits
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Regular standard cleaning isn&apos;t just about appearances. It has
                measurable benefits for your health, your home, and the environment.
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
