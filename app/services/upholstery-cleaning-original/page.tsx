import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/upholstery-cleaning-original
// so the CMS version at /services/upholstery-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Upholstery Cleaning in Vancouver | Mint Sanitary",
  description:
    "Professional upholstery cleaning for sofas, chairs, and more across Greater Vancouver. Eco-friendly products, free estimates, satisfaction guarantee.",
  robots: { index: false, follow: false },
};

const furnitureTypes = [
  {
    title: "Sofas & Sectionals",
    image: "/upholstery-cleaning-north-vancouver-sofa.jpg",
    description:
      "We clean full sectionals, cushions, and frames, including arms, backs, and base panels. Cushion seams and crevices get deep-cleaned, and we pre-treat body oils and other high-contact areas before the main clean.",
  },
  {
    title: "Armchairs & Recliners",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
    description:
      "Armrests and headrests get the same full clean as the rest of the chair, and we work carefully around recliner mechanisms. We match the method to the fabric and spot-treat the areas that see the most contact.",
  },
  {
    title: "Dining & Office Chairs",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
    description:
      "Seat and back panels are cleaned thoroughly, with dedicated treatment for food and drink stains. The process is safe for fabric, vinyl, and mixed materials, and every chair gets a post-clean inspection.",
  },
  {
    title: "Ottomans, Headboards & More",
    image: "/mint-sanitary-team-north-vancouver.jpg",
    description:
      "We clean ottomans and footstools on all sides, treat headboards with fabric-safe methods, and clean cushions and throw pillows individually. Outdoor patio fabric furniture is also welcome.",
  },
];

const methods = [
  {
    title: "Steam and Hot Water Extraction",
    body: "This is the most thorough option for durable fabrics like cotton, polyester, and microfiber. Hot water and a cleaning solution are injected deep into the fabric, then extracted along with dirt, allergens, and bacteria. It works well on heavily soiled pieces and in homes with pets or allergy sufferers.",
  },
  {
    title: "Dry Cleaning",
    body: "Delicate fabrics like silk, velvet, and vintage upholstery need a low-moisture approach. Specialized solvents and compounds clean without saturating the material, which means faster drying and no risk of water damage or shrinkage.",
  },
  {
    title: "Foam Cleaning",
    body: "Foam cleaning sits in the middle. An encapsulating foam is applied to trap dirt particles, then vacuumed away. It suits lightly soiled furniture and fabrics that are sensitive to moisture.",
  },
  {
    title: "Inspection-Based Selection",
    body: "There is no single method that works for every fabric. Before any cleaning starts, we check the fabric type, manufacturer care codes, existing damage, and stain type, then recommend the method that fits.",
  },
];

const processSteps = [
  { title: "Free fabric assessment", body: "We inspect fabric type, care codes, stain types, and overall condition before recommending a cleaning method." },
  { title: "Book at your convenience", body: "We work seven days a week, including evenings and weekends. All cleaning happens on-site, so there is no need to move or drop off furniture." },
  { title: "Pre-vacuuming and pre-treatment", body: "Commercial-grade HEPA vacuuming lifts embedded pet hair, crumbs, and debris. We then pre-treat stains and high-traffic areas." },
  { title: "Deep fabric cleaning", body: "We apply the method matched to your fabric: steam extraction, dry cleaning, or foam cleaning." },
  { title: "Odor neutralization and extraction", body: "Enzyme-based treatments break down pet odors, smoke, food smells, and mustiness at the molecular level instead of masking them. All solution and loosened dirt is fully extracted." },
  { title: "Post-clean inspection", body: "We walk through the results with you, check every piece, share care tips, and stand behind the work with our satisfaction guarantee." },
];

const whyChoose = [
  { title: "Eco-friendly, fabric-safe products", body: "Non-toxic and biodegradable, matched to the fabric type, and safe around kids and pets." },
  { title: "Seven-day availability", body: "Book cleaning when it works for your schedule, including evenings and weekends." },
  { title: "Multiple cleaning methods", body: "Steam, dry, or foam cleaning selected based on the fabric, care code, and condition of each piece." },
  { title: "Transparent pricing", body: "A free on-site inspection and an honest quote before we start, with no hidden fees." },
  { title: "Satisfaction guarantee", body: "If any area does not meet expectations within 24 hours, we come back and fix it." },
  { title: "First clean savings", body: "Use code MINT26 for 10% off your first clean." },
];

