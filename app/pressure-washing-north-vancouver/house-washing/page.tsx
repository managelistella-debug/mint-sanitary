import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "House Washing North Vancouver | Professional Soft Wash Cleaning",
  description:
    "Professional house washing and soft wash cleaning in North Vancouver. Safe for all siding types. 10% off first clean with code MINT25. Free estimates, 7 days a week.",
};

const whatIncludes: { title: string; body: string }[] = [
  {
    title: "Siding",
    body: "All wall surfaces including vinyl, stucco, Hardie board, wood, and cedar.",
  },
  {
    title: "Fascia and Soffits",
    body: "Roof edge trim and soffit underhangs where algae commonly accumulates.",
  },
  {
    title: "Foundation and Trim",
    body: "Home base and window and door frames.",
  },
  {
    title: "Window Exteriors",
    body: "Glass panes and exterior frames cleaned safely without damaging seals.",
  },
  {
    title: "Gutters and Downspouts",
    body: "Surface cleaning (debris removal available separately).",
  },
  {
    title: "Exterior Trim Boards",
    body: "All painted wood or vinyl trim around doors and windows.",
  },
];

const sidingTypes: { title: string; body: string }[] = [
  {
    title: "Vinyl Siding (Most Common in North Vancouver)",
    body: "Vinyl is the predominant siding choice across North Vancouver neighborhoods like Lower Lonsdale and Edgemont Village. While vinyl tolerates moderate pressure (up to 1,300 to 1,600 PSI with professional equipment), soft wash is preferred to avoid risk of bending or cracking panels. Biodegradable detergents remove oxidation and discoloration that make vinyl look aged. Soft wash also prevents water seepage between seams, which is critical in North Vancouver\u2019s rainy climate.",
  },
  {
    title: "Stucco (Popular in West and North Vancouver)",
    body: "Stucco is porous and highly susceptible to pressure damage. Cracks from high-pressure spray allow water to penetrate into the substrate, causing interior mold and structural issues. Soft wash is essential for stucco homes in neighborhoods like Deep Cove and Seymour Heights. We use oxygen-based or non-chlorine cleaning solutions to avoid discoloration and preserve the sealant that protects porous stucco from the elements.",
  },
  {
    title: "Hardie Board and Fiber Cement (BC Standard for Modern Homes)",
    body: "James Hardie, the manufacturer of North America\u2019s leading fiber cement siding, explicitly recommends soft wash only. Pressure washing voids the product warranty and causes accelerated wear. Hardie board homes are common in newer North Vancouver developments. We follow manufacturer guidelines using soft brush plus low-pressure application at 500 to 800 PSI maximum, maintaining paint integrity and preventing premature failure.",
  },
  {
    title: "Cedar and Wood Siding",
    body: "Cedar siding appears on premium homes throughout North Vancouver. These surfaces demand careful, chlorine-free cleaning. Harsh chemicals strip color, damage wood fibers, and allow mold spores deeper penetration. Soft wash with plant-safe, wood-safe detergents preserves the natural finish and character of cedar while removing algae and mildew that thrive in shade and high humidity.",
  },
  {
    title: "Aluminum Siding (Less Common)",
    body: "Aluminum responds well to soft wash with low-pressure application. Biodegradable solutions prevent oxidation staining and restore the finish without scratching or corrosion.",
  },
];

