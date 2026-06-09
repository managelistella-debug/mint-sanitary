import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carpet Cleaning in North Vancouver: When to Book and What to Expect | Mint Sanitary",
  description:
    "How often should you have your carpets professionally cleaned? What methods actually work? A practical guide to carpet cleaning in North Vancouver from the team at Mint Sanitary.",
};

export default function CarpetCleaningPost() {
  return (
    <>
      <Navbar />
      <main>

        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ marginTop: "77px", minHeight: "340px", height: "460px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/carpet-cleaning-in-north-vancouver.webp')" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,37,64,0.93) 0%, rgba(10,37,64,0.60) 55%, rgba(10,37,64,0.30) 100%)" }}
          />
          <div className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[14px] items-center text-center max-w-[760px]">
            <div className="flex items-center gap-[8px]">
              <Link href="/blog" className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-[#c8e0fd] hover:text-white transition-colors">
                Blog
              </Link>
              <span className="text-white/30 text-[12px]">/</span>
              <span className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-white/50">Carpet Cleaning</span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-white uppercase">
              Carpet Cleaning in North Vancouver: When to Book and What to Expect
            </h1>
            <p className="font-body text-[14px] text-white/55">May 6, 2025 · Mint Sanitary Team</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="rgba(13,30,54,0.8)" />
            </svg>
          </div>
        </section>

        <article className="py-[80px] md:py-[100px] bg-[#0d1e36]">
          <div className="px-4 sm:px-8 md:px-[60px] max-w-[820px] mx-auto flex flex-col gap-[48px]">

            <div className="flex flex-col gap-[20px]">
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Carpet holds onto things that a vacuum cannot reach. Over months, a residential carpet accumulates fine soil, dead skin cells, pet dander, dust mite waste, pollen tracked in from outside, and moisture from spills that dried but never fully disappeared. In North Vancouver, where muddy shoes and wet dogs are a daily reality for a large portion of households, carpets earn their cleaning faster than in drier climates.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                This guide explains how to know when it is time to book <strong className="text-white">carpet cleaning in North Vancouver</strong>, what methods are available, and what the process actually looks like when a professional team arrives.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/carpet-cleaning-north-vancouver.jpg"
                  alt="Professional carpet cleaning in a North Vancouver home"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Professional carpet cleaning reaches the dirt and allergens that regular vacuuming cannot.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                How Often Should Carpets Be Professionally Cleaned?
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                The standard recommendation from most flooring manufacturers and industry bodies is once every 12 to 18 months for a typical household, but that baseline assumes relatively light use. In North Vancouver specifically, households with children, dogs, or high foot traffic from outdoor activities should aim for every six to twelve months. High-traffic areas like hallways and family rooms accumulate soil faster than bedrooms and may warrant more frequent attention.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Households where anyone has asthma, allergies, or respiratory sensitivities often benefit from cleaning every six months, since carpets are a primary reservoir for the allergens that affect air quality most.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Signs It Is Time to Book, Regardless of the Calendar
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                A few clear indicators that your carpet needs professional attention now rather than on schedule: visible soiling or traffic lanes that do not improve with vacuuming, persistent odours that return after a day or two, staining from spills that were not treated quickly, increased allergy symptoms in household members, or a noticeable difference in texture when you walk across a carpeted area in bare feet. Matted or flattened pile in high-use zones is also a sign that the carpet fibres are carrying more soil load than regular maintenance can address.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/carpet-hot-water-extraction-north-vancouver.jpg"
                  alt="Hot water extraction carpet cleaning process in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Hot water extraction (steam cleaning) is the most effective method for deep-cleaning residential carpet fibres.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Hot Water Extraction vs. Dry Cleaning: What Works
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Hot water extraction, often called steam cleaning despite not actually using steam, is the method recommended by most carpet manufacturers and the most effective option for residential carpets. It works by injecting hot water and cleaning solution into the carpet pile under pressure, then extracting it along with the loosened soil. When done properly with professional-grade equipment, it removes far more than surface cleaning methods and does not leave residue that attracts new soil.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Dry or low-moisture methods are faster-drying and useful for certain commercial settings or carpets that cannot handle moisture, but they do not achieve the same depth of clean for most residential situations. If a company is offering a very fast turnaround or unusually low price for carpet cleaning, it is worth asking which method they use and whether they are using truck-mounted or portable equipment.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                What Happens During a Professional Carpet Clean
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                A thorough professional carpet clean starts with a pre-inspection to identify stains, damage, and areas of concern. The technician will pre-treat high-traffic areas and spots with appropriate solutions before the main cleaning pass. The hot water extraction process involves multiple slow, overlapping passes to ensure full coverage. After extraction, most carpets take two to four hours to dry in normal ventilation conditions. Opening windows or running fans speeds up drying significantly.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Reputable <strong className="text-white">carpet cleaning companies in North Vancouver</strong> will walk you through what to expect, point out any areas where staining may be permanent (older pet stains that have set into the backing, for example), and explain aftercare to help the results last longer.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/freshly-cleaned-carpets-north-vancouver.jpg"
                  alt="Freshly cleaned carpets in a North Vancouver home"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Freshly cleaned carpets restore both the appearance and the air quality of your home.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Area Rugs and Upholstery
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Area rugs need cleaning on a similar schedule to wall-to-wall carpet, and some require extra care depending on fibre type and backing. Wool, silk, and natural-fibre rugs need gentler treatment than synthetic pile and should be assessed before any cleaning method is applied. If you have both carpet and area rugs, booking them together with the same cleaning visit usually reduces the overall cost and simplifies the scheduling.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Upholstered furniture, particularly sofas and armchairs, carries a similar soil and allergen load to carpets but often gets neglected because it does not show dirt as visibly. A professional upholstery clean in the same visit extends the results across your whole living space.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 border border-white/12 p-[36px] sm:p-[48px] flex flex-col gap-[18px] items-start">
              <p className="font-body font-extrabold text-[12px] tracking-[1.0px] uppercase text-[#93b8f5]">Mint Sanitary</p>
              <h3 className="font-display text-[24px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Professional Carpet Cleaning Across North Vancouver
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-white/65">
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">Mint Sanitary</Link> provides hot water extraction carpet cleaning and area rug cleaning for homes across North Vancouver and the North Shore. Eco-friendly solutions, professional equipment, and honest advice on what your carpets actually need. Free estimates and flexible scheduling seven days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-[12px] mt-[4px]">
                <a href="/contact" className="inline-flex items-center justify-center bg-white text-[#253862] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:bg-white/90 transition-colors duration-200">
                  Get a Carpet Cleaning Quote
                </a>
                <a href="tel:+12366883248" className="inline-flex items-center justify-center border-2 border-white/30 text-white font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:border-white hover:bg-white/10 transition-colors duration-200">
                  Call 236-688-3248
                </a>
              </div>
            </div>

            <div className="pt-[8px]">
              <Link href="/blog" className="font-body font-extrabold text-[13px] tracking-[0.32px] uppercase text-[#93b8f5] hover:text-white transition-colors">
                Back to Blog
              </Link>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
