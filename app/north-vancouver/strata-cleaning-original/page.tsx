import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/strata-cleaning-original
// so the CMS version at /north-vancouver/strata-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Strata Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Strata cleaning in North Vancouver for condo and townhouse buildings. Eco-friendly products, seven-day scheduling, and free estimates. Call today.",
  robots: { index: false, follow: false },
};

const commonAreas = [
  { title: "Lobbies and Main Entrances", body: "The lobby is the first impression for residents, guests, and prospective buyers in any North Vancouver building. Daily cleaning keeps floors, glass doors, baseboards, and seating areas free of dirt and debris." },
  { title: "Hallways and Corridors", body: "High-traffic hallways in North Vancouver buildings collect dust, footprints, and debris throughout the day. Regular cleaning keeps floors and walls looking cared for between resident move-ins and move-outs." },
  { title: "Elevators and Elevator Lobbies", body: "Elevators are among the highest-touch surfaces in any North Vancouver strata building. Buttons, handrails, and mirrors need frequent attention to stay free of fingerprints and smudges." },
  { title: "Stairwells and Emergency Exits", body: "Stairwells matter for daily use and for safety in North Vancouver buildings. Clean, clear stairwells and emergency exits support both cleanliness standards and building safety requirements." },
  { title: "Parkades and Underground Garages", body: "North Vancouver parkades take a beating from dirt, salt residue, and automotive fluids, especially through the wetter winter months common to the North Shore. Routine cleaning helps extend the life of the concrete and keeps the space presentable for residents." },
  { title: "Amenity Rooms", body: "Fitness centers, lounges, meeting rooms, and pool areas in North Vancouver buildings all need consistent attention to stay usable and sanitary for residents." },
  { title: "Recycling and Garbage Areas", body: "Waste and recycling rooms in North Vancouver strata buildings can quickly turn into a source of odors and pests without regular cleaning and disinfecting. Consistent service prevents contamination and keeps these areas under control." },
  { title: "Restrooms and Common Washrooms", body: "Common washrooms in North Vancouver buildings require toilet cleaning, sink sanitizing, and consistent restocking of supplies so they stay ready for residents and guests." },
  { title: "Exterior Common Spaces", body: "Balconies, patios, and courtyards on North Vancouver properties, including hillside buildings near Edgemont Village and Lynn Valley, benefit from pressure washing and seasonal leaf cleanup to stay presentable throughout the year." },
  { title: "Windows and Glass Surfaces", body: "Interior and exterior glass, lobby doors, and mailroom windows all need regular attention to keep a North Vancouver building looking sharp from the street and from inside." },
];

const whyItMatters = [
  { title: "Legal Compliance", body: "The BC Strata Property Act, Section 72, requires strata corporations, including those in North Vancouver, to maintain common property. Residents can file complaints with the strata council if cleaning standards aren't met, which puts pressure on North Vancouver property managers to keep a consistent program in place. The Province of BC's guidance on repairs and maintenance and resources from the Condominium Home Owners Association (CHOA) both cover this obligation in more detail." },
  { title: "Resident Satisfaction", body: "Clean common areas play a direct role in how residents in North Vancouver buildings feel about where they live. Buildings that stay consistently clean tend to see higher resident satisfaction and lower turnover." },
  { title: "Property Value", body: "Well-maintained buildings command higher resale values in North Vancouver's competitive housing market. A clean lobby, hallway, and parkade signal to buyers and appraisers that the building is cared for." },
  { title: "Liability Protection", body: "Documented, regular cleaning creates a paper trail that helps protect North Vancouver strata councils and property managers against slip-and-fall claims." },
  { title: "Asset Life Extension", body: "Regular cleaning extends the life of flooring, carpet, and elevators in North Vancouver buildings, which reduces long-term capital repair and replacement costs for the strata corporation." },
];

