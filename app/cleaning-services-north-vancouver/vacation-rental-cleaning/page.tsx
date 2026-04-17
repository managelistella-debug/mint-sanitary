import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Vacation Rental Cleaning North Vancouver | Airbnb & VRBO Turnover",
  description:
    "Professional vacation rental cleaning in North Vancouver. Fast turnaround Airbnb & VRBO cleaning. Same-day turnover available. Get a free estimate today.",
};

const whatsIncluded = [
  {
    title: "Linen & Towel Management",
    items: [
      "Full strip and reset of all beds with fresh linens",
      "Towels replaced, neatly folded, and staged",
      "Laundry coordination available if needed",
    ],
  },
  {
    title: "Bathroom Deep Clean",
    items: [
      "Toilets, showers, tubs, sinks, and mirrors sanitized",
      "Grout scrubbed, drains checked, and all surfaces streak-free",
      "Toiletries restocked and arranged",
    ],
  },
  {
    title: "Kitchen Reset",
    items: [
      "All dishes washed and put away",
      "Counters, stovetop, microwave interior, and sink sanitized",
      "Fridge wiped down, trash removed, and fresh liners placed",
    ],
  },
  {
    title: "Living Areas & Bedrooms",
    items: [
      "Dusting, vacuuming, mopping, and surface wipe-down",
      "Cushions fluffed, remotes and electronics wiped",
      "Everything returned to its staged position",
    ],
  },
  {
    title: "Supply Restocking",
    items: [
      "Restock host-provided toiletries and paper goods",
      "Coffee, tea, and basic guest essentials restocked",
      "Inventory check included on every visit",
    ],
  },
  {
    title: "Photo Documentation",
    items: [
      "Time-stamped photos of each room sent after every turnover",
      "Confirm property is guest-ready without visiting in person",
      "Damage documentation available for Airbnb claims",
    ],
  },
];

const airbnbStandards = [
  {
    title: "Mold-Free Bathrooms",
    body: "Guests notice mold in showers and around sinks immediately. We scrub grout lines and treat problem areas to prevent buildup between stays.",
  },
  {
    title: "Pest-Free Guarantee",
    body: "Crumbs, open food, and unclean surfaces attract pests. Our kitchen and dining area protocol eliminates food residue and seals attract points.",
  },
  {
    title: "Dust-Free Surfaces",
    body: "Ceiling fans, baseboards, window sills, and vent covers are common dust traps. We hit every surface guests are likely to notice or touch.",
  },
  {
    title: "Commonly Missed Spots",
    body: "Under beds, behind toilets, inside microwaves, light switches, remote controls, and door handles. Our checklist ensures these are never skipped.",
  },
];

const processSteps = [
  {
    title: "Initial Assessment",
    body: "We walk through your property to understand layout, staging preferences, supply locations, and any special instructions from the host.",
  },
  {
    title: "Flexible Scheduling",
    body: "We build a turnover schedule around your bookings. Same-day turnarounds, back-to-back cleans, and last-minute requests are all supported.",
  },
  {
    title: "Professional Execution",
    body: "Our trained team follows a detailed checklist customized for your property, ensuring nothing is missed and every room is guest-ready.",
  },
  {
    title: "Photo Documentation",
    body: "Time-stamped photos of every room are sent to you after each clean so you can verify quality remotely.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "If anything doesn\u2019t meet your standards, we\u2019ll return to address it at no extra charge. Your rating is our reputation.",
  },
];

const whyChooseItems = [
  {
    title: "Same-Day Turnover Capability",
    desc: "We accommodate tight checkout-to-check-in windows. Back-to-back bookings, last-minute requests, and same-day turnovers are all part of our standard service.",
  },
  {
    title: "Photo Documentation After Every Clean",
    desc: "Every turnover ends with time-stamped room-by-room photos sent directly to you. Confirm your property is guest-ready without leaving your desk.",
  },
  {
    title: "Eco-Friendly Products",
    desc: "All of our cleaning products are non-toxic and eco-friendly \u2014 safe for guests, pets, and the environment. No harsh fumes when guests arrive.",
  },
  {
    title: "Supply Restocking Included",
    desc: "We restock host-provided guest supplies on every visit and notify you when inventory is running low. No surprises for your next guests.",
  },
  {
    title: "Consistent, Trained Teams",
    desc: "The same team learns your property\u2019s layout, staging preferences, and host standards. Consistency across every turnover means fewer mistakes and faster execution.",
  },
  {
    title: "MINT25: 10% Off First Turnover",
    desc: "New hosts save 10% on their first vacation rental turnover with promo code MINT25. No strings attached.",
  },
];

