import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/vacation-rental-cleaning-original
// so the CMS version at /services/vacation-rental-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Vacation Rental Cleaning | Greater Vancouver Turnovers",
  description:
    "Airbnb and VRBO turnover cleaning across Greater Vancouver. Fast, reliable resets with photo proof after every clean. Free quote at Mint Sanitary.",
  robots: { index: false, follow: false },
};

const whatsIncluded = [
  {
    title: "Linens and Towels",
    image: "/see-difference-towels-detail.webp",
    items: [
      "Every bed fully stripped and reset with fresh linens",
      "Towels replaced, folded, and staged the way your listing photos show them",
      "Off-site laundry coordination available if needed",
    ],
  },
  {
    title: "Bathroom Deep Clean",
    image: "/see-difference-bathroom-marble-double.webp",
    items: [
      "Toilets, showers, tubs, sinks, and mirrors sanitized and left streak-free",
      "Grout scrubbed and drains checked",
      "Toiletries restocked and arranged for the next guest",
    ],
  },
  {
    title: "Kitchen Reset",
    image: "/recurring-cleaning-kitchen-result-north-vancouver.jpg",
    items: [
      "Dishes washed and put away",
      "Counters, stovetop, inside the microwave, and the sink sanitized",
      "Fridge wiped down, trash removed, fresh liners placed",
    ],
  },
  {
    title: "Living Areas and Bedrooms",
    image: "/spring-cleaned-living-room-north-vancouver.jpg",
    items: [
      "Dusting, vacuuming, and mopping every room",
      "Cushions fluffed, remotes and electronics wiped down",
      "Furniture returned to the staged position from your listing photos",
    ],
  },
  {
    title: "Supply Restocking",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
    items: [
      "Host-provided toiletries and paper goods restocked",
      "Coffee, tea, and basic guest essentials topped up",
      "Inventory check on every visit",
    ],
  },
  {
    title: "Photo Documentation",
    image: "/airbnb-cleaning-vancouver.png",
    items: [
      "Time-stamped photos of each room sent after every turnover",
      "Confirm the property is guest-ready without setting foot inside",
      "Photos double as documentation for damage claims",
    ],
  },
];

const meetingStandards = [
  { title: "Mold-free bathrooms", body: "Grout gets scrubbed and known problem spots get treated before they turn into a review complaint." },
  { title: "Pest-free kitchens", body: "Food residue is the main draw for pests, so counters, appliances, and dining areas get cleared of it every visit." },
  { title: "Dust-free surfaces", body: "Ceiling fans, baseboards, window sills, and vent covers get attention, not just the surfaces guests notice first." },
  { title: "The spots hosts forget", body: "Under beds, behind toilets, inside microwaves, light switches, remote controls, and door handles all get checked on every clean." },
];

const turnoverOptions = [
  {
    title: "Standard Turnover",
    body: "A full reset between guests. Linens and towels get replaced, bathrooms and kitchens get a deep clean, floors get cared for, trash gets removed, and photos get sent when the job is done.",
  },
  {
    title: "Deep Turnover",
    body: "Recommended after a longer stay or a high-traffic booking. Everything in the standard turnover, plus inside appliances, grout scrubbing, baseboards, and a more thorough reset of the whole unit.",
  },
  {
    title: "Recurring Turnover Plan",
    body: "Built for hosts with a predictable booking pattern. We coordinate the cleaning schedule around your Airbnb or VRBO calendar and offer preferred scheduling with competitive rates for repeat bookings.",
  },
];

const whyChooseItems = [
  { title: "Same-day turnovers", body: "Back-to-back bookings and last-minute schedule changes get handled without disrupting your calendar." },
  { title: "Photo proof after every clean", body: "No guessing whether the unit is ready. You get photos of every room before the next guest arrives." },
  { title: "Eco-friendly products", body: "Our plant-based, non-toxic cleaning products are safe around guests and pets, and they don't leave a strong chemical smell behind when someone walks in." },
  { title: "Supply restocking built in", body: "Toiletries, paper goods, and guest essentials get checked and topped up automatically, with alerts when something needs reordering." },
  { title: "Consistent teams", body: "The same trained cleaners return to your property over time, so they learn your layout, your staging preferences, and where everything belongs." },
  { title: "Background-checked and insured", body: "Every team member is background-checked, bonded, and insured before they ever step into your rental." },
  { title: "A 24-hour satisfaction guarantee", body: "If something's missed, we come back and fix it at no charge." },
];

