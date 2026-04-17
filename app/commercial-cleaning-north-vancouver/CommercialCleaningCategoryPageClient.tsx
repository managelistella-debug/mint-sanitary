"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Office Cleaning",
    href: "/commercial-cleaning-north-vancouver/office-cleaning/",
    image: "/office-cleaning-north-vancouver-workspace.jpg",
    description:
      "A clean workspace boosts morale, reduces sick days, and makes a strong impression on clients. We handle desks, break rooms, washrooms, and common areas on your schedule - daily, weekly, or bi-weekly.",
  },
  {
    title: "Commercial Kitchen Cleaning",
    href: "/commercial-cleaning-north-vancouver/commercial-kitchen-cleaning/",
    image: "/commercial-kitchen-cleaning-north-vancouver.webp",
    description:
      "Restaurant and commercial kitchens face unique challenges - grease buildup, health code requirements, and the need for speed during off-hours. We tackle deep cleaning from hood systems to floor drains, ensuring compliance with local health standards.",
  },
  {
    title: "Strata Cleaning",
    href: "/commercial-cleaning-north-vancouver/strata-cleaning/",
    image: "/strata-cleaning-north-vancouver.jpg",
    description:
      "Condominiums and multi-unit buildings need consistent care across shared spaces. We manage lobbies, hallways, elevators, shared washrooms, recycling areas, and landscaping perimeters on a schedule that works for your council.",
  },
  {
    title: "School Cleaning",
    href: "/commercial-cleaning-north-vancouver/school-cleaning/",
    image: "/school-cleaning-classroom-north-vancouver.jpg",
    description:
      "Schools demand the highest standards for student and staff safety. We use hospital-grade disinfection products and follow strict protocols to keep classrooms, washrooms, gyms, and cafeterias hygienic.",
  },
  {
    title: "Gym Cleaning",
    href: "/commercial-cleaning-north-vancouver/gym-cleaning/",
    image: "/commercial-gym-cleaning-north-vancouver.webp",
    description:
      "Fitness facilities get heavy traffic and high-touch surfaces. We prioritize disinfection of equipment, locker rooms, and shower areas to keep members healthy and reduce the spread of bacteria and viruses.",
  },
  {
    title: "Church Cleaning",
    href: "/commercial-cleaning-north-vancouver/church-cleaning/",
    image: "/church-cleaning-sanctuary-north-vancouver.jpg",
    description:
      "Houses of worship deserve respect and reverent care. We clean sanctuaries, fellowship halls, nurseries, kitchens, and administrative spaces with attention to your building's character and your congregation's needs.",
  },
];

const whyChooseItems = [
  {
    title: "7-Day Availability",
    body: "Your business doesn't stop on weekends or holidays, and neither do we. Early morning, late night, weekends, statutory holidays - we're available when you need us.",
  },
  {
    title: "Eco-Friendly Products",
    body: "We use biodegradable, non-toxic cleaning products that deliver powerful results without harmful chemical residues. Better for your staff, your visitors, and the planet.",
  },
  {
    title: "WorkSafeBC & WHMIS Compliant",
    body: "Our team is fully trained in WorkSafeBC regulations and WHMIS protocols. Every product we use is properly labeled, stored, and handled according to provincial safety standards.",
  },
  {
    title: "Transparent Pricing",
    body: "No surprise charges, no hidden fees, no confusing invoices. We provide a clear written estimate before work begins so you know exactly what to expect.",
  },
  {
    title: "Customizable Contracts",
    body: "We offer month-to-month contracts with no long-term commitment required. Adjust your cleaning schedule and scope as your business needs change.",
  },
  {
    title: "Bonded & Insured",
    body: "Every team member is police-checked, bonded, and fully insured. Your security and peace of mind matter as much as your cleanliness.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "If you're not satisfied with any aspect of our service, we'll return within 24 hours to make it right - no questions asked, no extra charge.",
  },
];

const complianceItems = [
  {
    title: "WorkSafeBC Compliance",
    body: "All Mint Sanitary staff are trained in WorkSafeBC workplace safety standards. We carry valid coverage and follow regulated protocols for hazardous materials, fall protection, and safe equipment use in commercial environments.",
  },
  {
    title: "WHMIS Training",
    body: "Our team holds current WHMIS certification. Every chemical product we bring into your facility is properly labeled with safety data sheets available on request. We handle, store, and dispose of cleaning agents according to federal regulations.",
  },
  {
    title: "Disinfection Protocols",
    body: "We follow Health Canada guidelines for disinfection in commercial spaces. High-touch surfaces - door handles, elevator buttons, shared equipment, washroom fixtures - receive targeted treatment with hospital-grade products during every visit.",
  },
  {
    title: "Eco-Friendly Commitment",
    body: "Our commitment to green cleaning goes beyond marketing. We select products certified by third-party organizations and avoid volatile organic compounds (VOCs) that compromise indoor air quality. This matters especially in enclosed commercial spaces where staff spend 8+ hours daily.",
  },
];

