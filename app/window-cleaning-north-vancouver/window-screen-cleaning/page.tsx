import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Window Screen Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional window screen cleaning in North Vancouver. Eco-friendly products, pollen removal, screen repair & replacement. Free estimate. 10% off with code MINT25.",
};

const faqItems = [
  {
    question:
      "How often should I have my window screens professionally cleaned in North Vancouver?",
    answer:
      "For most North Vancouver homes, professional window screen cleaning 2 to 4 times per year keeps screens optimal. During peak allergy season (March to July), monthly cleaning benefits those with pollen sensitivities. Homes near mature trees, high-traffic areas, or with pets may need more frequent service. In neighborhoods like Lynn Valley with heavy tree coverage, we recommend a spring deep-clean before pollen season and a fall refresh after summer debris buildup.",
  },
  {
    question:
      "Can dirty window screens affect my allergies or respiratory health in North Vancouver?",
    answer:
      "Yes, absolutely. Clogged screens trap pollen, dust mites, mold spores, and outdoor allergens. When you open windows with dirty screens, airborne particles still pass through and accumulate indoors. North Vancouver's extended pollen season (February to October, with peak March to July) makes clean screens essential for allergy sufferers. Regular professional screen cleaning significantly reduces indoor allergen load and respiratory irritation, particularly during spring when tree pollen is heaviest.",
  },
  {
    question:
      "What makes professional screen cleaning better than doing it myself?",
    answer:
      "Professional window screen cleaning in North Vancouver reaches areas DIY efforts consistently miss, including deep mesh fibers, frame crevices, and sill tracks. We use low-pressure rinse systems and biodegradable solutions that won't damage fiberglass or aluminum mesh. We safely remove and reinstall screens without bending frames or tearing mesh. Additionally, professionals assess damage and recommend repair or replacement, saving you future problems. Most importantly, it's safe and fast. We handle all ladder work and avoid damage on older or delicate screens.",
  },
  {
    question:
      "Do you offer screen repair or replacement if I want to upgrade?",
    answer:
      "Absolutely. During professional screen cleaning in North Vancouver, we assess each screen for damage. If mesh has small holes or tears, we offer affordable patching or re-screening ($15 to $50 per screen). If frames are bent or damage is extensive, we recommend full replacement and can source new screens (fiberglass or aluminum) in your preferred material. We provide transparent pricing with no hidden upsells and install new screens immediately if you choose to upgrade.",
  },
  {
    question: "Are your cleaning products safe for families and pets?",
    answer:
      "Yes. Mint Sanitary uses eco-friendly, biodegradable cleaning solutions that are non-toxic and safe for homes with children and pets. All products comply with BC environmental standards. We rinse screens thoroughly to remove all soap residue before reinstallation. You can open windows immediately after our window screen cleaning service in North Vancouver with no harmful fumes or residue.",
  },
  {
    question: "How long does window screen cleaning take?",
    answer:
      "A typical home with 8 to 12 screens takes 1 to 2 hours, depending on how soiled screens are and whether repairs are needed. We schedule flexibly and work 7 days a week so you can choose a time that suits you. Emergency same-day service is available in many cases. Just call (604) 671-6252 and describe what you need.",
  },
  {
    question:
      "What's the difference between window cleaning and screen cleaning? Can you do both?",
    answer:
      "Great question. Window cleaning focuses on glass panes (interior and exterior). Professional screen cleaning cleans the mesh, frame, and sill. Most customers combine both services to maximize clarity and air quality. We often bundle window and screen cleaning at a discounted rate. Screens are typically cleaned first, then windows, leaving both perfectly clean and bright.",
  },
  {
    question:
      "Why is my window screen turning brown or showing mold in North Vancouver?",
    answer:
      "Coastal moisture and North Vancouver's humid climate create ideal conditions for mold and mildew on screens. Brown staining is often algae or mineral deposits from rain and tap water. This buildup not only looks bad but can harbor spores harmful to respiratory health, especially during the damp fall and winter months. Professional screen cleaning removes stains and mold. We recommend biannual cleaning in spring and fall to prevent heavy regrowth during wet seasons, particularly in areas like Deep Cove where humidity is highest.",
  },
  {
    question:
      "Do you service all areas of North Vancouver, including Lynn Valley and Edgemont?",
    answer:
      "Yes. Mint Sanitary proudly serves all neighborhoods in North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also serve West Vancouver, Vancouver, Burnaby, and surrounding Greater Vancouver communities. Call (604) 671-6252 to confirm service availability in your specific neighborhood and schedule your free estimate.",
  },
];

