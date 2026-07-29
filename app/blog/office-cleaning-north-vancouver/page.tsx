import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Office Cleaning in North Vancouver: What a Clean Workspace Does for Your Business | Mint Sanitary",
  description:
    "A clean office is not just about appearances. Here is how professional office cleaning in North Vancouver affects productivity, staff health, and the impression you make on clients.",
  alternates: {
    canonical: "/blog/office-cleaning-north-vancouver/",
  },
};

export default function OfficeCleaningPost() {
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
            style={{ backgroundImage: "url('/office-cleaning-north-vancouver-workspace.jpg')" }}
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
              <span className="font-body font-extrabold text-[11px] tracking-[1.0px] uppercase text-white/50">Commercial Cleaning</span>
            </div>
            <h1 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-white uppercase">
              Office Cleaning in North Vancouver: What a Clean Workspace Does for Your Business
            </h1>
            <p className="font-body text-[14px] text-white/55">May 14, 2025 · Mint Sanitary Team</p>
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
                Office cleanliness rarely shows up on a business plan, but it affects almost everything that does. How staff feel walking into work each morning, how clients perceive your operation during a meeting, how quickly illness spreads through a team, and how long your furniture and flooring hold up are all directly tied to the quality and consistency of your cleaning program.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                For businesses in North Vancouver, where a mix of corporate offices, professional service firms, clinics, and small studios operate across the Lower Lonsdale, Capilano, and Lynn Valley corridors, the standard for professional <Link href="/north-vancouver/office-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">office cleaning in North Vancouver</strong></Link> has risen considerably over the past few years.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/office-cleaning-north-vancouver-workspace.jpg"
                  alt="Professionally cleaned office workspace in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                A consistently clean workspace reduces illness transmission and helps teams stay focused and productive.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                The Health Argument Is Real
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Shared office surfaces are significant vectors for illness transmission. Keyboards, desk phones, door handles, elevator buttons, shared kitchen equipment, and washroom fixtures all carry bacterial and viral loads that regular use replenishes faster than most people expect. Studies in workplace environments consistently show that regular disinfection of high-touch surfaces reduces absenteeism, even outside of major illness seasons.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                For North Vancouver businesses where remote work means staff come into the office to collaborate rather than to sit in isolation, shared surfaces get heavier use than they did in traditional desk-bound setups. A professional <Link href="/north-vancouver/commercial-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">commercial cleaner in North Vancouver</strong></Link> with a structured disinfection protocol makes a measurable difference in how often illness cycles through your team.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                What Employees Notice
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                The state of an office communicates how much an employer values the people who work there. Dusty common areas, stained washroom fixtures, overflowing recycling bins, and a kitchen that never feels fully clean are things employees notice and feel, even when they do not explicitly complain about them. Clean, well-maintained spaces signal care and professionalism in a way that affects morale more than most managers realize.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                This is particularly relevant in North Vancouver's competitive hiring environment. When talented people have options about where they work, the physical environment matters. An office that consistently smells fresh, looks cared for, and functions cleanly is a quiet but real part of what makes a workplace feel worth showing up to.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/office-desk-disinfection-north-vancouver.jpg"
                  alt="Office desk disinfection service in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                High-touch surface disinfection is a critical part of any professional office cleaning program.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                What Clients See
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                A client walking into your office forms an impression in the first few seconds that is difficult to undo. Dusty windowsills, smudged glass doors, or a reception area that smells stale undermines the confidence that your marketing and team have built. Conversely, a clean, well-lit, fresh-smelling office reinforces trust before a word is spoken. For professional service businesses in North Vancouver, where client relationships often involve significant financial transactions or sensitive matters, that first impression carries real weight.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Getting the Frequency and Scope Right
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Most North Vancouver offices benefit from cleaning at least twice a week. High-use spaces like kitchens, washrooms, and reception areas often need daily attention, while lower-traffic areas like boardrooms or individual offices may only need weekly service. A good <Link href="/north-vancouver/commercial-cleaning" className="text-[#93b8f5] hover:text-white transition-colors"><strong className="text-white">commercial cleaning company in North Vancouver</strong></Link> will assess your space and usage patterns before recommending a schedule, rather than applying a one-size-fits-all approach.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                After-hours or early morning cleaning schedules are standard for most office cleaning programs. This avoids disruption during the workday and ensures surfaces are clean before staff arrive, which is particularly important for disinfection protocols where dwell time and complete coverage matter.
              </p>
            </div>

            <figure className="flex flex-col gap-[12px]">
              <div className="relative rounded-[14px] overflow-hidden" style={{ height: "420px" }}>
                <Image
                  src="/eco-friendly-office-cleaning-products-north-vancouver.jpg"
                  alt="Eco-friendly products used for office cleaning in North Vancouver"
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-body text-[13px] text-white/40 text-center italic">
                Eco-friendly commercial cleaning products protect indoor air quality and are safer for staff who use the space daily.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-[14px]">
              <h2 className="font-display text-[26px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Eco-Friendly Products in Commercial Spaces
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Many North Vancouver businesses have commitments to sustainability that extend into their operations. Using a cleaning company that uses plant-based, low-VOC products means the staff who occupy the space daily are not breathing in chemical residue from cleaning products applied the night before. It also aligns with the values many North Shore businesses project to their clients and team.
              </p>
              <p className="font-body text-[17px] leading-[1.75] text-white/75">
                Effective eco-friendly cleaning products have improved substantially. The tradeoff between green and effective that existed a decade ago largely does not anymore, and a professional cleaning company operating with current products can deliver both.
              </p>
            </div>

            <div className="rounded-[16px] bg-white/6 border border-white/12 p-[36px] sm:p-[48px] flex flex-col gap-[18px] items-start">
              <p className="font-body font-extrabold text-[12px] tracking-[1.0px] uppercase text-[#93b8f5]">Mint Sanitary</p>
              <h3 className="font-display text-[24px] sm:text-[30px] leading-[1.2] text-white uppercase">
                Commercial Cleaning Tailored to Your North Vancouver Business
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-white/65">
                <Link href="/" className="text-[#93b8f5] font-semibold hover:text-white transition-colors">Mint Sanitary</Link> provides after-hours and flexible-schedule office cleaning across North Vancouver. Eco-friendly products, fully insured team, and a cleaning program built around your space and how you use it. Free estimates with no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-[12px] mt-[4px]">
                <a href="/contact" className="inline-flex items-center justify-center bg-white text-[#253862] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:bg-white/90 transition-colors duration-200">
                  Get a Commercial Cleaning Quote
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
