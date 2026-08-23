import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/upholstery-cleaning-original
// so the CMS version at /north-vancouver/upholstery-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Upholstery Cleaning in North Vancouver | Mint Sanitary",
  description:
    "North Vancouver upholstery cleaning for sofas, chairs, and more. Eco-friendly products, free estimates, and a 24-hour satisfaction guarantee.",
  robots: { index: false, follow: false },
};

const furnitureTypes = [
  {
    title: "Sofas & Sectionals",
    image: "/upholstery-cleaning-north-vancouver-sofa.jpg",
    description:
      "North Vancouver's family-sized sectionals get a full clean, cushions, frames, arms, backs, and base panels included. We deep-clean cushion seams and crevices and pre-treat body oils and other high-contact areas before the main clean.",
  },
  {
    title: "Armchairs & Recliners",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
    description:
      "Armrests and headrests in North Vancouver living rooms get the same full clean as the rest of the chair, and we work carefully around recliner mechanisms. We match the method to the fabric and spot-treat high-contact zones.",
  },
  {
    title: "Dining & Office Chairs",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
    description:
      "From Edgemont Village dining rooms to Lower Lonsdale home offices, seat and back panels get a thorough clean, with dedicated treatment for food and drink stains. The process is safe for fabric, vinyl, and mixed materials.",
  },
  {
    title: "Ottomans, Headboards & More",
    image: "/mint-sanitary-team-north-vancouver.jpg",
    description:
      "We clean ottomans and footstools on all sides, treat headboards with fabric-safe methods, and clean cushions and throw pillows individually. North Vancouver's outdoor patio fabric furniture, including pieces near Deep Cove and Dollarton, is also welcome.",
  },
];

const cleaningMethods = [
  {
    title: "Steam and Hot Water Extraction",
    body: "This is the most thorough option for durable fabrics like cotton, polyester, and microfiber, and it is the method we reach for most often in North Vancouver homes with pets or kids. Hot water and a cleaning solution are injected deep into the fabric, then extracted along with dirt, allergens, and bacteria.",
  },
  {
    title: "Dry Cleaning",
    body: "Delicate fabrics like silk, velvet, and vintage upholstery need a low-moisture approach. Many North Vancouver clients with heirloom or designer pieces choose this method, since specialized solvents clean without saturating the material. Drying is faster, with no risk of water damage or shrinkage.",
  },
  {
    title: "Foam Cleaning",
    body: "Foam cleaning sits in the middle and works well for lightly soiled furniture or fabric that is sensitive to moisture. An encapsulating foam traps dirt particles, which are then vacuumed away.",
  },
  {
    title: "Inspection-Based Selection",
    body: "There is no single method that works for every fabric in every North Vancouver home. Before any cleaning starts, we check the fabric type, manufacturer care codes, existing damage, and stain type, then recommend the method that fits your piece.",
  },
];

const processSteps = [
  { title: "Free fabric assessment", body: "We inspect fabric type, care codes, stain types, and condition at your North Vancouver home before recommending a cleaning method." },
  { title: "Book at your convenience", body: "North Vancouver appointments run seven days a week, including evenings and weekends. All cleaning happens on-site, so there is no need to move or drop off furniture." },
  { title: "Pre-vacuuming and pre-treatment", body: "Commercial-grade HEPA vacuuming lifts embedded pet hair, crumbs, and debris. We then pre-treat stains and high-traffic areas." },
  { title: "Deep fabric cleaning", body: "We apply the method matched to your fabric: steam extraction, dry cleaning, or foam cleaning." },
  { title: "Odor neutralization and extraction", body: "Enzyme-based treatments break down pet odors, smoke, food smells, and mustiness at the molecular level instead of masking them. All solution and loosened dirt is fully extracted." },
  { title: "Post-clean inspection", body: "We walk through the results with you, check every piece, share care tips, and stand behind the work with our North Vancouver satisfaction guarantee." },
];

