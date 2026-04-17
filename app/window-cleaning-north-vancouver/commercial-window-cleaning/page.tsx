import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Commercial Window Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional commercial window cleaning in North Vancouver for offices, retail, and strata buildings. Insured, WorkSafeBC compliant, 7 days a week. Get 10% off your first clean.",
};

const faqItems = [
  {
    question:
      "How often should commercial windows be cleaned in North Vancouver?",
    answer:
      "Most office buildings in North Vancouver benefit from quarterly cleaning (4 times per year) to address seasonal changes and coastal salt spray accumulation. Retail storefronts and ground-level windows should be cleaned monthly to maintain curb appeal and customer perception. Strata common areas typically need monthly interior windows and bi-monthly exterior service. Frequency depends on building location, exposure to pollution and salt spray, business type, and your aesthetic standards. We recommend seasonal deep cleaning in spring (April to May) and fall (September to October) as part of a strategic maintenance plan.",
  },
  {
    question:
      "What's the difference between interior and exterior commercial window cleaning in North Vancouver?",
    answer:
      "Exterior cleaning removes North Vancouver's environmental contaminants including salt spray, pollution, bird droppings, tree sap, and weather-related buildup. It's critical for maintaining appearance and protecting glass integrity in our coastal environment. Interior common area cleaning focuses on lobbies, hallways, conference rooms, and shared spaces, maintaining professional appearance and employee perception. Most commercial properties in North Vancouver benefit from both services to maintain complete professional appearance inside and out.",
  },
  {
    question:
      "Can you clean windows after business hours in North Vancouver?",
    answer:
      "Yes. Mint Sanitary offers after-hours scheduling including early morning (before business opens), evening (after business closes), weekends, and holidays. We coordinate with your business calendar to schedule cleaning during times that minimize disruption to operations, client meetings, and customer access. Contact us at (604) 671-6252 or hello@mintsanitary.com to discuss your preferred service window and availability.",
  },
  {
    question:
      "Do you have insurance for commercial window cleaning work in North Vancouver?",
    answer:
      "Yes. Mint Sanitary carries full general liability insurance with $1 to $2 million coverage depending on project scope. We maintain complete WorkSafeBC compliance for all commercial work, including high-rise and elevated access projects. We provide Certificate of Insurance (COI) upon request for property managers, building owners, and strata councils. Our coverage protects your property and gives you confidence that liability is properly managed during service.",
  },
  {
    question:
      "What safety measures are used for high-rise window cleaning in North Vancouver?",
    answer:
      "High-rise work in North Vancouver follows WorkSafeBC fall protection requirements (mandatory for work above 3 meters). We use certified anchor systems, safety harnesses, rope access equipment, and IRATA-trained technicians. Every high-rise project includes documented safety plans, pre-service risk assessments, and anchor system inspection. Equipment is regularly inspected to meet WorkSafeBC standards. Our crew is trained in emergency procedures and maintains communication systems throughout the project. Safety is never compromised for schedule or efficiency.",
  },
  {
    question:
      "Is eco-friendly window cleaning available for commercial properties in North Vancouver?",
    answer:
      "Yes. Mint Sanitary uses eco-friendly, non-toxic cleaning products that are safe for the environment, building occupants, and surrounding landscaping while delivering streak-free results. Our eco-friendly approach is particularly appropriate for North Vancouver's sensitive coastal environment near Deep Cove and marine areas. We can discuss product options during your estimate consultation.",
  },
  {
    question:
      "How much does commercial window cleaning cost in North Vancouver?",
    answer:
      "Pricing varies based on building size, height, number of windows, access complexity, and service frequency. Ground-level storefronts typically cost $1 to $2 per pane; larger commercial buildings are priced by square footage ($0.50 to $2.50 per square foot) or hourly rates ($50 to $100 per hour). Recurring contracts receive 10 to 15 percent discounts compared to one-time service. We provide free estimates after on-site assessment so you understand exactly what your property requires. First-time customers receive 10 percent off with code MINT25.",
  },
  {
    question:
      "Can you work with strata bylaws and property management schedules in North Vancouver?",
    answer:
      "Absolutely. We coordinate service scheduling with property managers across North Vancouver, provide advance notice (typically 7 days via email), and comply with strata bylaws governing contractor access. We schedule around resident access patterns and building restrictions in Lower Lonsdale, Lynn Valley, Edgemont Village, and throughout North Vancouver. Strata councils appreciate our attention to coordination and our commitment to minimizing disruption to common areas.",
  },
  {
    question:
      "What's included in a commercial window cleaning service in North Vancouver?",
    answer:
      "Full exterior and interior window cleaning, frame and sill cleaning, removal of grime and buildup, streak-free finish, and interior common area windows (lobbies, hallways, skylights if applicable). We assess your building's specific needs and customize the service scope. Our pre-service assessment identifies any special requirements or unique challenges specific to your North Vancouver property. Everything is documented with before and after photos for your records.",
  },
  {
    question:
      "Do you offer recurring maintenance contracts in North Vancouver?",
    answer:
      "Yes. Monthly, bi-monthly, and quarterly recurring contracts are available with discounted rates compared to one-time service. Scheduled maintenance keeps windows consistently clean and can be coordinated around your business calendar. Recurring contracts eliminate the need for repeated scheduling requests while ensuring your North Vancouver property remains professionally maintained year-round.",
  },
];

