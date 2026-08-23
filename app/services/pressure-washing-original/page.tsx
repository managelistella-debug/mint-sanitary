import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/pressure-washing-original
// so the CMS version at /services/pressure-washing can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Pressure Washing & Soft Washing | Mint Sanitary",
  description:
    "Professional pressure washing and soft washing for driveways, decks, siding, and fences across Greater Vancouver. Eco-friendly, insured, free estimates.",
  robots: { index: false, follow: false },
};

const ourServices = [
  {
    title: "Driveway Pressure Washing",
    image: "/pressure-washing-driveway-north-vancouver.webp",
    href: "/north-vancouver/pressure-washing#driveway-pressure-washing",
    description:
      "Concrete, asphalt, and paver driveways collect oil stains, tire marks, and organic growth over time. High-pressure treatment strips these away, removes slippery moss and algae, and preps the surface for sealing.",
  },
  {
    title: "Deck and Patio Cleaning",
    image: "/pressure-washing-deck-patio-north-vancouver.webp",
    href: "/north-vancouver/pressure-washing#deck-patio-cleaning",
    description:
      "Wood decks and composite patios need soft washing: low pressure with a biodegradable detergent that lifts organic growth without damaging the wood grain or voiding a composite warranty.",
  },
  {
    title: "House Washing",
    image: "/pressure-washing-house-washing-north-vancouver.webp",
    href: "/north-vancouver/pressure-washing#house-washing",
    description:
      "Home siding builds up algae and mold over time, especially on shaded walls. Vinyl, fiber cement, cedar, and stucco all call for soft washing to clean thoroughly without risking damage.",
  },
  {
    title: "Fence Washing",
    image: "/pressure-washing-fence-north-vancouver.webp",
    href: "/north-vancouver/pressure-washing#fence-washing",
    description:
      "Cedar, vinyl, and composite fencing hold up better with regular cleaning. Soft washing clears algae and moss without scarring the wood grain, and preps the surface for staining or sealing.",
  },
];

const processSteps = [
  { title: "Assessment", body: "We inspect the surface, identify the material, and test an inconspicuous spot to confirm the right PSI and cleaning method. This step is free and comes with a transparent quote." },
  { title: "Pre-treatment", body: "We apply a biodegradable cleaning solution that breaks down moss, algae, and mildew at the root. The solution dwells for several minutes before rinsing, so it does the work instead of raw pressure." },
  { title: "Washing and rinsing", body: "We clean at the correct PSI for the surface, using wide-angle nozzles and steady, even strokes." },
  { title: "Final inspection and drying", body: "We check for missed spots and give you a drying timeline before any staining, sealing, or other follow-up work." },
];

const faqItems = [
  {
    question: "What's the difference between pressure washing and soft washing?",
    answer: "Pressure washing uses high PSI, 1,500 to 4,500, for hard surfaces like concrete and pavers. Soft washing uses low pressure, under 700 PSI, with a biodegradable detergent for wood, composite, and siding. We match the method to your surface during the free assessment.",
  },
  {
    question: "How often should I have my property pressure washed?",
    answer: "Most homes benefit from cleaning every 12 to 24 months, with spring (April to May) and fall (September to October) as the two ideal windows. Shaded or heavily wooded properties may need more frequent service.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer: "Only when the technique matches the material. Concrete, asphalt, and pavers handle higher PSI, while wood, composite, and siding need soft washing at lower pressure. Using the wrong method on the wrong surface is the most common cause of DIY damage.",
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer: "Yes. Our cleaning solutions are biodegradable and safe for pets, plants, and local stormwater systems, and our process complies with municipal stormwater regulations.",
  },
  {
    question: "How much does pressure washing cost?",
    answer: "Pricing depends on square footage, surface type, and condition. Driveways typically run $150 to $300, deck cleaning runs $150 to $400, and house washing runs $200 to $850+ depending on home size. Visit /rates for a detailed breakdown or request a free estimate.",
  },
  {
    question: "Can pressure washing help before I sell my home?",
    answer: "Yes. Homes with strong curb appeal sell for 7 to 17% more than comparable homes with a dirty exterior. A clean driveway and freshly washed siding make a strong first impression in listing photos and showings.",
  },
  {
    question: "Should I pressure wash my deck myself, or hire a professional?",
    answer: "DIY pressure washing is one of the most common ways homeowners damage their own deck. Excessive PSI gouges wood fibers and can lead to $1,200 or more in board repairs. Professional soft washing uses controlled pressure and the right chemistry to clean safely.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes. Every job starts with a free, no-obligation on-site or phone assessment, and we provide a transparent quote before any work begins.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Greater Vancouver, with North Vancouver as our home base. Visit /service-areas for the full list of neighborhoods and cities we cover, or see our North Vancouver page at /north-vancouver for local details.",
  },
  {
    question: "What's included in a house washing service?",
    answer: "House washing typically covers siding, fascia, soffits, foundation trim, window exteriors, and exterior trim boards, cleaned with soft washing to protect the surface material.",
  },
];

