import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Carpet Steam Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional carpet steam cleaning in North Vancouver using hot water extraction. Eco-friendly, guaranteed results. 7-day availability. Get 10% off with MINT25.",
};

const faqItems = [
  {
    question:
      "How often should I have my carpets professionally steam cleaned in North Vancouver?",
    answer:
      "For most North Vancouver homes, every 12 to 18 months is ideal. If you have pets or children, every 6 to 12 months keeps odors and allergens under control. This frequency maintains your carpet warranty and extends its life.",
  },
  {
    question:
      "Is carpet steam cleaning safe for pet owners in North Vancouver?",
    answer:
      "Absolutely. The enzymatic pre-treatment we use is specifically designed to break down pet urine compounds. The hot water extraction removes pet dander and allergens. Most North Vancouver pet owners find their homes smell fresher after cleaning. We recommend pet odor neutralization as an add-on for stubborn odors.",
  },
  {
    question:
      "Will carpet steam cleaning remove all stains from my North Vancouver carpets?",
    answer:
      "Professional cleaning removes 95%+ of stains, including old, set-in stains. Some permanent stains (like bleach damage or burn marks) can\u0027t be removed, but we\u0027ll discuss this upfront. Our pre-treatment and extraction process targets the hardest stains, which is why North Vancouver homeowners see such dramatic results.",
  },
  {
    question:
      "How long does carpet steam cleaning take in North Vancouver?",
    answer:
      "A typical 3-bedroom North Vancouver home takes 2 to 4 hours, depending on square footage and carpet condition. We\u0027ll provide a specific timeline during your free estimate.",
  },
  {
    question:
      "Can I have my carpets steam cleaned if I have a new installation in North Vancouver?",
    answer:
      "Yes, but we recommend waiting 6 to 8 weeks after installation so new carpet sizing treatments can set properly.",
  },
  {
    question:
      "What\u0027s the drying time for carpet steam cleaning in North Vancouver?",
    answer:
      "Most North Vancouver carpets dry within 6 to 12 hours in normal conditions. Good airflow speeds this up. We\u0027ll set up fans and provide specific guidance. You can typically resume normal activities within a few hours. Just avoid heavy furniture placement for 6 hours.",
  },
  {
    question:
      "Is professional carpet steam cleaning more effective than renting a machine in North Vancouver?",
    answer:
      "Yes, noticeably. Commercial equipment has 3 to 5 times the pressure and extraction power of rental machines. The heat reaches 200 to 230\u00b0F compared to much lower temperatures in rentals. North Vancouver homeowners who\u0027ve tried DIY rentals tell us the professional results are incomparable.",
  },
  {
    question:
      "Will carpet steam cleaning help with allergens in my North Vancouver home?",
    answer:
      "Definitely. Studies show hot water extraction reduces dust mites by 87% and removes 94%+ of allergens including pet dander, pollen, and mold spores. If you or your family have allergies, this makes a real difference in North Vancouver\u0027s damp climate.",
  },
  {
    question:
      "Do you move furniture during carpet steam cleaning in North Vancouver?",
    answer:
      "Yes, we move light to medium furniture such as sofas, chairs, and tables as part of service. We discuss heavier or specialty pieces during the estimate.",
  },
  {
    question:
      "What if I\u0027m not satisfied with the carpet steam cleaning in my North Vancouver home?",
    answer:
      "We offer a 24-hour satisfaction guarantee. If you\u0027re not happy with your clean, we\u0027ll re-clean affected areas at no charge.",
  },
];

