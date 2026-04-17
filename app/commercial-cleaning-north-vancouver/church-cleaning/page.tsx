import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Church Cleaning Services in North Vancouver | Mint Sanitary",
  description:
    "Professional church cleaning in North Vancouver. Eco-friendly, background-checked staff. Available 7 days/week. 10% off first clean with MINT25.",
};

const includedAreas = [
  {
    title: "Sanctuary and Worship Areas",
    items: [
      "Vacuum carpets and rugs thoroughly",
      "Dust pews, railings, and wooden surfaces",
      "Polish wood to restore shine",
      "Handle altars and religious symbols with reverence",
      "Clean or sanitize communion items (per your preferences)",
      "Dust lighting fixtures and trim",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Deep disinfection of all surfaces",
      "Tile and grout cleaning",
      "Toilet and urinal sanitation",
      "Drain treatment to eliminate odors",
      "Supply restocking (soap, paper products, air freshener)",
      "Floor stripping and waxing (as needed)",
    ],
  },
  {
    title: "Fellowship Halls and Common Areas",
    items: [
      "Floor care (vacuuming, mopping, or waxing)",
      "Table and chair sanitizing",
      "Trash and recycling management",
      "Wall spot cleaning",
    ],
  },
  {
    title: "Nurseries and Children's Rooms",
    items: [
      "Non-toxic, eco-friendly sanitizing safe for infants and toddlers",
      "Crib and changing table disinfection",
      "Toy and equipment cleaning",
      "Allergen reduction",
    ],
  },
  {
    title: "Kitchens and Food Service",
    items: [
      "Appliance cleaning (inside and out)",
      "Countertop and backsplash sanitizing",
      "Floor and baseboard care",
      "Food prep area compliance with local health standards",
    ],
  },
  {
    title: "Administrative Offices and Storage",
    items: [
      "Dusting and surface cleaning",
      "Trash removal and recycling",
      "Vacuuming and mopping",
      "Organization and tidying (as requested)",
    ],
  },
  {
    title: "Specialized Services",
    items: [
      "Electrostatic spraying for virus protection",
      "Deep carpet extraction",
      "Pressure washing (exterior areas)",
      "Post-event cleanup after weddings, funerals, or gatherings",
      "Seasonal deep cleaning",
    ],
  },
];

const comparisonFactors = [
  { factor: "Consistency", volunteer: "Irregular, depends on availability", professional: "Scheduled, reliable, same quality" },
  { factor: "Time Investment", volunteer: "20 to 40+ hours monthly", professional: "2 to 4 hours per session" },
  { factor: "Expertise", volunteer: "General housekeeping", professional: "Specialized in place of worship cleaning" },
  { factor: "Equipment", volunteer: "Basic supplies", professional: "Professional-grade tools and disinfectants" },
  { factor: "Burnout Risk", volunteer: "High (ongoing commitment)", professional: "Zero (paid professionals)" },
  { factor: "Health & Safety", volunteer: "Variable", professional: "Certified, trained, insured" },
];

const processSteps = [
  { title: "Consultation and Walkthrough", body: "We visit your facility for a free consultation. We assess square footage, traffic patterns, special areas, and your cleaning priorities. No obligation." },
  { title: "Customized Cleaning Plan", body: "We develop a plan tailored to your congregation. Weekly? Biweekly? Monthly? We fit your budget and schedule. We can clean early mornings, late evenings, or weekday slots to avoid disrupting services." },
  { title: "Eco-Friendly Preparation", body: "We use green, non-toxic products safe for children, elderly members, and those with sensitivities. Your sanctuary stays sacred and clean without harsh chemicals." },
  { title: "Professional Execution", body: "Our bonded, insured team arrives on schedule with all equipment. We work efficiently and respectfully." },
  { title: "Final Inspection", body: "We walk through with you to confirm satisfaction. We address any concerns immediately." },
  { title: "Ongoing Communication", body: "We stay in touch. Scheduling changes? Special events coming up? One call handles it." },
];

