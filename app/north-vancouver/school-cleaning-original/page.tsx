import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/school-cleaning-original
// so the CMS version at /north-vancouver/school-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "School Cleaning in North Vancouver | Mint Sanitary",
  description:
    "School cleaning in North Vancouver for K-12 schools and daycares. Custodial services, BC health compliance, and eco-friendly products. Free estimates.",
  robots: { index: false, follow: false },
};

const researchStats = [
  "Schools with increased professional cleaning see a 14% reduction in student absences.",
  "About 75% of school absences stem from illness, not discipline or family issues.",
  "Influenza A virus can live on up to 50% of student desks in a given week.",
  "Daily disinfection cuts absenteeism by 32%.",
  "40% of teenagers avoid using dirty school bathrooms.",
  "About 6% of school custodians suffer annual injuries related to chemical exposures.",
  "Children breathe 50% more air relative to body weight than adults, which raises their exposure to airborne particles and chemical residue.",
  "Microfiber cleaning technology reduces bacteria by 99%, compared to 30% with traditional cotton mops.",
];

const includedItems = [
  { title: "Daily Maintenance", body: "Sweeping, mopping, dusting, and trash removal in classrooms, hallways, and common areas." },
  { title: "Deep Disinfection", body: "High-touch surfaces like doorknobs, railings, light switches, and desks get targeted disinfection." },
  { title: "Health Compliance", body: "Cleaning practices align with BC health standards and local North Vancouver school district requirements." },
  { title: "Flexible Scheduling", body: "After-school cleaning, early morning prep, evening deep cleaning, or weekend service, built around your North Vancouver school's calendar." },
  { title: "Child-Safe Methods", body: "Non-toxic, eco-friendly products, since schools serve a more chemically sensitive population than a typical office." },
];

const services = [
  { title: "Classroom & Learning Space Cleaning in North Vancouver", body: "Desks, chairs, and tables get sanitized daily. Whiteboards, glass surfaces, and bulletin boards are wiped down, carpets and floors are cleaned with child-safe products, and high-touch surfaces receive extra attention. Cleaning is scheduled after school hours or in the early morning, so North Vancouver classrooms are ready before the first bell." },
  { title: "School Bathroom & Restroom Sanitization", body: "Bathrooms get daily disinfection, restocking of supplies, and floor sanitization. Grout and tile receive deep cleaning on a regular basis, using hospital-grade disinfectants that are still safe for children to be around shortly after application." },
  { title: "Gymnasium & Recreation Area Cleaning in North Vancouver Schools", body: "Gym floors need daily care to protect the surface, whether it's a wood court or a synthetic one, since each requires a different cleaning approach. Equipment gets sanitized, bleachers are cleaned, and locker rooms are sanitized on a regular schedule. Post-event deep cleaning is available after assemblies, sports days, and tournaments at North Vancouver schools." },
  { title: "Cafeteria & Food Service Areas", body: "Cafeterias and kitchens are cleaned with food-safe disinfectants that meet health inspection standards. This includes equipment sanitization, grease trap and drain maintenance, and floor degreasing to prevent slip hazards." },
  { title: "Hallway, Stairwell & Common Area Cleaning in North Vancouver", body: "Hallways and stairwells get regular sweeping and mopping, along with disinfection of railings, light switches, door handles, water fountains, and locker areas. These are some of the highest-traffic surfaces in any North Vancouver school building." },
  { title: "Administrative Offices & Staff Areas", body: "Front offices, staff rooms, and staff bathrooms get the same level of attention as classrooms, with desk sanitization, break room cleaning, and periodic carpet shampooing." },
];

const processSteps = [
  { title: "Assessment & Planning", body: "A walkthrough of your North Vancouver school or facility to build a customized cleaning plan based on building size, student population, and daily schedule." },
  { title: "Daily Maintenance", body: "After-school cleaning as the standard option, with early morning prep, evening deep cleaning, or weekend service available." },
  { title: "Weekly Deep Cleaning", body: "Carpet shampooing and extraction, tile and grout cleaning, window washing, and high-shelf dusting." },
  { title: "Monthly Specialized Services", body: "HVAC vent cleaning, carpet deep treatment, floor stripping and waxing, and exterior power washing." },
  { title: "Compliance Documentation", body: "Records of all cleaning activities are kept and made available for health audits or district reviews." },
];