const scheduleOptions = [
  {
    title: "Daily Cleaning",
    body: "Ideal for high-traffic offices, retail spaces, medical facilities, and restaurants that need consistent hygiene every day.",
  },
  {
    title: "Weekly Cleaning",
    body: "The most popular option for small to mid-size offices. Covers thorough cleaning of all areas once per week to maintain a professional environment.",
  },
  {
    title: "Bi-Weekly Cleaning",
    body: "A budget-friendly option for smaller offices or businesses with lighter foot traffic. Deep cleaning every two weeks keeps spaces fresh.",
  },
  {
    title: "Monthly Deep Cleaning",
    body: "Comprehensive deep cleaning sessions that tackle carpet shampooing, floor stripping, high dusting, and areas that don't need weekly attention.",
  },
  {
    title: "After-Hours & Evening Cleaning",
    body: "We work around your operating hours. Most commercial clients prefer evening or early-morning cleaning so there's zero disruption to their workday.",
  },
  {
    title: "Weekend & Holiday Cleaning",
    body: "Restaurants, gyms, churches, and retail spaces often need weekend and holiday service. We're available 7 days a week, 365 days a year.",
  },
  {
    title: "Custom Schedules",
    body: "Every business is different. We create tailored cleaning schedules based on your foot traffic patterns, operating hours, and specific requirements.",
  },
];

const serviceAreas = [
  "North Vancouver",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "New Westminster",
  "Richmond",
  "Coquitlam",
  "Port Coquitlam",
  "Port Moody",
  "Surrey",
  "Delta",
  "Langley",
];

const featuredClients = [
  {
    name: "Vancouver Coastal Health",
    logo: "/client-vancouver-coastal-health.png",
  },
  { name: "BC Hydro", logo: "/client-bc-hydro.png" },
  { name: "Arbutus Point Developments Ltd.", logo: "/client-arbutus-point.png" },
  { name: "Powers Construction", logo: "/client-powers-construction.png" },
];

const faqItems = [
  {
    question: "What does commercial cleaning include?",
    answer:
      "Commercial cleaning covers floors, carpets, washrooms, break rooms, desks, common areas, windows, and disposal systems. The exact scope varies by business type and size. We customize every plan during your free walkthrough estimate.",
  },
  {
    question: "How often should a commercial space be cleaned?",
    answer:
      "Most offices need daily or weekly service depending on foot traffic. Retail spaces benefit from daily attention. Restaurants typically need nightly deep cleans. We recommend a schedule during your estimate based on your specific situation.",
  },
  {
    question: "Do you use eco-friendly products for commercial spaces?",
    answer:
      "Yes. All of our products are eco-friendly and non-toxic. They perform as well as harsh chemicals without the toxins that harm indoor air quality and employee health. Safety data sheets are available on request.",
  },
  {
    question: "Can you clean around our operating hours?",
    answer:
      "Absolutely. We offer early morning, evening, late night, and weekend service that works around your business schedule. Most clients prefer after-hours cleaning so there's zero disruption.",
  },
  {
    question: "How much does commercial cleaning cost in North Vancouver?",
    answer:
      "Costs range from $30 to $35 per hour or $200 to $1,000+ per month depending on space size, cleaning frequency, and scope. We provide free, no-obligation estimates. Call (604) 671-6252.",
  },
  {
    question: "Are your cleaners trained and insured?",
    answer:
      "Every team member is professionally trained, fully insured, bonded, and police-checked. We also maintain WorkSafeBC coverage and current WHMIS certification.",
  },
  {
    question: "What's the difference between janitorial and commercial cleaning?",
    answer:
      "Janitorial service handles routine daily maintenance like emptying bins and restocking supplies. Commercial cleaning goes deeper with floor stripping, window cleaning, deep disinfection, and specialized work. Most clients need both.",
  },
  {
    question: "Do you serve strata buildings and condominiums?",
    answer:
      "Yes. We handle lobbies, hallways, common areas, underground parking, elevators, and exterior grounds for strata buildings throughout North Vancouver and Greater Vancouver.",
  },
  {
    question: "Do you offer one-time deep cleaning for commercial spaces?",
    answer:
      "Yes. In addition to recurring contracts, we provide one-time deep cleaning for move-ins, move-outs, post-renovation cleanup, and special events. Call for a free estimate.",
  },
  {
    question: "What sets Mint Sanitary apart from other commercial cleaners?",
    answer:
      "We combine 7-day availability, eco-friendly products, WorkSafeBC and WHMIS compliance, transparent pricing, month-to-month flexibility, and a 24-hour satisfaction guarantee. We treat your facility like our own.",
  },
];

