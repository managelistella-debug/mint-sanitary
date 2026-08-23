import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/gym-cleaning-original
// so the CMS version at /north-vancouver/gym-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Gym Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Trusted gym cleaning in North Vancouver. Daily disinfection, deep cleaning, and odor control that keeps members and equipment protected. Free estimate.",
  robots: { index: false, follow: false },
};

const preventionItems = [
  {
    title: "MRSA and Staph Infections",
    body: "These spread through skin to skin contact and shared equipment like benches and mats. Regular disinfection of high contact surfaces cuts the risk of transmission between members at your North Vancouver facility. The CDC's guidance for athletic facilities outlines why this matters for any shared training space.",
  },
  {
    title: "Athlete's Foot and Ringworm",
    body: "Fungal infections thrive in warm, moist locker rooms and showers, and North Vancouver's damp climate for much of the year doesn't help. Floors, benches, and shower stalls need targeted treatment, not a quick mop pass.",
  },
  {
    title: "Respiratory Infections",
    body: "Group fitness classes and spin studios pack a lot of heavy breathing into a small room. This matters even more for North Vancouver studios running back to back classes through the evening rush.",
  },
  {
    title: "General Infection Spread",
    body: "Strep, minor cuts, and everyday illness move faster through a gym than most owners realize, and members with compromised immune systems benefit from a North Vancouver facility that holds itself to a higher standard.",
  },
];

const dailyServices = [
  "Equipment Sanitization. Free weights, machines, benches, grips, handles, and barbells get sprayed, given time for the disinfectant to work, then wiped again.",
  "Cardio Equipment Disinfection. Treadmills, ellipticals, rowing machines, and stationary bikes, including screens, buttons, handrails, and foot platforms.",
  "Floor Care. Sweeping, vacuuming, and mopping throughout, with extra attention in locker rooms to control moisture and prevent odor buildup, which matters through North Vancouver's wetter months.",
  "High-Touch Surface Disinfection. Door handles, light switches, water fountain buttons, entrance areas, and the reception desk.",
  "Restroom Sanitation. Toilets, sinks, mirrors, soap dispensers, and paper towel holders, with floors mopped and odor control applied.",
  "Reception Area Cleaning. Desks, chairs, and common areas kept presentable for the first impression members get walking in off the street.",
  "Trash Removal. Bins emptied and liners replaced throughout the facility.",
];

const deepServices = [
  "Locker Room and Shower Area Deep Cleaning. Behind equipment, disinfecting benches, and treating shower corners to stop mold before it starts, an important step given how much rain North Vancouver gets.",
  "Carpet Extraction. Weekly or monthly extraction in cardio areas and group fitness studios, where foot traffic and sweat build up fastest.",
  "Mat and Yoga Studio Disinfection. Yoga mats, resistance bands, and studio floors get their own protocol, since members lie directly on these surfaces.",
  "Group Fitness Class Room Sanitization. Mirrors, floors, and shared equipment cleaned between classes.",
  "Odor Control. Enzyme-based treatments break down sweat residue at the source instead of masking it with fragrance.",
  "Post-Outbreak Sanitization. Emergency deep disinfection if a member reports ringworm, MRSA, or another infection tied to your North Vancouver facility.",
];

const businessBenefits = [
  {
    title: "Member Retention",
    body: "A clean facility leads to longer memberships and better reviews. North Vancouver members notice when equipment looks and smells clean, and they notice just as fast when it doesn't.",
  },
  {
    title: "New Member Acquisition",
    body: "Word of mouth and online reviews improve when a facility is visibly well kept, and North Vancouver has no shortage of gyms competing for the same members.",
  },
  {
    title: "Staff Morale",
    body: "When cleaning is handled by a professional team, your North Vancouver staff aren't spending part of every shift wiping down sweat. That time goes back into coaching and member experience.",
  },
  {
    title: "Equipment Longevity",
    body: "Regular professional disinfection extends machine lifespan by 20 to 30%, because salt, sweat, and dirt don't get the chance to corrode components over time. For a North Vancouver facility with $50,000 to $100,000 invested in machines, that's a meaningful amount of equipment life saved.",
  },
];

