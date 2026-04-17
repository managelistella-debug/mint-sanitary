import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fence Washing North Vancouver | Professional Service | Mint Sanitary",
  description:
    "Professional fence washing in North Vancouver removes moss, mildew & algae. Eco-friendly cleaning, transparent pricing. Free estimate. Same-day service available.",
};

const fenceIncludes: { title: string; body: string }[] = [
  {
    title: "Pre-Inspection and Material Assessment",
    body: "We identify your fence material, condition, and problem areas before starting.",
  },
  {
    title: "Biodegradable Cleaning Solutions",
    body: "Application of eco-friendly solutions that break down organic growth without harsh chemicals.",
  },
  {
    title: "Pressure Washing at the Right PSI",
    body: "Low-pressure for cedar, moderate-to-high for vinyl and composite \u2014 tailored to your material.",
  },
  {
    title: "Thorough Rinsing and Debris Removal",
    body: "Complete removal of all cleaning solution and loosened material.",
  },
  {
    title: "Drying Time Recommendations",
    body: "Clear guidance on when your fence is ready for staining or sealing.",
  },
];

const cedarPoints: string[] = [
  "Soft wood structure: Cedar can splinter if pressure exceeds 1,000 to 1,500 PSI",
  "Heavy moss and mildew growth: North Vancouver\u2019s wet climate creates ideal conditions for organic growth on north-facing fences",
  "Pre-staining prep is critical: Wood must be completely clean and dry for stain to absorb evenly",
  "Longer drying requirements: Cedar typically needs 24 to 48 hours before sealing or staining",
];

const cedarApproach: string[] = [
  "Low-pressure washing at 500 to 1,000 PSI",
  "Distance from the surface maintained at 18 inches or more",
  "Strokes follow the wood grain to prevent streaking",
  "Oxygen-based cleaning solutions that eliminate moss without aggressive chemicals",
];

const whyMatters: { title: string; items: string[]; body: string }[] = [
  {
    title: "Extends Fence Lifespan in North Vancouver",
    items: [
      "Cedar fences can last 30 plus years with annual cleaning and sealing",
      "Pressure-treated wood fences maintain their integrity with regular maintenance",
      "Composite fences resist staining and fading longer when kept clean",
      "Chain-link and metal fences avoid premature rust when cleaned regularly",
    ],
    body: "A fence replacement in North Vancouver can easily cost $3,000 to $8,000 or more, depending on material and linear footage. Annual cleaning at a fraction of that cost is clearly the smarter investment.",
  },
  {
    title: "Enhances Curb Appeal and Property Value",
    items: [
      "Brightens fence color and reveals the original wood grain on cedar",
      "Removes dark stains and discoloration that accumulate over years",
      "Creates a move-in-ready appearance for potential buyers",
      "Boosts perceived property value before listing",
    ],
    body: "Homeowners who clean their fences before selling their North Vancouver homes often report that buyers respond positively to the maintained appearance.",
  },
  {
    title: "Prevents Mold, Mildew, and Moss Growth",
    items: [
      "Trigger allergies and respiratory issues for sensitive individuals",
      "Create slippery surfaces that pose safety risks, especially on fence sections near walkways",
      "Accelerate material degradation if left untreated",
      "Respond well to eco-friendly cleaning solutions that are safe for pets and children",
    ],
    body: "North Vancouver\u2019s wet climate averages over 800 millimeters of rain annually. This moisture creates perfect conditions for mold, mildew, and moss. Professional cleaning removes existing growth and reduces future buildup, especially when combined with sealing.",
  },
  {
    title: "Essential Pre-Staining and Sealing Preparation",
    items: [
      "Removes dirt, mold, and old finish residue so new stain adheres evenly",
      "Prevents patchy, streaky stain application",
      "Ensures color uniformity across the entire fence surface",
      "Maximizes stain penetration and longevity, adding years to your coating\u2019s life",
    ],
    body: "We recommend having your fence professionally washed in spring, allowing adequate drying time before your chosen contractor applies stain or sealer.",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "On-Site Assessment and Material Identification",
    body: "Every fence is different, so we start by inspecting your fence thoroughly. We identify the fence material (cedar, pressure-treated, vinyl, composite, metal), evaluate overall condition and structural integrity, locate problem areas including moss hotspots, rust stains, and mildew, confirm property boundaries and neighbor awareness, and note any special requirements or concerns. This step ensures we customize our approach rather than using a one-size-fits-all method.",
  },
  {
    title: "Pre-Treatment and Solution Application",
    body: "After assessment, we apply biodegradable cleaning solutions designed for your specific fence material. These solutions break down organic growth and loosen stubborn stains, allowing gentler washing later. Pre-treatment is essential because it allows chemical action to loosen contaminants before pressure is applied, reduces the aggressive pressure needed (lowering damage risk), improves overall cleaning effectiveness, and typically sits for 5 to 15 minutes depending on severity. This step separates professional results from basic pressure washing.",
  },
  {
    title: "Low-Pressure or Custom-Pressure Washing",
    body: "Using adjustable pressure equipment, we clean your fence with optimal PSI for your specific material: softwood like cedar or pine at 500 to 1,000 PSI with 18-inch distance minimum, vinyl fencing at 1,500 to 2,000 PSI to avoid coating damage, composite materials at 800 to 1,200 PSI, and metal or chain-link up to 2,000 PSI as needed. Technicians use horizontal strokes following wood grain patterns to prevent streaking or damage.",
  },
  {
    title: "Thorough Rinsing and Debris Removal",
    body: "Complete rinsing removes all cleaning solution and loosened debris. Any residue left behind can harbor mold growth or affect how stains absorb. Final rinsing includes removal of sediment and debris, inspection for any missed spots, trim removal around fence sections if applicable, and verification that all cleaning solution is gone.",
  },
  {
    title: "Drying and Post-Wash Recommendations",
    body: "After washing, your fence needs time to dry before sealing or staining. Drying timelines depend on material and weather: cedar and softwood need 24 to 48 hours (weather dependent), vinyl needs 4 to 12 hours, and composite needs 12 to 24 hours. We provide recommendations for staining or sealing and can refer trusted contractors if you\u2019d like to proceed with protective coating.",
  },
];