export default function CommercialCleaningCategoryPageClient() {
  const [openWhy, setOpenWhy] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[85vh] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/commercial-janitorial-cleaning-north-vancouver.jpg')",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-2 md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <div className="mb-5 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Commercial Cleaning in North Vancouver
              </p>
              <h1 className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Commercial Cleaning Services in North Vancouver
              </h1>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[540px] font-body text-[17px] leading-[1.75] text-white/90">
                A clean business environment is more than aesthetics - it&apos;s a
                competitive advantage. Mint Sanitary delivers reliable commercial
                cleaning across North Vancouver with eco-friendly products,
                WorkSafeBC compliance, seven-day availability, and transparent
                pricing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[99px] bg-white px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#6191e9] transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
                >
                  Free Estimate
                </a>
                <a
                  href="tel:+16046716252"
                  className="inline-flex items-center justify-center rounded-[99px] border-2 border-white/50 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  Call (604) 671-6252
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-body text-[13px] font-semibold uppercase tracking-[0.5px] text-white/70">
                <li>WorkSafeBC &amp; WHMIS Compliant</li>
                <li>Eco-Friendly Products</li>
                <li>7-Day Availability</li>
              </ul>
            </div>
            <div className="hidden md:block" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
            >
              <path
                d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z"
                fill="#6191e9"
              />
            </svg>
          </div>
        </section>

        <section className="relative z-10 bg-[#6191e9] px-4 pb-6 pt-10 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-5 text-center font-body text-[12px] font-bold uppercase tracking-[2px] text-white/60">
              Trusted by Local Organizations
            </p>
            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
              {featuredClients.map((client) => (
                <div
                  key={client.name}
                  className="flex h-[80px] items-center justify-center px-4"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-[52px] w-auto object-contain brightness-0 invert opacity-60 transition-all duration-300 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-10 -mt-1 bg-[#6191e9]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
          >
            <path
              d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Clean Spaces Build Better Businesses
            </h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Whether you run a small office, a multi-unit strata building, a
                  restaurant, or a fitness facility, cleanliness shapes how
                  clients, employees, and visitors experience your space. A
                  well-maintained environment communicates professionalism, builds
                  trust, and creates a healthier workplace.
                </p>
                <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Studies consistently show that clean workplaces reduce
                  absenteeism and increase employee productivity. A report by the
                  International Sanitary Supply Association found that 90% of
                  employees feel more productive in a clean environment. For
                  businesses in North Vancouver, professional commercial cleaning
                  isn&apos;t an overhead - it&apos;s an investment that pays dividends in
                  staff retention, customer satisfaction, and brand perception.
                </p>
              </div>
              <div>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Mint Sanitary provides comprehensive commercial cleaning
                  services across North Vancouver and Greater Vancouver. We serve
                  offices, commercial kitchens, strata buildings, schools, gyms,
                  and churches with customized cleaning programs tailored to each
                  facility&apos;s unique needs.
                </p>
                <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Our team is fully trained in WorkSafeBC safety standards and
                  WHMIS chemical handling protocols. We use only eco-friendly,
                  non-toxic cleaning products. And we&apos;re available seven days a
                  week - including evenings, early mornings, weekends, and
                  statutory holidays - so your cleaning never disrupts your
                  operations.
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
          <div className="mx-auto grid max-w-[1200px] items-stretch gap-10 lg:grid-cols-2">
            <div className="h-full overflow-hidden rounded-[20px]">
              <img
                src="/office-desk-disinfection-north-vancouver.jpg"
                alt="Professional desk and surface disinfection in an office"
                className="h-full min-h-[360px] w-full object-cover sm:min-h-[440px] lg:min-h-0"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Professional Commercial Cleaning Matters
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  <strong className="text-white">
                    Productivity &amp; Health:
                  </strong>{" "}
                  Research published in the Harvard Business Review found that
                  employees in cleaner offices are up to 5% more productive.
                  Reduced dust, allergens, and bacteria mean fewer sick days and
                  better focus. In shared commercial spaces, regular professional
                  cleaning is one of the most cost-effective health interventions
                  available.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  <strong className="text-white">
                    WorkSafeBC &amp; WHMIS Compliance:
                  </strong>{" "}
                  British Columbia businesses are required to maintain safe
                  working environments under WorkSafeBC regulations. This
                  includes proper handling and storage of cleaning chemicals
                  under WHMIS guidelines. Mint Sanitary&apos;s team is fully
                  certified, so you stay compliant without the training burden.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  <strong className="text-white">Eco-Friendly Matters:</strong>{" "}
                  Traditional cleaning chemicals release volatile organic
                  compounds (VOCs) that degrade indoor air quality and pose
                  health risks. Our eco-friendly products are third-party
                  certified, biodegradable, and effective - without the toxic
                  trade-offs.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  <strong className="text-white">
                    Regular Schedules Prevent Costly Problems:
                  </strong>{" "}
                  Infrequent cleaning leads to buildup - grease in kitchens, mold
                  in washrooms, carpet deterioration in offices. Regular
                  professional cleaning extends the life of your flooring,
                  fixtures, and furniture while preventing health hazards before
                  they escalate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Commercial Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Our 6 Commercial Cleaning Services
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="group overflow-hidden rounded-[20px] bg-[#f4f8ff] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#eef4ff]"
                >
                  <img
                    src={s.image}
                    alt={`${s.title} in North Vancouver`}
                    className="h-[190px] w-full rounded-[14px] object-cover"
                    loading="lazy"
                  />
                  <h3 className="mt-4 font-display-reg text-[18px] uppercase tracking-[0.45px] text-[#4E5062]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-[#5c6075]">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-block border-b border-[#66DAD5] font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#4E5062] transition-colors group-hover:text-[#6191e9]">
                    Learn More
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We also provide{" "}
              <a
                href="/cleaning-services-north-vancouver/post-construction-cleaning/"
                className="underline underline-offset-2"
              >
                post-construction cleaning
              </a>{" "}
              for new builds and renovations - removing dust, debris, adhesive
              residue, and construction film to deliver move-in-ready commercial
              spaces.
            </p>
          </div>
        </section>

        <section
          className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
          }}
        >
          <div className="mx-auto grid max-w-[1200px] items-stretch gap-8 lg:grid-cols-2">
            <div className="h-full overflow-hidden rounded-[20px]">
              <img
                src="/commercial-janitorial-cleaning-north-vancouver.jpg"
                alt="Commercial cleaning team at work in North Vancouver"
                className="h-full min-h-[360px] w-full object-cover sm:min-h-[440px] lg:min-h-0"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Choose Mint Sanitary
              </h2>
              <div className="mt-6 space-y-3">
                {whyChooseItems.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-[14px] border border-white/15 bg-white/10 transition-colors duration-200 hover:bg-white/[0.14]"
                  >
                    <button
                      onClick={() => setOpenWhy(openWhy === i ? null : i)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-body text-[16px] font-extrabold uppercase tracking-[0.3px] text-white">
                        {item.title}
                      </span>
                      <span
                        className="ml-4 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-white/30 font-body text-[20px] leading-none text-white transition-transform duration-300"
                        style={{
                          transform:
                            openWhy === i ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${openWhy === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 font-body text-[15px] leading-[1.65] text-white/75">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Commercial Cleaning Compliance &amp; Best Practices
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {complianceItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-[#f4f8ff] p-6"
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

        <section
          className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Service Schedules &amp; Flexibility
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Every business has different cleaning needs. We offer flexible
                scheduling options designed to work around your operating hours
                and budget.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {scheduleOptions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-white p-6 shadow-sm"
                >
                  <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                Service Areas in Greater Vancouver
              </h2>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary provides commercial cleaning services throughout
                the Greater Vancouver area. Whether your business is in downtown
                Vancouver or the suburbs, you get the same team, the same quality
                standards, and the same commitment.
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
                alt="Map of Greater Vancouver showing Mint Sanitary commercial cleaning coverage"
                className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              />
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                Visit our{" "}
                <a
                  href="/service-areas"
                  className="underline underline-offset-2"
                >
                  service areas page
                </a>{" "}
                for more information about coverage in your neighborhood.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-stretch gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[36px]">
                What Sets Commercial Cleaning Apart from Residential
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Commercial cleaning and residential cleaning share basic
                  principles, but the execution is fundamentally different.
                  Commercial spaces have higher foot traffic, stricter regulatory
                  requirements, specialized equipment needs, and unique scheduling
                  demands that residential cleaning simply doesn&apos;t encounter.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  A home might need vacuuming and kitchen cleaning once a week. A
                  commercial kitchen needs nightly degreasing, hood cleaning, and
                  floor sanitization to meet health department standards. An
                  office building requires systematic high-touch disinfection
                  protocols that go far beyond residential surface wiping.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Commercial cleaning also requires compliance with WorkSafeBC
                  regulations and WHMIS chemical handling standards -
                  requirements that don&apos;t apply to residential work. Insurance,
                  bonding, and security clearances are essential when your
                  cleaning team has access to business premises, sensitive
                  equipment, and confidential areas.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  At Mint Sanitary, our commercial cleaning team is specifically
                  trained for business environments. We carry commercial-grade
                  insurance, maintain WorkSafeBC coverage, and use industrial
                  equipment designed for larger spaces and heavier-duty cleaning.
                  Looking for{" "}
                  <a
                    href="/cleaning-services-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    residential cleaning services
                  </a>
                  ? We offer those too.
                </p>
              </div>
            </div>
            <div className="h-full overflow-hidden rounded-[20px]">
              <img
                src="/commercial-new.jpg"
                alt="Commercial cleaning setup in North Vancouver"
                className="h-full min-h-[360px] w-full object-cover sm:min-h-[440px] lg:min-h-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-stretch gap-10 lg:grid-cols-2">
            <div className="h-full overflow-hidden rounded-[20px]">
              <img
                src="/commercial-3-new.jpg"
                alt="Office cleaned professionally in North Vancouver"
                className="h-full min-h-[340px] w-full object-cover sm:min-h-[420px] lg:min-h-0"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[36px]">
                The Cost of Skipping Professional Cleaning
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  We once visited a North Vancouver office that had been relying
                  on staff to handle their own cleaning for over a year. The
                  carpets were visibly stained, the break room had a persistent
                  odor, and the washrooms had mineral buildup that no amount of
                  consumer spray could remove. Within one deep clean, the
                  transformation was dramatic - and the office manager told us
                  three employees commented on the difference the very next
                  morning.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  That story isn&apos;t unusual. Many businesses underestimate how
                  quickly dirt, grime, and bacteria accumulate in commercial
                  spaces. What starts as a minor inconvenience becomes a health
                  hazard, a morale issue, and eventually a costly restoration
                  project.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  The real costs of skipping professional cleaning include
                  premature carpet and flooring replacement, HVAC system strain
                  from dust buildup, increased sick days among staff, negative
                  impressions on clients and visitors, and potential WorkSafeBC
                  compliance issues.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Professional commercial cleaning isn&apos;t an expense - it&apos;s
                  preventive maintenance for your most valuable asset: your
                  workspace. A consistent cleaning schedule keeps your space
                  healthy, your team productive, and your business looking its
                  best. Contact us for a{" "}
                  <a href="/contact" className="underline underline-offset-2">
                    free estimate
                  </a>{" "}
                  and see the difference for yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
          }}
        >
          <div className="mx-auto max-w-[800px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-8 space-y-3">
              {faqItems.map((faq, i) => (
                <div
                  key={faq.question}
                  className="rounded-[14px] border border-white/15 bg-white/10 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="pr-4 font-body text-[16px] font-extrabold text-white">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-white/30 font-body text-[20px] leading-none text-white transition-transform duration-300"
                      style={{
                        transform:
                          openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 font-body text-[15px] leading-[1.65] text-white/75">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Let&apos;s Talk About Your Cleaning Needs
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              Your space reflects your business values. Mint Sanitary handles
              commercial cleaning in North Vancouver so you can focus on running
              your operation. We&apos;re available 7 days a week with transparent
              pricing, eco-friendly products, and free estimates. Call (604)
              671-6252 today or request a free estimate online.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:bg-[#5580d4] hover:shadow-lg"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:+16046716252"
                className="inline-flex items-center justify-center rounded-[99px] border-2 border-[#6191e9]/30 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062] transition-all duration-200 hover:border-[#6191e9]/60 hover:bg-[#f4f8ff]"
              >
                Call (604) 671-6252
              </a>
            </div>
          </div>
        </section>

        <div className="relative z-10 -mt-1 bg-white">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
          >
            <path
              d="M0,50 C400,100 800,0 1440,40 L1440,100 L0,100 Z"
              fill="#6191e9"
            />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