export default function ServicesPressureWashingPage() {
  return (
    <ServicePageLayout
      title="Professional Pressure Washing and Soft Washing Services"
      heroImage="/pressure-washing-house-washing-north-vancouver.webp"
      heroSubtitle="Pressure Washing & Soft Washing"
      heroIntro="Dirt, moss, algae, and grime build up on every exterior surface over time. Left alone, that buildup turns slippery, stains permanently, and speeds up wear on wood, concrete, and siding. Mint Sanitary provides professional exterior cleaning across Greater Vancouver, covering driveways, decks, patios, house siding, and fences."
      faqItems={faqItems}
      ctaHeading="Ready to Restore Your Driveway, Deck, Siding, or Fence?"
      ctaBody="Get a free, transparent quote at /rates or call 236-688-3248. New customers save 10% with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            We&apos;re insured, rated 4.9/5 from 120+ reviews, and available
            7 days a week.
          </p>
        </div>
      </section>

      {/* ── Pressure vs Soft Washing (f4f8ff bg) ─────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Pressure Washing vs. Soft Washing: What&apos;s the Difference?
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            These are two different techniques, and using the wrong one on
            the wrong surface causes damage. A trained technician tests
            the surface first and picks the method and pressure level
            that fits the material, not the other way around.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Pressure Washing</h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Uses high-pressure water, typically 1,500 to 4,500 PSI, to
                strip dirt, grime, and stains from hard surfaces. It works
                well on concrete, pavers, asphalt, and stone.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Soft Washing</h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Uses low pressure, under 700 PSI, paired with a
                biodegradable detergent. It&apos;s the safer choice for
                wood decks, composite decking, painted trim, and home
                siding, where high pressure can gouge fibers, crack
                panels, or force water behind the surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Pressure Washing Services Image Card Grid (blue bg) ── */}
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
            Our Pressure Washing Services
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ourServices.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[20px] bg-white/10 p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.18]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[150px] w-full rounded-[14px] object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 font-display-reg text-[16px] uppercase tracking-[0.4px] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                  {item.description}
                </p>
                <span className="mt-3 inline-block border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white transition-colors group-hover:text-white/70">
                  Learn More
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters (white bg) ─────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Professional Cleaning Matters
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[16px] font-extrabold text-white">Curb Appeal and Property Value</h3>
              <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                Homes with strong curb appeal sell for 7 to 17% more than
                similar homes with a neglected exterior. A clean driveway,
                deck, and set of siding shapes the first impression
                buyers, guests, and neighbors form of your home.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[16px] font-extrabold text-white">Protecting Your Investment</h3>
              <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                Moss and algae don&apos;t just sit on the surface. They
                feed on organic material in paint, wood, and mortar
                joints, which speeds up rot, cracking, and paint failure.
                Cleaning at the right interval catches this before it
                turns into a repair bill.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[16px] font-extrabold text-white">Safety</h3>
              <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                Moss and algae make driveways, decks, and walkways
                slippery, and that risk climbs during the wet months of
                the year. Regular cleaning removes the growth before it
                becomes a hazard for kids, pets, and older family members.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-5">
              <h3 className="font-body text-[16px] font-extrabold text-white">Maintenance Timing</h3>
              <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                Most surfaces benefit from cleaning every 12 to 24 months.
                Spring cleaning, in April and May, clears out winter
                buildup. Fall cleaning, in September and October, gets
                surfaces ready for the wet season ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps (f4f8ff bg) ─────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our Process
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DIY Backfires + Eco-Friendly (blue bg) ────────── */}
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
            Why DIY Pressure Washing Backfires
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Renting equipment looks like the cheaper option, but the math
            rarely works out. Rental units cost $40 to $100 per day, and
            an untrained homeowner typically needs 9 or more hours to
            finish a job a trained crew handles in about 2.5 hours. The
            bigger cost is damage. Incorrect pressure or technique can
            crack a window (repairs run $300 to $750) or splinter deck
            boards badly enough to need $1,200 or more in repairs. A
            rental machine has no way to tell you the safe PSI for your
            specific material, so that judgment call is left entirely to
            you.
          </p>
          <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Eco-Friendly, Insured, and Available 7 Days a Week</h3>
          <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Our cleaning solutions are biodegradable and safe for pets,
            plants, and stormwater systems, and our methods comply with
            local stormwater bylaws. We carry WCB coverage and liability
            insurance, offer free estimates and transparent pricing, and
            never lock customers into contracts. New customers get 10%
            off their first clean with code MINT26.
          </p>
        </div>
      </section>

      {/* ── Pricing + Serving Greater Vancouver (white bg) ────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Pricing
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every property is different, so we quote based on square
            footage, material, and condition. As a general guide: driveway
            pressure washing runs $150 to $300, deck cleaning runs $150 to
            $400, and house washing runs $200 to $850+ depending on home
            size. Visit{" "}
            <a href="/rates" className="underline underline-offset-2">
              /rates
            </a>{" "}
            for full pricing details, or call for a free, no-obligation
            estimate.
          </p>
          <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Serving Greater Vancouver</h3>
          <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is based in{" "}
            <a href="/north-vancouver" className="underline underline-offset-2">
              North Vancouver
            </a>
            . If you&apos;re in North Vancouver, our{" "}
            <a href="/north-vancouver/pressure-washing" className="underline underline-offset-2">
              North Vancouver pressure washing
            </a>{" "}
            page has the full pricing breakdown and local detail. See our{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              service areas
            </a>{" "}
            for the full coverage list.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
