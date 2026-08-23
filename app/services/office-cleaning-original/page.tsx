import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/office-cleaning-original
// so the CMS version at /services/office-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Greater Vancouver Office Cleaning Services | Mint Sanitary",
  description:
    "Professional office cleaning across Greater Vancouver. Eco-friendly products, bonded staff, flexible scheduling, free estimates. Get a quote today.",
  robots: { index: false, follow: false },
};

const scheduleOptions = [
  {
    title: "Daily Cleaning",
    body: "Built for high-traffic offices, medical practices, and co-working spaces where surfaces need attention every day.",
  },
  {
    title: "Weekly Cleaning",
    body: "Our most popular option, and a solid fit for most small to mid-size offices.",
  },
  {
    title: "Bi-Weekly Cleaning",
    body: "A cost-effective choice for offices with lighter foot traffic.",
  },
  {
    title: "After-Hours Cleaning",
    body: "Early mornings, evenings, or late nights, so cleaning never interrupts your workday.",
  },
  {
    title: "Weekend Cleaning",
    body: "Saturdays, Sundays, or statutory holidays, so your team walks into a fresh office every Monday morning.",
  },
];

const healthBenefits = [
  {
    title: "Reduced Illness and Sick Days",
    body: "Regular disinfection of high-touch surfaces cuts down on the spread of cold and flu viruses between coworkers. Research from ISSA's Value of Clean initiative has found that professional cleaning can reduce workplace illness by as much as 46%.",
  },
  {
    title: "Better Indoor Air Quality",
    body: "HEPA vacuuming and eco-friendly products cut down on the dust, allergens, and volatile organic compounds (VOCs) that build up in enclosed office spaces, an issue the EPA's guidance on indoor air quality points to directly.",
  },
  {
    title: "Boosted Employee Morale",
    body: "People notice when their workspace is cared for. A clean office signals that management values staff wellbeing, and that shows up in day-to-day attitude.",
  },
  {
    title: "Reduced Allergens",
    body: "Carpets, upholstery, and HVAC vents trap pollen, dust mites, and pet dander that basic tidying never touches. Professional cleaning removes what a quick wipe-down leaves behind.",
  },
  {
    title: "Professional Image",
    body: "Clients, partners, and job candidates form an impression within seconds of stepping inside. A spotless office builds credibility before anyone says a word.",
  },
];

const whyChoose = [
  { title: "7-Day Availability", body: "Cleaning scheduled around your hours, not the other way around." },
  { title: "Eco-Friendly Products", body: "Safer for staff, clients, and the buildings we work in." },
  { title: "Bonded and Insured", body: "Every team member is police-checked before they set foot in your office." },
  { title: "Customized Cleaning Plans", body: "Built around your floor layout, traffic patterns, operating hours, and priorities." },
  { title: "Free Estimates", body: "A detailed, no-obligation walkthrough and written quote." },
  { title: "Month-to-Month Contracts", body: "No long-term commitment required." },
  { title: "10% Off Your First Clean", body: "Use code MINT26 when you book." },
  { title: "24-Hour Satisfaction Guarantee", body: "If something's missed, we come back and fix it." },
];

const pricingTiers = [
  {
    label: "Small Office (under 2,000 sq ft)",
    range: "$150 – $250",
    details: "A good fit for private practices, small startups, and boutique offices.",
  },
  {
    label: "Medium Office (2,000–5,000 sq ft)",
    range: "$250 – $500",
    details: "Built for mid-size businesses with multiple rooms, common areas, and higher daily traffic. This tier can include extras like carpet care.",
  },
  {
    label: "Large Office (5,000+ sq ft)",
    range: "$500+",
    details: "Designed for corporate offices, co-working spaces, and multi-floor buildings with a custom scope and schedule.",
  },
];

const faqItems = [
  {
    question: "How often should an office be professionally cleaned?",
    answer:
      "Most offices in Greater Vancouver do well with weekly or bi-weekly cleaning. High-traffic environments like medical clinics, co-working spaces, and call centres often need daily touchpoint disinfection on top of that.",
  },
  {
    question: "Can you clean our office after business hours?",
    answer:
      "Yes. We offer early-morning, evening, late-night, and weekend cleaning so your team never has to work around a cleaning crew.",
  },
  {
    question: "Are your cleaning products safe for office environments?",
    answer:
      "Yes. We use eco-friendly, non-toxic products across every job, and safety data sheets are available on request.",
  },
  {
    question: "Do you offer free office cleaning estimates?",
    answer:
      "Yes. Call 236-688-3248 or request a quote at our rates page for a no-obligation walkthrough and written estimate.",
  },
  {
    question: "What's included in a standard office cleaning?",
    answer:
      "Desk and surface sanitizing, floor vacuuming and mopping, washroom cleaning, kitchen and break room wipe-down, trash removal, and disinfection of high-touch surfaces like door handles and light switches.",
  },
  {
    question: "Do you bring your own supplies and equipment?",
    answer: "Yes. Our teams arrive fully equipped, so there's nothing for you to stock or store.",
  },
  {
    question: "Are your cleaning staff background-checked?",
    answer: "Yes. Every team member is police-checked, bonded, and fully insured.",
  },
  {
    question: "Can I adjust my cleaning plan after signing up?",
    answer:
      "Yes. Our contracts are month-to-month, so you can change frequency or scope without a long-term commitment.",
  },
  {
    question: "What does the MINT26 code get me?",
    answer: "10% off your first office cleaning when you book with us.",
  },
  {
    question: "How quickly can you start cleaning our office?",
    answer:
      "In most cases, within 48 hours of your estimate. We work 7 days a week, so a same-week start is common.",
  },
];

