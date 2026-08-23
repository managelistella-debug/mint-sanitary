import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/restaurant-cleaning-original
// so the CMS version at /north-vancouver/restaurant-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Restaurant Cleaning in North Vancouver | Mint Sanitary",
  description:
    "NFPA 96 hood cleaning, grease trap service, and food-safe deep cleans for restaurants in North Vancouver. Free estimates, 7 days a week.",
  robots: { index: false, follow: false },
};

const includedItems = [
  {
    title: "Hood and Exhaust System Cleaning in North Vancouver",
    body: "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume, and North Vancouver kitchens are held to the same standard as anywhere else in the region. We remove grease, soot, and buildup from the hood face, ductwork, and dampers, and provide NFPA 96-compliant documentation your North Vancouver fire inspector can review on the spot.",
  },
  {
    title: "Grease Trap and Drain Cleaning for North Vancouver Restaurants",
    body: "Grease traps get cleaned and flushed quarterly or as needed to prevent backups, odors, and drain failures in North Vancouver kitchens, many of which run older plumbing that clogs faster under heavy grease loads.",
  },
  {
    title: "Equipment Degreasing in North Vancouver Kitchens",
    body: "Ovens, fryers, grills, range tops, and flat-top cookers across North Vancouver get degreased with food-safe products that cut through baked-on grease without damaging cooking surfaces.",
  },
  {
    title: "Surface Sanitization for North Vancouver Kitchens",
    body: "Counters, walls, and backsplashes in North Vancouver restaurants get sanitized with eco-friendly, food-safe products, safe to use around active food prep.",
  },
  {
    title: "Floor and Wall Cleaning in North Vancouver Restaurants",
    body: "A deep clean removes the buildup standard mopping misses and clears slip hazards that standing water and grease leave behind, a common issue in busy North Vancouver kitchens with high foot traffic during dinner service.",
  },
  {
    title: "Ceiling and Light Fixture Cleaning",
    body: "Grease and dust collect overhead too. We clean ceilings, light fixtures, and ventilation components as part of every full deep clean in North Vancouver.",
  },
];

const whoNeedsItems = [
  "Restaurants and cafes across the city, from waterfront spots in Lower Lonsdale to neighborhood cafes in Lynn Valley",
  "Catering companies based in North Vancouver",
  "Hotels and resorts",
  "Food trucks operating in North Vancouver",
  "Institutional kitchens, including schools, hospitals, and corporate cafeterias",
  "Takeout and delivery-only kitchens in North Vancouver",
];

const processSteps = [
  { title: "Pre-Assessment and Custom Plan", body: "We walk the kitchen, check grease buildup on hoods and equipment, and map traffic patterns before building a cleaning plan around your North Vancouver location and schedule." },
  { title: "After-Hours Scheduling Across North Vancouver", body: "Cleaning happens early morning before you open or late evening after you close, 7 days a week, across every North Vancouver neighborhood we serve. If a North Vancouver kitchen needs a pre-inspection clean fast, we offer same-day or next-day booking." },
  { title: "Deep Cleaning Execution", body: "Cleaning runs top to bottom: hood and exhaust first, then equipment, then walls and floors, using eco-friendly food-safe products throughout your North Vancouver kitchen." },
  { title: "Final Inspection and Documentation", body: "Before we leave your North Vancouver kitchen, we do a final walkthrough, take photos, and hand over a completion report you can keep on file for your next Vancouver Coastal Health or fire inspection." },
];

const whyChooseItems = [
  { title: "7-Day-a-Week Availability", body: "Cleaning scheduled across North Vancouver, including evenings, weekends, and holidays." },
  { title: "Eco-Friendly, Food-Safe Products", body: "Non-toxic and biodegradable, safe to use around active food prep." },
  { title: "NFPA 96-Compliant Hood Cleaning", body: "Certified documentation for North Vancouver kitchens, ready for your next fire inspection." },
  { title: "Vancouver Coastal Health Knowledge", body: "Working knowledge of inspection standards as they apply to North Vancouver restaurants." },
  { title: "Free Estimates and Transparent Pricing", body: "No surprises, no hidden fees, upfront pricing before any work begins." },
  { title: "10% Off Your First Clean", body: "New clients save with code MINT26." },
  { title: "Local North Shore Expertise", body: "North Vancouver kitchens cleaned in Lower Lonsdale, Lynn Valley, and Edgemont Village." },
  { title: "Rapid Response for Pre-Inspection Cleans", body: "Same-day service available when a North Vancouver inspection is coming up fast." },
];