const whyMatters: { title: string; body: string }[] = [
  {
    title: "Curb Appeal and Home Value",
    body: "Clean siding dramatically impacts buyer perception. Homes with strong curb appeal sell 7% faster and command higher prices. The perception gap is real: a dirty exterior makes even a pristine interior feel neglected. Professional house washing in North Vancouver can add $10,000 to $15,000 in perceived buyer value, far exceeding the $300 to $500 investment.",
  },
  {
    title: "Prevent Accelerated Damage",
    body: "Mold and algae don\u2019t just sit on the surface. They feed on organic material in paint and siding, causing paint failure, wood rot, and siding degradation. Algae growth in shaded areas of North Vancouver homes (especially north-facing walls) accelerates material breakdown. Soft wash removes contaminants at the source before they cause structural damage.",
  },
  {
    title: "Extend Paint Life",
    body: "Regular soft washing extends exterior paint longevity by 3 to 5+ years. Clean siding allows paint to adhere properly and prevents the early failure that follows organic buildup. For a North Vancouver home refinish costing $3,000 to $5,000, annual soft washing is a bargain maintenance expense.",
  },
  {
    title: "Mold and Algae Prevention",
    body: "North Vancouver\u2019s climate, with high precipitation and coastal humidity, creates ideal conditions for algae and mold. Shaded areas under eaves and north-facing walls trap moisture where spores thrive. Professional soft wash kills spores at the source, preventing regrowth for 12 to 24 months. DIY pressure washing only removes surface growth, allowing spores to regrow in 3 to 6 months, making professional soft wash far more cost-effective long-term.",
  },
  {
    title: "Pre-Sale Preparation",
    body: "If you\u2019re selling a North Vancouver home, timing house washing 1 to 2 weeks before listing photography is critical. Clean siding in online photos drives click-through rates and increases showing requests. Buyers form first impressions from photos, and a clean exterior signals a well-maintained home worth making an offer on.",
  },
  {
    title: "Health and Safety",
    body: "Mold and algae produce allergens and spores that can aggravate respiratory issues. Removing them from exterior surfaces reduces indoor air contamination, especially important in homes where children or elderly family members have sensitivities.",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "Inspection and Preparation",
    body: "Our team begins with a thorough visual assessment. We identify siding materials, note any delicate areas requiring extra care (like decorative trim or nearby plants), and assess the severity of algae, mold, or dirt accumulation. We protect landscaping, gardens, and outdoor furniture before any cleaning begins.",
  },
  {
    title: "Solution Application",
    body: "We apply biodegradable cleaning solution using a low-pressure wand. The surfactant in the solution helps it penetrate and adhere to algae, mold, and mildew growth. Solution concentration is customized based on siding material and contamination level. Stucco requires gentler application than vinyl, and wood needs plant-safe formulations.",
  },
  {
    title: "Dwell Time",
    body: "The solution sits on the siding for 10 to 15 minutes. During this time, the biocide breaks down and kills organic growth at the cellular level. This dwell period is why soft wash produces longer-lasting results than pressure washing. The solution does the cleaning, not force.",
  },
  {
    title: "Gentle Rinse",
    body: "After dwell time, we rinse thoroughly with low-pressure water, removing loosened debris and solution residue. Low pressure allows gravity and natural drainage to carry water away from the home, preventing water intrusion behind siding. The slow rinse is essential, especially on stucco and wood where rapid water movement can cause damage.",
  },
  {
    title: "Final Inspection",
    body: "We verify that all areas are cleaned to specification, no cleaning solution remains on surfaces, and landscaping is undamaged. This attention to detail ensures the quality finish your home deserves.",
  },
];

const whyChoosePoints: { title: string; body: string }[] = [
  {
    title: "Local Expertise",
    body: "We understand North Vancouver\u2019s climate, common siding materials, and neighborhood-specific challenges. Lynn Valley\u2019s mature tree canopy, Deep Cove\u2019s coastal moisture, and Edgemont Village\u2019s older home stock all demand tailored approaches. We\u2019ve cleaned thousands of North Vancouver homes and know exactly how to handle your property.",
  },
  {
    title: "Soft Wash Specialists",
    body: "We\u2019re certified in BC-standard low-pressure methodology for all siding materials. We specialize in soft wash, not pressure washing, protecting your investment.",
  },
  {
    title: "Free Estimates",
    body: "No pressure, no obligation. We assess your home\u2019s specific needs and provide accurate pricing before any commitment. Call (604) 671-6252.",
  },
  {
    title: "Eco-Friendly Credentials",
    body: "Biodegradable solutions and water-conscious practices align with North Vancouver values.",
  },
  {
    title: "7-Day Availability",
    body: "We work weekdays, weekends, and holidays. Schedule at your convenience. Same-day or next-day service is often available for urgent pre-sale preparation.",
  },
  {
    title: "10% First-Time Discount",
    body: "New customers save with code MINT25.",
  },
  {
    title: "Satisfaction Guaranteed",
    body: "Professional workmanship backed by attention to detail and customer service.",
  },
];

