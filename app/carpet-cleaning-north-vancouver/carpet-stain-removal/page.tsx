import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Professional Carpet Stain Removal in North Vancouver | Mint Sanitary",
  description:
    "Same-day carpet stain removal in North Vancouver. Eco-friendly, certified technicians. Pet stains, wine, coffee, and set-in stains. Free estimate.",
};

const faqItems = [
  {
    question:
      "How quickly should I call for professional stain removal in North Vancouver?",
    answer:
      "The faster, the better. Fresh spills respond to treatment within hours. If you can call us within 24 hours of a spill in North Vancouver, we\u0027ll have the best chance of complete removal. That said, we successfully treat set-in stains that have been sitting for weeks.",
  },
  {
    question:
      "Can you remove pet stains in North Vancouver permanently?",
    answer:
      "Yes, in most cases. Pet urine contains uric acid crystals that can reactivate if not fully removed. We use enzymatic treatments specifically designed to break down these crystals and eliminate odor. If the urine has soaked into the padding beneath the carpet, we may need to address the padding. We\u0027ll diagnose this during your free estimate in North Vancouver.",
  },
  {
    question:
      "What\u0027s the drying time after professional stain removal in North Vancouver?",
    answer:
      "Our extraction method removes 85 to 95% of moisture, so carpet typically dries in 4 to 6 hours in North Vancouver. Avoid walking on wet areas and use fans or open windows to speed drying. Rental machine cleaning often takes 24+ hours to dry.",
  },
  {
    question:
      "Will the stain come back after professional removal in North Vancouver?",
    answer:
      "Not if the treatment is thorough. Stains return when moisture reactivates remaining stain particles. Because we extract nearly all moisture and use appropriate chemistry, stains typically don\u0027t return. If one does, let us know and we\u0027ll retreat it at no charge.",
  },
  {
    question: "Do you offer same-day stain removal in North Vancouver?",
    answer:
      "Yes. Call (604) 671-6252 with stain details, and we\u0027ll schedule same-day or next-day service depending on availability. We work seven days a week.",
  },
  {
    question:
      "Are your stain removal products safe for pets in North Vancouver?",
    answer:
      "Absolutely. All our products are non-toxic and eco-friendly. They\u0027re safe for dogs, cats, and children. Treated areas are safe once dry.",
  },
  {
    question:
      "What\u0027s the difference between coffee and wine stain removal in North Vancouver?",
    answer:
      "Both are beverage stains but require different approaches. Coffee is more acidic and responds to standard enzymatic pre-treatment. Red wine contains tannins that bond tightly to fibers and often need acidic solutions followed by enzymatic treatment. Dark beverages in general are more challenging than light ones.",
  },
  {
    question:
      "Can you remove old stains (months old) in North Vancouver?",
    answer:
      "Often yes. Set-in stains require more intensive treatment, sometimes multiple applications. We\u0027ll assess the stain during your free estimate and give you an honest answer about removal likelihood. Very old stains may require patience, but we can usually improve them noticeably.",
  },
  {
    question: "Do you treat carpet odor in North Vancouver?",
    answer:
      "Yes. We address both the stain and the odor. If the odor is from pet urine, we use enzymatic treatments to eliminate bacteria and uric acid crystals. If it\u0027s general carpet odor, we use our extraction and treatment process. Odor removal is included in our stain removal service, especially for pet-related stains in North Vancouver.",
  },
  {
    question: "How much does carpet stain removal cost in North Vancouver?",
    answer:
      "Single stain removal runs $120 to $180. Multiple stains are $200 to $280. Pet stain and odor treatment is $150 to $240. All quotes are free, and new customers can use code MINT25 for 10% off first service.",
  },
];

