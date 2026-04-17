import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Area Rug Cleaning in North Vancouver | Professional Care & Free Pickup",
  description:
    "Professional area rug cleaning in North Vancouver. Eco-friendly, hand-wash care for Persian, Oriental & wool rugs. Free pickup & delivery. Call (604) 671-6252.",
};

const faqItems = [
  {
    question:
      "How often should I have my area rug professionally cleaned in North Vancouver?",
    answer:
      "For North Vancouver homes, we recommend professional cleaning every 12 to 18 months for medium-traffic areas, or annually if you have pets or children. High-traffic areas and pet-heavy homes benefit from yearly service. North Vancouver's damp climate makes regular cleaning especially important to prevent mold and mildew buildup.",
  },
  {
    question:
      "Is professional area rug cleaning safe for antique rugs in North Vancouver?",
    answer:
      "Yes, when done by trained professionals. Antique rugs require specialized care and testing. Our team assesses each antique rug in your North Vancouver home before cleaning, testing dyes and inspecting for fragile areas. We adjust our process to protect these heirlooms. Never trust a generic carpet cleaner with an antique.",
  },
  {
    question:
      "How long does area rug drying take after professional cleaning in North Vancouver?",
    answer:
      "Typical drying takes 3 to 5 days in our climate-controlled facility. North Vancouver's moisture and cooler temperatures outdoors make controlled drying essential. We won't rush the process. Rushing increases the risk of mold or mildew growth, which is a concern in our region.",
  },
  {
    question:
      "Can you remove pet stains and odors from area rugs in North Vancouver?",
    answer:
      "Absolutely. Pet accidents are one of the most common issues we address for North Vancouver pet owners. We pre-treat with enzymatic spotters that break down uric acid crystals, then hand-wash the affected area. For heavy pet odor, we offer specialized enzymatic treatments as an add-on. For North Vancouver's damp climate, proper drying afterward is important to prevent odor from returning.",
  },
  {
    question:
      "Do you offer pickup and delivery for area rug cleaning in North Vancouver?",
    answer:
      "Yes. Free pickup and delivery comes with qualifying orders for North Vancouver residents. We handle all the logistics. You just schedule the appointment. If your North Vancouver address qualifies, we'll confirm during your free estimate call.",
  },
  {
    question:
      "What cleaning solution do you use for area rugs in North Vancouver?",
    answer:
      "We use eco-friendly, plant-based, non-toxic solutions. No harsh chemicals or toxic fumes. This is especially important for North Vancouver families with children and pets. Our solutions are certified safe for home use while still being effective against dirt, allergens, and stains.",
  },
  {
    question:
      "Will professional area rug cleaning in North Vancouver shrink or damage my rug?",
    answer:
      "No, when done correctly. Our hand-wash process uses controlled moisture levels and temperature-regulated drying. We test each rug before cleaning and adjust our process based on fiber type. Shrinkage happens when rugs are exposed to heat or excessive agitation. We avoid both. Your North Vancouver rug is safer with us than it is sitting in damp conditions or with DIY cleaning.",
  },
  {
    question: "How much does area rug cleaning cost in North Vancouver?",
    answer:
      "Pricing ranges from $1 to 8 per square foot depending on material. Synthetic rugs start at $1 to 4/sq ft, wool at $3 to 8/sq ft, and delicate Oriental or silk rugs at $5 to 8+/sq ft. For a specific quote, call (604) 671-6252 or email hello@mintsanitary.com. Your free estimate for North Vancouver area rug cleaning includes all costs upfront.",
  },
  {
    question: "Can you clean wool rugs in North Vancouver?",
    answer:
      "Yes. Wool requires specialized care, and we're trained in wool fiber science. Wool is sensitive to heat and moisture, so we use cool water and controlled extraction. Many North Vancouver homes feature beautiful wool rugs, and we clean them safely and thoroughly while preserving softness and color.",
  },
  {
    question:
      "Why should I professionally clean my area rug instead of doing it myself in North Vancouver?",
    answer:
      "DIY methods can't reach deep dirt, allergens, and odors trapped in rug fibers. Renting a machine is risky. Too much moisture, wrong temperature, or aggressive agitation can shrink your rug or set stains permanently. For North Vancouver's humid climate, improper drying can lead to mold. Professional cleaning removes contaminants safely, dries properly in a controlled environment, and extends your rug's life 5 to 10+ years. For a $2,000+ rug, professional care is an investment, not an expense.",
  },
];