export default function ServicesOfficeCleaningPage() {
  return (
    <ServicePageLayout
      title="Office Cleaning Services in Greater Vancouver"
      heroImage="/office-cleaning-north-vancouver-workspace.jpg"
      heroSubtitle="Bonded Staff & Flexible Scheduling"
      heroIntro="A clean office is the foundation of a healthy, productive workplace. Employees work better in spaces that are free of clutter, dust, and germs, and clients form an impression of your business within seconds of walking through the door. Mint Sanitary provides professional office cleaning for businesses across Greater Vancouver, from small private practices to multi-floor corporate buildings, using eco-friendly products and bonded, insured, police-checked teams, 7 days a week."
      faqItems={faqItems}
      ctaHeading="Ready for a Spotless Office?"
      ctaBody="Get a free, no-obligation quote for your office. First-time customers get 10% off with code MINT26."
      ctaHref="/rates"
    >
      {/* ── What's Included (white bg) ────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Our Office Cleaning Service
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every plan is built around your space, but most office cleaning
            contracts across Greater Vancouver draw from the same core
            service list.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Daily and Weekly Tasks
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Desk and workstation sanitizing, trash removal and liner
                replacement, vacuuming carpeted areas, mopping hard floors,
                dusting, and tidying reception and common areas.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                High-Touch Disinfection
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Door handles, light switches, elevator buttons, shared
                phones, copier panels, and stair railings get disinfected
                with hospital-grade products at every visit. These are the
                surfaces dozens of people touch in a single day, and
                they&apos;re often the last thing a standard cleaning crew
                gets to.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Bathroom Cleaning
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Toilet and urinal sanitization, sink and mirror cleaning,
                floor mopping, supply restocking, and odor treatment. Our
                bathroom cleaning follows{" "}
                <a
                  href="https://www.canada.ca/en/health-canada/services/drugs-health-products/disinfectants/hard-surface-disinfectants.html"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  public health disinfection guidance
                </a>{" "}
                for shared washrooms.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Kitchen and Break Room
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Counter and table wipe-down, appliance exterior cleaning,
                sink sanitization, floor mopping, and trash removal, so the
                space your staff eats lunch in is treated with the same care
                as the boardroom.
              </p>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-[20px]">
            <img
              src="/office-desk-disinfection-north-vancouver.jpg"
              alt="Office desk and workstation being disinfected during a Greater Vancouver office cleaning visit"
              className="h-[320px] w-full object-cover sm:h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Interior Windows and Glass
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Interior glass partitions, office door glass, reception
                windows, and display cases cleaned with a streak-free,
                eco-friendly glass cleaner.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Carpet and Floor Care
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                HEPA-filter vacuuming, spot treatment, and periodic deep
                carpet shampooing. Hard floor stripping and waxing is
                available on request for offices with vinyl, tile, or
                hardwood flooring.
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
            Flexible Scheduling for Greater Vancouver Offices
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Office cleaning doesn&apos;t work on one schedule. A call centre
            with 80 people needs something different than a two-person
            design studio, so we offer five scheduling options and build the
            rest around your traffic patterns.
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
            Health and Productivity Benefits of Office Cleaning
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A clean office isn&apos;t just about appearances. It changes how
            people feel at work and how often they get sick.
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
            Why Greater Vancouver Businesses Choose Mint Sanitary
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
              Eco-Friendly Office Cleaning Products
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Traditional cleaning products contain VOCs that degrade air
              quality fast in enclosed offices with recirculated air. Over a
              workday, that can mean headaches, respiratory irritation, and
              allergic reactions for staff who spend eight or more hours in
              the same rooms.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary uses third-party certified, biodegradable
              products across every office we clean. Our HEPA-filter vacuums
              trap 99.97% of particles instead of pushing dust back into the
              air, and microfiber cloths cut down on chemical use compared
              to disposable wipes. We also run a color-coded cleaning system
              that keeps cloths and tools used in washrooms separate from
              those used in kitchens, which prevents cross-contamination
              between the two.
            </p>
          </div>
          <div className="h-full overflow-hidden rounded-[20px]">
            <img
              src="/eco-friendly-office-cleaning-products-north-vancouver.jpg"
              alt="Eco-friendly, biodegradable cleaning products used by Mint Sanitary on Greater Vancouver office cleaning jobs"
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
            Office Cleaning Pricing in Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing is based on square footage, not a flat hourly charge,
            and every quote comes from a free walkthrough of your space.
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
            requirements like medical or food service environments, and
            whether you need after-hours or weekend scheduling. For an
            exact number, request a{" "}
            <a href="/rates" className="underline underline-offset-2">
              free quote
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Serving Greater Vancouver (f4f8ff bg) ─────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Office Cleaning Across Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We clean offices throughout Vancouver, Burnaby, North
            Vancouver, West Vancouver, New Westminster, Richmond, Coquitlam,
            Port Coquitlam, Port Moody, Surrey, Delta, and Langley. If your
            team is based in North Vancouver specifically, our{" "}
            <a href="/north-vancouver/office-cleaning" className="underline underline-offset-2">
              office cleaning in North Vancouver
            </a>{" "}
            page covers local scheduling and service area details.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
