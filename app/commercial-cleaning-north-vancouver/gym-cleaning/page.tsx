import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title: "Professional Gym Cleaning North Vancouver | Mint Sanitary",
  description:
    "Expert gym cleaning & disinfection in North Vancouver. Certified staff, eco-friendly products, 7-day availability. Call (604) 671-6252 for a free estimate.",
};

const preventionItems = [
  {
    title: "MRSA & Staph Infections",
    body: "Both spread through skin-to-skin contact and shared equipment.",
  },
  {
    title: "Athlete's Foot & Ringworm",
    body: "Fungal infections that thrive in warm, moist environments like locker rooms and shower areas.",
  },
  {
    title: "Respiratory Infections",
    body: "Especially important for group fitness classes and spin studios.",
  },
  {
    title: "General Infection Spread",
    body: "Strep, minor cuts, and immune-compromised members all benefit from higher standards.",
  },
];

const dailyServices = [
  {
    title: "Equipment Sanitization",
    body: "All free weights, machines, benches, grips, handles, and barbells get disinfected with gym-certified products. We don't just wipe them. We spray, wait for contact time, and wipe again to kill bacteria, viruses, and fungi.",
  },
  {
    title: "Cardio Equipment Disinfection",
    body: "Treadmills, ellipticals, rowing machines, and stationary bikes are touched by dozens of sweaty hands daily. These get individual attention: screens, buttons, handrails, and foot platforms.",
  },
  {
    title: "Floor Care",
    body: "Sweeping, vacuuming, and mopping all areas. Locker rooms get extra attention for moisture control and odor prevention.",
  },
  {
    title: "High-Touch Surface Disinfection",
    body: "Door handles, light switches, water fountain buttons, entrance areas, and reception desk surfaces get wiped down multiple times daily.",
  },
  {
    title: "Restroom Sanitation",
    body: "Toilets, sinks, mirrors, soap dispensers, and paper towel holders. Floors are mopped, and odor control is applied.",
  },
  {
    title: "Reception Area Cleaning",
    body: "Desks, chairs, and common areas where members check in and wait.",
  },
  {
    title: "Trash Removal",
    body: "Empty bins throughout the facility and replace liners as needed.",
  },
];

const deepServices = [
  {
    title: "Locker Room & Shower Area Deep Cleaning",
    body: "These spaces are bacteria breeding grounds. We clean behind equipment, disinfect benches, and prevent mold growth in shower corners.",
  },
  {
    title: "Carpet Extraction",
    body: "Weekly or monthly extraction in cardio areas and group fitness studios prevents dirt buildup and odor.",
  },
  {
    title: "Mat & Yoga Studio Disinfection",
    body: "Yoga mats, resistance bands, and studio floors need separate protocols since members lie directly on them.",
  },
  {
    title: "Group Fitness Class Room Sanitization",
    body: "Classes create sweat buildup fast. We disinfect mirrors, floors, and any shared equipment between classes.",
  },
  {
    title: "Odor Control",
    body: "Enzyme-based treatments that break down sweat residue instead of masking smells with air freshener.",
  },
  {
    title: "Post-Outbreak Sanitization",
    body: "If a member reports ringworm, MRSA, or any infection, we perform an emergency deep disinfection of affected equipment and areas.",
  },
];

const businessBenefits = [
  {
    title: "Member Retention",
    body: "Clean facilities lead to longer memberships and better reviews.",
  },
  {
    title: "New Member Acquisition",
    body: "Word-of-mouth and online reviews improve when cleanliness is visible.",
  },
  {
    title: "Staff Morale",
    body: "Your staff doesn't spend their shift cleaning up sweat. They focus on member experience.",
  },
  {
    title: "Equipment Longevity",
    body: "Regular professional disinfection extends machine lifespan by 20 to 30% because salt, sweat, and dirt don't corrode components over time.",
  },
];

const processSteps = [
  {
    title: "Initial Assessment & Custom Plan Development",
    body: "Our team visits your gym to measure square footage, count equipment, and identify high-risk areas. We learn your peak hours, your member demographics, and any special concerns. Then we design a cleaning schedule that fits your operations. A boutique studio in Lower Lonsdale has different needs than a large facility in Lynn Valley.",
  },
  {
    title: "Pre-Service Equipment & Staff Setup",
    body: "We arrive with professional disinfectants, microfiber cloths, and gym-certified spray bottles. Our staff is trained in proper disinfection contact times (usually 10 seconds) and safe handling of commercial products. We use eco-friendly, non-toxic products that kill germs without harming members or equipment.",
  },
  {
    title: "Daily Cleaning Execution",
    body: "We typically hit your gym three times daily: pre-opening (before members arrive), mid-day (during slower hours), and evening or post-close (after the last member leaves). Each visit covers equipment, high-touch surfaces, and restrooms. We document what we've cleaned and flag any maintenance issues we spot.",
  },
  {
    title: "Deep Cleaning & Maintenance",
    body: "Weekly or monthly deep services target carpet extraction, locker room deep disinfection, mat sanitization, and odor control. These happen during off-hours when members aren't around.",
  },
  {
    title: "Quality Assurance & Reporting",
    body: "You get a report detailing what was cleaned, when, and any issues we noticed. If equipment breaks or a member reports a concern, we respond immediately. Our staff is available 7 days a week, so we're here when you need us.",
  },
];

