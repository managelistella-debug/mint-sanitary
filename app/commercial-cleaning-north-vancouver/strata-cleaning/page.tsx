import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Strata Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional strata cleaning services in North Vancouver. Eco-friendly janitorial services for condos and multi-unit buildings. Free estimates. 10% off first clean.",
};

const commonAreas = [
  {
    title: "Lobbies and Main Entrances",
    body: "These are the first impression residents and guests get. Daily cleaning keeps them welcoming. High-traffic lobbies in North Vancouver buildings accumulate dirt and moisture, especially during rainy seasons. We handle floors, baseboards, and common area surfaces.",
  },
  {
    title: "Hallways and Corridors",
    body: "Hallways connect residents to their homes. Dust, debris, and footprints accumulate quickly. Regular hallway cleaning prevents buildup and maintains a clean appearance throughout the building.",
  },
  {
    title: "Elevators and Elevator Lobbies",
    body: "Elevators are high-touch surfaces. Multiple hands touch buttons, handrails, and walls every day. In a busy North Vancouver strata building, that means hundreds of touches daily. Our strata cleaning service includes elevator disinfection, button cleaning, and mirror polishing.",
  },
  {
    title: "Stairwells and Emergency Exits",
    body: "Stairwells need regular attention for safety and cleanliness. Dust accumulates on steps and railings. We make sure stairwells stay clean and safe for residents.",
  },
  {
    title: "Parkades and Underground Garages",
    body: "Parkades collect dirt, salt residue, and automotive fluid. In North Vancouver, winter weather brings additional challenges. Our strata cleaning team cleans floor surfaces, removes debris, and addresses spills. Regular parkade cleaning extends the life of concrete surfaces.",
  },
  {
    title: "Amenity Rooms",
    body: "Fitness centers, lounges, meeting rooms, and pool areas in North Vancouver buildings require specialized cleaning. These spaces need sanitizing between uses and deep cleaning regularly.",
  },
  {
    title: "Recycling and Garbage Areas",
    body: "Trash rooms can get messy fast. Regular cleaning prevents odors, pests, and contamination. We handle recycling areas and garbage room maintenance as part of our common area cleaning in North Vancouver.",
  },
  {
    title: "Restrooms and Common Washrooms",
    body: "Public restrooms demand frequent attention. Toilet cleaning, sink sanitizing, floor mopping, and restocking supplies are routine in our strata cleaning service.",
  },
  {
    title: "Exterior Common Spaces",
    body: "Balconies, patios, and courtyards need seasonal cleaning. Pressure washing removes algae and dirt. Leaf cleanup and seasonal maintenance keep exterior areas looking sharp.",
  },
  {
    title: "Windows and Glass Surfaces",
    body: "Clean windows make a building shine. We handle interior and exterior glass, including lobby doors, mailroom windows, and hallway glass surfaces.",
  },
];

const whyMattersItems = [
  {
    title: "Legal Compliance",
    body: "The BC Strata Property Act requires strata councils to maintain common property. Section 72 of the Act outlines maintenance obligations. If a building does not meet maintenance standards, residents can file complaints. Regular strata cleaning in North Vancouver demonstrates you are taking these obligations seriously.",
  },
  {
    title: "Resident Satisfaction",
    body: "Clean, well-maintained common areas improve resident satisfaction. When people feel their building is cared for, they are happier. Happy residents create stable, low-turnover communities. In competitive North Vancouver neighborhoods like Edgemont Village and Seymour Heights, tenant perception matters.",
  },
  {
    title: "Property Value",
    body: "A well-maintained building commands higher resale values. Potential buyers walk through lobbies, elevators, and common areas. First impressions influence decisions. Professional strata cleaning in North Vancouver protects your property market value.",
  },
  {
    title: "Liability Protection",
    body: "Slip-and-fall accidents happen. When a resident slips on wet floor or trips on debris, liability follows. Documented, regular strata cleaning creates a paper trail showing you maintained safe conditions. This protects your council and building from liability claims.",
  },
  {
    title: "Asset Life Extension",
    body: "Regular cleaning extends the life of common area surfaces. Hardwood floors last longer with proper care. Carpet stays cleaner longer with regular vacuuming. Elevators operate better when kept free of dust and debris. Professional strata cleaning in North Vancouver saves money long-term by protecting infrastructure.",
  },
];