const cleaningProcess: { title: string; body: string }[] = [
  {
    title: "Initial Assessment",
    body: "We inspect all screens for damage, identify material type, and assess debris levels. Any existing damage is noted so we can provide repair or replacement recommendations.",
  },
  {
    title: "Safe Removal",
    body: "Screens are gently extracted from frames and laid flat to prevent bending, warping, or damage to fragile mesh.",
  },
  {
    title: "Pre-Rinse",
    body: "A light water rinse loosens loose debris and dust, making the deep clean more effective.",
  },
  {
    title: "Deep Clean",
    body: "Using soft-bristle brushes and our eco-friendly cleaning solution, we scrub both sides of the mesh and frame thoroughly, reaching into corners and crevices where debris hides.",
  },
  {
    title: "Final Rinse",
    body: "Low-pressure water removes all soap residue and remaining debris, leaving screens spotless and safe for immediate use.",
  },
  {
    title: "Drying and Reinstallation",
    body: "Screens are allowed to dry naturally, then carefully reinstalled with proper fit and secure latch engagement.",
  },
];

const whyChooseItems: { title: string; body: string }[] = [
  {
    title: "Eco-Friendly Commitment",
    body: "Green, biodegradable products safe for families and the environment.",
  },
  {
    title: "7-Day Availability",
    body: "Schedule window screen cleaning when it suits you, including evenings and weekends.",
  },
  {
    title: "Local Expertise",
    body: "Deep knowledge of North Vancouver's coastal climate, pollen seasons, and screen challenges specific to neighborhoods like Edgemont Village, Lynn Valley, and Deep Cove.",
  },
  {
    title: "Transparent Pricing",
    body: "Free estimates, honest repair or replacement assessments, and no pressure upsells.",
  },
  {
    title: "Safe, Damage-Free Service",
    body: "Professional screen removal and reinstallation prevents frame bending and mesh tears.",
  },
  {
    title: "Full Assessments",
    body: "Screens inspected during cleaning; damage flagged early so you can address problems before they worsen.",
  },
  {
    title: "Eco-Safe Products",
    body: "All cleaning solutions are biodegradable and non-toxic, safe for pets and children.",
  },
  {
    title: "Satisfaction Guaranteed",
    body: "We stand behind every job; call (604) 671-6252 for questions or concerns.",
  },
];