const processSteps = [
  { title: "Initial Assessment and Custom Plan Development", body: "A visit to your North Vancouver facility to measure square footage, count equipment, identify high risk areas, and learn peak hours and member demographics. From there, we design a schedule that fits how your gym operates." },
  { title: "Pre-Service Equipment and Staff Setup", body: "Professional disinfectants, microfiber cloths, and gym-certified spray bottles go out with a team trained in proper disinfection contact times, usually around 10 seconds per surface." },
  { title: "Daily Cleaning Execution", body: "Most North Vancouver gyms get three visits a day: pre-opening, mid-day, and evening or post-close. Each visit is documented, and any maintenance issues get flagged as they're found." },
  { title: "Deep Cleaning and Maintenance", body: "Weekly or monthly, depending on the facility. Carpet extraction, locker room deep disinfection, mat sanitization, and odor control all happen during off-hours so they don't interrupt North Vancouver members." },
  { title: "Quality Assurance and Reporting", body: "A report after each service details what was cleaned, when, and any issues noticed. If equipment breaks or a member reports a concern, response is available seven days a week." },
];

const whyChoose = [
  { title: "Eco-Friendly Commitment", body: "We use 100% green, non-toxic disinfectants that are safe for North Vancouver members with asthma, allergies, or sensitive skin." },
  { title: "7-Day Availability", body: "Pre-opening, mid-day, and post-close cleaning fits around any North Vancouver gym schedule, seven days a week." },
  { title: "Certified Professional Staff", body: "Our team is bonded, insured, and trained in gym disinfection protocols, with training aligned to Health Canada's cleaning and disinfecting guidance and WorkSafeBC standards." },
  { title: "Transparent Pricing and Free Estimates", body: "Every quote is itemized, with no hidden fees and no contract lock-in." },
  { title: "Emergency Response", body: "Same-day mobilization is available for MRSA, ringworm, or other outbreak disinfection needs anywhere in North Vancouver." },
  { title: "Local North Vancouver Expertise", body: "We serve gyms and studios across Deep Cove, Edgemont Village, Seymour Heights, and Lower Lonsdale, and our team knows the local demographics, member expectations, and seasonal demands that shape how a North Vancouver gym runs." },
  { title: "First-Clean Discount", body: "New North Vancouver clients get 10% off their first service with code MINT26." },
];

const packages = [
  { title: "Daily Surface Disinfection", body: "Pre-opening, mid-day, and evening visits keep equipment and high-touch surfaces in check throughout the day." },
  { title: "Weekly or Monthly Deep Cleaning", body: "Carpet extraction, locker room sanitization, and mat disinfection on a set schedule." },
  { title: "Customized Frequency", body: "Three times daily, twice daily, or five days a week, built around your North Vancouver facility's needs." },
  { title: "Emergency Outbreak Disinfection", body: "Same-day response when an infection is reported at the gym." },
];

const serviceAreas = ["Lower Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont Village", "Seymour Heights"];

const relatedServices = [
  { title: "Commercial Cleaning", href: "/north-vancouver/commercial-cleaning/" },
  { title: "Office Cleaning", href: "/north-vancouver/office-cleaning/" },
  { title: "School Cleaning", href: "/north-vancouver/school-cleaning/" },
];