const processSteps = [
  "Initial Consultation and Site Assessment. We walk the North Vancouver property and look at building size, occupancy, and traffic patterns before recommending a plan.",
  "Customized Cleaning Plan. Every North Vancouver building gets a schedule built around its layout and around resident schedules, not a generic template.",
  "Eco-Friendly Product Selection. We use non-toxic, environmentally responsible products throughout common areas.",
  "High-Touch Surface Focus. Elevator buttons, handrails, door handles, and light switches get extra attention on every visit.",
  "Flexible Scheduling. Service is available seven days a week, including weekends and holidays, to fit around North Vancouver building activity.",
  "Documentation and Reporting. North Vancouver property managers receive cleaning logs and reports so the strata council has a clear record of service.",
  "Quality Assurance. We inspect completed work and fix any issues right away, rather than waiting for the next scheduled visit.",
];

const whyChooseItems = [
  { title: "Local North Vancouver Expertise", body: "Our teams are familiar with the different building types found across North Vancouver neighbourhoods, from older Lower Lonsdale walk-ups to newer towers near the waterfront." },
  { title: "Seven-Day Availability", body: "Cleaning is available every day of the week in North Vancouver, including evenings, weekends, and holidays." },
  { title: "Eco-Friendly Products", body: "Our products are non-toxic and biodegradable, which matters for North Vancouver residents with allergies or sensitivities." },
  { title: "Bonded, Insured, and Registered", body: "Mint Sanitary carries $2 million in liability insurance, is registered with WorkSafeBC, and every team member is background-checked." },
  { title: "Free Estimates and Consultations", body: "We walk the North Vancouver property and provide a written estimate before any commitment." },
  { title: "First Clean Discount", body: "New North Vancouver strata clients get 10% off their first clean with code MINT26." },
  { title: "Flexible Service Frequency", body: "Daily, twice-weekly, or bi-weekly service, based on what the North Vancouver building needs." },
  { title: "Same-Day Response", body: "Urgent cleaning needs in North Vancouver buildings, like a spill in the lobby or a mess in the parkade, get a same-day response whenever possible." },
];

const pricingTiers = [
  { title: "Small Buildings (30–50 units)", body: "Twice-weekly: $600 – $1,200/mo. Daily: $1,500 – $2,500/mo." },
  { title: "Medium Buildings (50–150 units)", body: "Twice-weekly: $1,200 – $2,000/mo. Daily: $2,500 – $4,500/mo." },
  { title: "Larger Buildings (150+ units)", body: "Twice-weekly: $2,000 – $5,000+/mo. Daily: $5,000 – $10,000+/mo." },
];

const serviceAreas = ["Lower Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont Village", "Seymour Heights", "West Vancouver", "Vancouver", "Burnaby"];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/north-vancouver/commercial-cleaning" },
  { title: "Office Cleaning", href: "/north-vancouver/office-cleaning" },
  { title: "Post-Construction Cleaning", href: "/north-vancouver/post-construction-cleaning" },
];