const faqItems: { question: string; answer: string }[] = [
  {
    question:
      "What is the difference between soft wash and pressure washing for my North Vancouver house?",
    answer:
      "Soft wash uses low-pressure water (under 500 PSI) combined with biodegradable detergent to safely remove algae, mold, and dirt from siding, fascia, and trim. It kills contaminants at the source, preventing regrowth for 12 to 24 months. Pressure washing uses 1,300 to 3,000+ PSI and is best for concrete only, since it risks damaging vinyl siding, stucco, Hardie board, and paint on North Vancouver homes. BC standard practice favors soft wash for residential exteriors.",
  },
  {
    question:
      "Will professional house washing damage my vinyl siding or stucco in North Vancouver?",
    answer:
      "No. Professional soft washing will not damage siding when performed correctly. High-pressure washing can bend or crack vinyl panels and cause water intrusion behind stucco, but our low-pressure soft wash is safe for all siding types. Hardie board manufacturers specifically recommend soft wash only, as pressure washing voids warranties. Stucco is porous and cracks easily under pressure; soft wash is the only safe method for North Vancouver stucco homes.",
  },
  {
    question:
      "How long do house washing results last in North Vancouver\u2019s climate?",
    answer:
      "Professional soft wash results typically last 12 to 24 months in North Vancouver, depending on shade exposure and climate. Shaded areas in neighborhoods like Lower Lonsdale with mature trees may see algae regrowth in 12 to 18 months. Annual washing keeps siding clean and prevents spore buildup. More frequent washing every 6 months is recommended for heavily shaded or north-facing walls typical in Seymour Heights and Deep Cove.",
  },
  {
    question:
      "Can house washing help sell my North Vancouver home faster?",
    answer:
      "Yes, significantly. Homes with strong curb appeal sell 7% faster and for higher prices on average. Professional exterior cleaning can add $10,000 to $15,000 in perceived buyer value. Clean siding in listing photos increases online click-through rates and showing requests dramatically. Scheduling house washing 1 to 2 weeks before photography and showings creates the strongest first impression and is one of the highest-ROI improvements before sale.",
  },
  {
    question:
      "What does professional house washing include in North Vancouver?",
    answer:
      "Our house washing service covers all exterior surfaces: siding (vinyl, stucco, Hardie board, wood, cedar), fascia and soffits, foundation trim, window exteriors, gutters, and exterior trim boards. We protect landscaping and delicate plants during the process. Optional add-ons include gutter cleaning, roof soft wash, and window washing for a complete exterior refresh.",
  },
  {
    question: "How much does house washing cost in North Vancouver?",
    answer:
      "Pricing depends on home size and stories. Single-story homes (1,500 to 2,000 sq ft) typically cost $170 to $360. Two-story homes (2,500 to 3,500 sq ft) range from $450 to $850+. Exact pricing is determined by square footage of exterior wall area, siding material type, and level of soiling. We provide free estimates to give you accurate pricing before commitment. New customers save 10% with code MINT25.",
  },
  {
    question:
      "How often should I have my North Vancouver house washed?",
    answer:
      "Annual soft washing is recommended for most North Vancouver homes to prevent mold and algae buildup and maintain curb appeal. Homes in high-shade areas or with north-facing walls may need washing every 6 months. Regular gutter maintenance and tree pruning reduce growth frequency. Spring and fall are ideal times for seasonal maintenance in our climate.",
  },
  {
    question:
      "Is soft washing safe for my plants and landscaping in North Vancouver?",
    answer:
      "Yes, completely. Mint Sanitary uses biodegradable, eco-friendly cleaning solutions and applies them with care to protect plants, gardens, and shrubs. We protect delicate vegetation before washing begins. The solution is plant-safe and breaks down naturally post-rinse, posing no risk to outdoor gardens, landscaping, or groundwater.",
  },
  {
    question:
      "Can I DIY house washing instead of hiring a professional in North Vancouver?",
    answer:
      "While DIY pressure washer rental is cheaper upfront, professional soft washing offers significantly better value. Pressure washers ($75 to $150/day rental) risk $1,000+ in siding damage if used incorrectly. Professional crews save 6 to 8+ hours of personal labor, use correct chemistry to kill spores at the source (preventing rapid regrowth), and carry liability insurance. Professional results last 12 to 24 months versus 3 to 6 months for DIY attempts, making professional service more cost-effective over time.",
  },
  {
    question:
      "What if my North Vancouver home has multiple siding types?",
    answer:
      "We assess each siding material (vinyl, stucco, Hardie board, cedar, etc.) and apply the appropriate soft wash method for each. Different materials require different solution strengths and techniques to avoid damage while achieving thorough cleaning. Our expertise ensures every exterior element receives proper care. Free estimates include material-specific assessment.",
  },
];