const faqItems = [
  {
    question: "How often should my gym be cleaned in North Vancouver?",
    answer:
      "It depends on member traffic and facility size, but most North Vancouver gyms benefit from daily cleaning split across pre-opening, mid-day, and post-close visits. Boutique studios running back to back classes often need more frequent attention to high-touch equipment.",
  },
  {
    question: "What disinfectants does Mint Sanitary use in North Vancouver gyms?",
    answer:
      "We use 100% eco-friendly, non-toxic disinfectants that meet Health Canada and WorkSafeBC standards. They're safe for North Vancouver members with allergies or sensitivities and effective against MRSA, staph, strep, and fungal infections.",
  },
  {
    question: "Can your team respond quickly if a member contracts MRSA or ringworm at my North Vancouver gym?",
    answer:
      "Yes. We offer same-day emergency disinfection for North Vancouver facilities and are available seven days a week for outbreak response.",
  },
  {
    question: "Do you offer gym cleaning in North Vancouver for boutique studios?",
    answer:
      "Yes. Large gyms, small yoga studios, CrossFit boxes, and spin studios across North Vancouver all get the same level of professional care, scaled to the size of the space.",
  },
  {
    question: "What makes professional gym cleaning in North Vancouver different from staff cleaning it themselves?",
    answer:
      "Professional cleaning uses commercial-grade products, follows certified contact-time protocols, and targets high-risk areas like equipment grips and locker rooms in a set order. Most North Vancouver gym staff aren't trained disinfection specialists, so coverage tends to be less consistent when it's left to them alone.",
  },
  {
    question: "How does gym cleaning help with equipment longevity for North Vancouver facilities?",
    answer:
      "Sweat, salt, dirt, and bacteria corrode metal and plastic components over time. Regular professional disinfection extends equipment lifespan by 20 to 30%, which adds up to real savings for a North Vancouver gym with $50,000 to $100,000 invested in machines.",
  },
  {
    question: "Are your North Vancouver gym cleaning staff bonded and insured?",
    answer:
      "Yes. Every team member who services a North Vancouver facility is bonded and insured, with training aligned to Health Canada and WorkSafeBC standards.",
  },
  {
    question: "What's included in weekly deep cleaning for North Vancouver gyms?",
    answer:
      "For North Vancouver facilities, weekly deep cleaning covers carpet extraction, locker room and shower sanitization, mat and yoga studio disinfection, group fitness room deep cleaning, and odor control. Post-complaint disinfection gets added if a member has reported a concern.",
  },
  {
    question: "Can I get a first-time discount on gym cleaning in North Vancouver?",
    answer: "Yes. New North Vancouver clients get 10% off their first service with code MINT26.",
  },
  {
    question: "How do I know your North Vancouver gym cleaning is working?",
    answer:
      "You'll get a detailed report after each service showing what was cleaned and when. Clients who want extra confirmation can request ATP testing to measure bacteria levels before and after service at their North Vancouver location.",
  },
  {
    question: "Do you clean CrossFit boxes and spin studios in North Vancouver, or just traditional gyms?",
    answer:
      "We clean every type of fitness space in North Vancouver, including CrossFit boxes, spin studios, Pilates and yoga studios, and full-service gyms. Equipment and floor protocols are adjusted to match what each space needs.",
  },
  {
    question: "Does Mint Sanitary serve gyms in Deep Cove and Edgemont Village, or just central North Vancouver?",
    answer:
      "We serve gyms across all of North Vancouver, including Deep Cove, Edgemont Village, Seymour Heights, Lower Lonsdale, and Lynn Valley. Scheduling is built around your location and your peak hours, wherever in North Vancouver you're located.",
  },
  {
    question: "How much does gym cleaning cost in North Vancouver?",
    answer:
      "Cost depends on square footage, equipment volume, and how many visits per week your North Vancouver facility needs. Head to our rates page for a free, itemized estimate with no hidden fees.",
  },
  {
    question: "Can Mint Sanitary clean my North Vancouver gym outside of business hours?",
    answer:
      "Yes. Most North Vancouver gyms schedule cleaning before opening, during a mid-day lull, or after close, and deep cleaning work is typically done during off-hours so it never interrupts members.",
  },
  {
    question: "What happens if a North Vancouver member reports an infection linked to my gym?",
    answer:
      "Call us and we'll mobilize the same day for emergency disinfection at your North Vancouver facility. We treat the affected equipment and surrounding areas and document the work in a report you can share with staff or members if needed.",
  },
  {
    question: "Is Mint Sanitary experienced with North Vancouver's specific gym and fitness market?",
    answer:
      "Yes. We've worked with facilities across North Vancouver, from boutique studios in Lower Lonsdale to larger fitness centers further up the hill, and we build schedules around the traffic patterns and seasonal demand specific to this market.",
  },
  {
    question: "Do North Vancouver gym owners need a contract to use Mint Sanitary?",
    answer:
      "No. We don't lock North Vancouver clients into contracts. Every quote is itemized and transparent, and you can adjust or cancel service as your facility's needs change.",
  },
];