const whyChooseItems = [
  { title: "BC Health Compliance", body: "Our cleaning practices follow BC Centre for Disease Control guidelines, with regular staff training and documentation that's ready for an audit at any time." },
  { title: "Eco-Friendly, Child-Safe Products", body: "No harsh chemicals, no toxic residue left behind on surfaces children touch all day. Our products are consistent with the EPA Safer Choice Program's standards for reduced-hazard cleaning chemistry." },
  { title: "Reliable, Consistent Staff", body: "We assign dedicated teams to your North Vancouver school where possible. Every team member is bonded, insured, background-checked, and trained on child safety protocols." },
  { title: "7-Day Availability", body: "Cleaning is available nights, weekends, and holidays, including post-event cleaning and full summer deep cleans." },
  { title: "Transparent Pricing", body: "No surprise charges. Use code MINT26 for 10% off your first clean." },
  { title: "Free Estimates", body: "Every quote starts with a no-cost walkthrough or consultation with a North Vancouver school cleaning specialist." },
];

const serviceAreas = ["Lower Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont Village", "Seymour Heights", "Upper Lonsdale", "Forest Hills", "Brockton Point"];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/north-vancouver/commercial-cleaning" },
  { title: "Office Cleaning", href: "/north-vancouver/office-cleaning" },
  { title: "Gym Cleaning", href: "/north-vancouver/gym-cleaning" },
];

const faqItems = [
  {
    question: "What does school cleaning in North Vancouver include?",
    answer:
      "School cleaning in North Vancouver from Mint Sanitary covers daily maintenance, deep disinfection of high-touch surfaces, bathroom sanitization, gymnasium and cafeteria cleaning, and health compliance documentation, all built around your North Vancouver school's schedule.",
  },
  {
    question: "Do you clean daycares in North Vancouver?",
    answer:
      "Yes. We provide daycare cleaning in North Vancouver, with schedules built around nap times and toy and surface sanitization suited to younger children.",
  },
  {
    question: "Can you handle before and after school care cleaning in North Vancouver?",
    answer:
      "Yes. Before and after school care programs in North Vancouver often share rooms with regular classrooms, and we schedule cleaning around both uses so the space is ready for each group.",
  },
  {
    question: "Do you provide custodial services for schools in North Vancouver?",
    answer:
      "Yes. We offer full custodial services for North Vancouver schools that need daily building maintenance, as well as scheduled deep cleaning for schools that already have in-house custodial staff.",
  },
  {
    question: "What cleaning products do you use in North Vancouver schools?",
    answer:
      "We use eco-friendly, non-toxic, biodegradable products in North Vancouver schools, along with hospital-grade disinfectants for bathrooms and high-touch surfaces where extra sanitization is needed.",
  },
  {
    question: "How much does school cleaning cost in North Vancouver?",
    answer:
      "Pricing for school cleaning in North Vancouver depends on building size, scope of service, and cleaning frequency, so we don't publish flat rates. Visit our rates page or request a free estimate specific to your North Vancouver school.",
  },
  {
    question: "Do you follow BC health compliance standards for schools in North Vancouver?",
    answer:
      "Yes. Our school cleaning practices in North Vancouver follow BC Centre for Disease Control guidance and Fraser Health resources, with staff training and documentation ready for a compliance audit.",
  },
  {
    question: "Can cleaning be scheduled around class hours at North Vancouver schools?",
    answer:
      "Yes. After-school cleaning is our standard option for North Vancouver schools, with early morning prep, evening deep cleaning, and weekend service also available.",
  },
  {
    question: "Do you offer weekend cleaning for North Vancouver schools?",
    answer: "Yes. We're available seven days a week, including evenings, weekends, and holidays, for schools throughout North Vancouver.",
  },
  {
    question: "Are your North Vancouver school cleaning staff background checked?",
    answer: "Yes. All Mint Sanitary staff working in North Vancouver schools are bonded, insured, background-checked, and trained on child safety protocols.",
  },
  {
    question: "Do you provide summer deep cleaning for North Vancouver schools?",
    answer:
      "Yes. Monthly specialized services like floor stripping and waxing, HVAC vent cleaning, and exterior power washing are commonly scheduled during summer break for North Vancouver schools.",
  },
  {
    question: "Which North Vancouver neighbourhoods do you serve?",
    answer:
      "We provide school cleaning across North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Upper Lonsdale, Forest Hills, and Brockton Point.",
  },
  {
    question: "Do you clean school gymnasiums in North Vancouver?",
    answer:
      "Yes. We provide daily floor care for both wood and synthetic courts, equipment sanitization, bleacher cleaning, and locker room sanitization for North Vancouver school gymnasiums.",
  },
  {
    question: "How do you handle school bathroom cleaning in North Vancouver?",
    answer:
      "North Vancouver school bathrooms get daily disinfection, supply restocking, and floor sanitization, with hospital-grade disinfectants that remain safe for children shortly after application.",
  },
  {
    question: "Can I get a free estimate for school cleaning in North Vancouver?",
    answer:
      "Yes. Request a free estimate for school cleaning in North Vancouver through our rates page or by contacting us directly, and we'll schedule a walkthrough of your facility.",
  },
  {
    question: "Is the MINT26 discount available for North Vancouver schools?",
    answer: "Yes. North Vancouver schools and daycares can use code MINT26 for 10% off their first clean with Mint Sanitary.",
  },
];