const whyChooseItems = [
  { title: "Flexibility and Availability", body: "We work 7 days a week, including early mornings and evenings. Your Sunday service will not be disrupted. We schedule around midweek programs, special events, and holidays." },
  { title: "Eco-Friendly Commitment", body: "We use green, non-toxic products. Your congregation members breathe better. Children are safer. The environment benefits." },
  { title: "Local North Vancouver Expertise", body: "We know our community. We have served places of worship in Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We understand North Vancouver climate, water quality, and facility types." },
  { title: "Background-Checked, Professional Staff", body: "Every team member is bonded, insured, and background-checked. They are trained in handling sacred spaces with respect and care." },
  { title: "Transparent Pricing", body: "No hidden fees. We provide free estimates and fixed pricing. Ask about our 10% discount on your first clean with code MINT25." },
  { title: "Proven Track Record", body: "We have built our reputation on reliability and quality work. References available upon request." },
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

const pricingTiers = [
  { title: "Hourly Rates", range: "$25 to $75/hour" },
  { title: "Small Facility Monthly", range: "$200 to $400" },
  { title: "Medium Facility Monthly", range: "$400 to $800" },
  { title: "Large Facility Monthly", range: "$800 to $1,500+" },
];

const faqItems = [
  { question: "How often should a church in North Vancouver schedule cleaning?", answer: "Most churches in North Vancouver benefit from weekly or biweekly professional cleaning. If your congregation meets multiple times weekly or hosts frequent events, consider twice-weekly service. We customize schedules to match your usage and budget." },
  { question: "Are eco-friendly products safe for children in North Vancouver churches?", answer: "Absolutely. Our eco-friendly, non-toxic products are specifically designed for spaces with children. Churches in North Vancouver with nurseries and Sunday schools trust our green cleaning approach. Products are EPA-approved and safe for sensitive skin and respiratory systems." },
  { question: "Can you clean around scheduled events in North Vancouver?", answer: "Yes. We are flexible with scheduling for North Vancouver churches. We can clean before Sunday services, after midweek programs, or around special events like weddings and funerals. Just let us know your calendar." },
  { question: "What makes professional church cleaning in North Vancouver different from standard office cleaning?", answer: "Professional church cleaning in North Vancouver respects sacred spaces. We understand proper handling of altars, religious symbols, and delicate furnishings. Our team receives training in place of worship sensitivity. Standard office cleaning does not consider these unique needs." },
  { question: "How do you handle allergens in North Vancouver church facilities?", answer: "We use HEPA filtration vacuums and electrostatic spraying to reduce allergens in North Vancouver churches. We pay special attention to nurseries, carpets, and upholstered pews. If congregation members have specific sensitivities, we customize our approach." },
  { question: "Can Mint Sanitary handle post-event cleanup for funerals and weddings in North Vancouver?", answer: "Definitely. We have handled countless post-event cleanups for North Vancouver churches. Whether it is a reception, wedding ceremony, or funeral gathering, we restore your facility to pristine condition quickly and respectfully." },
  { question: "How do you protect religious items and artwork during church cleaning in North Vancouver?", answer: "Our team is trained to handle religious items, altar furnishings, and artwork with care. We ask questions upfront about what is sacred or delicate. We use soft cloths, appropriate products, and careful techniques. Your space receives the reverence it deserves." },
  { question: "What is your availability for emergency cleaning in North Vancouver churches?", answer: "We offer 7-day-a-week service and can often accommodate urgent requests. Call us at (604) 671-6252 if a North Vancouver church needs same-day or emergency cleaning after unexpected damage or illness." },
  { question: "Do you offer customized cleaning plans for specific North Vancouver denominational requirements?", answer: "Yes. Different traditions have different preferences. We work with pastors, facility managers, and congregations in North Vancouver to create plans that align with your specific needs and values. Nothing is one-size-fits-all." },
  { question: "How much can a North Vancouver church save by switching to professional cleaning?", answer: "Most North Vancouver churches save money and countless volunteer hours. Volunteer cleaning often costs more in hidden labor and materials. Professional service is typically $300 to $800 monthly and replaces 20 to 40+ volunteer hours. Plus, your space looks and feels better." },
];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/commercial-cleaning-north-vancouver/" },
  { title: "Office Cleaning", href: "/commercial-cleaning-north-vancouver/office-cleaning/" },
  { title: "School Cleaning", href: "/commercial-cleaning-north-vancouver/school-cleaning/" },
];

