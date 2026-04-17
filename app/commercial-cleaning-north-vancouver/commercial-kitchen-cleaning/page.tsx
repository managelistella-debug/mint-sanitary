import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title:
    "Commercial Kitchen Cleaning North Vancouver | Professional & NFPA 96 Compliant",
  description:
    "Professional commercial kitchen cleaning in North Vancouver. NFPA 96-compliant, food-safe products. Same-day available. Call Mint Sanitary today.",
};

const includedItems = [
  {
    title: "Hood & Exhaust System Cleaning",
    body: "Your exhaust hood is a grease magnet. Regulation NFPA 96 requires hood cleaning every 1 to 3 months depending on volume. We remove grease, soot, and buildup from the hood face, ducts, and dampers. Every clean comes with NFPA 96-compliant documentation that fire inspectors expect to see.",
  },
  {
    title: "Grease Trap & Drain Cleaning",
    body: "Grease traps are environmental hazards and code violations waiting to happen. We clean and flush them quarterly or as needed, preventing backups that shut down kitchens overnight. Your drains run clear, your liability drops, your pipes last longer.",
  },
  {
    title: "Equipment Degreasing",
    body: "Ovens, fryers, grills, range tops, and flat-top cookers get tackled systematically. We use food-safe degreasing products that cut through years of buildup without leaving residue. Your equipment runs hotter, cooler, and more efficiently.",
  },
  {
    title: "Surface Sanitization",
    body: "Every counter, wall, and backsplash gets sanitized with eco-friendly, food-safe products. No harsh chemicals near your food. No toxic fumes for your staff.",
  },
  {
    title: "Floor & Wall Cleaning",
    body: "Grime and grease coat your floors and walls. We deep clean them, removing buildup that standard mopping misses. Slip hazards disappear. Your kitchen looks and feels hygienic.",
  },
  {
    title: "Ceiling & Light Fixture Cleaning",
    body: "Grease and dust accumulate overhead. We clean ceiling tiles, light fixtures, and ventilation components that often get overlooked.",
  },
];

const whoNeedsItems = [
  "Restaurants and cafes",
  "Catering companies",
  "Hotels and resorts",
  "Food trucks",
  "Institutional kitchens (schools, hospitals, corporate cafeterias)",
  "Takeout and delivery-only kitchens",
];

const processSteps = [
  {
    title: "Pre-Assessment & Custom Plan",
    body: "We walk your kitchen, identify grease buildup, check your equipment, and assess traffic patterns. High-volume fryer area? That needs more frequent attention. Small takeout counter? Different schedule. We create a cleaning plan that matches your operation.",
  },
  {
    title: "After-Hours Scheduling",
    body: "Your kitchen can\u2019t sit idle during service. We schedule early morning (before you open) or late evening (after closing). We\u2019re available 7 days a week to fit your schedule. Weekends, holidays, whenever you need us. Same-day or next-day booking for pre-inspection emergency cleans.",
  },
  {
    title: "Deep Cleaning Execution",
    body: "Our team works systematically from top to bottom: hood first, then equipment, then walls and floors. We use eco-friendly, food-safe products that cut grease without leaving chemical residue. Your staff can prep food the same day.",
  },
  {
    title: "Final Inspection & Documentation",
    body: "We inspect every cleaned surface, take photos, and give you a completion report. You have proof of compliance. File it for your records.",
  },
];

const whyChooseItems = [
  {
    title: "7-Day-a-Week Availability",
    body: "Your kitchen doesn\u2019t close on weekends. Neither do we. Early morning before service, late night after closing. We\u2019re here.",
  },
  {
    title: "Eco-Friendly & Food-Safe Products",
    body: "Harsh chemicals have no place in a food prep area. All our cleaning products are non-toxic, food-safe, and biodegradable. Your staff breathes easier. Your food stays uncontaminated.",
  },
  {
    title: "NFPA 96-Compliant Hood Cleaning",
    body: "We\u2019re certified in NFPA 96 standards. Your hood cleaning documentation meets fire inspector requirements, every time.",
  },
  {
    title: "Vancouver Coastal Health Knowledge",
    body: "We understand North Vancouver\u2019s health inspection standards. We clean to pass your inspections and maintain compliance long-term.",
  },
  {
    title: "Free Estimates & Transparent Pricing",
    body: "No surprises. No hidden fees. We quote the work, you approve it, we execute it.",
  },
  {
    title: "10% Off Your First Clean",
    body: "New clients get 10% off with code MINT25.",
  },
  {
    title: "Local North Shore Expertise",
    body: "We\u2019ve cleaned kitchens in Lower Lonsdale, Lynn Valley, Edgemont Village, and across North Vancouver. We know the restaurants. We know the inspectors. We know what works.",
  },
  {
    title: "Rapid Response for Pre-Inspection Cleans",
    body: "Health inspector visiting next week? We\u2019ll get you inspection-ready same-day if needed. No stress.",
  },
];