export default function WindowScreenCleaningPage() {
  return (
    <ServicePageLayout
      title="Window Screen Cleaning in North Vancouver"
      heroImage="/window-cleaning-screen-north-vancouver.webp"
      heroIntro="Dirty window screens don't just look bad. They quietly compromise your home's air quality, natural light, and views. Over time, screens trap dust, pollen, mold spores, and debris, restricting airflow and trapping allergens that can affect your health."
      faqItems={faqItems}
      ctaHeading="Ready to Restore Your Window Clarity?"
      ctaBody="Dirty window screens compromise your home's light, views, and indoor air quality, especially critical during North Vancouver's allergy-heavy pollen season. Professional screen cleaning removes trapped contaminants, improves indoor air quality, and restores the beauty of your windows. Ask about our 10% first-clean discount (code: MINT25) and same-day or next-day availability."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <p>
              In North Vancouver, where the pollen season runs from February
              through October and coastal humidity creates ideal conditions for
              mold growth, clean screens matter.
            </p>
            <p>
              Mint Sanitary specializes in professional window screen cleaning
              that removes trapped contaminants, restores crystal-clear
              visibility, and improves indoor air quality, particularly during
              allergy season. We safely remove, deep-clean, and reinstall your
              screens using eco-friendly, biodegradable solutions that are safe
              for your family and pets. We&apos;re available 7 days a week for
              spring deep-cleans ahead of pollen season and regular maintenance
              visits throughout the year.
            </p>
            <p>
              <strong className="font-extrabold text-[#4E5062]">
                Get your{" "}
                <a href="/contact/" className="underline underline-offset-2">
                  free window screen cleaning estimate
                </a>{" "}
                in North Vancouver.
              </strong>{" "}
              Ask about our 10% first-clean discount with code MINT25.
            </p>
          </div>

          <div className="mt-14">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              What&apos;s Included in Our Window Screen Cleaning Service
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Our comprehensive window screen cleaning service in North Vancouver
              covers everything needed to restore your screens to like-new
              condition:
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Professional Removal
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Screens removed from frames with safe, damage-free handling (no
                  bent corners or damaged mesh).
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Deep Cleaning
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Specialized soft-bristle brushes, low-pressure water rinse, and
                  our eco-friendly biodegradable solution.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Frame Inspection
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Gentle dusting of window sills and tracks to remove accumulated
                  debris.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Careful Reinstallation
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  With proper fit and latch verification before we finish.
                </p>
              </div>
              <div className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Optional Assessment
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Screen damage assessment with transparent guidance on repair or
                  replacement if needed.
                </p>
              </div>
            </div>
            <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              This service works for all screen material types, including
              fiberglass, aluminum, and specialty mesh. Older homes and new
              builds alike benefit from our service&mdash;our technicians adjust
              their approach to protect your screens while achieving superior
              cleanliness.
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
            Why Professional Screen Cleaning Matters
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Indoor Air Quality &amp; Health
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Your window screens act as a filter, but when clogged with dust,
                pollen, and mold, they become a barrier to clean air. In North
                Vancouver&apos;s extended pollen season (February to October,
                with peak activity March to July), tree and grass pollen
                accumulate rapidly on screens. When you open your windows hoping
                for fresh air, those trapped contaminants limit airflow and allow
                some particles to blow inside anyway.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Coastal humidity in neighborhoods like Lower Lonsdale and Deep
                Cove creates a perfect storm for mold and mildew growth on
                screens. These spores don&apos;t just sit on the mesh. They can
                be inhaled when windows are opened, triggering respiratory
                irritation and allergic reactions. Professional screen cleaning
                removes these trapped contaminants, restoring healthy air
                circulation and significantly reducing the indoor allergen load.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Window Appearance &amp; Clarity
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                A dirty screen obscures your view and reduces natural light
                penetration, making rooms feel darker and smaller than they are.
                Grime, pollen residue, dust, and water stains accumulate in frame
                crevices and along mesh edges where DIY cleaning misses. Over
                months, this buildup becomes stubborn and harder to remove.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Professional window screen cleaning in North Vancouver restores
                crystal-clear visibility both inside and out, allowing you to
                fully enjoy your views and maximize natural lighting in every
                room.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Seasonal Urgency: Allergy Season Prep
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Spring and early summer mark peak tree and grass pollen in North
                Vancouver. Homeowners in Edgemont Village, Seymour Heights, and
                other local neighborhoods with allergies or asthma should clean
                their screens before and after major pollen peaks. This simple
                step significantly reduces the amount of pollen entering your
                home through open windows, providing measurable relief during the
                most difficult allergy months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Our Window Screen Cleaning Process
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Every professional window screen cleaning in North Vancouver follows
            a systematic process designed to protect your screens while achieving
            deep cleanliness:
          </p>
          <div className="mt-8 space-y-6">
            {cleaningProcess.map((step, i) => (
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
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Our window screen removal and cleaning service takes approximately 1
            to 2 hours for a typical home with 8 to 12 screens, depending on how
            soiled they are and whether repairs are needed. We schedule flexibly
            and work 7 days a week for maximum convenience.
          </p>
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
            Screen Repair &amp; Replacement Assessment
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            During your professional screen cleaning in North Vancouver, we
            inspect each screen and provide transparent guidance on repair versus
            replacement. No pressure, no upsell. Just honest recommendations.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                When Repair Makes Sense
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Small holes or tears (less than 1 inch) can be patched or
                re-screened affordably, typically{" "}
                <a
                  href="https://www.thisoldhouse.com/windows/window-screen-replacement-cost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  $15 to $50 per screen
                </a>
                . If the frame is still structurally sound but the mesh is
                damaged, repair extends screen life without requiring a new frame
                purchase. Loose splines or minor frame damage also benefit from
                repair rather than full replacement, saving you money while
                restoring function.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                When Replacement Is Better
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                If the frame is bent, dented, or warped, full replacement is
                necessary for proper fit and operation. Large tears or multiple
                damage areas make replacement more economical than repair.
                Screens that are 10 or more years old may also benefit from
                upgrading to newer materials that resist corrosion better or
                offer specialty features.
              </p>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary assesses damage during your cleaning and provides
            transparent repair versus replacement recommendations. If you decide
            to upgrade, we source new screens (fiberglass or aluminum) in your
            preferred material and install them right away.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Fiberglass vs. Aluminum Window Screens
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Choosing the right{" "}
            <a
              href="https://www.phifer.com/blog/how-to-choose-screening-material.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              screen material
            </a>{" "}
            matters, especially in North Vancouver&apos;s coastal climate.
            Here&apos;s how the two most common materials compare:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Fiberglass Screens
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Durability:
                  </strong>{" "}
                  Resistant to coastal salt and moisture; minimal corrosion risk
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Flexibility:
                  </strong>{" "}
                  Stretches and rebounds without sagging; forgiving of impacts
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Cost:
                  </strong>{" "}
                  $15 to $35 per screen
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Lifespan:
                  </strong>{" "}
                  10 to 15+ years in coastal BC conditions
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Best For:
                  </strong>{" "}
                  North Vancouver coastal climate (salt spray, humidity)
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Aluminum Screens
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Durability:
                  </strong>{" "}
                  Highly durable but susceptible to dents if bumped or hit
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Flexibility:
                  </strong>{" "}
                  Rigid; holds shape well but doesn&apos;t absorb impacts
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Cost:
                  </strong>{" "}
                  $30 to $70 per screen (roughly 2x fiberglass)
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Lifespan:
                  </strong>{" "}
                  8 to 12 years if protected from dents and impacts
                </li>
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    Best For:
                  </strong>{" "}
                  Areas with high wind or insect concerns; extra strength needed
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            North Vancouver&apos;s coastal environment favors{" "}
            <a
              href="https://www.qualitywindowscreen.com/aluminum-vs.-fiberglass-comparing-screen-panel-options.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              fiberglass for longevity and salt-spray resistance
            </a>
            , though both materials are excellent choices. Mint Sanitary stocks
            both and advises based on your home&apos;s location, layout, and
            usage patterns.
          </p>
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
            Pricing &amp; Availability
          </h2>
          <div className="mt-6 space-y-4 font-body text-[15px] leading-[1.7] text-white/80">
            <p>
              Window screen cleaning pricing in North Vancouver is available
              through a free, no-obligation quote. We provide transparent
              estimates based on the number of screens, material type, and any
              repairs or replacements needed.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Combo Packages
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Screen and{" "}
                <a
                  href="/window-cleaning-north-vancouver/"
                  className="underline underline-offset-2"
                >
                  window cleaning
                </a>{" "}
                discounts are available when you combine services.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Special Offer
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                10% off your first professional screen cleaning with code{" "}
                <strong className="font-extrabold text-white">MINT25</strong>.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Flexible Scheduling
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We&apos;re available 7 days a week, including early morning,
                evening, and weekend appointments to fit your schedule.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                No Hidden Fees
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                All-inclusive pricing means no surprise charges for travel or
                minimum service calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Service Areas
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Mint Sanitary proudly serves{" "}
                <a
                  href="/service-areas/"
                  className="underline underline-offset-2"
                >
                  North Vancouver and the greater Greater Vancouver region
                </a>
                , including:
              </p>
              <ul className="mt-4 space-y-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                <li>
                  <strong className="font-extrabold text-[#4E5062]">
                    North Vancouver
                  </strong>{" "}
                  (primary service area)&mdash;Lower Lonsdale, Lynn Valley, Deep
                  Cove, Edgemont Village, Seymour Heights
                </li>
                <li>West Vancouver</li>
                <li>Vancouver</li>
                <li>Burnaby</li>
                <li>Greater Vancouver suburbs and municipalities</li>
              </ul>
              <p className="mt-4 font-body text-[15px] font-bold leading-[1.7] text-[#4E5062]">
                Call for service availability in your neighborhood:{" "}
                <a
                  href="tel:+16046716252"
                  className="underline underline-offset-2"
                >
                  (604) 671-6252
                </a>
              </p>
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Choose Mint Sanitary
              </h2>
              <ul className="mt-6 space-y-4">
                {whyChooseItems.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-[14px] bg-[#f4f8ff] p-5"
                  >
                    <p className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                      {item.title}
                    </p>
                    <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
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
            A Personal Experience
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            I remember a customer in Seymour Heights who&apos;d been struggling
            with allergies for years. She&apos;d tried countless products and
            remedies, but nothing seemed to help until she finally invested in
            professional screen cleaning before spring pollen season. Within two
            weeks of regular cleanings, she noticed she could open her windows
            without triggering itchy eyes and congestion. It&apos;s a reminder
            that sometimes the simplest solutions make the biggest difference.
            Clean screens are a health investment, especially during North
            Vancouver&apos;s intense allergy season.
          </p>
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
                    href="/gutter-cleaning-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    Gutter cleaning services in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/pressure-washing-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    Pressure washing in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/post-construction-window-cleaning/"
                    className="underline underline-offset-2"
                  >
                    Post-construction cleaning in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/commercial-cleaning-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    Commercial cleaning services in North Vancouver
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
                    href="https://us.e-cloth.com/blogs/cleaning-freq/window-screens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    E-Cloth USA: Recommended Window Screen Cleaning Frequency
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.qualitywindowscreen.com/aluminum-vs.-fiberglass-comparing-screen-panel-options.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Quality Screen Company: Fiberglass vs. Aluminum Screens for
                    Coastal Climates
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thisoldhouse.com/windows/window-screen-replacement-cost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    This Old House: Window Screen Replacement Cost Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.phifer.com/blog/how-to-choose-screening-material.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Phifer: How to Choose the Right Screening Material
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