const faqItems = [
  {
    question: "What types of furniture can you clean?",
    answer: "We clean sofas, sectionals, armchairs, recliners, dining chairs, office chairs, ottomans, headboards, cushions, and outdoor fabric furniture. If it has upholstery, we can clean it.",
  },
  {
    question: "Can you remove pet stains and odors from upholstery?",
    answer: "Yes. Enzyme-based treatments break down pet urine, vomit, and other organic stains at the molecular level. Odors are neutralized at the source instead of being masked.",
  },
  {
    question: "How long does upholstery take to dry after cleaning?",
    answer: "Steam cleaning takes about 4 to 8 hours, dry cleaning takes 2 to 4 hours, and leather dries in about 1 to 2 hours. Fans and ventilation can speed this up, and we give you specific care instructions after the job.",
  },
  {
    question: "Is upholstery cleaning safe for delicate fabrics?",
    answer: "Yes. We inspect every piece before cleaning and choose the safest method for that fabric. Delicate materials like silk, velvet, and vintage upholstery get dry cleaning, which avoids water damage.",
  },
  {
    question: "How often should upholstery be professionally cleaned?",
    answer: "Most homes do well with a clean every 12 to 24 months. Homes with pets, kids, or allergy sufferers benefit from cleaning every 6 to 12 months. High-traffic commercial furniture should be cleaned quarterly.",
  },
  {
    question: "Will cleaning remove all stains?",
    answer: "Most stains come out fully or improve a great deal. Some, like permanent marker, bleach damage, or very old set-in stains, may not come out completely. We give an honest read on what to expect before we start.",
  },
  {
    question: "Do you clean leather furniture?",
    answer: "Yes. Leather needs different products and techniques than fabric. We clean, condition, and protect leather to help prevent cracking, fading, and drying out.",
  },
  {
    question: "Can you clean upholstery on-site, or do I need to bring furniture in?",
    answer: "All cleaning happens on-site at your home or business. There is no need to move furniture or drop it off anywhere.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer: "Yes. We use non-toxic, eco-friendly products with no harsh chemicals and no strong fumes.",
  },
  {
    question: "How much does upholstery cleaning cost?",
    answer: "Most individual pieces run $100 to $200, depending on size, fabric, and condition. Sectionals and larger pieces may cost more. Request a free estimate at /rates, and use code MINT26 for 10% off your first clean.",
  },
];

