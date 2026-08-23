import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/restaurant-cleaning-original
// so the CMS version at /services/restaurant-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Restaurant & Commercial Kitchen Cleaning | Mint Sanitary",
  description:
    "Restaurant and commercial kitchen cleaning across Greater Vancouver. NFPA 96 hood cleaning, grease trap service, food-safe deep cleans. Free estimates.",
  robots: { index: false, follow: false },
};

const includedItems = [
  {
    title: "Hood and Exhaust System Cleaning",
    body: "NFPA 96 requires commercial kitchen hoods to be cleaned every 1 to 3 months, depending on cooking volume. We remove grease, soot, and buildup from the hood face, ductwork, and dampers, and provide NFPA 96-compliant documentation for fire inspectors.",
  },
  {
    title: "Grease Trap and Drain Cleaning",
    body: "Grease traps get cleaned and flushed quarterly or as needed to prevent backups, odors, and drain failures before they shut down service.",
  },
  {
    title: "Equipment Degreasing",
    body: "Ovens, fryers, grills, range tops, and flat-top cookers get degreased with food-safe products that cut through baked-on grease without leaving a residue behind on cooking surfaces.",
  },
  {
    title: "Surface Sanitization",
    body: "Counters, walls, and backsplashes get sanitized with eco-friendly, food-safe products that are safe to use in an active kitchen.",
  },
  {
    title: "Floor and Wall Cleaning",
    body: "A deep clean removes the buildup standard mopping misses and clears the slip hazards that standing water and grease leave on kitchen floors.",
  },
  {
    title: "Ceiling and Light Fixture Cleaning",
    body: "Grease and dust collect overhead too. We clean ceilings, light fixtures, and ventilation components as part of a full deep clean, not as an afterthought.",
  },
];

const whoNeedsItems = [
  "Restaurants and cafes",
  "Catering companies",
  "Hotels and resorts",
  "Food trucks",
  "Institutional kitchens, including schools, hospitals, and corporate cafeterias",
  "Takeout and delivery-only kitchens",
];

const processSteps = [
  { title: "Pre-Assessment and Custom Plan", body: "We walk the kitchen, check grease buildup on hoods and equipment, and map traffic patterns before building a cleaning plan around your space and your schedule." },
  { title: "After-Hours Scheduling", body: "Cleaning happens early morning before you open or late evening after you close, 7 days a week. If an inspection is coming up fast, we offer same-day or next-day booking." },
  { title: "Deep Cleaning Execution", body: "Cleaning runs top to bottom: hood and exhaust first, then equipment, then walls and floors, all with eco-friendly food-safe products." },
  { title: "Final Inspection and Documentation", body: "Before we leave, we do a final walkthrough, take photos, and hand over a completion report you can keep on file for your next health or fire inspection." },
];

const pricingTiers = [
  { title: "One-Time Deep Clean", range: "From $600", details: "Smaller kitchens start at $600, and pricing scales up for larger operations with more equipment and hood systems." },
  { title: "Quarterly Service Plans", range: "15% off regular pricing", details: "Most restaurants benefit from a deep clean every 3 months. Service plan clients get 15% off regular pricing plus priority scheduling." },
  { title: "Monthly Maintenance Cleans", range: "Custom pricing", details: "Built for high-volume kitchens, and these typically cost less than a full deep clean since less buildup accumulates between visits." },
];

const whyChoose = [
  "7-day-a-week availability, including evenings and weekends",
  "Eco-friendly, food-safe products that are non-toxic and biodegradable",
  "NFPA 96-compliant hood cleaning with certified documentation",
  "Working knowledge of health inspection standards across the region",
  "Free estimates and transparent, upfront pricing",
  "10% off your first clean with code MINT26",
  "Rapid response for pre-inspection cleans, including same-day service when needed",
  "Bonded, insured, and background-checked staff, backed by a 24-hour satisfaction guarantee",
];

