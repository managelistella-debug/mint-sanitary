import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pressure Washing in North Vancouver: A Homeowner's Practical Guide | Mint Sanitary",
  description:
    "Driveways, decks, siding, fences, and patios all benefit from pressure washing. Here is what North Vancouver homeowners need to know about timing, surfaces, and what to expect from a professional service.",
  alternates: {
    canonical: "/blog/pressure-washing-north-vancouver-guide",
  },
};

export default function PressureWashingPost() {
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
            style={{ backgroundImage: "url('/north-vancouver-skyline-pressure-washing-hero.webp')" }}
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
              <span className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-white/50">Pressure Washing</span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-white uppercase">
              Pressure Washing in North Vancouver: A Homeowner's Practical Guide
            </h1>
            <p className="font-body text-[14px] text-white/55">May 27, 2025 · Mint Sanitary Team</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="rgba(37,56,98,0.8)" />
            </svg>
          </div>
        </section>

        <article className="py-[80px] md:py-[100px] bg-[#253862]">
          <div className="px-4 sm:px-8 md:px-[60px] max-w-[820px] mx-auto flex flex-col gap-[48px]">

            <div className="flex flex-col gap-[20px]">
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                North Vancouver's climate is ideal for a lot of things. Living conditions are excellent. The scenery is remarkable. But the combination of heavy rainfall, dense tree cover, and the particular temperature swings we get between seasons creates consistently good conditions for moss, algae, and mildew to take hold on exterior surfaces. Left unaddressed, these growths stain concrete, break down wood fibres, make surfaces slippery, and accelerate the deterioration of siding, decking, and roofing materials.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                <Link href="/north-vancouver/pressure-washing" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">Pressure washing in North Vancouver</strong></Link> is one of the most effective ways to deal with this. Here is what you need to know about when to do it, what it covers, and how to get the most out of a professional service.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/north-vancouver-driveway-pressure-washing-professional.webp"
                  alt="Professional pressure washing of a driveway in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A professionally pressure-washed driveway removes years of moss, algae, and staining in a single visit.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                When Is the Right Time to Pressure Wash?
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Late spring is the most popular time for exterior washing in North Vancouver, and for good reason. Washing after the rainy season means you are addressing a full winter's worth of buildup, and the warmer, drier conditions of May and June allow surfaces to dry properly and treatments to penetrate and bond where needed. Attempting to pressure wash in heavy rain or cold conditions reduces effectiveness and, for wood surfaces, can create moisture problems.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                That said, pressure washing can be done at almost any time when temperatures are above freezing and rain is not actively falling. If you have a specific need such as preparing a home for sale, refreshing a deck before the summer season, or clearing moss before it damages a surface, there is rarely a reason to wait for an ideal window if conditions are reasonable.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Driveways and Walkways
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Concrete driveways in North Vancouver commonly develop green and black algae growth, particularly in shaded sections. This growth makes surfaces slippery, stains the concrete, and if left for multiple seasons, can begin to degrade the surface. Professional <Link href="/north-vancouver/pressure-washing" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">North Vancouver pressure washing</strong></Link> using a surface cleaner attachment produces even results across large flat areas without the streaking that hand-held wands can leave.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Interlock pavers and stamped concrete require lower pressure than standard concrete to avoid damaging joints and surface texture. A professional team will adjust PSI and technique based on your specific surface type.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/pressure-washing-deck-patio-north-vancouver.webp"
                  alt="Deck and patio pressure washing in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Wood decks require careful pressure control to remove surface grime without damaging the grain.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Wood Decks and Fences
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Wood is the surface that requires the most care during pressure washing. Too much pressure raises the grain, drives moisture deep into the wood, and can leave visible wand marks that are difficult to remove. The goal is to use enough pressure to remove surface algae, greying, and weathered finish without damaging the underlying wood fibre.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                A professional washing often includes a pre-treatment with a wood cleaner or brightener, followed by a lower-pressure wash pass. This approach is more effective than pressure alone and leaves the wood in better condition for any staining or sealing you plan to do afterward. If you are planning to re-stain a deck this summer, washing should be done three to five days before staining to allow the wood to dry fully.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                House Washing and Siding
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Exterior siding, particularly the north-facing sides of homes in treed areas of North Vancouver, develops mildew and algae growth that is not always visible until you look closely. Soft washing, which uses lower pressure combined with cleaning agents that kill biological growth, is the preferred method for most siding types. High-pressure washing on vinyl, wood, or fibre cement siding risks forcing water behind the cladding or damaging surface coatings.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                A full house wash once a year or every two years maintains exterior surfaces, extends the life of paint and cladding, and dramatically improves the appearance of the property.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/pressure-washing-house-washing-north-vancouver.webp"
                  alt="House washing and exterior pressure washing in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Soft washing removes mildew and algae from siding without the risk of high-pressure damage.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                What to Do Before the Team Arrives
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Before a pressure washing visit, clear the areas being washed of outdoor furniture, planters, garden tools, and anything else that would block coverage or get moved during the wash. Close all windows and doors. Cover any outdoor electrical outlets and light fixtures. If you have garden beds directly adjacent to areas being washed, covering delicate plantings with a tarp or giving them a good soak first reduces the risk of runoff affecting them.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Let the company know in advance about any surfaces you have concerns about, specific staining you want addressed, or areas to avoid. A brief walkthrough at the start of the visit takes five minutes and ensures the team knows your priorities before they start.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 border border-white/12 p-[36px] sm:p-[48px] flex flex-col gap-[18px] items-start">
              <p className="font-body font-extrabold text-[12px] tracking-[1.0px] uppercase text-[#93b8f5]">Mint Sanitary</p>
              <h3 className="font-display text-[24px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Professional Pressure Washing Across North Vancouver
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-white/65">
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">Mint Sanitary</Link> provides <Link href="/north-vancouver/driveway-pressure-washing" className="text-[#93b8f5] hover:text-white transition-colors">driveway washing</Link>, <Link href="/north-vancouver/deck-patio-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">deck and patio cleaning</Link>, <Link href="/north-vancouver/house-washing" className="text-[#93b8f5] hover:text-white transition-colors">house washing</Link>, and <Link href="/north-vancouver/fence-washing" className="text-[#93b8f5] hover:text-white transition-colors">fence washing</Link> across North Vancouver and the North Shore. We adjust pressure and technique to each surface and use eco-friendly treatments to kill biological growth at the root. Free estimates, available seven days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-[12px] mt-[4px]">
                <a href="/contact" className="inline-flex items-center justify-center bg-white text-[#253862] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:bg-white/90 transition-colors duration-200">
                  Get a Pressure Washing Quote
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
