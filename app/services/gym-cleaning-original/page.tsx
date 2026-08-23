import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/gym-cleaning-original
// so the CMS version at /services/gym-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Gym Cleaning Services in Greater Vancouver | Mint Sanitary",
  description:
    "Professional gym cleaning across Greater Vancouver. Daily disinfection, deep cleaning, and odor control for fitness facilities. Get a free estimate today.",
  robots: { index: false, follow: false },
};

const preventionItems = [
  {
    title: "MRSA and Staph Infections",
    body: "These spread through skin to skin contact and shared equipment like benches and mats. Regular disinfection of high contact surfaces cuts the risk of transmission between members. The CDC's guidance for athletic facilities outlines why this matters for any shared training space.",
  },
  {
    title: "Athlete's Foot and Ringworm",
    body: "Fungal infections thrive in warm, moist locker rooms and showers. Floors, benches, and shower stalls need targeted treatment, not a quick mop pass.",
  },
  {
    title: "Respiratory Infections",
    body: "Group fitness classes and spin studios pack a lot of heavy breathing into a small room. Clean air handling and surface disinfection matter more here than in most other parts of the gym.",
  },
  {
    title: "General Infection Spread",
    body: "Strep, minor cuts, and everyday illness move faster through a gym than most owners realize, and members with compromised immune systems benefit from a facility that holds itself to a higher standard.",
  },
];

const dailyServices = [
  "Equipment Sanitization. Free weights, machines, benches, grips, handles, and barbells get sprayed, given time for the disinfectant to work, then wiped again.",
  "Cardio Equipment Disinfection. Treadmills, ellipticals, rowing machines, and stationary bikes, including screens, buttons, handrails, and foot platforms.",
  "Floor Care. Sweeping, vacuuming, and mopping throughout, with extra attention in locker rooms to control moisture and prevent odor buildup.",
  "High-Touch Surface Disinfection. Door handles, light switches, water fountain buttons, entrance areas, and the reception desk.",
  "Restroom Sanitation. Toilets, sinks, mirrors, soap dispensers, and paper towel holders, with floors mopped and odor control applied.",
  "Reception Area Cleaning. Desks, chairs, and common areas kept presentable for the first impression members get.",
  "Trash Removal. Bins emptied and liners replaced throughout the facility.",
];

const deepServices = [
  "Locker Room and Shower Area Deep Cleaning. Behind equipment, disinfecting benches, and treating shower corners to stop mold before it starts.",
  "Carpet Extraction. Weekly or monthly extraction in cardio areas and group fitness studios, where foot traffic and sweat build up fastest.",
  "Mat and Yoga Studio Disinfection. Yoga mats, resistance bands, and studio floors get their own protocol, since members lie directly on these surfaces.",
  "Group Fitness Class Room Sanitization. Mirrors, floors, and shared equipment cleaned between classes.",
  "Odor Control. Enzyme-based treatments break down sweat residue at the source instead of masking it with fragrance.",
  "Post-Outbreak Sanitization. Emergency deep disinfection if a member reports ringworm, MRSA, or another infection tied to the facility.",
];

const businessBenefits = [
  {
    title: "Member Retention",
    body: "A clean facility leads to longer memberships and better reviews. Members notice when equipment looks and smells clean, and they notice just as fast when it doesn't.",
  },
  {
    title: "New Member Acquisition",
    body: "Word of mouth and online reviews improve when a facility is visibly well kept. Cleanliness is often the first thing a new member mentions to a friend.",
  },
  {
    title: "Staff Morale",
    body: "When cleaning is handled by a professional team, gym staff aren't spending part of every shift wiping down sweat. That time goes back into coaching and member experience.",
  },
  {
    title: "Equipment Longevity",
    body: "Regular professional disinfection extends machine lifespan by 20 to 30%, because salt, sweat, and dirt don't get the chance to corrode components over time. For a facility with $50,000 to $100,000 invested in machines, that's a meaningful amount of equipment life saved.",
  },
];

