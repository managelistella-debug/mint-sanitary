import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "House Cleaning Rates North Vancouver | Mint Sanitary",
  description:
    "View Mint Sanitary house cleaning rates for North Vancouver and surrounding cities, including deep cleaning prices and add-ons.",
};

const standardRates = [
  { size: "500-600 sq ft", price: "$220" },
  { size: "700-800 sq ft", price: "$250" },
  { size: "900-1000 sq ft", price: "$320" },
  { size: "1200-1500 sq ft", price: "$390" },
  { size: "2000-2500 sq ft", price: "$460" },
  { size: "2600-3000 sq ft", price: "$550" },
  { size: "4000-5000 sq ft", price: "$620" },
  { size: "6000+ sq ft", price: "Call for quote" },
];

const deepRates = [
  { size: "500-600 sq ft", price: "$390" },
  { size: "700-800 sq ft", price: "$480" },
  { size: "900-1000 sq ft", price: "$580" },
  { size: "1200-1500 sq ft", price: "$620" },
  { size: "2000-2500 sq ft", price: "$650" },
  { size: "2600-3000 sq ft", price: "$780" },
  { size: "4000-5000 sq ft", price: "$850" },
  { size: "6000+ sq ft", price: "Call for quote" },
];

const addOns = [
  { item: "Oven (inside)", price: "$30" },
  { item: "Fridge (inside)", price: "$30" },
  { item: "Windows & frames (inside)", price: "$30 per window" },
  { item: "Cabinets and closets (inside)", price: "$45" },
  { item: "Marks on walls and baseboards", price: "$25 per room" },
  { item: "Balconies swept", price: "$30 per balcony" },
  { item: "Blinds washed", price: "$30 per room" },
  { item: "Walls washed", price: "$50 (1 room)" },
  { item: "Dishes washed", price: "$15 (1 room)" },
  { item: "Linen & towels changed", price: "$15 per bed" },
  { item: "Inspection for damages, toiletries & supplies", price: "$25" },
  { item: "Carpet cleaning", price: "$60 per room" },
  { item: "Laundry options", price: "Please inquire" },
];

const standardIncludes = [
  { text: "Kitchen surfaces, stovetop, and sink", image: "/standard-cleaning-kitchen-north-vancouver.jpg" },
  { text: "Bathroom scrub, toilet, and mirrors", image: "/deep-cleaning-bathroom-north-vancouver.jpg" },
  { text: "Vacuuming and mopping all floors", image: "/recurring-cleaning-hepa-vacuum-north-vancouver.jpg" },
  { text: "Dusting and surface wipe-down", image: "/recurring-cleaning-kitchen-result-north-vancouver.jpg" },
];

const deepIncludes = [
  { text: "Everything in standard, plus baseboards", image: "/deep-cleaned-kitchen-north-vancouver.jpg" },
  { text: "Inside appliances and light fixtures", image: "/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg" },
  { text: "Window tracks and buildup-prone areas", image: "/eco-friendly-cleaning-products-north-vancouver.jpg" },
  { text: "Detailed scrub of tile and grout", image: "/post-construction-kitchen-cleaning-north-vancouver.jpg" },
];

const faqItems = [
  {
    question:
      "How much does house cleaning cost in North Vancouver by square footage?",
    answer:
      "For standard cleaning, pricing commonly starts around $220 for 500-600 sq ft and scales based on total size, condition, and service scope.",
  },
  {
    question: "What is the price difference between standard and deep cleaning?",
    answer:
      "Deep cleaning is priced higher because it includes more detailed work across kitchens, bathrooms, living areas, and buildup-prone surfaces.",
  },
  {
    question: "Are inside oven and inside fridge cleaning included in base rates?",
    answer:
      "These are typically add-ons. We list them separately so you can customize your quote with only the extras you need.",
  },
  {
    question:
      "Do you offer first-time cleaning discounts in North Vancouver and nearby cities?",
    answer:
      "Yes. New customers can use code MINT25 for 10% off their first service.",
  },
  {
    question: "Do rates change based on condition, access, or special requests?",
    answer:
      "Yes. Final pricing can vary when there is heavy buildup, access limitations, or extra tasks beyond the base scope.",
  },
  {
    question: "Can I get a free cleaning estimate before booking?",
    answer:
      "Absolutely. We provide clear, no-obligation estimates before work begins so you know the expected cost upfront.",
  },
];

