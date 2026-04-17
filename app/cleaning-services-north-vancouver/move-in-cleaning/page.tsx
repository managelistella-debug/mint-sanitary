import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title:
    "Move-In Cleaning North Vancouver | Professional Service by Mint Sanitary",
  description:
    "Professional move-in cleaning in North Vancouver. Eco-friendly deep cleaning before you move in. Free estimate + 10% off with code MINT25. Call (604) 671-6252.",
};

const kitchenItems = [
  "Clean and sanitize inside all cabinets and drawers",
  "Deep clean inside oven, stovetop, and range hood",
  "Clean inside refrigerator, freezer, and shelves",
  "Wipe down inside microwave and dishwasher",
  "Sanitize countertops, backsplash, and sink",
  "Clean and polish faucet and fixtures",
  "Degrease cabinet fronts and handles",
];

const bathroomItems = [
  "Scrub and sanitize toilet inside and out",
  "Clean bathtub, shower walls, and shower door",
  "Scrub tile grout and remove soap scum or buildup",
  "Polish mirrors and glass surfaces",
  "Clean and sanitize vanity, sink, and countertop",
  "Wipe down all fixtures, towel bars, and hooks",
  "Clean inside medicine cabinets and shelves",
  "Clean exhaust fan and vents",
  "Mop bathroom floors",
];

const bedroomItems = [
  "Dust all surfaces, shelves, and ledges",
  "Clean inside all closets, drawers, and storage spaces",
  "Wipe down doors, door frames, and handles",
  "Clean light switches, outlet covers, and baseboards",
  "Remove cobwebs from corners and ceiling edges",
  "Clean windows from inside, including tracks and sills",
];

const livingAreaItems = [
  "Dust and wipe down all surfaces and shelving",
  "Clean light fixtures, ceiling fans, and vents",
  "Wipe down window sills, blinds, and tracks",
  "Wipe baseboards and door frames",
  "Clean fireplace mantle and surround (if applicable)",
];

const floorItems = [
  "Vacuum all carpeted areas thoroughly",
  "Mop all hard floors (tile, laminate, hardwood)",
  "Clean floor edges, corners, and under-cabinet toe kicks",
];

const checklistCards = [
  { title: "Kitchen", items: kitchenItems },
  { title: "Bathrooms", items: bathroomItems },
  { title: "Bedrooms", items: bedroomItems },
  { title: "Living Areas", items: livingAreaItems },
  { title: "Floors", items: floorItems },
];

const benefitCards = [
  {
    title: "Save Time During a Stressful Move",
    desc: "Moving involves coordination with movers, utilities, keys, and paperwork. Cleaning a property yourself on top of all that is exhausting. A professional move-in clean frees up your time to focus on settling in.",
  },
  {
    title: "Healthier Indoor Environment",
    desc: "Previous occupants may have had pets, smoked indoors, or left behind allergens and bacteria. A thorough deep clean removes dust, dander, germs, and residue from every surface\u2014so you start fresh with clean indoor air.",
  },
  {
    title: "Meet Inspection and Lease Standards",
    desc: "If you\u2019re renting, documenting the condition of the property when you move in matters. A professional clean establishes a clean baseline and helps you avoid disputes when you eventually move out.",
  },
  {
    title: "Professional Equipment and Products",
    desc: "Our team uses HEPA-filter vacuums, professional-grade eco-friendly products, and specialized tools for grout, appliance interiors, and high-reach areas. It\u2019s a level of clean that\u2019s difficult to match with household supplies.",
  },
  {
    title: "Peace of Mind",
    desc: "Knowing that your new home has been professionally cleaned\u2014every cabinet, every surface, every hidden corner\u2014gives you confidence as you unpack and settle in.",
  },
];

const processSteps = [
  {
    title: "Contact Us",
    body: "Call (604) 671-6252, visit our contact page, or request a quote online. We\u2019ll ask about your property size, type, and move-in date.",
  },
  {
    title: "Get a Free Estimate and Schedule",
    body: "We\u2019ll provide a transparent, no-obligation quote and schedule the cleaning around your timeline\u2014including weekends and evenings.",
  },
  {
    title: "Cleaning Day",
    body: "Our bonded and insured team arrives on time, does a walkthrough to confirm priorities, and cleans every room using eco-friendly products and professional equipment.",
  },
  {
    title: "Open Communication",
    body: "If we find anything unexpected during the clean (e.g. damage, mold, pest signs), we\u2019ll let you know right away so you can address it before moving in.",
  },
  {
    title: "Final Walkthrough",
    body: "Once cleaning is complete, we walk through the property with you (or send photo documentation) to confirm everything meets your expectations.",
  },
  {
    title: "Enjoy Your Clean Home",
    body: "With the cleaning complete and every surface fresh, you can unpack and settle in with confidence.",
  },
];

