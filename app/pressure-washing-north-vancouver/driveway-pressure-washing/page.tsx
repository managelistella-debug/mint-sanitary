import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Driveway Pressure Washing North Vancouver | Mint Sanitary",
  description:
    "Professional driveway pressure washing in North Vancouver. Eco-friendly cleaning, safe for all surfaces. Free estimate, code MINT25 for 10% off!",
};

const surfaceTypes = [
  {
    title: "Concrete Driveways",
    body: "Concrete is the most common driveway surface in North Vancouver. High-pressure water removes dirt, grime, mold, and mildew, restoring original color and texture. Standard concrete requires 2,500 to 3,000 PSI. For sealed or decorative concrete (stamped or colored), we use 2,000 to 2,500 PSI to protect the finish. Pressure washing also reveals the true condition of your surface, making cracks or spalling easier to spot. We recommend sealing after washing to protect freshly opened pores from moisture infiltration in North Vancouver\u2019s freeze-thaw climate.",
  },
  {
    title: "Asphalt Driveways",
    body: "Asphalt requires careful pressure washing to avoid damage. The ideal range is 1,500 to 2,800 PSI, which removes contaminants without stripping the protective oil layer. Over-pressurizing can remove up to 25% of the surface, accelerating deterioration. After cleaning, we recommend sealing to restore the protective layer.",
  },
  {
    title: "Paver and Stamped Concrete Driveways",
    body: "Pavers and stamped concrete are delicate and require precise technique. These surfaces need 1,200 to 2,000 PSI with a wide nozzle (25 to 40 degrees) to avoid dislodging bricks. After cleaning, joint sand may need replacement, a normal part of the process that ensures long-term stability.",
  },
  {
    title: "Oil Stain and Stubborn Stain Treatment",
    body: "Oil stains, rust marks, and heavily embedded grime require more than just high-pressure water. We apply eco-friendly pre-treatments (degreasers, poultice treatments, or enzymatic cleaners) that break down oils and contaminants at the chemical level. These sit for 10 to 15 minutes, allowing them to penetrate and dissolve the stain before pressure washing removes it completely. This professional approach is safer than DIY bleach attempts, which can damage your surface and harm nearby plants. Eco-friendly products achieve excellent results while protecting your family and landscaping.",
  },
];

const benefits = [
  {
    title: "Curb Appeal and Property Value",
    body: "A clean driveway is your property\u2019s largest horizontal surface and dramatically improves first impressions for buyers, guests, and neighbors.",
  },
  {
    title: "Safety: Slip Hazard Prevention",
    body: "Moss, algae, and mildew create slippery surfaces, especially in North Vancouver\u2019s rainy climate. Pressure washing eliminates these hazards for families with children or elderly residents.",
  },
  {
    title: "Longevity and Cost Savings",
    body: "Contaminants accelerate concrete and asphalt deterioration. Regular pressure washing extends driveway lifespan by years at far less cost than crack repair or replacement.",
  },
  {
    title: "Environmental Health",
    body: "Eco-friendly pressure washing prevents contaminants (oil, grease, metals) from entering stormwater systems, complying with Metro Vancouver regulations.",
  },
  {
    title: "Pre-Sale Preparation",
    body: "A professionally cleaned driveway is high-ROI for sellers. Buyers value spotless driveways as signs of property maintenance. Sealing after pressure washing further signals care and investment.",
  },
];

const processSteps = [
  {
    title: "Pre-Cleaning Inspection",
    body: "Our technician begins with a thorough assessment of your driveway. We identify the surface type (concrete, asphalt, or pavers), evaluate existing damage (cracks, weak spots, or spalling), and document stains (oil, rust, mold). This inspection determines the correct PSI, water flow rate, nozzle angle, and any specialized pre-treatments your driveway needs. We also discuss aftercare and sealing options with you so you can make informed decisions.",
  },
  {
    title: "Surface Preparation",
    body: "We clear loose debris and pre-wet the area with low-pressure water. For stubborn stains, we apply eco-friendly pre-treatments and allow 10 to 15 minutes for them to work. This preparation maximizes effectiveness and reduces time and pressure needed.",
  },
  {
    title: "High-Pressure Washing",
    body: "We start with a wide spray nozzle, maintaining 6 to 12 inches from the surface in steady strokes. We pay special attention to seams, edges, and high-traffic areas. For pavers, we use a surface cleaner or wide nozzle to protect joints.",
  },
  {
    title: "Rinsing",
    body: "We perform a thorough final rinse with clean water to remove soap residue and debris. We use a squeegee to clear excess water, speeding drying and revealing any missed spots.",
  },
  {
    title: "Drying and Final Inspection",
    body: "We inspect the cleaned driveway. Concrete typically requires 24 hours to dry before sealing. We discuss any remaining stains and sealing options. Same-day sealing is often possible once the surface dries, or we schedule separately based on weather and time.",
  },
];

