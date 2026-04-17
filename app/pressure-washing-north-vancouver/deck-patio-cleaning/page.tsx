import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Professional Deck & Patio Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Expert deck and patio cleaning in North Vancouver. Soft-wash techniques for wood, composite, and stone surfaces. Free estimates, eco-friendly methods, 10% off first clean.",
};

const whyItMatters: { title: string; body: string }[] = [
  {
    title: "Safety Concerns",
    body: "A moss-covered deck becomes a slip hazard. Professional cleaning removes organic growths at the root, restoring grip.",
  },
  {
    title: "Structural Protection",
    body: "Unaddressed moss and moisture penetrate wood, leading to rot and expensive repairs. Regular maintenance extends deck lifespan by 5 to 10+ years.",
  },
  {
    title: "Pre-Treatment Preparation",
    body: "Professional cleaning before staining ensures maximum product adhesion. Clean wood absorbs stain evenly, creating a finish that lasts longer.",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "Professional Assessment",
    body: "We inspect your deck or patio to identify material type, age, condition, and existing finish. Testing in inconspicuous areas helps us determine the appropriate PSI and cleaning method for your specific surface. This assessment is free and includes a transparent quote with no hidden charges.",
  },
  {
    title: "Pre-Treatment Application",
    body: "Eco-friendly cleaning solutions break down organic growth at the root. Unlike harsh bleach treatments, our hydrogen peroxide-based products are safe for family, pets, and garden plants throughout North Vancouver. The solution dwells for 10 to 30 minutes, allowing it to penetrate and eliminate moss, algae, and mildew fully.",
  },
  {
    title: "Low-Pressure Rinse",
    body: "Using the appropriate PSI for your surface type, we rinse away all cleaning solution and residual debris. Wide-angle spray tips and proper technique deliver thorough cleaning without damage.",
  },
  {
    title: "Final Inspection and Drying",
    body: "We verify complete removal of stains, moss, and mildew before finishing. Allow 48 to 72 hours for full drying before applying stain or sealant.",
  },
];

const whyChoosePoints: { title: string; body: string }[] = [
  {
    title: "Eco-Friendly Approach",
    body: "We use biodegradable products and hydrogen peroxide treatments instead of harsh chemicals. This is safe for family, pets, plants, and the environment.",
  },
  {
    title: "Local Expertise",
    body: "Deep knowledge of North Vancouver\u2019s wet climate and moss conditions shapes every project. Experience with cedar, softwoods, and composite decks informs our approach.",
  },
  {
    title: "Certified Technicians",
    body: "Our team is trained in PSI limits and soft-wash technique. Proper equipment prevents damage and delivers professional results.",
  },
  {
    title: "Transparent Pricing",
    body: "Free on-site assessment with honest quotes and no surprise charges. Get 10% off your first clean with code MINT25.",
  },
  {
    title: "Flexible Scheduling",
    body: "Available 7 days a week for maintenance and cleanups.",
  },
];

