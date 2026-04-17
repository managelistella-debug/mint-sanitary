import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Upholstery Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional upholstery cleaning in North Vancouver. We remove pet stains, odors, and deep dirt from sofas, chairs, and furniture. Eco-friendly. Free estimates.",
};

const furnitureTypes = [
  {
    title: "Sofas & Sectionals",
    items: [
      "Full sectional cleaning — all cushions and frames",
      "Sofa arms, backs, and base panels treated",
      "Cushion seams and crevices deep-cleaned",
      "Pre-treatment for body oils and contact areas",
    ],
  },
  {
    title: "Armchairs & Recliners",
    items: [
      "Full chair cleaning including armrests and headrests",
      "Recliner mechanism areas cleaned around",
      "Fabric-appropriate cleaning method selected",
      "Spot treatment for high-contact zones",
    ],
  },
  {
    title: "Dining & Office Chairs",
    items: [
      "Seat and back panels cleaned thoroughly",
      "Food and drink stain treatment included",
      "Safe for fabric, vinyl, and mixed materials",
      "Post-clean inspection per piece",
    ],
  },
  {
    title: "Ottomans, Headboards & More",
    items: [
      "Ottomans and footstools — all sides cleaned",
      "Headboards cleaned with fabric-safe methods",
      "Cushions and throw pillows treated individually",
      "Outdoor patio fabric furniture also accepted",
    ],
  },
];

const cleaningMethods = [
  {
    title: "Steam / Hot Water Extraction",
    body: "The most thorough method for durable fabrics like cotton, polyester, and microfiber. Hot water and cleaning solution are injected deep into the fabric, then extracted along with dirt, allergens, and bacteria. Best for heavily soiled pieces and homes with pets or allergies.",
  },
  {
    title: "Dry Cleaning",
    body: "Uses low-moisture cleaning compounds and specialized solvents to clean delicate fabrics like silk, velvet, and vintage upholstery. No water saturation means faster drying and zero risk of water damage or shrinkage.",
  },
  {
    title: "Foam Cleaning",
    body: "A middle ground between steam and dry cleaning. Encapsulating foam is applied to the fabric, traps dirt particles, and is then vacuumed away. Good for lightly soiled pieces and fabrics that are sensitive to moisture.",
  },
  {
    title: "Inspection-Based Approach",
    body: "We never use a one-size-fits-all method. Every piece of furniture is inspected for fabric type, manufacturer care codes, existing damage, and stain types before we recommend a cleaning approach. This prevents damage and ensures the best possible results.",
  },
];

const processSteps = [
  {
    title: "Free Fabric Assessment",
    body: "We inspect fabric type, care codes, stain types, and overall condition before recommending a cleaning method. No guesswork — every piece gets an honest evaluation.",
  },
  {
    title: "Schedule at Your Convenience",
    body: "Pick a time that works. We're available 7 days a week including evenings and weekends. All cleaning is done on-site at your home or business — no drop-off required.",
  },
  {
    title: "Pre-Vacuuming & Pre-Treatment",
    body: "Commercial-grade HEPA vacuuming removes embedded pet hair, crumbs, and surface debris. Stains and high-traffic areas are then pre-treated with fabric-appropriate solutions.",
  },
  {
    title: "Deep Fabric Cleaning",
    body: "Full cleaning is carried out using the method matched to your fabric — steam extraction, dry cleaning, or foam cleaning. Each method is applied to reach deep into fabric fibers.",
  },
  {
    title: "Odour Neutralisation & Extraction",
    body: "Pet odors, smoke, food smells, and mustiness are neutralized at the molecular level using enzyme-based treatments. All cleaning solution and loosened dirt are then fully extracted.",
  },
  {
    title: "Post-Clean Inspection",
    body: "We walk through the results with you, check every piece, and provide care tips to maintain your furniture between professional cleanings. Satisfaction guaranteed.",
  },
];

const whyChoose = [
  {
    title: "Eco-Friendly, Fabric-Safe Products",
    body: "Every job uses non-toxic, biodegradable cleaners matched to your specific fabric type. Safe for children, pets, and sensitive individuals — no harsh chemical residue left behind.",
  },
  {
    title: "7-Day Availability",
    body: "Early mornings, evenings, weekends, and holidays. We work when it's convenient for you, not just during standard business hours.",
  },
  {
    title: "Multiple Cleaning Methods",
    body: "Steam, dry, or foam — we select the safest and most effective cleaning method for your specific fabric, care codes, and condition. No one-size-fits-all approach.",
  },
  {
    title: "Transparent Pricing",
    body: "Free on-site inspection and honest assessment before any work begins. No hidden fees, no surprise charges. You know exactly what you're paying for.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "If any area doesn't meet your expectations, let us know and we'll return to make it right. We stand behind every job we complete.",
  },
  {
    title: "MINT25: 10% Off First Clean",
    body: "First-time clients save 10% on their first upholstery cleaning with promo code MINT25. No contracts, no strings attached.",
  },
];