const faqItems: { question: string; answer: string }[] = [
  {
    question:
      "Is pressure washing safe for my cedar fence in North Vancouver?",
    answer:
      "Yes, when done correctly with low pressure (500 to 1,000 PSI) and proper technique. Excessive pressure or aggressive nozzles can splinter cedar. Our technicians follow strict guidelines specific to North Vancouver\u2019s cedar fences to protect your investment without compromising cleaning results.",
  },
  {
    question: "How often should I wash my fence in North Vancouver?",
    answer:
      "We recommend annual washing in North Vancouver due to heavy rainfall and moss growth. If your fence is heavily shaded, twice-yearly cleaning may be beneficial. Regular washing extends fence life by 5 to 10 plus years, making it one of the best investments you can make.",
  },
  {
    question:
      "Can you clean my fence before I stain it in North Vancouver?",
    answer:
      "Absolutely, and it\u2019s one of our most popular services. Professional pre-stain fence preparation in North Vancouver supports even color absorption and prevents patchy application. Your fence needs to be completely dry, typically 24 to 48 hours for wood, before you apply stain.",
  },
  {
    question:
      "What\u2019s the difference between vinyl and cedar fence cleaning in North Vancouver?",
    answer:
      "Vinyl uses higher pressure (1,500 to 2,000 PSI) because it\u2019s more durable; cedar requires gentle pressure (500 to 1,000 PSI) to avoid splintering. Cedar also needs longer drying time before sealing. We adjust our methods for each material to deliver optimal results in North Vancouver.",
  },
  {
    question:
      "Is your fence cleaning solution eco-friendly and safe for North Vancouver families?",
    answer:
      "Yes. We use biodegradable, non-toxic cleaning solutions that are safe for kids, pets, and landscaping. Our eco-friendly fence cleaning approach is effective on moss, algae, and mildew without harsh chemicals or environmental impact, which matters to North Vancouver homeowners.",
  },
  {
    question:
      "How long does professional fence washing take in North Vancouver?",
    answer:
      "Typically 1 to 3 hours depending on fence size and condition. A 150 to 200-foot fence usually takes 1 to 2 hours. We\u2019ll provide an estimated timeframe during your free quote and confirm timing before arrival.",
  },
  {
    question:
      "Will fence washing remove all mold and mildew in North Vancouver?",
    answer:
      "Professional washing removes existing mold and mildew. To prevent regrowth in North Vancouver\u2019s damp climate, we recommend applying a waterproof sealer or fungicide-based stain within 48 hours of cleaning. This extends protection by 2 to 3 years.",
  },
  {
    question:
      "What if my North Vancouver fence has structural damage?",
    answer:
      "During our inspection, we\u2019ll flag any structural concerns including rot, loose boards, or warping. While we don\u2019t repair fences, we can recommend trusted fence contractors in North Vancouver or refer you to our network of specialists who handle repairs.",
  },
  {
    question:
      "Do you offer fence washing service in West Vancouver and Burnaby?",
    answer:
      "Yes. We serve West Vancouver and Burnaby as part of our greater Vancouver service area. Rates may vary slightly based on travel distance; a free quote will confirm pricing for your specific location.",
  },
  {
    question:
      "What\u2019s your cancellation or rain policy for fence washing in North Vancouver?",
    answer:
      "We can reschedule without penalty if weather is unsafe for our team. Since water is already involved, light rain doesn\u2019t stop our work; we\u2019ll adjust timing as needed and confirm before arrival. We\u2019re flexible with scheduling to accommodate North Vancouver homeowners.",
  },
];

