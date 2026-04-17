import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Office Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional office cleaning in North Vancouver. Eco-friendly, bonded staff. 7-day service. Free estimate. MINT25 for 10% off first clean.",
};

const includedItems = [
  {
    title: "Daily & Weekly Tasks",
    body: "Desk and workstation surface sanitizing, trash removal and liner replacement, vacuuming carpeted areas, mopping hard floors, dusting surfaces and shelves, and tidying reception and common areas.",
  },
  {
    title: "High-Touch Disinfection",
    body: "Door handles, light switches, elevator buttons, shared phones, copier panels, and stair railings receive targeted disinfection with hospital-grade products during every visit.",
  },
  {
    title: "Bathroom Cleaning",
    body: "Toilet and urinal sanitization, sink and mirror cleaning, floor mopping, supply restocking (soap, paper towels, toilet paper), and odor treatment. We follow Health Canada disinfection guidelines.",
  },
  {
    title: "Kitchen & Break Room",
    body: "Counter and table wipe-down, appliance exterior cleaning, sink sanitization, floor mopping, and trash removal. We keep shared eating spaces hygienic and inviting.",
  },
  {
    title: "Interior Windows & Glass",
    body: "Interior glass partitions, office door glass, reception area windows, and display case cleaning. Streak-free results with eco-friendly glass cleaner.",
  },
  {
    title: "Carpet & Floor Care",
    body: "Regular vacuuming with HEPA-filter equipment, spot treatment for stains, periodic deep carpet shampooing, and hard floor maintenance including stripping and waxing on request.",
  },
];

const schedulingOptions = [
  {
    title: "Daily Cleaning",
    body: "Best for high-traffic offices, medical practices, and co-working spaces. Ensures a fresh, hygienic environment every morning.",
  },
  {
    title: "Weekly Cleaning",
    body: "The most popular option for small to mid-size offices. A thorough weekly clean covers all areas and keeps your space consistently professional.",
  },
  {
    title: "Bi-Weekly Cleaning",
    body: "A cost-effective choice for smaller offices with lighter foot traffic. Deep cleaning every two weeks maintains a clean baseline.",
  },
  {
    title: "After-Hours Cleaning",
    body: "We work around your operating hours — early mornings, evenings, or late nights — so cleaning never disrupts your team&apos;s productivity.",
  },
  {
    title: "Weekend Cleaning",
    body: "Ideal for offices that need Monday-morning freshness without weekday disruption. Available Saturdays, Sundays, and statutory holidays.",
  },
];

const healthBenefits = [
  {
    title: "Reduced Illness & Sick Days",
    body: "Regular disinfection of high-touch surfaces reduces the spread of cold, flu, and other viruses. Studies show that professional cleaning can reduce workplace illness by up to 46%.",
  },
  {
    title: "Better Indoor Air Quality",
    body: "HEPA-filter vacuuming and eco-friendly products reduce dust, allergens, and volatile organic compounds (VOCs) that accumulate in enclosed office environments.",
  },
  {
    title: "Boosted Employee Morale",
    body: "Employees notice when their workspace is cared for. A clean office signals that management values staff well-being, which improves satisfaction and retention.",
  },
  {
    title: "Reduced Allergens",
    body: "Carpets, upholstery, and air vents trap pollen, dust mites, and pet dander brought in from outside. Professional cleaning removes these allergens that basic tidying misses.",
  },
  {
    title: "Professional Image",
    body: "Clients, partners, and candidates form impressions within seconds of entering your office. A spotless environment builds credibility and trust before a single word is spoken.",
  },
];

const whyChooseItems = [
  {
    title: "7-Day Availability",
    body: "Early morning, late night, weekends, and statutory holidays. We clean when it works for you, not the other way around.",
  },
  {
    title: "Eco-Friendly Products",
    body: "All our products are biodegradable and non-toxic. Safe for your team, your visitors, and the environment — without sacrificing cleaning power.",
  },
  {
    title: "Bonded & Insured",
    body: "Every team member is police-checked, bonded, and fully insured. Your office security and confidentiality are protected.",
  },
  {
    title: "Customized Cleaning Plans",
    body: "No two offices are the same. We build a cleaning plan around your floor layout, traffic patterns, operating hours, and specific priorities.",
  },
  {
    title: "Free Estimates",
    body: "We provide a detailed, no-obligation walkthrough and written quote. No hidden fees, no surprises. Call (604) 671-6252 to schedule yours.",
  },
  {
    title: "Month-to-Month Contracts",
    body: "No long-term commitment required. Adjust your plan, frequency, or scope anytime as your office needs change.",
  },
  {
    title: "10% Off Your First Clean",
    body: "Use code MINT25 to save 10% on your first office cleaning. A risk-free way to experience the Mint Sanitary difference.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    body: "Not happy with any aspect of our service? We&apos;ll return within 24 hours to make it right — no questions asked, no extra charge.",
  },
];

