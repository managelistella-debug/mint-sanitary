import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/strata-cleaning-original
// so the CMS version at /services/strata-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Strata Cleaning Services | Greater Vancouver",
  description:
    "Strata cleaning for condo and townhouse buildings across Greater Vancouver. Eco-friendly products, flexible scheduling, and free estimates.",
  robots: { index: false, follow: false },
};

const commonAreas = [
  { title: "Lobbies and Main Entrances", body: "The lobby is the first impression for residents, guests, and prospective buyers. Daily cleaning keeps floors, glass doors, baseboards, and seating areas free of dirt and debris." },
  { title: "Hallways and Corridors", body: "High-traffic hallways collect dust, footprints, and debris throughout the day. Regular cleaning keeps floors and walls looking cared for between resident move-ins and move-outs." },
  { title: "Elevators and Elevator Lobbies", body: "Elevators are among the highest-touch surfaces in any building. Buttons, handrails, and mirrors need frequent attention to stay free of fingerprints and smudges." },
  { title: "Stairwells and Emergency Exits", body: "Stairwells matter for daily use and for safety. Clean, clear stairwells and emergency exits support both cleanliness standards and building safety requirements." },
  { title: "Parkades and Underground Garages", body: "Parkades take a beating from dirt, salt residue, and automotive fluids, especially through winter weather. Routine cleaning helps extend the life of the concrete and keeps the space presentable." },
  { title: "Amenity Rooms", body: "Fitness centers, lounges, meeting rooms, and pool areas all need consistent attention to stay usable and sanitary for residents." },
  { title: "Recycling and Garbage Areas", body: "Waste and recycling rooms can quickly turn into a source of odors and pests without regular cleaning and disinfecting. Consistent service prevents contamination and keeps these areas under control." },
  { title: "Restrooms and Common Washrooms", body: "Common washrooms require toilet cleaning, sink sanitizing, and consistent restocking of supplies so they stay ready for residents and guests." },
  { title: "Exterior Common Spaces", body: "Balconies, patios, and courtyards benefit from pressure washing and seasonal leaf cleanup to stay presentable throughout the year." },
  { title: "Windows and Glass Surfaces", body: "Interior and exterior glass, lobby doors, and mailroom windows all need regular attention to keep the building looking sharp from the street and from inside." },
];

const whyItMatters = [
  { title: "Legal Compliance", body: "The BC Strata Property Act, Section 72, requires strata corporations to maintain common property. Residents can file complaints with the strata council if cleaning standards aren't met, which puts pressure on property managers to keep a consistent program in place." },
  { title: "Resident Satisfaction", body: "Clean common areas play a direct role in how residents feel about where they live. Buildings that stay consistently clean tend to see higher resident satisfaction and lower turnover." },
  { title: "Property Value", body: "Well-maintained buildings command higher resale values. A clean lobby, hallway, and parkade signal to buyers and appraisers that the building is cared for." },
  { title: "Liability Protection", body: "Documented, regular cleaning creates a paper trail that helps protect strata councils and property managers against slip-and-fall claims." },
  { title: "Asset Life Extension", body: "Regular cleaning extends the life of flooring, carpet, and elevators, which reduces long-term capital repair and replacement costs for the strata corporation." },
];

const processSteps = [
  "Initial Consultation and Site Assessment. We walk the property and look at building size, occupancy, and traffic patterns before recommending a plan.",
  "Customized Cleaning Plan. Every building gets a schedule built around its layout and around resident schedules, not a generic template.",
  "Eco-Friendly Product Selection. We use non-toxic, environmentally responsible products throughout common areas.",
  "High-Touch Surface Focus. Elevator buttons, handrails, door handles, and light switches get extra attention on every visit.",
  "Flexible Scheduling. Service is available seven days a week, including weekends and holidays, to fit around building activity.",
  "Documentation and Reporting. Property managers receive cleaning logs and reports so the strata council has a clear record of service.",
  "Quality Assurance. We inspect completed work and fix any issues right away, rather than waiting for the next scheduled visit.",
];

const whyChoose = [
  { title: "Local Expertise Across Greater Vancouver", body: "We work with many different building types across the region, including older walk-up buildings and newer high-rise towers." },
  { title: "Seven-Day Availability", body: "Cleaning is available every day of the week, including evenings, weekends, and holidays." },
  { title: "Eco-Friendly Products", body: "Our products are non-toxic and biodegradable, which matters for residents with allergies or sensitivities." },
  { title: "Bonded, Insured, and Registered", body: "Mint Sanitary carries $2 million in liability insurance, is registered with WorkSafeBC, and every team member is background-checked." },
  { title: "Free Estimates and Consultations", body: "We walk the property and provide a written estimate before any commitment." },
  { title: "First Clean Discount", body: "New strata clients get 10% off their first clean with code MINT26." },
  { title: "Flexible Service Frequency", body: "Daily, twice-weekly, or bi-weekly service, based on what the building needs." },
  { title: "Same-Day Response", body: "Urgent cleaning needs, like a spill in the lobby or a mess in the parkade, get a same-day response whenever possible." },
];