export default function SchoolCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Professional School Cleaning in North Vancouver"
      heroImage="/school-cleaning-classroom-north-vancouver.jpg"
      heroSubtitle="K-12 Schools & Daycares, BC Health Compliance"
      heroIntro="When you walk into a clean school, you notice it immediately. Fresh air. Bright hallways. Sanitized classrooms. That's not luck. It's the result of professional school cleaning in North Vancouver. Mint Sanitary is based in North Vancouver, and school cleaning here means working around a specific set of realities: rain for much of the school year, a mix of older and newer school buildings, and daycare and before and after school care programs sharing space with elementary classrooms across the district."
      faqItems={faqItems}
      ctaHeading="Ready for a Cleaner, Healthier North Vancouver School?"
      ctaBody="A clean school affects attendance, health, and how staff and students feel about the building they spend their day in. Request a free estimate and use code MINT26 for 10% off your first clean."
      ctaHref="/rates"
    >
      {/* ── Why It Matters (white bg) ─────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why North Vancouver Schools Need Professional Cleaning
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Children in a school building move through the same spaces all
            day, share supplies, and touch far more surfaces than adults
            typically do. That matters just as much in North Vancouver as
            anywhere else.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {researchStats.map((stat) => (
              <li key={stat} className="rounded-[14px] bg-white/[0.12] px-5 py-3 font-body text-[15px] leading-[1.7] text-white/80">
                {stat}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            For reference, the BC Centre for Disease Control publishes K-12
            prevention guidance, and Fraser Health has its own resource,
            &ldquo;Keeping Your Classroom Clean,&rdquo; both of which shape
            how we structure cleaning plans for schools in North Vancouver.
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
            What Our North Vancouver School Cleaning Includes
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every school cleaning plan we run in North Vancouver is built
            around five standards.
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
            School Cleaning Services We Provide in North Vancouver
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
            Not every North Vancouver school or care facility runs on the
            same schedule. Some need full custodial services covering daily
            maintenance and general building upkeep. Others operate a
            daycare cleaning program built around nap schedules and toy and
            surface sanitization for younger children. Before and after
            school care programs in North Vancouver have their own timing
            needs too, since a single room can get used twice a day by two
            different groups of kids. Mint Sanitary works with North
            Vancouver schools, daycares, and before and after school care
            programs to set a schedule and scope of service around how the
            space is used, rather than applying one generic plan across
            every facility.
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
              Our School Cleaning Process in North Vancouver
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

      {/* ── Why Choose Mint Sanitary ── */}
      <AccordionWithImage
        heading="Why North Vancouver Schools Choose Mint Sanitary"
        image="/eco-friendly-cleaning-products-north-vancouver.jpg"
        imageAlt="Eco-friendly, child-safe cleaning products used in North Vancouver schools"
        items={whyChooseItems}
        ctaHref="/rates"
        ctaLabel="Get a Free Estimate"
      />

      {/* ── Client Story (white bg) ───────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Real Results: A North Vancouver School&apos;s Experience
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            One client from Seymour Heights shared that after switching to
            our eco-friendly approach, their school nurse reported fewer
            visits for asthma attacks and respiratory complaints.
            That&apos;s what happens when chemical irritants are removed
            from the spaces where children spend their school day
            breathing.
          </p>
        </div>
      </section>

      {/* ── Service Areas + Related (blue bg) ─────────────────── */}
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
              School Cleaning Across North Vancouver Neighbourhoods
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary provides school cleaning throughout North
              Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove,
              Edgemont Village, Seymour Heights, Upper Lonsdale, Forest
              Hills, and Brockton Point. We also serve schools and daycares
              in West Vancouver, Vancouver, and Burnaby. Wherever your
              school or care facility sits within North Vancouver, our
              teams build a schedule around its specific hours and layout
              rather than a one-size-fits-all plan.
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
              alt="Map of Greater Vancouver showing Mint Sanitary school cleaning service area"
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
            Related Services in North Vancouver
          </h2>
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