export default function AreaRugCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Area Rug Cleaning in North Vancouver"
      heroImage="/area-rug-cleaning-north-vancouver.jpg"
      heroIntro="Your area rugs deserve more than a quick vacuum. They deserve professional care that restores their beauty, removes hidden dirt and allergens, and extends their life for decades."
      faqItems={faqItems}
      ctaHeading="Ready to Restore Your Area Rugs?"
      ctaBody="Your area rugs are an investment in your North Vancouver home's beauty and comfort. Mint Sanitary's professional area rug cleaning brings your rugs back to life. Free estimates. Eco-friendly solutions. Free pickup and delivery. 7-day availability."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/area-rug-cleaning-north-vancouver.jpg"
                alt="Professional area rug cleaning in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Professional Area Rug Cleaning in North Vancouver?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professional area rug cleaning goes far beyond vacuuming. It removes
                deep-set dirt, allergens, pet stains, and odors trapped in the fiber
                depths, which are invisible contaminants that DIY methods simply
                can&apos;t reach.
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
          <p className="font-body text-[15px] leading-[1.8] text-[#5c6075]">
            Here&apos;s why it matters in North Vancouver&apos;s climate: moisture and
            mold thrive here, pets leave lasting damage, regular professional
            cleaning extends rug life 5 to 10+ years, and allergens accumulate
            invisibly in thick rug fibers.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[16px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
                Why it matters here
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>Moisture from our climate can lead to mold and mildew</li>
                <li>Pet urine can soak into fibers and backing and linger</li>
                <li>Professional care extends rug life by 5 to 10+ years</li>
                <li>Allergen removal improves indoor air quality</li>
              </ul>
            </div>
            <div className="rounded-[16px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
                Types of rugs we clean in North Vancouver
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>Persian and Oriental rugs</li>
                <li>Wool rugs and silk rugs</li>
                <li>Synthetic, Kilim, and tribal rugs</li>
                <li>Shag, berber, and textured rugs</li>
                <li>Natural fiber rugs (jute, sisal, seagrass)</li>
                <li>Antique and heirloom rugs</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.8] text-[#5c6075]">
            No matter what sits in your North Vancouver living room, our team
            knows how to clean it safely.
          </p>
        </div>
      </section>

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
            Our 4-Step Area Rug Cleaning Process in North Vancouver
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Step 1: Free Assessment & Inspection",
                body: "We inspect your rug in your home, test for dye stability, identify any damage, and plan the safest cleaning approach for your specific rug.",
              },
              {
                title: "Step 2: Pickup & Transport",
                body: "For most North Vancouver homeowners, we roll, wrap, and transport rugs to our facility. For rugs too large or delicate to move, we can clean in-home.",
              },
              {
                title: "Step 3: Hand-Wash Cleaning",
                body: "We pre-spot stains, hand-wash with plant-based non-toxic solutions, use low-moisture extraction, and rinse fully so no residue is left behind.",
              },
              {
                title: "Step 4: Controlled Drying & Return",
                body: "Your rug dries in a climate-controlled facility, typically 3 to 5 days, then receives quality checks before free delivery back to your home.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Area Rug Cleaning in North Vancouver"
        intro="We use only plant-based, non-toxic cleaning solutions. No harsh chemicals. No fumes. Our technicians are trained in rug fiber science, dye chemistry, and specialized cleaning methods, and we hold ourselves to IICRC standards."
        image="/freshly-cleaned-carpets-north-vancouver.jpg"
        imageAlt="Freshly cleaned carpets in North Vancouver"
        items={[
          { title: "Plant-Based Solutions", body: "We use only plant-based, non-toxic cleaning solutions. No harsh chemicals. No fumes." },
          { title: "IICRC Standards", body: "Our technicians are trained in rug fiber science, dye chemistry, and specialized cleaning methods, and we hold ourselves to IICRC standards." },
          { title: "Free Pickup & Delivery", body: "Free pickup and delivery for North Vancouver residents means you save time and protect your back." },
          { title: "Transparent Pricing", body: "We quote upfront with transparent pricing and work around your schedule with 7-day availability." },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Free Estimate"
      />

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Rug Cleaning Costs & Pricing in North Vancouver
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Pricing guide
              </p>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>Synthetic rugs: $1 to 4 per square foot</li>
                <li>Wool rugs: $3 to 8 per square foot</li>
                <li>Silk and Oriental rugs: $5 to 8+ per square foot</li>
                <li>Optional add-ons: pet treatment, protectant, rush drying</li>
              </ul>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                A 9x12 Persian rug covers 108 square feet. At $6 per square foot
                (mid-range Oriental rug pricing), the total is around $650 to
                $700.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Free estimate by phone, email, or in-person: call (604)
                671-6252 or email hello@mintsanitary.com. First-time customers
                can use code MINT25 for 10% off.
              </p>
            </div>
            <div>
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Related Services
              </p>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>
                  <a
                    href="/carpet-cleaning-north-vancouver/"
                    className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                  >
                    Carpet cleaning in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/carpet-cleaning-north-vancouver/carpet-steam-cleaning/"
                    className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                  >
                    Carpet steam cleaning in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/carpet-cleaning-north-vancouver/carpet-stain-removal/"
                    className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                  >
                    Carpet stain removal in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/cleaning-services-north-vancouver/upholstery-cleaning/"
                    className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                  >
                    Upholstery cleaning in North Vancouver
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-[16px] bg-[#f4f8ff] p-6">
            <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
              Rug Cleaning Tips Between Professional Cleanings
            </h3>
            <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              <li>Vacuum regularly with gentle settings on delicate rugs.</li>
              <li>Blot spills immediately. Don&apos;t rub.</li>
              <li>Use rug pads to prevent slipping and reduce wear.</li>
              <li>Rotate rugs quarterly to distribute wear evenly.</li>
              <li>Address stains fast for better outcomes.</li>
            </ul>
          </div>
          <div className="mt-8 rounded-[16px] bg-[#f4f8ff] p-6">
            <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
              Sources & Further Reading
            </h3>
            <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              <li>Safavieh Rug Care Guide: safavieh.com/rug-care-and-cleaning</li>
              <li>
                The Rug Chick - Pet Accidents on Rugs:
                rugchick.com/pet-accidents-on-rugs-what-to-do/
              </li>
              <li>
                HomeAdvisor Area Rug Cleaning Cost:
                homeadvisor.com/cost/cleaning-services/area-rug-cleaning/
              </li>
              <li>
                Cardinal Carpet Cleaner ROI Analysis:
                cardinalcarpetcleaner.com/is-rug-cleaning-really-worth-it-cost-longevity-health-benefits-explained/
              </li>
            </ul>
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
              Service Areas
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary serves Lower Lonsdale, Lynn Valley, Deep Cove,
                Edgemont Village, and Seymour Heights. We also serve West
                Vancouver, Vancouver, Burnaby, and the greater Vancouver area.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                If you&apos;re unsure whether your address qualifies for free pickup
                and delivery, call (604) 671-6252 and we&apos;ll confirm.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Lower Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont Village", "Seymour Heights", "West Vancouver", "Vancouver", "Burnaby"].map((area) => (
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
    </ServicePageLayout>
  );
}