const pricingFactors = [
  "Property size (number of bedrooms and bathrooms)",
  "Condition after guest checkout",
  "Linen and laundry services",
  "Restocking requirements",
  "Frequency and recurring schedule discounts",
];

const turnoverOptions = [
  {
    title: "Standard Turnover",
    body: "Full property reset between guests. Includes linen and towel replacement, bathroom and kitchen deep clean, floor care, trash removal, and photo documentation. Ideal for most short-term rental properties.",
  },
  {
    title: "Deep Turnover",
    body: "Recommended after longer stays or high-traffic periods. Includes everything in a standard turnover plus inside appliances, grout scrubbing, baseboards, and a more thorough room-by-room reset.",
  },
  {
    title: "Recurring Turnover Plan",
    body: "Best for hosts with predictable booking patterns. We coordinate your cleaning schedule around your Airbnb or VRBO calendar so every turnover is handled automatically. Recurring clients receive preferred scheduling and competitive rates.",
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
    question: "Can you handle same-day turnover cleaning?",
    answer:
      "Yes. When scheduling allows, we support tight checkout-to-check-in windows and can often accommodate same-day turnover requests with as little as a few hours\u2019 notice.",
  },
  {
    question: "What is included in vacation rental turnover cleaning?",
    answer:
      "Turnover service includes full linen and towel reset, bathroom and kitchen deep clean, living area dusting and vacuuming, floor care, trash removal, supply restocking, and photo documentation.",
  },
  {
    question: "Do I need to be at the property during the clean?",
    answer:
      "No. Most hosts provide secure entry instructions such as lockboxes or smart locks. We complete the service, lock up, and send photo confirmation when finished.",
  },
  {
    question: "Can you restock guest supplies?",
    answer:
      "Yes. We restock host-provided supplies including toiletries, paper goods, coffee, tea, and basic guest essentials. We also track inventory and notify you when supplies are running low.",
  },
  {
    question: "Do you offer recurring turnover schedules?",
    answer:
      "Yes. We coordinate regular turnover support for properties with predictable booking patterns. We can also sync with your Airbnb or VRBO calendar for automated scheduling.",
  },
  {
    question: "How long does a typical turnover take?",
    answer:
      "A one-bedroom unit typically takes 60\u201390 minutes. Two-bedroom properties take 90\u2013120 minutes. Larger properties or those needing deep cleaning may take longer.",
  },
  {
    question: "Do you handle laundry as part of the turnover?",
    answer:
      "We can coordinate on-site laundry or work with your linen service. Laundry turnaround time is factored into our scheduling for back-to-back bookings.",
  },
  {
    question: "What if a guest leaves the property in bad condition?",
    answer:
      "We handle heavy-mess turnovers including excessive trash, stains, and damage documentation. We photograph the condition for your records and Airbnb claims if needed.",
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer:
      "Yes. We use non-toxic, eco-friendly products that are safe for guests, pets, and the environment. Many guests specifically look for eco-conscious hosts when booking.",
  },
  {
    question: "How much does vacation rental turnover cleaning cost?",
    answer:
      "Turnover cleaning ranges from $120\u2013$400 depending on property size, condition, and services included. Call (604) 671-6252 for a free estimate. Use code MINT25 for first-time savings.",
  },
];