export default function FenceWashingPage() {
  return (
    <ServicePageLayout
      title="Fence Washing in North Vancouver"
      heroImage="/pressure-washing-fence-north-vancouver.webp"
      heroIntro="Your fence is one of the first things visitors and potential buyers notice about your property. Over time, North Vancouver's damp Pacific Northwest climate can leave cedar fences covered in moss, vinyl ones stained with algae, and composite materials looking dingy. Professional fence washing removes years of buildup, restores your fence's color and texture, and prepares it for sealing or staining."
      faqItems={faqItems}
      ctaHeading="Ready to Restore Your North Vancouver Fence?"
      ctaBody="Your fence deserves professional care. Mint Sanitary combines material expertise, eco-friendly solutions, transparent pricing, and same-day service to deliver results that exceed expectations. First-time customers receive 10% off with code MINT25. Call (604) 671-6252 or email hello@mintsanitary.com. Open 7 days a week with flexible scheduling."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What Fence Washing Includes
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            At Mint Sanitary, we&apos;ve spent years perfecting fence washing
            for every material type, from natural cedar in Edgemont
            Village&apos;s older homes to vinyl fencing in newer Seymour Heights
            developments. We use low-pressure techniques and eco-friendly
            solutions that protect your investment while delivering visible
            results.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Fence washing is more than a quick rinse with a garden hose.
            It&apos;s a specialized cleaning process that removes dirt, grime,
            algae, moss, mildew, and stubborn stains from all fence materials.
            The process adapts based on what your fence is made of and what you
            are trying to accomplish.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {fenceIncludes.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            The entire process takes 1 to 3 hours depending on fence size,
            condition, and material. For a typical 150 to 200-foot fence in
            North Vancouver, plan on 1 to 2 hours of cleaning time.
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
            Fence Materials We Clean in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Not all fences are created equal, and not all cleaning methods work
            on every material. North Vancouver properties feature a diverse
            range of fencing materials, each with its own care requirements.
          </p>
          <div className="mt-8 rounded-[14px] bg-white/10 p-6">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Cedar and Wood Fences in North Vancouver
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              Cedar is the classic choice for North Vancouver homes, especially
              in areas like Lower Lonsdale and parts of Deep Cove where older
              properties feature natural wood fencing. Cedar looks beautiful
              when maintained, but it&apos;s soft wood that demands gentle care.
            </p>
            <p className="mt-3 font-body text-[15px] font-extrabold text-white">
              Why cedar fence cleaning in North Vancouver requires expertise:
            </p>
            <ul className="mt-2 space-y-1">
              {cedarPoints.map((point) => (
                <li
                  key={point}
                  className="font-body text-[15px] leading-[1.7] text-white/80"
                >
                  &bull; {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-body text-[15px] font-extrabold text-white">
              Our approach to cedar fence cleaning:
            </p>
            <ul className="mt-2 space-y-1">
              {cedarApproach.map((point) => (
                <li
                  key={point}
                  className="font-body text-[15px] leading-[1.7] text-white/80"
                >
                  &bull; {point}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              Cedar fence restoration in North Vancouver costs more than vinyl
              but preserves the natural wood grain and extends your fence&apos;s
              lifespan significantly.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Vinyl Fences in North Vancouver
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Vinyl fencing is increasingly popular in newer North Vancouver
                neighborhoods. It&apos;s durable, requires minimal maintenance,
                and doesn&apos;t need annual staining. However, vinyl can still
                accumulate dirt, algae, and discoloration, particularly in
                shaded areas like the covered properties along Lynn Valley.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Our vinyl fence washing uses pressure of 1,500 to 2,000 PSI
                (lower than hardwood to protect the UV-resistant coating), a
                gentle nozzle angle to preserve the surface, biodegradable
                detergent formulated specifically for vinyl, and methods safe
                for nearby landscaping and pets. Vinyl usually dries within 4
                to 12 hours.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Composite, Chain-Link, and Metal Fences
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                North Vancouver properties also feature composite materials,
                chain-link fencing, aluminum, and ornamental metal fences. Each
                requires tailored care.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                <strong className="font-extrabold text-white">
                  Composite fencing:
                </strong>{" "}
                Low-pressure washing at 800 to 1,200 PSI prevents damage to the
                material fibers. Common in mixed neighborhoods throughout North
                Vancouver.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                <strong className="font-extrabold text-white">
                  Chain-link fencing:
                </strong>{" "}
                Can handle higher pressure, up to 2,000 PSI. Ideal for removing
                rust stains and algae buildup without causing material
                degradation.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                <strong className="font-extrabold text-white">
                  Metal and ornamental fences:
                </strong>{" "}
                Require gentle pressure and rust-inhibiting solutions. These
                materials are prone to rust formation, so careful washing
                prevents future damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Why Professional Fence Washing Matters
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Putting off fence cleaning might seem like a way to save money, but
            it often leads to higher costs down the road. Here&apos;s what
            happens when you invest in professional fence washing for your North
            Vancouver property.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {whyMatters.map((section) => (
              <div
                key={section.title}
                className="rounded-[14px] bg-[#f4f8ff] p-6"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {section.title}
                </h3>
                <ul className="mt-3 space-y-1">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[15px] leading-[1.7] text-[#5c6075]"
                    >
                      &bull; {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {section.body}
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
            The Professional Fence Washing Process
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Our fence washing process follows five detailed steps.
            Understanding each step helps explain why professional cleaning
            produces better results than DIY approaches.
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
            Transparent Fence Washing Pricing
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            We believe pricing should be transparent and straightforward. No
            hidden fees, no surprise charges. Here&apos;s how we price fence
            washing in North Vancouver.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Linear Foot Pricing
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                This is our most common pricing method for standard residential
                fences:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                  <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    Typical Range
                  </p>
                  <p className="mt-1 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    $2.50 to $5.50 per linear foot for 6-foot-tall fences
                  </p>
                </div>
                <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                  <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    Example
                  </p>
                  <p className="mt-1 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    A 150-foot fence costs between $375 to $825, depending on
                    material and condition
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Square Footage Pricing
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                For complex layouts or fences with varying heights, we calculate
                by square footage:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                  <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    Typical Range
                  </p>
                  <p className="mt-1 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    $0.35 to $0.90 per square foot
                  </p>
                </div>
                <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                  <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    Example
                  </p>
                  <p className="mt-1 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    An 800 square foot fence costs between $280 to $720
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Factors That Affect Fence Cleaning Costs
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Fence Material
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Cedar and wood require more specialized care and cost more
                  than vinyl or metal.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Condition
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Heavy moss or mildew buildup may require extra pre-treatment
                  time, adding $50 to $150.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Height and Size
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Taller fences require more labor and specialized equipment.
                  Larger fences may receive slight per-foot discounts.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Accessibility
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Hard-to-reach sections or steep terrain add 10 to 15% to the
                  total.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Add-On Services
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Sealing and Staining Prep
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Consultation included free with any wash.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Algae and Rust Pre-Treatment
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  $50 to $100 depending on severity.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                  Post-Wash Wood Sealing
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Quote based on application, typically $400 to $600 for 500
                  square feet.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            We provide free, no-pressure estimates via phone or on-site visit.
            Just describe your fence, materials, approximate footage, and main
            concerns. We&apos;ll provide a ballpark range within hours.
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
            Service Areas and Local Expertise
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            We proudly serve all of North Vancouver and surrounding regions,
            with same-day or next-day service available for most North Vancouver
            locations.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                North Vancouver Service Areas
              </h3>
              <ul className="mt-3 space-y-1">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Lower Lonsdale waterfront properties
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Lynn Valley residential neighborhoods
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Deep Cove and surrounding hillside homes
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Edgemont Village properties
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Seymour Heights and North Shore communities
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">
                  &bull; Brockton Point, Moodyville, Marineland, and Squamish
                  Valley
                </li>
              </ul>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We also serve West Vancouver, East and West Vancouver proper,
                Burnaby, and greater Vancouver on request, including Maple
                Ridge, Coquitlam, Port Moody, Surrey, Richmond, and Langley.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-[14px] bg-white/10 p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  Pacific Northwest Climate Impact
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  North Vancouver&apos;s rainy climate, averaging 800 plus
                  millimeters of precipitation annually, creates ideal
                  conditions for moss, mildew, and algae. North-facing fences
                  accumulate growth faster. Shaded areas along tree-lined
                  properties in Lynn Valley and Deep Cove are particularly prone
                  to heavy moss buildup. This wet climate makes professional
                  fence maintenance essential, not optional.
                </p>
              </div>
              <div className="rounded-[14px] bg-white/10 p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  Cedar Fence Prevalence
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  Many North Vancouver properties, especially in Lower Lonsdale
                  and older neighborhoods, feature natural cedar or treated wood
                  fences chosen for their aesthetic appeal and durability. Cedar
                  is the material of choice for homeowners who value natural
                  wood. However, cedar requires specialized pressure washing to
                  avoid damage. Our technicians are specifically trained in
                  low-pressure cedar fence care suited to North Vancouver&apos;s
                  particular needs.
                </p>
              </div>
              <div className="rounded-[14px] bg-white/10 p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  Strata Rules and Property Compliance
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  Some North Vancouver strata communities have specific rules
                  about fence appearance and maintenance standards. Professional
                  cleaning helps stay in compliance while preserving property
                  value. We have experience working with North Vancouver strata
                  communities and understand their requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Related Resources
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Related Services
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver"
                    className="underline underline-offset-2"
                  >
                    Professional pressure washing in North Vancouver
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver/deck-patio-cleaning"
                    className="underline underline-offset-2"
                  >
                    Deck washing in North Vancouver
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver"
                    className="underline underline-offset-2"
                  >
                    Moss removal services in North Vancouver
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver"
                    className="underline underline-offset-2"
                  >
                    Eco-friendly cleaning solutions for North Vancouver
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Further Reading
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://www.angi.com/articles/how-much-cost-pressure-wash-fence.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Angi: How Much Does it Cost to Pressure Wash a Fence
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://www.vikingfence.com/2023/11/06/how-to-clean-a-cedar-fence.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Viking Fence: How to Clean a Cedar Fence
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://www.realhomes.com/advice/how-to-clean-a-vinyl-fence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Real Homes: How to Clean a Vinyl Fence
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://www.fenceauthority.com/blog/how-to-pressure-wash-your-vinyl-fence/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Fence Authority: How to Pressure Wash Your Vinyl Fence
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://cascadefenceanddeck.com/post/how-to-get-rid-of-moss-and-mildew-on-your-cedar-fence/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Cascade Fence: Moss and Mildew on Cedar Fence
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