export default function CarpetStainRemovalNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Carpet Stain Removal in North Vancouver"
      heroImage="/carpet-stain-removal-north-vancouver.jpg"
      heroIntro="That red wine spill during dinner? The pet accident you discovered this morning? The mystery coffee stain that&apos;s been sitting for weeks? We get it. Carpet stains happen to everyone."
      faqItems={faqItems}
      ctaHeading="Ready to Remove That Stain?"
      ctaBody="That carpet doesn&apos;t have to stay stained. Call Mint Sanitary at (604) 671-6252 or email hello@mintsanitary.com to schedule your free estimate. Same-day and next-day appointments are available throughout North Vancouver. Use code MINT25 for 10% off your first service."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/carpet-stain-removal-north-vancouver.jpg"
                alt="Professional carpet stain removal in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Professional Carpet Stain Removal in North Vancouver?
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professional stain removal goes way beyond blotting with a towel or
                renting an underperforming machine. When you spill something on your
                carpet, the liquid doesn&apos;t just sit on the surface. It bonds to the
                carpet fibers through chemical and mechanical processes. The longer
                it sits, the stronger that bond becomes.
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
            DIY rental machines apply about 20 to 40 PSI of extraction force.
            Professional stain removal uses industrial-grade equipment with 200
            to 500 PSI of extraction power, plus stain chemistry knowledge and
            targeted treatment selection.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[16px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
                Types of Stains We Treat in North Vancouver
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>Beverage stains: wine, coffee, tea, soda, and juice</li>
                <li>Food stains: chocolate, tomato sauce, grease, and oils</li>
                <li>Pet stains: urine, vomit, feces, and odor issues</li>
                <li>Organic stains: blood, grass, and mud</li>
                <li>Personal care stains: lipstick, nail polish, and marker</li>
                <li>Set-in stains from weeks or months ago</li>
              </ul>
            </div>
            <div className="rounded-[16px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
                What stains cannot be removed
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>Bleach or chemical damage</li>
                <li>Fiber melting from heat damage</li>
                <li>Very old dye-based marker or ink stains</li>
                <li>Rust and mineral stains in some cases</li>
              </ul>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                We&apos;ll assess your stain during our free estimate and tell you
                honestly whether removal is likely. We won&apos;t promise miracles.
              </p>
            </div>
          </div>
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
            Our 5-Step Stain Removal Process in North Vancouver
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Step 1: Assessment",
                body: "We examine the stain under normal and UV light, estimate age, and check carpet fiber type before selecting treatment.",
              },
              {
                title: "Step 2: Pre-Treatment",
                body: "We apply an eco-friendly pre-spray based on stain chemistry. Pet stains get enzymatic treatment, and dwell time is respected.",
              },
              {
                title: "Step 3: Extraction",
                body: "Using professional-grade equipment, we perform hot water or hot carbonated extraction to pull dissolved stain particles out.",
              },
              {
                title: "Step 4: Secondary Spot Treatment",
                body: "For stubborn stains, we apply secondary treatment formulas and focused extraction. Some stains need two or three applications.",
              },
              {
                title: "Step 5: Final Inspection",
                body: "We confirm results under proper lighting and provide drying guidance. Optional carpet protectant can be added.",
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

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            DIY vs. Professional Stain Removal in North Vancouver
          </h2>
          <p className="mt-4 max-w-[980px] font-body text-[15px] leading-[1.8] text-[#5c6075]">
            For fresh spills, blotting with cold water works fine. But for
            stains sitting more than a few hours, or stains already treated with
            store products, professional removal is usually worth it.
          </p>
          <p className="mt-4 max-w-[980px] font-body text-[15px] leading-[1.8] text-[#5c6075]">
            DIY rental equipment extracts about 50% of moisture. Professional
            equipment extracts 85 to 95%. That means dry times of 4 to 6 hours
            instead of 24+ hours and a much lower chance of stains returning.
          </p>
          <div className="mt-10 mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Eco-Friendly Stain Removal Solutions in North Vancouver
          </h2>
          <p className="mt-4 max-w-[980px] font-body text-[15px] leading-[1.8] text-[#5c6075]">
            At Mint Sanitary, all stain removal treatments use eco-friendly,
            non-toxic products that are safe for kids, pets, and the
            environment. Enzymatic cleaners break down organic matter at a
            molecular level, and acidic solutions for beverage stains neutralize
            stains without harsh chlorine.
          </p>
        </div>
      </section>

      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Stain Removal in North Vancouver"
        image="/eco-friendly-carpet-stain-removal-north-vancouver.jpg"
        imageAlt="Eco-friendly carpet stain removal in North Vancouver"
        items={[
          { title: "7-Day Availability", body: "Seven-day availability with same-day and next-day options." },
          { title: "Eco-Friendly Products", body: "Eco-friendly, non-toxic products safe for kids, pets, and the environment." },
          { title: "Certified Technicians", body: "Trained and certified technicians with stain chemistry knowledge." },
          { title: "Professional Equipment", body: "Professional 200 to 500 PSI extraction equipment for the deepest clean." },
          { title: "Free Estimates", body: "Free estimates, no obligation." },
          { title: "Satisfaction Guarantee", body: "Satisfaction guarantee and first-service discount." },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Free Estimate"
      />

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Pricing & Related Services
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Pricing
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Carpet stain removal pricing in North Vancouver: single stain
                removal is $120 to $180, multiple stains (3+) are $200 to $280,
                and pet stain plus odor treatment is $150 to $240. Optional
                carpet protectant is $20 to $40.
              </p>
            </div>
            <div>
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Related services
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
                    href="/carpet-cleaning-north-vancouver/area-rug-cleaning/"
                    className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                  >
                    Area rug cleaning in North Vancouver
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
              Sources & Further Reading
            </h3>
            <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              <li>
                <a
                  href="https://spotremoval.coit.com/how-to-remove-urine-from-carpet"
                  className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                >
                  COIT Stain Removal Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.whittakersystem.com/blog/remove-old-stains-from-carpet/"
                  className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                >
                  Whittaker System: Old Stain Removal
                </a>
              </li>
              <li>
                <a
                  href="https://www.hgtv.com/lifestyle/clean-and-organize/how-to-get-pet-stains-out-of-carpet"
                  className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                >
                  HGTV Pet Stain Removal
                </a>
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
                We serve Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont
                Village, Seymour Heights, and wider Greater Vancouver.
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