export default function HouseWashingPage() {
  return (
    <ServicePageLayout
      title="House Washing in North Vancouver"
      heroImage="/pressure-washing-house-washing-north-vancouver.webp"
      heroIntro="Your home is one of your biggest investments. When dirt, algae, and mold accumulate on exterior siding, it doesn't just look neglected. It accelerates paint decay and material damage that costs thousands to repair. Mint Sanitary brings professional soft wash expertise to North Vancouver homes, removing stubborn stains safely while protecting vinyl, stucco, Hardie board, and cedar siding. We're available 7 days a week to deliver clean, beautiful results across North Vancouver."
      faqItems={faqItems}
      ctaHeading="Get Your Free House Washing Estimate Today"
      ctaBody="Your North Vancouver home deserves professional care. Let Mint Sanitary restore your exterior to its best appearance while protecting your investment for years to come. New customers save 10% with code MINT25. Call (604) 671-6252 or email hello@mintsanitary.com. Available 7 days a week."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What Is House Washing?
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            House washing is the safe, professional cleaning of all exterior
            home surfaces using soft wash methodology, using low-pressure water
            combined with biodegradable cleaning solutions. Unlike pressure
            washing, soft wash targets organic growth at the source, killing
            mold, algae, and mildew spores to prevent regrowth for 12 to 24
            months.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            This method covers every exterior element:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {whatIncludes.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Soft wash uses water pressure under 500 PSI, making it safe for all
            siding materials common in North Vancouver homes.
          </p>
        </div>
      </section>

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
            Soft Wash vs. Pressure Washing for Home Exteriors
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Homeowners often confuse house washing with pressure washing, but
            the two methods are fundamentally different, and the choice matters
            for your home&apos;s longevity.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Soft Wash (Recommended for All Residential Siding)
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Soft wash applies low-pressure water under 500 PSI alongside
                specialized biodegradable detergent. The cleaning solution does
                the work, not force. This method kills algae, mold, and mildew
                at the biological level, preventing regrowth for 12 to 24
                months. Results are longer-lasting because the biocide in the
                solution eliminates spores embedded in porous siding, wood, and
                trim. Soft wash is safe for vinyl, stucco, Hardie board, wood,
                and cedar, which are materials prone to damage from
                high-pressure spray.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Pressure Washing (For Hard Surfaces Only)
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Pressure washing delivers 1,300 to 3,000+ PSI, relying on force
                to strip away dirt and contaminants. This method works well for
                concrete driveways, patios, and sidewalks but poses serious
                risks to residential siding. High pressure can bend vinyl
                panels, crack stucco, force water behind siding causing interior
                rot, and strip paint from trim. Hardie board manufacturers
                explicitly void warranties if pressure washing is used. In
                British Columbia, soft wash has become the gold standard for
                residential cleaning precisely because PNW homes require
                protection from moisture intrusion and material damage.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-[14px] bg-white/10 p-6">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Why This Matters for North Vancouver Homes
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              North Vancouver&apos;s wet climate and coastal properties benefit
              from soft wash&apos;s gentleness. Homes here often feature vinyl
              siding, stucco facades, and Hardie board, all materials that
              demand low-pressure care. Choosing soft wash protects your
              investment and ensures results last through the rainy seasons.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Siding Types and Cleaning Approach
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Every siding material requires a tailored soft wash approach. North
            Vancouver homes feature a mix of materials, and each responds
            differently to cleaning solutions and pressure levels.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sidingTypes.map((s) => (
              <div key={s.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Why House Washing Matters in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Professional house washing delivers benefits far beyond appearance.
            For North Vancouver homeowners, a clean exterior is an investment in
            home longevity, market value, and peace of mind.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyMatters.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            The Soft Wash Process: What to Expect
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Professional soft wash follows a proven methodology that balances
            effectiveness with material safety. Here&apos;s exactly what happens
            when Mint Sanitary arrives at your North Vancouver home.
          </p>
          <div className="mt-10 space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#66DAD5]">
                  <span className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            House Washing Cost and Pricing
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Price varies based on home size, stories, siding material, and
            soiling level. Transparency helps you budget accurately.
          </p>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Pricing by Home Size
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-[14px] bg-white/10 p-5">
                <p className="font-body text-[15px] font-extrabold text-white">
                  Single-Story Homes
                </p>
                <p className="mt-1 font-body text-[13px] leading-[1.7] text-white/80">
                  1,500 to 2,000 sq ft
                </p>
                <p className="mt-2 font-body text-[17px] font-extrabold text-[#66DAD5]">
                  $170 to $360
                </p>
              </div>
              <div className="rounded-[14px] bg-white/10 p-5">
                <p className="font-body text-[15px] font-extrabold text-white">
                  Two-Story Homes
                </p>
                <p className="mt-1 font-body text-[13px] leading-[1.7] text-white/80">
                  2,500 to 3,500 sq ft
                </p>
                <p className="mt-2 font-body text-[17px] font-extrabold text-[#66DAD5]">
                  $450 to $850+
                </p>
              </div>
              <div className="rounded-[14px] bg-white/10 p-5">
                <p className="font-body text-[15px] font-extrabold text-white">
                  Three-Story Homes
                </p>
                <p className="mt-1 font-body text-[13px] leading-[1.7] text-white/80">
                  Custom quote due to specialized equipment
                </p>
                <p className="mt-2 font-body text-[17px] font-extrabold text-[#66DAD5]">
                  Contact for Quote
                </p>
              </div>
            </div>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Pricing generally ranges from $0.30 to $0.50 per square foot of
              exterior wall area.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Factors Affecting Cost
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="font-body text-[15px] leading-[1.7] text-white/80">
                Home size (square footage of all exterior walls)
              </li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">
                Number of stories (equipment and labor intensity increase with
                height)
              </li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">
                Siding material (stucco or Hardie board may cost slightly more
                than vinyl due to specialized solution requirements)
              </li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">
                Level of soiling (heavy algae or mold buildup requires extended
                dwell time)
              </li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">
                Travel distance within North Vancouver service areas
              </li>
            </ul>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            New customers receive 10% off first clean with code{" "}
            <strong className="font-extrabold text-white">MINT25</strong>. We
            provide free, no-pressure estimates so you know the exact cost
            before commitment. Call{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            or email{" "}
            <a
              href="mailto:hello@mintsanitary.com"
              className="underline underline-offset-2"
            >
              hello@mintsanitary.com
            </a>{" "}
            to schedule your free quote.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Professional vs. DIY House Washing
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            The upfront cost of hiring professionals exceeds pressure washer
            rental, but total value strongly favors professional service.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-[14px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Professional Advantages
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professionals assess your specific siding material and select
                the appropriate cleaning solution and pressure level. This
                expertise prevents damage that rental equipment in untrained
                hands causes regularly. We have liability insurance covering any
                accidental damage. Professional soft wash delivers
                longer-lasting results (12 to 24 months) because we use
                biocide-based solutions that kill spores, not just surface dirt.
                The time savings alone is significant. Professional crews
                complete 3,000 to 4,000 sq ft homes in 2 to 4 hours, while DIY
                typically requires 6 to 8+ hours plus equipment setup and
                cleanup.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                DIY Risks
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Pressure washer rentals cost $75 to $150 per day, plus cleaning
                solution expenses. High-pressure equipment in inexperienced
                hands frequently causes thousands in damage: vinyl panels bend
                and crack, water intrusion behind stucco, paint stripping, and
                permanent discoloration. The safety hazards are real. Ladder
                falls and pressure equipment injuries send homeowners to
                hospitals yearly. Without proper biocide solutions, DIY pressure
                washing removes only surface dirt, allowing mold and algae
                spores to regrow in 3 to 6 months, making the job feel
                never-ending.
              </p>
            </div>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            The professional choice protects your home and saves money over
            time.
          </p>
          <div className="mt-12">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h3 className="font-body text-[20px] font-extrabold text-[#4E5062]">
              Annual Maintenance Schedule for North Vancouver Homes
            </h3>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              How often should you schedule house washing? Climate, shade
              exposure, and siding material determine the answer.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Standard Recommendation
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Annual soft wash is appropriate for most North Vancouver
                  homes. This schedule prevents spore buildup, maintains curb
                  appeal, and catches early algae or mold before it causes
                  material damage.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  High-Frequency Areas
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Homes in high-shade zones (thick tree canopy, narrow lots with
                  neighboring buildings blocking sun) may need washing every 6
                  months. North-facing walls in Seymour Heights and Deep Cove,
                  where moisture lingers longer, also benefit from bi-annual
                  service.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Seasonal Timing
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Spring washing removes winter algae and mold accumulation;
                  fall cleaning prepares siding for the wet season. Many North
                  Vancouver homeowners schedule service in late March and early
                  September for seasonal coverage.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Prevention Through Maintenance
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Prune tree branches away from siding to reduce shade and
                  moisture, maintain gutters and keep downspouts directing water
                  away from the foundation, inspect roof shingles regularly
                  (algae on roofs spreads to siding), and watch for new stains
                  signaling early growth. These steps buy time between
                  professional washings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            Algae, Mold, and Pre-Sale Preparation
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Algae and Mold in North Vancouver&apos;s Wet Climate
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                North Vancouver&apos;s climate is perfect for mold and algae.
                They&apos;re different problems requiring different solutions.
              </p>
              <div className="mt-4 rounded-[14px] bg-white/10 p-5">
                <p className="font-body text-[15px] font-extrabold text-white">
                  Algae vs. Mold
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  Algae is green or brown, photosynthetic, and thrives in
                  moisture and sunlight. It&apos;s the most common growth on
                  North Shore homes, especially on south and west-facing walls
                  where sun exposure keeps the surface wet. Mold is black or
                  dark, allergenic, and grows in shade and high humidity without
                  needing light. Mold is a serious health concern, particularly
                  for households with respiratory sensitivities.
                </p>
              </div>
              <div className="mt-4 rounded-[14px] bg-white/10 p-5">
                <p className="font-body text-[15px] font-extrabold text-white">
                  Why North Vancouver Homes Are Vulnerable
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  The North Shore climate has high precipitation, coastal
                  humidity, and abundant shade from forest canopy, which is ideal
                  for organic growth. Older siding traps spores in porous
                  surfaces, and poorly draining gutters maintain constant
                  moisture. Homes in Lower Lonsdale with mature trees on
                  north-facing walls experience rapid mold regrowth.
                </p>
              </div>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Soft wash kills spores at the cellular level using biocide-based
                cleaning solutions. Results last 12 to 24 months because the
                spores are eliminated, not just the surface growth. DIY pressure
                washing removes visible growth but leaves spores intact,
                allowing regrowth in 3 to 6 months. Additionally, soft wash uses
                biodegradable, plant-safe solutions that protect the BC
                ecosystem with no toxic runoff into storm drains or harm to
                landscaping.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Combining annual soft wash with gutter maintenance, tree
                pruning, and roof inspection creates a defense system against
                regrowth. Each wash removes more embedded spores, gradually
                reducing future growth rates.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Pre-Sale Home Preparation: House Washing ROI
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Selling a North Vancouver home? House washing weeks before
                listing is one of the highest-ROI improvements you can make.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-[14px] bg-white/10 p-5">
                  <p className="font-body text-[15px] font-extrabold text-white">
                    Timing for Maximum Impact
                  </p>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                    Schedule soft washing 1 to 2 weeks before professional
                    listing photography and initial showings. This timing ensures
                    siding is pristine for photos while allowing any water marks
                    to dry and settle.
                  </p>
                </div>
                <div className="rounded-[14px] bg-white/10 p-5">
                  <p className="font-body text-[15px] font-extrabold text-white">
                    Financial Impact
                  </p>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                    Clean exterior can add $10,000 to $15,000 in perceived buyer
                    value. For a $500 to $600 soft wash investment, that&apos;s a
                    1,500 to 3,000% return before sale completion. In North
                    Vancouver&apos;s competitive market, a clean, well-maintained
                    exterior is often the deciding factor between multiple
                    offers.
                  </p>
                </div>
                <div className="rounded-[14px] bg-white/10 p-5">
                  <p className="font-body text-[15px] font-extrabold text-white">
                    Photo and First-Impression Advantage
                  </p>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                    Listing photos drive buyer behavior. A home with clean
                    siding, bright trim, and spotless foundation photographs
                    significantly better than the same home with algae and dirt.
                    Online presentation directly correlates with showing requests
                    and offer quality. Buyers making decisions in 10 seconds look
                    at photos first, and a dirty exterior is a fast turnoff.
                  </p>
                </div>
                <div className="rounded-[14px] bg-white/10 p-5">
                  <p className="font-body text-[15px] font-extrabold text-white">
                    Buyer Psychology
                  </p>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                    Dirt, algae, and stains trigger &quot;neglected home&quot;
                    signals in buyer minds, even if the interior is pristine. A
                    sparkling clean exterior communicates pride of ownership and
                    proper maintenance. It&apos;s a psychological advantage worth
                    thousands.
                  </p>
                </div>
              </div>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Pair house washing with{" "}
                <a
                  href="/gutter-cleaning-north-vancouver"
                  className="underline underline-offset-2"
                >
                  gutter cleaning in North Vancouver
                </a>{" "}
                and{" "}
                <a
                  href="/window-cleaning-north-vancouver"
                  className="underline underline-offset-2"
                >
                  window washing in North Vancouver
                </a>{" "}
                for a comprehensive exterior refresh that commands buyer
                attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Eco-Friendly Soft Wash and Why Choose Mint Sanitary
          </h2>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Eco-Friendly Soft Wash: Mint Sanitary&apos;s Approach
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Environmental stewardship matters. Our soft wash process is
              designed around biodegradable, plant-safe principles.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Biodegradable Solutions
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  We use eco-friendly cleaning agents that break down naturally
                  into harmless compounds. No high-bleach, industrial
                  formulations that damage plants, poison groundwater, or harm
                  aquatic life in local streams.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Plant and Landscape Protection
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Solutions are applied with care to protect gardens, shrubs,
                  and vegetable areas. We take precautions before spraying
                  begins. Post-rinse, there&apos;s no residual toxicity risk to
                  children, pets, or landscaping.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Water Efficiency
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Soft wash uses 80% less water than pressure washing. For homes
                  in water-conscious North Vancouver, this is a significant
                  environmental benefit. Low-pressure rinsing also prevents
                  excessive runoff that carries contaminants into storm drains
                  feeding the North Shore watershed.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  BC Environmental Responsibility
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Our soft wash methodology reflects BC values around
                  environmental protection. Low-pressure application prevents
                  contaminant runoff. Plant-safe solutions protect local
                  ecosystems. We&apos;re committed to cleaning homes while
                  preserving the natural beauty of North Vancouver and beyond.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="font-body text-[20px] font-extrabold text-[#4E5062]">
              Why Choose Mint Sanitary for House Washing in North Vancouver
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Mint Sanitary brings 7+ years of North Vancouver experience, local
              expertise, and a commitment to quality that sets us apart.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyChoosePoints.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[14px] bg-[#f4f8ff] p-5"
                >
                  <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