const pricingFactors = [
  "Size and type of furniture piece",
  "Fabric type and manufacturer care code",
  "Severity of stains and soiling",
  "Odor treatment requirements",
  "Number of pieces being cleaned",
];

const benefits = [
  {
    title: "Extends Furniture Lifespan",
    body: "Dirt and oils break down fabric fibers over time. Regular professional cleaning removes these contaminants and prevents premature wear, fading, and thinning of your upholstery.",
  },
  {
    title: "Improves Indoor Air Quality",
    body: "Upholstery traps dust mites, pet dander, pollen, and other allergens. Deep cleaning removes these particles and improves breathing conditions — especially important for allergy sufferers.",
  },
  {
    title: "Restores Appearance",
    body: "Colors brighten, textures soften, and that 'like new' look comes back. Professional cleaning can reverse years of visible wear on frequently used pieces.",
  },
  {
    title: "Protects Your Investment",
    body: "Quality furniture is expensive to replace. A professional clean that adds years of life to your sofa or sectional is always the smarter financial decision.",
  },
  {
    title: "Pet & Family Safe Results",
    body: "Enzyme-based odor treatments neutralize pet urine, vomit, and accidents at the molecular level. No masking — just clean, fresh upholstery safe for everyone in the home.",
  },
  {
    title: "Budget-Friendly vs. Replacement",
    body: "Before you shop for new furniture, try professional cleaning. Many clients are surprised at how much life is left in pieces they thought needed replacing.",
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
    question: "What types of furniture do you clean?",
    answer:
      "We clean sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor fabric furniture. If it has upholstery, we can clean it.",
  },
  {
    question: "Can you remove pet stains and odors from upholstery?",
    answer:
      "Yes. We use enzyme-based treatments that break down pet urine, vomit, and other organic stains at the molecular level. Odors are neutralized at the source, not masked with fragrance.",
  },
  {
    question: "How long does upholstery take to dry after cleaning?",
    answer:
      "Steam cleaning takes 4\u20138 hours. Dry cleaning takes 2\u20134 hours. Leather takes 1\u20132 hours. Drying times can be reduced with fans and ventilation. We provide specific care instructions after every service.",
  },
  {
    question: "Is upholstery cleaning safe for delicate fabrics?",
    answer:
      "Yes. We inspect every piece before cleaning and select the safest method for the fabric. Delicate materials like silk, velvet, and vintage upholstery receive dry cleaning methods that avoid water damage.",
  },
  {
    question: "How often should upholstery be professionally cleaned?",
    answer:
      "Most homes benefit from professional upholstery cleaning every 12\u201324 months. Homes with pets, children, or allergy sufferers should consider every 6\u201312 months. High-traffic commercial furniture may need quarterly cleaning.",
  },
  {
    question: "Will cleaning remove all stains?",
    answer:
      "Most stains are fully removable or significantly improved with professional treatment. Some stains \u2014 like permanent marker, bleach damage, or very old set-in stains \u2014 may not be completely removable, but we\u2019ll give you an honest assessment before we start.",
  },
  {
    question: "Do you clean leather furniture?",
    answer:
      "Yes. Leather requires different products and techniques than fabric. We clean, condition, and protect leather to prevent cracking, fading, and drying out.",
  },
  {
    question: "Can you clean upholstery on-site?",
    answer:
      "Yes. All of our upholstery cleaning is done on-site at your home or business. No need to move furniture or drop anything off.",
  },
  {
    question: "Are your products safe for kids and pets?",
    answer:
      "Yes. We use non-toxic, eco-friendly products that are safe for children, pets, and sensitive individuals. No harsh chemicals, no strong fumes.",
  },
  {
    question: "How much does upholstery cleaning cost?",
    answer:
      "Most individual pieces cost $100\u2013$200, depending on size, fabric type, and condition. Sectionals and larger pieces may cost more. Call (604) 671-6252 for a free estimate. Use code MINT25 for first-time savings.",
  },
];

