import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Move-Out Cleaning North Vancouver | End of Tenancy Services",
  description:
    "Professional move-out cleaning in North Vancouver to protect your security deposit. 24-hour satisfaction guarantee, eco-friendly products, bonded & insured staff.",
};

const checklistCards = [
  {
    title: "Bedrooms & Living Areas",
    items: [
      "Dust all surfaces, shelves, and ledges",
      "Clean inside closets and drawers",
      "Wipe doors, handles, light switches, and baseboards",
      "Vacuum and mop floors",
      "Clean windows from inside",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Deep clean oven, stovetop, and range hood",
      "Clean inside refrigerator and freezer",
      "Wipe down all cabinets inside and out",
      "Sanitize sink, faucet, and countertops",
      "Clean inside microwave and dishwasher",
      "Degrease backsplash",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize toilet, tub, and shower",
      "Clean tile grout and remove soap scum",
      "Polish mirrors and fixtures",
      "Wipe vanity, medicine cabinet, and shelves",
      "Mop bathroom floors",
    ],
  },
  {
    title: "Throughout the Property",
    items: [
      "Dust and clean all light fixtures and ceiling fans",
      "Wipe all door handles, switches, and outlet covers",
      "Vacuum and mop all floors",
      "Clean interior windows, tracks, and sills",
      "Remove cobwebs",
      "Take out all trash and cleaning debris",
    ],
  },
];

const depositDeductions = [
  {
    title: "Cleaning Costs",
    desc: "Landlords can deduct professional cleaning costs if the property isn\u2019t returned in a reasonably clean state.",
  },
  {
    title: "Repair and Damage Costs",
    desc: "Stains, marks, and damage beyond normal wear and tear can result in deductions.",
  },
  {
    title: "Disposal Fees",
    desc: "Left-behind items or trash may lead to removal charges.",
  },
];

const processSteps = [
  {
    title: "Contact Us for a Free Estimate",
    body: "Call (604) 671-6252, visit our contact page, or request a quote online. We\u2019ll ask about your property size, condition, and move-out date to provide an accurate estimate.",
  },
  {
    title: "Schedule Your Cleaning",
    body: "We\u2019ll work around your move-out timeline, including weekends and evenings. We recommend booking 1\u20132 weeks in advance, but we can often accommodate last-minute requests.",
  },
  {
    title: "Pre-Clean Walkthrough",
    body: "On cleaning day, our team does a walkthrough to note high-priority areas, any landlord-specific checklist items, and the overall condition of the property.",
  },
  {
    title: "Detailed Room-by-Room Cleaning",
    body: "Our team works systematically through every room using eco-friendly products and professional equipment. Most 2\u20133 bedroom properties take 4\u20136 hours.",
  },
  {
    title: "Final Walkthrough and Handover",
    body: "Once cleaning is complete, we do a final walkthrough with you (or document the results if you\u2019re not present). You\u2019ll receive confirmation that the property is inspection-ready.",
  },
];

const whyChooseItems = [
  {
    title: "BC Tenancy Law Knowledge",
    desc: "We understand what BC landlords and property managers look for during move-out inspections, and we clean accordingly.",
  },
  {
    title: "7-Day Availability",
    desc: "Move-outs don\u2019t follow business hours. We\u2019re available seven days a week, including evenings and holidays.",
  },
  {
    title: "Eco-Friendly Products",
    desc: "We use plant-based, non-toxic cleaning products that are safe for families, pets, and indoor air quality\u2014without sacrificing cleaning power.",
  },
  {
    title: "Bonded & Insured Staff",
    desc: "Every team member is background-checked, bonded, and insured for your peace of mind.",
  },
  {
    title: "Local North Vancouver Expertise",
    desc: "We know the neighbourhoods, building types, and property management expectations across North Vancouver.",
  },
  {
    title: "Free Estimates, No Obligation",
    desc: "We provide transparent, upfront pricing so you know exactly what to expect before we start.",
  },
  {
    title: "First-Time Client Discount",
    desc: "New customers save 10% with promo code MINT25.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    desc: "If anything doesn\u2019t meet your expectations within 24 hours, we\u2019ll come back and make it right\u2014no questions asked.",
  },
];

const pricingTiers = [
  { label: "500–800 sq ft", range: "$390–$480" },
  { label: "900–1500 sq ft", range: "$580–$620" },
  { label: "2000–5000+ sq ft", range: "$650–$850+" },
];