const processSteps = [
  {
    title: "Initial Consultation and Site Assessment",
    body: "We visit your North Vancouver building and walk through all common areas. We note building size, occupancy, traffic patterns, and special needs. We discuss your strata council priorities and budget.",
  },
  {
    title: "Customized Cleaning Plan",
    body: "Based on our assessment, we create a cleaning plan tailored to your building. We specify what gets cleaned, how often, and at what time. We consider resident schedules. If your North Vancouver building is busiest in mornings, we schedule deep cleaning for afternoons. If weeknight parking is critical, we avoid cleaning parkades during peak hours.",
  },
  {
    title: "Eco-Friendly Product Selection",
    body: "We use non-toxic, environmentally responsible cleaning products. These are safe for residents, staff, and the environment. In North Vancouver diverse neighborhoods from Lynn Valley to Deep Cove, eco-conscious residents appreciate this commitment.",
  },
  {
    title: "High-Touch Surface Focus",
    body: "We prioritize surfaces residents touch frequently: elevator buttons, handrails, door handles, and light switches. These get disinfected and cleaned regularly to reduce germ transmission.",
  },
  {
    title: "Flexible Scheduling",
    body: "Our strata cleaning service operates seven days a week, including weekends and holidays. We work around resident schedules. We accommodate your North Vancouver building needs with early morning, late afternoon, or night cleaning options.",
  },
  {
    title: "Documentation and Reporting",
    body: "We provide cleaning logs and reports. Property managers stay informed about what was completed, when, and by whom. This documentation supports your strata council maintenance records.",
  },
  {
    title: "Quality Assurance",
    body: "We do not just clean and leave. We inspect our work and address any issues immediately. If a resident reports a spot we missed, we return and fix it.",
  },
];

const whyChooseItems = [
  {
    title: "Local North Vancouver Expertise",
    body: "We are based in North Vancouver and know our community. We understand the unique characteristics of different neighborhoods. Lower Lonsdale has high-density residential. Lynn Valley has family-oriented complexes. Deep Cove has waterfront properties. Edgemont Village has mid-rise condos. Seymour Heights has various building types.",
  },
  {
    title: "Seven-Day Availability",
    body: "Life does not stop on weekends or holidays. Neither does strata cleaning. We work seven days a week, including holidays. Your North Vancouver building gets consistent service no matter the day.",
  },
  {
    title: "Eco-Friendly Products",
    body: "We use non-toxic, biodegradable cleaning products. These are safe for residents with allergies or sensitivities. They are better for North Vancouver environment. And they work. Eco-friendly does not mean less effective.",
  },
  {
    title: "Bonded, Insured, and Registered",
    body: "Your peace of mind matters. We carry $2 million liability insurance. We are bonded and WorkSafeBC registered. Our team is background-checked. When we clean your North Vancouver strata building, you know you are working with professionals you can trust.",
  },
  {
    title: "Free Estimates and Consultations",
    body: "We do not charge for initial visits. We assess your North Vancouver building, understand your needs, and provide a transparent estimate. You know exactly what you are paying before we start.",
  },
  {
    title: "First Clean Discount",
    body: "New clients get 10% off their first cleaning with code MINT25. If you have been considering professional strata cleaning in North Vancouver, this is a good time to try us.",
  },
  {
    title: "Flexible Service Frequency",
    body: "We accommodate daily strata cleaning, twice-weekly service, or bi-weekly visits. As your building needs change, so can our service plan.",
  },
  {
    title: "Same-Day Response for Urgent Needs",
    body: "Spills, accidents, or unexpected messes happen. We respond quickly to urgent cleaning needs. In North Vancouver, same-day service is often possible.",
  },
];