const whyChooseItems = [
  {
    title: "Eco-Friendly Commitment",
    body: "We use 100% green, non-toxic disinfectants that kill germs but are safe for members with asthma, allergies, or sensitive skin. Your gym is healthier when your cleaning products are healthier.",
  },
  {
    title: "7-Day Availability",
    body: "Gyms don't close on weekends, and neither do we. We offer pre-opening, mid-day, and post-close cleaning to fit any gym schedule, available all seven days a week.",
  },
  {
    title: "Certified Professional Staff",
    body: "Our cleaners are bonded, insured, and trained in gym disinfection protocols. We're Health Canada and WorkSafeBC trained, which means we handle high-risk spaces safely and legally. When you call us, you're getting trained professionals, not temporary labor.",
  },
  {
    title: "Transparent Pricing & Free Estimates",
    body: "We visit your facility, assess your needs, and give you an itemized quote with no surprises. No hidden fees. No contract lock-in.",
  },
  {
    title: "Emergency Response",
    body: "If a member contracts MRSA or ringworm, we can mobilize same-day disinfection of affected equipment and areas. We're available when outbreaks happen, not just on a regular schedule.",
  },
  {
    title: "Local North Vancouver Expertise",
    body: "We know your community. We service Deep Cove, Edgemont Village, Seymour Heights, and Lower Lonsdale, understanding local demographics, member expectations, and the seasonal demands of fitness facilities across North Vancouver.",
  },
  {
    title: "First-Clean Discount",
    body: "New clients get 10% off their first service with code MINT25. That's how confident we are in our work.",
  },
];