const processSteps = [
  { title: "Initial assessment", body: "We walk through your property to learn the layout, your staging preferences, and where supplies live." },
  { title: "Flexible scheduling", body: "Cleanings get built around your booking calendar, including same-day, back-to-back, and last-minute requests." },
  { title: "Professional execution", body: "Each visit follows a checklist customized to your property, not a generic template." },
  { title: "Photo documentation", body: "Time-stamped photos land in your inbox after every clean." },
  { title: "Satisfaction guarantee", body: "If anything falls short, we return within 24 hours to fix it." },
];

const faqItems = [
  {
    question: "How fast can you turn around a unit between guests?",
    answer: "Most 1-bedroom units take 60 to 90 minutes, and 2-bedroom units take 90 to 120 minutes. Larger properties or units that need a deep clean take longer, and we'll scope the time during your quote.",
  },
  {
    question: "Do you handle same-day turnovers?",
    answer: "Yes. Same-day service is one of the main reasons hosts switch to us, especially when checkout and check-in fall on the same day.",
  },
  {
    question: "What's the difference between a Standard and a Deep Turnover?",
    answer: "A Standard Turnover covers linens, bathrooms, kitchens, floors, and trash removal for a normal guest changeover. A Deep Turnover adds inside-appliance cleaning, grout scrubbing, and baseboards, and we recommend it after longer stays or high-traffic bookings.",
  },
  {
    question: "How much does vacation rental cleaning cost?",
    answer: "Turnovers range from $120 to $400 depending on property size, condition after checkout, linen needs, restocking, and whether you book recurring service. For a precise number, request a quote at /rates.",
  },
  {
    question: "Do you restock supplies like toiletries and coffee?",
    answer: "Yes. Restocking host-provided toiletries, paper goods, and basic guest essentials is included with every turnover, along with an inventory check so you can reorder before you run out.",
  },
  {
    question: "How do I know the unit is ready before my next guest checks in?",
    answer: "We send time-stamped photos of every room after each clean, so you can confirm the property is guest-ready from anywhere.",
  },
  {
    question: "What areas do you clean vacation rentals in?",
    answer: "We serve hosts across Greater Vancouver, including West Vancouver, Vancouver, Burnaby, New Westminster, Maple Ridge, and North Vancouver, where we're based. See our full service area list for details.",
  },
  {
    question: "What products do you use?",
    answer: "Plant-based, non-toxic products throughout. They're safe for guests and pets and don't leave a strong smell behind before check-in.",
  },
  {
    question: "Can you work around my Airbnb or VRBO calendar?",
    answer: "Yes. We build recurring turnover schedules around your booking calendar and can accommodate last-minute changes when a guest books unexpectedly.",
  },
  {
    question: "Is there a discount for first-time hosts?",
    answer: "First-time customers get 10% off with code MINT26. There are no contracts, so you can try a turnover before committing to a recurring plan.",
  },
];