const serviceAreaChips = [
  "Lower Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const pricingTiers = [
  {
    title: "Small Buildings (30 to 50 units)",
    twiceWeekly: "$600 to $1,200/month",
    daily: "$1,500 to $2,500/month",
  },
  {
    title: "Medium Buildings (50 to 150 units)",
    twiceWeekly: "$1,200 to $2,000/month",
    daily: "$2,500 to $4,500/month",
  },
  {
    title: "Larger Buildings (150+ units)",
    twiceWeekly: "$2,000 to $5,000+/month",
    daily: "$5,000 to $10,000+/month",
  },
];

const pricingFactors = [
  "Building square footage",
  "Number of units",
  "Amenity mix (do you have a fitness center, pool, meeting rooms?)",
  "Service frequency",
  "Specific cleaning requirements",
  "Parkade size and condition",
];

const faqItems = [
  {
    question: "What is the difference between strata cleaning and regular commercial cleaning in North Vancouver?",
    answer: "Strata cleaning focuses specifically on multi-unit residential buildings and their common areas. Regular commercial cleaning typically serves offices, retail, or other business spaces. Strata cleaning in North Vancouver requires understanding residential building codes, BC Strata Property Act requirements, and unique scheduling challenges when residents are living in the building.",
  },
  {
    question: "How often should a North Vancouver strata building get cleaned?",
    answer: "It depends on building size and occupancy. Many North Vancouver strata buildings benefit from twice-weekly cleaning of main areas, with daily elevator and entrance cleaning. Larger or higher-traffic buildings may need daily service. Your strata cleaning contractor should assess your North Vancouver building and recommend an appropriate frequency based on your specific situation.",
  },
  {
    question: "Is our North Vancouver strata council legally required to hire professional cleaning services?",
    answer: "The BC Strata Property Act requires councils to maintain common property in safe, clean condition. While the law does not mandate hiring contractors, most North Vancouver strata buildings find professional strata cleaning necessary to meet legal standards. Hiring professionals creates documentation of maintenance efforts and protects the council.",
  },
  {
    question: "Can strata cleaning in North Vancouver use eco-friendly products?",
    answer: "Absolutely. Modern eco-friendly cleaning products are highly effective. At Mint Sanitary, we use non-toxic, biodegradable products throughout our North Vancouver strata cleaning service. They are safe for residents and the environment without sacrificing cleaning power.",
  },
  {
    question: "How do we choose the best strata cleaning contractor in North Vancouver?",
    answer: "Look for contractors with strata experience, appropriate insurance ($2M liability minimum), WorkSafeBC registration, and background-checked staff. Check references from other North Vancouver strata buildings. Verify they understand BC Strata Property Act requirements. Request a site assessment and custom proposal.",
  },
  {
    question: "What happens if residents complain about the strata cleaning quality in North Vancouver?",
    answer: "Professional contractors take complaints seriously. At Mint Sanitary, we address issues immediately. If a resident reports dirty common areas, we send a team to fix it. We maintain communication with property managers and strata councils about ongoing concerns. Feedback helps us improve our North Vancouver strata cleaning service continuously.",
  },
  {
    question: "Can strata cleaning service in North Vancouver be scheduled around resident schedules?",
    answer: "Yes. Our team works mornings, afternoons, evenings, and weekends. We coordinate with property managers to identify the best times for deep cleaning while minimizing disruption. For example, parkade cleaning might happen during low-traffic hours. Hallway deep cleaning might occur mid-afternoon. Your North Vancouver strata council decides what schedule works best.",
  },
  {
    question: "Are cleaning staff bonded and background-checked in North Vancouver strata cleaning services?",
    answer: "They should be. At Mint Sanitary, all team members are background-checked, bonded, and trained. When staff regularly access resident homes and common areas in a North Vancouver strata building, trust is essential. We take this seriously.",
  },
  {
    question: "How does strata cleaning in North Vancouver differ in winter versus summer?",
    answer: "Winter brings unique challenges. Salt, slush, and moisture increase parkade and lobby cleaning frequency. Exterior areas may need seasonal clearing. Summer may require more frequent amenity room cleaning as residents use facilities more. A good North Vancouver strata cleaning contractor adjusts service seasonally based on changing conditions.",
  },
  {
    question: "What documentation does a North Vancouver strata cleaning contractor provide?",
    answer: "Professional contractors maintain cleaning logs, checklists, and incident reports. At Mint Sanitary, we provide documentation showing what was cleaned, when, and by whom. This supports strata council records and demonstrates compliance with BC Strata Property Act maintenance requirements for your North Vancouver building.",
  },
  {
    question: "How much does strata cleaning cost compared to hiring an in-house janitor in North Vancouver?",
    answer: "In-house staff requires salary, benefits, employment insurance, and training. Contractors like Mint Sanitary provide flexibility without long-term employment costs. For most North Vancouver strata buildings, professional contractors offer better value while providing higher quality and more reliable service than part-time in-house staff.",
  },
];

