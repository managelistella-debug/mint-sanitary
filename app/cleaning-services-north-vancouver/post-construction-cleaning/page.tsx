import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Post Construction Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional post-construction cleaning in North Vancouver. HEPA-filtered debris removal, silica dust cleanup. 7 days/week. Free quote. Eco-friendly.",
};

const phases = [
  {
    title: "Phase 1: Rough Clean / Debris Removal",
    items: [
      "Remove all large debris, scrap material, and packaging",
      "Sweep and shovel bulk dust, drywall fragments, and sawdust",
      "Clear construction adhesives, tape residue, and stickers from surfaces",
      "Dispose of leftover building materials and waste",
      "Initial wipe-down of all surfaces to prepare for detailed cleaning",
    ],
  },
  {
    title: "Phase 2: General / Detailed Cleaning",
    items: [
      "Top-to-bottom dusting of all surfaces including ceilings, walls, and trim",
      "HEPA vacuuming of floors, vents, and ductwork openings",
      "Interior window and track cleaning",
      "Wipe down all cabinetry, shelving, and built-in fixtures",
      "Clean light fixtures, switch plates, and outlet covers",
      "Scrub tile, grout, and countertop surfaces",
      "Remove paint overspray and caulking residue from glass and hardware",
    ],
  },
  {
    title: "Phase 3: Final / Punch-List Clean",
    items: [
      "Final polish of all hard surfaces, fixtures, and hardware",
      "Streak-free glass cleaning on all windows and mirrors",
      "Sanitize bathrooms and kitchen areas",
      "Final floor cleaning — vacuum carpets, mop hard floors",
      "Touch-up detailing on trim, baseboards, and door frames",
      "Walk-through inspection to confirm move-in or handover readiness",
    ],
  },
];

const whatsIncluded = [
  "Removal of all construction debris and waste materials",
  "HEPA-filtered vacuuming of fine dust from all surfaces",
  "Interior window cleaning including tracks and frames",
  "Detailed cleaning of all cabinetry, shelving, and closets",
  "Light fixture and ceiling fan cleaning",
  "Baseboard, trim, and door frame detailing",
  "Tile, grout, and countertop scrubbing",
  "Paint overspray and adhesive residue removal",
  "Bathroom sanitizing including toilets, showers, and sinks",
  "Kitchen cleaning including inside appliances and countertops",
  "Floor cleaning — vacuuming, mopping, and polishing",
  "Final walk-through inspection and quality check",
];

const hazards = [
  {
    title: "Silica Dust",
    body: "Generated from cutting concrete, stone, and brick. Silica particles are invisible to the eye and can cause serious respiratory disease with prolonged exposure. HEPA filtration is required for safe removal.",
  },
  {
    title: "Volatile Organic Compounds (VOCs)",
    body: "Off-gassed from fresh paint, adhesives, sealants, and flooring materials. VOCs can cause headaches, nausea, and long-term health effects if spaces aren\u2019t properly ventilated and cleaned after construction.",
  },
  {
    title: "Lead & Asbestos",
    body: "Renovation of older buildings (pre-1990) can disturb lead paint and asbestos-containing materials. These require specialized handling and disposal procedures that go beyond standard cleaning.",
  },
  {
    title: "Airborne Particles",
    body: "Construction dust doesn\u2019t settle immediately. Fine particles remain airborne for hours or days and can contaminate HVAC systems if not properly captured with HEPA equipment during cleaning.",
  },
  {
    title: "Surface Damage Risk",
    body: "Improper cleaning methods can scratch new countertops, damage fresh paint, or dull new flooring. Post-construction cleaning requires knowledge of which products and techniques are safe for each surface.",
  },
];

const whyChooseItems = [
  {
    title: "Eco-Friendly Products",
    desc: "Non-toxic, environmentally responsible cleaning products that are safe for new construction environments and future occupants.",
  },
  {
    title: "7-Day Availability",
    desc: "Construction timelines don\u2019t follow business hours. We\u2019re available seven days a week, including evenings, to meet your schedule.",
  },
  {
    title: "Residential, Commercial & Industrial",
    desc: "From single-unit condo renovations to multi-floor commercial buildouts and industrial facilities — we scale our team to match the scope.",
  },
  {
    title: "Background-Checked Teams",
    desc: "Every team member is vetted, trained, and insured. We understand that construction sites often have sensitive materials and expensive finishes.",
  },
  {
    title: "Free Estimates",
    desc: "We provide detailed, no-obligation quotes based on an on-site or virtual assessment of your project.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    desc: "If anything doesn\u2019t meet your standards within 24 hours, we return to address it at no extra charge.",
  },
];

const pricingTiers = [
  {
    label: "Condos & Small Renovations",
    range: "$500 \u2013 $1,000",
    detail: "Single-room remodels, bathroom or kitchen renovations, small condo units.",
  },
  {
    label: "Average Homes",
    range: "$1,000 \u2013 $2,500",
    detail: "Full home renovations, multi-room remodels, standard new construction homes.",
  },
  {
    label: "Large Homes & Commercial",
    range: "$2,500 \u2013 $5,000+",
    detail: "Large custom homes, multi-unit projects, commercial tenant improvements, industrial spaces.",
  },
];