const whyChooseItems = [
  {
    title: "Serving North Vancouver for Years",
    desc: "We know the neighbourhoods, building types, and property management expectations across North Vancouver\u2014from Lower Lonsdale condos to Lynn Valley homes.",
  },
  {
    title: "Bonded & Insured",
    desc: "Every team member is background-checked, bonded, and insured. Your property is in safe hands.",
  },
  {
    title: "Eco-Friendly Cleaning Products",
    desc: "We use plant-based, non-toxic products that are safe for children, pets, and anyone with sensitivities\u2014without compromising on cleaning power.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. You\u2019ll know the exact cost before we start, and that\u2019s what you\u2019ll pay.",
  },
  {
    title: "First-Time Client Discount",
    desc: "New customers get 10% off with promo code MINT25.",
  },
  {
    title: "Satisfaction Guarantee",
    desc: "If anything doesn\u2019t meet your expectations within 24 hours, we\u2019ll come back and make it right\u2014no questions asked.",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "Norgate",
  "Pemberton Heights",
  "Capilano",
  "Dollarton",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "Greater Vancouver",
];

const faqItems = [
  {
    question: "What is move-in cleaning?",
    answer:
      "Move-in cleaning is a thorough deep cleaning performed before you move into a new home. It covers every room\u2014inside appliances, cabinets, closets, bathrooms, and floors\u2014so you start with a completely clean space.",
  },
  {
    question: "How is move-in cleaning different from regular cleaning?",
    answer:
      "Regular cleaning maintains day-to-day tidiness. Move-in cleaning is a deep, one-time service that includes areas not covered in standard cleaning\u2014like inside appliances, behind fixtures, cabinet interiors, and detailed grout scrubbing.",
  },
  {
    question: "When should I schedule move-in cleaning?",
    answer:
      "Ideally 1\u20132 days before your move-in date, after the previous occupant has vacated and before your furniture arrives. This gives our team full access to every surface.",
  },
  {
    question: "How long does move-in cleaning take?",
    answer:
      "It depends on the size and condition of the property. A typical 2\u20133 bedroom home takes 4\u20136 hours. Larger or heavily soiled properties may take longer.",
  },
  {
    question: "Do you clean inside appliances?",
    answer:
      "Yes. We deep clean inside ovens, refrigerators, microwaves, dishwashers, and range hoods as part of our standard move-in cleaning service.",
  },
  {
    question: "Are your products safe for pets and children?",
    answer:
      "Yes. We use eco-friendly, plant-based products that are non-toxic and free from harsh chemicals like ammonia and bleach.",
  },
  {
    question: "How much does move-in cleaning cost?",
    answer:
      "Pricing is based on property size (square footage). Move-in cleaning starts at $390 for 500\u2013600 sq ft and scales based on size. Visit our rates page for the full pricing table, or contact us for a free, no-obligation estimate.",
  },
  {
    question: "Can I book on short notice?",
    answer:
      "Often, yes. We operate seven days a week and can accommodate many tight timelines. Call (604) 671-6252 as soon as your move-in date is confirmed.",
  },
  {
    question: "Do you offer move-out cleaning as well?",
    answer:
      "Yes. We offer both move-in and move-out cleaning. Many clients book both for a seamless transition between properties.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve North Vancouver, West Vancouver, Vancouver, Burnaby, and the Greater Vancouver area with the same standards and guarantee.",
  },
];

export default function MoveInCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Move-In Cleaning in North Vancouver"
      heroImage="/move-in-cleaning-north-vancouver-apartment.jpg"
      heroSubtitle="Fresh Start Deep Cleaning"
      heroIntro="Moving into a new home deserves a clean start. Mint Sanitary provides thorough move-in cleaning across North Vancouver — reaching inside every cabinet, appliance, and hidden corner before you unpack. Eco-friendly products, 7-day availability, and a satisfaction guarantee. Use code MINT25 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready for a Fresh Start in Your New Home?"
      ctaBody="Book your move-in clean today. Call Mint Sanitary at (604) 671-6252 or request a quote online. 7-day availability, eco-friendly products. Use code MINT25 for 10% off."
    >
      {/* ── A. Image + Text Intro (white bg) ──────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/move-in-cleaning-north-vancouver-apartment.jpg"
                alt="Move-in cleaning service in North Vancouver apartment"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Fresh Start Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What&apos;s Included in a Move-In Clean
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                A move-in clean is a thorough, room-by-room deep clean performed
                before you unpack. Our team reaches inside every cabinet,
                appliance, and hidden corner so your new home is truly fresh
                from the start.
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </section>

      {/* ── C. Blue Section — Benefits ────────────────────── */}
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
            Why Professional Move-In Cleaning Matters
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] bg-white/10 p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Move-in cleaning is priced by property size (square footage),
            starting at $390 for 500–600 sq ft. Visit our rates page for
            the full deep cleaning pricing table, or call{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            for a free estimate.
          </p>
        </div>
      </section>

      {/* ── D. Process Steps (white bg) ───────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Move-In Cleaning Process: Step by Step
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
        heading="Why Choose Mint Sanitary for Move-In Cleaning"
        intro="Moving into a new home should feel exciting, not stressful. We handle the cleaning so you can focus on settling in."
        image="/mint-sanitary-team-north-vancouver.jpg"
        imageAlt="Mint Sanitary professional cleaning team in North Vancouver"
        items={whyChooseItems.map((item) => ({
          title: item.title,
          body: item.desc,
        }))}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── F. Move-In vs Move-Out Comparison (white bg) ──── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Move-In vs. Move-Out Cleaning: What&apos;s the Difference?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Move-In Cleaning
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Performed before unpacking. Focus on sanitizing every surface
                for the new occupant. Includes inside all appliances, cabinets,
                and hard-to-reach areas.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Move-Out Cleaning
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Performed as you vacate a property. Focus on restoring to
                inspection-ready condition. Designed to protect your security
                deposit under BC tenancy law.
              </p>
              <a
                href="/cleaning-services-north-vancouver/move-out-cleaning/"
                className="mt-4 inline-block font-body text-[15px] leading-[1.7] text-[#6191e9] underline underline-offset-2"
              >
                Learn about move-out cleaning
              </a>
            </div>
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
                Mint Sanitary provides move-in cleaning across all North
                Vancouver neighborhoods, including Lower Lonsdale, Upper
                Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Capilano,
                Norgate, Seymour Heights, Dollarton, and Pemberton Heights.
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
    </ServicePageLayout>
  );
}
