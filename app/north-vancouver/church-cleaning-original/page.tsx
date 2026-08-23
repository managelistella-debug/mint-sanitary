import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/church-cleaning-original
// so the CMS version at /north-vancouver/church-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Church Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional church cleaning in North Vancouver. Eco-friendly, respectful care for sanctuaries, nurseries, and fellowship halls. Free quotes.",
  robots: { index: false, follow: false },
};

const includedAreas = [
  {
    title: "Sanctuary and Worship Areas",
    body: "Vacuuming carpets and rugs, dusting pews, railings, and wooden surfaces, polishing wood finishes, and handling altars and religious symbols with reverence. Communion items are cleaned and sanitized according to your preferences, and lighting fixtures and trim get regular attention.",
  },
  {
    title: "Bathrooms",
    body: "Deep disinfection, tile and grout cleaning, toilet and urinal sanitation, and drain treatment to stop odors before they start. We restock supplies and can handle floor stripping and waxing as needed.",
  },
  {
    title: "Fellowship Halls and Common Areas",
    body: "Floor care suited to the surface, table and chair sanitizing after events, trash and recycling management, and spot cleaning on walls where hands and shoes leave marks.",
  },
  {
    title: "Nurseries and Children's Rooms",
    body: "Non-toxic, eco-friendly sanitizing that's safe for infants and toddlers, crib and changing table disinfection, toy and equipment cleaning, and steps to cut down allergens in the rooms your youngest members use most.",
  },
  {
    title: "Kitchens and Food Service Areas",
    body: "Appliance cleaning inside and out, countertop and backsplash sanitizing, floor and baseboard care, and food prep practices that meet local health standards.",
  },
  {
    title: "Administrative Offices and Storage",
    body: "Dusting and surface cleaning, trash removal and recycling, vacuuming and mopping, and organization or tidying when your staff wants it.",
  },
  {
    title: "Specialized Services",
    body: "Electrostatic spraying for virus protection, deep carpet extraction, pressure washing for exterior areas, post-event cleanup after weddings, funerals, or gatherings, and seasonal deep cleaning for North Vancouver's rainy winters and pollen-heavy springs.",
  },
];

const comparisonFactors = [
  { factor: "Consistency", volunteer: "Irregular, depends on who's available", professional: "Scheduled and reliable, same quality every visit" },
  { factor: "Time Investment", volunteer: "20 to 40+ volunteer hours monthly", professional: "2 to 4 hours per session with trained staff" },
  { factor: "Expertise", volunteer: "General housekeeping knowledge", professional: "Trained specifically in place of worship cleaning" },
  { factor: "Equipment", volunteer: "Basic household supplies", professional: "Professional-grade tools and disinfectants" },
  { factor: "Burnout Risk", volunteer: "High, ongoing commitment wears people down", professional: "None, paid professionals handle the work" },
  { factor: "Health and Safety", volunteer: "Varies by volunteer", professional: "Certified, trained, and insured staff" },
];

const processSteps = [
  { title: "Consultation and Walkthrough", body: "We start with a free consultation at your North Vancouver church. Our team assesses square footage, traffic patterns, special areas like the sanctuary and nursery, and your priorities. No obligation, just a clear picture of what your building needs." },
  { title: "Customized Cleaning Plan", body: "We build a plan around your schedule, whether that's weekly, biweekly, or monthly, and it fits your budget. Cleanings can be scheduled for early mornings, late evenings, or weekday slots so Sunday services are never disrupted." },
  { title: "Eco-Friendly Preparation", body: "We use green, non-toxic products that are safe for children, elderly congregants, and anyone with sensitivities." },
  { title: "Professional Execution", body: "Our bonded and insured team arrives with all necessary equipment and works efficiently and respectfully throughout your building." },
  { title: "Final Inspection", body: "Before we leave, we walk through the space with you to confirm everything meets your standards. Any concerns get addressed right away." },
  { title: "Ongoing Communication", body: "Scheduling changes, special events, or last-minute requests all go through one call, so managing your North Vancouver church cleaning stays simple." },
];

const whyChoose = [
  { title: "Flexibility and Availability", body: "We work 7 days a week, including early mornings and evenings, so your Sunday service is never disrupted. We schedule around midweek programs, special events, and holidays too." },
  { title: "Eco-Friendly Commitment", body: "Green, non-toxic products mean your congregation breathes cleaner air, and children in the nursery and Sunday school stay safer." },
  { title: "Local North Vancouver Expertise", body: "We've served places of worship in Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights, and our teams are familiar with the local climate, water quality, and facility types common across North Vancouver." },
  { title: "Background-Checked Professional Staff", body: "Every team member is bonded, insured, and background-checked, and trained to handle sacred spaces with the respect they deserve." },
  { title: "Transparent Pricing", body: "Free estimates and fixed pricing, with a 10 percent discount on your first clean using code MINT26." },
  { title: "Proven Track Record", body: "References from North Vancouver congregations are available on request." },
];