const pricingTiers = [
  {
    title: "One-Time Deep Clean",
    range: "From $600",
    body: "Perfect if you need emergency pre-inspection cleaning or a one-off reset. Prices start at $600 for smaller kitchens, scaling up for larger operations.",
  },
  {
    title: "Quarterly Service Plans",
    range: "15% off regular pricing",
    body: "Most restaurants benefit from quarterly deep cleans (every 3 months). Service plan clients receive 15% off regular pricing and priority scheduling.",
  },
  {
    title: "Monthly Maintenance Cleans",
    range: "Custom pricing",
    body: "High-volume kitchens get monthly service. Maintenance cleans cost less than deep cleans because less buildup has accumulated.",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const relatedServices = [
  {
    title: "Commercial Cleaning",
    href: "/commercial-cleaning-north-vancouver/",
    label: "Commercial cleaning in North Vancouver",
  },
  {
    title: "Office Cleaning",
    href: "/commercial-cleaning-north-vancouver/office-cleaning/",
    label: "Office cleaning in North Vancouver",
  },
  {
    title: "Post-Construction Cleaning",
    href: "/cleaning-services-north-vancouver/post-construction-cleaning/",
    label: "Post-construction cleaning North Vancouver",
  },
];

const faqItems = [
  {
    question:
      "How often should I have my commercial kitchen professionally cleaned in North Vancouver?",
    answer:
      "Most restaurants benefit from quarterly (every 3 months) deep cleans. However, NFPA 96 requires hood cleaning every 1 to 3 months depending on your cooking volume. High-volume kitchens in North Vancouver may need monthly service. We\u2019ll assess your operation and recommend a schedule during your free estimate.",
  },
  {
    question:
      "What is NFPA 96 and why does my restaurant kitchen cleaning in North Vancouver need to comply?",
    answer:
      "NFPA 96 is the National Fire Protection Association standard for commercial kitchen exhaust systems. It sets cleaning frequency to prevent grease fires. Inspectors check compliance. Insurance companies require it. Non-compliance can mean fines, closure orders, or denied insurance claims. All our hood cleaning in North Vancouver meets NFPA 96 standards with documentation included.",
  },
  {
    question:
      "Can I do commercial kitchen cleaning myself in North Vancouver instead of hiring professionals?",
    answer:
      "Staff can handle daily spot cleaning. But grease buildup inside ducts, behind equipment, and in drain traps requires professional equipment and expertise. Missed spots create fire hazards and health violations. Inspectors expect documentation from a certified service. DIY cleaning in North Vancouver leaves your business exposed.",
  },
  {
    question:
      "What products do you use for commercial kitchen cleaning in North Vancouver?",
    answer:
      "We use eco-friendly, food-safe, non-toxic products. Nothing harsh. Nothing that leaves chemical residue near food prep surfaces. All products meet food safety standards. Your staff and customers stay safe.",
  },
  {
    question:
      "How long does a professional commercial kitchen cleaning take in North Vancouver?",
    answer:
      "A small kitchen takes 3 to 4 hours. A full-service restaurant with multiple hood systems, grease traps, and equipment might take 6 to 8 hours. We schedule after hours (early morning or late evening) so your kitchen doesn\u2019t lose service time.",
  },
  {
    question:
      "Can you do an emergency commercial kitchen clean before my health inspection in North Vancouver?",
    answer:
      "Yes. We offer same-day or next-day service for pre-inspection cleaning. If your inspection is coming up and your kitchen needs attention, call us immediately at (604) 671-6252. We prioritize these requests.",
  },
  {
    question:
      "Will commercial kitchen cleaning in North Vancouver disrupt my business?",
    answer:
      "No. We schedule early morning (before you open) or late evening (after you close). Your kitchen is clean and ready when your staff arrives. Your operation continues uninterrupted.",
  },
  {
    question:
      "Do you provide documentation for health inspections in North Vancouver?",
    answer:
      "Yes. Every clean comes with a detailed report and photos. Inspectors in North Vancouver know to ask for cleaning documentation. You\u2019ll have proof your hood, equipment, and surfaces meet code.",
  },
  {
    question:
      "What is the difference between regular commercial cleaning and commercial kitchen cleaning in North Vancouver?",
    answer:
      "Regular commercial cleaning focuses on floors, desks, and general office areas. Commercial kitchen cleaning targets food safety and fire safety. Hood systems, grease traps, equipment degreasing, and food-safe sanitization receive specialized attention. The standards are much stricter.",
  },
  {
    question:
      "How much does commercial kitchen cleaning cost in North Vancouver?",
    answer:
      "Pricing depends on your kitchen size, equipment, and cleaning frequency. Small takeout kitchens start around $600. Full-service restaurants with multiple hoods and extensive equipment may range from $1,500 to $3,500 or more. We offer free estimates with no obligation. Call (604) 671-6252 for a custom quote for your North Vancouver kitchen.",
  },
];

export default function CommercialKitchenCleaningPage() {
  return (
    <ServicePageLayout
      title="Commercial Kitchen Cleaning in North Vancouver"
      heroImage="/commercial-kitchen-cleaning-north-vancouver.jpg"
      heroIntro="Your kitchen is the heart of your food service business. It&apos;s also one of the most heavily inspected and regulated spaces you&apos;ll operate. When Vancouver Coastal Health inspectors walk in, or when fire safety auditors check your hood systems, you need to know every surface meets code."
      faqItems={faqItems}
      ctaHeading="Call Mint Sanitary for Commercial Kitchen Cleaning in North Vancouver"
      ctaBody="Call us today at (604) 671-6252 for a free estimate. New clients: Use code MINT25 for 10% off your first clean. We&apos;re available 7 days a week, same-day or next-day scheduling."
    >
      {/* ── Image + Text Intro ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/commercial-kitchen-cleaning-north-vancouver.jpg"
                alt="Commercial kitchen cleaning in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Professional Kitchen Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Commercial Kitchen Cleaning in North Vancouver?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                That&apos;s where professional commercial kitchen cleaning in North
                Vancouver comes in. It&apos;s not about making things look nice
                (though they will). It&apos;s about health compliance, fire safety,
                and protecting your business from costly violations. Commercial
                kitchen cleaning goes far beyond wiping down counters. It&apos;s a
                deep, strategic clean targeting every surface that touches or
                surrounds food preparation. We address every critical area:
                grease-caked hoods and exhaust systems, hard-to-reach corners behind
                equipment, and every surface in between.
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
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Your daily staff might handle light cleaning between service.
              Weekly deep cleans by your team catch obvious spills and splatters.
              But professional commercial kitchen cleaning North Vancouver
              addresses the hidden grease buildup, the bacteria colonies living
              inside your drain traps, and the fire hazards accumulating in your
              hood system.
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Most kitchens benefit from a professional deep clean every 3 to 6
              months, though high-volume restaurants may need quarterly service.
              Your health inspector and your insurance company will appreciate the
              documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who Needs It ── */}
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
            Who Needs Restaurant Kitchen Cleaning in North Vancouver?
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Anyone running a food service operation:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whoNeedsItems.map((item) => (
              <li
                key={item}
                className="rounded-[14px] bg-white/10 px-5 py-3 font-body text-[15px] text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What&apos;s Included in Commercial Kitchen Cleaning Services
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            When Mint Sanitary schedules a commercial kitchen cleaning appointment
            in North Vancouver, here&apos;s what happens:
          </p>
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

      {/* ── Health Inspection & Fire Safety ── */}
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
            Health Inspection Compliance &amp; Fire Safety
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Vancouver Coastal Health conducts over 16,000 food facility
            inspections annually across the North Shore and Lower Mainland.
            Serious violations&mdash;like improper hood cleaning or grease-lined
            exhaust systems&mdash;result in fines, operational restrictions, or
            closure orders.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                NFPA 96 Fire Safety Standards
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Grease fires are common in commercial kitchens. The National Fire
                Protection Association (NFPA 96) sets cleaning frequency based on
                kitchen volume. Our hood cleaning in North Vancouver follows these
                exact standards. We document every clean, giving you compliance
                proof for your fire safety audits and insurance provider.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Vancouver Coastal Health Food Safety Act
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                BC&apos;s Food Safety Act mandates clean equipment, sanitary
                surfaces, and grease control. Non-compliance means violations on
                your health inspection report. Customers see these online. One bad
                report can damage your reputation for months. We know these
                standards because we&apos;ve worked with kitchens across North
                Vancouver&mdash;Lower Lonsdale cafes, Deep Cove catering
                operations, and kitchens throughout the area.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5 md:col-span-2">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Documentation You Can Trust
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Every service includes photographic evidence of the work completed.
                You get a detailed report showing what was cleaned, when, and to
                what standard. Save it. Your inspector will ask for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              The Professional Kitchen Cleaning Process
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

      {/* ── Why Choose Mint Sanitary ── */}
      <AccordionWithImage
        heading="Why Choose Mint Sanitary"
        items={whyChooseItems}
        image="/eco-friendly-cleaning-products-north-vancouver.jpg"
        imageAlt="Eco-friendly commercial kitchen cleaning products"
      />

      {/* ── Pricing ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Pricing &amp; Quote Process
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Commercial kitchen cleaning pricing depends on your kitchen size,
            equipment volume, and cleaning frequency. A small takeout counter
            costs less than a full-service restaurant with multiple hood systems
            and grease traps.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {tier.title}
                </h3>
                <p className="mt-2 font-body text-[20px] font-extrabold text-[#66DAD5]">
                  {tier.range}
                </p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {tier.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            To get an exact quote for your North Vancouver kitchen, call us at{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            or visit our website. We&apos;ll ask about your kitchen size,
            equipment, and current cleaning frequency, then send a custom
            estimate.
          </p>
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
              Service Areas in North Vancouver &amp; Beyond
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We focus on North Shore businesses:
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
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Related Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedServices.map((s) => (
              <div
                key={s.href}
                className="rounded-[14px] bg-[#f4f8ff] p-6"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {s.title}
                </h3>
                <a
                  href={s.href}
                  className="mt-5 inline-block w-fit border-b border-[#66DAD5] font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#4E5062]"
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
