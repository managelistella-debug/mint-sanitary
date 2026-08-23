import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/church-cleaning-original
// so the CMS version at /services/church-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Church Cleaning Services in Greater Vancouver",
  description:
    "Professional cleaning for churches, mosques, temples, and synagogues across Greater Vancouver. Eco-friendly products, respectful care, free quotes.",
  robots: { index: false, follow: false },
};

const includedAreas = [
  {
    title: "Sanctuary and Worship Areas",
    body: "Vacuuming carpets and rugs, dusting pews, railings, and wooden surfaces, polishing wood finishes, and handling altars and religious symbols with reverence. Communion items are cleaned and sanitized according to your preferences, and lighting fixtures and trim get regular dusting.",
  },
  {
    title: "Bathrooms",
    body: "Deep disinfection, tile and grout cleaning, toilet and urinal sanitation, and drain treatment to stop odors before they start. We restock supplies and can handle floor stripping and waxing when it's needed.",
  },
  {
    title: "Fellowship Halls and Common Areas",
    body: "Floor care suited to the surface, table and chair sanitizing after events, trash and recycling management, and spot cleaning on walls where hands and shoes leave marks.",
  },
  {
    title: "Nurseries and Children's Rooms",
    body: "Non-toxic, eco-friendly sanitizing that's safe for infants and toddlers, crib and changing table disinfection, toy and equipment cleaning, and steps to reduce allergens in a room where little ones spend hours each week.",
  },
  {
    title: "Kitchens and Food Service Areas",
    body: "Appliance cleaning inside and out, countertop and backsplash sanitizing, floor and baseboard care, and food prep practices that meet local health standards.",
  },
  {
    title: "Administrative Offices and Storage",
    body: "Dusting and surface cleaning, trash removal and recycling, vacuuming and mopping, and organization or tidying if your staff wants it.",
  },
  {
    title: "Specialized Services",
    body: "Electrostatic spraying for virus protection, deep carpet extraction, pressure washing for exterior areas, post-event cleanup after weddings, funerals, or gatherings, and seasonal deep cleaning when your building needs more than a routine visit.",
  },
];

const comparisonFactors = [
  { factor: "Consistency", volunteer: "Irregular, depends on who's available", professional: "Scheduled and reliable, same quality every visit" },
  { factor: "Time Investment", volunteer: "20 to 40+ volunteer hours monthly", professional: "2 to 4 hours per session with trained staff" },
  { factor: "Expertise", volunteer: "General housekeeping knowledge", professional: "Trained specifically in cleaning places of worship" },
  { factor: "Equipment", volunteer: "Basic household supplies", professional: "Professional-grade tools and disinfectants" },
  { factor: "Burnout Risk", volunteer: "High, ongoing commitment wears people down", professional: "None, paid professionals handle the work" },
  { factor: "Health and Safety", volunteer: "Varies by volunteer", professional: "Certified, trained, and insured staff" },
];

const processSteps = [
  { title: "Consultation and Walkthrough", body: "We start with a free consultation. Our team assesses square footage, traffic patterns, special areas like sanctuaries and nurseries, and your priorities. No obligation, just a clear picture of what your building needs." },
  { title: "Customized Cleaning Plan", body: "We build a plan around your schedule, whether that's weekly, biweekly, or monthly. Cleanings can be scheduled for early mornings, late evenings, or weekday slots so services and programs are never disrupted." },
  { title: "Eco-Friendly Preparation", body: "We use green, non-toxic products that are safe for children, elderly congregants, and anyone with sensitivities." },
  { title: "Professional Execution", body: "Our bonded and insured team arrives with all necessary equipment and works efficiently and respectfully throughout your building." },
  { title: "Final Inspection", body: "Before we leave, we walk through the space to confirm everything meets your standards. Any concerns get addressed right away." },
  { title: "Ongoing Communication", body: "Scheduling changes, special events, or last-minute requests all go through one point of contact, so managing your cleaning service stays simple." },
];

