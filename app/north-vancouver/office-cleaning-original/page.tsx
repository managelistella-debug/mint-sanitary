import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/office-cleaning-original
// so the CMS version at /north-vancouver/office-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Office Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Office cleaning in North Vancouver from Mint Sanitary. Eco-friendly products, bonded staff, 7-day service. Free estimates, 10% off with MINT26.",
  robots: { index: false, follow: false },
};

const scheduleOptions = [
  {
    title: "Daily Cleaning",
    body: "Built for high-traffic North Vancouver offices, medical practices, and co-working spaces.",
  },
  {
    title: "Weekly Cleaning",
    body: "Our most popular option among North Vancouver small to mid-size offices.",
  },
  {
    title: "Bi-Weekly Cleaning",
    body: "A cost-effective choice for North Vancouver offices with lighter foot traffic.",
  },
  {
    title: "After-Hours Cleaning",
    body: "Early mornings, evenings, or late nights, so North Vancouver teams never work around a cleaning crew.",
  },
  {
    title: "Weekend Cleaning",
    body: "Saturdays, Sundays, or statutory holidays, timed so your North Vancouver office looks fresh every Monday morning.",
  },
];

const healthBenefits = [
  {
    title: "Reduced Illness and Sick Days",
    body: "Regular disinfection of high-touch surfaces cuts down on the spread of cold and flu between coworkers in a North Vancouver office. Research from ISSA's Value of Clean initiative has found that professional cleaning can reduce workplace illness by as much as 46%.",
  },
  {
    title: "Better Indoor Air Quality",
    body: "HEPA vacuuming and eco-friendly products cut down on dust, allergens, and VOCs that build up fast in enclosed North Vancouver office buildings, a concern the EPA's indoor air quality guidance addresses directly.",
  },
  {
    title: "Boosted Employee Morale",
    body: "Staff notice a cared-for workspace. In a North Vancouver office, that signals to your team that their wellbeing matters to management.",
  },
  {
    title: "Reduced Allergens",
    body: "Carpets, upholstery, and vents trap pollen, dust mites, and pet dander, all of which basic tidying leaves behind. Professional cleaning removes what a quick wipe-down in a North Vancouver office misses.",
  },
  {
    title: "Professional Image",
    body: "Clients, partners, and job candidates visiting your North Vancouver office form an impression within seconds of walking in. A spotless space builds credibility before anyone says a word.",
  },
];

const whyChoose = [
  { title: "7-Day Availability", body: "Office cleaning scheduled around your North Vancouver business hours." },
  { title: "Eco-Friendly Products", body: "Safer for staff and clients in every North Vancouver office we service." },
  { title: "Bonded and Insured", body: "Every cleaner working in your North Vancouver office is police-checked first." },
  { title: "Customized Cleaning Plans", body: "Built around your floor layout, traffic patterns, operating hours, and priorities." },
  { title: "Free Estimates", body: "A detailed, no-obligation walkthrough of your North Vancouver office and a written quote." },
  { title: "Month-to-Month Contracts", body: "No long-term commitment for North Vancouver clients." },
  { title: "10% Off Your First Clean", body: "Use code MINT26 on your first North Vancouver office cleaning." },
  { title: "24-Hour Satisfaction Guarantee", body: "If anything's missed at your North Vancouver office, we come back and fix it." },
];