const faqItems: { question: string; answer: string }[] = [
  {
    question:
      "How often should I have my deck professionally cleaned in North Vancouver?",
    answer:
      "Most homeowners benefit from annual cleaning in North Vancouver\u2019s wet climate. High-moisture or heavily shaded decks in areas like Lynn Valley may need bi-annual service. Regular cleaning extends deck life and prevents costly rot damage.",
  },
  {
    question:
      "Will pressure washing damage my wood deck in North Vancouver?",
    answer:
      "High-pressure washing above 1,500 PSI can gouge, splinter, or damage wood fibers. Professional soft-wash uses safe PSI (500 to 1,200 for softwoods) and proper technique without harm. We test inconspicuous areas first to confirm appropriate pressure in North Vancouver.",
  },
  {
    question: "Is deck cleaning in North Vancouver eco-friendly?",
    answer:
      "Yes. We use biodegradable products and hydrogen peroxide-based treatments instead of bleach or ammonia. Our methods are safe for family, pets, plants, and the environment.",
  },
  {
    question:
      "Can you clean composite decks in North Vancouver, or only wood?",
    answer:
      "We clean all deck types: wood, composite, vinyl, and PVC. Composite decks require care to stay under 1,500 PSI and avoid chemicals that void warranties. Our technicians know guidelines for Trex, TimberTech, and DuxxBak in North Vancouver.",
  },
  {
    question:
      "What\u2019s the difference between pressure washing and soft washing in North Vancouver?",
    answer:
      "Pressure washing uses high PSI (1,500+) for concrete, stone, and pavers. Soft washing uses lower PSI (500 to 1,200) for wood and composite. In North Vancouver, we recommend soft wash for decks; pressure wash for patios and driveways.",
  },
  {
    question:
      "Should I clean my deck myself, or hire professionals in North Vancouver?",
    answer:
      "DIY pressure washing causes costly damage: gouging wood, stripping stain, or forcing water into boards. Professional soft-wash, eco-friendly chemicals, proper PSI control, and trained technicians in North Vancouver deliver safe, effective cleaning. Repair costs typically exceed professional cleaning rates.",
  },
  {
    question: "How long does deck cleaning take in North Vancouver?",
    answer:
      "Typical residential deck cleaning takes 2 to 4 hours, depending on size, condition, and material type. We provide a time estimate during the free on-site assessment.",
  },
  {
    question:
      "Do I need to prepare my deck before professional cleaning in North Vancouver?",
    answer:
      "Remove loose items and furniture to speed up the process. We protect surrounding plants and garden areas during cleaning.",
  },
  {
    question:
      "Can you clean my patio or driveway in North Vancouver at the same time?",
    answer:
      "Yes. We offer concrete patio, stone patio, paver, and driveway cleaning. Bundle services for convenience and savings. Many North Vancouver homeowners combine deck and patio cleaning in one visit.",
  },
  {
    question:
      "How soon after cleaning can I stain or seal my deck in North Vancouver?",
    answer:
      "Wait 48 to 72 hours after professional cleaning for the deck to fully dry before applying stain or sealant. Proper drying maximizes product adhesion and a professional finish that lasts longer on your North Vancouver deck.",
  },
];