const includedServices: { title: string; body: string }[] = [
  {
    title: "Storefront Glass and Entry Doors",
    body: "Special attention in retail environments, eliminating fingerprints and weather residue. In Lower Lonsdale's retail corridor, well-maintained storefronts directly impact foot traffic and customer perception.",
  },
  {
    title: "Multi-Story Office Building Windows",
    body: "Coordinated interior and exterior cleaning. We clean windows floor by floor from established anchor points, maintaining professional appearance in Lynn Valley commercial zones.",
  },
  {
    title: "Strata Common Area Windows",
    body: "Lobbies, hallways, and shared amenity spaces. We verify streak-free interior common area glass throughout the building.",
  },
  {
    title: "Window Frames, Sills, and Ledges",
    body: "These accumulate mineral deposits, mold, and algae. In coastal areas like Deep Cove, salt spray deposits require specialized cleaning attention.",
  },
  {
    title: "Skylight and Overhead Glass",
    body: "Dedicated attention including office skylights and warehouse roof glass.",
  },
  {
    title: "Industrial and Warehouse Facility Windows",
    body: "Handled with appropriate safety equipment and high-pressure rinsing when needed.",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "Pre-Service Assessment",
    body: "Inspects glass type, building height, access points, and safety requirements. For high-rise buildings, we assess anchor points and develop fall protection plans.",
  },
  {
    title: "Safety Setup",
    body: "Includes establishing anchor points, deploying harnesses, testing equipment, and reviewing evacuation procedures.",
  },
  {
    title: "Exterior Cleaning",
    body: "Applies professional detergent and spot-free rinsing, removing salt spray deposits from coastal North Vancouver properties.",
  },
  {
    title: "Interior Common Area Cleaning",
    body: "Eliminates handprints, dust, and streaks from lobbies, hallways, and conference rooms.",
  },
  {
    title: "Frame and Sill Treatment",
    body: "Removes oxidized material, mold, and algae, protecting frame integrity in areas like Deep Cove.",
  },
  {
    title: "Final Inspection",
    body: "Verifies streak-free clarity and documentation includes before and after photos.",
  },
];