const processSteps = [
  { title: "Initial Assessment and Custom Plan Development", body: "A visit to measure square footage, count equipment, identify high risk areas, and learn peak hours and member demographics. From there, we design a schedule that fits how the facility operates." },
  { title: "Pre-Service Equipment and Staff Setup", body: "Professional disinfectants, microfiber cloths, and gym-certified spray bottles go out with a team trained in proper disinfection contact times, usually around 10 seconds per surface." },
  { title: "Daily Cleaning Execution", body: "Most gyms get three visits a day: pre-opening, mid-day, and evening or post-close. Each visit is documented, and any maintenance issues get flagged as they're found." },
  { title: "Deep Cleaning and Maintenance", body: "Weekly or monthly, depending on the facility. Carpet extraction, locker room deep disinfection, mat sanitization, and odor control all happen during off-hours so they don't interrupt members." },
  { title: "Quality Assurance and Reporting", body: "A report after each service details what was cleaned, when, and any issues noticed. If equipment breaks or a member reports a concern, response is available seven days a week." },
];

const whyChoose = [
  { title: "Eco-Friendly Commitment", body: "We use 100% green, non-toxic disinfectants that are safe for members with asthma, allergies, or sensitive skin." },
  { title: "7-Day Availability", body: "Pre-opening, mid-day, and post-close cleaning fits around any gym schedule, seven days a week." },
  { title: "Certified Professional Staff", body: "Our team is bonded, insured, and trained in gym disinfection protocols, with training aligned to Health Canada's cleaning and disinfecting guidance and WorkSafeBC standards." },
  { title: "Transparent Pricing and Free Estimates", body: "Every quote is itemized, with no hidden fees and no contract lock-in." },
  { title: "Emergency Response", body: "Same-day mobilization is available for MRSA, ringworm, or other outbreak disinfection needs." },
  { title: "Local Expertise Across the Region", body: "From boutique studios to full-size fitness centers, our teams understand what different gyms across Greater Vancouver need, including member traffic patterns and seasonal demand." },
  { title: "First-Clean Discount", body: "New clients get 10% off their first service with code MINT26." },
];

const packages = [
  { title: "Daily Surface Disinfection", body: "Pre-opening, mid-day, and evening visits keep equipment and high-touch surfaces in check throughout the day." },
  { title: "Weekly or Monthly Deep Cleaning", body: "Carpet extraction, locker room sanitization, and mat disinfection on a set schedule." },
  { title: "Customized Frequency", body: "Three times daily, twice daily, or five days a week, built around the facility's needs." },
  { title: "Emergency Outbreak Disinfection", body: "Same-day response when an infection is reported at the facility." },
];

const faqItems = [
  {
    question: "How often should a gym be cleaned?",
    answer:
      "It depends on member traffic and facility size, but most gyms benefit from daily cleaning split across pre-opening, mid-day, and post-close visits. High-traffic facilities and boutique studios with back to back classes often need more frequent attention to high-touch equipment.",
  },
  {
    question: "What disinfectants does Mint Sanitary use in gyms?",
    answer:
      "We use 100% eco-friendly, non-toxic disinfectants that meet Health Canada and WorkSafeBC standards. They're safe for members with allergies or sensitive skin and effective against MRSA, staph, strep, and fungal infections.",
  },
  {
    question: "Can your team respond quickly if a member contracts MRSA or ringworm?",
    answer:
      "Yes. We offer same-day emergency disinfection and are available seven days a week for outbreak response.",
  },
  {
    question: "Do you clean boutique studios as well as large gyms?",
    answer:
      "Yes. Large fitness centers, small yoga studios, CrossFit boxes, and spin studios all get the same level of professional care, scaled to the size of the space.",
  },
  {
    question: "What makes professional gym cleaning different from staff cleaning it themselves?",
    answer:
      "Professional cleaning uses commercial-grade products, follows certified contact-time protocols, and targets high-risk areas like equipment grips and locker rooms in a set order. Most in-house staff aren't trained disinfection specialists, so coverage tends to be less consistent.",
  },
  {
    question: "How does gym cleaning help with equipment longevity?",
    answer:
      "Sweat, salt, dirt, and bacteria corrode metal and plastic components over time. Regular professional disinfection extends equipment lifespan by 20 to 30%, which adds up to real savings for a facility with $50,000 to $100,000 invested in machines.",
  },
  {
    question: "Is your staff bonded and insured?",
    answer:
      "Yes. Our team is bonded and insured, with training aligned to Health Canada and WorkSafeBC standards.",
  },
  {
    question: "What's included in a weekly deep clean?",
    answer:
      "Carpet extraction, locker room and shower sanitization, mat and yoga studio disinfection, group fitness room deep cleaning, and odor control. Post-complaint disinfection is added if a member has reported a concern.",
  },
  {
    question: "Do you offer a first-time discount?",
    answer: "Yes. New clients get 10% off their first service with code MINT26.",
  },
  {
    question: "How do I know the cleaning is working?",
    answer:
      "You'll get a detailed report after each service showing what was cleaned and when. Clients who want extra confirmation can request ATP testing to measure bacteria levels before and after service.",
  },
  {
    question: "How much does gym cleaning cost in Greater Vancouver?",
    answer:
      "Cost depends on square footage, equipment volume, and how many visits per week the facility needs. Head to our rates page for a free, itemized estimate with no hidden fees.",
  },
  {
    question: "Do you serve gyms outside the immediate Vancouver core?",
    answer:
      "Yes. Mint Sanitary provides gym cleaning to fitness facilities throughout Greater Vancouver. Check our rates page or call to confirm coverage for a specific location.",
  },
];