const whyChoose = [
  { title: "Eco-friendly, fabric-safe products", body: "Non-toxic and biodegradable, matched to the fabric type, and safe around kids and pets in North Vancouver homes." },
  { title: "Seven-day availability", body: "Book North Vancouver appointments when they work for your schedule, including evenings and weekends." },
  { title: "Multiple cleaning methods", body: "Steam, dry, or foam cleaning selected based on the fabric, care code, and condition of each piece." },
  { title: "Transparent pricing", body: "A free on-site inspection and an honest quote before we start, with no hidden fees." },
  { title: "Satisfaction guarantee", body: "If any area does not meet expectations within 24 hours, we return to fix it." },
  { title: "First clean savings", body: "Use code MINT26 for 10% off your first North Vancouver clean." },
];

const pricingFactors = [
  "Size and type of furniture piece",
  "Fabric type and manufacturer care code",
  "Severity of stains and soiling",
  "Odor treatment requirements",
  "Number of pieces being cleaned",
];

const benefits = [
  { title: "Extends furniture lifespan", body: "Dirt and body oils break down fabric fibers over time. Regular cleaning slows down wear, fading, and thinning, which extends the life of your furniture." },
  { title: "Improves indoor air quality", body: "Upholstery also traps dust mites, pet dander, pollen, and other allergens, so a deep clean improves indoor air quality inside your North Vancouver home." },
  { title: "Restores appearance", body: "Colors brighten, textures soften, and pieces that seemed tired start to look new again." },
  { title: "Protects your investment", body: "Since quality furniture is expensive to replace, professional cleaning that adds years of use is often the smarter financial choice for North Vancouver families." },
  { title: "Pet and family safe results", body: "Enzyme-based treatments handle pet accidents at the source rather than covering up the smell, which keeps results safe for pets and family." },
  { title: "More life than expected", body: "Many North Vancouver clients are surprised at how much life is left in furniture they assumed needed replacing." },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Norgate",
  "Seymour Heights",
  "Dollarton",
  "Blueridge",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const faqItems = [
  {
    question: "What types of furniture do you clean in North Vancouver?",
    answer: "In North Vancouver, we clean sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor fabric furniture. If it has upholstery, our North Vancouver team can clean it.",
  },
  {
    question: "Can you remove pet stains and odors from upholstery in North Vancouver homes?",
    answer: "Yes. Enzyme-based treatments break down pet urine, vomit, and other organic stains at the molecular level in North Vancouver homes. Odors are neutralized at the source instead of being masked.",
  },
  {
    question: "How long does upholstery take to dry after cleaning in North Vancouver?",
    answer: "Steam cleaning takes about 4 to 8 hours, dry cleaning takes 2 to 4 hours, and leather dries in about 1 to 2 hours, even in North Vancouver's damper months. Fans and ventilation can speed this up, and we give you specific care instructions after the job.",
  },
  {
    question: "Is upholstery cleaning safe for delicate fabrics in North Vancouver?",
    answer: "Yes. We inspect every North Vancouver piece before cleaning and choose the safest method for that fabric. Delicate materials like silk, velvet, and vintage upholstery get dry cleaning, which avoids water damage.",
  },
  {
    question: "How often should upholstery be professionally cleaned in North Vancouver?",
    answer: "Most North Vancouver homes do well with a clean every 12 to 24 months. Homes with pets, kids, or allergy sufferers benefit from cleaning every 6 to 12 months, and high-traffic North Vancouver commercial furniture should be cleaned quarterly.",
  },
  {
    question: "Will cleaning remove all stains from my North Vancouver furniture?",
    answer: "Most stains on North Vancouver furniture come out fully or improve a great deal. Some, like permanent marker, bleach damage, or very old set-in stains, may not come out completely. We give an honest read on what to expect before we start.",
  },
  {
    question: "Do you clean leather furniture in North Vancouver?",
    answer: "Yes. Leather needs different products and techniques than fabric. Our North Vancouver team cleans, conditions, and protects leather to help prevent cracking, fading, and drying out.",
  },
  {
    question: "Can you clean upholstery on-site in North Vancouver, or do I need to bring furniture in?",
    answer: "All North Vancouver cleaning happens on-site at your home or business. There is no need to move furniture or drop it off anywhere.",
  },
  {
    question: "Are your cleaning products safe for kids and pets in North Vancouver homes?",
    answer: "Yes. We use non-toxic, eco-friendly products with no harsh chemicals and no strong fumes in every North Vancouver home we visit.",
  },
  {
    question: "How much does upholstery cleaning cost in North Vancouver?",
    answer: "Most individual pieces in North Vancouver run $100 to $200, depending on size, fabric, and condition. Sectionals and larger pieces may cost more. Request a free estimate at /rates, and use code MINT26 for 10% off your first North Vancouver clean.",
  },
];

export default function UpholsteryCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Upholstery Cleaning in North Vancouver"
      heroImage="/upholstery-cleaning-north-vancouver-sofa.jpg"
      heroSubtitle="Professional Sofa & Furniture Cleaning"
      heroIntro="Your sofa handles a lot over the years, from muddy paws after a Deep Cove hike to daily use in a busy Lynn Valley family room. Vacuuming only lifts surface dust. It cannot reach the oils, allergens, and bacteria that settle deep in the fibers. Mint Sanitary provides professional upholstery cleaning throughout North Vancouver, using eco-friendly, non-toxic products that are safe for kids, pets, and anyone with sensitivities. Use code MINT26 for 10% off your first clean."
      faqItems={faqItems}
      ctaHeading="Ready to Bring Your North Vancouver Furniture Back to Life?"
      ctaBody="Get a free, no-obligation quote at /rates, or call 236-688-3248 to book a time that works for you. Our North Vancouver team is background-checked, insured, and backed by a 24-hour satisfaction guarantee."
      ctaHref="/rates"
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            Every North Vancouver visit starts with a free on-site fabric
            assessment and comes backed by a 24-hour satisfaction guarantee.
            We are a North Vancouver based company with a 4.9 out of 5
            rating from more than 120 reviews. Our North Vancouver teams are
            background-checked, bonded, and insured, and we book
            appointments seven days a week, including evenings and
            weekends. North Vancouver households call us for sofas,
            sectionals, armchairs, recliners, dining chairs, office chairs,
            ottomans, headboards, cushions, and outdoor patio fabric
            furniture. Whether you live in a Lower Lonsdale condo or a
            larger home in Edgemont Village, if a piece has upholstery, our
            North Vancouver technicians can clean it.
          </p>
        </div>
      </section>

      {/* ── Furniture Types Image Card Grid (f4f8ff bg) ──────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Furniture Types We Clean in North Vancouver
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {furnitureTypes.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[20px] bg-white/[0.12] p-4">
                <img
                  src={item.image}
                  alt={`${item.title} in North Vancouver`}
                  className="h-[150px] w-full rounded-[14px] object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 font-display-reg text-[16px] uppercase tracking-[0.4px] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cleaning Methods (blue bg) ────────────────────────── */}
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
            Cleaning Methods for North Vancouver Fabrics
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            North Vancouver homes see a wide mix of fabrics, from durable
            family-room microfiber to delicate vintage pieces passed down
            through generations. We inspect each item before choosing a
            method, so your North Vancouver furniture gets the treatment it
            needs.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cleaningMethods.map((m) => (
              <div key={m.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{m.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps (white bg) ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our North Vancouver Upholstery Cleaning Process
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
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

      {/* ── Why Choose — Image + Accordion ────────────────── */}
      <AccordionWithImage
        heading="Why North Vancouver Chooses Mint Sanitary"
        intro="North Vancouver homes see a wide mix of fabrics, and our team matches the method to the piece every time."
        image="/eco-friendly-cleaning-products-north-vancouver.jpg"
        imageAlt="Eco-friendly upholstery cleaning products used in North Vancouver"
        items={whyChoose}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Professional vs DIY (white bg) ────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Professional Cleaning vs DIY in North Vancouver Homes
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Rental machines and store-bought sprays can help between deep
            cleans, but they have real limits. Consumer machines lack the
            suction power of commercial equipment, which leaves excess
            moisture behind in your North Vancouver home. That extra
            moisture can lead to mold, mildew, or lingering odor.
            Store-bought products can also discolor or damage certain
            fabrics, and the wrong product can void a furniture warranty.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary&apos;s professional cleaning uses HEPA-grade
            equipment with real extraction power, fabric-specific products
            chosen to avoid damage or discoloration, and North Vancouver
            technicians trained to read care codes and identify fiber
            types. Odors get neutralized at the molecular level, stains are
            fully removed or improved as much as possible, and
            professional-grade extraction leaves less moisture behind, so
            furniture dries faster.
          </p>
        </div>
      </section>

      {/* ── Pricing (f4f8ff bg) ───────────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What Upholstery Cleaning Costs in North Vancouver
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Most individual pieces cost $100 to $200, depending on the size
            of the furniture, the fabric type, and its condition.
            Sectionals and larger pieces may cost more. Multi-piece
            discounts are available when you book several items together.
          </p>
          <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Pricing Factors</h3>
          <ul className="mt-3 space-y-1.5">
            {pricingFactors.map((factor) => (
              <li key={factor} className="font-body text-[15px] leading-[1.7] text-white/80">
                &bull; {factor}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
            For a firm number for your North Vancouver home, request a free
            estimate at{" "}
            <a href="/rates" className="underline underline-offset-2">
              /rates
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Why It Matters + Drying Times (blue bg) ───────────── */}
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
            Why Regular Upholstery Cleaning Matters for North Vancouver Homes
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{b.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{b.body}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Drying Times for North Vancouver Upholstery</h3>
          <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Drying time depends on the method used. Steam cleaning
            typically takes 4 to 8 hours. Dry cleaning takes 2 to 4 hours.
            Leather dries fastest, usually in 1 to 2 hours. North
            Vancouver&apos;s damper months make fans and good ventilation
            especially useful for speeding up drying.
          </p>
        </div>
      </section>

      {/* ── Service Areas — Chips + Map ───────────────────── */}
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
              North Vancouver Neighbourhoods We Serve
            </h2>
            <p className="mx-auto mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary is based in North Vancouver and cleans
              upholstery throughout the district and city, including Lower
              Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont
              Village, Capilano, Norgate, Seymour Heights, Dollarton, and
              Blueridge. We also serve nearby West Vancouver, Vancouver,
              and Burnaby. If you live outside the North Shore, our general{" "}
              <a href="/services/upholstery-cleaning" className="underline underline-offset-2">
                upholstery cleaning
              </a>{" "}
              page covers the same service for the rest of Greater
              Vancouver.
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
            <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
              Upholstery cleaning is one part of caring for a North
              Vancouver home. Our{" "}
              <a href="/north-vancouver/house-cleaning" className="underline underline-offset-2">
                North Vancouver house cleaning
              </a>{" "}
              service covers the rest of the house, from kitchens to
              bathrooms. Fabric window treatments collect the same dust and
              allergens as upholstery, so many North Vancouver clients pair
              this service with{" "}
              <a href="/north-vancouver/drapes-curtains-cleaning" className="underline underline-offset-2">
                drapes and curtains cleaning
              </a>{" "}
              or add on{" "}
              <a href="/north-vancouver/carpet-cleaning" className="underline underline-offset-2">
                carpet cleaning
              </a>{" "}
              for a full refresh.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