const pricingTiers = [
  {
    label: "Small Office (under 2,000 sq ft)",
    range: "$150 – $250",
    details: "A good fit for private practices, small startups, and boutique offices around North Vancouver.",
  },
  {
    label: "Medium Office (2,000–5,000 sq ft)",
    range: "$250 – $500",
    details: "Built for mid-size North Vancouver businesses with multiple rooms, common areas, and higher daily traffic. This tier can include extras like carpet care.",
  },
  {
    label: "Large Office (5,000+ sq ft)",
    range: "$500+",
    details: "Designed for corporate offices, co-working spaces, and multi-floor North Vancouver buildings with a custom scope and schedule.",
  },
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

const faqItems = [
  {
    question: "How often should an office be professionally cleaned in North Vancouver?",
    answer:
      "Most North Vancouver offices do well with weekly or bi-weekly cleaning. High-traffic spaces like medical practices, co-working spaces, and call centres in North Vancouver often need daily touchpoint disinfection on top of that.",
  },
  {
    question: "Can you clean our office after business hours in North Vancouver?",
    answer:
      "Yes. We offer early-morning, evening, late-night, and weekend cleaning for North Vancouver offices, so your team never has to work around a crew.",
  },
  {
    question: "Are your cleaning products safe for office environments in North Vancouver?",
    answer:
      "Yes. We use eco-friendly, non-toxic products in every North Vancouver office we service, and safety data sheets are available on request.",
  },
  {
    question: "Do you offer free office cleaning estimates in North Vancouver?",
    answer:
      "Yes. Call 236-688-3248 for a no-obligation walkthrough of your North Vancouver office and a written quote.",
  },
  {
    question: "What's included in a standard office cleaning in North Vancouver?",
    answer:
      "Desk and surface sanitizing, floor vacuuming and mopping, washroom cleaning, kitchen and break room wipe-down, trash removal, and disinfection of high-touch surfaces, all standard on every North Vancouver office visit.",
  },
  {
    question: "Do you bring your own supplies and equipment to North Vancouver offices?",
    answer:
      "Yes. Our teams arrive fully equipped at every North Vancouver job, so there's nothing for you to stock or store.",
  },
  {
    question: "Are your cleaning staff background-checked for North Vancouver office jobs?",
    answer:
      "Yes. Every cleaner working in a North Vancouver office is police-checked, bonded, and fully insured.",
  },
  {
    question: "Can I adjust my cleaning plan after signing up in North Vancouver?",
    answer:
      "Yes. Our North Vancouver contracts are month-to-month, so you can change frequency or scope without a long-term commitment.",
  },
  {
    question: "What does the MINT26 code get me on a North Vancouver office cleaning?",
    answer: "10% off your first office cleaning in North Vancouver.",
  },
  {
    question: "How quickly can you start cleaning my North Vancouver office?",
    answer:
      "In most cases, within 48 hours of your estimate. We work 7 days a week across North Vancouver, so a same-week start is common.",
  },
  {
    question: "Do you clean offices in older buildings in Lower Lonsdale?",
    answer:
      "Yes. We regularly clean offices in the older mixed-use buildings around Lower Lonsdale, and we adjust our approach for narrower stairwells, single washrooms, and shared entryways common in that part of North Vancouver.",
  },
  {
    question: "Can you service co-working spaces in North Vancouver?",
    answer:
      "Yes. Co-working spaces in North Vancouver often need daily cleaning because of the number of different people using the same desks and kitchen areas, and we scope those jobs accordingly.",
  },
  {
    question: "What happens if I'm not happy with a cleaning at my North Vancouver office?",
    answer:
      "We back every North Vancouver office cleaning with a 24-hour satisfaction guarantee. If something was missed, call us and we'll send a crew back to fix it at no extra cost.",
  },
  {
    question: "Do you clean medical or dental offices in North Vancouver?",
    answer:
      "Yes. Medical and dental offices in North Vancouver come with extra disinfection requirements, and we build those into the cleaning plan and frequency for that type of space.",
  },
  {
    question: "Is there a cancellation fee for North Vancouver office cleaning contracts?",
    answer: "No. Our North Vancouver contracts run month-to-month, so you can pause or cancel without a penalty.",
  },
  {
    question: "Do you clean offices outside central North Vancouver, like Deep Cove or Lynn Valley?",
    answer:
      "Yes. Our North Vancouver service area covers Deep Cove, Lynn Valley, Edgemont Village, and Seymour Heights, in addition to Lower and Upper Lonsdale.",
  },
];

export default function OfficeCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Office Cleaning in North Vancouver"
      heroImage="/office-cleaning-north-vancouver-workspace.jpg"
      heroSubtitle="Bonded Staff & 7-Day Availability"
      heroIntro="A clean office is the foundation of a healthy, productive workplace, and that matters even more in North Vancouver, where offices range from converted warehouse spaces near the shipyards to glass-front suites along Marine Drive. Mint Sanitary provides office cleaning for businesses throughout North Vancouver, using eco-friendly products, bonded and insured staff, and scheduling that runs 7 days a week."
      faqItems={faqItems}
      ctaHeading="Ready for a Spotless North Vancouver Office?"
      ctaBody="Call Mint Sanitary at 236-688-3248 or request a free North Vancouver office cleaning quote, and ask about 10% off your first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Personal Anecdote / Intro (white bg) ──────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We first started cleaning a small accounting office in Lower
            Lonsdale a few years back, a two-room suite above a coffee shop
            with exactly one washroom and a lot of foot traffic during tax
            season. The owner switched us to early-morning visits so the
            printer wasn&apos;t blocked mid-afternoon, and that&apos;s stayed
            the model for a lot of our North Vancouver office clients since.
            Every space runs differently, and the schedule should match it.
          </p>
        </div>
      </section>

      {/* ── What's Included (f4f8ff bg) ───────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Office Cleaning in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every North Vancouver office cleaning plan starts from the same
            core service list, then gets adjusted for your floor layout and
            traffic.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Daily and Weekly Office Tasks
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Desk and workstation sanitizing, trash removal and liner
                replacement, vacuuming carpeted areas, mopping hard floors,
                dusting, and tidying reception and common areas across your
                North Vancouver office.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                High-Touch Disinfection in North Vancouver Offices
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Door handles, light switches, elevator buttons, shared
                phones, copier panels, and stair railings get disinfected
                with hospital-grade products at every visit, a detail that
                matters in shared buildings around Lower Lonsdale and
                Central Lonsdale with multiple tenants using the same
                elevator bank.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Bathroom Cleaning
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Toilet and urinal sanitization, sink and mirror cleaning,
                floor mopping, supply restocking, and odor treatment. Our
                washroom cleaning in North Vancouver offices follows{" "}
                <a
                  href="https://www.canada.ca/en/health-canada/services/drugs-health-products/disinfectants/hard-surface-disinfectants.html"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Health Canada&apos;s hard-surface disinfectant guidance
                </a>
                .
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Kitchen and Break Room Cleaning
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Counter and table wipe-down, appliance exterior cleaning,
                sink sanitization, floor mopping, and trash removal for the
                break room your North Vancouver team uses every day.
              </p>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-[20px]">
            <img
              src="/office-desk-disinfection-north-vancouver.jpg"
              alt="Office desk and workstation being disinfected during a North Vancouver office cleaning visit"
              className="h-[320px] w-full object-cover sm:h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Interior Windows and Glass
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Interior glass partitions, office door glass, reception
                windows, and display cases, cleaned with a streak-free,
                eco-friendly glass cleaner, ideal for the glass-heavy
                offices common along the North Vancouver waterfront.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Carpet and Floor Care
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                HEPA-filter vacuuming, spot treatment, and periodic deep
                carpet shampooing. Hard floor stripping and waxing is
                available on request for North Vancouver offices with
                vinyl, tile, or hardwood flooring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Flexible Scheduling (blue bg) ─────────────────────── */}
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
            Flexible Scheduling for North Vancouver Offices
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            North Vancouver businesses don&apos;t run on one schedule, so we
            offer five ways to book office cleaning.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scheduleOptions.map((item) => (
              <div key={item.title} className="rounded-[20px] bg-white/[0.12] backdrop-blur-sm p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Health & Productivity Benefits (white bg) ─────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Health and Productivity Benefits of Office Cleaning in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A clean office changes how people feel at work, not just how
            the space looks.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {healthBenefits.map((b) => (
              <div key={b.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{b.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{b.body}</p>
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
            Why North Vancouver Businesses Choose Mint Sanitary
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

      {/* ── Eco-Friendly Products (blue bg) ───────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] items-stretch gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Eco-Friendly Cleaning Products for North Vancouver Offices
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Traditional cleaning products contain VOCs that degrade air
              quality fast in enclosed offices with recirculated air, and
              North Vancouver&apos;s older commercial buildings, many with
              limited ventilation, feel that faster than newer towers
              downtown. Over a workday, that can mean headaches, respiratory
              irritation, and allergic reactions for staff.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary uses third-party certified, biodegradable
              products in every North Vancouver office we clean. Our
              HEPA-filter vacuums trap 99.97% of particles instead of
              pushing dust back into the air, and microfiber cloths cut down
              on chemical use compared to disposable wipes. We also run a
              color-coded cleaning system that keeps washroom tools separate
              from kitchen tools, which stops cross-contamination between
              the two in every North Vancouver office on our schedule.
            </p>
          </div>
          <div className="h-full overflow-hidden rounded-[20px]">
            <img
              src="/eco-friendly-office-cleaning-products-north-vancouver.jpg"
              alt="Eco-friendly, biodegradable cleaning products used by Mint Sanitary for North Vancouver office cleaning"
              className="h-full min-h-[300px] w-full object-cover lg:min-h-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Pricing (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Office Cleaning Pricing in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing for North Vancouver office cleaning is based on square
            footage, and every quote starts with a free walkthrough of your
            space.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.label} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.label}</h3>
                <p className="mt-2 font-display-reg text-[24px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A few things move the price within each tier: square footage
            and number of rooms, cleaning frequency, number of washrooms and
            kitchens, the ratio of carpet to hard flooring, special
            requirements like medical or food service spaces, and whether
            you need after-hours or weekend scheduling. For an exact number
            for your North Vancouver office, request a{" "}
            <a href="/rates" className="underline underline-offset-2">
              free quote
            </a>
            .
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
              North Vancouver Service Areas
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary cleans offices throughout North Vancouver,
              including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep
              Cove, Edgemont Village, and Seymour Heights. We also serve
              neighbouring West Vancouver, Vancouver, and Burnaby, with
              extended service into New Westminster, Richmond, Coquitlam,
              Port Coquitlam, Port Moody, Surrey, Delta, and Langley.
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
              alt="Map of Mint Sanitary's North Vancouver and Greater Vancouver office cleaning service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              If you&apos;re outside North Vancouver, our{" "}
              <a href="/services/office-cleaning" className="underline underline-offset-2">
                general office cleaning services
              </a>{" "}
              page covers the same plans for businesses across Greater
              Vancouver, and our{" "}
              <a href="/north-vancouver/commercial-cleaning" className="underline underline-offset-2">
                North Vancouver commercial cleaning
              </a>{" "}
              page covers our broader commercial services beyond offices.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
