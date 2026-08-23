import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/vacation-rental-cleaning-original
// so the CMS version at /north-vancouver/vacation-rental-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Vacation Rental Cleaning in North Vancouver | Mint Sanitary",
  description:
    "North Vancouver vacation rental cleaning for Airbnb and VRBO hosts. Fast turnovers, photo proof, eco-friendly supplies. Free quote at /rates.",
  robots: { index: false, follow: false },
};

const whatsIncluded = [
  {
    title: "Linen and Towel Reset",
    image: "/see-difference-towels-detail.webp",
    items: [
      "Every bed stripped and remade with fresh linens",
      "Towels replaced, folded, and staged the way your listing photos show them",
      "On-site laundry or linen service coordination available",
    ],
  },
  {
    title: "Bathroom Deep Clean",
    image: "/see-difference-bathroom-marble-double.webp",
    items: [
      "Toilets, showers, tubs, sinks, and mirrors sanitized and left streak-free",
      "Grout scrubbed and drains checked",
      "Toiletries restocked and arranged so the bathroom looks untouched by the last guest",
    ],
  },
  {
    title: "Kitchen Reset",
    image: "/recurring-cleaning-kitchen-result-north-vancouver.jpg",
    items: [
      "Dishes washed and put away",
      "Counters, stovetop, inside the microwave, and the sink sanitized",
      "Fridge wiped down, trash pulled, fresh liners put in",
    ],
  },
  {
    title: "Living Areas and Bedrooms",
    image: "/spring-cleaned-living-room-north-vancouver.jpg",
    items: [
      "Dusting, vacuuming, and mopping of every room",
      "Cushions fluffed, remotes and electronics wiped down",
      "Furniture returned to its staged position, matching your listing photos",
    ],
  },
  {
    title: "Supply Restocking",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
    items: [
      "Host-provided toiletries and paper goods restocked",
      "Coffee, tea, and other guest essentials topped up",
      "Inventory checked on every visit, low items flagged",
    ],
  },
  {
    title: "Photo Documentation",
    image: "/airbnb-cleaning-vancouver.png",
    items: [
      "Time-stamped photos of every room sent after each clean",
      "Confirm the unit is guest-ready without leaving your house",
      "Photos double as records for Airbnb damage claims",
    ],
  },
];

const meetingStandards = [
  { title: "Mold-free bathrooms", body: "Grout gets scrubbed and problem areas treated before mold has a chance to build up." },
  { title: "Pest-free kitchens", body: "Our kitchen and dining protocol removes food residue and closes off the spots that attract pests." },
  { title: "Dust-free surfaces", body: "Ceiling fans, baseboards, window sills, and vent covers all get attention, not just the surfaces at eye level." },
  { title: "The spots most cleaners skip", body: "Under beds, behind toilets, inside microwaves, light switches, remote controls, and door handles all get checked on every North Vancouver turnover." },
];

const turnoverOptions = [
  {
    title: "Standard Turnover",
    body: "A full reset between guests: linen and towel replacement, bathroom and kitchen deep clean, floor care, trash removal, and photo documentation.",
  },
  {
    title: "Deep Turnover",
    body: "Built for after longer stays or high-traffic bookings. Adds inside-appliance cleaning, grout scrubbing, and baseboard detailing on top of the standard turnover.",
  },
  {
    title: "Recurring Turnover Plan",
    body: "For hosts with predictable booking patterns. We sync our schedule to your Airbnb or VRBO calendar and offer preferred scheduling and competitive rates for ongoing North Vancouver turnovers.",
  },
];

const whyChooseItems = [
  { title: "Same-day turnovers", body: "When your schedule allows it, we support tight checkout-to-check-in windows." },
  { title: "Photo documentation", body: "Sent after every clean, so you can confirm guest-readiness without driving over." },
  { title: "Eco-friendly products", body: "Safe for guests, pets, and the environment." },
  { title: "Supply restocking with low-inventory alerts", body: "So you're not caught without toilet paper." },
  { title: "Consistent, trained teams", body: "Who learn your property's layout and your standards." },
  { title: "Transparent pricing", body: "Free estimates and no contracts." },
  { title: "24-hour satisfaction guarantee", body: "On every clean." },
];

