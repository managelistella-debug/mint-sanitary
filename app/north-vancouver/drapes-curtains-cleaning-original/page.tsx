import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/drapes-curtains-cleaning-original
// so the CMS version at /north-vancouver/drapes-curtains-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Drapes & Curtains Cleaning North Vancouver | Mint Sanitary",
  description:
    "North Vancouver drapes and curtains cleaning from trained pros. Eco-friendly, in-home or drop-off service, free estimates. Get a quote today.",
  robots: { index: false, follow: false },
};

const fabricTypes = [
  {
    title: "Silk Drapes",
    paragraphs: [
      "Silk reacts to moisture, temperature, and pH. Get any of those wrong and you risk shrinkage, fading, or bleeding dye. We use low-moisture methods with pH-balanced, plant-based solvents, and we test colorfastness on a hidden section before starting.",
    ],
  },
  {
    title: "Velvet Curtains",
    paragraphs: [
      "Velvet's soft nap flattens and mats under aggressive rubbing or high-pressure water. Standard carpet cleaning equipment would damage it permanently. We vacuum gently, spot-treat where needed, use moisture-controlled extraction, and brush the nap back into shape afterward.",
    ],
  },
  {
    title: "Linen Drapes",
    paragraphs: [
      "Linen is a natural fiber that shrinks under heat and moisture and wrinkles easily. We control moisture carefully through the whole process and dry linen drapes on specialized racks rather than letting them air dry unevenly.",
    ],
  },
  {
    title: "Synthetic Fabrics",
    paragraphs: [
      "Synthetic curtains tolerate more moisture and heat than natural fibers, but they still trap odors and embedded dust over time. Cleaning them keeps them fresh and extends how long they look good.",
    ],
  },
  {
    title: "Blackout and Thermal-Backed Curtains",
    paragraphs: [
      "Blackout curtains have an acrylic resin backing that deteriorates with water exposure. In-home dry cleaning is the only safe method for these curtains in North Vancouver homes. No water touches the backing at any point.",
    ],
  },
  {
    title: "Lined and Interlining Drapes",
    paragraphs: [
      "Lined drapes have bonded layers of fabric. Too much water can separate those layers or shrink them unevenly. We keep moisture levels precise for lined and interlined pieces so the layers stay bonded correctly.",
    ],
  },
  {
    title: "Specialty Fabrics",
    paragraphs: [
      "Brocade, tapestry, chintz, and lamé curtains are often heirloom pieces or a real investment. We use hand-cleaning techniques and ultra-gentle methods built for fabrics like these.",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Inspection and Assessment",
    paragraphs: [
      "We examine the fabric content, current condition, and colorfastness with a test in a hidden area. We also flag anything unusual, like loose beading, delicate embroidery, or backing that needs extra care.",
    ],
  },
  {
    step: 2,
    title: "Pre-Treatment and Vacuuming",
    paragraphs: [
      "Low-suction vacuuming lifts surface dust, pollen, and loose particles first. Then we apply an eco-friendly pre-treatment matched to the type of staining, whether that's wine, grease, or general organic buildup.",
    ],
  },
  {
    step: 3,
    title: "Cleaning",
    paragraphs: [
      "For in-home service, we use moisture-controlled dry cleaning with plant-based agents in carefully measured amounts and gentle agitation. For drop-off service at our North Vancouver facility, heavily soiled or delicate fabrics get more intensive treatment. Either way, we monitor moisture levels for the specific fabric on the rod.",
    ],
  },
  {
    step: 4,
    title: "Rinse and Extraction",
    paragraphs: [
      "Thorough extraction matters because leftover residue causes yellowing and attracts more dirt over time. Heavily soiled curtains get multiple passes. We neutralize odors without masking them under an artificial perfume.",
    ],
  },
  {
    step: 5,
    title: "Drying and Finishing",
    paragraphs: [
      "In-home cleaning usually leaves curtains hanging with fans running, and they're often dry within a few hours when North Vancouver weather cooperates. Drop-off cleaning uses specialized drying racks in a climate-controlled facility, and we can steam-press curtains afterward to restore their original shape.",
    ],
  },
];

const ecoReasons = [
  {
    title: "Safer for Delicate Fibers",
    paragraphs: [
      "Harsh solvents like PERC can weaken silk fibers, strip coatings off blackout backing, and fade color over repeated use. Plant-based products are gentler on delicate fabric while still handling real soils, including grease, wine, food stains, smoke residue, and pet accidents.",
    ],
  },
  {
    title: "Healthier Home Environment",
    paragraphs: [
      "Off-gassing and toxic fumes from harsh chemicals aren't something you want lingering in a home, especially where someone deals with chemical sensitivities, asthma, or has young children around. Biodegradable products also don't end up polluting local waterways or soil.",
    ],
  },
  {
    title: "Built for North Vancouver's Climate",
    paragraphs: [
      "In a moisture-rich environment, curtains need to dry fast after cleaning. Residual chemical solvents slow that drying process and can attract more moisture. Plant-based products dry faster and resist mold growth better, which is exactly what North Vancouver's damp conditions call for.",
    ],
  },
];

const relatedServices = [
  { title: "Carpet cleaning in North Vancouver", href: "/north-vancouver/carpet-cleaning" },
  { title: "Area rug cleaning in North Vancouver", href: "/north-vancouver/carpet-cleaning#area-rug-cleaning" },
  { title: "Upholstery cleaning in North Vancouver", href: "/north-vancouver/upholstery-cleaning" },
  { title: "House cleaning in North Vancouver", href: "/north-vancouver/house-cleaning" },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
];

const faqItems = [
  {
    question: "How often should I have my drapes cleaned in North Vancouver?",
    answer:
      "Most North Vancouver homes do well with cleaning every 12 to 18 months for lightly used drapes. High-traffic homes, or ones with pets and kids, should clean annually. Blackout curtains benefit from yearly cleaning too, while formal drapes that see little use can stretch to every two years. If you notice visible dust, odors, or allergy symptoms flaring up, that's your sign to book sooner.",
  },
  {
    question: "Can you clean delicate silk drapes in North Vancouver without damaging them?",
    answer:
      "Yes. Our trained North Vancouver technicians test colorfastness before touching the fabric, then use pH-balanced, plant-based solvents with low-moisture techniques. We never machine wash or dry silk. For the best result on silk, we typically recommend drop-off service.",
  },
  {
    question: "What's the difference between dry cleaning and steam cleaning for curtains in North Vancouver?",
    answer:
      "Dry cleaning uses minimal moisture and works faster, often finishing in hours, which makes it the standard choice for in-home service and for blackout curtains. Steam cleaning uses hot water extraction and takes longer, but it's more thorough on heavily soiled fabric. In North Vancouver's humid climate, dry cleaning is often the better everyday choice since it dries faster and resists mold. Heavily soiled drapes still benefit from steam-based extraction through our drop-off service.",
  },
  {
    question: "Will your eco-friendly products handle heavily soiled curtains in North Vancouver?",
    answer:
      "Yes. Our plant-based formulas break down embedded grease, wine stains, smoke odor, and pet accidents. North Vancouver homes with fireplaces or heavy cooking odors typically see a dramatic difference after a clean. For severe staining, drop-off service allows longer treatment time and stronger results.",
  },
  {
    question: "How do I prepare my North Vancouver home for in-home drapery cleaning?",
    answer:
      "Not much prep is needed. Just make sure our technicians can reach the windows and curtain rods without having to move heavy furniture, and contain pets if that's easier for your household. We bring our own equipment and drop cloths to every North Vancouver appointment.",
  },
  {
    question: "Is pickup and delivery available for drop-off drapery cleaning in North Vancouver?",
    answer:
      "Yes. We offer pickup and delivery throughout North Vancouver, including Lower Lonsdale, Lynn Valley, and Deep Cove. You're also welcome to drop off and pick up curtains directly at our facility.",
  },
  {
    question: "Can you remove smoke odor from curtains in North Vancouver?",
    answer:
      "Yes. Our extraction and odor-neutralizing treatments remove smoke smell from fireplaces, cooking, or past smoking. If the odor is severe, our North Vancouver drop-off service gives us more time with the fabric for a deeper result.",
  },
  {
    question: "How long does drapery cleaning take in North Vancouver?",
    answer:
      "In-home cleaning typically takes 2 to 4 hours and often finishes same day. Drop-off cleaning takes 3 to 7 business days. We'll give you a specific estimate for your North Vancouver home when you book.",
  },
  {
    question: "Are your technicians bonded and insured for work in my North Vancouver home?",
    answer:
      "Yes. Every technician working in North Vancouver homes is bonded and insured, so you're covered from the moment they arrive.",
  },
  {
    question: "What if my drapes need repair while being cleaned in North Vancouver?",
    answer:
      "Our inspection catches loose hems, missing buttons, and broken pleats before cleaning starts. We'll walk you through repair options and costs upfront. Small repairs are sometimes included, while larger restoration work gets quoted separately, so there are no surprises for North Vancouver clients.",
  },
];

export default function DrapesCurtainsCleaningPage() {
  return (
    <ServicePageLayout
      title="Drapes and Curtains Cleaning in North Vancouver"
      heroImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80"
      heroIntro="Your curtains work harder than you'd think. In North Vancouver, they filter rain-heavy air, trap dust, and absorb months of moisture before anyone notices a problem. Mint Sanitary cleans drapes and curtains for homes across North Vancouver, from silk sheers in Lower Lonsdale condos to heavy blackout panels in Lynn Valley bedrooms. Our teams are background-checked, bonded, and insured, and every job comes with a 24-hour satisfaction guarantee."
      faqItems={faqItems}
      ctaHeading="Ready to Restore Your North Vancouver Drapes?"
      ctaBody="Don't wait. Get a free North Vancouver drapery cleaning estimate. Call 236-688-3248 or email hello@mintsanitary.com. Use MINT26 for 10% off your first clean."
      ctaHref="/rates"
    >
      {/* ── Image + Text Intro ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/eco-friendly-cleaning-products-north-vancouver.jpg"
                alt="Eco-friendly drapery cleaning products in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px] lg:h-full"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Professional Drapes and Curtains Cleaning Matters in North Vancouver
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary cleans drapes and curtains for homes across
                North Vancouver, from silk sheers in Lower Lonsdale condos
                to heavy blackout panels in Lynn Valley bedrooms. Our
                trained technicians use eco-friendly, plant-based
                products that clean thoroughly without damaging delicate
                fabrics like silk, velvet, or specialty linens. We offer
                flexible scheduling with 7-day availability, free
                estimates, and 10% off your first clean with code MINT26.
                If you&apos;re outside North Vancouver, our general{" "}
                <a href="/services/drapes-curtains-cleaning" className="underline underline-offset-2">
                  drapes and curtains cleaning page
                </a>{" "}
                covers the same service across Greater Vancouver.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters — Detailed Sub-Sections ──────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-6 font-body text-[15px] leading-[1.7] text-white/80">
            <h3 className="text-[18px] font-extrabold text-white">
              Why North Vancouver&apos;s Climate Makes Drapery Cleaning Different
            </h3>
            <p>
              North Vancouver sits closer to the mountains and gets more
              rain than most of Metro Vancouver. That moisture doesn&apos;t
              stay outside. It settles into fabric, and curtains absorb it
              year-round whether they&apos;re near an open window or not.
            </p>
            <p>
              Damp fabric plus household dust is a bad combination. Dust
              that lands on a slightly damp curtain becomes a place for
              mold spores to start and dust mites to multiply. Vacuuming
              the surface doesn&apos;t reach what&apos;s happening inside
              the fibers. Homes in Lower Lonsdale, Deep Cove, and Seymour
              Heights deal with this constantly because of their proximity
              to the water and the North Shore mountains.
            </p>
            <p>
              Regular professional cleaning breaks that cycle before it
              becomes a bigger issue for the fabric or for anyone in the
              house with allergies or asthma.
            </p>
            <h3 className="text-[18px] font-extrabold text-white">
              Why Professional Cleaning Matters for North Vancouver Curtains
            </h3>
            <p>
              Quality drapes cost real money, and dirt left too long works
              against the fabric permanently. Ground-in soil is abrasive,
              and dye that&apos;s set into fibers by delayed cleaning
              doesn&apos;t always come back out. Regular professional
              cleaning protects that investment. It also restores how
              curtains look. Faded color and trapped odors don&apos;t go
              away on their own, and only proper cleaning brings vibrancy
              back.
            </p>
            <p>
              There&apos;s a health benefit too, particularly in bedrooms.
              Curtains act as a reservoir for allergens, and North
              Vancouver residents with allergies or asthma often notice
              better sleep and fewer morning symptoms once that reservoir
              is removed.
            </p>
            <p>
              DIY attempts tend to backfire. Regular detergent shrinks
              fabric. Hot water bleeds silk dye. A machine dryer can melt
              blackout backing. Scrubbing crushes velvet nap flat.
              Professional cleaning avoids all of that.
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
            In-Home vs. Drop-Off Drapery Cleaning in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/85">
            Both options are available with pickup and delivery throughout
            North Vancouver.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-6 font-body text-[15px] leading-[1.7] text-white/85">
              <h3 className="text-[18px] font-extrabold text-white">In-Home Cleaning</h3>
              <p className="mt-3">
                Runs $2 to $7 per linear foot, typically $70 to $150 per
                set. It&apos;s a good fit for silk sheers, blackout
                curtains, drapes on a regular maintenance schedule, and
                anyone on a tight timeline. Turnaround is a few hours,
                often same day. Less handling means less risk to delicate
                fabric, and it&apos;s the only real option for blackout or
                thermal-backed curtains that can&apos;t tolerate moisture
                exposure.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6 font-body text-[15px] leading-[1.7] text-white/85">
              <h3 className="text-[18px] font-extrabold text-white">Drop-Off Cleaning</h3>
              <p className="mt-3">
                Runs $1 to $5 per linear foot, typically $60 to $140 per
                set, plus $25 to $60 per set if you want pickup and
                delivery. Turnaround is 3 to 7 business days. This route
                works best for heavily soiled or delicate fabrics, stubborn
                stains, hand-beaded or pleated draperies, and bundled
                multi-set orders. Access to industrial-strength equipment
                at our facility means a more thorough clean, and we can
                press and reshape curtains before they go back up.
              </p>
            </div>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/85">
            Use code MINT26 for 10% off your first cleaning, and ask about
            bundle discounts if you&apos;re cleaning curtains from more
            than one room. For in-home or drop-off cleaning, we service
            North Vancouver completely, including Lynn Valley, Edgemont
            Village, Seymour Heights, and Lower Lonsdale. Customers in West
            Vancouver and across Greater Vancouver also benefit from our
            flexible scheduling and fast service.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Fabric Types We Clean Across North Vancouver Homes
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Different drapery fabrics need different handling. Treating a
            silk panel the same way you&apos;d treat a synthetic curtain
            can ruin it. Our North Vancouver technicians assess each fabric
            before choosing a method.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {fabricTypes.map((fabric) => (
              <div key={fabric.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{fabric.title}</h3>
                {fabric.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps — Centered Circle Grid ──────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our Drapery Cleaning Process for North Vancouver Homes
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                  {step.title}
                </h3>
                {step.paragraphs.map((p, i) => (
                  <p key={i} className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Eco-Friendly — AccordionWithImage ─────────── */}
      <AccordionWithImage
        heading="Why We Use Eco-Friendly Products on North Vancouver Curtains"
        intro="We've chosen plant-based, non-toxic cleaning products intentionally. This isn't a marketing gimmick. It's the smarter approach for your home, your family, and your fabrics."
        image="/mint-sanitary-team-north-vancouver.jpg"
        imageAlt="Mint Sanitary team in North Vancouver"
        items={ecoReasons.map((r) => ({ title: r.title, body: r.paragraphs.join(" ") }))}
        ctaHref="/contact"
        ctaLabel="Get a Free Estimate"
      />

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
            In-Home vs. Drop-Off Drapery Cleaning Pricing in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Use code MINT26 for 10% off your first cleaning, and ask about
            bundle discounts if you&apos;re cleaning curtains from more
            than one room.
          </p>
          <div className="mt-6 rounded-[14px] bg-white/10 p-5">
            <h3 className="font-body text-[17px] font-extrabold text-white">Free Estimate Process</h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              Every quote is no-obligation and free. We&apos;ll discuss your
              specific curtains, take photos if helpful, and provide a
              written estimate before work begins. No surprises. No hidden
              fees. Just honest, upfront pricing. Call 236-688-3248 or
              email hello@mintsanitary.com for your free estimate.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Areas — Chips + Map ───────────────────── */}
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
              Areas We Serve Near North Vancouver
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary cleans drapes and curtains throughout North
                Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn
                Valley, Deep Cove, Edgemont Village, and Seymour Heights. We
                also serve West Vancouver, Vancouver, and Burnaby.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                If your carpets need attention too, our{" "}
                <a href="/north-vancouver/carpet-cleaning" className="underline underline-offset-2">
                  North Vancouver carpet cleaning
                </a>{" "}
                team uses the same eco-friendly approach.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25">
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
        </div>
      </section>

      {/* ── Ready to Restore ──────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Ready to Restore Your North Vancouver Drapes?
          </h2>
          <div className="mt-6 rounded-[14px] bg-white/[0.12] p-6 font-body text-[15px] leading-[1.7] text-white/80">
            <p>
              Your curtains deserve professional care. Whether they&apos;re
              delicate silk sheers, cozy velvet drapes, or blackout
              curtains that block the morning light, we handle them with
              expertise. North Vancouver&apos;s humidity, dust, and
              allergens take their toll on fabric. Professional cleaning
              restores them completely.
            </p>
            <p className="mt-3">
              A client in Lower Lonsdale put off cleaning her silk drapes
              for three years. She loved them, but she was afraid the
              process would damage the fabric, so she kept putting it off.
              When we brought the drapes back, she cried. The color had
              come back to life, they hung the way they had when they were
              new, and she told us it felt like getting new curtains
              without paying for new curtains. That&apos;s the kind of
              result we aim for with every silk piece that comes through
              our North Vancouver service, especially ones people have been
              nervous to clean.
            </p>
            <p className="mt-4">
              <strong className="font-extrabold text-white">Call:</strong>{" "}
              236-688-3248
              <br />
              <strong className="font-extrabold text-white">Email:</strong>{" "}
              hello@mintsanitary.com
              <br />
              <strong className="font-extrabold text-white">Discount:</strong>{" "}
              MINT26 for 10% off your first clean
            </p>
          </div>
          <div className="mt-12">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Related Services in North Vancouver
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              If you&apos;re investing in professional drapery care,
              consider these complementary services we offer throughout
              North Vancouver:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedServices.map((svc) => (
                <a
                  key={svc.href}
                  href={svc.href}
                  className="rounded-[14px] bg-white/[0.12] p-5 font-body text-[15px] font-extrabold text-white underline underline-offset-2"
                >
                  {svc.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