function PricingTable({
  heading,
  rows,
}: {
  heading: string;
  rows: Array<{ size: string; price: string }>;
}) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#d9e2fb] bg-white shadow-sm">
      <div className="bg-[#6191e9] px-5 py-4">
        <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.4px] text-white">
          {heading}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[440px] border-collapse">
          <thead>
            <tr className="bg-[#f4f8ff]">
              <th className="border-b border-[#d9e2fb] px-5 py-3 text-left font-body text-[12px] font-bold uppercase tracking-[1px] text-[#5c6075]">
                Property Size
              </th>
              <th className="border-b border-[#d9e2fb] px-5 py-3 text-left font-body text-[12px] font-bold uppercase tracking-[1px] text-[#5c6075]">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.size} className="odd:bg-white even:bg-[#fbfdff]">
                <td className={`${i < rows.length - 1 ? "border-b border-[#e8eefc]" : ""} px-5 py-3 font-body text-[15px] text-[#4E5062]`}>
                  {row.size}
                </td>
                <td className={`${i < rows.length - 1 ? "border-b border-[#e8eefc]" : ""} px-5 py-3 font-body text-[15px] font-extrabold text-[#4E5062]`}>
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default function RatesPage() {
  return (
    <ServicePageLayout
      title="House Cleaning Rates in North Vancouver"
      heroImage="/standard-cleaning-kitchen-north-vancouver.jpg"
      heroIntro="Transparent pricing for standard cleaning, deep cleaning, and optional add-ons. Use the rate tables below to estimate your service cost before booking."
      faqItems={faqItems}
      ctaHeading="Need a Custom Quote?"
      ctaBody="Call (604) 671-6252 or request a free estimate online. We will confirm exact pricing based on your property and requested services."
    >
      {/* ── Image + Text Intro ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
              Transparent Pricing
            </p>
            <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Residential Cleaning Price List
            </h2>
            <p className="mt-4 font-body text-[16px] leading-[1.75] text-[#5c6075]">
              Rates are based on home size and cleaning depth. Final pricing may vary
              depending on condition and special requests. Every quote includes
              eco-friendly products, all supplies, and a trained, bonded team.
            </p>
            <p className="mt-4 font-body text-[16px] leading-[1.75] text-[#5c6075]">
              Use code <strong className="text-[#6191e9]">MINT25</strong> for 10%
              off your first service.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
            >
              Get a Free Estimate
            </a>
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/recurring-cleaning-kitchen-result-north-vancouver.jpg"
              alt="Sparkling clean kitchen after professional cleaning in North Vancouver"
              className="h-[340px] w-full object-cover sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ── All Pricing Tables ─────────────────────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-2">
            <PricingTable heading="Standard Cleaning Rates" rows={standardRates} />
            <PricingTable heading="Deep Cleaning Rates" rows={deepRates} />
          </div>

          <div className="mt-6">
            <article className="overflow-hidden rounded-[18px] border border-[#d9e2fb] bg-white shadow-sm">
              <div className="bg-[#6191e9] px-5 py-4">
                <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.4px] text-white">
                  Add-On Services
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[440px] border-collapse">
                  <thead>
                    <tr className="bg-[#f4f8ff]">
                      <th className="border-b border-[#d9e2fb] px-5 py-3 text-left font-body text-[12px] font-bold uppercase tracking-[1px] text-[#5c6075]">
                        Add-On
                      </th>
                      <th className="border-b border-[#d9e2fb] px-5 py-3 text-left font-body text-[12px] font-bold uppercase tracking-[1px] text-[#5c6075]">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {addOns.map((row, i) => (
                      <tr key={row.item} className="odd:bg-white even:bg-[#fbfdff]">
                        <td className={`${i < addOns.length - 1 ? "border-b border-[#e8eefc]" : ""} px-5 py-3 font-body text-[15px] text-[#4E5062]`}>
                          {row.item}
                        </td>
                        <td className={`${i < addOns.length - 1 ? "border-b border-[#e8eefc]" : ""} px-5 py-3 font-body text-[15px] font-extrabold text-[#4E5062]`}>
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <p className="mt-6 font-body text-[14px] leading-[1.7] text-[#5c6075]">
            Build your cleaning package by adding the extras you need. Final pricing may vary depending on condition and special requests.
          </p>
        </div>
      </section>

      {/* ── What Standard Cleaning Includes — Image Cards ───────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What Standard Cleaning Includes
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.75] text-[#5c6075]">
            Our standard cleaning covers the essential tasks that keep your home fresh
            and tidy on a regular basis.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {standardIncludes.map((item) => (
              <div
                key={item.text}
                className="overflow-hidden rounded-[20px] bg-[#f4f8ff] p-4 transition-all duration-200 hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="h-[160px] w-full rounded-[14px] object-cover"
                />
                <p className="mt-4 font-body text-[15px] font-semibold leading-[1.5] text-[#4E5062]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Cleaning Difference — Image + Text ─────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/deep-cleaned-kitchen-north-vancouver.jpg"
              alt="Deep cleaned kitchen in North Vancouver showing detailed results"
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              The Deep Cleaning Difference
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.75] text-white/80">
              Deep cleaning goes beyond the everyday. We target buildup in kitchens,
              bathrooms, and living areas that regular cleaning misses. Baseboards,
              inside appliances, light fixtures, window tracks, and grout all
              receive thorough attention.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {deepIncludes.map((item) => (
                <div
                  key={item.text}
                  className="rounded-[14px] border border-white/15 bg-white/10 px-4 py-4"
                >
                  <p className="font-body text-[14px] font-semibold leading-[1.5] text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Eco-Friendly Banner — Full Image + Text ─────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
              Included in Every Service
            </p>
            <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Eco-Friendly Products at No Extra Cost
            </h2>
            <p className="mt-4 font-body text-[16px] leading-[1.75] text-[#5c6075]">
              Every price above includes plant-based, non-toxic cleaning products.
              We never charge extra for green cleaning. Your home stays safe for
              kids, pets, and sensitive surfaces while getting the same thorough
              results.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Plant-Based Cleaners", "HEPA-Filtered Vacuums", "Non-Toxic Formulas", "Safe for Pets & Kids"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-5 py-2.5 font-body text-[13px] font-semibold text-[#4E5062] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/eco-friendly-office-cleaning-products-north-vancouver.jpg"
              alt="Eco-friendly office cleaning products used in North Vancouver"
              className="h-[340px] w-full object-cover sm:h-[400px]"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