export default function ServicesVacationRentalCleaningPage() {
  return (
    <ServicePageLayout
      title="Vacation Rental Cleaning for Airbnb and VRBO Hosts Across Greater Vancouver"
      heroImage="/vacation-rental-cleaning-north-vancouver.jpg"
      heroSubtitle="Airbnb & VRBO Turnover Cleaning"
      heroIntro="Guests judge a rental the moment they open the door. A clean unit earns a good review. A rushed one costs a booking, a star rating, or both. Mint Sanitary handles turnover cleaning for Airbnb and VRBO hosts across Greater Vancouver, and our teams travel to your property on your schedule, not the other way around."
      faqItems={faqItems}
      ctaHeading="Ready to Book?"
      ctaBody="Get a free quote and see what a Mint Sanitary turnover costs for your property, or call 236-688-3248 to talk through your schedule directly. First-time customers save 10% with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            Every clean follows the same checklist, no matter the property
            type: downtown Vancouver condo, Burnaby townhouse, or Maple
            Ridge house. Beds get stripped and remade. Bathrooms and
            kitchens get scrubbed and sanitized. Supplies get restocked.
            Photos get sent so you can confirm the property is guest-ready
            without driving over yourself. If your property sits in North
            Vancouver specifically, our{" "}
            <a href="/north-vancouver/vacation-rental-cleaning" className="underline underline-offset-2">
              vacation rental cleaning in North Vancouver
            </a>{" "}
            page covers neighbourhood-level detail for that area. This page
            is built for hosts managing properties anywhere across the
            region.
          </p>
        </div>
      </section>

      {/* ── Why Turnover Cleaning Affects Bookings (blue bg) ─── */}
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
            Why Turnover Cleaning Affects Your Bookings
          </h2>
          <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Cleanliness drives more guest complaints than any other single
            issue. In our experience, most negative reviews on vacation
            rental listings mention something related to how clean the unit
            was at check-in. Properties that hold a 4.8-plus cleanliness
            score tend to book more nights and command higher rates. Airbnb
            and VRBO both use cleanliness scores in their search ranking, so
            a few bad reviews can quietly push your listing down the page.
            Fast, reliable turnovers also protect your calendar. When a
            cleaning team can reset a unit same-day, you can accept
            back-to-back bookings instead of blocking buffer nights between
            guests. Over a year, that adds up to real revenue.
          </p>
        </div>
      </section>

      {/* ── What's Included — Card Grid with images ──────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in a Mint Sanitary Turnover
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whatsIncluded.map((area) => (
              <div key={area.title} className="overflow-hidden rounded-[14px] bg-white/[0.12] backdrop-blur-sm">
                <img
                  src={area.image}
                  alt={area.title}
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

      {/* ── Meeting Airbnb/VRBO Standards (f4f8ff bg) ────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Meeting Airbnb and VRBO Cleanliness Standards
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Guest platforms hold rentals to a higher bar than a typical home
            clean. Our checklist is built around that bar:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {meetingStandards.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Turnover Options (white bg) ──────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Turnover Options
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {turnoverOptions.map((option) => (
              <div key={option.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{option.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{option.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Turnovers run $120 to $400, depending on property size,
            condition after checkout, linen and laundry needs, restocking
            requirements, and whether you&apos;re on a recurring schedule.
            For an exact number based on your property,{" "}
            <a href="/rates" className="underline underline-offset-2">
              get a quote
            </a>
            . First-time customers save 10% with code MINT26.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">How Long Does a Turnover Take?</h3>
          <p className="mt-3 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            One-bedroom units run 60 to 90 minutes, two-bedroom units run
            90 to 120 minutes, and larger properties or units needing a
            deep clean take longer, scoped during your quote. These windows
            let hosts run same-day turnovers between an 11 a.m. checkout and
            a 3 or 4 p.m. check-in, which is often the tightest gap in a
            booking calendar.
          </p>
        </div>
      </section>

      {/* ── Why Hosts Choose Us — AccordionWithImage ─────────── */}
      <AccordionWithImage
        heading="Why Hosts Across Greater Vancouver Choose Mint Sanitary"
        image="/mint-sanitary-service-van-north-vancouver.jpg"
        imageAlt="Mint Sanitary service van"
        items={whyChooseItems}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Process Steps (white bg) ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              How It Works
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

      {/* ── Areas We Serve (blue bg) ──────────────────────────── */}
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
            Areas We Serve
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is based in{" "}
            <a href="/north-vancouver" className="underline underline-offset-2">
              North Vancouver
            </a>{" "}
            and cleans vacation rentals across{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              Greater Vancouver
            </a>
            , including West Vancouver, Vancouver, Burnaby, New Westminster,
            and Maple Ridge. We offer 7-day availability, so a checkout on a
            Sunday gets handled the same as one on a Wednesday. Looking for
            standard residential cleaning instead of turnovers? Visit our{" "}
            <a href="/services/house-cleaning" className="underline underline-offset-2">
              house cleaning
            </a>{" "}
            page.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
