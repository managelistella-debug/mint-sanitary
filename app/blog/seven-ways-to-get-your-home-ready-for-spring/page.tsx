import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seven Ways to Get Your Home Ready for Spring | Mint Sanitary",
  description:
    "Spring is the perfect time to refresh your home inside and out. Here are seven ways to get your house ready for the season, including expert house cleaning in North Vancouver.",
  alternates: {
    canonical: "/blog/seven-ways-to-get-your-home-ready-for-spring/",
  },
};

export default function SpringCleaningPost() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ marginTop: "77px", minHeight: "340px", height: "460px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/spring-cleaned-living-room-north-vancouver.jpg')" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,37,64,0.93) 0%, rgba(10,37,64,0.60) 55%, rgba(10,37,64,0.30) 100%)",
            }}
          />
          <div className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[14px] items-center text-center max-w-[760px]">
            <div className="flex items-center gap-[8px]">
              <Link href="/blog" className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-[#c8e0fd] hover:text-white transition-colors">
                Blog
              </Link>
              <span className="text-white/30 text-[12px]">/</span>
              <span className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-white/50">
                Seasonal Cleaning
              </span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-white uppercase">
              Seven Ways to Get Your Home Ready for Spring
            </h1>
            <p className="font-body text-[14px] text-white/55">April 8, 2025 · Mint Sanitary Team</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="rgba(37,56,98,0.8)" />
            </svg>
          </div>
        </section>

        {/* Article */}
        <article className="py-[80px] md:py-[100px] bg-[#253862]">
          <div className="px-4 sm:px-8 md:px-[60px] max-w-[820px] mx-auto flex flex-col gap-[48px]">

            {/* Intro */}
            <div className="flex flex-col gap-[20px]">
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Spring arrives slowly on the North Shore. The mountains are still capped in white, but the days are getting longer, the tulips are pushing up through the garden beds, and that unmistakable feeling of a fresh start is in the air. For homeowners, spring is the natural moment to reset. After a long Pacific Northwest winter of muddy boots, wet umbrellas, and sealed-up windows, your home deserves a thorough refresh.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Whether you tackle it yourself or bring in professionals for <Link href="/north-vancouver/house-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">house cleaning in North Vancouver</strong></Link>, here are seven high-impact ways to get your home truly ready for the season ahead.
              </p>
            </div>

            {/* Image 1 */}
            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/spring-cleaned-living-room-north-vancouver.jpg"
                  alt="Freshly spring-cleaned bright living room with natural light and clean windows"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A freshly cleaned living room makes the whole home feel lighter and more welcoming as spring arrives.
              </figcaption>
            </figure>

            {/* Tip 1 */}
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                1. Improve Curb Appeal
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                First impressions start at the curb. After months of fall leaves, winter grime, and rain-soaked debris, your driveway, walkways, and exterior surfaces need attention before anything else. Start by clearing out dead plants and last year's mulch from the flower beds, and replace them with spring annuals like pansies, daffodils, or ornamental kale. These are hardy options well-suited to North Vancouver's mild but unpredictable spring weather.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Power-wash your driveway, front pathway, and any exposed decking to blast away winter's moss, algae, and surface staining. Don't forget your front door. A fresh coat of paint or a thorough wipe-down, new door hardware, and a clean doormat signal care and intention before anyone steps inside.
              </p>
            </div>

            {/* Image 2 */}
            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/spring-curb-appeal-north-vancouver-home.jpg"
                  alt="Freshly maintained North Vancouver home exterior with spring flowers and clean driveway"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Improved curb appeal starts with clean surfaces, tidy beds, and a welcoming front entrance.
              </figcaption>
            </figure>

            {/* Tip 2 */}
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                2. Do a True Deep Clean Indoors
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Spring cleaning is not a quick vacuum and a wipe of the counters. A real spring deep clean means going into the spaces that accumulate grime all winter: behind the fridge and stove, inside kitchen cabinets, the tracks of sliding doors and windows, ceiling fans, light fixtures, and baseboards throughout. Bathrooms should be descaled thoroughly. North Vancouver's water is relatively mineral-rich, and lime buildup around faucets and showerheads can become significant over a winter.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                If a full deep clean feels overwhelming, that is exactly what a professional <Link href="/north-vancouver/deep-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">deep cleaning service</Link> like{" "}
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">
                  Mint Sanitary
                </Link>{" "}
                is designed for. Our team handles the grout, the grease, the buildup, and the forgotten corners so you can spend the season enjoying your home rather than cleaning it.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                3. Wash Your Windows Inside and Out
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                There is no faster way to transform how your home looks and feels than clean windows. After months of rain, condensation, and road-splash, even modest streaking significantly dulls the natural light coming into your home. Open the windows, wipe down the frames and tracks, and clean both the interior and exterior glass. For upper-story windows, a professional <Link href="/north-vancouver/residential-window-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">window cleaning service</Link> can do the job safely and streak-free in a fraction of the time.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Clean windows also matter for plants. If you have been keeping indoor plants over winter, moving them into cleaner light can help them recover from the shorter days and dry indoor air of the heating season.
              </p>
            </div>

            {/* Image 3 */}
            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/deep-cleaned-kitchen-north-vancouver.jpg"
                  alt="Deep cleaned kitchen in a North Vancouver home by Mint Sanitary"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A professionally deep-cleaned kitchen removes months of grease, buildup, and hidden grime.
              </figcaption>
            </figure>

            {/* Tip 4 */}
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                4. Declutter and Donate
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Spring is the best time to take stock of what you have accumulated over the past year. Work through closets, storage areas, and the garage with three categories: keep, donate, and discard. In North Vancouver, you can drop usable goods at local organizations like the Harvest Project or Thrift for the North Shore. Electronics and hazardous household waste can be dropped off at the RCBC depot on Mountain Highway.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                A decluttered home is also dramatically easier to keep clean. Fewer surfaces for dust to settle on, more room to vacuum and mop properly, and far less visual noise day to day.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                5. Refresh Your Soft Furnishings
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Carpets, rugs, upholstery, drapes, and pillows absorb a winter's worth of dust, pet dander, and moisture. Spring is the ideal time to have carpets and area rugs professionally cleaned. The weather is dry enough for quick drying, and you will notice the difference immediately in how fresh the home smells. Throw your duvets, decorative pillows, and machine-washable curtains through the wash. If your drapes or upholstery are not machine-washable, a professional <Link href="/north-vancouver/upholstery-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">upholstery cleaning service</Link> can restore them safely.
              </p>
            </div>

            {/* Tip 6 */}
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                6. Check Your Gutters and Roof
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                North Vancouver receives some of the highest rainfall in Metro Vancouver, and gutters work hard all winter. Spring is the right moment to clear out any debris, check for sagging sections, and inspect downspout drainage to make sure water is being directed away from your foundation. While you are up there, scan the roof for missing or lifted shingles and check around vents and flashings for any gaps that could allow moisture in.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Clogged gutters are one of the leading causes of water damage in residential properties. A straightforward <Link href="/north-vancouver/gutter-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">gutter cleaning</Link> in spring can prevent expensive repairs down the line.
              </p>
            </div>

            {/* Image 4 */}
            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/eco-friendly-cleaning-products-north-vancouver.jpg"
                  alt="Eco-friendly cleaning products used by Mint Sanitary in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Mint Sanitary uses plant-based, eco-friendly cleaning products that are safe for your family and the environment.
              </figcaption>
            </figure>

            {/* Tip 7 */}
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                7. Set Up a Maintenance Cleaning Routine
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                The best way to maintain the results of a thorough spring clean is to never let grime accumulate to the same level again. Setting up a regular bi-weekly or monthly house cleaning routine keeps your home consistently fresh without the need for marathon cleaning sessions. Many North Vancouver homeowners find that a professional <Link href="/north-vancouver/recurring-cleaning" className="text-[#93b8f5] hover:text-white transition-colors">recurring clean</Link> every two to four weeks gives them back significant time while keeping their home in genuinely good shape year-round.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Create simple daily habits too: wipe counters after cooking, squeegee the shower after use, and set a ten-minute tidy before bed. Small consistent actions make the biggest difference in maintaining a clean home between professional visits.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-[16px] bg-white/6 border border-white/12 p-[36px] sm:p-[48px] flex flex-col gap-[18px] items-start">
              <p className="font-body font-extrabold text-[12px] tracking-[1.0px] uppercase text-[#93b8f5]">
                Ready to get started?
              </p>
              <h3 className="font-display text-[24px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Let Mint Handle the Heavy Lifting
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-white/65">
                Spring cleaning is a big job, especially when you are doing it right. The team at{" "}
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">
                  Mint Sanitary
                </Link>{" "}
                provides thorough, eco-friendly <strong className="text-white">house cleaning in North Vancouver</strong> for homes of all sizes. Whether you need a one-time spring deep clean, a carpet refresh, or a recurring maintenance schedule, we are here seven days a week to make your home feel its absolute best.
              </p>
              <div className="flex flex-col sm:flex-row gap-[12px] mt-[4px]">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#253862] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:bg-white/90 transition-colors duration-200"
                >
                  Get a Free Estimate
                </a>
                <a
                  href="tel:+12366883248"
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:border-white hover:bg-white/10 transition-colors duration-200"
                >
                  Call 236-688-3248
                </a>
              </div>
            </div>

            {/* Back */}
            <div className="pt-[8px]">
              <Link
                href="/blog"
                className="font-body font-extrabold text-[13px] tracking-[0.32px] uppercase text-[#93b8f5] hover:text-white transition-colors"
              >
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