const processSteps = [
  {
    title: "Request Your Free Estimate",
    body: "Call (604) 671-6252 or book online. Tell us about your project size and construction type, and we\u2019ll provide a transparent quote with no obligation.",
  },
  {
    title: "On-Site or Virtual Assessment",
    body: "We assess actual site conditions \u2014 debris level, dust distribution, surface types \u2014 to confirm scope and finalize your quote before work begins.",
  },
  {
    title: "Our Team Arrives Prepared",
    body: "Your post-construction crew arrives with HEPA equipment, surface-specific products, and professional tools sized to the project. We\u2019re ready to start immediately.",
  },
  {
    title: "Phase-by-Phase Cleaning",
    body: "We work through all three phases \u2014 debris removal, detailed cleaning, and final polish \u2014 systematically to ensure no dust or residue is missed or recontaminates cleaned surfaces.",
  },
  {
    title: "Quality Walk-Through Inspection",
    body: "Before completion, we conduct a thorough inspection of every surface and area. If anything doesn\u2019t meet move-in or handover standards, we address it on the spot.",
  },
  {
    title: "Move-In or Handover Ready",
    body: "Your space is left spotless, dust-free, and safe for occupants. We coordinate timing with contractors or property managers to meet your inspection or handover deadlines.",
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

const benefitCards = [
  {
    title: "HEPA Dust Elimination",
    body: "HEPA-filtered vacuums capture 99.97% of fine particles including silica dust and drywall residue that recirculate with standard equipment, protecting new HVAC systems and occupant health.",
  },
  {
    title: "Surface Protection",
    body: "Our technicians know which products and techniques are safe for new countertops, fresh paint, and new flooring \u2014 preventing costly scratches, stains, or damage during cleanup.",
  },
  {
    title: "VOC & Residue Removal",
    body: "We remove adhesive compounds, paint overspray, caulking residue, and construction film from glass, hardware, and surfaces without damaging new finishes.",
  },
  {
    title: "Flexible Project Timing",
    body: "We coordinate with your construction schedule, working between trades or after final completion to ensure the space is ready for inspection, occupancy, or handover on your timeline.",
  },
  {
    title: "Eco-Friendly Process",
    body: "Every product we use is non-toxic and biodegradable \u2014 effective at removing construction residue while being safe for new surfaces, future occupants, and the environment.",
  },
  {
    title: "MINT25: 10% Off First Clean",
    body: "New clients save 10% on their first post-construction cleaning with promo code MINT25. Call (604) 671-6252 for a free estimate and to redeem your discount.",
  },
];

const faqItems = [
  {
    question:
      "Why is post-construction cleaning different from regular cleaning?",
    answer:
      "Construction leaves behind fine silica dust, drywall particles, paint overspray, adhesive residue, and VOCs that standard cleaning products and methods can\u2019t safely remove. Post-construction cleaning requires HEPA filtration, specialized products, and trained crews who understand how to clean new surfaces without damaging them.",
  },
  {
    question: "How long does post-construction cleaning take?",
    answer:
      "Timing depends on project size and the level of debris. A small condo renovation might take 4\u20138 hours. A full home build typically takes 1\u20132 days. Large commercial projects can take 3\u20135 days or more. We provide a time estimate with every quote.",
  },
  {
    question: "Do you clean both residential and commercial properties?",
    answer:
      "Yes. We handle post-construction cleaning for single-family homes, condos, townhouses, commercial tenant improvements, retail buildouts, office renovations, and industrial facilities.",
  },
  {
    question: "Do you use eco-friendly products?",
    answer:
      "Yes. All of our cleaning products are non-toxic and eco-friendly. They\u2019re effective at removing construction residue while being safe for new surfaces, future occupants, and the environment.",
  },
  {
    question: "Can I get a quote before the project is finished?",
    answer:
      "Yes. We can provide a preliminary estimate based on project scope, square footage, and construction type. We finalize the quote once trades are complete and we can assess the actual site conditions.",
  },
  {
    question: "Do you handle debris removal and disposal?",
    answer:
      "Yes. Phase 1 of our process includes full debris removal, packaging disposal, and bulk material clearing. We coordinate with your contractor or waste removal service as needed.",
  },
  {
    question: "What is HEPA filtration and why does it matter?",
    answer:
      "HEPA (High-Efficiency Particulate Air) filters capture 99.97% of particles 0.3 microns and larger. Construction dust \u2014 especially silica \u2014 contains particles this small. Standard vacuums recirculate these particles into the air. HEPA filtration traps them permanently.",
  },
  {
    question: "Can you clean before final inspection?",
    answer:
      "Yes. Many contractors schedule us between their final punch-list work and the official inspection or client walkthrough. We coordinate timing to ensure the space is ready when inspectors or owners arrive.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Yes. If anything doesn\u2019t meet your standards within 24 hours of service, we return to address it at no extra charge.",
  },
  {
    question: "How much does post-construction cleaning cost?",
    answer:
      "Small condo renovations start around $500\u2013$1,000. Average home builds run $1,000\u2013$2,500. Large homes and commercial projects range from $2,500\u2013$5,000+. Call (604) 671-6252 for a free, detailed quote. New clients receive a 10% discount.",
  },
];

export default function PostConstructionCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Post-Construction Cleaning in North Vancouver"
      heroImage="/post-construction-cleaning-north-vancouver.jpg"
      heroSubtitle="New Build & Renovation Cleanup"
      heroIntro="After construction ends, a thorough post-construction clean is essential before move-in or opening. Mint Sanitary handles renovation dust, construction debris, adhesive residue, and fine particles using HEPA equipment and eco-friendly products. Serving North Vancouver 7 days a week. Use code MINT25 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready to Clean Up After Construction?"
      ctaBody="Call Mint Sanitary at (604) 671-6252 or book online. 7-day availability, HEPA equipment, eco-friendly products. Use code MINT25 for 10% off your first booking."
    >
      {/* ── Image + Text: What Is Post-Construction Cleaning ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/post-construction-cleaning-north-vancouver.jpg"
                alt="Post-construction cleaning in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                HEPA Equipment &amp; Eco-Friendly Products
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Post-Construction Cleaning?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Post-construction cleaning is a specialized service that removes
                the dust, debris, and residue left behind after building,
                renovation, or remodeling work. It goes far beyond what standard
                cleaning can handle.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Construction generates silica dust, drywall particles, paint
                overspray, adhesive residue, and VOCs from fresh paint, sealants,
                and flooring materials. These contaminants require HEPA-filtered
                equipment, surface-specific products, and trained technicians who
                know how to clean new finishes without damaging them.
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

      {/* ── What's Included — Card Grid ──────────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="rounded-[14px] bg-white p-5 shadow-sm"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {phase.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {phase.items.map((item) => (
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
              Complete Post-Construction Checklist
            </h3>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 md:grid-cols-2">
              {whatsIncluded.map((item) => (
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

      {/* ── Health & Safety Hazards — Blue Section ───────────── */}
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
            Health &amp; Safety Hazards of Construction Residue
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Construction residue isn&apos;t just unsightly — it&apos;s a health and
            safety concern. Here are the main hazards that professional
            post-construction cleaning addresses.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            {hazards.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Without professional post-construction cleaning, fine dust settles
            into HVAC ductwork and recirculates for months. New surfaces can be
            scratched or stained by improper cleaning, and occupants are exposed
            to harmful airborne particles. Call{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            to discuss your project.
          </p>
        </div>
      </section>

      {/* ── Process Steps — Numbered Circles ─────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Post-Construction Cleaning Process: Step by Step
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

      {/* ── Why Choose — Image + Accordion ───────────────────── */}
      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Post-Construction Cleaning"
        intro="We&apos;re not just another cleaning company. Mint Sanitary brings HEPA equipment, trained crews, and eco-friendly products to every post-construction project in North Vancouver."
        image="/post-construction-kitchen-cleaning-north-vancouver.jpg"
        imageAlt="Post-construction kitchen cleaning in North Vancouver"
        items={whyChooseItems.map((item) => ({
          title: item.title,
          body: item.desc,
        }))}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Transparent Pricing
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Post-Construction Cleaning Pricing &amp; Free Quote
              </h2>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/post-construction-cleaning-north-vancouver.jpg"
                alt="Post-construction cleaning pricing in North Vancouver"
                className="h-[280px] w-full object-cover sm:h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Post-construction cleaning pricing depends on project size,
            construction type, and the level of debris and dust remaining.
            Here are typical ranges for North Vancouver projects:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                  {tier.label}
                </p>
                <p className="mt-2 font-body text-[22px] font-extrabold text-[#4E5062]">
                  {tier.range}
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {tier.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Every project is different. The best way to get an accurate price
              is a free on-site or virtual estimate. Call{" "}
              <a
                href="tel:+16046716252"
                className="underline underline-offset-2"
              >
                (604) 671-6252
              </a>{" "}
              or{" "}
              <a href="/contact" className="underline underline-offset-2">
                request a quote online
              </a>
              . Use code MINT25 for 10% off your first booking. See full pricing
              details on our{" "}
              <a href="/rates/" className="underline underline-offset-2">
                rates page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Areas — Chips + Map ───────────────────────── */}
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
                Mint Sanitary provides post-construction cleaning across all
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
                trusted team, same HEPA equipment, same eco-friendly products
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

      {/* ── Benefits / Bonus Cards — Image + Cards ────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Safe, Move-In Ready Results
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Professional Post-Construction Cleaning Matters
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Post-construction cleaning isn&apos;t just about appearances. It
                protects occupant health, preserves new finishes, and ensures
                your space is genuinely safe and ready for move-in or handover.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/post-construction-kitchen-cleaning-north-vancouver.jpg"
                alt="Post-construction kitchen cleaned and ready in North Vancouver"
                className="h-[300px] w-full object-cover sm:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefitCards.map((benefit) => (
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