export default function VacationRentalCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Vacation Rental Cleaning in North Vancouver"
      heroImage="/vacation-rental-cleaning-north-vancouver.jpg"
      heroSubtitle="Airbnb & Short-Term Rental Turnover"
      heroIntro="Fast, reliable turnover cleaning for Airbnb, VRBO, and short-term rentals across North Vancouver. Mint Sanitary handles full property resets between guests — restocking, sanitizing, linen management, and guest-ready presentation on your schedule. Use code MINT25 for 10% off your first turnover."
      faqItems={faqItems}
      ctaHeading="Ready to Streamline Your Vacation Rental Turnovers?"
      ctaBody="Call Mint Sanitary at (604) 671-6252 or book online. 7-day availability, same-day turnovers available. Use code MINT25 for 10% off your first booking."
    >
      {/* ── Image + Text: What's Included Intro ──────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/vacation-rental-cleaning-north-vancouver.jpg"
                alt="Vacation rental property cleaned and staged for guests in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Airbnb & VRBO Turnover
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Vacation Rental Cleaning?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Vacation rental cleaning is a specialized turnover service
                designed for short-term rental properties listed on platforms
                like Airbnb and VRBO. Unlike standard residential cleaning, it
                focuses on preparing a property for the next guest within a
                tight time window &mdash; often just a few hours between
                checkout and check-in.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                The goal is simple: make every guest feel like they&apos;re the
                first person to stay in your property. That consistency is what
                drives five-star reviews, Superhost status, and repeat bookings.
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

      {/* ── What's Included — Card Grid ──────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whatsIncluded.map((area) => (
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
              Airbnb &amp; VRBO Standards You Must Meet
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Both Airbnb and VRBO have cleanliness guidelines that hosts are
              expected to follow. Our turnover checklist is built to meet or
              exceed platform requirements, covering every area guests are
              likely to notice:
            </p>
            <ul className="mt-3 space-y-1.5">
              {airbnbStandards.map((item) => (
                <li
                  key={item.title}
                  className="font-body text-[15px] leading-[1.7] text-[#5c6075]"
                >
                  &bull; <strong>{item.title}</strong> &mdash; {item.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why Cleanliness Impacts Ratings — Blue Section ── */}
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
            Why Cleanliness Directly Impacts Your Airbnb &amp; VRBO Ratings
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                The Review Impact
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Over 80% of negative vacation rental reviews mention
                  cleanliness
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Airbnb&apos;s algorithm weighs cleanliness scores
                  heavily in search rankings
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Properties with 4.8+ cleanliness stars get more
                  bookings and command higher nightly rates
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; A single low score can drop your average below
                  Superhost threshold
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                The Revenue Impact
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Back-to-back bookings require fast, reliable turnovers
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; A 1-bedroom unit turns in 60&ndash;90 minutes; 2-bed
                  in 90&ndash;120 minutes
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Properties that accept back-to-back bookings earn
                  significantly more per month
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Fast, reliable turnovers pay for themselves in
                  additional revenue
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Professional turnover cleaning eliminates the inconsistency of doing
            it yourself or relying on untrained help. Every clean follows the
            same checklist, every room is documented with photos, and every
            guest walks into a property that meets platform standards. Not sure
            where to start? Call{" "}
            <a href="tel:+16046716252" className="underline underline-offset-2">
              (604) 671-6252
            </a>{" "}
            and we&apos;ll set up a turnover plan around your booking calendar.
          </p>
        </div>
      </section>

      {/* ── Process Steps — Numbered Circles ──────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              How Mint Sanitary&apos;s Turnover Process Works
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
        heading="Why Airbnb Hosts Choose Mint Sanitary"
        intro="We\u2019re not just another cleaning company. Mint Sanitary is built around the specific demands of short-term rental hosting \u2014 speed, consistency, documentation, and eco-friendly products that guests love."
        image="/mint-sanitary-service-van-north-vancouver.jpg"
        imageAlt="Mint Sanitary service van in North Vancouver"
        items={whyChooseItems.map((item) => ({
          title: item.title,
          body: item.desc,
        }))}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Turnover Options & Pricing ───────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Flexible Plans
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Turnover Options &amp; Pricing Guidance
              </h2>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/vacation-rental-cleaning-north-vancouver.jpg"
                alt="Guest-ready vacation rental property in North Vancouver"
                className="h-[280px] w-full object-cover sm:h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {turnoverOptions.map((option) => (
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
              Vacation rental turnover cleaning in North Vancouver typically
              ranges from $120 to $400 per turnover. Your specific price depends
              on:
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
              for a free estimate tailored to your property. Use code MINT25 for
              10% off your first turnover. See full pricing details on our{" "}
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
                Mint Sanitary provides vacation rental turnover cleaning across
                all North Vancouver neighborhoods, including Lower Lonsdale,
                Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village,
                Capilano, Norgate, Seymour Heights, Dollarton, and Blueridge.
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
                availability wherever your rental property is located.
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
                Your Listing, Your Revenue
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Professional Turnover Cleaning Pays for Itself
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professional vacation rental cleaning isn&apos;t just about
                appearances. It directly impacts your ratings, your Superhost
                status, your booking volume, and your nightly rate.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/eco-friendly-cleaning-products-north-vancouver.jpg"
                alt="Eco-friendly cleaning products used in North Vancouver vacation rental"
                className="h-[300px] w-full object-cover sm:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Higher Ratings
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Consistent professional cleaning drives consistent five-star
                cleanliness scores, protecting your overall rating and Superhost
                status.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                More Back-to-Back Bookings
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Fast, reliable turnovers let you accept back-to-back bookings
                without buffer nights, significantly increasing your monthly
                revenue.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Remote Management
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Photo documentation after every turnover means you can manage
                your property remotely with full confidence it&apos;s
                guest-ready.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Eco-Friendly Appeal
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Our non-toxic, biodegradable products are safe for guests and
                the environment. Listing eco-friendly cleaning can increase
                booking interest from environmentally conscious travelers.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Supply Management
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                We restock guest supplies on every visit and alert you when
                inventory is running low, so your guests always arrive to a
                fully stocked property.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                MINT25: 10% Off First Turnover
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                New hosts save 10% on their first vacation rental turnover with
                promo code MINT25. No strings attached, no contracts required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