const processSteps = [
  { title: "Initial assessment", body: "We walk your property to learn its layout, your staging preferences, where supplies live, and any special instructions." },
  { title: "Flexible scheduling", body: "We build our schedule around your bookings, including same-day, back-to-back, and last-minute turnovers." },
  { title: "Professional execution", body: "Our team works from a checklist customized to your property, not a generic template." },
  { title: "Photo documentation", body: "You get time-stamped photos after every clean, sent before your next guest arrives." },
  { title: "Satisfaction guarantee", body: "If something's missed, we come back and fix it at no charge within 24 hours." },
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
    question: "Can you handle same-day turnover cleaning for a North Vancouver rental?",
    answer: "Yes, when our schedule allows it. We support tight checkout-to-check-in windows and often accommodate same-day requests for North Vancouver hosts with just a few hours notice.",
  },
  {
    question: "What is included in vacation rental turnover cleaning in North Vancouver?",
    answer: "A North Vancouver turnover includes a full linen and towel reset, bathroom and kitchen deep clean, dusting and vacuuming of living areas, floor care, trash removal, supply restocking, and photo documentation sent after the clean.",
  },
  {
    question: "Do I need to be at the property during a North Vancouver turnover clean?",
    answer: "No. Most North Vancouver hosts give us secure entry through a lockbox or smart lock. We complete the service, lock up, and send photo confirmation once the unit is guest-ready.",
  },
  {
    question: "Can you restock guest supplies at my North Vancouver vacation rental?",
    answer: "Yes. We restock host-provided toiletries, paper goods, coffee, tea, and other basic essentials at every North Vancouver turnover. We track inventory and let you know when something runs low.",
  },
  {
    question: "Do you offer recurring turnover schedules for North Vancouver properties?",
    answer: "Yes. Our Recurring Turnover Plan supports predictable booking patterns and can sync directly with your Airbnb or VRBO calendar for hosts across North Vancouver.",
  },
  {
    question: "How long does a typical vacation rental turnover take in North Vancouver?",
    answer: "A one-bedroom North Vancouver unit takes 60 to 90 minutes, and a two-bedroom unit takes 90 to 120 minutes. Larger properties or deep cleans in areas like Lynn Valley or Dollarton can take longer.",
  },
  {
    question: "Do you handle laundry as part of a North Vancouver turnover?",
    answer: "We can coordinate on-site laundry or work with your linen service. Laundry turnaround is factored into scheduling so back-to-back bookings at your North Vancouver rental stay on track.",
  },
  {
    question: "What happens if a guest leaves my North Vancouver rental in bad shape?",
    answer: "We handle heavy-mess turnovers, including excess trash and stains. If there's damage, we document it with photos so you have records for any claim, which matters for North Vancouver hosts managing Airbnb disputes.",
  },
  {
    question: "Are your cleaning products eco-friendly for North Vancouver vacation rentals?",
    answer: "Yes, all products we use are non-toxic and safe for guests, pets, and the environment. Many North Vancouver hosts highlight this in their listings, since guests increasingly look for eco-conscious properties.",
  },
  {
    question: "How much does vacation rental turnover cleaning cost in North Vancouver?",
    answer: "Pricing runs from $120 to $400 depending on property size, condition, and the services included, whether that's a rental near Capilano or a larger home near Seymour Heights. Call for a free estimate, or request a quote at /rates. First bookings qualify for 10% off with code MINT26.",
  },
];