const faqItems = [
  {
    question: "How much does strata cleaning cost in North Vancouver?",
    answer:
      "Pricing for a North Vancouver strata building depends on size and service frequency. Small buildings (30 to 50 units) typically run $600 to $1,200 per month for twice-weekly service, or $1,500 to $2,500 per month for daily service. Medium and larger North Vancouver buildings run higher, based on amenities and parkade size.",
  },
  {
    question: "What areas do you clean in North Vancouver strata buildings?",
    answer:
      "In North Vancouver strata buildings, we clean lobbies, hallways, elevators, stairwells, parkades, amenity rooms, recycling and garbage areas, restrooms, exterior common spaces, and windows and glass surfaces.",
  },
  {
    question: "Do you offer daily cleaning for North Vancouver condo buildings?",
    answer: "Yes. For North Vancouver condo buildings, we offer daily, twice-weekly, and bi-weekly service, depending on building size, occupancy, and traffic.",
  },
  {
    question: "Are you insured for strata cleaning in North Vancouver?",
    answer:
      "Yes. Mint Sanitary carries $2 million in liability insurance for all strata cleaning work in North Vancouver, is registered with WorkSafeBC, and every staff member is background-checked.",
  },
  {
    question: "Do you offer free estimates for strata cleaning in North Vancouver?",
    answer: "Yes. We walk the North Vancouver property and provide a written estimate before any commitment, at no cost.",
  },
  {
    question: "What is the first clean discount for North Vancouver strata properties?",
    answer: "New North Vancouver strata clients get 10% off their first clean with code MINT26.",
  },
  {
    question: "Do you clean parkades in North Vancouver strata buildings?",
    answer:
      "Yes. Parkade cleaning is part of our standard service for North Vancouver strata buildings, covering dirt, salt residue, and automotive fluid buildup common through the North Shore's winter weather.",
  },
  {
    question: "How do you handle high-touch surfaces in North Vancouver elevators?",
    answer:
      "In North Vancouver elevators, we give extra attention to buttons, handrails, and mirrors on every visit, since these are among the highest-touch surfaces in the building.",
  },
  {
    question: "Can you work around resident schedules in North Vancouver buildings?",
    answer: "Yes. Every North Vancouver building we service gets a cleaning schedule built around resident schedules and building activity, not a generic template.",
  },
  {
    question: "Do you provide cleaning logs for North Vancouver strata councils?",
    answer: "Yes. North Vancouver strata councils and property managers receive cleaning logs and reports after each visit as part of our standard service.",
  },
  {
    question: "What products do you use for North Vancouver strata cleaning?",
    answer:
      "For strata cleaning in North Vancouver, we use eco-friendly, non-toxic, and biodegradable products throughout common areas, which is safer for residents with allergies or sensitivities.",
  },
  {
    question: "Do you serve small and large buildings in North Vancouver?",
    answer: "Yes. We serve North Vancouver buildings of all sizes, from small 30 to 50 unit properties to larger buildings with 150 or more units.",
  },
  {
    question: "How quickly can you start strata cleaning service in North Vancouver?",
    answer: "After a free consultation and site walkthrough, most North Vancouver buildings can start service within a short timeframe.",
  },
  {
    question: "Do you clean on weekends and holidays in North Vancouver?",
    answer: "Yes. Service is available seven days a week in North Vancouver, including evenings, weekends, and holidays.",
  },
  {
    question: "What neighbourhoods in North Vancouver do you serve for strata cleaning?",
    answer: "We provide strata cleaning throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights.",
  },
  {
    question: "Is strata cleaning legally required in North Vancouver?",
    answer:
      "The BC Strata Property Act, Section 72, requires strata corporations in North Vancouver and across the province to maintain common property, and residents can file complaints if cleaning standards aren't met. The Province of BC and CHOA both publish resources covering these maintenance obligations.",
  },
  {
    question: "Do you offer same-day response for urgent cleaning needs in North Vancouver?",
    answer: "Yes. Urgent needs at North Vancouver buildings, like a spill in the lobby or a mess in the parkade, get a same-day response whenever possible.",
  },
  {
    question: "How do I switch cleaning companies for my North Vancouver strata building?",
    answer:
      "We start with a free consultation and site walkthrough for your North Vancouver building, review your current pain points with the strata council, and build a plan and schedule around them before taking over service.",
  },
];