const frequencyItems: { title: string; body: string }[] = [
  {
    title: "High-Traffic Retail Storefronts",
    body: "Require monthly cleaning to maintain curb appeal. Monthly service is standard throughout North Vancouver's commercial corridors.",
  },
  {
    title: "Standard Office Buildings",
    body: "Benefit from quarterly cleaning at minimum, aligning with seasonal changes. High-pollution locations may need bi-monthly exterior service.",
  },
  {
    title: "Strata Common Areas",
    body: "Typically need monthly interior windows and bi-monthly or quarterly exterior service.",
  },
  {
    title: "Ground-Level Windows",
    body: "Accumulate grime faster and need monthly or bi-monthly cleaning.",
  },
  {
    title: "Upper-Floor Windows",
    body: "In multi-story buildings can function well with quarterly service.",
  },
  {
    title: "Industrial Facilities",
    body: "Typically need cleaning every 4 to 6 months depending on dust exposure.",
  },
];

export default function CommercialWindowCleaningPage() {
  return (
    <ServicePageLayout
      title="Commercial Window Cleaning in North Vancouver"
      heroImage="/window-cleaning-commercial-north-vancouver.webp"
      heroIntro="Clean windows are more than appearance. They signal professional operations, protect your property investment, and influence how customers perceive your business. For commercial properties across North Vancouver, regular window maintenance is a non-negotiable part of building management, especially given the coastal salt spray and frequent rain that accelerates grime buildup on glass surfaces."
      faqItems={faqItems}
      ctaHeading="Ready to Maintain Your Commercial Property?"
      ctaBody="Mint Sanitary assesses every commercial property and provides a customized quote, covering office buildings, retail storefronts, strata properties, and industrial facilities throughout North Vancouver. New customers receive 10% off with code MINT25."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Mint Sanitary provides full-service{" "}
            <a
              href="/window-cleaning-north-vancouver/commercial-window-cleaning/"
              className="underline underline-offset-2"
            >
              commercial window cleaning in North Vancouver
            </a>{" "}
            for office buildings, retail storefronts, strata common areas, and
            industrial facilities. We handle ground-level storefronts,
            multi-story office windows, and high-rise exterior cleaning, with
            WorkSafeBC-compliant safety protocols and flexible scheduling
            designed around your business operations.
          </p>

          <div className="mt-14">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              What&apos;s Included in Commercial Window Cleaning Service
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Our commercial window cleaning service in North Vancouver covers
              all exterior and interior glass surfaces on your property.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {includedServices.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[14px] bg-[#f4f8ff] p-5"
                >
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
            Interior vs. Exterior Commercial Window Cleaning
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Understanding the difference between interior and exterior commercial
            window cleaning in North Vancouver helps you prioritize your
            maintenance budget and frequency.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Exterior Window Cleaning
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Removes North Vancouver&apos;s coastal effects including salt
                spray, pollution, rain, and algae growth. Professional exterior
                cleaning protects glass integrity and directly impacts curb
                appeal for retail storefronts.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Interior Common Area Cleaning
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Maintains professional appearance in lobbies, hallways, and
                conference rooms, eliminating handprints and dust that cloud
                glass visibility.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Ground-Level vs. Upper-Floor Windows
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Follow different schedules. Ground-level windows in Edgemont
                Village and other commercial areas need monthly cleaning due to
                traffic and pollution exposure. Upper-floor windows function well
                with quarterly service.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Full-Building Solutions
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Combine interior and exterior service in coordinated scheduling,
                ensuring a complete professional appearance at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Ground-Level, Mid-Rise, and High-Rise Window Cleaning
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Different building heights require different approaches, equipment,
            and safety protocols.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Ground-Level Storefronts
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                The first impression customers receive. Monthly cleaning is
                standard for retail properties because foot traffic and
                weathering quickly degrade storefront appearance. In Seymour
                Heights commercial zones and Lower Lonsdale retail areas, clean
                storefronts attract customer attention and signal that a business
                maintains high standards. Clean glass allows merchandise to shine
                and customers to see clearly into the store.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Mid-Rise Buildings (3 to 10 Stories)
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Typically require quarterly or bi-monthly exterior service. These
                buildings are tall enough that safety equipment becomes essential.
                We deploy modern work platforms, safety harnesses, and fall
                protection systems that comply with{" "}
                <a
                  href="https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation/part-11-fall-protection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  WorkSafeBC regulations
                </a>
                . Mid-rise office buildings across North Vancouver benefit from
                this frequency because upper floors still accumulate pollution
                and salt spray.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                High-Rise Commercial Buildings (10+ Stories)
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Demand specialized expertise and equipment. We use certified rope
                access systems, elevated work platforms, and IRATA-trained
                technicians. High-rise work requires documented fall protection
                plans, anchor system inspection, and full WorkSafeBC compliance.
                These buildings receive our most rigorous safety protocols
                because of the elevated risk profile.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Access and Safety Equipment
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                A critical differentiator between DIY approaches and professional
                commercial cleaning. We deploy ANSI-certified harnesses, modern
                safety anchors, evacuation procedures, and communication systems.
                Equipment is inspected regularly to verify it meets{" "}
                <a
                  href="https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation/part-13-ladders-scaffolds-and-temporary-work-platforms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  WorkSafeBC standards
                </a>
                . This infrastructure protects our crews and gives building
                managers confidence that work is performed to the highest safety
                standard.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Specialized High-Rise Expertise
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Comes from training and experience. Our team members hold IRATA
                (International Rope Access Trade Association) certification or
                equivalent rope access training. This credential, combined with
                ongoing WorkSafeBC fall protection certification, verifies safe
                and efficient high-rise cleaning across North Vancouver and Metro
                Vancouver service areas.
              </p>
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
            Insurance and Liability Coverage for Commercial Properties
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Building managers and property owners in North Vancouver need
            assurance that window cleaning contractors carry appropriate
            insurance. This protects your property and transfers liability risk.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                General Liability Insurance
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Protects against property damage and personal injury, with $1 to
                $2 million coverage depending on building size and complexity.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                WorkSafeBC Compliance
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Mandatory for work above 3 meters. We maintain fall protection
                plans, certified equipment, documented risk assessments, and
                trained personnel with full documentation.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Certificate of Insurance (COI)
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Provided upon request for property managers and strata councils,
                detailing coverage amounts and scope.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Anchor System Inspection
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Completed before high-rise work, ensuring attachment points are
                rated and properly maintained.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Your Protection
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                With Mint Sanitary includes full liability insurance and complete
                WorkSafeBC compliance for all commercial work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Flexible Scheduling to Minimize Business Disruption
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Commercial window cleaning doesn&apos;t have to interrupt business
            operations. We offer flexible scheduling options designed around your
            property&apos;s operational needs.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                After-Hours Availability
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Includes early morning, evening, weekends, and holidays. We clean
                retail storefronts in Lower Lonsdale before opening or office
                buildings after employees leave, ensuring no disruption to
                business activities.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Customizable Service Windows
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Let you control scheduling frequency. We work within your
                preferred timeline and building schedule.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Strata Coordination
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Includes advance notice (7 days via email), compliance with
                strata bylaws, and scheduling around resident patterns across
                North Vancouver.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Seasonal Scheduling
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Aligns with North Vancouver&apos;s climate. Spring (April to
                May) removes winter accumulation; fall (September to October)
                prepares for winter weather.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Planned Maintenance Contracts
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Include monthly, bi-monthly, or quarterly recurring service
                booked in advance, providing predictable budgeting and guaranteed
                availability.
              </p>
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
            Commercial Window Cleaning Process
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Every commercial window cleaning project follows a structured process
            that prioritizes safety, quality, and documentation.
          </p>
          <div className="mt-8 space-y-6">
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
            Recommended Frequency for Commercial Window Cleaning
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Window cleaning frequency depends on building type, location, and
            environmental exposure.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {frequencyItems.map((item) => (
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
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <strong className="font-extrabold text-[#4E5062]">
              Seasonal deep clean
            </strong>{" "}
            is recommended in spring (April to May) and fall (September to
            October) for all commercial properties in North Vancouver.
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
            Pricing Guidance for Commercial Window Cleaning
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Understanding commercial window cleaning pricing helps you budget and
            compare quotes accurately.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Per-Window Pricing
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Ranges from $5 to $7 per pane for standard projects, with
                ground-level storefronts potentially priced at $1 to $2 per
                pane.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Square Footage Models
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Range from $0.50 to $2.50 per square foot depending on building
                size, access complexity, and frequency.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Hourly Rates
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                For commercial work typically range from $50 to $100 per hour for
                complex projects.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Frequency Discounts
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Offer 10 to 15 percent savings for recurring contracts compared
                to one-time service.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Customized Quotes
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Reflect your building&apos;s specific size, height, windows,
                access complexity, and requirements. Free estimate process
                includes on-site assessment with no obligation.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                First-Time Customer Promo
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                New customers receive 10 percent off with code{" "}
                <strong className="font-extrabold text-white">MINT25</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Service Area Coverage in North Vancouver
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <p>
              Mint Sanitary serves{" "}
              <a
                href="/service-areas/"
                className="underline underline-offset-2"
              >
                North Vancouver and the greater Metro Vancouver region
              </a>{" "}
              with flexible dispatch and rapid scheduling.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Primary service area
              </strong>{" "}
              covers all of North Vancouver, from Lower Lonsdale through Lynn
              Valley, Deep Cove, Edgemont Village, and Seymour Heights, with
              expertise in coastal climate and salt spray challenges.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Extended Greater Vancouver coverage
              </strong>{" "}
              includes West Vancouver, Vancouver, Burnaby, and surrounding
              municipalities for coordinated multi-property service.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Flexible dispatch
              </strong>{" "}
              means same-week or next-week scheduling across North Vancouver.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Local expertise
              </strong>{" "}
              with North Vancouver&apos;s coastal salt spray, frequent rain, and
              commercial corridors sets us apart across the region.
            </p>
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
            Why Professional Commercial Window Cleaning Matters
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            The connection between window cleanliness and business performance
            goes beyond aesthetics.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                First Impression ROI
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Research indicates that{" "}
                <a
                  href="https://www.trinityservices.com/benefits-of-commercial-window-cleaning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  82 percent of customers are more willing to spend in clean,
                  attractive environments
                </a>
                . Clean windows signal professional operations, attention to
                detail, and quality standards. For retail storefronts, this
                translates directly to customer foot traffic and sales.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Property Value Protection
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Unmaintained building exteriors can result in{" "}
                <a
                  href="https://www.ruevac.com/commercial-property-curb-appeal-roi-quantifying-the-value-of-exterior-maintenance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  10 percent property value decline
                </a>{" "}
                over time. Regular professional window cleaning protects the
                long-term asset value of commercial properties. A $2 million
                commercial building can realize a return of 6,667 percent on a
                $3,000 annual maintenance investment.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Coastal Environment Challenges
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Salt spray from nearby water corrodes glass seals and deposits
                mineral residue that damages glass integrity over time. Frequent
                rain accelerates algae and mold growth in frames and sills.
                Pollution from vehicle traffic and nearby industry accumulates on
                glass surfaces.{" "}
                <a
                  href="https://www.greatcanadianpropertyservices.ca/pressure-washing-articles/how-often-should-you-clean-your-homes-windows-in-a-rainy-coastal-climate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Professional cleaning removes these contaminants
                </a>{" "}
                and protects glass longevity.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Employee Satisfaction
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Offices with clear, clean windows provide natural light and views
                that increase employee morale and productivity. Clean windows
                contribute to a professional workplace environment that attracts
                and retains quality staff.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Curb Appeal for Retail
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Directly impacts sales and customer perception. Retail
                storefronts with clean windows allow merchandise to be seen
                clearly, create an inviting appearance, and signal that the
                business maintains high standards. In competitive retail
                corridors like Lower Lonsdale, storefront appearance is often the
                deciding factor in whether a customer enters the store or passes
                by.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Compliance and Safety
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Professional commercial window cleaning verifies WorkSafeBC
                compliance, reduces liability risk, and provides documented proof
                of proper maintenance for building records.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5 md:col-span-2 xl:col-span-3">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Time and Cost Efficiency
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                In-house window cleaning requires equipment investment, crew
                training, liability insurance, and ongoing maintenance.
                Outsourcing eliminates these costs and allows your staff to focus
                on core business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            A Note on Commercial Property Maintenance
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <p>
              Over my ten years in property management, I learned that building
              appearance directly influences tenant satisfaction and property
              value. The first property I managed had chronically dirty windows.
              The owner was trying to save money by cleaning in-house. Within a
              year, two tenants had moved to competitors with cleaner facilities.
              After bringing in professional window cleaning, the remaining
              tenants renewed their leases and tenant complaints dropped
              significantly. That lesson has stayed with me. Professional
              maintenance isn&apos;t an expense; it&apos;s an investment in
              property performance and tenant retention.
            </p>
            <p>
              Mint Sanitary brings that same professional commitment to every
              commercial window cleaning project in North Vancouver. We assess
              every commercial property and provide a customized quote, covering
              office buildings, retail storefronts, strata properties, and
              industrial facilities throughout North Vancouver.
            </p>
          </div>
          <div className="mt-8 rounded-[14px] bg-[#f4f8ff] p-5">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Contact Mint Sanitary Today
            </h3>
            <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              <li>
                <strong className="font-extrabold text-[#4E5062]">
                  Phone:
                </strong>{" "}
                <a
                  href="tel:+16046716252"
                  className="underline underline-offset-2"
                >
                  (604) 671-6252
                </a>
              </li>
              <li>
                <strong className="font-extrabold text-[#4E5062]">
                  Email:
                </strong>{" "}
                <a
                  href="mailto:hello@mintsanitary.com"
                  className="underline underline-offset-2"
                >
                  hello@mintsanitary.com
                </a>
              </li>
              <li>
                <strong className="font-extrabold text-[#4E5062]">
                  Available:
                </strong>{" "}
                7 days a week
              </li>
              <li>
                <strong className="font-extrabold text-[#4E5062]">
                  First-time customer promo:
                </strong>{" "}
                10% off your first clean with code MINT25
              </li>
            </ul>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Let&apos;s discuss how we can keep your North Vancouver commercial
            property looking professional and protect your building investment.{" "}
            <a href="/contact/" className="underline underline-offset-2">
              Call today or email us
            </a>{" "}
            to schedule a consultation. We&apos;re ready to transform your
            windows and your property&apos;s appearance.
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
            External Resources
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            For more information on commercial window cleaning safety standards
            and best practices:
          </p>
          <ul className="mt-6 space-y-3 font-body text-[15px] leading-[1.7] text-white/80">
            <li>
              <a
                href="https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation/part-11-fall-protection"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                WorkSafeBC Fall Protection Requirements
              </a>
            </li>
            <li>
              <a
                href="https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation/part-13-ladders-scaffolds-and-temporary-work-platforms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                WorkSafeBC Equipment Standards
              </a>
            </li>
            <li>
              <a
                href="https://www.trinityservices.com/benefits-of-commercial-window-cleaning/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                The ROI of Professional Window Cleaning
              </a>
            </li>
            <li>
              <a
                href="https://www.ruevac.com/commercial-property-curb-appeal-roi-quantifying-the-value-of-exterior-maintenance/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Curb Appeal Impact on Property Value
              </a>
            </li>
            <li>
              <a
                href="https://www.greatcanadianpropertyservices.ca/pressure-washing-articles/how-often-should-you-clean-your-homes-windows-in-a-rainy-coastal-climate"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Best Practices for BC Coastal Climate Maintenance
              </a>
            </li>
          </ul>
        </div>
      </section>
    </ServicePageLayout>
  );
}
