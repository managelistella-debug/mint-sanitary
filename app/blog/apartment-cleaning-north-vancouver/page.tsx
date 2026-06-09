import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apartment Cleaning in North Vancouver: A Practical Guide for Renters | Mint Sanitary",
  description:
    "Whether you are maintaining a clean rental suite or preparing to move, here is a practical guide to apartment cleaning in North Vancouver for renters who want to protect their deposit and their living environment.",
};

export default function ApartmentCleaningPost() {
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
            style={{ backgroundImage: "url('/apartment-cleaning-north-vancouver-condo.jpg')" }}
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
              <span className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-white/50">Residential Cleaning</span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-white uppercase">
              Apartment Cleaning in North Vancouver: A Practical Guide for Renters
            </h1>
            <p className="font-body text-[14px] text-white/55">June 3, 2025 · Mint Sanitary Team</p>
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
                North Vancouver's rental market is one of the most competitive on the North Shore. Vacancy rates are low, rents are high, and damage deposits represent a significant amount of money. For renters, maintaining a clean apartment is not just about comfort. It is about protecting your deposit, preserving a good relationship with your landlord, and keeping your living environment genuinely healthy.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                This guide covers practical <Link href="/cleaning-services-north-vancouver" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">apartment cleaning in North Vancouver</strong></Link> for renters at every stage: moving in, maintaining throughout a tenancy, and preparing to move out.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/apartment-cleaning-north-vancouver-condo.jpg"
                  alt="Clean modern apartment in North Vancouver with mountain views"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A clean North Vancouver apartment is easier to maintain when you start with the right habits from day one.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Moving In: Do Not Skip the Initial Clean
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Even if your landlord or property manager tells you the unit was professionally cleaned before your arrival, it is worth booking your own <Link href="/cleaning-services-north-vancouver/move-in-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">move in clean</Link> with a professional <Link href="/cleaning-services-north-vancouver" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">cleaning service in North Vancouver</strong></Link>. This matters for two reasons. First, cleaning standards vary, and you may find areas that were not addressed. Second, having documented evidence of the unit's condition from a professional clean you arranged on move in day gives you strong protection if there are disputes about cleanliness at the end of your tenancy.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Take photos of the unit immediately after the move in clean, before any furniture is moved in. Date-stamped photos and a professional cleaning receipt together make a compelling record.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Bathroom Maintenance Is Where Most Tenants Fall Behind
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Bathrooms in North Vancouver apartments accumulate mould and mildew faster than in drier climates, particularly in units with inadequate ventilation. The combination of warm showers, cool Pacific air outside, and limited airflow in many older Lower Lonsdale and Lonsdale Quay buildings creates conditions where surface mould can become established in a matter of weeks.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Run the exhaust fan during and for at least ten minutes after every shower. Squeegee the shower walls after use to reduce the moisture available for mould growth. Wipe down faucets and fittings weekly to prevent limescale from hardening into something that requires professional descaling to remove. These habits take minutes and prevent hours of difficult cleaning later.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg"
                  alt="Deep cleaned bathroom tile and grout in a North Vancouver apartment"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Tile grout and caulking need regular attention to prevent mould from becoming established in damp climates like North Vancouver.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Kitchen Habits That Prevent Build-Up
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Grease is the primary source of difficult-to-clean kitchen residue. Wiping the stovetop and range hood filter after each use takes less than two minutes and prevents the kind of carbonized grease buildup that requires aggressive degreasing to address. Clean the inside of the microwave weekly. Wipe down cabinet fronts and handles monthly. Mop or vacuum under the stove and fridge every few months.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                None of these tasks are time-consuming on a regular schedule. The problem is always that they get skipped for weeks and then months, and what would have taken five minutes as a routine becomes a major project.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                When to Bring in a Professional
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Many North Vancouver renters who are not interested in regular professional cleaning still book a professional <Link href="/cleaning-services-north-vancouver" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">apartment cleaning in North Vancouver</strong></Link> once or twice a year for a thorough deep clean they cannot reasonably do themselves. An annual deep clean that covers oven interior, bathroom descaling, baseboards, window tracks, and behind appliances resets the baseline and makes regular maintenance between visits much easier.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                If your schedule or physical capacity makes regular apartment maintenance difficult, <Link href="/cleaning-services-north-vancouver/recurring-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">bi-weekly or monthly professional cleaning</Link> is a practical solution that is often more affordable than most people expect when weighed against the time it replaces.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/recurring-cleaning-kitchen-result-north-vancouver.jpg"
                  alt="Clean apartment kitchen result after professional cleaning in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Regular professional cleaning keeps apartment kitchens in genuinely good condition between tenants and throughout a tenancy.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Preparing to Move Out
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Schedule your <Link href="/cleaning-services-north-vancouver/move-out-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">move out clean</Link> for after all furniture and belongings are out of the unit. Trying to clean around boxes and furniture means things get missed. In British Columbia, a landlord can only deduct from your deposit for cleaning costs that go beyond normal wear and tear. A professional move out clean from a recognized <Link href="/cleaning-services-north-vancouver" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">North Vancouver cleaning service</strong></Link> brings the unit to a standard that is difficult to dispute. Get a receipt, take photos after the clean is complete, and keep both for your records.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                The cost of a professional move out clean in a typical North Vancouver one or two bedroom apartment is usually between $200 and $400. The current average one-bedroom damage deposit in North Vancouver is well over $1,000. The math is straightforward.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 border border-white/12 p-[36px] sm:p-[48px] flex flex-col gap-[18px] items-start">
              <p className="font-body font-extrabold text-[12px] tracking-[1.0px] uppercase text-[#93b8f5]">Mint Sanitary</p>
              <h3 className="font-display text-[24px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Apartment Cleaning Across North Vancouver
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-white/65">
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">Mint Sanitary</Link> provides move in, move out, deep, and recurring cleaning for apartments and condos across North Vancouver. Eco-friendly products, background-checked team, and flexible scheduling seven days a week. Free estimates with no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-[12px] mt-[4px]">
                <a href="/contact" className="inline-flex items-center justify-center bg-white text-[#253862] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:bg-white/90 transition-colors duration-200">
                  Get a Free Estimate
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