const deepCleaningLinks = [
  {
    label: "Deep Cleaning",
    href: "/cleaning-services-north-vancouver/deep-cleaning",
    desc: "for seasonal resets, post-renovation, or homes that need a thorough top-to-bottom clean.",
  },
  {
    label: "Post-Construction Cleaning",
    href: "/cleaning-services-north-vancouver/post-construction-cleaning",
    desc: "for properties that have undergone renovation or construction work.",
  },
  {
    label: "Recurring Cleaning",
    href: "/cleaning-services-north-vancouver/recurring-cleaning",
    desc: "to keep your new place maintained after settling in.",
  },
  {
    label: "Move-In Cleaning",
    href: "/cleaning-services-north-vancouver/move-in-cleaning",
    desc: "if you\u2019re also preparing the new property you\u2019re moving into.",
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
    question: "What is included in a move-out cleaning?",
    answer:
      "Our move-out cleaning covers every room in your property: kitchens (oven, fridge, cabinets, countertops), bathrooms (toilet, tub, grout, mirrors), bedrooms (closets, baseboards, windows), and common areas. We follow a detailed checklist designed to meet landlord inspection standards in BC.",
  },
  {
    question: "How much does move-out cleaning cost in North Vancouver?",
    answer:
      "Pricing is based on property size (square footage) and condition. Move-out cleaning starts at $390 for 500–600 sq ft and scales up based on size. Visit our rates page for the full pricing table or contact us for a free, no-obligation estimate.",
  },
  {
    question: "How far in advance should I book move-out cleaning?",
    answer:
      "We recommend booking 1\u20132 weeks before your move-out date, but we can often accommodate last-minute requests depending on availability. Call (604) 671-6252 as soon as your date is confirmed.",
  },
  {
    question: "Will move-out cleaning help me get my security deposit back?",
    answer:
      "Yes. Under the BC Residential Tenancy Act, landlords can deduct cleaning costs if the property isn\u2019t returned in a reasonably clean condition. Professional move-out cleaning helps ensure you meet those standards and protects your deposit.",
  },
  {
    question: "Do you clean inside appliances like the oven and fridge?",
    answer:
      "Yes. We deep clean inside ovens, refrigerators, microwaves, and dishwashers as part of our standard move-out cleaning service.",
  },
  {
    question: "Can you work around my moving schedule?",
    answer:
      "Absolutely. We offer 7-day availability, including evenings, and we\u2019ll coordinate with your movers and timeline to clean at the most convenient time.",
  },
  {
    question: "What if my landlord finds an issue after the cleaning?",
    answer:
      "We offer a 24-hour satisfaction guarantee. If anything is missed, we\u2019ll return and address it at no additional charge.",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer:
      "Yes. We use eco-friendly, plant-based products that are non-toxic and free of harsh chemicals like ammonia and bleach.",
  },
  {
    question: "Do you offer move-in cleaning as well?",
    answer:
      "Yes. We offer both move-out and move-in cleaning services. Many clients book both for a seamless transition between homes.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve North Vancouver, West Vancouver, Vancouver, Burnaby, and the Greater Vancouver area with the same standards and satisfaction guarantee.",
  },
];

export default function MoveOutCleaningPage() {
  return (
    <ServicePageLayout
      title="Move-Out Cleaning in North Vancouver"
      heroImage="/move-out-cleaning-north-vancouver-living-room.jpg"
      heroSubtitle="End of Tenancy Cleaning"
      heroIntro="Moving out is stressful enough without worrying about your security deposit. Mint Sanitary provides thorough move-out cleaning across North Vancouver that meets BC tenancy inspection standards — giving you the best chance of a full deposit return. Use code MINT25 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready to Protect Your Deposit?"
      ctaBody="Book your move-out clean today. Call Mint Sanitary at (604) 671-6252. 7-day availability, eco-friendly products, bonded and insured staff. Use code MINT25 for 10% off."
    >
      {/* ── A. Image + Text Intro (white bg) ─────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/move-out-cleaning-north-vancouver-living-room.jpg"
                alt="Move-out cleaning in North Vancouver living room"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Deposit Protection Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What&apos;s Included in a Move-Out Clean
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Under BC&apos;s Residential Tenancy Act, tenants must leave the
                property in a reasonably clean condition. Our move-out cleaning
                is designed to meet and exceed landlord inspection standards
                across North Vancouver — protecting your deposit and giving you
                peace of mind when you hand over the keys.
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

      {/* ── B. Checklist Card Grid (f4f8ff bg) ───────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2">
            {checklistCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] bg-white p-5 shadow-sm"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {card.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((item) => (
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
              What Can Landlords Deduct?
            </h3>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              {depositDeductions.map((item) => (
                <div key={item.title}>
                  <h4 className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── C. Blue Section — Move-Out vs Standard Comparison ── */}
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
            Move-Out Cleaning vs. Standard Cleaning
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Move-Out Cleaning
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Deep, one-time clean designed for property handover
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Covers inside appliances, cabinets, closets, and windows
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Takes 4&ndash;6 hours depending on property size
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Follows BC tenancy inspection standards
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Pricing: $390&ndash;$850+ based on property size (sq ft)
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
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-[14px] bg-white/10 p-5 text-center"
              >
                <p className="font-body text-[15px] font-extrabold text-white">
                  {tier.label}
                </p>
                <p className="mt-2 font-display-reg text-[28px] text-white">
                  {tier.range}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Need help getting your full deposit back? Call{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── D. Process Steps (white bg) ───────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Move-Out Cleaning Process: Step by Step
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

      {/* ── E. AccordionWithImage (blue bg) ───────────────── */}
      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Move-Out Cleaning"
        intro="We understand BC tenancy law and what landlords look for during inspections. Our move-out cleaning is designed to protect your deposit."
        image="/eco-friendly-cleaning-products-north-vancouver.jpg"
        imageAlt="Professional eco-friendly move-out cleaning in North Vancouver"
        items={whyChooseItems.map((item) => ({ title: item.title, body: item.desc }))}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── F. Related Services Section (white bg) ────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Related Cleaning Services
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {deepCleaningLinks.map((link) => (
              <div
                key={link.label}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  <a
                    href={link.href}
                    className="underline decoration-[#66DAD5] underline-offset-2"
                  >
                    {link.label}
                  </a>
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {link.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── G. Service Areas (blue bg with mint-bg.png) ───── */}
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
                Mint Sanitary provides move-out cleaning across all North
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
    </ServicePageLayout>
  );
}
