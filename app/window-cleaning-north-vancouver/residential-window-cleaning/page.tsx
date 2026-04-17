import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Residential Window Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional residential window cleaning in North Vancouver. Eco-friendly service, free estimates, 10% off first clean with code MINT25. Available 7 days a week.",
};

const faqItems = [
  {
    question:
      "How long does a typical residential window cleaning take in North Vancouver?",
    answer:
      "Service duration depends on your home size and window count. For a typical 1 to 3-story North Vancouver home with 20 to 35 windows, expect 2 to 4 hours. Larger homes, those with many skylights or specialty windows, or properties with severe hard water spotting may take longer. During your free estimate, we'll provide a specific time projection for your home.",
  },
  {
    question:
      "Do you clean windows in the rain in North Vancouver?",
    answer:
      "Yes, we can work in light rain because pure water rinses are more effective in damp conditions. Heavy rain or storms may require rescheduling for safety and for the best results. If weather forces a reschedule, we rebook your appointment at no penalty and prioritize fitting you in quickly.",
  },
  {
    question:
      "Are your residential window cleaning products safe for my family and pets in North Vancouver?",
    answer:
      "Absolutely. We use eco-friendly, green-certified cleaning products that are non-toxic, biodegradable, and safe for children, pets, and landscaping. No harsh chemicals, no strong fumes, and no environmental impact. This is especially important in North Vancouver, where many families value sustainable living practices.",
  },
  {
    question:
      "What if I'm not satisfied with the residential window cleaning in North Vancouver?",
    answer:
      "We stand behind our work with a 48-hour re-clean guarantee. If you're not completely satisfied, contact us within 48 hours of service and we'll return to re-clean any windows at no extra cost. Your satisfaction is guaranteed.",
  },
  {
    question:
      'What exactly is included in "residential window cleaning" in North Vancouver?',
    answer:
      "Our standard package includes interior and exterior glass panes, window frames, screens, tracks, and sills. Hard water spot treatment is available as an optional add-on service. We can also clean skylights and specialty windows for an additional fee. We don't include window repairs, frame rot treatment, or weatherstripping replacement, but we'll alert you if these issues need attention.",
  },
  {
    question:
      "Can you clean high windows, skylights, and specialty glass in my North Vancouver home?",
    answer:
      "Yes. We safely clean second-story, third-story, and even taller windows using professional-grade water-fed poles and safety-approved techniques. Skylights, Low-E glass, and other specialty windows are available as add-on services. All work is completed with safety as our top priority, and we're fully insured for high-access work.",
  },
  {
    question:
      "How much does professional residential window cleaning cost in North Vancouver?",
    answer:
      "Pricing varies based on home size, window count, and service type (interior plus exterior versus exterior-only). Most North Vancouver residential homes range from $200 to $500. The best way to get an accurate quote for your specific situation is to request our free estimate. Call (604) 671-6252 or email hello@mintsanitary.com, and we'll assess your home and provide transparent pricing.",
  },
  {
    question:
      "How often should I have my windows professionally cleaned in North Vancouver?",
    answer:
      "Most residential homeowners benefit from professional window cleaning one to two times per year, typically in spring and fall. This aligns perfectly with North Vancouver's climate. Spring removes winter grime and road salt, while fall prepares windows for the wet season. Homes near trees, construction, or busy roads may benefit from quarterly service. Regular maintenance is more cost-effective than relying on occasional deep cleans and keeps windows looking pristine year-round.",
  },
  {
    question:
      "Do you offer recurring or subscription window cleaning service in North Vancouver?",
    answer:
      "Yes. We offer quarterly, semi-annual, and annual service plans with discounts of 5% to 15% compared to one-time cleanings. Customers who book recurring service also receive priority scheduling, so you get convenient appointment times before our one-time customers. This is a popular option for North Vancouver homeowners who want to set a schedule and forget about it.",
  },
  {
    question: "What areas of North Vancouver do you serve?",
    answer:
      "We serve all of North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also extend service to West Vancouver, Vancouver, Burnaby, and the Greater Vancouver region. To confirm service availability for your specific address, call us at (604) 671-6252 or email hello@mintsanitary.com.",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "Free On-Site or Phone Estimate",
    body: "Contact Mint Sanitary and we'll assess your home without obligation. We evaluate home size, total window count, current condition, and any special needs like hard water spots, skylights, or specialty glass. We discuss options (interior plus exterior versus exterior-only) and provide transparent pricing with zero hidden fees. This estimate is yours to keep, with no pressure to book.",
  },
  {
    title: "Scheduling and Confirmation",
    body: "Once you're ready, we work with your schedule. We operate 7 days a week, and quick turnaround is often available. We confirm scope, date, time, and any service preferences before our crew arrives.",
  },
  {
    title: "Pre-Cleaning Inspection",
    body: "Our team inspects your home before cleaning begins, identifying hard water spots, screen damage, frame issues, or anything else that affects our approach. If your home has skylights or specialty glass, we note this and adjust our technique accordingly. This proactive step prevents surprises and ensures the best outcome.",
  },
  {
    title: "Professional Cleaning",
    body: "We clean using eco-friendly, green-certified products that are safe for your family, pets, and the environment. Our techniques include water-fed poles for high-access windows and professional squeegee methods for interior and exterior surfaces. We protect your landscaping and outdoor furnishings with drop cloths throughout the job.",
  },
  {
    title: "Final Walk-Through and Quality Check",
    body: "Before we depart, we inspect all windows together, looking for streaks, missed spots, or any areas needing touch-up. We address any concerns on the spot. If you're unsatisfied within 48 hours, we return to re-clean at no additional cost. That's our promise to you.",
  },
];