const pricingTiers = [
  { title: "Small Buildings (30–50 units)", body: "Twice-weekly: $600 – $1,200/mo. Daily: $1,500 – $2,500/mo." },
  { title: "Medium Buildings (50–150 units)", body: "Twice-weekly: $1,200 – $2,000/mo. Daily: $2,500 – $4,500/mo." },
  { title: "Larger Buildings (150+ units)", body: "Twice-weekly: $2,000 – $5,000+/mo. Daily: $5,000 – $10,000+/mo." },
];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/services/commercial-cleaning" },
  { title: "Office Cleaning", href: "/services/office-cleaning" },
  { title: "Post-Construction Cleaning", href: "/services/post-construction-cleaning" },
];

const faqItems = [
  {
    question: "How much does strata cleaning cost?",
    answer:
      "Pricing depends on building size and service frequency. Small buildings (30 to 50 units) typically run $600 to $1,200 per month for twice-weekly service, or $1,500 to $2,500 per month for daily service. Medium and larger buildings run higher, based on amenities and parkade size. See the pricing section above for full tiers, or request a free estimate for your building.",
  },
  {
    question: "What common areas do you clean in strata buildings?",
    answer:
      "We clean lobbies, hallways, elevators, stairwells, parkades, amenity rooms, recycling and garbage areas, restrooms, exterior common spaces, and windows and glass surfaces.",
  },
  {
    question: "Are you insured to work in our building?",
    answer:
      "Yes. Mint Sanitary carries $2 million in liability insurance, is registered with WorkSafeBC, and every staff member is background-checked before starting work.",
  },
  {
    question: "Do you offer daily cleaning for high-traffic buildings?",
    answer: "Yes. We offer daily, twice-weekly, and bi-weekly service, depending on building size, occupancy, and traffic.",
  },
  {
    question: "Can you provide cleaning logs for our strata council?",
    answer:
      "Yes. We provide documentation and reporting after each visit so the property manager and strata council have a clear record of the work performed.",
  },
  {
    question: "What products do you use in common areas?",
    answer: "We use eco-friendly, non-toxic, and biodegradable products throughout, which is safer for residents with allergies or sensitivities.",
  },
  {
    question: "Do you offer a discount for new strata clients?",
    answer: "Yes. New clients get 10% off their first clean with code MINT26.",
  },
  {
    question: "How quickly can you start service?",
    answer:
      "After a free consultation and site walkthrough, most buildings can start service within a short timeframe. Urgent requests can often get a same-day response.",
  },
  {
    question: "Do you clean parkades and underground garages?",
    answer:
      "Yes. Parkade cleaning is part of our standard strata service, including dirt, salt residue, and automotive fluid buildup, which matters most through winter months.",
  },
  {
    question: "What areas of Greater Vancouver do you serve?",
    answer: "We serve strata buildings throughout Greater Vancouver, including North Vancouver, West Vancouver, Vancouver, and Burnaby.",
  },
];

export default function ServicesStrataCleaningPage() {
  return (
    <ServicePageLayout
      title="Strata Cleaning Services for Condo and Townhouse Buildings"
      heroImage="/strata-cleaning-north-vancouver.jpg"
      heroSubtitle="Common Area Cleaning for Multi-Unit Buildings"
      heroIntro="If you manage a condo building, townhouse complex, or multi-unit residential property, you already know how demanding it is to keep common areas spotless. Lobbies get dirty fast. Elevators accumulate fingerprints and smudges. Parkades collect dust, salt, and debris that tracks in with every vehicle. Mint Sanitary provides strata cleaning for buildings across Greater Vancouver, with service plans built around each property's size, amenities, and resident traffic patterns."
      faqItems={faqItems}
      ctaHeading="Get a Free Strata Cleaning Estimate"
      ctaBody="Request a free walkthrough and a written estimate for your building. New clients get 10% off their first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Common Areas (white bg) ───────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Common Areas We Clean in Strata Buildings
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
            Why Common Area Cleaning Matters for Strata Buildings
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
            Our Strata Cleaning Process
          </h2>
          <div className="mt-10 overflow-hidden rounded-[20px]">
            <img
              src="/mint-sanitary-service-van-north-vancouver.jpg"
              alt="Mint Sanitary service van arriving for a strata cleaning appointment"
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

      {/* ── Why Choose (blue bg) ──────────────────────────────── */}
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
            Why Property Managers and Strata Councils Choose Mint Sanitary
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Strata Cleaning Pricing for Buildings Across Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing depends on building size, unit count, amenity mix, and
            how often the building needs service. Here is what strata
            cleaning typically costs for buildings across Greater
            Vancouver.
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
            Pricing factors include building square footage, number of
            units, amenity mix, service frequency, specific cleaning
            requirements, and parkade size and condition. For an accurate
            quote for your building, request a free estimate and site
            walkthrough.
          </p>
          <img
            src="/mint-service-area-map.png"
            alt="Map of Greater Vancouver showing Mint Sanitary's strata cleaning service area"
            className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── Related Services (f4f8ff bg) ──────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Related Services
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary also provides commercial cleaning services, office
            cleaning services, and post-construction cleaning services for
            buildings across Greater Vancouver. If your property is in
            North Vancouver, see our dedicated page for{" "}
            <a href="/north-vancouver/strata-cleaning" className="underline underline-offset-2">
              strata cleaning in North Vancouver
            </a>{" "}
            for local pricing and service details.
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
