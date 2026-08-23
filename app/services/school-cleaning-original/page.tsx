import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/school-cleaning-original
// so the CMS version at /services/school-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "School Cleaning Services | Greater Vancouver",
  description:
    "Professional school cleaning services for K-12 schools and daycares across Greater Vancouver. Custodial support, health compliance, and free estimates.",
  robots: { index: false, follow: false },
};

const researchStats = [
  "Schools with increased professional cleaning see a 14% reduction in student absences.",
  "About 75% of school absences stem from illness, not discipline or family issues.",
  "Influenza A virus can live on up to 50% of student desks in a given week.",
  "Daily disinfection cuts absenteeism by 32%.",
  "40% of teenagers avoid using dirty school bathrooms.",
  "About 6% of school custodians suffer annual injuries related to chemical exposures.",
  "Children breathe 50% more air relative to body weight than adults, which raises their exposure to airborne particles and cleaning chemical residue.",
  "Microfiber cleaning technology reduces bacteria by 99%, compared to 30% with traditional cotton mops.",
];

const includedItems = [
  { title: "Daily Maintenance", body: "Sweeping, mopping, dusting, and trash removal in classrooms, hallways, and common areas." },
  { title: "Deep Disinfection", body: "High-touch surfaces like doorknobs, railings, light switches, and desks get targeted disinfection, not just a wipe-down." },
  { title: "Health Compliance", body: "Cleaning practices align with BC health standards and local school district requirements." },
  { title: "Flexible Scheduling", body: "After-school cleaning, early morning prep, evening deep cleaning, or weekend service, built around your school's calendar." },
  { title: "Child-Safe Methods", body: "Non-toxic, eco-friendly products suited to a population that is more sensitive to chemical residue than adults." },
];

const services = [
  { title: "Classroom & Learning Space Cleaning", body: "Desks, chairs, and tables get sanitized daily. Whiteboards, glass surfaces, and bulletin boards are wiped down, carpets and floors are cleaned with child-safe products, and high-touch surfaces receive extra attention. Cleaning is scheduled after school hours or in the early morning so classrooms are ready before the first bell." },
  { title: "School Bathroom & Restroom Sanitization", body: "Bathrooms get daily disinfection, restocking of supplies, and floor sanitization. Grout and tile receive deep cleaning on a regular basis, using hospital-grade disinfectants that are still safe for children to be around shortly after application." },
  { title: "Gymnasium & Recreation Area Cleaning", body: "Gym floors need daily care to protect the surface, whether it's a wood court or a synthetic one, since each requires a different cleaning approach. Equipment gets sanitized, bleachers are cleaned, and locker rooms are sanitized on a regular schedule. Post-event deep cleaning is available after assemblies, sports days, and tournaments." },
  { title: "Cafeteria & Food Service Areas", body: "Cafeterias and kitchens are cleaned with food-safe disinfectants that meet health inspection standards. This includes equipment sanitization, grease trap and drain maintenance, and floor degreasing to prevent slip hazards." },
  { title: "Hallway, Stairwell & Common Area Cleaning", body: "Hallways and stairwells get regular sweeping and mopping, along with disinfection of railings, light switches, door handles, water fountains, and locker areas. These are some of the highest-traffic surfaces in any school building." },
  { title: "Administrative Offices & Staff Areas", body: "Front offices, staff rooms, and staff bathrooms get the same level of attention as classrooms, with desk sanitization, break room cleaning, and periodic carpet shampooing." },
];

const processSteps = [
  { title: "Assessment & Planning", body: "A walkthrough of your school or facility to build a customized cleaning plan based on building size, student population, and daily schedule." },
  { title: "Daily Maintenance", body: "After-school cleaning as the standard option, with early morning prep, evening deep cleaning, or weekend service available." },
  { title: "Weekly Deep Cleaning", body: "Carpet shampooing and extraction, tile and grout cleaning, window washing, and high-shelf dusting." },
  { title: "Monthly Specialized Services", body: "HVAC vent cleaning, carpet deep treatment, floor stripping and waxing, and exterior power washing." },
  { title: "Compliance Documentation", body: "Records of all cleaning activities are kept and made available for health audits or district reviews." },
];

const whyChoose = [
  { title: "BC Health Compliance", body: "Our cleaning practices follow BC Centre for Disease Control guidelines, with regular staff training and documentation that's ready for an audit at any time." },
  { title: "Eco-Friendly, Child-Safe Products", body: "No harsh chemicals, no toxic residue left behind on surfaces children touch all day." },
  { title: "Reliable, Consistent Staff", body: "We assign dedicated teams to your school where possible. Every team member is bonded, insured, background-checked, and trained on child safety protocols." },
  { title: "7-Day Availability", body: "Cleaning is available nights, weekends, and holidays, including post-event cleaning and full summer deep cleans." },
  { title: "Transparent Pricing", body: "No surprise charges. Use code MINT26 for 10% off your first clean." },
  { title: "Free Estimates", body: "Every quote starts with a no-cost walkthrough or consultation." },
];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/services/commercial-cleaning" },
  { title: "Office Cleaning", href: "/services/office-cleaning" },
  { title: "Gym Cleaning", href: "/services/gym-cleaning" },
];