const diyRisks = [
  {
    title: "Concrete Spalling and Cracking",
    body: "Excessive pressure damages concrete, creating pitting, spalling, and cracks. Repairs cost $500 to $3,000+.",
  },
  {
    title: "Asphalt Surface Stripping",
    body: "Over-pressurizing strips 25%+ of the surface layer, accelerating deterioration. Full repaving is the only fix.",
  },
  {
    title: "Paver Dislodgement",
    body: "High-pressure dislodges pavers and loosens joint sand. Repairs quickly consume any cost savings.",
  },
  {
    title: "Seal Damage",
    body: "Incorrect pressure strips existing sealers or damages freshly applied ones before they protect your surface.",
  },
  {
    title: "Injury Risk",
    body: "Pressure jets cause serious cuts, bruises, and embedded debris injuries. Improper handling is dangerous.",
  },
  {
    title: "Water Damage",
    body: "Misdirected pressure forces water into foundations and crawlspaces, causing expensive damage.",
  },
  {
    title: "Environmental Harm",
    body: "Uncontrolled discharge of chemicals violates Metro Vancouver stormwater regulations.",
  },
  {
    title: "Incomplete Cleaning",
    body: "Rental equipment lacks precision. Results are uneven with stubborn stains remaining.",
  },
];

const sealerTypes = [
  {
    title: "Acrylic Sealers",
    body: "Affordable with good UV protection for residential driveways.",
  },
  {
    title: "Penetrating Sealers",
    body: "Work deeper into pores for excellent moisture barriers, highly effective in wet climates.",
  },
  {
    title: "Eco-Friendly Options",
    body: "Green sealers protect local waterways while delivering excellent performance.",
  },
];

const pricingExamples = [
  { size: "300 sq ft", condition: "Light cleaning", cost: "$100 to $150" },
  {
    size: "500 sq ft",
    condition: "Moderate (moss, grime)",
    cost: "$150 to $250",
  },
  {
    size: "800 sq ft",
    condition: "Heavy (oil stains, mold)",
    cost: "$250 to $400",
  },
  {
    size: "500 sq ft + sealing",
    condition: "Moderate with sealing",
    cost: "$200 to $350",
  },
];

const whyChoosePoints = [
  {
    title: "Local Expertise and 7-Day Availability",
    body: "North Vancouver based with seven days a week service including weekends. We understand our region\u2019s wet winters, freeze-thaw cycles, and hillside drainage challenges.",
  },
  {
    title: "Eco-Friendly Cleaning Products",
    body: "Professional-grade green products protect your family and comply with Metro Vancouver stormwater regulations. Your landscape stays safe and local waterways remain protected.",
  },
  {
    title: "Free Estimates and Transparent Pricing",
    body: "No hidden fees. Honest pricing at $0.30 to $0.55 per square foot with clear minimums. You know the exact cost before we begin.",
  },
  {
    title: "Fully Insured and Guaranteed",
    body: "Our insurance covers accidental damage. We stand behind our work with a satisfaction guarantee.",
  },
  {
    title: "Professional Team and Equipment",
    body: "Trained technicians using professional-grade equipment for concrete, pavers, and all common surface types.",
  },
  {
    title: "10% First-Clean Discount",
    body: "New customers save with code MINT25 on your first service.",
  },
  {
    title: "Responsive and Convenient",
    body: "Most North Vancouver driveways cleaned in one to two hours with minimal disruption to your schedule.",
  },
  {
    title: "Aftercare Support",
    body: "We discuss sealing benefits, explain long-term maintenance, and help you protect your investment.",
  },
];