export default function VacationRentalCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Vacation Rental Cleaning in North Vancouver"
      heroImage="/vacation-rental-cleaning-north-vancouver.jpg"
      heroSubtitle="Airbnb & Short-Term Rental Turnover"
      heroIntro="Running a short-term rental in North Vancouver means racing the clock between guests. A checkout at 11 a.m. and a check-in at 3 p.m. doesn't leave room for a slow clean or a missed detail. Mint Sanitary handles vacation rental turnovers for hosts across North Vancouver, from condos in Lower Lonsdale to family homes near Lynn Valley and Deep Cove. We're a local North Vancouver cleaning company with a 4.9 out of 5 rating across 120+ reviews. Use code MINT26 for 10% off your first turnover."
      faqItems={faqItems}
      ctaHeading="Ready to Hand Off Your Turnovers?"
      ctaBody="Get a free, no-contract quote for your North Vancouver vacation rental, or call us directly at 236-688-3248 to talk through your booking calendar."
      ctaHref="/rates"
    >
      {/* ── Why NV Hosts Choose Us (white bg) ────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why North Vancouver Hosts Choose Mint Sanitary
          </h2>
          <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            North Vancouver&apos;s short-term rental market runs on tight
            timelines. Guests fly into YVR, drive up from the ferry, or hike
            down from Grouse and expect a spotless unit waiting for them. A
            late or sloppy turnover costs you a booking, or worse, a bad
            review. We built our vacation rental service around what North
            Vancouver hosts need: same-day turnovers when your schedule
            allows it, photo documentation sent after every clean, so you
            can confirm guest-readiness without driving over, eco-friendly
            products that are safe for guests, pets, and the environment,
            supply restocking with low-inventory alerts, consistent,
            trained teams who learn your property&apos;s layout, and
            transparent pricing with free estimates and no contracts.
          </p>
        </div>
      </section>

      {/* ── What's Included — Card Grid with images ──────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What Our North Vancouver Vacation Rental Cleaning Includes
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Every turnover follows a checklist built for short-term
            rentals, not a standard house clean.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whatsIncluded.map((area) => (
              <div key={area.title} className="overflow-hidden rounded-[14px] bg-white/[0.12] backdrop-blur-sm">
                <img
                  src={area.image}
                  alt={`${area.title} for North Vancouver vacation rentals`}
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

      {/* ── Meeting Standards (blue bg) ───────────────────────── */}
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
            Meeting Airbnb and VRBO Cleanliness Standards in North Vancouver
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Platform reviews live and die on the small stuff. Our checklist
            targets the details Airbnb and VRBO guests notice, and the
            details that trigger complaints if they&apos;re missed.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {meetingStandards.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ratings & Revenue (white bg) ─────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Cleanliness Affects Your North Vancouver Rental&apos;s Ratings and Revenue
          </h2>
          <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Cleanliness is the top reason vacation rental listings lose
            stars. From what we see across North Vancouver properties,
            cleanliness complaints show up in more than 80% of negative
            vacation rental reviews. That single category can undo months
            of good reviews. Airbnb&apos;s search algorithm weighs your
            cleanliness score heavily. Listings with 4.8 stars or higher for
            cleanliness tend to book more nights and can charge higher
            rates. A single bad score can drag your average below the
            Superhost threshold and cost you the badge. Back-to-back
            bookings raise the stakes further. If your North Vancouver
            rental can&apos;t turn around fast and reliably, you lose the
            ability to accept tight-turnaround bookings, and those bookings
            are often the most profitable ones on your calendar.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Turnover Times for North Vancouver Vacation Rentals</h3>
          <p className="mt-3 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            One-bedroom units take 60 to 90 minutes, two-bedroom units take
            90 to 120 minutes, and larger properties or deep cleans take
            more time, scheduled around your checkout and check-in windows.
            We plan our North Vancouver team&apos;s day around your listing
            calendar so a clean never runs into a check-in.
          </p>
        </div>
      </section>

      {/* ── Turnover Options (f4f8ff bg) ─────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Turnover Options for North Vancouver Hosts
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Not every stay needs the same level of clean. We offer three
            turnover types for North Vancouver properties.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {turnoverOptions.map((option) => (
              <div key={option.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{option.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{option.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Turnover pricing runs from $120 to $400, depending on property
            size, condition, whether linen and laundry are included,
            restocking needs, and how often you book us. For an exact
            number, request a free estimate at{" "}
            <a href="/rates" className="underline underline-offset-2">
              /rates
            </a>
            . First-time hosts can apply MINT26 for 10% off.
          </p>
        </div>
      </section>

      {/* ── Process Steps (white bg) ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              How Our North Vancouver Turnover Cleaning Process Works
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

      {/* ── Why Choose — AccordionWithImage ───────────────────── */}
      <AccordionWithImage
        heading="Why North Vancouver Hosts Choose Mint Sanitary"
        image="/mint-sanitary-service-van-north-vancouver.jpg"
        imageAlt="Mint Sanitary service van in North Vancouver"
        items={whyChooseItems}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Neighbourhoods We Serve (blue bg) ─────────────────── */}
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
                We clean vacation rentals throughout North Vancouver,
                including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep
                Cove, Edgemont Village, Capilano, Norgate, Seymour Heights,
                Dollarton, and Blueridge. Waterfront condos near Lower
                Lonsdale, hillside homes near Edgemont Village, and family
                rentals near Deep Cove all get the same checklist and the
                same guarantee.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We also serve West Vancouver, Vancouver, and Burnaby. Check
                our full list of covered areas on the{" "}
                <a href="/service-areas" className="underline underline-offset-2">
                  North Vancouver service area page
                </a>
                , or see our{" "}
                <a href="/north-vancouver" className="underline underline-offset-2">
                  North Vancouver page
                </a>{" "}
                for an overview of everything we offer locally. If your
                rental sits outside North Vancouver, our{" "}
                <a href="/services/vacation-rental-cleaning" className="underline underline-offset-2">
                  vacation rental cleaning services
                </a>{" "}
                page covers the same turnover service across Greater
                Vancouver. Hosts who also need standard home cleaning
                between longer stays can check our{" "}
                <a href="/north-vancouver/house-cleaning" className="underline underline-offset-2">
                  house cleaning in North Vancouver
                </a>{" "}
                page.
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
    </ServicePageLayout>
  );
}
