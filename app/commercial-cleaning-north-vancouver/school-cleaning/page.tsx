import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "School Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional school cleaning in North Vancouver. Eco-friendly, child-safe products. Health-compliant janitorial services. Get 10% off your first clean!",
};

const whatIsIncluded = [
  { title: "Daily Maintenance", body: "Sweeping, mopping, dusting to keep spaces functional" },
  { title: "Deep Disinfection", body: "Targeting high-touch surfaces, doorknobs, railings" },
  { title: "Health Compliance", body: "Meeting BC health standards and local district requirements" },
  { title: "Flexible Scheduling", body: "After-school cleaning, early morning prep, weekend services" },
  { title: "Child-Safe Methods", body: "Non-toxic products that protect vulnerable populations" },
];

const impactItems = [
  "Student attendance and academic performance",
  "Staff wellness and retention",
  "Parent confidence and enrollment",
  "Compliance with health department standards",
  "School reputation in your community",
];

const serviceCategories = [
  {
    title: "Classroom & Learning Space Cleaning",
    intro: "Classrooms are the heart of the school. Students touch desks, tables, and chairs constantly. Pencils roll on floors. Hands touch whiteboards and glass.",
    items: [
      "Sanitizing all student desks, chairs, and tables daily",
      "Cleaning whiteboards, glass surfaces, and bulletin boards",
      "Vacuuming carpets and mopping floors with child-safe products",
      "Disinfecting high-touch surfaces like light switches and door handles",
      "Removing debris and organizing materials",
      "Special attention to areas near sick bays and counselor offices",
    ],
    outro: "We work around your schedule. After-school cleaning ensures students arrive to spotless rooms. Early morning prep gets everything ready before the first bell. Weekly deep cleaning targets areas daily cleaning doesn't cover.",
  },
  {
    title: "School Bathroom & Restroom Sanitization",
    intro: "Bathrooms are where illness spreads fastest. Students share toilets, sinks, and door handles without washing hands properly. One sick student contaminates a space that fifty others use daily.",
    items: [
      "Daily disinfection of all toilets, urinals, and sinks",
      "Restocking soap, paper towels, hand sanitizer, and toilet paper",
      "Grout and tile deep cleaning to prevent mold and mildew",
      "Floor sanitization and deodorization",
      "Ventilation system dust removal",
      "Feminine hygiene product disposal",
      "Special attention to stall doors and partitions where hands grab",
    ],
    outro: "We use hospital-grade disinfectants that are safe for children. Products kill viruses and bacteria without leaving toxic residue that irritates young lungs. Many schools struggle with student avoidance because bathrooms feel grimy. Professional cleaning North Vancouver restroom services solve that by maintaining genuinely clean spaces throughout the day.",
  },
  {
    title: "Gymnasium & Recreation Area Cleaning",
    intro: "Gyms see thousands of footsteps weekly. Basketball courts get scuffed. Weight room equipment accumulates sweat and residue. Bleachers collect dust and spills.",
    items: [
      "Daily floor sweeping and specialized mopping for court surfaces",
      "Equipment sanitization after each use period",
      "Bleacher cleaning and deep stain removal",
      "Ventilation system dust removal to improve air quality",
      "Post-event deep cleaning after tournaments or assemblies",
      "Locker room sanitization and deodorization",
    ],
    outro: "Gymnasiums also require specialized floor care. Standard mopping damages court surfaces. We understand the difference between cleaning a wooden court and a synthetic surface. We know which products protect athletic investments while eliminating bacteria.",
  },
  {
    title: "Cafeteria & Food Service Areas",
    intro: "Food service areas demand the highest standards. These spaces must meet health inspection requirements. Cross-contamination can make students sick. Grease buildup creates fire hazards.",
    items: [
      "Daily cleaning of all tables, chairs, and serving areas",
      "Food-safe disinfectants that won't contaminate surfaces where meals are prepared",
      "Equipment sanitization including lunch carts and serving utensils",
      "Grease trap and drain maintenance",
      "Floor degreasing and deep cleaning",
      "Trash removal and dumpster area maintenance",
      "Spill cleanup throughout meal periods",
    ],
    outro: "We use food-safe products tested for use in dining environments. These aren't the harsh chemicals your grandmother used. They're modern solutions that kill bacteria without leaving dangerous residue on surfaces where students eat.",
  },
  {
    title: "Hallway, Stairwell & Common Areas",
    intro: "Hallways and stairwells see traffic during class changes, lunch periods, and arrival/dismissal times. These areas accumulate dirt quickly. Railings get touched by hundreds of hands daily.",
    items: [
      "Sweeping and mopping daily or multiple times per day for heavy-traffic schools",
      "Sanitizing all railings, light switches, and door handles",
      "Stairwell cleaning with special attention to steps and nosings",
      "Lobby and entry area disinfection",
      "Water fountain cleaning and sanitization",
      "Locker area cleaning and organization",
      "Lost-and-found area management",
    ],
    outro: "Common areas set the tone for your entire school. When hallways are clean, students behave better. When common spaces feel cared for, families feel confident.",
  },
  {
    title: "Administrative Offices & Staff Areas",
    intro: "Teachers and staff deserve clean workspaces. Administrative offices often receive parents and district officials. These areas matter for school culture and public perception.",
    items: [
      "Office cleaning and desk sanitization",
      "Break room sanitation including appliances",
      "Staff bathroom deep cleaning",
      "Filing room and storage area organization",
      "Conference room preparation",
      "Window and glass cleaning",
      "Carpet shampooing and stain removal",
    ],
    outro: "Staff wellness improves when workspaces are clean and organized. Teachers arrive to sanitized desks. Kitchenettes are hygienic. Bathrooms function properly. These details affect morale.",
  },
];