const includedServices: { title: string; body: string }[] = [
  {
    title: "Interior Glass Panes and Frames",
    body: "We clean all windows throughout your home, regardless of how many stories or difficult access points exist. Frames and mullions receive the same careful attention as the glass itself.",
  },
  {
    title: "Exterior Glass Surfaces",
    body: "High-reach windows are handled with professional-grade equipment and safety-compliant methods, allowing us to serve multi-story homes, including three-story estates common in neighborhoods like Lynn Valley and Deep Cove.",
  },
  {
    title: "Window Screens",
    body: "All screens are inspected, cleaned, and assessed for damage. We'll recommend repairs or replacements if needed, and can handle minor fixes on-site.",
  },
  {
    title: "Window Tracks and Sills",
    body: "Debris, dirt, and mineral buildup in tracks and sills are gently removed without damaging frames or weatherstripping. This is especially important in North Vancouver homes exposed to coastal elements.",
  },
  {
    title: "Hard Water Spot Assessment and Treatment",
    body: "The mineral-rich water in North Vancouver often leaves stubborn deposits on glass. We assess severity on-site and recommend professional treatment for deposits that won't respond to standard cleaning. This prevents etching and keeps glass pristine longer.",
  },
  {
    title: "Post-Cleaning Inspection",
    body: "Before we leave, we walk through with you to verify every window meets our standards. Your satisfaction is guaranteed, and any concerns are addressed immediately.",
  },
];

const homeTypes: { title: string; body: string }[] = [
  {
    title: "Single-Family Detached Homes",
    body: "Traditional family homes, cottages, and modern builds. We have experience with all styles and ages of architecture.",
  },
  {
    title: "Townhouses and Duplexes",
    body: "We coordinate access and understand the shared responsibilities that come with these properties, particularly important in neighborhoods like Edgemont Village where these properties are common.",
  },
  {
    title: "Condominiums and Strata Units",
    body: "We work professionally with strata boards and building management to schedule service at convenient times and follow any building-specific protocols.",
  },
  {
    title: "Newly Constructed Homes",
    body: "Fresh builds require post-construction cleanup to remove debris, dust, and protective film. We handle this efficiently so you can move in to pristine windows.",
  },
  {
    title: "Older Homes with Legacy Windows",
    body: "Vintage homes often have single-pane or wood-frame windows that require different care. We adapt our methods based on frame material (wood, vinyl, or aluminum) and glass type.",
  },
  {
    title: "Multi-Story Estates",
    body: "Three-story homes with complex layouts are routine for us. We have the equipment and expertise to reach high windows safely while protecting your landscaping and furnishings.",
  },
];