export default function ServicesGymCleaningPage() {
  return (
    <ServicePageLayout
      title="Gym Cleaning Services in Greater Vancouver"
      heroImage="/gym-cleaning-equipment-north-vancouver.jpg"
      heroSubtitle="Daily Disinfection & Deep Cleaning"
      heroIntro="A gym is only as good as it is clean. Members size up a facility within seconds of walking through the door, and what they smell and see on the equipment shapes whether they sign up or walk back out. Mint Sanitary provides gym cleaning for fitness centers, yoga studios, CrossFit boxes, and spin studios across Greater Vancouver, handling the daily disinfection and deep cleaning work so owners and staff can focus on running the business."
      faqItems={faqItems}
      ctaHeading="Ready to See What a Properly Cleaned Gym Looks Like?"
      ctaBody="Request a free, itemized estimate built around your facility's schedule. New clients get 10% off their first service with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Stat intro (white bg) ──────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Free weights carry 362 times more germs than a toilet seat.
            Treadmills hold 74 times more bacteria than a public restroom
            faucet. Given numbers like that, it makes sense that 81% of gym
            members say cleanliness is the deciding factor when they choose
            a facility, according to{" "}
            <a
              href="https://zogics.com/product-guide-library/how-clean-is-clean-enough-hygiene-standards-every-gym-should-know/"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              this fitness facility hygiene guide
            </a>
            . A cleaning routine built around real infection control, not
            just wiping down mirrors, protects members and protects the
            business.
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
            What Professional Gym Cleaning Prevents
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Sweat, shared equipment, and warm, damp air make gyms a natural
            breeding ground for bacteria and fungus. A trained cleaning team
            targets the conditions that let these problems spread.
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
            Daily Gym Cleaning Services
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            A clean gym isn&apos;t a once a week job. It&apos;s built through
            daily attention to the surfaces members touch most.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {dailyServices.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/[0.12] p-4 font-body text-[15px] leading-[1.7] text-white/80">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-display-reg text-[26px] uppercase text-white">
            Deep Cleaning Services for Gyms
          </h3>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Daily cleaning keeps a gym running. Deep cleaning catches what a
            daily pass can&apos;t.
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
            How Gym Cleaning Benefits Your Business
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
              Our 5-Step Gym Cleaning Process
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
            A step in this process follows practices outlined in{" "}
            <a
              href="https://blog.nasm.org/how-to-clean-your-gym"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              this industry guide to disinfecting fitness facilities
            </a>
            , and disinfection protocols reference{" "}
            <a
              href="https://www.cdc.gov/mrsa/prevention/coaches-athletic-directors.html"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              the CDC's guidance for athletic facilities
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
            Why Gyms Across Greater Vancouver Choose Mint Sanitary
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
            Certified staff training aligned with{" "}
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
            Gym Cleaning Packages
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every gym runs differently, so packages are built around how
            the facility operates, not a one size fits all schedule.
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
            often the facility needs service. Visit our{" "}
            <a href="/rates" className="underline underline-offset-2">
              rates page
            </a>{" "}
            for a free, itemized estimate.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