const ecoProtects = [
  "Students with asthma or allergies from chemical triggers",
  "Children with sensory sensitivities from overwhelming odors",
  "Staff with chemical sensitivities who work in schools daily",
  "Custodians who handle products repeatedly",
  "The broader community through safer wastewater",
];

const processSteps = [
  {
    title: "Assessment & Planning",
    body: "We begin with a walkthrough of your facility. We identify high-traffic areas, specialized spaces, health concerns, and your specific needs. An elementary school needs different attention than a secondary school. A new building handles differently than an older one. We create a customized cleaning plan that fits your schedule and budget.",
  },
  {
    title: "Daily Maintenance",
    body: "After-school cleaning is standard for most schools. We arrive after dismissal, ensuring students go home to families they don't contaminate. We quickly handle high-touch surfaces, bathrooms, and common areas. Early morning prep services get everything ready before students arrive. Classrooms smell fresh. Bathrooms are stocked. Hallways are spotless. Evening deep cleaning tackles areas needing more thorough work. Weekend services handle additional deep cleaning, floor stripping, and specialized projects.",
  },
  {
    title: "Weekly Deep Cleaning",
    body: "Beyond daily maintenance, we schedule weekly deep work: carpet shampooing and extraction, tile and grout cleaning, window washing inside and outside, high-shelf dusting and cobweb removal, and equipment and appliance deep cleaning.",
  },
  {
    title: "Monthly Specialized Services",
    body: "Monthly services address seasonal needs: HVAC vent cleaning, carpet deep treatment, floor stripping and waxing, exterior power washing, and post-event thorough cleaning.",
  },
  {
    title: "Compliance Documentation",
    body: "Schools face health department audits. We maintain records of all cleaning activities, products used, and areas treated. This documentation protects your school and demonstrates your commitment to health standards.",
  },
];