export default function ChurchCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Church Cleaning in North Vancouver"
      heroImage="/church-cleaning-sanctuary-north-vancouver.jpg"
      heroIntro="Your congregation deserves a clean, welcoming sanctuary. At Mint Sanitary, we specialize in professional church cleaning in North Vancouver. We serve places of worship across the community with respect, expertise, and care."
      faqItems={faqItems}
      ctaHeading="Ready to Refresh Your North Vancouver Church?"
      ctaBody="Contact Mint Sanitary today for a free facility walkthrough and estimate. Phone: (604) 671-6252. First clean discount: 10% off with code MINT25. We work around your schedule. Available 7 days a week."
    >
      {/* ── Image + Text Intro ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/church-cleaning-professionals-north-vancouver.jpg"
                alt="Professional church cleaning in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Professional Church Cleaning in North Vancouver?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Church cleaning in North Vancouver goes far beyond standard commercial cleaning. It is specialized work that respects the sacred nature of religious spaces while maintaining the highest hygiene standards.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Religious facilities, including churches, mosques, temples, and synagogues, have unique cleaning needs. They host multiple gatherings each week, feature delicate religious items, and require careful handling of symbolic elements. A professional church sanitizing North Vancouver service understands these nuances.
            </p>
            <div>
              <p className="font-body text-[15px] font-extrabold leading-[1.7] text-[#4E5062]">
                What does professional cleaning cover?
              </p>
              <ul className="mt-3 space-y-1.5">
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; Sanctuary and worship areas: pews, altar areas, carpets, polished wood</li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; Bathrooms: deep disinfection and grout cleaning</li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; Fellowship halls and event spaces</li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; Nurseries and children&apos;s rooms (with non-toxic products)</li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; Kitchens and food prep areas</li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; Administrative offices and storage</li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; Entryways and foyers</li>
              </ul>
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
            Why Church Cleaning Matters in North Vancouver
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                A clean facility is not just nice to have. It is essential.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                High-traffic worship spaces see rapid buildup of bacteria, viruses, and allergens. Shared seating, bathrooms, and communal areas create health risks, especially during cold and flu season. Parents trust that nurseries are sanitized. Elderly congregants need safe, accessible spaces.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Beyond health, cleanliness sends a message. A spotless sanctuary tells your congregation you value their experience. It creates a welcoming environment for visitors. It reflects the care you invest in community.
              </p>
            </div>
            <div>
              <p className="font-body text-[15px] font-extrabold leading-[1.7] text-white">
                Professional church cleaning in North Vancouver also:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="rounded-[10px] bg-white/10 px-4 py-2 font-body text-[15px] leading-[1.7] text-white/80">Preserves building materials and religious furnishings long-term</li>
                <li className="rounded-[10px] bg-white/10 px-4 py-2 font-body text-[15px] leading-[1.7] text-white/80">Reduces volunteer burnout from endless cleaning tasks</li>
                <li className="rounded-[10px] bg-white/10 px-4 py-2 font-body text-[15px] leading-[1.7] text-white/80">Maintains safety compliance for children&apos;s areas</li>
                <li className="rounded-[10px] bg-white/10 px-4 py-2 font-body text-[15px] leading-[1.7] text-white/80">Ensures your facility is ready for weddings, funerals, and holiday celebrations</li>
                <li className="rounded-[10px] bg-white/10 px-4 py-2 font-body text-[15px] leading-[1.7] text-white/80">Frees volunteers to focus on ministry instead of mopping</li>
              </ul>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Most volunteer cleaning committees spend 20 to 40 hours monthly just trying to keep up. Professional teams complete the same work in 2 to 4 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What&apos;s Included in Church Cleaning Services
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            When you hire Mint Sanitary for religious facility cleaning in North Vancouver, here is what you receive:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedAreas.map((area) => (
              <div key={area.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">{area.title}</h3>
                <ul className="mt-3 space-y-1">
                  {area.items.map((item) => (
                    <li key={item} className="font-body text-[15px] leading-[1.7] text-[#5c6075]">&bull; {item}</li>
                  ))}
                </ul>
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
            Professional Cleaning vs. Volunteer Cleaning
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Many congregations ask: &ldquo;Can our volunteers handle this?&rdquo; Volunteers are valuable. But professional church cleaning in North Vancouver offers advantages that relieve pressure on community members:
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comparisonFactors.map((f) => (
              <div key={f.factor} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{f.factor}</h3>
                <div className="mt-3 space-y-2">
                  <p className="font-body text-[14px] leading-[1.7] text-white/60">
                    <span className="text-[12px] font-bold uppercase tracking-wide">Volunteers:</span>{" "}
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
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Volunteers can focus on what they do best: ministry, community, fellowship. Leave the cleaning to professionals.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Our Church Cleaning Process
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We have refined our approach to work seamlessly with busy religious schedules.
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
        heading="Why Choose Mint Sanitary for Church Cleaning"
        intro="We are not just another cleaning company. We understand faith communities."
        image="/church-cleaning-sanctuary-north-vancouver.jpg"
        imageAlt="Professional church cleaning sanctuary in North Vancouver"
        items={whyChooseItems}
        ctaHref="/contact"
        ctaLabel="Get a Free Estimate"
      />

      <section
        className="relative z-10 bg-[#6191e9] bg-fixed bg-cover bg-center px-4 py-16 sm:px-8 md:px-[60px]"
        style={{ backgroundImage: "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            A few years ago, we worked with a growing congregation in North Vancouver that had outgrown its volunteer cleaning system. The pastor told us their volunteers were exhausted. They would spend Sunday afternoons cleaning instead of resting or spending time with families. After our first month of weekly service, the pastor pulled me aside. &ldquo;Our volunteers are happier,&rdquo; he said. &ldquo;The space looks better than it ever has. And people have mentioned how clean and welcoming it feels.&rdquo; That is what professional church cleaning in North Vancouver does. It gives communities back their time and their peace of mind.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Pricing for Church Cleaning Services
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Costs vary based on facility size, condition, and cleaning frequency.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">{tier.title}</h3>
                <p className="mt-2 font-body text-[20px] font-extrabold text-[#66DAD5]">{tier.range}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-3">
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We offer discounts for longer-term contracts and regular scheduling.
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              <strong className="font-extrabold text-[#4E5062]">First Clean Special: 10% Off</strong> &mdash; New clients save 10% on their first service. Use code MINT25 when booking.
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We will provide a free, detailed estimate after our facility walkthrough. No pressure. No obligation.
            </p>
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
              Church Cleaning Service Areas
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We serve North Vancouver neighborhoods including:
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                We also serve West Vancouver, Vancouver, Burnaby, and the greater Vancouver area.{" "}
                <a href="/contact" className="text-white underline underline-offset-2">Call for availability</a>{" "}
                in your specific location.
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