export default function StrataCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Strata Cleaning in North Vancouver"
      heroImage="/strata-cleaning-north-vancouver.jpg"
      heroSubtitle="Common Area Cleaning for Multi-Unit Buildings"
      heroIntro="If you manage a condo building, townhouse complex, or multi-unit residential property in North Vancouver, you know how demanding it is to keep common areas spotless. Lobbies get dirty fast. Elevators accumulate fingerprints and smudges. Parkades collect dust and debris. Mint Sanitary is based in North Vancouver and provides strata cleaning to condo buildings, townhouse complexes, and multi-unit properties throughout the city, from Lower Lonsdale to Lynn Valley to Deep Cove."
      faqItems={faqItems}
      ctaHeading="Get a Free Strata Cleaning Estimate in North Vancouver"
      ctaBody="Request a free walkthrough and a written estimate for your North Vancouver building. New North Vancouver clients get 10% off their first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Common Areas (white bg) ───────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Common Areas We Clean in North Vancouver Strata Buildings
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {commonAreas.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters (blue bg) ──────────────────────────── */}
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
            Why Common Area Cleaning Matters for North Vancouver Strata Corporations
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whyItMatters.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Our Strata Cleaning Process in North Vancouver
          </h2>
          <div className="mt-10 overflow-hidden rounded-[20px]">
            <img
              src="/mint-sanitary-service-van-north-vancouver.jpg"
              alt="Mint Sanitary service van arriving for a North Vancouver strata cleaning appointment"
              className="h-[280px] w-full object-cover sm:h-[340px]"
              loading="lazy"
            />
          </div>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <li key={step} className="rounded-[14px] bg-white/[0.12] p-5 font-body text-[15px] leading-[1.7] text-white/80">
                <span className="mr-2 font-extrabold text-white">{i + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Why Choose Mint Sanitary ── */}
      <AccordionWithImage
        heading="Why North Vancouver Property Managers and Strata Councils Choose Mint Sanitary"
        items={whyChooseItems}
        image="/strata-cleaning-north-vancouver.jpg"
        imageAlt="Strata cleaning common areas in a North Vancouver building"
        ctaHref="/rates"
        ctaLabel="Get a Free Estimate"
      />

      {/* ── Pricing (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Strata Cleaning Pricing in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing for North Vancouver strata buildings depends on
            building size, unit count, amenity mix, and how often the
            building needs service. Here is what strata cleaning typically
            costs for North Vancouver buildings.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing for a North Vancouver building depends on square
            footage, number of units, amenity mix, service frequency,
            specific cleaning requirements, and parkade size and condition.
            For an accurate quote, request a free estimate and site
            walkthrough.
          </p>
        </div>
      </section>

      {/* ── Success Story (blue bg) ───────────────────────────── */}
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
            A North Vancouver Success Story: Lower Lonsdale
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            I remember when we first started cleaning a 45-unit complex in
            Lower Lonsdale. The strata council had been cycling through
            contractors, frustrated with inconsistent quality. We took time
            to understand their specific concerns: the lobby tracked water
            during rainy season, the parkade smelled musty, and residents
            complained about elevator cleanliness. We adjusted our
            approach, focused on those pain points, and stuck with the same
            team for continuity. Two years later, we are still their
            contractor. That is the difference between a cleaning service
            and a cleaning partner.
          </p>
        </div>
      </section>

      {/* ── Service Areas (white bg) ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Areas of North Vancouver We Serve
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary provides strata cleaning throughout North
              Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove,
              Edgemont Village, and Seymour Heights. We also serve strata
              buildings in West Vancouver, Vancouver, and Burnaby.
            </p>
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
              alt="Map of Greater Vancouver showing Mint Sanitary's strata cleaning service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Related Services (f4f8ff bg) ──────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Related Services in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary also provides commercial cleaning in North
            Vancouver, office cleaning in North Vancouver, and
            post-construction cleaning in North Vancouver. If your building
            is outside North Vancouver, see our{" "}
            <a href="/services/strata-cleaning" className="underline underline-offset-2">
              general strata cleaning services page
            </a>{" "}
            for pricing that applies across Greater Vancouver.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedServices.map((s) => (
              <div key={s.href} className="rounded-[14px] bg-white/[0.12] p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">{s.title}</h3>
                <a
                  href={s.href}
                  className="mt-5 inline-block w-fit border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
