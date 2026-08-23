import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/commercial-cleaning-original
// so the CMS version at /services/commercial-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Commercial Cleaning Services in Greater Vancouver",
  description:
    "Commercial cleaning across Greater Vancouver. Eco-friendly products, WorkSafeBC compliant staff, flexible schedules, and transparent pricing. Get a free estimate.",
  robots: { index: false, follow: false },
};

const services = [
  {
    title: "Office Cleaning",
    href: "/services/office-cleaning",
    image: "/office-cleaning-north-vancouver-workspace.jpg",
    description:
      "Daily and weekly office cleaning that covers desks, common areas, kitchens, and washrooms, keeping your workspace ready for clients and staff every morning.",
  },
  {
    title: "Restaurant Cleaning",
    href: "/services/restaurant-cleaning",
    image: "/commercial-kitchen-cleaning-north-vancouver.webp",
    description:
      "Degreasing, hood cleaning, and floor sanitization for restaurants and commercial kitchens that need to meet health department standards every single day.",
  },
  {
    title: "Strata Cleaning",
    href: "/north-vancouver/strata-cleaning/",
    image: "/strata-cleaning-north-vancouver.jpg",
    description:
      "Lobbies, hallways, elevators, underground parking, and common areas kept clean and presentable for residents, owners, and visiting guests.",
  },
  {
    title: "School Cleaning",
    href: "/north-vancouver/school-cleaning/",
    image: "/school-cleaning-classroom-north-vancouver.jpg",
    description:
      "Classroom and common area cleaning built around school hours, with sanitization protocols that help reduce the spread of germs among students and staff.",
  },
  {
    title: "Gym Cleaning",
    href: "/services/gym-cleaning",
    image: "/commercial-gym-cleaning-north-vancouver.webp",
    description:
      "Equipment sanitization, locker room cleaning, and floor care for fitness facilities that deal with heavy daily use and high hygiene expectations.",
  },
  {
    title: "Church Cleaning",
    href: "/services/church-cleaning",
    image: "/church-cleaning-sanctuary-north-vancouver.jpg",
    description:
      "Sanctuary, hall, and common area cleaning scheduled around services and events, so your space is ready whenever your congregation gathers.",
  },
];

const whyChoose = [
  {
    title: "7-Day Availability",
    body: "Cleaning scheduled around your operating hours, including evenings, early mornings, weekends, and statutory holidays.",
  },
  {
    title: "Eco-Friendly Products",
    body: "Non-toxic, third-party certified products that clean effectively without leaving harsh chemical residue behind.",
  },
  {
    title: "WorkSafeBC and WHMIS Compliant",
    body: "Staff trained in workplace safety standards and current WHMIS chemical handling certification.",
  },
  {
    title: "Transparent Pricing",
    body: "A clear, written estimate before any work begins, so you know the cost up front with no hidden line items later.",
  },
  {
    title: "Customizable Contracts",
    body: "Month-to-month agreements with no long-term commitment required. Cleaning frequency can change as your business needs change.",
  },
  {
    title: "Bonded and Insured",
    body: "Every cleaner is police-checked, bonded, and fully insured before stepping onto your premises.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "If something is missed, we return within 24 hours to fix it at no charge.",
  },
];

const scheduleOptions = [
  {
    title: "Daily Cleaning",
    body: "Built for high-traffic offices, retail stores, medical clinics, and restaurants that need attention every day.",
  },
  {
    title: "Weekly Cleaning",
    body: "The most requested option for small to mid-size offices with moderate foot traffic.",
  },
  {
    title: "Bi-Weekly Cleaning",
    body: "A budget-friendly choice for spaces with lighter daily use.",
  },
  {
    title: "Monthly Deep Cleaning",
    body: "Carpet shampooing, floor stripping, and high dusting layered on top of a regular schedule.",
  },
  {
    title: "After-Hours and Evening Cleaning",
    body: "The preferred option for most commercial clients, since it means zero disruption to the workday.",
  },
  {
    title: "Weekend and Holiday Cleaning",
    body: "Available for restaurants, gyms, churches, and retail spaces seven days a week, 365 days a year.",
  },
  {
    title: "Custom Schedules",
    body: "Built around a business's specific foot traffic patterns, operating hours, and requirements.",
  },
];