const pricingTiers = [
  { title: "One-Time Deep Clean", range: "From $600", body: "Smaller North Vancouver kitchens start at $600, and pricing scales up for larger North Vancouver operations with more equipment and hood systems." },
  { title: "Quarterly Service Plans", range: "15% off regular pricing", body: "Most North Vancouver restaurants benefit from a deep clean every 3 months. Service plan clients get 15% off regular pricing plus priority scheduling." },
  { title: "Monthly Maintenance Cleans", range: "Custom pricing", body: "Built for high-volume North Vancouver kitchens, and these typically cost less than a full deep clean since less buildup accumulates between visits." },
];

const serviceAreas = ["Lower Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont Village", "Seymour Heights", "West Vancouver", "Vancouver", "Burnaby"];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/north-vancouver/commercial-cleaning/", label: "Commercial cleaning in North Vancouver" },
  { title: "Office Cleaning", href: "/north-vancouver/office-cleaning/", label: "Office cleaning in North Vancouver" },
  { title: "Post-Construction Cleaning", href: "/north-vancouver/post-construction-cleaning/", label: "Post-construction cleaning North Vancouver" },
];

const faqItems = [
  {
    question: "How much does restaurant cleaning cost in North Vancouver?",
    answer:
      "Small takeout kitchens in North Vancouver start around $600. Full-service restaurants in North Vancouver with multiple hoods and extensive equipment may range from $1,500 to $3,500 or more. Quarterly service plan clients in North Vancouver get 15% off regular pricing.",
  },
  {
    question: "How often does NFPA 96 require hood cleaning for North Vancouver restaurants?",
    answer:
      "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume, and North Vancouver restaurants are held to that same standard by local fire inspectors.",
  },
  {
    question: "What's included in a commercial kitchen deep clean in North Vancouver?",
    answer:
      "A deep clean for a North Vancouver kitchen covers hood and exhaust cleaning, grease trap and drain service, equipment degreasing, surface sanitization, floor and wall cleaning, and ceiling and light fixture cleaning.",
  },
  {
    question: "Do you clean grease traps in North Vancouver?",
    answer:
      "Yes. Grease traps in North Vancouver restaurants get cleaned and flushed quarterly or as needed to prevent backups and drain failures.",
  },
  {
    question: "Can North Vancouver restaurants book after-hours cleaning?",
    answer:
      "Yes. Cleaning is scheduled early morning before you open or late evening after you close, 7 days a week, for restaurants across North Vancouver.",
  },
  {
    question: "Do you provide documentation for Vancouver Coastal Health inspections in North Vancouver?",
    answer:
      "Yes. Every clean in North Vancouver includes photos and a completion report, and hood cleaning comes with NFPA 96-compliant documentation for fire inspectors covering North Vancouver.",
  },
  {
    question: "What products does Mint Sanitary use for restaurant cleaning in North Vancouver?",
    answer:
      "We use eco-friendly, non-toxic, biodegradable, food-safe products in every North Vancouver kitchen we clean, including on equipment, counters, and floors.",
  },
  {
    question: "How long does a restaurant deep clean take in North Vancouver?",
    answer:
      "A small North Vancouver kitchen typically takes 3 to 4 hours. A full-service North Vancouver restaurant with multiple hood systems typically takes 6 to 8 hours.",
  },
  {
    question: "Do you offer quarterly service plans for North Vancouver restaurants?",
    answer: "Yes. Quarterly service plans for North Vancouver restaurants get 15% off regular pricing plus priority scheduling.",
  },
  {
    question: "Which North Vancouver neighborhoods does Mint Sanitary serve?",
    answer:
      "We serve restaurants throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights.",
  },
  {
    question: "Do you clean food trucks based in North Vancouver?",
    answer:
      "Yes. We clean food trucks operating in North Vancouver alongside restaurants, cafes, hotels, and institutional kitchens.",
  },
  {
    question: "Can Mint Sanitary handle a same-day emergency clean before an inspection in North Vancouver?",
    answer:
      "Yes. We offer rapid response and same-day or next-day booking for North Vancouver kitchens facing an upcoming inspection.",
  },
  {
    question: "Is Mint Sanitary insured to clean commercial kitchens in North Vancouver?",
    answer:
      "Yes. Our team is bonded, insured, and background-checked for every restaurant cleaning job in North Vancouver, backed by a 24-hour satisfaction guarantee.",
  },
  {
    question: "Do you offer a discount for first-time restaurant cleaning customers in North Vancouver?",
    answer: "Yes. First-time customers in North Vancouver get 10% off their first clean with code MINT26.",
  },
  {
    question: "What's the difference between a one-time deep clean and a monthly plan for North Vancouver kitchens?",
    answer:
      "A one-time deep clean in North Vancouver starts at $600 and covers a full top-to-bottom clean. Monthly maintenance cleans for high-volume North Vancouver kitchens are custom priced and typically cost less per visit since buildup stays lower between cleans.",
  },
  {
    question: "Do you clean institutional kitchens in North Vancouver, like schools and hospitals?",
    answer: "Yes. We clean institutional kitchens across North Vancouver, including schools, hospitals, and corporate cafeterias.",
  },
  {
    question: "How far in advance should a North Vancouver restaurant book a hood cleaning?",
    answer:
      "NFPA 96 sets a 1 to 3 month cleaning window depending on volume, so most North Vancouver restaurants book on a recurring schedule rather than waiting until an inspection is due. Rapid response is available for North Vancouver kitchens that need a faster turnaround.",
  },
  {
    question: "Does Mint Sanitary serve areas near North Vancouver too?",
    answer: "Yes. Alongside restaurant cleaning in North Vancouver, we also serve West Vancouver, Vancouver, and Burnaby.",
  },
];