const whyChoose = [
  { title: "Flexibility and Availability", body: "We work 7 days a week, including early mornings and evenings, so your Sunday services and midweek programs are never disrupted by cleaning crews." },
  { title: "Eco-Friendly Commitment", body: "Green, non-toxic products mean your congregation breathes cleaner air, and children in the nursery and Sunday school stay safer." },
  { title: "Background-Checked Professional Staff", body: "Every team member is bonded, insured, and background-checked, and trained to handle sacred spaces with the respect they deserve." },
  { title: "Transparent Pricing", body: "Free estimates and fixed pricing, with a 10 percent discount on your first clean using code MINT26." },
  { title: "Proven Track Record", body: "We have worked with congregations of every size across Greater Vancouver, and references are available on request." },
  { title: "Local Knowledge", body: "From North Vancouver to Burnaby, West Vancouver, and Vancouver, our teams know the building types and maintenance needs common to churches, mosques, temples, and synagogues in this region." },
];

const pricingTiers = [
  { title: "Small Facility", range: "$200 – $400", details: "Monthly rate" },
  { title: "Medium Facility", range: "$400 – $800", details: "Monthly rate" },
  { title: "Large Facility", range: "$800 – $1,500+", details: "Monthly rate" },
];

const faqItems = [
  {
    question: "How often should a place of worship schedule professional cleaning?",
    answer:
      "Most churches, mosques, temples, and synagogues do well with weekly or biweekly cleaning. Buildings that host multiple services a week or frequent community events often benefit from twice-weekly visits.",
  },
  {
    question: "Are the cleaning products safe for children in the nursery?",
    answer:
      "Yes. We use EPA-approved, eco-friendly products that are safe for sensitive skin and respiratory systems. Congregations with nurseries and Sunday schools trust these products around young children.",
  },
  {
    question: "Can cleaning be scheduled around our services and events?",
    answer:
      "Yes. Our scheduling is flexible, and we work around your service times, midweek programs, weddings, and funerals so cleaning never gets in the way of your congregation's activities.",
  },
  {
    question: "What makes place of worship cleaning different from standard office cleaning?",
    answer:
      "Sacred spaces need a different level of care. Our staff are trained to respect these environments and handle altars, religious symbols, and delicate furnishings the right way.",
  },
  {
    question: "How do you handle allergens in a place of worship?",
    answer:
      "We use HEPA filtration vacuums and electrostatic spraying, with extra attention paid to carpets, upholstered seating, and nurseries where allergens tend to build up.",
  },
  {
    question: "Can you clean up after weddings and funerals?",
    answer:
      "Yes. We've handled post-event cleanup for countless weddings, funerals, and gatherings, restoring the facility quickly and respectfully so it's ready for the next use.",
  },
  {
    question: "How do you protect religious items and artwork during cleaning?",
    answer:
      "Our staff are trained to handle these items with care. We ask questions upfront about what's sacred or delicate, then use soft cloths, appropriate products, and careful techniques throughout the clean.",
  },
  {
    question: "Do you offer emergency cleaning for places of worship?",
    answer:
      "We offer service 7 days a week and can often accommodate urgent requests, including after unexpected damage or illness. Call 236-688-3248 to check availability for same-day service.",
  },
  {
    question: "Can you customize plans for different denominations and traditions?",
    answer:
      "Yes. We work with pastors, imams, rabbis, facility managers, and congregations to build plans that align with the specific needs and values of your community.",
  },
  {
    question: "How much can a congregation save by switching to professional cleaning?",
    answer:
      "Volunteer cleaning often costs more in hidden labor and materials than most congregations realize. Professional service typically runs $300 to $800 monthly and replaces 20 to 40+ volunteer hours.",
  },
  {
    question: "What areas of Greater Vancouver do you serve?",
    answer:
      "We serve congregations throughout North Vancouver, West Vancouver, Vancouver, and Burnaby, and can accommodate additional areas on request.",
  },
  {
    question: "Do you offer a discount for new clients?",
    answer: "Yes. New clients get 10 percent off their first clean with code MINT26.",
  },
  {
    question: "Is your staff insured for work inside a place of worship?",
    answer: "Yes. All Mint Sanitary staff are bonded, insured, and background-checked before they set foot in your building.",
  },
  {
    question: "Do you provide floor stripping and waxing for fellowship halls?",
    answer:
      "Yes, this is available as part of our specialized services and can be scheduled as a one-time deep clean or built into your regular plan.",
  },
];