export default function CarpetSteamCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Carpet Steam Cleaning in North Vancouver"
      heroImage="/carpet-steam-cleaning-north-vancouver.jpg"
      heroIntro="Your carpets are more than just floor coverings. They&apos;re an investment in your home&apos;s comfort and appearance. But over time, dirt, allergens, and odors build up deep in the fibers. That&apos;s where professional carpet steam cleaning in North Vancouver makes all the difference."
      faqItems={faqItems}
      ctaHeading="Ready for Cleaner, Fresher Carpets in North Vancouver?"
      ctaBody="Your carpets deserve professional care. Preparing for a special event, dealing with stubborn odors, or ready for a deep refresh? Get your free estimate today. Call Mint Sanitary at (604) 671-6252 or email hello@mintsanitary.com."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/carpet-hot-water-extraction-north-vancouver.jpg"
                alt="Carpet hot water extraction cleaning in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Carpet Steam Cleaning in North Vancouver? (The Hot Water Extraction Method)
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                The term &ldquo;steam cleaning&rdquo; is a bit of a misnomer. The real name is
                hot water extraction, and it&apos;s the gold standard for deep carpet
                cleaning in North Vancouver.
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
            We heat water to 200 to 230&deg;F, mix it with an eco-friendly cleaning
            solution, and inject it deep into your carpet under high pressure.
            Simultaneously, a powerful vacuum extracts the dirty water. The
            result is a carpet that&apos;s not just surface-clean, but genuinely
            sanitized.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.8] text-[#5c6075]">
            Carpet manufacturers require professional hot water extraction
            cleaning to maintain warranty coverage. If your carpets need to stay
            protected, this is the method you need.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[16px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
                Why Choose Carpet Steam Cleaning Over Other Methods
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>The deepest clean available</li>
                <li>Sanitization power from 200&deg;F+ heat</li>
                <li>Pet-friendly results with enzymatic treatment</li>
                <li>Warranty protection for your carpet investment</li>
                <li>Long-lasting results with no sticky residue</li>
              </ul>
            </div>
            <div className="rounded-[16px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[15px] font-extrabold uppercase text-[#4E5062]">
                What&apos;s Included in Our Service
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>Professional pre-inspection and carpet fiber assessment</li>
                <li>Eco-friendly pre-treatment of stains and high-traffic zones</li>
                <li>Commercial-grade hot water extraction cleaning</li>
                <li>Spot treatment and light furniture moving</li>
                <li>Detailed drying guidance and satisfaction guarantee</li>
              </ul>
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
            How Carpet Steam Cleaning Works: A Step-by-Step Process in North Vancouver
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Step 1: Pre-Inspection & Assessment",
                body: "We identify high-traffic zones and stains, and test delicate or wool carpets for colorfastness before treatment.",
              },
              {
                title: "Step 2: Targeted Pre-Treatment",
                body: "We apply eco-friendly pre-treatment for 10 to 15 minutes. Pet odors get enzymatic pre-treatment to neutralize urine compounds at the source.",
              },
              {
                title: "Step 3: Hot Water Extraction",
                body: "Commercial-grade equipment injects hot water and cleaning solution while extracting dirty water, typically with 2 to 3 passes per section.",
              },
              {
                title: "Step 4: Grooming, Final Extraction, and Drying Setup",
                body: "We groom the pile, make final extraction passes, and set up airflow. Most North Vancouver carpets dry within 6 to 12 hours.",
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
            Drying Time & What to Expect After Your North Vancouver Clean
          </h2>
          <p className="mt-4 max-w-[980px] font-body text-[15px] leading-[1.8] text-[#5c6075]">
            Most carpets in North Vancouver are ready for normal use within
            6 to 12 hours. Light foot traffic is fine, but avoid placing
            heavy furniture back on the carpet for at least 6 hours.
          </p>
        </div>
      </section>

      <AccordionWithImage
        heading="Why Mint Sanitary for Carpet Steam Cleaning in North Vancouver"
        intro="We're local, bonded, insured, and use non-toxic biodegradable solutions. We're available 7 days a week with free estimates, transparent pricing, and a 24-hour satisfaction guarantee."
        image="/carpet-steam-cleaning-north-vancouver.jpg"
        imageAlt="Professional carpet steam cleaning in North Vancouver"
        items={[
          { title: "Local & Bonded", body: "We're local, bonded, insured, and use non-toxic biodegradable solutions." },
          { title: "7-Day Availability", body: "We're available 7 days a week with free estimates and transparent pricing." },
          { title: "24-Hour Satisfaction Guarantee", body: "If you're not happy with your clean, we'll re-clean affected areas at no charge." },
        ]}
        ctaHref="/contact"
        ctaLabel="Get a Free Estimate"
      />

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Pricing & Service Areas in North Vancouver
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Typical costs
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Carpet steam cleaning is priced at $60 per room. Final cost
                depends on total rooms, traffic level, stain severity, and
                add-ons like pet odor treatment. Visit our rates page for details.
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
                    href="/carpet-cleaning-north-vancouver/carpet-stain-removal/"
                    className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                  >
                    Carpet stain removal in North Vancouver
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
                  href="https://masterclean.biz/carpet-cleaning-benefits-allergies/"
                  className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                >
                  Master Clean: Carpet Cleaning Benefits for Allergies
                </a>
              </li>
              <li>
                <a
                  href="https://dynamiccleaning.org/research-shows-steam-cleaning-can-rid-carpets-of-dust-mites"
                  className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                >
                  Dynamic Cleaning: Steam Cleaning Research on Dust Mite Reduction
                </a>
              </li>
              <li>
                <a
                  href="https://hobbitcleaning.ca/carpet-deep-cleaning-hot-water-extraction-in-north-vancouver-bc/"
                  className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                >
                  Hobbit Cleaning: Hot Water Extraction Methods
                </a>
              </li>
              <li>
                <a
                  href="https://www.stanleysteemer.com/blog/tips-tricks/how-clean-pet-messes"
                  className="border-b border-[#66DAD5] font-body font-bold text-[#4E5062]"
                >
                  Stanley Steemer: Pet Stain Cleaning Guide
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
                We proudly serve Lower Lonsdale, Lynn Valley, Deep Cove,
                Edgemont Village, Seymour Heights, and surrounding areas
                throughout North Vancouver.
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