const pricingTiers = [
  { title: "Small Facility", range: "$200 – $400", details: "Monthly rate" },
  { title: "Medium Facility", range: "$400 – $800", details: "Monthly rate" },
  { title: "Large Facility", range: "$800 – $1,500+", details: "Monthly rate" },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/north-vancouver/commercial-cleaning/" },
  { title: "Office Cleaning", href: "/north-vancouver/office-cleaning/" },
  { title: "School Cleaning", href: "/north-vancouver/school-cleaning/" },
];

const faqItems = [
  {
    question: "How often should a church in North Vancouver schedule cleaning?",
    answer:
      "Most North Vancouver churches do well with weekly or biweekly cleaning. If your congregation meets multiple times a week or hosts frequent events, twice-weekly cleaning keeps the building consistently ready.",
  },
  {
    question: "Are the eco-friendly products you use in North Vancouver churches safe for children?",
    answer:
      "Yes. We use EPA-approved products that are safe for sensitive skin and respiratory systems. North Vancouver churches with nurseries and Sunday schools trust these products around their youngest members.",
  },
  {
    question: "Can you clean around our scheduled events in North Vancouver?",
    answer:
      "Yes. Our North Vancouver scheduling is flexible, and we work before Sunday services, after midweek programs, and around weddings and funerals so cleaning never interrupts your congregation.",
  },
  {
    question: "What makes church cleaning in North Vancouver different from standard office cleaning?",
    answer:
      "Church cleaning in North Vancouver respects sacred spaces. Our staff are trained in proper handling of altars, religious symbols, and delicate furnishings, with a sensitivity that standard office cleaning doesn't require.",
  },
  {
    question: "How do you handle allergens in North Vancouver church buildings?",
    answer:
      "We use HEPA filtration vacuums and electrostatic spraying, with special attention to nurseries, carpets, and upholstered pews, areas where allergens build up fastest in North Vancouver's damp climate.",
  },
  {
    question: "Can you handle post-event cleanup for funerals and weddings in North Vancouver?",
    answer:
      "Yes. We've handled countless post-event cleanups for North Vancouver churches, restoring the facility to a clean, welcoming condition quickly and respectfully.",
  },
  {
    question: "How do you protect religious items and artwork in North Vancouver churches?",
    answer:
      "Our staff are trained to handle these items with care. We ask questions upfront about what's sacred or delicate in your North Vancouver church, then use soft cloths, appropriate products, and careful techniques.",
  },
  {
    question: "What's your availability for emergency cleaning in North Vancouver?",
    answer:
      "We offer 7-day-a-week service across North Vancouver and can often accommodate urgent requests. Call 236-688-3248 for same-day or emergency cleaning after unexpected damage or illness.",
  },
  {
    question: "Do you offer customized plans for different denominational requirements in North Vancouver?",
    answer:
      "Yes. We work with pastors, facility managers, and congregations across North Vancouver to build plans that align with the specific needs and values of your church.",
  },
  {
    question: "How much can a North Vancouver church save by switching to professional cleaning?",
    answer:
      "Most North Vancouver churches save money and volunteer hours by making the switch. Volunteer cleaning often costs more in hidden labor and materials, while professional service typically runs $300 to $800 monthly and replaces 20 to 40+ volunteer hours.",
  },
  {
    question: "Do you clean churches in Lynn Valley and Deep Cove as well as Lower Lonsdale?",
    answer:
      "Yes. We serve churches throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights, with the same standard of care at every location.",
  },
  {
    question: "What time of day do you clean North Vancouver churches so services aren't disrupted?",
    answer:
      "We typically schedule around your service and program times, which often means early mornings, late evenings, or weekday slots. This keeps our North Vancouver crews out of the way during Sunday worship.",
  },
  {
    question: "Can a small congregation in North Vancouver get a plan that fits a limited budget?",
    answer:
      "Yes. Our North Vancouver plans scale to your building's size and needs, and small facilities typically fall in the $200 to $400 monthly range, with a free walkthrough to confirm the right fit.",
  },
  {
    question: "Do you offer a discount for new North Vancouver churches?",
    answer: "Yes. New North Vancouver clients get 10 percent off their first clean with code MINT26.",
  },
  {
    question: "Is Mint Sanitary insured and background-checked for work in North Vancouver churches?",
    answer:
      "Yes. All staff working in North Vancouver churches are bonded, insured, and background-checked, and trained to handle sacred spaces with proper respect.",
  },
  {
    question: "Do you provide floor stripping and waxing for North Vancouver church fellowship halls?",
    answer:
      "Yes, this is available as part of our specialized services for North Vancouver churches and can be scheduled as a one-time deep clean or built into your regular plan.",
  },
  {
    question: "Can you handle pressure washing for church exteriors in North Vancouver?",
    answer:
      "Yes. Exterior pressure washing is one of our specialized services for North Vancouver churches, useful for entryways and walkways that take a beating during the rainy season.",
  },
  {
    question: "How do I get a quote for church cleaning in North Vancouver?",
    answer:
      "Call 236-688-3248 or request a free walkthrough, and we'll assess your North Vancouver church and provide a fixed monthly quote with no obligation.",
  },
];