export default function ServicesChurchCleaningPage() {
  return (
    <ServicePageLayout
      title="Church and Place of Worship Cleaning Services in Greater Vancouver"
      heroImage="/church-cleaning-sanctuary-north-vancouver.jpg"
      heroSubtitle="Respectful Care for Sacred Spaces"
      heroIntro="Your congregation deserves a clean, welcoming space to gather, worship, and connect. Mint Sanitary specializes in professional cleaning for churches, mosques, temples, and synagogues across Greater Vancouver. We bring respect, expertise, and care to every sacred space we clean, from the sanctuary floor to the smallest details in the nursery. Places of worship see a mix of weekly services, weddings, funerals, potlucks, and community events, and cleaning a space like this takes staff who understand what needs gentle handling and what needs to be left exactly as it is."
      faqItems={faqItems}
      ctaHeading="Ready for a Free Walkthrough and a Fixed Quote?"
      ctaBody="Get your church cleaning rates today. New clients save 10% on their first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── What's Included (white bg) ────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Our Church and Place of Worship Cleaning
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We build a cleaning plan around the layout and needs of your
            building, but most places of worship across Greater Vancouver
            need coverage in these areas.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedAreas.map((area) => (
              <div key={area.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{area.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Professional vs. Volunteer (blue bg) ──────────────── */}
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
            Professional Cleaning vs. Volunteer Cleaning Teams
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Many congregations start with volunteer cleaning crews. It works
            for a while, but it usually comes with hidden costs.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comparisonFactors.map((f) => (
              <div key={f.factor} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{f.factor}</h3>
                <div className="mt-3 space-y-2">
                  <p className="font-body text-[14px] leading-[1.7] text-white/60">
                    <span className="text-[12px] font-bold uppercase tracking-wide">Volunteer:</span>{" "}
                    <span className="text-white/80">{f.volunteer}</span>
                  </p>
                  <p className="font-body text-[14px] leading-[1.7] text-white/60">
                    <span className="text-[12px] font-bold uppercase tracking-wide">Professional:</span>{" "}
                    <span className="text-white/80">{f.professional}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Volunteers give their time out of love for their congregation,
            and that matters. But a cleaning schedule built entirely on
            volunteer availability tends to fall apart during busy seasons,
            exactly when a building needs the most attention.
          </p>
        </div>
      </section>

      {/* ── Process (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our Process for Cleaning Places of Worship
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose (f4f8ff bg) ────────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Congregations Across Greater Vancouver Choose Mint Sanitary
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing (blue bg) ─────────────────────────────────── */}
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
            Church and Place of Worship Cleaning Pricing
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing depends on the size of your building, how often you
            need service, and what areas need attention. Most congregations
            fall into one of these monthly ranges.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                <p className="mt-2 font-display-reg text-[24px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Every quote starts with a free walkthrough, so you get a number
            based on your actual building, not a guess.
          </p>
        </div>
      </section>

      {/* ── Serving Greater Vancouver (white bg) ──────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Serving Congregations Across Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            If your congregation is located in North Vancouver specifically,
            visit our{" "}
            <a href="/north-vancouver/church-cleaning/" className="underline underline-offset-2">
              church cleaning in North Vancouver
            </a>{" "}
            page for local detail. If your building also needs{" "}
            <a href="/north-vancouver/commercial-cleaning/" className="underline underline-offset-2">
              commercial cleaning
            </a>
            ,{" "}
            <a href="/north-vancouver/office-cleaning/" className="underline underline-offset-2">
              office cleaning
            </a>
            , or runs a daycare or school program that needs{" "}
            <a href="/north-vancouver/school-cleaning/" className="underline underline-offset-2">
              school cleaning
            </a>
            , we cover those services too.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