const pricingTiers = [
  {
    title: "Small Office (Under 2,000 sq ft)",
    range: "$150 – $250 per visit",
    body: "Ideal for private practices, small startups, and boutique offices. Includes all standard cleaning tasks.",
  },
  {
    title: "Medium Office (2,000 – 5,000 sq ft)",
    range: "$250 – $500 per visit",
    body: "For mid-size businesses with multiple rooms, common areas, and higher traffic. May include additional services like carpet care.",
  },
  {
    title: "Large Office (5,000+ sq ft)",
    range: "$500+ per visit",
    body: "Corporate offices, co-working spaces, and multi-floor buildings. Custom scope and scheduling based on your walkthrough.",
  },
];

const pricingFactors = [
  "Square footage and number of rooms",
  "Cleaning frequency (daily, weekly, bi-weekly)",
  "Number of washrooms and kitchens",
  "Carpet vs. hard floor ratio",
  "Special requirements (medical, food service, etc.)",
  "After-hours or weekend scheduling",
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
    question: "How often should an office be professionally cleaned?",
    answer:
      "Most offices benefit from weekly or bi-weekly service. High-traffic spaces like medical offices, co-working spaces, and call centres often need daily touchpoint disinfection. We\u2019ll recommend the right frequency during your free estimate.",
  },
  {
    question: "Can you clean after business hours?",
    answer:
      "Yes. We offer early-morning, evening, late-night, and weekend office cleaning in North Vancouver. Most clients prefer after-hours service so there\u2019s zero disruption to their team.",
  },
  {
    question: "Are your products safe for office environments?",
    answer:
      "Yes. We use eco-friendly, non-toxic products that deliver strong cleaning performance without harmful residues. They\u2019re safe for employees, visitors, and indoor air quality. Safety data sheets are available on request.",
  },
  {
    question: "Do you offer free office cleaning estimates?",
    answer:
      "Yes. Call (604) 671-6252 to schedule a no-obligation walkthrough. We\u2019ll assess your space, discuss your priorities, and provide a transparent written quote.",
  },
  {
    question: "What\u2019s included in a standard office cleaning?",
    answer:
      "Standard service includes desk and surface sanitizing, floor vacuuming and mopping, washroom cleaning, kitchen/break room wipe-down, trash removal, and high-touch disinfection. We customize based on your needs.",
  },
  {
    question: "Do you bring your own supplies and equipment?",
    answer:
      "Yes. We bring all cleaning products, equipment, and supplies. Our team arrives fully equipped so you don\u2019t need to stock or store anything.",
  },
  {
    question: "Are your staff background-checked?",
    answer:
      "Every Mint Sanitary team member is police-checked, bonded, and fully insured. We understand that office cleaners have access to sensitive areas and take security seriously.",
  },
  {
    question: "Can I adjust my cleaning plan after signing up?",
    answer:
      "Absolutely. We offer month-to-month contracts with no long-term commitment. You can adjust frequency, scope, or scheduling anytime as your office needs change.",
  },
  {
    question: "What does MINT25 get me?",
    answer:
      "MINT25 is our promo code for 10% off your first office cleaning. It\u2019s a risk-free way to try our service. Mention it when you call or include it in your online estimate request.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "In most cases, we can schedule your first cleaning within 48 hours of your estimate. We operate 7 days a week and can often accommodate same-week requests.",
  },
];