export default function ChurchCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Church Cleaning in North Vancouver"
      heroImage="/church-cleaning-sanctuary-north-vancouver.jpg"
      heroSubtitle="Respectful Care for Sacred Spaces"
      heroIntro="Your congregation deserves a clean, welcoming sanctuary to gather in every week. Mint Sanitary specializes in professional church cleaning in North Vancouver, bringing respect, expertise, and care to every space we touch, from the sanctuary floor to the nursery toys. North Vancouver is home to congregations of every size and tradition, from small chapels in Lower Lonsdale to larger facilities near Lynn Valley and Deep Cove."
      faqItems={faqItems}
      ctaHeading="Ready for a Free Walkthrough and a Fixed Quote?"
      ctaBody="Get your rates today for your North Vancouver church. New clients save 10% on their first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Why It Matters (white bg) ─────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Church Cleaning in North Vancouver Matters
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A church is often the busiest building in a congregation&apos;s
            life. Sunday services, midweek Bible studies, youth programs,
            funerals, weddings, and community meals all happen under one
            roof, sometimes in the same week. In North Vancouver&apos;s
            wetter months, mud and moisture get tracked in constantly, and
            that adds pressure on entryways, carpets, and fellowship hall
            floors.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A clean building says something to the people who walk through
            the doors. It tells visitors they matter, and it tells your
            congregation the space is cared for the same way they care for
            each other. Professional church cleaning in North Vancouver
            keeps that message consistent, week after week, without pulling
            volunteers away from their families or their rest.
          </p>
        </div>
      </section>

      {/* ── What's Included (f4f8ff bg) ───────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Our North Vancouver Church Cleaning
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We build every plan around your building&apos;s layout and how
            your congregation uses it. Most North Vancouver churches need
            coverage across these areas.
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
            Professional Cleaning vs. Volunteer Cleaning in North Vancouver Churches
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Many North Vancouver congregations start out relying on
            volunteer cleaning crews. It can work for a while, but it tends
            to come with costs that are easy to miss at first.
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
            Volunteers give their time because they love their church, and
            that matters. But a cleaning schedule that depends entirely on
            volunteer availability tends to break down during busy seasons,
            exactly when a North Vancouver congregation needs its building
            to look its best.
          </p>
        </div>
      </section>

      {/* ── Process (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our Process for Church Cleaning in North Vancouver
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
            Why North Vancouver Churches Choose Mint Sanitary
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

      {/* ── Personal Anecdote (blue bg, preserved exactly) ────── */}
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
            A North Vancouver Congregation We&apos;ve Helped
          </h2>
          <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A few years ago, we started working with a growing congregation
            in North Vancouver that had outgrown its volunteer cleaning
            system. The pastor told us the volunteers were exhausted,
            spending their Sunday afternoons cleaning instead of resting or
            spending time with their families.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            After the first month of weekly service, the pastor told us the
            volunteers were happier, the space looked better than it ever
            had, and people had mentioned how clean and welcoming it felt
            walking in. That&apos;s the kind of change we aim for with every
            North Vancouver church we work with.
          </p>
        </div>
      </section>

      {/* ── Pricing (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Church Cleaning Pricing in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing depends on the size of your building, how often you
            need service, and what areas need attention. Most North
            Vancouver churches fall into one of these monthly ranges.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                <p className="mt-2 font-display-reg text-[24px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Every quote starts with a free walkthrough at your North
            Vancouver church, so the number you get is based on your actual
            building, not a guess.
          </p>
        </div>
      </section>

      {/* ── Service Areas (blue bg) ───────────────────────────── */}
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
              Church Cleaning Across North Vancouver and Nearby Areas
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We serve congregations throughout North Vancouver, including
              Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove,
              Edgemont Village, and Seymour Heights, along with nearby
              communities in West Vancouver, Vancouver, and Burnaby.
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
              alt="Mint Sanitary service area map covering North Vancouver"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Related Services (white bg) ───────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Related Services
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            If your North Vancouver church has additional facility needs,
            we also offer commercial cleaning, office cleaning, and school
            cleaning for congregations that run daycare or school programs.
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