const faqItems = [
  {
    question: "What is included in school cleaning services?",
    answer:
      "School cleaning services typically cover daily maintenance like sweeping, mopping, and dusting, plus deep disinfection of high-touch surfaces, bathroom sanitization, gymnasium and cafeteria cleaning, and compliance with health standards. Mint Sanitary builds a custom plan for each school based on building size and schedule.",
  },
  {
    question: "Do you clean daycares and before and after school care programs?",
    answer:
      "Yes. We provide daycare cleaning and before and after school care cleaning, with schedules built around nap times, program hours, and the fact that these spaces often get used by more than one group in a single day.",
  },
  {
    question: "How is school cleaning different from regular commercial cleaning?",
    answer:
      "Schools have a younger, more chemically sensitive population, higher surface contact rates, and specific health compliance requirements. Products used need to be non-toxic, and cleaning needs to work around class schedules rather than standard business hours.",
  },
  {
    question: "What products do you use in schools?",
    answer:
      "We use eco-friendly, non-toxic, biodegradable products suited to environments with children present, along with hospital-grade disinfectants for bathrooms and high-touch surfaces where a stronger level of sanitization is needed.",
  },
  {
    question: "Can cleaning be scheduled around school hours?",
    answer:
      "Yes. After-school cleaning is our standard scheduling option, with early morning prep, evening deep cleaning, and weekend service also available depending on your school's calendar.",
  },
  {
    question: "Do you provide custodial services, or just cleaning?",
    answer:
      "We offer both. Some schools need daily custodial services covering ongoing building maintenance, while others need scheduled deep cleaning layered on top of an in-house custodial team. We can scope either approach during a free walkthrough.",
  },
  {
    question: "Are your staff background checked?",
    answer:
      "Yes. All Mint Sanitary staff are bonded, insured, and background-checked, and trained on child safety protocols before working in a school or daycare setting.",
  },
  {
    question: "How much does school cleaning cost?",
    answer:
      "Pricing depends on the size of your facility, the scope of service, and how often cleaning is needed. We don't publish flat rates because school needs vary too much for that to be accurate. Visit our rates page or request a free estimate for a quote specific to your school.",
  },
  {
    question: "Do you offer summer deep cleaning for schools?",
    answer:
      "Yes. Monthly specialized services and full deep cleans, including floor stripping and waxing, HVAC vent cleaning, and exterior power washing, are commonly scheduled during summer break when buildings are empty.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Request a free estimate through our rates page or contact us directly. A walkthrough helps us build a plan and quote specific to your school or daycare.",
  },
];

export default function ServicesSchoolCleaningPage() {
  return (
    <ServicePageLayout
      title="Professional School Cleaning Services for Greater Vancouver Schools"
      heroImage="/school-cleaning-classroom-north-vancouver.jpg"
      heroSubtitle="K-12 Schools & Daycares, Custodial Support"
      heroIntro="When you walk into a clean school, you notice it immediately. Fresh air. Bright hallways. Sanitized classrooms. That's not luck. It's the result of professional school cleaning. Mint Sanitary provides school cleaning services for elementary schools, secondary schools, private schools, and daycares across Greater Vancouver, supporting before and after school care programs and working around class schedules, extracurricular activities, and school events."
      faqItems={faqItems}
      ctaHeading="Ready for a Cleaner, Healthier School?"
      ctaBody="A clean school affects attendance, health, and how staff and students feel about the building they spend their day in. Request a free estimate and use code MINT26 for 10% off your first clean."
      ctaHref="/rates"
    >
      {/* ── Why It Matters (white bg) ─────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Professional Cleaning Matters in Schools
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Cleaning in a school building carries a different weight than
            cleaning an office. Children move through the same spaces all
            day, share supplies, and touch far more surfaces than adults do.
            The research backs up what school administrators already sense.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {researchStats.map((stat) => (
              <li key={stat} className="rounded-[14px] bg-white/[0.12] px-5 py-3 font-body text-[15px] leading-[1.7] text-white/80">
                {stat}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            That last point is part of why our approach matters. The tools
            and products used in a school affect indoor air quality,
            allergy symptoms, and how many chemical exposure incidents
            custodial staff deal with over a year.
          </p>
        </div>
      </section>

      {/* ── What's Included (blue bg) ─────────────────────────── */}
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
            What&apos;s Included
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every school cleaning plan from Mint Sanitary is built around
            five core standards.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedItems.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services We Provide (white bg) ────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            School Cleaning Services We Provide
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Not every school or care facility needs the same setup. Some
            need full custodial services covering daily maintenance and
            ongoing building upkeep. Others need a dedicated daycare
            cleaning plan built around nap schedules and toy and surface
            sanitization for younger children. Before and after school care
            programs have their own timing needs, since rooms often get
            used twice in one day by two different groups of kids. Mint
            Sanitary works with schools, daycares, and before and after
            school care programs to build a schedule and scope of service
            that fits how the space gets used, rather than applying one
            generic cleaning template to every facility.
          </p>
        </div>
      </section>

      {/* ── Process (blue bg) ─────────────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our School Cleaning Process
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/20 font-body text-[18px] font-extrabold text-white">
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

      {/* ── Why Choose (white bg) ─────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Schools Across Greater Vancouver Choose Mint Sanitary
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

      {/* ── Serving Greater Vancouver + Related (f4f8ff bg) ───── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Serving Schools Across Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary provides school cleaning services throughout North
            Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster,
            and Maple Ridge. If your school is located in North Vancouver,
            visit our dedicated page on{" "}
            <a href="/north-vancouver/school-cleaning" className="underline underline-offset-2">
              school cleaning in North Vancouver
            </a>{" "}
            for details specific to that area, including neighbourhood
            coverage and local health compliance notes.
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