const faqItems = [
  {
    question: "What does commercial cleaning include?",
    answer:
      "Commercial cleaning covers floors, carpets, washrooms, break rooms, desks, common areas, windows, and disposal systems. The full scope depends on the type and size of the business, and gets mapped out during a free walkthrough.",
  },
  {
    question: "How often should a commercial space be cleaned?",
    answer:
      "Offices typically need daily or weekly cleaning depending on foot traffic. Retail spaces usually benefit from daily attention, and restaurants generally need a deep clean every night to keep up with health standards.",
  },
  {
    question: "Do you use eco-friendly products for commercial cleaning?",
    answer:
      "Yes. Our products are eco-friendly and non-toxic, and they perform as well as harsher chemical alternatives without leaving toxins behind. Safety data sheets are available on request for any business that needs documentation.",
  },
  {
    question: "Can you clean around our business hours?",
    answer:
      "Yes. We offer early morning, evening, late night, and weekend service. Most commercial clients prefer after-hours cleaning so their workday is never interrupted.",
  },
  {
    question: "How much does commercial cleaning cost in Greater Vancouver?",
    answer:
      "Costs typically range from $200 to $1,000 or more per month, depending on the size of your space, how often you need cleaning, and the scope of work involved. We provide a free, no-obligation estimate for every business. Visit our rates page for a fuller breakdown, or call 236-688-3248.",
  },
  {
    question: "Are your commercial cleaners trained and insured?",
    answer:
      "Yes. Every cleaner is professionally trained, fully insured, bonded, and police-checked. Our team also carries WorkSafeBC coverage and current WHMIS certification.",
  },
  {
    question: "What's the difference between janitorial and commercial cleaning?",
    answer:
      "Janitorial service handles routine daily maintenance, like emptying bins and restocking supplies. Commercial cleaning goes deeper, covering floor stripping, window cleaning, and full disinfection. Most businesses end up needing a mix of both.",
  },
  {
    question: "Do you clean strata buildings and condominiums?",
    answer:
      "Yes. We clean lobbies, hallways, common areas, underground parking, elevators, and exterior grounds for strata buildings across Greater Vancouver.",
  },
  {
    question: "Do you offer one-time deep cleaning for commercial spaces?",
    answer:
      "Yes, in addition to recurring contracts. One-time deep cleans work well for move-ins, move-outs, post-renovation cleanup, and special events.",
  },
  {
    question: "What sets Mint Sanitary apart from other commercial cleaning companies?",
    answer:
      "Seven-day availability, eco-friendly products, WorkSafeBC and WHMIS compliance, transparent written pricing, month-to-month flexibility, and a 24-hour satisfaction guarantee if something is missed.",
  },
  {
    question: "Do you offer contracts, or is cleaning pay-as-you-go?",
    answer:
      "Both. Most clients choose a month-to-month contract with a set schedule, but one-time and pay-as-you-go cleaning is available too.",
  },
  {
    question: "What areas do you serve for commercial cleaning?",
    answer:
      "We serve North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, Richmond, Coquitlam, Port Coquitlam, Port Moody, Surrey, Delta, and Langley.",
  },
  {
    question: "How do I get a quote for commercial cleaning?",
    answer:
      "Call 236-688-3248 or request a free walkthrough online. We'll assess your space, discuss your schedule, and provide a written estimate with no obligation.",
  },
  {
    question: "Do you clean schools, gyms, and churches?",
    answer:
      "Yes. We provide cleaning built around each type of space, including classroom sanitization for schools, equipment cleaning for gyms, and sanctuary and hall cleaning for churches, all scheduled around your calendar.",
  },
  {
    question: "Can you handle cleaning for multiple business locations?",
    answer:
      "Yes. We work with businesses that operate several sites across Greater Vancouver and can build a coordinated schedule that keeps every location on the same standard.",
  },
];

