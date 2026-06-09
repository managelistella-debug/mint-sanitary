import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Move Out Cleaning in North Vancouver: What Landlords Actually Inspect | Mint Sanitary",
  description:
    "Losing your damage deposit over cleaning is avoidable. Here is exactly what landlords and property managers check during move out inspections in North Vancouver, and how to make sure you pass.",
};

export default function MoveOutCleaningPost() {
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
            style={{ backgroundImage: "url('/move-out-cleaning-north-vancouver-living-room.jpg')" }}
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
              <span className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-white/50">Move Out Cleaning</span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-white uppercase">
              Move Out Cleaning in North Vancouver: What Landlords Actually Inspect
            </h1>
            <p className="font-body text-[14px] text-white/55">April 24, 2025 · Mint Sanitary Team</p>
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
                In British Columbia, landlords can deduct from a damage deposit for cleaning only if the unit is left in a worse condition than when you moved in, accounting for reasonable wear and tear. In practice, though, disputes over cleanliness are one of the most common reasons tenants lose part or all of their deposit. The difference between getting your money back and losing it is usually not about how hard you cleaned. It is about whether you cleaned the right things.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Here is a practical breakdown of what property managers in North Vancouver focus on during move out inspections, and what a professional <Link href="/cleaning-services-north-vancouver/move-out-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">move out cleaning in North Vancouver</strong></Link> covers that a DIY clean often misses.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/move-out-cleaning-north-vancouver-living-room.jpg"
                  alt="Move out cleaning in a North Vancouver living room"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A thorough move out clean means leaving every room in inspection-ready condition, not just tidy.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                The Kitchen Gets the Most Scrutiny
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                The kitchen is where most damage deposit disputes begin. Property managers look closely at the inside of the oven, stovetop burners, range hood filters, the inside of the microwave, cabinet interiors and the tops of upper cabinets, behind and underneath the stove and fridge, and the condition of the sink and faucet. Grease buildup on the range hood, food residue inside the oven, or grime along cabinet edges are among the most commonly cited issues in BC Residential Tenancy Branch disputes.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Standard consumer oven cleaners can handle light grease, but several years of baked-on residue often requires professional-grade degreasers and the experience to apply them safely without damaging surfaces.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Bathrooms: Grout, Seals, and Fixtures
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Bathrooms are inspected for mould and mildew on tile grout and caulking, limescale buildup on faucets and showerheads, soap scum on shower glass, and the condition of toilet bases and tank exteriors. North Vancouver's mineral-rich water accelerates limescale deposits, and what looks like staining to a tenant may be read as neglect by an inspector. Grout that has turned grey or pink from mildew is particularly difficult to address with regular household cleaners.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Professional move out teams carry the right descalers, mould treatments, and grout brushes to restore tile and fixtures to a condition that holds up under inspection.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/deep-cleaning-bathroom-north-vancouver.jpg"
                  alt="Deep cleaned bathroom in a North Vancouver rental unit"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Grout, caulking, faucets, and shower glass are closely inspected during move out walkthroughs in North Vancouver.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Floors, Walls, and Baseboards
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Scuff marks on walls from furniture movement, handprints around light switches, dust-caked baseboards, and debris along floor edges are all things that surface in inspections. Floors need to be vacuumed and washed, including along the edges and inside closets. Window tracks and door frames accumulate dust and dead insects that tenants rarely think to address but inspectors sometimes note.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Nail holes and wall marks that cross into damage territory are a separate issue from cleaning, but inspectors will note anything that suggests the unit was not left with care.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                What a Move In Clean Means for the Next Tenant
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                If you are on the receiving end as a new tenant, a professional <Link href="/cleaning-services-north-vancouver/move-in-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">move in cleaning in North Vancouver</strong></Link> is worth booking even if the property manager says the unit was professionally cleaned before your arrival. Standards vary, and moving into a space that you have had cleaned to your own standard means you know exactly what condition it was in when your tenancy started. This matters if you ever end up in a dispute at the end of your own lease.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Documenting the state of the unit with photos on move in day and pairing that with a professional clean you arranged yourself gives you strong footing from day one.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/move-in-cleaning-north-vancouver-apartment.jpg"
                  alt="Move in cleaning for a North Vancouver apartment"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A professional move in clean ensures you start your tenancy with a truly clean slate.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Timing Your Move Out Clean
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Book your move out clean for after all furniture and belongings are out of the unit. Trying to clean around boxes and furniture means things get missed and the job takes longer. Most professional cleaning teams can complete a thorough <Link href="/cleaning-services-north-vancouver/deep-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">deep clean</Link> in three to six hours depending on the size of the unit, and the best companies in North Vancouver can often accommodate bookings within 24 to 48 hours for move out situations.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Build cleaning time into your moving schedule rather than treating it as an afterthought. The cost of a professional clean is almost always less than the cost of losing even part of a damage deposit in the current North Vancouver rental market.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 border border-white/12 p-[36px] sm:p-[48px] flex flex-col gap-[18px] items-start">
              <p className="font-body font-extrabold text-[12px] tracking-[1.0px] uppercase text-[#93b8f5]">Mint Sanitary</p>
              <h3 className="font-display text-[24px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Protect Your Deposit With a Professional Move Out Clean
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-white/65">
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">Mint Sanitary</Link> provides thorough move out and move in cleaning across North Vancouver and the North Shore. We know exactly what inspectors look for and clean accordingly. Available seven days a week, including short-notice bookings. Free estimates provided.
              </p>
              <div className="flex flex-col sm:flex-row gap-[12px] mt-[4px]">
                <a href="/contact" className="inline-flex items-center justify-center bg-white text-[#253862] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:bg-white/90 transition-colors duration-200">
                  Book a Move Out Clean
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