const faqItems = [
  {
    question: "How much does restaurant cleaning cost?",
    answer:
      "Small takeout kitchens start around $600. Full-service restaurants with multiple hoods and extensive equipment may range from $1,500 to $3,500 or more, depending on size and buildup. Quarterly service plan clients get 15% off regular pricing.",
  },
  {
    question: "How often does NFPA 96 require hood cleaning?",
    answer:
      "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume. High-volume kitchens generally need cleaning at the shorter end of that range.",
  },
  {
    question: "What's included in a commercial kitchen deep clean?",
    answer:
      "A deep clean covers hood and exhaust cleaning, grease trap and drain service, equipment degreasing, surface sanitization, floor and wall cleaning, and ceiling and light fixture cleaning.",
  },
  {
    question: "Do you clean grease traps?",
    answer: "Yes. Grease traps get cleaned and flushed quarterly or as needed to prevent backups and drain failures.",
  },
  {
    question: "Can you clean during business hours or only after close?",
    answer:
      "Cleaning is scheduled early morning before you open or late evening after you close, 7 days a week, so your kitchen is never out of service during operating hours.",
  },
  {
    question: "Do you provide documentation for health and fire inspectors?",
    answer:
      "Yes. Every clean includes photos and a completion report, and hood cleaning comes with NFPA 96-compliant documentation you can hand directly to a fire inspector.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use eco-friendly, non-toxic, biodegradable, food-safe products throughout the kitchen, including on equipment, counters, and floors.",
  },
  {
    question: "How long does a restaurant deep clean take?",
    answer:
      "A small kitchen typically takes 3 to 4 hours. A full-service restaurant with multiple hood systems typically takes 6 to 8 hours.",
  },
  {
    question: "Do you offer recurring service plans?",
    answer:
      "Yes. Quarterly service plans get 15% off regular pricing plus priority scheduling, and monthly maintenance cleans are available for high-volume kitchens at custom pricing.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We clean restaurants and commercial kitchens across North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge.",
  },
  {
    question: "Do you work with food trucks and institutional kitchens?",
    answer:
      "Yes. We clean restaurants, cafes, catering companies, hotels, food trucks, and institutional kitchens like schools, hospitals, and corporate cafeterias.",
  },
  {
    question: "Is Mint Sanitary insured?",
    answer:
      "Yes. Our team is bonded, insured, and background-checked, and every clean is backed by a 24-hour satisfaction guarantee.",
  },
];

export default function ServicesRestaurantCleaningPage() {
  return (
    <ServicePageLayout
      title="Restaurant and Commercial Kitchen Cleaning"
      heroImage="/commercial-kitchen-cleaning-north-vancouver.jpg"
      heroSubtitle="NFPA 96 Hood Cleaning & Grease Trap Service"
      heroIntro="A commercial kitchen carries more regulatory weight than almost any other part of a food service business. Health inspectors check surfaces, temperatures, and grease buildup. Fire safety auditors check hood systems, ductwork, and exhaust components. Mint Sanitary provides restaurant and commercial kitchen cleaning across Greater Vancouver, covering hood and exhaust cleaning, grease trap service, equipment degreasing, and full deep cleans, with documentation you can hand directly to an inspector."
      faqItems={faqItems}
      ctaHeading="Get Your Free Restaurant Cleaning Quote"
      ctaBody="Whatever kind of kitchen you run, a scheduled cleaning plan keeps it ready for inspection year round. Get a free estimate for hood cleaning, grease trap service, or a full deep clean, and use code MINT26 for 10% off your first visit."
      ctaHref="/rates"
    >
      {/* ── What's Included (white bg) ────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Restaurant and Commercial Kitchen Cleaning
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedItems.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Needs It (blue bg) ────────────────────────────── */}
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
            Who Needs Restaurant and Commercial Kitchen Cleaning
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Any operation with a working kitchen and a health inspector on
            the calendar benefits from a scheduled, documented cleaning
            plan.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whoNeedsItems.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/10 px-5 py-3 font-body text-[15px] text-white/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our Process
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── Pricing (f4f8ff bg) ───────────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Pricing
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                <p className="mt-2 font-display-reg text-[22px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            We offer free estimates for every kitchen, so you know what a
            clean will cost before you book it.
          </p>
        </div>
      </section>

      {/* ── Why Choose (blue bg) ──────────────────────────────── */}
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
            Why Choose Mint Sanitary
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/10 px-5 py-3 font-body text-[15px] leading-[1.7] text-white/80">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary serves restaurants and commercial kitchens across
            North Vancouver, West Vancouver, Vancouver, Burnaby, New
            Westminster, and Maple Ridge. If your kitchen is based in North
            Vancouver, see our page on{" "}
            <a href="/north-vancouver/restaurant-cleaning" className="underline underline-offset-2">
              restaurant cleaning in North Vancouver
            </a>{" "}
            for details on the neighborhoods we cover there, including Lower
            Lonsdale and Lynn Valley.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