export default function DeckPatioCleaningPage() {
  return (
    <ServicePageLayout
      title="Professional Deck and Patio Cleaning in North Vancouver"
      heroImage="/pressure-washing-deck-patio-north-vancouver.webp"
      heroIntro="North Vancouver's wet Pacific Northwest climate creates ideal conditions for moss, algae, and mildew growth on outdoor surfaces. Cedar decks in Lower Lonsdale, composite decking in Edgemont Village, stone patios in Deep Cove &#8212; professional cleaning restores your outdoor space and protects your investment."
      faqItems={faqItems}
      ctaHeading="Get Your Free Deck Cleaning Estimate"
      ctaBody="Ready to restore your outdoor space? Contact Mint Sanitary for a free on-site assessment and transparent quote. First-time customers get 10% off with code MINT25. Call (604) 671-6252 or email hello@mintsanitary.com. Available 7 days a week across North Vancouver."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Why Professional Deck and Patio Cleaning Matters
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Mint Sanitary specializes in soft-wash deck and patio cleaning
            throughout North Vancouver, including Lynn Valley and Seymour
            Heights. Our eco-friendly methods remove years of buildup without
            damaging wood fibers or compromising composite warranties.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Your deck or patio is an extension of your home, but North
            Vancouver&apos;s climate works against you. Constant moisture from
            rainfall and coastal humidity accelerate moss, algae, mold, and
            mildew growth that can make outdoor surfaces slippery and unsafe.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyItMatters.map((item) => (
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
            Wood Deck Cleaning in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Cedar and pressure-treated decks are common in North Vancouver
            homes. These softwoods are beautiful but vulnerable to high-pressure
            damage.
          </p>
          <div className="mt-6 rounded-[14px] bg-white/10 p-6">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Safe Pressure Levels Matter
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              High-pressure washing above 1,500 PSI can gouge fibers, cause
              splintering, and force water into boards. Professional soft-wash
              cleaning uses controlled PSI from 500 to 1,200, depending on wood
              species and condition.
            </p>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Our two-step process begins with pre-treatment. We apply
            biodegradable cleaning solutions to break down moss, algae, and
            mildew. These hydrogen peroxide-based treatments are safe for
            family, pets, and plants.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
            After the solution dwells for 10 to 30 minutes, we rinse with
            low-pressure equipment. Technicians maintain proper distance and
            move with the grain, ensuring even cleaning. The result is restored
            natural color, improved grip, and a surface ready for staining.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Composite and Stone Surface Cleaning
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-[14px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Composite Deck Cleaning and Maintenance
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Newer homes in Edgemont Village and Seymour Heights often
                feature composite decking from Trex, TimberTech, and DuxxBak.
                These engineered materials require a different approach than
                wood.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <strong className="font-extrabold text-[#4E5062]">
                  Warranty protection is non-negotiable.
                </strong>{" "}
                Composite manufacturers specify cleaning methods to protect
                coverage. Aggressive pressure or harsh chemicals can void
                warranties.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Our soft-wash approach stays under 1,500 PSI and uses
                biodegradable products approved by manufacturers. We remove
                stains and algae without damaging material or warranty.
                Professional cleaning within 7 days of staining maintains
                compliance and best results in North Vancouver.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-6">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Concrete and Stone Patio Cleaning
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Concrete, stone, and paver surfaces handle higher PSI levels
                than wood or composite. Our concrete patio cleaning in North
                Vancouver removes moss, algae, dirt, and weathering buildup.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                We safely use up to 3,000 PSI when appropriate, preventing
                surface etching and mortar joint damage. Wide-angle tips and
                proper distance distribute pressure evenly.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Different stone types respond differently to pressure. Our
                assessment identifies your patio material and adjusts our
                approach. The result is a clean, restored surface ready for
                sealing.
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
            The Deck and Patio Cleaning Process
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Our proven four-step process ensures thorough, safe cleaning for
            every surface type in North Vancouver.
          </p>
          <div className="mt-10 space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#66DAD5]">
                  <span className="font-body text-[15px] font-extrabold text-white">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-[17px] font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Pre-Staining and Maintenance
          </h2>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Pre-Staining and Pre-Sealing Deck Cleaning
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Professional cleaning beforehand is required before refreshing
              your deck with new stain or sealant. A clean deck absorbs products
              evenly, creating a professional finish that lasts 3 to 5+ years.
            </p>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              After cleaning, wait 48 to 72 hours for your deck to fully dry.
              Moisture prevents proper adhesion and causes peeling, uneven
              color, or water damage.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
              Common Deck Maintenance Mistakes in North Vancouver
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Many homeowners wait too long between cleanings. In North
              Vancouver&apos;s moist climate, annual maintenance prevents
              problems rather than reacting to damage.
            </p>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              DIY pressure washing is costly. I consulted with a Deep Cove
              homeowner who rented a washer and used 3,000+ PSI on their cedar
              deck. Gouged boards, splintered edges, and rot resulted, requiring
              full board replacement. Professional soft-wash cleaning would have
              cost a fraction of repairs.
            </p>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Neglecting pre-staining preparation is another error. Applying
              stain to a dirty deck wastes protective qualities and causes
              uneven color and peeling.
            </p>
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
            Why Choose Mint Sanitary for Deck Cleaning
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoosePoints.map((p) => (
              <div key={p.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Service Areas in Greater Vancouver
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              We serve North Vancouver including Lower Lonsdale, Lynn Valley,
              Deep Cove, Edgemont Village, and Seymour Heights, plus West
              Vancouver, Vancouver, Burnaby, and surrounding communities. Free
              estimates available for all service areas.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Related Services and Further Reading
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Related Services in North Vancouver
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver/driveway-pressure-washing"
                    className="underline underline-offset-2"
                  >
                    Pressure washing driveways in North Vancouver
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver/house-washing"
                    className="underline underline-offset-2"
                  >
                    Home exterior cleaning in North Vancouver
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver"
                    className="underline underline-offset-2"
                  >
                    Eco-friendly pressure washing in North Vancouver
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver"
                    className="underline underline-offset-2"
                  >
                    Moss removal services in North Vancouver
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="/pressure-washing-north-vancouver"
                    className="underline underline-offset-2"
                  >
                    Roof cleaning services in North Vancouver
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Further Reading
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://www.decks.com/resource-index/decking/how-to-pressure-wash-a-deck/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Decks.com: How to Pressure Wash a Deck
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://www.timbertech.com/ideas/how-to-clean-composite-decking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    TimberTech Care Guide
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://www.decks.com/how-to/articles/removing-moss-algae-from-your-deck"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Moss and algae removal methods
                  </a>
                </li>
                <li className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <a
                    href="https://tanzite.com/blogs/news/removing-moss-algae-from-your-deck"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Tanzite&apos;s guide to removing moss and algae
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