const relatedServices = [
  {
    title: "Commercial Cleaning",
    href: "/commercial-cleaning-north-vancouver/",
  },
  {
    title: "Office Cleaning",
    href: "/commercial-cleaning-north-vancouver/office-cleaning/",
  },
  {
    title: "Post-Construction Cleaning",
    href: "/cleaning-services-north-vancouver/post-construction-cleaning/",
  },
];

export default function StrataCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Strata Cleaning in North Vancouver"
      heroImage="/strata-cleaning-north-vancouver.jpg"
      heroIntro="If you manage a condo building, townhouse complex, or multi-unit residential property in North Vancouver, you know how demanding it is to keep common areas spotless. Lobbies get dirty fast. Elevators accumulate fingerprints and smudges. Parkades collect dust and debris."
      faqItems={faqItems}
      ctaHeading="Ready to Upgrade Your Strata Building?"
      ctaBody="Your North Vancouver strata building deserves professional care. Contact Mint Sanitary for a free estimate. Call (604) 671-6252 or visit www.mintsanitary.com. Mention code MINT25 for 10% off your first strata cleaning service."
    >
      {/* ── Image + Text Intro ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/strata-cleaning-north-vancouver.jpg"
                alt="Strata cleaning in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Professional Strata Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Strata Cleaning in North Vancouver?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                At Mint Sanitary, we have been helping North Vancouver strata councils and property managers maintain spotless, safe common spaces. Our eco-friendly strata cleaning service covers lobby floors, parkade maintenance, and all common areas, with the flexibility to schedule cleaning around resident schedules.
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

      {/* ── Intro Content ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Strata cleaning is professional janitorial service for shared spaces in multi-unit residential buildings. Unlike residential house cleaning, strata cleaning focuses on common areas that serve dozens, sometimes hundreds, of residents daily.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                In North Vancouver, strata-titled buildings are common. The BC Strata Property Act requires buildings to maintain common property in safe condition. This is not optional; it is a legal obligation for strata councils. Cleaning is not just about appearance. It is about liability, resident satisfaction, and property value.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                When you hire a strata cleaning contractor, look for someone bonded and insured with at least $2 million in liability coverage. They should be WorkSafeBC registered. At Mint Sanitary, we carry $2M liability insurance, are fully bonded, and maintain WorkSafeBC registration. Your building is protected.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Strata cleaning is not one-size-fits-all. A 30-unit building has different needs than a 200-unit high-rise. Some buildings need daily cleaning. Others do well with twice-weekly service. North Vancouver buildings vary widely, from waterfront condos in Deep Cove to busy residential complexes in Lower Lonsdale. We customize our strata cleaning service to match your building&apos;s size, occupancy patterns, and budget.
              </p>
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
            Common Areas Covered by Strata Cleaning Services
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Professional strata cleaning in North Vancouver covers all shared spaces residents use daily:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {commonAreas.map((area) => (
              <div key={area.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{area.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Why Strata Cleaning Matters for BC Buildings
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Keeping your North Vancouver strata building clean is not just cosmetic. It is fundamental to running a well-maintained property.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyMattersItems.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">{item.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Strata Cleaning Process in North Vancouver
            </h2>
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
        heading="Why Choose Mint Sanitary for Strata Cleaning"
        intro="Running a strata council or managing a North Vancouver property is complex. You need a cleaning partner who understands the business and delivers consistently."
        items={whyChooseItems}
        image="/mint-sanitary-service-van-north-vancouver.jpg"
        imageAlt="Mint Sanitary service van in North Vancouver"
      />

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
            I remember when we first started cleaning a 45-unit complex in Lower Lonsdale. The strata council had been cycling through contractors, frustrated with inconsistent quality. We took time to understand their specific concerns: the lobby tracked water during rainy season, the parkade smelled musty, and residents complained about elevator cleanliness. We adjusted our approach, focused on those pain points, and stuck with the same team for continuity. Two years later, we are still their contractor. That is the difference between a cleaning service and a cleaning partner.
          </p>
        </div>
      </section>

      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{ backgroundImage: "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Strata Cleaning Service Areas
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We serve all of North Vancouver and the surrounding regions:
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreaChips.map((area) => (
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
          <div className="mt-10">
            <p className="font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white/60">External Resources</p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
              <a href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/98043_18" className="font-body text-[14px] text-white/70 underline underline-offset-2" target="_blank" rel="noopener noreferrer">BC Strata Property Act</a>
              <a href="https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing/operating-a-strata/repairs-and-maintenance" className="font-body text-[14px] text-white/70 underline underline-offset-2" target="_blank" rel="noopener noreferrer">Province of BC Repairs and Maintenance</a>
              <a href="https://www.choa.bc.ca/" className="font-body text-[14px] text-white/70 underline underline-offset-2" target="_blank" rel="noopener noreferrer">CHOA Resources</a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Strata Cleaning Pricing and Free Quotes
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Strata cleaning costs vary based on building size, service frequency, and specific needs. Here are typical ranges for North Vancouver buildings:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">{tier.title}</h3>
                <div className="mt-3 space-y-2">
                  <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    <strong className="font-extrabold text-[#4E5062]">Twice-weekly:</strong>{" "}
                    <span className="font-extrabold text-[#66DAD5]">{tier.twiceWeekly}</span>
                  </p>
                  <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    <strong className="font-extrabold text-[#4E5062]">Daily:</strong>{" "}
                    <span className="font-extrabold text-[#66DAD5]">{tier.daily}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            These are estimates. Your actual North Vancouver strata cleaning cost depends on:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {pricingFactors.map((factor) => (
              <li key={factor} className="rounded-[10px] bg-[#f4f8ff] px-4 py-2.5 font-body text-[15px] text-[#5c6075]">{factor}</li>
            ))}
          </ul>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            We provide free consultations and custom quotes. Call{" "}
            <a href="tel:+16046716252" className="underline underline-offset-2">(604) 671-6252</a>{" "}
            or visit{" "}
            <a href="https://www.mintsanitary.com" className="underline underline-offset-2">www.mintsanitary.com</a>{" "}
            to request an estimate for your North Vancouver strata building. We will assess your property, understand your needs, and provide transparent pricing.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Related Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedServices.map((s) => (
              <div key={s.href} className="rounded-[14px] bg-[#f4f8ff] p-6">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">{s.title}</h3>
                <a href={s.href} className="mt-5 inline-block w-fit border-b border-[#66DAD5] font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#4E5062]">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
