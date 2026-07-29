import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Choose a House Cleaning Service in North Vancouver | Mint Sanitary",
  description:
    "Not all house cleaning services in North Vancouver are equal. Here is what to look for, what to ask, and how to find a cleaning company you can actually trust.",
  alternates: {
    canonical: "/blog/how-to-choose-a-house-cleaning-service-north-vancouver",
  },
};

export default function HouseCleaningServicePost() {
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
            style={{ backgroundImage: "url('/mint-sanitary-professional-cleaning-north-vancouver-hero.jpg')" }}
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
              <span className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-white/50">House Cleaning</span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-white uppercase">
              How to Choose a House Cleaning Service in North Vancouver
            </h1>
            <p className="font-body text-[14px] text-white/55">April 15, 2025 · Mint Sanitary Team</p>
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
                North Vancouver has no shortage of cleaning companies. A quick search returns pages of options, and most of them say more or less the same things: experienced, reliable, eco-friendly, affordable. So how do you actually separate a company worth hiring from one that will leave you disappointed?
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                This guide covers what actually matters when choosing <Link href="/north-vancouver/house-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">house cleaning services in North Vancouver</strong></Link> so you can make a confident decision rather than just picking whoever appears first in the results.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/mint-sanitary-team-north-vancouver.jpg"
                  alt="Mint Sanitary professional cleaning team in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A professional cleaning team should be background-checked, insured, and trained before entering your home.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Start With Insurance and Background Checks
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                This is the single most important filter to apply before you even look at pricing. Any <Link href="/north-vancouver/commercial-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">cleaning company in North Vancouver</strong></Link> that is sending staff into your home should carry liability insurance and workers' compensation coverage. Ask directly: if something is damaged or someone is injured in your home, who pays?
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Background checks on all team members are equally non-negotiable. You are handing over access to your home, often when you are not there. Ask whether the company runs criminal background checks, how recently they were completed, and whether they apply to all staff or just some.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Understand What Is Actually Included
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                "Standard cleaning" means different things to different companies. Before booking, ask for an itemized list of what is and is not included in their standard service. Common sources of confusion include: inside the oven, inside the fridge, inside cabinets, laundry, dishes, window cleaning, and wall washing. These are usually add-ons, not standard inclusions, but some companies include some of them and not others.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Knowing this upfront prevents disappointment and lets you compare quotes accurately. Two quotes for a "standard clean" can vary significantly in scope even when the price is similar.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/recurring-cleaning-kitchen-north-vancouver.jpg"
                  alt="Professionally cleaned kitchen in a North Vancouver home"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A well-cleaned kitchen is one of the clearest indicators of a thorough cleaning service.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Look for Local Reviews, Not Just Star Ratings
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                A five-star average with three reviews is very different from a five-star average with 300 reviews. Look for companies that have substantial, detailed, recent reviews from customers in North Vancouver specifically. Reviews that mention specific team members, describe particular cleaning tasks, or reference follow-up communication are much more useful than short generic ones.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Check Google, not just the company's own website. Look for how the company responds to negative reviews as well. A thoughtful response to a complaint tells you a lot more about a company's values than their marketing copy does.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Ask About Products and Equipment
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Many North Vancouver households have young children, pets, or family members with sensitivities to harsh chemicals. It is worth asking directly what products a company uses, whether they are available to supply your own preferred products, and whether green or fragrance-free options are available without an upcharge.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Equipment matters too. Professional-grade HEPA vacuums make a real difference in air quality, especially for households with allergies or asthma. Ask whether the company uses HEPA filtration as standard or only on request.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/house-cleaning-bedroom-north-vancouver.jpg"
                  alt="Spotlessly cleaned master bedroom in a North Vancouver home"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A truly clean bedroom goes beyond making the bed. Dusting, vacuuming under furniture, and wiping surfaces all matter.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Prioritize Consistency Over Rock-Bottom Price
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                The cheapest <Link href="/north-vancouver/house-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">house cleaning service in North Vancouver</strong></Link> is rarely the best value. Low prices often mean high turnover, less training, or corners being cut on coverage and labour practices. A professional cleaning company that invests in its team, carries proper insurance, and maintains quality control will cost more. That cost usually pays for itself quickly in time saved, stress reduced, and the peace of mind of knowing the work was done properly.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Ask whether the same team will clean your home on recurring visits. Consistency matters. A team that knows your home, your preferences, and your priorities delivers meaningfully better results than a rotation of unfamiliar cleaners.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Communication Is a Strong Signal
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                How a company communicates before the first booking tells you a lot. Do they respond quickly? Are they clear about pricing and what is included? Do they ask about your home, your priorities, and any specific concerns? A company that takes time to understand what you need before they start is far more likely to deliver results you are actually happy with.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Look for a company that makes it easy to leave feedback and that follows up after the first visit. A post-clean check-in is a sign of a company that cares about getting it right, not just getting it done.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 border border-white/12 p-[36px] sm:p-[48px] flex flex-col gap-[18px] items-start">
              <p className="font-body font-extrabold text-[12px] tracking-[1.0px] uppercase text-[#93b8f5]">Mint Sanitary</p>
              <h3 className="font-display text-[24px] sm:text-[30px] leading-[1.2] text-white uppercase">
                North Vancouver's Trusted Cleaning Company
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-white/65">
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">Mint Sanitary</Link> is a fully insured, background-checked cleaning company serving homes across North Vancouver and the North Shore. We use eco-friendly products, send consistent teams, and offer free estimates with transparent pricing. Available seven days a week.
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