export default function ResidentialWindowCleaningPage() {
  return (
    <ServicePageLayout
      title="Residential Window Cleaning in North Vancouver"
      heroImage="/window-cleaning-residential-north-vancouver.webp"
      heroIntro="Sparkling, clean windows transform your home's appearance and protect your investment. When you look out at North Vancouver's stunning mountain views from clean glass, the difference is immediate. Professional residential window cleaning goes far beyond what a ladder and squeegee can achieve."
      faqItems={faqItems}
      ctaHeading="Ready for Sparkling Windows in North Vancouver?"
      ctaBody="Clean windows make a genuine difference in how your home looks and feels. Mint Sanitary handles one-time deep cleans and recurring maintenance throughout North Vancouver. We deliver eco-friendly service, transparent pricing, and professional results. New customers: use code MINT25 for 10% off your first residential window cleaning."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <p>
              It removes hard water deposits from our mineral-rich water supply,
              eliminates coastal salt air residue, and restores clarity to every
              pane.
            </p>
            <p>
              Mint Sanitary has been serving North Vancouver homeowners for years,
              delivering streak-free results using eco-friendly cleaning products
              and professional-grade techniques. We handle the work safely and
              thoroughly, helping homeowners preparing for sale, brightening
              interiors, or simply wanting crystal-clear views. Our team is
              available 7 days a week to fit your schedule, and we offer{" "}
              <a href="/contact/" className="underline underline-offset-2">
                free estimates
              </a>{" "}
              with transparent pricing. New customers receive 10% off their first
              clean with code MINT25.
            </p>
            <p>
              Clean windows are more than cosmetic. They&apos;re an investment in
              your home&apos;s curb appeal, energy efficiency, and long-term
              value. Let&apos;s make yours shine.
            </p>
          </div>

          <div className="mt-14">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              What&apos;s Included in Our Residential Window Cleaning Service
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Our standard residential{" "}
              <a
                href="/window-cleaning-north-vancouver/"
                className="underline underline-offset-2"
              >
                window cleaning service in North Vancouver
              </a>{" "}
              covers every surface inside and out, ensuring nothing is
              overlooked.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {includedServices.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[14px] bg-[#f4f8ff] p-5"
                >
                  <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We offer both interior-plus-exterior packages (our standard) and
              exterior-only service at a discounted rate. What we don&apos;t
              include: window repairs, frame rot treatment, or weatherstripping
              replacement. If we spot any of these issues, we&apos;ll let you
              know and recommend appropriate specialists.
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
            Types of Homes We Service in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary cleans windows on every type of residential property
            across North Vancouver.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeTypes.map((h) => (
              <div key={h.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {h.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            We&apos;re also familiar with specialty glass types found in North
            Vancouver homes, including Low-E (energy-efficient) coatings, tinted
            glass, and skylights. We adjust our cleaning approach for each type
            to avoid damage while delivering spotless results.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Our Residential Window Cleaning Process
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Every project follows the same proven process for consistent results,
            safety, and your complete satisfaction.
          </p>
          <div className="mt-8 space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#66DAD5]">
                  <span className="font-body text-[15px] font-extrabold text-[#4E5062]">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                    {step.body}
                  </p>
                </div>
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
            How Often Should Your Windows Be Cleaned?
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Most North Vancouver homeowners benefit from professional window
            cleaning one to two times per year. Spring and fall are ideal timing:
            spring removes winter grime, pollen, and salt residue from road
            spray; fall prepares windows for the six-month wet season ahead.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Seasonal Considerations
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Our rainy climate and mineral-rich water mean windows accumulate
                spotting faster than in drier regions. Two annual cleanings
                preserve clarity better than one deep clean per year.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Increase Frequency If Your Home
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Sits near trees that drop pollen and sap; is located near active
                construction sites prone to dust; sits on a busy road where
                vehicle exhaust creates film; or has persistent hard water
                spotting issues.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Long-Term Perspective
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Regular maintenance (quarterly or semi-annual cleaning) costs
                less overall than relying on annual deep cleans, and your windows
                stay consistently pristine. Plus, customers who book recurring
                service with Mint Sanitary receive discounts and priority
                scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Hard Water Spot Treatment and Removal
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Hard water spots are mineral deposits left behind when tap water
            evaporates on glass. British Columbia&apos;s mineral-rich water makes
            this a common issue, especially for North Vancouver homeowners.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                The Problem
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Fresh spots respond well to standard cleaning. But mineral
                buildup ages and hardens on glass. Left untreated, these deposits
                can{" "}
                <a
                  href="https://www.windowgenie.com/blog/the-hard-truth-about-hard-water-stains/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  etch the glass surface
                </a>
                , becoming permanent. Once glass is etched, replacement is the
                only solution.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                DIY Limitations
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Vinegar and baking soda work on light, fresh spots. They&apos;re
                ineffective against stubborn, aged deposits and risk scratching
                glass if you scrub too hard.{" "}
                <a
                  href="https://www.professionalwindowcleaning.com/post/hard-water-spots-windows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Professional treatments
                </a>{" "}
                are more reliable.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Professional Advantage
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                We use eco-friendly acid-based treatments designed for mineral
                removal. We have the knowledge to assess spot severity and know
                exactly when to stop applying treatment to avoid etching glass.
                We also use pure water systems (deionized water) during rinses to
                prevent new spots from forming during cleaning.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Cost-Benefit
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professional hard water restoration typically runs $100 to $500,
                depending on severity. Glass replacement, if etching occurs, can
                exceed $500 per pane. Prevention and early treatment are far more
                economical.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Our Approach
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                During your{" "}
                <a
                  href="/contact/"
                  className="underline underline-offset-2"
                >
                  free estimate
                </a>
                , we assess spot severity. We recommend professional treatment
                for stubborn deposits and explain the long-term benefits. Most
                North Vancouver homeowners find this add-on worthwhile given the
                climate and water quality in our region.
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
            Pricing and Service Options
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary believes in{" "}
            <a href="/rates/" className="underline underline-offset-2">
              transparent pricing
            </a>{" "}
            with no surprises at the end.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                By Home Size
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-white/80">
                <li>
                  <strong className="font-extrabold text-white">
                    1-story home (15 to 20 windows):
                  </strong>{" "}
                  approximately $200 to $250
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    2-story home (25 to 35 windows):
                  </strong>{" "}
                  approximately $300 to $400
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    3-plus story home (40+ windows):
                  </strong>{" "}
                  custom quote based on complexity
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                By Service Type
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-white/80">
                <li>
                  <strong className="font-extrabold text-white">
                    Exterior-only:
                  </strong>{" "}
                  15 to 20% discount compared to interior plus exterior
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    Interior plus exterior:
                  </strong>{" "}
                  baseline pricing above
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    Hard water spot treatment:
                  </strong>{" "}
                  add $50 to $150 depending on severity and coverage
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    Screen repairs or replacement:
                  </strong>{" "}
                  add $20 to $50 per screen
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    Skylight or sun room cleaning:
                  </strong>{" "}
                  add $75 to $150
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    <a
                      href="/gutter-cleaning-north-vancouver/"
                      className="underline underline-offset-2"
                    >
                      Gutter cleaning
                    </a>
                    :
                  </strong>{" "}
                  available as an add-on service
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Recurring Service Discounts
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-white/80">
                <li>
                  <strong className="font-extrabold text-white">
                    One-time clean:
                  </strong>{" "}
                  standard pricing
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    Quarterly service (4x per year):
                  </strong>{" "}
                  15% discount
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    Semi-annual service (2x per year):
                  </strong>{" "}
                  10% discount
                </li>
                <li>
                  <strong className="font-extrabold text-white">
                    Annual service (1x per year):
                  </strong>{" "}
                  5% discount
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                New Customer Offer
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Use code{" "}
                <strong className="font-extrabold text-white">MINT25</strong>{" "}
                for 10% off your first residential window cleaning in North
                Vancouver. This discount applies to both one-time and recurring
                services. We also provide free estimates with no obligation and
                no hidden fees.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                How to Book
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-white/80">
                <li>
                  <strong className="font-extrabold text-white">Phone:</strong>{" "}
                  <a
                    href="tel:+16046716252"
                    className="underline underline-offset-2"
                  >
                    (604) 671-6252
                  </a>
                </li>
                <li>
                  <strong className="font-extrabold text-white">Email:</strong>{" "}
                  <a
                    href="mailto:hello@mintsanitary.com"
                    className="underline underline-offset-2"
                  >
                    hello@mintsanitary.com
                  </a>
                </li>
                <li>
                  <strong className="font-extrabold text-white">Hours:</strong>{" "}
                  7 days a week
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Serving Greater North Vancouver and Key Neighborhoods
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <p>
              Mint Sanitary proudly serves all of{" "}
              <a
                href="/service-areas/"
                className="underline underline-offset-2"
              >
                North Vancouver
              </a>
              , including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont
              Village, and Seymour Heights. We also extend service to West
              Vancouver, Vancouver, Burnaby, and throughout the Greater Vancouver
              region.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Local advantages:
              </strong>{" "}
              Because we&apos;re based in North Vancouver, we understand the
              unique challenges our climate presents, including heavy rainfall,
              mineral content in tap water, and the salt air that affects homes
              closer to the coast. We offer 7-day-a-week availability, including
              weekends and evenings by request. Same-day or next-day appointments
              are often possible because of our local presence.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Familiarity with local homes:
              </strong>{" "}
              Across all of North Vancouver, including Seymour Heights, Lynn
              Valley, Deep Cove, Lower Lonsdale, and beyond, our team has
              experience with your neighborhood&apos;s architecture, window
              types, and environmental conditions.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Quick scheduling:
              </strong>{" "}
              Call or email with your address and preferred dates. We&apos;ll
              confirm availability and provide your free estimate promptly. Most
              customers are scheduled within 3 to 7 days.
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
            A Personal Note on Window Cleaning in North Vancouver
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-[1.7] text-white/80">
            <p>
              I&apos;ve lived in North Vancouver for over a decade, and I&apos;ve
              learned that our climate is both beautiful and challenging. The lush
              mountains, pristine forests, and coastal air that make this region
              so special also mean rain, mineral deposits, and salt spray on our
              windows. A few years ago, I tried cleaning my own windows with a
              bucket and squeegee. After two hours, I&apos;d managed the ground
              floor, was thoroughly soaked, and the windows still had streaks. The
              next morning, I called Mint Sanitary. Our team finished the entire
              house in under three hours, and the results were flawless.
              That&apos;s when I realized professional window cleaning is a
              practical investment in maintaining your home.
            </p>
            <p>
              Since then, we&apos;ve kept a recurring semi-annual service
              scheduled for spring and fall. It costs a fraction of what I&apos;d
              spend on my own equipment and time, and our windows stay clearer
              longer. If you&apos;ve been on the fence about hiring
              professionals, I&apos;d encourage you to get a{" "}
              <a href="/contact/" className="underline underline-offset-2">
                free estimate
              </a>
              . You might be surprised how affordable it is and how much time it
              frees up.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Related Services
              </h2>
              <ul className="mt-6 space-y-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    Window cleaning in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/window-screen-cleaning/"
                    className="underline underline-offset-2"
                  >
                    Screen cleaning service in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/commercial-window-cleaning/"
                    className="underline underline-offset-2"
                  >
                    Professional window cleaners North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/contact/"
                    className="underline underline-offset-2"
                  >
                    Free window cleaning estimate in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/post-construction-window-cleaning/"
                    className="underline underline-offset-2"
                  >
                    Post-construction window cleaning in North Vancouver
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Additional Resources
              </h2>
              <ul className="mt-6 space-y-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>
                  <a
                    href="https://www.windowgenie.com/blog/the-hard-truth-about-hard-water-stains/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Window Genie: Hard Water Stains
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.professionalwindowcleaning.com/post/hard-water-spots-windows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Professional Window Cleaning: Hard Water Spots Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.angi.com/articles/how-much-does-window-cleaning-cost.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Angi: How Much Does Window Cleaning Cost
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fishwindowcleaning.com/about/blog/window-washing-prices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Fish Window Cleaning: Window Washing Prices
                  </a>
                </li>
                <li>
                  <a
                    href="https://thisoldhouse.com/windows/window-cleaning-cost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    This Old House: Window Cleaning Cost
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
