import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/carpet-cleaning-original
// so the CMS version at /services/carpet-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Carpet Cleaning in Greater Vancouver | Mint Sanitary",
  description:
    "Eco-friendly carpet cleaning across Greater Vancouver. Steam cleaning, stain removal, and area rug care. Free estimates. Call 236-688-3248.",
  robots: { index: false, follow: false },
};

const whatWeClean = [
  {
    title: "Area Rug Cleaning",
    image: "/area-rug-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/carpet-cleaning#area-rug-cleaning",
    description:
      "Hand-wash cleaning for delicate area rugs, including Persian, Oriental, wool, and silk rugs. We test dyes and fiber type before we start so color and texture stay intact.",
  },
  {
    title: "Carpet Steam Cleaning",
    image: "/carpet-steam-cleaning-north-vancouver.jpg",
    href: "/north-vancouver/carpet-cleaning#carpet-steam-cleaning",
    description:
      "Hot water extraction that pulls embedded dirt, allergens, and odors out of residential and commercial carpet. This is the deep clean your carpet warranty likely requires.",
  },
  {
    title: "Carpet Stain Removal",
    image: "/carpet-stain-removal-north-vancouver.jpg",
    href: "/north-vancouver/carpet-cleaning#carpet-stain-removal",
    description:
      "Targeted treatment for pet accidents, wine, coffee, and other stubborn stains. We use industrial-grade extraction and stain-specific chemistry, not a rented machine.",
  },
  {
    title: "Drapes & Curtains Cleaning",
    image: "/drapes-curtains-cleaning-north-vancouver.webp",
    href: "/services/drapes-curtains-cleaning",
    description:
      "Professional cleaning for drapes and curtains in every fabric type, removing dust, allergens, and odors while protecting the fabric.",
  },
];

const processSteps = [
  { title: "Pre-inspection and assessment", body: "We check carpet fiber type, high-traffic zones, and existing stains before we start." },
  { title: "Targeted pre-treatment", body: "Eco-friendly pre-spray goes on first, with enzymatic treatment for pet odors so it can break down urine compounds at the source." },
  { title: "Hot water extraction", body: "Commercial-grade equipment injects hot water and cleaning solution, then extracts it, usually with two to three passes per section." },
  { title: "Grooming and drying setup", body: "We groom the pile, make final extraction passes, and set up airflow so your carpet dries as fast as possible." },
];

const signs = [
  "Carpet looks dull or matted in high-traffic paths, even after vacuuming",
  "Odor lingers in a room even when it's clean",
  "Allergy symptoms flare up more indoors than outdoors",
  "A stain has been treated at home but keeps reappearing",
  "It's been over a year since the last professional clean",
  "You're moving in or out and need the carpet reset for new tenants or a sale",
];

const whyChoose = [
  "Eco-friendly, non-toxic products safe for kids and pets",
  "Background-checked, bonded, and insured teams",
  "7-day availability, with same-day and next-day appointments often available",
  "24-hour satisfaction guarantee",
  "Transparent pricing, free estimates, and no contracts",
  "Fast-dry technology, with most carpets dry in 4 to 12 hours",
  "4.9/5 rating from 120+ reviews",
];