export default function ServicesCommercialCleaningPage() {
  return (
    <ServicePageLayout
      title="Commercial Cleaning Services in Greater Vancouver"
      heroImage="/commercial-janitorial-cleaning-north-vancouver.jpg"
      heroSubtitle="Offices, Kitchens, Strata, Schools, Gyms & Churches"
      heroIntro="A clean business is a competitive advantage. Clients notice it the moment they walk in, employees feel better working in it, and a well-kept space says something about how a company runs itself. Mint Sanitary provides commercial cleaning for offices, commercial kitchens, strata buildings, schools, gyms, and churches across Greater Vancouver, using eco-friendly products and WorkSafeBC compliant staff. We work around your hours, not the other way around, with clear, written pricing before work begins."
      faqItems={faqItems}
      ctaHeading="Ready to Talk About Your Cleaning Needs?"
      ctaBody="Get a free, no-obligation estimate for your business. Seven-day availability, eco-friendly products, and transparent pricing."
      ctaHref="/rates"
    >
      {/* ── Services We Offer (white bg) ──────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Commercial Cleaning Services We Offer
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary covers a full range of commercial spaces across
            Greater Vancouver. Each service is built around the specific
            demands of that industry, from health regulations in kitchens
            to foot traffic patterns in gyms.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-[20px] bg-white/[0.12] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.2]"
              >
                <img
                  src={s.image}
                  alt={`${s.title} in Greater Vancouver`}
                  className="h-[190px] w-full rounded-[14px] object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 font-display-reg text-[18px] uppercase tracking-[0.45px] text-white">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                  {s.description}
                </p>
                <span className="mt-4 inline-block border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white transition-colors group-hover:text-[#6191e9]">
                  Learn More
                </span>
              </a>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Businesses that recently had renovation or construction work
            done can also ask about{" "}
            <a
              href="/north-vancouver/post-construction-cleaning/"
              className="underline underline-offset-2"
            >
              post-construction cleaning
            </a>{" "}
            to clear dust and debris before opening or reopening.
          </p>
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
            Why a Clean Workplace Matters for Your Business
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Cleanliness shapes how clients, employees, and visitors
            experience a space before anyone says a word. The
            International Sanitary Supply Association (ISSA) found that
            90% of employees feel more productive when working in a clean
            environment. That number alone makes a strong case for
            treating commercial cleaning as an operating decision, not an
            afterthought.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Productivity and Health
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Harvard Business Review reported that employees working in
                cleaner offices can be up to 5% more productive. Regular
                cleaning cuts down on dust, allergens, and bacteria, which
                tends to mean fewer sick days and less time lost to minor
                illness moving through a workplace.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                WorkSafeBC and WHMIS Compliance
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                BC businesses are required to maintain safe working
                environments for staff. That includes proper chemical
                handling and storage under WHMIS regulations. A commercial
                cleaning provider that understands these requirements
                takes one more compliance item off your plate.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Eco-Friendly Products Make a Difference
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Traditional cleaning chemicals release volatile organic
                compounds (VOCs) that degrade indoor air quality over
                time, according to the{" "}
                <a
                  href="https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  U.S. EPA
                </a>
                . Eco-friendly products, by contrast, are third-party
                certified, biodegradable, and clean just as well without
                the toxins. That matters most in enclosed commercial
                spaces where staff spend eight or more hours a day.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Regular Schedules Prevent Costly Problems
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Infrequent cleaning leads to buildup that gets harder and
                more expensive to fix. Grease builds up in commercial
                kitchens, mold works into washroom grout, and carpets
                deteriorate faster than they should. A consistent cleaning
                schedule extends the life of flooring, fixtures, and
                furniture, which protects the investment a business
                already made in its space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose (f4f8ff bg) ────────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Businesses Across Greater Vancouver Choose Mint Sanitary
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
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

      {/* ── Flexible Schedules (white bg) ─────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Flexible Commercial Cleaning Schedules
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Every business has a different rhythm, so cleaning schedules
              should match that rhythm instead of forcing a business to
              adapt.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {scheduleOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] bg-white/[0.12] p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6191e9]/20"
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
    </ServicePageLayout>
  );
}