export default function GymCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Gym Cleaning in North Vancouver"
      heroImage="/gym-cleaning-equipment-north-vancouver.jpg"
      heroSubtitle="Daily Disinfection & Deep Cleaning"
      heroIntro="A gym in North Vancouver is only as good as it is clean. Members size up a facility within seconds of walking through the door, and cleanliness is usually the first thing they judge before they judge the equipment or the class schedule. Mint Sanitary handles the daily disinfection and deep cleaning work for gyms across North Vancouver, from Lower Lonsdale to Lynn Valley, so owners and staff can put their attention into members instead of mop buckets."
      faqItems={faqItems}
      ctaHeading="Ready to See What a Properly Cleaned Gym Looks Like?"
      ctaBody="Call Mint Sanitary at 236-688-3248 or request a free estimate to get a custom cleaning plan built around your facility's hours."
      ctaHref="/rates"
    >
      {/* ── Stat intro (white bg) ──────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/gym-cleaning-team-north-vancouver.jpg"
              alt="Mint Sanitary technician disinfecting gym equipment in North Vancouver"
              className="h-[320px] w-full object-cover sm:h-[400px]"
              loading="lazy"
            />
          </div>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Free weights carry 362 times more germs than a toilet seat.
            Treadmills hold 74 times more bacteria than a public restroom
            faucet. Given numbers like that, it makes sense that 81% of gym
            members say cleanliness is the deciding factor when choosing a
            facility, according to{" "}
            <a
              href="https://zogics.com/product-guide-library/how-clean-is-clean-enough-hygiene-standards-every-gym-should-know/"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              this fitness facility hygiene guide
            </a>
            . North Vancouver gym owners who take cleaning seriously see it
            show up in retention, in reviews, and in how long their
            equipment lasts.
          </p>
        </div>
      </section>

      {/* ── What It Prevents (blue bg) ────────────────────────── */}
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
            What Professional Gym Cleaning Prevents in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Sweat, shared equipment, and warm, damp locker rooms make any
            gym in North Vancouver a natural breeding ground for bacteria
            and fungus. A trained cleaning team targets the conditions that
            let these problems spread before members ever notice a smell or
            a sticky bench.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {preventionItems.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daily + Deep Cleaning Services (white bg) ─────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Daily Gym Cleaning Services in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A clean gym isn&apos;t a once a week job in North Vancouver any
            more than it is anywhere else. It&apos;s built through daily
            attention to the surfaces members touch most.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {dailyServices.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/[0.12] p-4 font-body text-[15px] leading-[1.7] text-white/80">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-display-reg text-[26px] uppercase text-white">
            Deep Cleaning Services for North Vancouver Gyms
          </h3>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Daily cleaning keeps a North Vancouver gym running. Deep
            cleaning catches what a daily pass can&apos;t.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {deepServices.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/[0.12] p-4 font-body text-[15px] leading-[1.7] text-white/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Business Benefits (f4f8ff bg) ─────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            How Gym Cleaning Benefits Your North Vancouver Business
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {businessBenefits.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process (blue bg) ─────────────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our 5-Step Gym Cleaning Process in North Vancouver
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/20 font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-body text-[14px] text-white/70">
            Contact-time protocols follow practices outlined in{" "}
            <a
              href="https://blog.nasm.org/how-to-clean-your-gym"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              this industry guide to disinfecting fitness facilities
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Why Choose (white bg) ─────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why North Vancouver Gyms Choose Mint Sanitary
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[13px] text-white/60">
            Training aligned with{" "}
            <a
              href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks/cleaning-disinfecting.html"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Health Canada&apos;s cleaning and disinfecting guidance
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Packages (f4f8ff bg) ──────────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Gym Cleaning Packages for North Vancouver Facilities
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every North Vancouver gym runs differently, so packages are
            built around how the facility operates day to day.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <div key={pkg.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{pkg.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{pkg.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Pricing depends on square footage, equipment count, and how
            often your North Vancouver facility needs service. Visit our{" "}
            <a href="/rates" className="underline underline-offset-2">
              rates page
            </a>{" "}
            for a free, itemized estimate.
          </p>
        </div>
      </section>

      {/* ── Service Areas (blue bg) ───────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              North Vancouver Areas We Serve
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary cleans gyms, studios, and fitness centers
              throughout North Vancouver, including Lower Lonsdale, Lynn
              Valley, Deep Cove, Edgemont Village, and Seymour Heights.
              Waterfront facilities in Lower Lonsdale and gyms up in the
              Lynn Valley corridor both get a cleaning schedule built around
              their hours and their members.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  {area}
                </span>
              ))}
            </div>
            <img
              src="/mint-service-area-map.png"
              alt="Mint Sanitary service area map covering North Vancouver neighbourhoods"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Related North Vancouver Services (white bg) ───────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Related North Vancouver Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedServices.map((s) => (
              <div key={s.href} className="rounded-[14px] bg-white/[0.12] p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">{s.title}</h3>
                <a
                  href={s.href}
                  className="mt-5 inline-block w-fit border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