export default function OfficeCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Office Cleaning in North Vancouver"
      heroImage="/office-cleaning-north-vancouver-workspace.jpg"
      heroIntro="A clean office isn&apos;t a luxury — it&apos;s the foundation of a healthy, productive workplace. Mint Sanitary provides professional office cleaning programs across North Vancouver with eco-friendly products, bonded staff, and 7-day availability."
      faqItems={faqItems}
      ctaHeading="Upgrade Your Office Cleaning"
      ctaBody="Book your free office cleaning estimate with Mint Sanitary. Flexible plans, eco-friendly products, bonded staff, and seven-day availability. Use code MINT25 for 10% off your first clean. Call (604) 671-6252 or request a free estimate online."
    >
      {/* ── Image + Text Intro ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/office-desk-disinfection-north-vancouver.jpg"
                alt="Office desk disinfection in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                A Clean Office Changes Everything
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Your office is where your team spends most of their waking hours. The
                condition of that environment directly affects their health, focus, and
                how they feel about coming to work. Dust, allergens, and bacteria
                accumulate faster than most people realize — especially in shared
                spaces with recirculated air. Professional office cleaning removes what
                daily tidying misses and creates a workspace your team deserves.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Beyond employee well-being, a clean office makes a powerful first
                impression on clients, partners, and candidates. It signals
                professionalism and attention to detail before anyone says a word.
                Mint Sanitary delivers consistent, reliable office cleaning in North
                Vancouver — tailored to your space, your schedule, and your standards.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Is Office Cleaning ── */}
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
            What Is Office Cleaning?
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            <p className="font-body text-[15px] leading-[1.7] text-white/80">
              Office cleaning is a systematic approach to maintaining a clean,
              hygienic, and professional workspace. It goes beyond basic tidying to
              include surface sanitization, high-touch disinfection, floor care,
              washroom maintenance, and air quality management. The goal is a
              consistently clean environment that supports health, productivity, and
              a professional image.
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-white/80">
              Professional office cleaning is typically scheduled on a daily, weekly,
              or bi-weekly basis depending on office size, foot traffic, and industry
              requirements. Medical offices and co-working spaces often need daily
              service, while smaller private offices may do well with bi-weekly
              cleaning. We assess your specific situation during a free walkthrough
              and recommend the right plan.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What&apos;s Included
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedItems.map((item) => (
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
        </div>
      </section>

      {/* ── Scheduling Options ── */}
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
            Scheduling Options
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            We build your cleaning schedule around your operating hours so there&apos;s
            zero disruption to your team.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {schedulingOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] bg-white/10 p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Health & Productivity ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            How Professional Office Cleaning Improves Employee Health &amp;
            Productivity
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            The connection between workplace cleanliness and employee performance is
            well-documented. Here&apos;s how regular professional cleaning makes a
            measurable difference.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {healthBenefits.map((item) => (
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
        </div>
      </section>

      {/* ── Why Choose Mint Sanitary ── */}
      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Office Cleaning"
        image="/eco-friendly-office-cleaning-products-north-vancouver.jpg"
        imageAlt="Eco-friendly office cleaning products in North Vancouver"
        items={whyChooseItems}
        ctaHref="/contact"
        ctaLabel="Get a Free Estimate"
      />

      {/* ── Eco-Friendly Cleaning Products ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Eco-Friendly Cleaning Products
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Traditional office cleaning products often contain harsh chemicals
                that leave behind volatile organic compounds (VOCs). In an enclosed
                office with recirculated air, these compounds degrade indoor air
                quality and can cause headaches, respiratory irritation, and allergic
                reactions among staff.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Mint Sanitary exclusively uses eco-friendly, biodegradable cleaning
                products that are third-party certified for safety and environmental
                responsibility. These products deliver the same cleaning power without
                toxic residues — keeping your team healthier and your environmental
                footprint smaller.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Our eco-friendly approach extends to our equipment as well. We use
                HEPA-filter vacuums that trap 99.97% of particles, microfiber cloths
                that reduce chemical use, and color-coded cleaning systems that prevent
                cross-contamination between areas like washrooms and kitchens.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Choosing green cleaning isn&apos;t just good for the environment — it&apos;s
                good for business. Many North Vancouver companies are pursuing
                sustainability commitments, and eco-friendly office cleaning supports
                those goals. Learn more about our{" "}
                <a
                  href="/commercial-cleaning-north-vancouver/"
                  className="underline underline-offset-2"
                >
                  commercial cleaning services
                </a>{" "}
                and how we integrate green practices across all service types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
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
            Office Cleaning Pricing
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing depends on office size, cleaning frequency, and scope. Here are
            typical ranges for North Vancouver office cleaning.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className="rounded-[14px] bg-white/10 p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {tier.title}
                </h3>
                <p className="mt-2 font-body text-[20px] font-extrabold text-[#66DAD5]">
                  {tier.range}
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  {tier.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/70">
              Factors That Affect Pricing
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pricingFactors.map((factor) => (
                <li
                  key={factor}
                  className="rounded-[14px] bg-white/10 px-5 py-3 font-body text-[15px] text-white/80"
                >
                  {factor}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              Every quote is based on a free walkthrough of your office. Call{" "}
              <a
                href="tel:+16046716252"
                className="underline underline-offset-2 text-white"
              >
                (604) 671-6252
              </a>{" "}
              to schedule yours. Mention code{" "}
              <strong className="text-white">MINT25</strong> for 10% off your
              first clean.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
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
              Service Areas
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We provide office cleaning services throughout the Greater Vancouver
                area with consistent quality and reliable scheduling.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                From Lower Lonsdale offices to Lynn Valley business parks, we serve
                the full North Vancouver area with consistent quality and flexible
                scheduling. Professional offices, retail spaces, and strata buildings
                along Marine Drive and throughout Ambleside, Dundarave, and Park Royal.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Downtown towers, Gastown studios, Broadway corridor offices, and
                commercial spaces across Vancouver&apos;s diverse neighborhoods.
                Metrotown business centres, Brentwood offices, and commercial parks
                throughout Burnaby. Easy access from our North Vancouver base.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We also serve New Westminster, Richmond, Coquitlam, Port Coquitlam,
                Port Moody, Surrey, Delta, and Langley for commercial office cleaning.
              </p>
            </div>
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
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
            <a
              href="/service-areas"
              className="mt-8 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
            >
              View All Service Areas
            </a>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