const faqItems = [
  {
    question: "How often should carpets be professionally cleaned?",
    answer: "Most homes do well with professional cleaning every 12 to 18 months. If you have pets or young children, every 6 to 12 months keeps odors and allergens under control and helps maintain your carpet warranty.",
  },
  {
    question: "What is carpet steam cleaning?",
    answer: "It's the common name for hot water extraction, the industry's deep-cleaning standard. We heat water to 200 to 230°F, inject it into the carpet with an eco-friendly cleaning solution, then extract it with commercial-grade equipment. The result reaches dirt and allergens a vacuum can't touch.",
  },
  {
    question: "How long do carpets take to dry after cleaning?",
    answer: "Most carpets dry in 4 to 12 hours depending on the service and airflow in the home. We set up fans and give you specific drying guidance before we leave.",
  },
  {
    question: "Can you remove pet stains and odors?",
    answer: "Yes. Pet urine contains uric acid crystals that cause lingering odor if they aren't fully removed. We use enzymatic pre-treatment designed to break those crystals down, followed by extraction that pulls the residue out of the carpet.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer: "Yes. All our products are eco-friendly, plant-based, and non-toxic, with no harsh chemicals or fumes. Treated areas are safe once dry.",
  },
  {
    question: "Do you offer commercial carpet cleaning?",
    answer: "Yes. We clean carpet in offices and commercial hallways as well as homes. We work around your business hours to minimize disruption.",
  },
  {
    question: "How much does carpet cleaning cost?",
    answer: "Carpet steam cleaning starts at $60 per room. Stain removal starts at $120 for a single stain, and area rug cleaning runs $1 to $8+ per square foot depending on material. For a specific quote, visit our rates page or call 236-688-3248.",
  },
  {
    question: "Do you clean area rugs too?",
    answer: "Yes. We hand-wash Persian, Oriental, wool, silk, and synthetic rugs using specialized techniques that protect color and fiber. See our full North Vancouver carpet cleaning page for the complete process and pricing breakdown.",
  },
  {
    question: "Is same-day carpet cleaning available?",
    answer: "Often, yes. Call 236-688-3248 with details about your carpet and we'll schedule same-day or next-day service depending on availability.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Vancouver, North Vancouver, West Vancouver, Burnaby, and the wider Greater Vancouver area. See our full service area list for details.",
  },
];