export default function ServicesUpholsteryCleaningPage() {
  return (
    <ServicePageLayout
      title="Upholstery Cleaning Services in Greater Vancouver"
      heroImage="/upholstery-cleaning-north-vancouver-sofa.jpg"
      heroSubtitle="Fabric-Safe Furniture Cleaning"
      heroIntro="Your sofa handles a lot. Pets, kids, coffee spills, and years of daily use all leave their mark. Vacuuming only lifts surface dust. It cannot reach the oils, allergens, and bacteria trapped deep in the fibers. Mint Sanitary offers professional upholstery cleaning across Greater Vancouver, using eco-friendly, non-toxic products that are safe for kids, pets, and anyone with sensitivities."
      faqItems={faqItems}
      ctaHeading="Ready to Bring Your Furniture Back to Life?"
      ctaBody="Get a free, no-obligation quote at /rates, or call us at 236-688-3248 to book a time that works for you. Our team is background-checked, insured, and backed by a 24-hour satisfaction guarantee."
      ctaHref="/rates"
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            Every visit starts with a free on-site fabric assessment and
            comes backed by a 24-hour satisfaction guarantee. Our teams are
            background-checked, bonded, and insured. We hold a 4.9 out of 5
            rating from more than 120 reviews, and we book appointments
            seven days a week, including evenings and weekends. We clean
            sofas, sectionals, armchairs, recliners, dining chairs, office
            chairs, ottomans, headboards, cushions, and outdoor patio
            fabric furniture. If a piece has upholstery, our technicians
            can clean it.
          </p>
        </div>
      </section>

      {/* ── Furniture Types Image Card Grid (f4f8ff bg) ──────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Furniture Types We Clean
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {furnitureTypes.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[20px] bg-white/[0.12] p-4">
                <img
                  src={item.image}
                  alt={item.title}
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
            Cleaning Methods Matched to Your Fabric
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Not every fabric responds the same way to cleaning. We inspect
            each piece before choosing a method, so your furniture gets the
            treatment it needs.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {methods.map((m) => (
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
              Our Upholstery Cleaning Process
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

      {/* ── Why Choose + Pricing (f4f8ff bg) ──────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Choose Mint Sanitary
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[14px] bg-white/[0.12] p-5">
            <h3 className="font-body text-[17px] font-extrabold text-white">What Upholstery Cleaning Costs</h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              Most individual pieces cost $100 to $200, depending on the
              size of the furniture, the fabric type, and its condition.
              Sectionals and larger pieces may cost more. Pricing also
              depends on the manufacturer care code, how severe the stains
              and soiling are, whether odor treatment is needed, and how
              many pieces you are booking. Multi-piece discounts are
              available when you book several items at once. For a firm
              number, request a free estimate at{" "}
              <a href="/rates" className="underline underline-offset-2">
                /rates
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Professional vs DIY (white bg) ────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Professional Cleaning vs DIY
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Rental machines and store-bought sprays can help between deep
            cleans, but they have real limits. Consumer machines lack the
            suction power of commercial equipment, which leaves excess
            moisture behind. That extra moisture can lead to mold, mildew,
            or lingering odor. Store-bought products can also discolor or
            damage certain fabrics, and using the wrong product can void a
            furniture warranty. DIY cleaning tends to stay on the surface
            and skips the pre-treatment and post-treatment steps that lift
            stubborn stains.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Professional cleaning uses HEPA-grade equipment with real
            extraction power, fabric-specific products chosen to avoid
            damage or discoloration, and technicians trained to read care
            codes and identify fiber types. Odors get neutralized at the
            molecular level, stains are fully removed or improved as much
            as possible, and professional-grade extraction leaves less
            moisture behind, so furniture dries faster.
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
            Why Regular Upholstery Cleaning Matters
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Dirt and body oils break down fabric fibers over time. Regular
            cleaning slows down wear, fading, and thinning, which extends
            the life of your furniture. Upholstery also traps dust mites,
            pet dander, pollen, and other allergens, so a deep clean
            improves indoor air quality, which matters for anyone in the
            home who deals with allergies. Cleaning also restores how
            furniture looks. Colors brighten, textures soften, and pieces
            that seemed tired start to look new again.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Drying Times</h3>
          <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Drying time depends on the method used. Steam cleaning
            typically takes 4 to 8 hours. Dry cleaning takes 2 to 4 hours.
            Leather dries fastest, usually in 1 to 2 hours. Fans and good
            ventilation can speed up drying in every case.
          </p>
        </div>
      </section>

      {/* ── Service Areas (white bg) ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Service Areas
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is based in North Vancouver and serves homes and
            businesses across the North Shore and Greater Vancouver,
            including West Vancouver, Vancouver, and Burnaby. If you are
            located in North Vancouver, visit our{" "}
            <a href="/north-vancouver/upholstery-cleaning" className="underline underline-offset-2">
              upholstery cleaning in North Vancouver
            </a>{" "}
            page for neighborhood-specific details. See our full list of
            coverage on the{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              service areas
            </a>{" "}
            page, or learn more about our{" "}
            <a href="/north-vancouver" className="underline underline-offset-2">
              North Vancouver
            </a>{" "}
            location.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Upholstery cleaning is one part of a larger home. If you need
            help with the rest of the house, our{" "}
            <a href="/services/house-cleaning" className="underline underline-offset-2">
              house cleaning
            </a>{" "}
            service covers everything from kitchens to bathrooms. Fabric
            window treatments collect the same dust and allergens as
            upholstery, so many clients pair this service with{" "}
            <a href="/services/drapes-curtains-cleaning" className="underline underline-offset-2">
              drapes and curtains cleaning
            </a>
            .
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