export default function RestaurantCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Restaurant Cleaning in North Vancouver"
      heroImage="/commercial-kitchen-cleaning-north-vancouver.jpg"
      heroSubtitle="NFPA 96 Hood Cleaning & Grease Trap Service"
      heroIntro="Your North Vancouver kitchen is the heart of your food service business. It's also one of the most heavily inspected and regulated spaces you operate. Mint Sanitary provides restaurant cleaning in North Vancouver for kitchens from Lower Lonsdale to Lynn Valley to Edgemont Village, covering hood and exhaust cleaning, grease trap service, equipment degreasing, and full deep cleans. Vancouver Coastal Health conducts over 16,000 food facility inspections annually across the North Shore and Lower Mainland, and North Vancouver restaurants are part of that count every year."
      faqItems={faqItems}
      ctaHeading="Get Your Free North Vancouver Restaurant Cleaning Quote"
      ctaBody="Restaurant cleaning in North Vancouver keeps your kitchen ready for Vancouver Coastal Health and fire inspections year round. Get a free estimate for hood cleaning, grease trap service, or a full deep clean at your North Vancouver kitchen, and use code MINT26 for 10% off your first visit."
      ctaHref="/rates"
    >
      {/* ── What's Included (white bg) ────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Restaurant Cleaning in North Vancouver
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

      {/* ── Who We Clean For (blue bg) ────────────────────────── */}
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
            Who We Clean For in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary provides restaurant cleaning in North Vancouver
            for:
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
              Our Process for Restaurant Cleaning in North Vancouver
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

      {/* ── Why Choose Mint Sanitary ── */}
      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Restaurant Cleaning in North Vancouver"
        items={whyChooseItems}
        image="/commercial-kitchen-cleaning-north-vancouver.webp"
        imageAlt="Restaurant and commercial kitchen cleaning in North Vancouver"
        ctaHref="/rates"
        ctaLabel="Get a Free Estimate"
      />

      {/* ── Pricing (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Pricing for Restaurant Cleaning in North Vancouver
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                <p className="mt-2 font-display-reg text-[22px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            We offer free estimates for every North Vancouver kitchen, so
            you know what a clean will cost before you book it.
          </p>
        </div>
      </section>

      {/* ── Service Areas (blue bg) ───────────────────────────── */}
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
              North Vancouver Neighborhoods We Serve
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary provides restaurant cleaning throughout North
              Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove,
              Edgemont Village, and Seymour Heights. We also serve nearby
              West Vancouver, Vancouver, and Burnaby for restaurants that
              operate in more than one location.
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
          </div>
        </div>
      </section>

      {/* ── Related Services (white bg) ───────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Related Services
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