export default function ServicesCarpetCleaningPage() {
  return (
    <ServicePageLayout
      title="Carpet Cleaning Services"
      heroImage="/carpet-cleaning-in-north-vancouver.webp"
      heroSubtitle="Hot Water Extraction, Done Right"
      heroIntro="Carpets collect more than dust. Dirt, pet dander, allergens, and old spills settle deep in the fibers, past where a vacuum can reach. Mint Sanitary cleans carpets across Greater Vancouver using hot water extraction, the method carpet manufacturers recommend to protect your warranty and keep carpet looking new."
      faqItems={faqItems}
      ctaHeading="Ready for Cleaner Carpet?"
      ctaBody="Get a free quote at /rates or call Mint Sanitary at 236-688-3248. New customers save 10% on their first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            We serve homes and businesses in Vancouver, North Vancouver,
            West Vancouver, and Burnaby. Our teams are background-checked,
            bonded, and insured. We use eco-friendly, non-toxic products
            safe for kids and pets. Book any day of the week, get a free
            estimate first, and rely on our 24-hour satisfaction guarantee
            if something needs a second pass.
          </p>
        </div>
      </section>

      {/* ── What Professional Cleaning Involves + Process (f4f8ff bg) ── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What Professional Carpet Cleaning Involves
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            &quot;Steam cleaning&quot; is a common name for hot water
            extraction, the industry&apos;s deep-cleaning standard. We heat
            water to 200 to 230°F, mix it with an eco-friendly cleaning
            solution, and inject it into the carpet under pressure. A
            powerful vacuum extracts the dirty water at the same time. The
            carpet ends up sanitized, not just surface-clean.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/20 font-body text-[15px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-body text-[16px] font-extrabold text-white">{step.title}</h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters + Signs (white bg) ─────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why It Matters
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Dirty carpet is more than a cosmetic problem. Hot water
            extraction reduces dust mites by roughly 87% and removes 94%+
            of common allergens, including pet dander, pollen, and mold
            spores. That matters if anyone in the home deals with allergies
            or asthma. Regular cleaning also protects your carpet warranty,
            since most manufacturers require periodic professional hot
            water extraction to keep coverage valid. Most homes do well
            with cleaning every 12 to 18 months. If you have pets or young
            kids, every 6 to 12 months keeps odors and allergens from
            building up.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Signs Your Carpet Needs Professional Cleaning</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {signs.map((item) => (
              <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                &bull; {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What We Clean Image Card Grid (blue bg) ──────────── */}
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
            What We Clean
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A dirty spot on the carpet is rarely just one problem. We
            handle delicate handmade rugs, full-home carpet, and everything
            in between.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whatWeClean.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[20px] bg-white/10 p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.18]"
              >
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
                <span className="mt-3 inline-block border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white transition-colors group-hover:text-white/70">
                  Learn More
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stains, Pets, Residential/Commercial (white bg) ──── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Stains, Pets, and Everyday Life
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A fresh spill responds well to blotting with cold water. But
            once a stain sits for a few hours, or someone&apos;s already
            tried a store-bought spray on it, the liquid has bonded to the
            fibers and a rental machine usually can&apos;t finish the job.
            DIY equipment applies about 20 to 40 PSI of extraction force.
            Professional equipment applies 200 to 500 PSI, which is why dry
            times run 4 to 6 hours after professional stain removal instead
            of 24+ hours after a rental. Pet accidents are one of the most
            common calls we get. Urine contains uric acid crystals that can
            reactivate later if they aren&apos;t fully removed, so we
            pre-treat with enzymatic spotters that break the crystals down
            before extraction.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Residential and Commercial Carpet Cleaning</h3>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We clean living rooms, bedrooms, and stairs in single-family
            homes, and we clean hallway and office carpet in commercial
            buildings too. Jobs typically take 2 to 4 hours depending on
            square footage and carpet condition. Same-day and next-day
            appointments are often available, and we work seven days a
            week. For a rental property between tenants, a strata hallway,
            or an office that gets foot traffic all week, commercial carpet
            holds dirt differently than a living room. We adjust
            pre-treatment and pass count to match the traffic level, so a
            busy hallway gets more attention than a quiet meeting room.
          </p>
        </div>
      </section>

      {/* ── DIY vs Pro + Pricing (f4f8ff bg) ─────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            DIY vs. Professional Cleaning
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Renting a machine seems like the cheaper option, but rental
            units extract far less moisture than commercial equipment,
            often leaving carpet wet for 24 hours or more. That extra
            moisture is also why DIY-cleaned carpet re-soils faster:
            leftover cleaning solution attracts new dirt. Professional
            extraction pulls out 85 to 95% of the moisture we put in, so
            carpet dries faster and stays cleaner longer.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Pricing</h3>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Carpet steam cleaning is priced per room, starting at $60 per
            room, with final cost depending on room count, traffic level,
            and any add-ons like pet odor treatment. Single stain removal
            runs $120 to $180, multiple stains are $200 to $280, and pet
            stain plus odor treatment is $150 to $240. Area rug cleaning
            ranges from $1 to $8+ per square foot depending on material,
            with synthetic rugs at the low end and silk or fine Oriental
            rugs at the high end. For an exact number for your home, visit
            our{" "}
            <a href="/rates" className="underline underline-offset-2">
              rates page
            </a>{" "}
            or call 236-688-3248. New customers can use code MINT26 for 10%
            off their first clean.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Why Choose Mint Sanitary</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {whyChoose.map((item) => (
              <span key={item} className="rounded-full bg-white/[0.12] px-4 py-2 font-body text-[13px] font-semibold text-white">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Serving Greater Vancouver (blue bg) ──────────────── */}
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
            Serving Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is based in{" "}
            <a href="/north-vancouver" className="underline underline-offset-2">
              North Vancouver
            </a>{" "}
            and cleans carpets throughout the region. If you&apos;re in
            North Vancouver, our{" "}
            <a href="/north-vancouver/carpet-cleaning" className="underline underline-offset-2">
              North Vancouver carpet cleaning
            </a>{" "}
            page has the full pricing breakdown and local detail. See our{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              service areas
            </a>{" "}
            for the full coverage list.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