const whyChooseItems = [
  {
    title: "BC Health Compliance",
    body: "We follow BC Centre for Disease Control guidelines strictly. Our team trains regularly on current health standards. We understand communicable disease prevention, disinfection protocols, and documentation requirements. Your school stays audit-ready.",
  },
  {
    title: "Eco-Friendly, Child-Safe Products",
    body: "Every product we use is tested for safety in educational settings. No harsh chemicals. No toxic residue. No respiratory irritants. Just effective cleaning that protects everyone in your building.",
  },
  {
    title: "Reliable, Consistent Staff",
    body: "We assign dedicated teams to schools when possible. Your custodian gets to know us. They know we'll follow procedures exactly. All our staff are bonded, insured, and background-checked. We've trained everyone in child safety protocols.",
  },
  {
    title: "7-Day Availability",
    body: "Schools operate on unique schedules. We're available nights, weekends, and holidays. Need post-event cleaning? We're there. Summer deep cleaning? We handle it. We flex to your needs.",
  },
  {
    title: "Transparent Pricing",
    body: "No surprise charges. No hidden fees. We quote based on your actual space and needs. First-clean discount of 10% (code MINT25) applies to new school clients.",
  },
  {
    title: "Free Estimates",
    body: "We'll visit your school, assess your needs, and provide a detailed quote. No obligation. No pressure.",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "Upper Lonsdale",
  "Forest Hills",
  "Brockton Point",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const faqItems = [
  {
    question: "What makes professional school cleaning in North Vancouver different from standard commercial cleaning?",
    answer: "School cleaning requires specialized knowledge of child health, communicable disease prevention, and educational facility operations. Standard commercial cleaning treats all buildings similarly. School cleaning in North Vancouver recognizes that children breathe different air, have different immune systems, and require different safety standards. We use child-safe products, understand high-traffic patterns in schools, and follow BC health guidelines specific to K-12 facilities.",
  },
  {
    question: "How often should schools in North Vancouver be cleaned?",
    answer: "Most North Vancouver schools benefit from daily cleaning of high-touch surfaces, bathrooms, and common areas, combined with deep cleaning weekly or monthly depending on traffic and facility size. Cafeterias and gymnasiums may need multiple cleaning cycles daily. We customize schedules based on your North Vancouver school's specific needs, enrollment size, and health requirements.",
  },
  {
    question: "Are the products you use safe for children in North Vancouver schools?",
    answer: "Yes. We use exclusively eco-friendly, child-safe products tested for educational settings. Nothing we use contains harsh chemicals, phthalates, ammonia, or bleach. These products meet EPA Safer Choice standards and are appropriate for North Vancouver schools with students of all ages, including those with asthma or chemical sensitivities.",
  },
  {
    question: "What health standards do you follow for school cleaning in North Vancouver?",
    answer: "We follow BC Centre for Disease Control guidelines, Health Canada standards, and North Vancouver School District requirements. Our team trains regularly on communicable disease prevention, disinfection protocols, and hygiene best practices. We maintain documentation of all cleaning activities for health audits.",
  },
  {
    question: "Can you accommodate our school's cleaning schedule in North Vancouver?",
    answer: "Absolutely. North Vancouver schools operate on different schedules. Some need after-school cleaning. Others prefer early morning or evening deep cleaning. We offer 7-day availability and flex to your school's needs, including nights, weekends, and holidays for special events.",
  },
  {
    question: "How do you handle deep cleaning in North Vancouver schools during school breaks?",
    answer: "Summer break and winter holidays are perfect times for thorough deep cleaning in North Vancouver schools. We can schedule intensive projects like carpet shampooing, floor stripping and waxing, HVAC cleaning, and specialized treatments. We work around your school's specific break schedule.",
  },
  {
    question: "What should North Vancouver schools do if students get sick or there's an outbreak?",
    answer: "We provide emergency disinfection services for North Vancouver schools facing illness outbreaks. Our team can rapidly treat all high-touch surfaces, bathrooms, common areas, and classroom spaces with hospital-grade disinfectants. Contact us immediately at (604) 671-6252 for same-day or next-day service.",
  },
  {
    question: "Do you service all types of school facilities in North Vancouver?",
    answer: "Yes. We clean elementary schools, middle schools, secondary schools, private schools, alternative schools, and specialized facilities throughout North Vancouver. We adapt our approach to each facility's unique needs, age groups served, and operational requirements.",
  },
  {
    question: "How does professional school cleaning in North Vancouver improve student attendance?",
    answer: "Research shows schools with professional cleaning see 14% reduction in student absences. North Vancouver schools specifically benefit because reduced illness means fewer sick days, better academic performance, and improved school culture. Cleaner bathrooms mean students use them instead of avoiding them, reducing discomfort and accidents.",
  },
  {
    question: "What's included in your first-clean discount for North Vancouver schools?",
    answer: "Our MINT25 code gives 10% off your first cleaning service. There's no minimum order. This applies to any North Vancouver school trying our services for the first time, whether it's a single deep clean or the beginning of a long-term contract.",
  },
];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/commercial-cleaning-north-vancouver/" },
  { title: "Office Cleaning", href: "/commercial-cleaning-north-vancouver/office-cleaning/" },
  { title: "Gym Cleaning", href: "/commercial-cleaning-north-vancouver/gym-cleaning/" },
];

export default function SchoolCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="School Cleaning in North Vancouver"
      heroImage="/school-cleaning-classroom-north-vancouver.jpg"
      heroIntro="When you walk into a clean school, you notice it immediately. Fresh air. Bright hallways. Sanitized classrooms. That&apos;s not luck. It&apos;s the result of professional school cleaning in North Vancouver."
      faqItems={faqItems}
      ctaHeading="Get Started with Professional School Cleaning in North Vancouver"
      ctaBody="Call us today: (604) 671-6252. We&apos;ll visit your North Vancouver school, assess your specific needs, and provide a free estimate. Use code MINT25 for 10% off your first clean."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/school-cleaning-classroom-north-vancouver.jpg"
                alt="Professional school cleaning in a North Vancouver classroom"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is School Cleaning in North Vancouver?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Schools aren&apos;t like regular offices. They handle hundreds of students, staff, and visitors daily. High-touch surfaces get touched thousands of times. Bathrooms see constant use. Cafeterias serve meals that require food-safe standards. Gymnasiums need special floor care. Every area demands a specialized approach.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                At Mint Sanitary, we&apos;ve spent years perfecting school cleaning in North Vancouver for facilities from Lower Lonsdale to Edgemont Village. We know what principals, custodians, and parents want: healthier environments, fewer sick days, and products safe for children.
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

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-4">
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              School cleaning is specialized janitorial care designed for educational environments. It goes beyond basic tidying. Standard commercial cleaning treats all buildings the same. School cleaning recognizes that children, teachers, and staff have different needs. A classroom isn&apos;t a warehouse. A bathroom in a school serves forty students per period, not five adults.
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Our school cleaning services North Vancouver follow BC Centre for Disease Control guidelines and Health Canada standards. We don&apos;t just clean. We create healthier places where students learn and teachers work.
            </p>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Professional school janitorial services North Vancouver includes:
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {whatIsIncluded.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-10 bg-[#6191e9] bg-fixed bg-cover bg-center px-4 py-16 sm:px-8 md:px-[60px]"
        style={{ backgroundImage: "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Professional School Cleaning Matters
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Numbers tell a clear story about school cleanliness and student health.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Research shows that schools with increased professional cleaning see a{" "}
                <strong className="font-extrabold text-white">14% reduction in student absences</strong>. That&apos;s meaningful. Seventy-five percent of school absences stem from illness, not discipline or family issues. Many of those illnesses spread because of contaminated surfaces.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Here&apos;s what worries health officials: influenza A virus lives on{" "}
                <strong className="font-extrabold text-white">up to 50% of student desks</strong> in any given week. Daily disinfection cuts absenteeism by 32%. That&apos;s not a minor detail. It&apos;s a pathway to better academic outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Students also vote with their feet. Forty percent of teenagers avoid dirty school bathrooms. They&apos;ll hold it all day rather than use an unclean restroom. That&apos;s uncomfortable and unhealthy.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Custodian health matters too. About 6% of school custodians suffer annual injuries from chemical exposures. Professional cleaning uses safer, stronger alternatives that protect staff while protecting students.
              </p>
              <p className="mt-2 font-body text-[15px] font-extrabold leading-[1.7] text-white">
                Professional school disinfection North Vancouver directly impacts:
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {impactItems.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/10 px-5 py-3 font-body text-[15px] text-white/80">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            When Lynn Valley parents choose a school, cleanliness matters. When Deep Cove families evaluate options, they notice which buildings smell fresh and which feel sticky. Professional school cleaning North Vancouver isn&apos;t a luxury. It&apos;s a baseline expectation.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Thorough School Cleaning Services in North Vancouver
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Every area of a school requires different expertise and products. We handle them all.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="rounded-[20px] bg-[#f4f8ff] p-6">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">{cat.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">{cat.intro}</p>
                <ul className="mt-3 space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; {item}</li>
                  ))}
                </ul>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">{cat.outro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-10 bg-[#6191e9] bg-fixed bg-cover bg-center px-4 py-16 sm:px-8 md:px-[60px]"
        style={{ backgroundImage: "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Eco-Friendly Cleaning Products Matter
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                You might assume harsh chemicals clean better. They don&apos;t. They&apos;re also dangerous.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Children breathe 50% more air relative to their body weight than adults. A toxic cleaning product in a classroom affects young lungs differently than adult ones. Kids with asthma, allergies, or respiratory sensitivities suffer most.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Green cleaning products for schools aren&apos;t marketing gimmicks. They&apos;re safer, smarter chemistry.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Microfiber technology reduces bacteria by 99% compared to 30% with traditional cotton mops. You&apos;re not sacrificing cleaning power. You&apos;re improving it while reducing chemical use. Microfiber works through physical removal, not chemical battering.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Green Seal and EPA Safer Choice products eliminate dangerous chemicals like phthalates, ammonia, and bleach. They break down safely in water systems. They don&apos;t accumulate in school buildings over years.
              </p>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] font-extrabold leading-[1.7] text-white">
            Eco-friendly school cleaning North Vancouver protects:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ecoProtects.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/10 px-5 py-3 font-body text-[15px] text-white/80">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            We stock only products tested for safety in schools. You&apos;ll notice they don&apos;t have that harsh chemical smell. That absence isn&apos;t a sign of weak cleaning. It&apos;s a sign of smart chemistry.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
            One client from Seymour Heights shared that after switching to our eco-friendly approach, their school nurse reported fewer visits for asthma attacks and respiratory complaints. That&apos;s not anecdotal. It&apos;s what happens when you remove chemical irritants from breathing spaces.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              School Cleaning Process &amp; Scheduling
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Professional school cleaning North Vancouver requires planning and consistency. We don&apos;t just show up and clean randomly.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-[#5c6075]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccordionWithImage
        heading="Why Choose Mint Sanitary for School Cleaning"
        intro="We've cleaned schools in Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, and throughout greater North Vancouver. We know the district's requirements, the community's expectations, and what works in BC climate. Mint Sanitary brings professional standards to school cleaning in North Vancouver. We're not a general cleaning company doing school work on the side. We specialize in this. We understand the stakes."
        image="/eco-friendly-cleaning-products-north-vancouver.jpg"
        imageAlt="Eco-friendly cleaning products for school cleaning in North Vancouver"
        items={whyChooseItems}
        ctaHref="/contact"
        ctaLabel="Get a Free Estimate"
      />

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
              Service Areas in North Vancouver
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We proudly serve schools throughout North Vancouver, including:
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We also serve West Vancouver, Vancouver, Burnaby, and greater Greater Vancouver. If your school is in the area, we likely service it or can start. Call us at{" "}
                <a href="tel:+16046716252" className="underline underline-offset-2">(604) 671-6252</a>{" "}
                for availability and pricing.
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
          <div className="mx-auto mt-10 max-w-[900px]">
            <p className="font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white/60">External Resources</p>
            <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-1">
              <a href="https://www2.gov.bc.ca/gov/content/education-training/k-12/communicable-disease-prevention-in-k-12-schools" className="font-body text-[14px] text-white/70 underline underline-offset-2" target="_blank" rel="noopener noreferrer">BC Centre for Disease Control K-12 Prevention</a>
              <a href="https://www.fraserhealth.ca/health-topics-a-to-z/school-health/illness-and-immunizations/keeping-your-classroom-clean" className="font-body text-[14px] text-white/70 underline underline-offset-2" target="_blank" rel="noopener noreferrer">Fraser Health: Keeping Your Classroom Clean</a>
              <a href="https://www.epa.gov/saferchoice" className="font-body text-[14px] text-white/70 underline underline-offset-2" target="_blank" rel="noopener noreferrer">EPA Safer Choice Program</a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative z-10 bg-[#6191e9] bg-fixed bg-cover bg-center px-4 py-16 sm:px-8 md:px-[60px]"
        style={{ backgroundImage: "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Related Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedServices.map((s) => (
              <div key={s.href} className="rounded-[14px] bg-white/10 p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">{s.title}</h3>
                <a href={s.href} className="mt-5 inline-block w-fit border-b border-[#66DAD5] font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