export default function UpholsteryCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Upholstery Cleaning in North Vancouver"
      heroImage="/upholstery-cleaning-north-vancouver-sofa.jpg"
      heroSubtitle="Professional Sofa & Furniture Cleaning"
      heroIntro="Upholstered furniture traps dust, allergens, pet dander, and stains deep in fabric fibers where regular vacuuming can't reach. Mint Sanitary provides professional upholstery cleaning for sofas, chairs, and all fabric furniture across North Vancouver — using eco-friendly products matched to your fabric type. Use code MINT25 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready for Fresh, Clean Upholstery?"
      ctaBody="Call Mint Sanitary at (604) 671-6252 or book online. 7-day availability, eco-friendly products, fabric-safe techniques. Use code MINT25 for 10% off your first booking."
    >
      {/* ── Image + Text: What's Included Intro ──────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/upholstery-cleaning-north-vancouver-sofa.jpg"
                alt="Professional upholstery cleaning of a sofa in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Fabric-Safe Deep Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What&apos;s Included in Professional Upholstery Cleaning
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professional upholstery cleaning goes far beyond surface
                vacuuming. It&apos;s a multi-step process that deep-cleans fabric
                fibers, removes embedded allergens, neutralizes odors, and treats
                stains using equipment and products that consumer tools simply
                can&apos;t match. Every piece of furniture is inspected before
                cleaning begins to ensure the right method is used for your fabric
                type.
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

      {/* ── Furniture Types — Card Grid ───────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {furnitureTypes.map((area) => (
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

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cleaningMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-[14px] bg-white p-5 shadow-sm"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {method.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {method.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cleaning Methods Comparison ───────────────────── */}
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
            Professional vs. DIY Upholstery Cleaning
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Professional Cleaning
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; HEPA-grade equipment and commercial extraction power
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Fabric-specific products that won&apos;t damage or discolor
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Trained technicians who understand care codes and fiber types
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Odor neutralization at the molecular level
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Complete stain removal or maximum possible improvement
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Faster drying due to professional-grade extraction
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                DIY Limitations
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Consumer machines lack suction power, leaving excess moisture
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Store-bought products may discolor, bleach, or damage fabric
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Risk of over-wetting, which can cause mold, mildew, and odor
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; No pre-treatment or post-treatment for stubborn stains
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Temporary surface cleaning that doesn&apos;t reach deep fibers
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Can void furniture warranties if wrong products are used
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Not sure which cleaning method is right for your furniture? Call{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            and we&apos;ll provide a free on-site assessment and recommend the
            best approach for your fabric type and condition.
          </p>
        </div>
      </section>

      {/* ── Process Steps — Numbered Circles ──────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Upholstery Cleaning Process: Step by Step
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
        heading="Why Choose Mint Sanitary for Upholstery Cleaning"
        intro="We're not just another cleaning company. Mint Sanitary is built on transparency, eco-conscious practices, and fabric expertise that protects your furniture and your family."
        image="/eco-friendly-cleaning-products-north-vancouver.jpg"
        imageAlt="Eco-friendly upholstery cleaning products"
        items={whyChoose.map((item) => ({ title: item.title, body: item.body }))}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Pricing ──────────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Transparent Pricing
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Upholstery Cleaning Pricing Guidance
              </h2>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/upholstery-cleaning-north-vancouver-sofa.jpg"
                alt="Professionally cleaned sofa in North Vancouver"
                className="h-[280px] w-full object-cover sm:h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Most individual pieces of upholstered furniture cost{" "}
              <strong>$100 to $200</strong> to clean, depending on size, fabric
              type, and condition. Sectionals, large sofas, and heavily soiled
              pieces may cost more. Multi-piece discounts are available when
              booking several items together.
            </p>
            <h3 className="mt-8 font-body text-[17px] font-extrabold text-[#4E5062]">
              Pricing Factors
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Your specific price depends on:
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
                Mint Sanitary provides professional upholstery cleaning across all
                North Vancouver neighborhoods, including Lower Lonsdale, Upper
                Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Capilano,
                Norgate, Seymour Heights, Dollarton, and Blueridge.
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
                Your Furniture, Your Health
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Upholstery Cleaning Matters: Health &amp; Home Benefits
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professional upholstery cleaning isn&apos;t just about appearances.
                It has measurable benefits for your health, your home, and the
                lifespan of your furniture.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/upholstery-cleaning-north-vancouver-sofa.jpg"
                alt="Clean upholstered furniture in North Vancouver home"
                className="h-[300px] w-full object-cover sm:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
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