const packages = [
  {
    title: "Daily Surface Disinfection",
    body: "Pre-opening, mid-day, and evening visits.",
  },
  {
    title: "Weekly or Monthly Deep Cleaning",
    body: "Carpet extraction, locker room sanitization, mat disinfection.",
  },
  {
    title: "Customized Frequency",
    body: "Three times daily, twice daily, or five days per week depending on your needs.",
  },
  {
    title: "Emergency Outbreak Disinfection",
    body: "Same-day response when infection is reported.",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
];

const faqItems = [
  {
    question: "How often should my gym be cleaned in North Vancouver?",
    answer: "It depends on your member traffic and facility size. Most gyms in North Vancouver benefit from daily cleaning (pre-opening, mid-day, and post-close). High-traffic gyms might need more frequent touch-ups. Low-impact facilities might get by with daily pre-opening and post-close service. We assess your facility and recommend a schedule. Contact us for a free evaluation of your North Vancouver gym.",
  },
  {
    question: "What disinfectants does Mint Sanitary use for gym cleaning in North Vancouver?",
    answer: "We use 100% eco-friendly, non-toxic disinfectants that meet Health Canada and WorkSafeBC standards. Our products are safe for members with allergies or sensitivities while still killing MRSA, staph, strep, and fungal infections. We never use harsh chemicals that leave toxic residue on equipment in North Vancouver gyms.",
  },
  {
    question: "Can your team respond quickly if a member contracts MRSA or ringworm at my North Vancouver gym?",
    answer: "Yes. We offer same-day emergency disinfection for outbreak response. If a member reports an infection in your North Vancouver gym, call us immediately. We'll sanitize affected equipment and areas using certified protocols. We're available 7 days a week.",
  },
  {
    question: "Do you offer gym cleaning services for boutique studios in North Vancouver?",
    answer: "Absolutely. Large gyms, small yoga studios, CrossFit boxes, and spin studios in North Vancouver all get the same professional care. Boutique studios in Lower Lonsdale, Lynn Valley, and Deep Cove are part of our regular client base, with cleaning customized to fit your space and member base.",
  },
  {
    question: "What makes professional gym cleaning different from my staff cleaning in North Vancouver?",
    answer: "Professional disinfection uses commercial-grade products, follows certified contact-time protocols, and targets high-risk areas systematically. Your staff cleans, but they're not trained disinfection specialists and don't have industrial equipment. Professional gym cleaning in North Vancouver prevents infections, extends equipment life, and protects your liability. Your staff keeps the gym running. We keep it safe.",
  },
  {
    question: "How does gym cleaning in North Vancouver help with equipment longevity?",
    answer: "Sweat, salt, dirt, and bacteria corrode metal and plastic over time. Professional disinfection removes these contaminants regularly instead of letting them build up. We've seen studies showing that facilities using professional gym cleaning services extend equipment lifespan by 20 to 30%. For a gym in North Vancouver with $50,000 to $100,000 invested in machines, that's significant savings.",
  },
  {
    question: "Are your staff members bonded and insured for gym cleaning in North Vancouver?",
    answer: "Yes. All Mint Sanitary cleaners are bonded, insured, and trained in gym-specific disinfection protocols. We're Health Canada and WorkSafeBC trained, so we handle high-risk environments safely and legally. Your North Vancouver gym is protected.",
  },
  {
    question: "What's included in your weekly deep cleaning service for North Vancouver gyms?",
    answer: "Weekly deep cleaning covers carpet extraction, locker room and shower sanitization, mat and yoga studio disinfection, group fitness room deep cleaning, odor control, and post-member-complaint disinfection if needed. The exact services are customized to your North Vancouver gym's layout and needs.",
  },
  {
    question: "Can I get a first-time discount on gym cleaning in North Vancouver?",
    answer: "Yes. New clients in North Vancouver get 10% off their first service with code MINT25. This applies to any of our gym cleaning packages. Call (604) 671-6252 to schedule your first clean and use the code at checkout.",
  },
  {
    question: "How do I know your cleaning is working in my North Vancouver gym?",
    answer: "We provide detailed reports after each service listing what was cleaned, when, and any observations. You can also request ATP testing (a scientific swab test) to verify bacteria levels on equipment before and after our cleaning. Transparency matters. When you hire Mint Sanitary for gym cleaning in North Vancouver, you get documentation of our work.",
  },
];

const relatedServices = [
  {
    title: "Commercial Cleaning",
    href: "/commercial-cleaning-north-vancouver/",
  },
  {
    title: "Office Cleaning",
    href: "/commercial-cleaning-north-vancouver/office-cleaning/",
  },
  {
    title: "School Cleaning",
    href: "/commercial-cleaning-north-vancouver/school-cleaning/",
  },
];

export default function GymCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Gym Cleaning in North Vancouver"
      heroImage="/gym-cleaning-equipment-north-vancouver.jpg"
      heroIntro="Your gym is only as good as it is clean. Members choose fitness facilities based on cleanliness first, and they&apos;ll leave if surfaces feel sticky or smell off. At Mint Sanitary, we handle the heavy lifting so your North Vancouver gym stays spotless, safe, and welcoming every single day."
      faqItems={faqItems}
      ctaHeading="Get Your North Vancouver Gym Cleaning Service Started"
      ctaBody="Call (604) 671-6252 or visit www.mintsanitary.com for your free on-site estimate. Use code MINT25 for 10% off your first service."
    >
      {/* ── Image + Text Intro ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/gym-cleaning-team-north-vancouver.jpg"
                alt="Professional gym cleaning team in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Professional Gym Cleaning
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Is Gym Cleaning in North Vancouver &amp; Why It Matters
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Professional gym cleaning goes way beyond pushing a mop around.
                It&apos;s about targeting the bacteria hotspots that members
                touch dozens of times per workout: free weights, treadmill
                grips, weight benches, door handles, and locker room benches.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro Content ── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Here&apos;s what the science says:{" "}
                <strong className="font-extrabold text-[#4E5062]">
                  free weights carry 362 times more germs than a toilet seat
                </strong>
                . Treadmills hold 74 times more bacteria than a public restroom
                faucet. That&apos;s not to scare you. It&apos;s to show why
                basic daily wiping doesn&apos;t cut it.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Research shows that{" "}
                <strong className="font-extrabold text-[#4E5062]">
                  81% of gym members cite cleanliness as the deciding factor
                </strong>{" "}
                when choosing a facility. That number matters for your
                membership retention, your reputation, and your liability.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                A professional gym cleaning service in North Vancouver uses
                commercial-grade disinfectants, follows certified protocols, and
                creates a schedule that catches the dirtiest times of day. Your
                staff can&apos;t do this alone, and spot-cleaning isn&apos;t
                enough.
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
            What Professional Gym Cleaning Prevents
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            When you invest in professional gym disinfection in North Vancouver,
            you&apos;re preventing:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {preventionItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] bg-white/10 p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What&apos;s Included in Professional Gym Cleaning Service
          </h2>

          <h3 className="mt-10 font-body text-[20px] font-extrabold text-[#4E5062]">
            Daily Cleaning Services
          </h3>
          <p className="mt-3 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Your gym operates on a schedule. So does our cleaning. We customize
            a daily routine that hits peak times and high-traffic areas.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dailyServices.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-body text-[20px] font-extrabold text-[#4E5062]">
            Deep Cleaning &amp; Specialized Services
          </h3>
          <p className="mt-3 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Beyond daily maintenance, your gym needs deeper attention on a
            weekly or monthly schedule.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {deepServices.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {item.body}
                </p>
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
            Why Professional Gym Cleaning Protects Your Members
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <p className="font-body text-[15px] font-extrabold leading-[1.7] text-white">
                Health &amp; Safety Benefits
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Your members trust you with their health. A professional
                cleaning service in North Vancouver shows that you take their
                safety seriously.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                MRSA, staph, and streptococcal infections can spread through
                shared equipment. Fungal infections love the warm, moist
                environment of locker rooms. Respiratory infections spread
                faster in poorly maintained group fitness studios. A documented
                cleaning protocol backed by certified staff gives you a defense
                against liability. It also protects your members&apos; health,
                which is the whole point.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Members with compromised immune systems, recent surgeries, or
                chronic conditions need confidence that equipment is truly
                clean. Professional disinfection gives them that.
              </p>
            </div>
            <div>
              <p className="font-body text-[15px] font-extrabold leading-[1.7] text-white">
                Business Benefits in North Vancouver
              </p>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Cleanliness is the #1 factor driving gym membership loyalty.
                When a potential member tours your facility in North Vancouver,
                they notice if the dumbbells are shiny or sticky. They notice if
                the locker room smells fresh or sour.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                A professional gym cleaning service directly impacts:
              </p>
              <div className="mt-4 grid gap-3">
                {businessBenefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[14px] bg-white/10 p-4"
                  >
                    <h3 className="font-body text-[17px] font-extrabold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-body text-[15px] leading-[1.7] text-white/80">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              How the Gym Cleaning Process Works
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-[#5c6075]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccordionWithImage
        heading="Why Choose Mint Sanitary for Gym Cleaning"
        intro="We're not a general cleaning company that also happens to do gyms. We specialize in health and fitness facilities across North Vancouver, West Vancouver, and Greater Vancouver. Here's what sets us apart."
        items={whyChooseItems}
        image="/gym-cleaning-equipment-north-vancouver.jpg"
        imageAlt="Professional gym cleaning equipment in North Vancouver"
      />

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Gym Cleaning Pricing &amp; Packages
          </h2>
          <div className="mt-8 space-y-4">
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Pricing depends on several factors: your facility&apos;s square
              footage, the number of pieces of equipment, your preferred
              cleaning frequency, and whether you need specialized services like
              carpet extraction or locker room deep cleaning.
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              A small studio in Lynn Valley with five cardio machines and
              limited equipment will cost less than a 10,000-square-foot
              facility in Lower Lonsdale with dozens of strength machines and a
              full locker room complex.
            </p>
          </div>
          <p className="mt-6 font-body text-[15px] font-extrabold leading-[1.7] text-[#4E5062]">
            We offer flexible packages:
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {pkg.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {pkg.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Get a free on-site estimate. We&apos;ll measure your space,
            understand your member traffic, and provide a transparent, itemized
            quote with no pressure. Call us at{" "}
            <a
              href="tel:+16046716252"
              className="underline underline-offset-2"
            >
              (604) 671-6252
            </a>{" "}
            or visit our website for your free estimate.
          </p>
        </div>
      </section>

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
              Service Areas in North Vancouver &amp; Greater Vancouver
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We service North Vancouver neighborhoods and areas, including:
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
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
            <a
              href="/service-areas"
              className="mt-8 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
            >
              View All Service Areas
            </a>
          </div>
          <div className="mt-10">
            <p className="font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white/60">
              Sources &amp; References
            </p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
              <a
                href="https://www.cdc.gov/mrsa/prevention/coaches-athletic-directors.html"
                className="font-body text-[14px] text-white/70 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC Athletic Facilities MRSA Prevention
              </a>
              <a
                href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks/cleaning-disinfecting.html"
                className="font-body text-[14px] text-white/70 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Health Canada Cleaning and Disinfecting
              </a>
              <a
                href="https://blog.nasm.org/how-to-clean-your-gym"
                className="font-body text-[14px] text-white/70 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASM Disinfecting Your Fitness Facility
              </a>
              <a
                href="https://zogics.com/product-guide-library/how-clean-is-clean-enough-hygiene-standards-every-gym-should-know/"
                className="font-body text-[14px] text-white/70 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zogics Hygiene Standards for Gyms
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Related Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedServices.map((s) => (
              <div
                key={s.href}
                className="rounded-[14px] bg-[#f4f8ff] p-6"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {s.title}
                </h3>
                <a
                  href={s.href}
                  className="mt-5 inline-block w-fit border-b border-[#66DAD5] font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#4E5062]"
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