const faqItems = [
  {
    question:
      "How often should I pressure wash my driveway in North Vancouver?",
    answer:
      "Most homeowners benefit from pressure washing every one to two years. North Vancouver\u2019s rainy environment with high moisture creates conditions for rapid moss and algae growth, so we recommend annual cleaning if your driveway is shaded or in a damp location. Oil stains may require more frequent attention. During your free estimate, our team can assess your specific situation and recommend an ideal cleaning schedule for your North Vancouver property.",
  },
  {
    question: "Is pressure washing safe for all driveway surfaces?",
    answer:
      "Pressure washing is safe when executed by professionals using proper PSI settings for your surface type. In North Vancouver, concrete can safely handle 2,500 to 3,000 PSI, asphalt requires 1,500 to 2,800 PSI, and pavers need 1,200 to 2,000 PSI. Using incorrect pressure for your surface damages driveways and creates expensive repair bills. This is why DIY pressure washing is risky, and professional service in North Vancouver always ensures your surface is protected.",
  },
  {
    question: "Will pressure washing damage my concrete driveway?",
    answer:
      "Professional pressure washing will not damage properly maintained concrete. Poor technique causes damage: excessive pressure, keeping the nozzle focused on one spot too long, or using narrow nozzles can cause spalling or cracking. Professional technicians use wide spray angles, maintain proper distance, and apply correct PSI for your North Vancouver concrete driveway. If your concrete is already cracked or significantly deteriorated, let us know during your estimate. Sometimes sealing or targeted repair is a better first step than pressure washing.",
  },
  {
    question: "Can you remove oil stains from my driveway?",
    answer:
      "Yes, with proper pre-treatment and professional technique. Fresh oil stains are easier to remove than old, deeply embedded ones that have been sitting for months or years. Mint Sanitary uses eco-friendly degreasers and specialized pre-treatments like poultice or enzymatic cleaners to break down oils without harsh chemicals. Heavy oil stains may require multiple applications or additional service time. During your free North Vancouver estimate, we\u2019ll assess stain severity and provide realistic expectations.",
  },
  {
    question: "What if my driveway has moss or algae?",
    answer:
      "Moss and algae are extremely common in North Vancouver due to our moisture-rich environment and shade from trees. Pressure washing removes the surface growth, but eco-friendly pre-treatment kills spores and reduces regrowth rates. Sealing after pressure washing helps prevent rapid return. Keeping gutters clean and improving drainage around your driveway in North Vancouver reduces moss recurrence naturally. Annual cleaning is often worth the cost for damp or shaded properties.",
  },
  {
    question: "Do I need to seal my driveway after pressure washing?",
    answer:
      "Sealing is strongly recommended. Pressure washing exposes the pores of concrete, and sealing creates a protective barrier against moisture, stains, and weather damage. In North Vancouver\u2019s freeze-thaw climate, unsealed concrete deteriorates much faster than sealed surfaces. Sealing extends your driveway lifespan by five to ten or more years and costs far less than major repairs or replacement. Most professionals recommend sealing within 24 hours after pressure washing.",
  },
  {
    question:
      "How long does driveway pressure washing take in North Vancouver?",
    answer:
      "An average driveway of 500 to 800 square feet takes one to two hours from arrival to completion. Time varies by size, condition, and stain severity. Heavy buildup, mold, or oil stains may add 30 to 60 minutes for pre-treatment and extra scrubbing. Larger driveways or additional services like sealing or sidewalk cleaning extend the time accordingly. Mint Sanitary provides a time estimate during your free on-site quote for your North Vancouver property.",
  },
  {
    question:
      "What happens if it rains after my driveway is pressure washed?",
    answer:
      "Rain shortly after washing is not ideal but not catastrophic. Ideally, allow 24 hours dry time before rain, especially if sealing is planned. If rain occurs within a few hours of pressure washing, the surface will dry naturally as temperature rises. If sealing is scheduled, we\u2019ll advise whether weather delays the application and adjust your appointment accordingly.",
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer:
      "Yes. Mint Sanitary prioritizes eco-friendly and green cleaning products to protect local stormwater systems and the North Vancouver environment. Metro Vancouver has strict regulations on discharge of chemicals and pollutants into stormwater drains. Our professional-grade eco products effectively remove mold, algae, oil, and grime without harsh toxins that harm waterways. Details on specific products used for your North Vancouver pressure washing are provided upon request.",
  },
  {
    question:
      "How much does driveway pressure washing cost in North Vancouver?",
    answer:
      "Professional driveway pressure washing typically costs $0.30 to $0.55 per square foot, or $100 to $350 for most North Vancouver driveways. A typical 500 square foot driveway averages $150 to $250. Heavy stains, large properties, or add-ons like sealing or oil treatment increase the cost. Mint Sanitary offers 10% off your first clean with code MINT25 and free on-site estimates with no obligation. Call (604) 671-6252 or email hello@mintsanitary.com for your personalized quote.",
  },
];

export default function DrivewayPressureWashingPage() {
  return (
    <ServicePageLayout
      title="Driveway Pressure Washing in North Vancouver"
      heroImage="/pressure-washing-driveway-north-vancouver.webp"
      heroIntro="Your driveway is often the first impression visitors have of your home. In North Vancouver's wet climate, dirt, moss, and algae buildup happens fast. Professional driveway pressure washing restores curb appeal, prevents slippery hazards, and protects your investment from long-term damage. Driveway pressure washing in North Vancouver is an affordable, effective solution for homeowners preparing to sell or dealing with stubborn oil stains."
      faqItems={faqItems}
      ctaHeading="Ready to Restore Your Driveway?"
      ctaBody="Your North Vancouver driveway deserves professional care. Mint Sanitary delivers excellent results with eco-friendly products and professional service. Contact us today for your free, no-obligation estimate. New customers save 10% with code MINT25. Call (604) 671-6252 or email hello@mintsanitary.com. Available 7 days a week."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What Is Driveway Pressure Washing?
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            At Mint Sanitary, we provide seven days a week professional pressure
            washing across Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont
            Village, and Seymour Heights. We use eco-friendly cleaning products
            that comply with Metro Vancouver&apos;s stormwater regulations. Our
            team understands North Vancouver&apos;s unique climate challenges,
            from the moss and algae that thrive in our moist environment to the
            freeze-thaw cycles that damage unprotected concrete.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Get a free, no-obligation estimate and save 10% with code{" "}
            <strong className="font-extrabold text-[#4E5062]">MINT25</strong>.
            Call{" "}
            <a href="tel:+16046716252" className="underline underline-offset-2">
              (604) 671-6252
            </a>{" "}
            or email{" "}
            <a
              href="mailto:hello@mintsanitary.com"
              className="underline underline-offset-2"
            >
              hello@mintsanitary.com
            </a>{" "}
            to book today.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Driveway pressure washing uses high-pressure water jets, typically
            2,000 to 4,000 PSI (pounds per square inch), to remove dirt, grime,
            mold, algae, and stains from concrete, asphalt, and paver surfaces.
            Professional-grade equipment delivers consistent results without the
            damage risk of DIY rental machines. Our technicians pair
            high-pressure water with eco-friendly cleaning solutions that break
            down oils and contaminants without harsh chemicals.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Most driveways (500 to 800 square feet) are completely cleaned in
            one to two hours, depending on condition. Professional pressure
            washing reaches deep into the porous structure of your driveway
            surface, restoring the original color and texture that years of
            weathering have dulled.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Using the wrong pressure or technique damages driveways, strips
            protective sealers, or forces water into foundations and basements.
            Professional pressure washers understand the nuances of different
            surfaces and know exactly how to achieve a clean, safe finish.
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
            What Does Driveway Pressure Washing Include?
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Every driveway is different, and the pressure washing process adapts
            to your specific surface type and condition. Here&apos;s what you can
            expect from professional driveway cleaning in North Vancouver.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {surfaceTypes.map((s) => (
              <div key={s.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  {s.body}
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
            Why Driveway Pressure Washing Matters
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Keeping your driveway clean is more than vanity. Here&apos;s why
            driveway pressure washing in North Vancouver delivers real value.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {b.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {b.body}
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
            Driveway Pressure Washing Process
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Understanding what happens during your pressure washing appointment
            helps you prepare and know what to expect.
          </p>
          <div className="mt-10 space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#66DAD5]">
                  <span className="font-body text-[15px] font-extrabold text-white">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-[17px] font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Surface Damage Risks: Why DIY Can Backfire
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Pressure washer rentals are accessible but dangerous without
            training. Here&apos;s why DIY pressure washing backfires.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {diyRisks.map((r) => (
              <div key={r.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {r.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Professional pressure washing costs $100 to $350, far less than $500
            to $3,000+ repair bills from DIY mistakes. Our technicians are
            trained, insured, and equipped safely.
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
            Concrete Sealing After Pressure Washing
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Pressure washing exposes the pores of your concrete, which is why
            sealing afterward is so valuable.
          </p>
          <div className="mt-6 rounded-[14px] bg-white/10 p-6">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Why Seal After Pressure Washing?
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              Pressure washing opens up concrete&apos;s porous structure. Sealing
              creates a protective barrier against water, oil, grease, and
              stains. In North Vancouver&apos;s climate, sealing is critical.
              Freeze-thaw cycles crack unsealed concrete faster. Sealing also
              makes future cleaning easier since grime doesn&apos;t bond as
              strongly.
            </p>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              A quality seal lasts two to three years, protecting against oil
              stains, weathering, and moisture. It extends driveway lifespan by
              five to ten or more years, paying for itself many times over.
            </p>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              Wait 24 hours after pressure washing before sealing to allow
              complete drying. We can often apply sealer the same day or schedule
              separately. Sealing is recommended for concrete, pavers, and sealed
              asphalt.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {sealerTypes.map((s) => (
              <div key={s.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  {s.body}
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
            Driveway Pressure Washing Pricing Guide
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Transparency about cost is important. Here&apos;s how professional
            pressure washing in North Vancouver is priced.
          </p>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              How We Price Driveway Cleaning
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Professional driveway pressure washing costs $0.30 to $0.55 per
              square foot. For a 500 square foot driveway at $0.40 per square
              foot, the cost is $200. Most professionals charge a $100 to $200
              minimum to cover travel and setup. This minimum benefits smaller
              driveways; larger driveways enjoy lower per-square-foot costs
              across more area.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Cost Factors
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Surface Type
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Concrete and asphalt: $0.30 to $0.50 per square foot. Pavers
                  and stamped concrete: $0.40 to $0.65 per square foot (more
                  delicate).
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Condition and Stains
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Light soiling costs less; heavy buildup or oil stains cost
                  $0.40 to $1.25 per square foot due to pre-treatment and extra
                  time.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Add-On Services
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Oil stain pre-treatment: $50 to $150. Driveway sealing: $0.15
                  to $0.30 per square foot. Bundled services qualify for
                  discounts.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Example Pricing Breakdown
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {pricingExamples.map((p) => (
                <div
                  key={p.size}
                  className="rounded-[14px] bg-[#f4f8ff] p-5"
                >
                  <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    {p.size}
                  </p>
                  <p className="mt-1 font-body text-[13px] leading-[1.7] text-[#5c6075]">
                    {p.condition}
                  </p>
                  <p className="mt-2 font-body text-[17px] font-extrabold text-[#66DAD5]">
                    {p.cost}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <strong className="font-extrabold text-[#4E5062]">
              Special Offer:
            </strong>{" "}
            10% off your first clean with code{" "}
            <strong className="font-extrabold text-[#4E5062]">MINT25</strong>.
            Call{" "}
            <a href="tel:+16046716252" className="underline underline-offset-2">
              (604) 671-6252
            </a>{" "}
            or email{" "}
            <a
              href="mailto:hello@mintsanitary.com"
              className="underline underline-offset-2"
            >
              hello@mintsanitary.com
            </a>{" "}
            to get your free, personalized estimate with no obligation.
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
            Service Areas
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            We serve North Vancouver as our primary area, with seven days a week
            availability across all neighborhoods. We provide free on-site
            estimates to North Vancouver residents.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                North Vancouver Service Areas
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We serve Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont
                Village, and Seymour Heights with same-day or next-day
                appointments.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Greater Vancouver Coverage
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We also serve West Vancouver, Vancouver, Burnaby, Richmond, and
                surrounding communities. Extended travel fees may apply outside
                our primary zone.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Why Local Service Matters
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Our North Vancouver base means we understand your specific
                challenges. We know the wet winters causing rapid moss and algae
                growth, the freeze-thaw cycles cracking unprotected concrete, and
                the geological variations from lower Lonsdale to hillside
                driveways in Lynn Valley and Deep Cove. This local knowledge
                helps us provide targeted recommendations for your North
                Vancouver property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Why Choose Mint Sanitary
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Mint Sanitary stands out through commitment to quality, local
            expertise, and customer care.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChoosePoints.map((p) => (
              <div key={p.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
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
      </section>
    </ServicePageLayout>
  );
}
