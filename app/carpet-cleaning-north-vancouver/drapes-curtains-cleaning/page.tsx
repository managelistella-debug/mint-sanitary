import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

export const metadata: Metadata = {
  title:
    "Professional Drapes & Curtains Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Expert drapery cleaning in North Vancouver. Eco-friendly, IICRC-certified service for silk, velvet & blackout curtains. Free estimates & 10% off first clean.",
  alternates: {
    canonical: "/drapes-curtains-cleaning-north-vancouver/",
  },
};

const fabricTypes = [
  {
    title: "Silk Drapes",
    paragraphs: [
      "Silk is delicate and responsive to moisture, temperature, and pH levels. Improper cleaning can cause shrinkage, color fading, or dye bleeding. Yet silk also responds beautifully to professional cleaning when handled correctly.",
      "We use low-moisture methods, pH-balanced plant-based solvents, and careful extraction. Colorfastness testing comes first. The result is sparkling clean silk that retains its sheen and drape.",
    ],
  },
  {
    title: "Velvet Curtains",
    paragraphs: [
      "Velvet's soft nap is easily flattened or matted by aggressive rubbing or high-pressure water jets. Standard carpet cleaning equipment will permanently damage velvet. Velvet requires dry-cleaning or low-moisture techniques and specialized expertise.",
      "We use gentle vacuuming, spot treatment, and moisture-controlled extraction. Afterward, we brush the nap to restore its original texture. The difference is striking.",
    ],
  },
  {
    title: "Linen Drapes",
    paragraphs: [
      "Linen is a natural fiber prone to shrinkage from heat and moisture. It also wrinkles easily. Professional cleaning requires precise moisture control and careful drying on specialized racks to prevent shrinkage and maintain the drape's shape.",
      "We treat linen with respect. Our process minimizes moisture exposure and uses air-drying techniques that preserve the fabric's structure.",
    ],
  },
  {
    title: "Synthetic Fabrics",
    paragraphs: [
      "Polyester, acrylic, and nylon are more resilient than natural fibers. They tolerate higher moisture and temperature ranges. However, they still benefit from professional cleaning to maintain appearance and remove embedded odors.",
      "We clean synthetics thoroughly while remaining gentle enough to preserve any special coatings or backings.",
    ],
  },
  {
    title: "Blackout and Thermal-Backed Curtains",
    paragraphs: [
      "Blackout curtains have an acrylic resin coating applied to the back. This coating provides light-blocking and thermal insulation, but it deteriorates if exposed to water. For blackout curtains in North Vancouver, in-home dry cleaning is the only safe option.",
      "We use moisture-free dry-cleaning methods on blackout curtains. No water touches the backing. The result is clean, functional blackout protection without damage.",
    ],
  },
  {
    title: "Lined and Interlining",
    paragraphs: [
      "Many quality drapes have lining or interline layers bonded together. These layers require careful moisture control. Too much water can separate the layers or cause shrinking at different rates. Our technicians understand how to clean lined curtains without compromising the bond between layers.",
    ],
  },
  {
    title: "Specialty: Brocade, Tapestry, Chintz, Lame",
    paragraphs: [
      "Hand-woven brocades, tapestries with complex patterns, chintz with glazed finishes, and lame (fabric containing metallic threads) all require specialized handling. These are often heirloom pieces or investment purchases. We use hand-cleaning techniques and ultra-gentle methods for these materials.",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Inspection and Assessment",
    paragraphs: [
      "We arrive at your North Vancouver home and examine your curtains closely. We check fabric content, condition, colorfastness, and stain type. We test colorfastness using a small hidden area to make sure our cleaning won't cause dyes to run. We identify special concerns: loose beads, delicate embroidery, backing issues.",
      "This assessment determines our approach. Different fabrics require different techniques. A silk drape needs different treatment than a synthetic thermal-backed curtain.",
    ],
  },
  {
    step: 2,
    title: "Pre-Treatment and Vacuuming",
    paragraphs: [
      "We gently vacuum your drapes with low-suction upholstery equipment. This removes surface dust, pollen, and loose particles without damaging the fibers. For stains, we apply eco-friendly pre-treatment solutions specific to the stain type (wine, grease, organic matter). These sit for a time to break down the stain at the molecular level.",
    ],
  },
  {
    step: 3,
    title: "Cleaning",
    paragraphs: [
      "For in-home cleaning, we use moisture-controlled dry-cleaning methods. Our equipment applies our plant-based, non-toxic cleaning agents in measured amounts, breaking down embedded dirt, grease, and odors. We agitate gently to work the cleaner through the fibers.",
      "For drop-off cleaning at our North Vancouver facility, we have access to more intensive methods. We may use specialized equipment, higher volumes of cleaner, longer dwell times, and thorough rinsing for heavily soiled or delicate fabrics.",
      "Throughout this step, we monitor moisture levels carefully. We know which fabrics tolerate more water and which require minimal moisture.",
    ],
  },
  {
    step: 4,
    title: "Rinse and Extraction",
    paragraphs: [
      "We extract cleaning solution thoroughly. This step is critical. Residue left behind attracts dirt and can cause yellowing. Our extraction equipment removes the cleaning agent, dirt suspension, and excess moisture. We may perform multiple passes for heavily soiled curtains.",
      "For odor neutralization, we use final extraction rinses that leave your drapes fresh without artificial perfume. The result is clean-smelling fabric without chemical fragrance.",
    ],
  },
  {
    step: 5,
    title: "Drying and Finishing",
    paragraphs: [
      "For in-home cleaning, we leave your curtains hanging and set up fans for air circulation. Careful air-drying prevents overwetting and allows natural evaporation. Drapes dry in a few hours under favorable North Vancouver weather conditions.",
      "For drop-off cleaning, we hang your curtains on specialized drying racks in our climate-controlled facility. For certain fabrics, we may steam-press to restore shape, remove wrinkles, and restore the original drape and elegance.",
      "When your curtains are fully dry, they're returned to you (or we rehang them at your home). The transformation is remarkable.",
    ],
  },
];

const ecoReasons = [
  {
    title: "Safer for Delicate Fibers",
    paragraphs: [
      "Industrial perchloroethylene (PERC) and other harsh solvents work through aggressive chemical action. They're effective, but they're also harsh on fibers. They can weaken silk, strip protective coatings, and cause color fading. Plant-based solvents work gently. They break down grease and soil without assaulting the fabric itself.",
      "The result: cleaner drapes that look and feel better, with longer lifespan.",
    ],
  },
  {
    title: "Healthier Home Environment",
    paragraphs: [
      "When you bring chemically-cleaned drapes home, off-gassing occurs for days. You and your family breathe trace solvents. For people with chemical sensitivities, asthma, or young children, this is concerning. Our eco-friendly approach means no toxic fumes. Your home is safer immediately after cleaning.",
    ],
  },
  {
    title: "Environmental Responsibility",
    paragraphs: [
      "Greater Vancouver is conscious about environmental impact. Our biodegradable plant-based products break down naturally without accumulating in waterways or soil. We're not contributing to chemical pollution. We're not harming the ecosystem that makes North Vancouver beautiful.",
    ],
  },
  {
    title: "Superior Stain Results on Real Soils",
    paragraphs: [
      "Some people assume eco-friendly products are weaker. That's false. Our plant-based formulas handle grease, wine, food, smoke, and pet stains with impressive effectiveness. They work because they're formulated scientifically, not because they're toxic. We've invested in products that work as well as traditional solvents, just without the health and environmental costs.",
    ],
  },
  {
    title: "Perfect for the Wet BC Climate",
    paragraphs: [
      "North Vancouver's moisture-rich climate means your drapes need to dry quickly after cleaning. Residual chemical solvents slow drying and can attract moisture. Our plant-based products allow faster drying and resist mold growth better. Your curtains stay fresh longer between cleanings.",
    ],
  },
];

const relatedServices = [
  {
    title: "Carpet cleaning in North Vancouver",
    href: "/carpet-cleaning-north-vancouver/",
  },
  {
    title: "Area rug cleaning in North Vancouver",
    href: "/carpet-cleaning-north-vancouver/area-rug-cleaning/",
  },
  {
    title: "Upholstery cleaning in North Vancouver",
    href: "/cleaning-services-north-vancouver/upholstery-cleaning/",
  },
  {
    title: "House cleaning service in North Vancouver",
    href: "/",
  },
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
      "In North Vancouver's humid climate, we recommend professional cleaning every 12 to 18 months for lightly used drapes, or annually for curtains in high-traffic areas or homes with pets and children. Blackout curtains in North Vancouver bedrooms benefit from annual cleaning to prevent moisture buildup. For formal living room drapes used rarely, every 2 years may suffice. If you notice visible dust, odors, or dust-related allergies increase, that's your signal to schedule cleaning in North Vancouver sooner.",
  },
  {
    question:
      "Can you clean my delicate silk drapes in North Vancouver without damage?",
    answer:
      "Yes. Our IICRC-certified technicians have extensive experience with silk. We perform colorfastness testing first, use pH-balanced plant-based solvents, and employ low-moisture techniques. We never machine wash or dry silk. For silk in North Vancouver homes, we recommend drop-off cleaning for best results. The controlled environment allows precise moisture management that protects delicate silk fibers completely.",
  },
  {
    question:
      "What's the difference between dry cleaning and steam cleaning for curtains in North Vancouver?",
    answer:
      "Dry cleaning uses minimal moisture and solvents to lift dirt. It's faster (hours) and ideal for in-home cleaning and blackout curtains in North Vancouver. Steam cleaning uses hot water extraction. It's more thorough but slower. For North Vancouver's humid climate, dry cleaning is often preferable because it dries faster and resists mold better. However, heavily soiled drapes benefit from steam-based extraction during drop-off cleaning.",
  },
  {
    question:
      "Will your eco-friendly products clean my heavily soiled North Vancouver curtains?",
    answer:
      "Absolutely. Our plant-based formulas are formulated specifically to tackle embedded grease, wine stains, smoke odor, and pet accidents. Many North Vancouver homes with fireplaces or cooking odors in their curtains see dramatic improvement. For severe staining in North Vancouver, we recommend drop-off cleaning where we can use longer dwell times and more intensive techniques. The eco-friendly approach doesn't mean weaker. It means smarter.",
  },
  {
    question:
      "How do I prepare my North Vancouver home for in-home drapery cleaning?",
    answer:
      "Minimal prep needed. Simply make sure technicians can access your windows and curtain rods without moving heavy furniture. If pets could interfere, arrange containment. That's it. We handle everything else. We bring our own equipment, cleaning solutions, and extraction devices. Your North Vancouver home stays protected with drop cloths if needed.",
  },
  {
    question:
      "Is pickup and delivery available for drop-off cleaning in North Vancouver?",
    answer:
      "Yes. We offer pickup and delivery throughout North Vancouver, Lower Lonsdale, Lynn Valley, Deep Cove, and surrounding areas. Let us know your preference when booking. Alternatively, you can drop off and pick up at our facility. We offer flexible options to fit North Vancouver customers' busy schedules.",
  },
  {
    question: "Can you remove smoke odor from my North Vancouver curtains?",
    answer:
      "Yes. Smoke odor embeds deep in fabric fibers. Our cleaning process includes extraction rinses and odor-neutralizing treatments that eliminate smoke smell completely. Whether from a fireplace, cooking, or past smoking in a North Vancouver home, we can restore freshness. For severe odor, drop-off cleaning allows extended treatment time.",
  },
  {
    question: "How long does it take to clean drapes in North Vancouver?",
    answer:
      "In-home cleaning typically takes 2 to 4 hours depending on the number of curtains and their condition. You'll have clean drapes the same day. Drop-off cleaning takes 3 to 7 business days. We provide a specific turnaround estimate when you book. Most North Vancouver customers choose based on their timeline and fabric type.",
  },
  {
    question:
      "Are your technicians bonded and insured for work in my North Vancouver home?",
    answer:
      "Yes. All Mint Sanitary technicians are bonded, insured, and IICRC-certified. You can trust us in your North Vancouver home. We treat your space with respect, protect your belongings, and stand behind our work with full insurance coverage.",
  },
  {
    question:
      "What if my drapes need repair while being cleaned in North Vancouver?",
    answer:
      "During inspection, we identify loose hems, missing buttons, broken pleats, or other damage. We'll discuss repair options and costs upfront. Small repairs (resewing a seam, reattaching a hook) may be included. Larger restoration work is quoted separately. We want your North Vancouver curtains to look and function perfectly when we're done.",
  },
];

export default function DrapesCurtainsCleaningPage() {
  return (
    <ServicePageLayout
      title="Professional Drapes and Curtains Cleaning in North Vancouver"
      heroImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80"
      heroIntro="Your drapes and curtains collect dust, allergens, and odors every single day. In North Vancouver's humid climate, that buildup happens faster, and the risk of mold and mildew grows with each season. Professional cleaning isn't just about appearance. It's about protecting your investment, improving indoor air quality, and keeping your home healthy."
      faqItems={faqItems}
      ctaHeading="Ready to Restore Your North Vancouver Drapes?"
      ctaBody="Don't wait. Contact Mint Sanitary today for your free North Vancouver drapery cleaning estimate. Call (604) 671-6252 or email hello@mintsanitary.com. Use MINT25 for 10% off your first clean."
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
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Professional Drapes and Curtains Cleaning Matters in North
                Vancouver
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Mint Sanitary provides expert in-home and drop-off drapery cleaning
                throughout North Vancouver, West Vancouver, and Greater Vancouver.
                Our IICRC-certified technicians use eco-friendly, plant-based
                products that clean thoroughly without damaging delicate fabrics like
                silk, velvet, or specialty linens. We offer flexible scheduling with
                7-day availability, free estimates, and 10% off your first clean
                with code MINT25. Ready to restore your drapes? Call us at (604)
                671-6252 or email hello@mintsanitary.com.
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

      {/* ── Why It Matters — Detailed Sub-Sections ──────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <h3 className="text-[18px] font-extrabold text-[#4E5062]">
              Dust, Allergens, and Mold in the West Coast Climate
            </h3>
            <p>
              The Greater Vancouver region&apos;s moisture-rich climate creates a
              perfect storm for fabric deterioration. Rain, humidity, and
              temperature swings mean your curtains absorb moisture year-round.
              When dust settles on that damp fabric, mold spores germinate. Dust
              mites thrive. Allergens accumulate. Vacuuming alone can&apos;t
              reach embedded particles deep in the weave.
            </p>
            <p>
              North Vancouver homes, especially those in Lower Lonsdale, Deep
              Cove, and Seymour Heights, face this challenge constantly.
              Professional cleaning extracts these hidden contaminants that
              regular dusting misses.
            </p>
            <h3 className="text-[18px] font-extrabold text-[#4E5062]">
              Extending the Life of Your Fabric Investment
            </h3>
            <p>
              Quality drapes are expensive. A set of silk or velvet curtains can
              cost $500 to $2,000 or more. Yet many homeowners make a critical
              mistake: they attempt DIY cleaning methods or delay cleaning too
              long. Neglect causes dyes to set permanently into fibers. Dirt
              becomes grit that abrases the fabric. Once the damage occurs, no
              cleaning can reverse it.
            </p>
            <p>
              Professional cleaning removes stains, dust, and soil while the
              fabric is still salvageable. We use pH-balanced formulas and
              moisture-control techniques that preserve the integrity of delicate
              fibers. Regular professional cleaning extends your curtains&apos;
              lifespan by years, sometimes a decade or more.
            </p>
            <h3 className="text-[18px] font-extrabold text-[#4E5062]">
              Restoring Appearance and Freshness
            </h3>
            <p>
              Over time, curtains lose their color vibrancy and drape
              beautifully. They develop a dull, yellowed appearance. Cooking
              odors, pet smells, and smoke residue become trapped in the fibers.
              Once this happens, no amount of airing or spraying helps. The
              fabric itself needs cleaning.
            </p>
            <p>
              Our process removes embedded dirt, grease, food particles, and
              odors that have accumulated since your drapes were installed. The
              result is stunning. Colors brighten. Your curtains hang with their
              original shape and elegance. The freshness is immediate.
            </p>
            <h3 className="text-[18px] font-extrabold text-[#4E5062]">
              Health Benefits You&apos;ll Notice
            </h3>
            <p>
              If anyone in your North Vancouver home has allergies, asthma, or
              respiratory sensitivity, you&apos;ve probably noticed that symptoms
              worsen indoors. Your drapes could be a significant contributor.
              Dust mites, mold spores, and allergen-laden particles live in your
              window treatments, exactly where air circulation is often weakest.
            </p>
            <p>
              After professional cleaning, many customers report improved sleep,
              fewer morning allergies, and better breathing, especially in
              bedrooms. That&apos;s not coincidence. It&apos;s what happens when
              you remove the allergen reservoir from your home.
            </p>
            <h3 className="text-[18px] font-extrabold text-[#4E5062]">
              Avoiding Costly Damage from DIY Attempts
            </h3>
            <p>
              DIY curtain cleaning is risky. Washing delicate fabrics in regular
              detergent can shrink them permanently. Using hot water on silk
              causes color bleeding. Machine drying melts backing on blackout
              curtains. Scrubbing velvet crushes the nap. Once the damage is
              done, replacement is your only option.
            </p>
            <p>
              Our technicians assess each fabric type before cleaning. We test
              colorfastness. We use appropriate moisture levels and solvents. We
              understand specialty fabrics like silk, velvet, linen, brocade, and
              backed curtains. The cost of professional cleaning is a fraction of
              replacement.
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
            In-Home vs. Drop-Off Drapery Cleaning in North Vancouver: Which Is
            Right for You?
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/85">
            Both methods have distinct advantages. Your choice depends on your
            timeline, fabric type, and convenience needs.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-6 font-body text-[15px] leading-[1.7] text-white/85">
              <h3 className="text-[18px] font-extrabold text-white">
                In-Home Drapery Cleaning
              </h3>
              <p className="mt-3">
                With in-home cleaning, we arrive at your North Vancouver home and
                clean your curtains while they&apos;re still hanging on the
                rods. We use dry-cleaning methods, moisture extraction, and
                specialized equipment designed to work with fabric in place.
              </p>
              <p className="mt-4 font-bold text-white">Advantages:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Fastest turnaround: cleaning completed in a few hours</li>
                <li>Maximum convenience: no removal or reinstallation</li>
                <li>Less handling of delicate fabrics</li>
                <li>
                  Ideal for blackout and thermal-backed curtains (which
                  can&apos;t tolerate moisture)
                </li>
                <li>Cost-effective for lightly soiled curtains</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Typical Cost:</strong> $2 to $7
                per linear foot ($70 to $150 per set for standard homes)
              </p>
              <p>
                <strong className="text-white">Best for:</strong> Silk sheers,
                blackout curtains, regularly maintained drapes, time-sensitive
                needs
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-6 font-body text-[15px] leading-[1.7] text-white/85">
              <h3 className="text-[18px] font-extrabold text-white">
                Drop-Off Drapery Cleaning
              </h3>
              <p className="mt-3">
                Drop-off cleaning means you carefully remove your curtains from
                the rods and bring them to our facility (or we arrange pickup).
                We clean them in our controlled environment using specialized
                equipment and techniques. We then return them, ready to hang.
              </p>
              <p className="mt-4 font-bold text-white">Advantages:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Deeper, more thorough cleaning for heavily soiled fabrics
                </li>
                <li>
                  Ideal for delicate fibers like silk, velvet, linen, and
                  specialty materials
                </li>
                <li>
                  Access to industrial-strength equipment and extraction
                </li>
                <li>
                  Perfect for hand-beaded, pleated, or intricately constructed
                  draperies
                </li>
                <li>
                  Allows for pressing and reshaping on specialized racks
                </li>
                <li>
                  Better results on wine stains, grease, and stubborn odors
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Typical Cost:</strong> $1 to $5
                per linear foot ($60 to $140 per set, plus pickup/delivery if
                needed)
              </p>
              <p>
                <strong className="text-white">Turnaround:</strong> 3 to 7
                business days
              </p>
              <p>
                <strong className="text-white">Best for:</strong> Heavily soiled
                curtains, delicate fabrics, stain-treated situations, multiple
                sets bundled for discount
              </p>
            </div>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/85">
            For in-home or drop-off cleaning, we service North Vancouver
            completely. Areas like Lynn Valley, Edgemont Village, Seymour
            Heights, and Lower Lonsdale are all within our coverage zone.
            Customers in West Vancouver and across Greater Vancouver also
            benefit from our flexible scheduling and fast service.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Fabric Types We Clean Safely in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Not all fabrics are the same. Each material requires specific
            techniques, moisture levels, and cleaning agents. Our technicians are
            trained to handle specialty fabrics correctly.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {fabricTypes.map((fabric) => (
              <div
                key={fabric.title}
                className="rounded-[14px] bg-[#f4f8ff] p-5"
              >
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {fabric.title}
                </h3>
                {fabric.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]"
                  >
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
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Our Professional Drapery Cleaning Process in North Vancouver
            </h2>
            <p className="mx-auto mt-6 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Knowing our process builds confidence. Here&apos;s exactly what
              happens when you choose Mint Sanitary for your North Vancouver
              drapery cleaning.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                  {step.title}
                </h3>
                {step.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-2 font-body text-[14px] leading-[1.6] text-[#5c6075]"
                  >
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
        heading="Why Mint Sanitary Uses Eco-Friendly Products for Curtain Cleaning in North Vancouver"
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
            Pricing Guidance for Drapes Cleaning in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Cost depends on several factors. Transparency helps you budget and
            make decisions.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Drop-Off Pricing
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Drop-off drapery cleaning typically costs $1 to $5 per linear
                foot. For a standard set of drapes (150 to 200 linear feet),
                expect $150 to $350. Most North Vancouver residential drapes
                fall into the $70 to $150 per set range.
              </p>
              <p className="mt-3 font-body text-[15px] font-bold text-white">
                Factors affecting cost:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 font-body text-[15px] leading-[1.7] text-white/80">
                <li>
                  Linear footage (longer curtains = lower per-foot cost due to
                  economies of scale)
                </li>
                <li>
                  Fabric type (silk and specialty fabrics cost more than
                  synthetics)
                </li>
                <li>
                  Stain complexity (extensive staining adds treatment time)
                </li>
                <li>
                  Pleat construction (custom pleats require careful handling)
                </li>
                <li>Backing type (lined drapes require extra care)</li>
              </ul>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                In-Home Pricing
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                In-home cleaning costs $2 to $7 per linear foot, reflecting the
                convenience factor and technician time. A typical in-home
                cleaning of two sets runs $150 to $400. Add $25 to $60 per set
                for pickup/delivery if included.
              </p>
              <h3 className="mt-6 font-body text-[17px] font-extrabold text-white">
                First-Time Discount
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Use code MINT25 for 10% off your first cleaning. For a $200
                drop-off job, that&apos;s $20 savings. For larger projects,
                it&apos;s even more.
              </p>
              <h3 className="mt-6 font-body text-[17px] font-extrabold text-white">
                Bundle Discounts
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                If you&apos;re cleaning multiple window treatments, bundles save
                money. Three sets of drapes cost less per set than cleaning one.
                Ask about our bundling pricing when you call for your free
                estimate.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-[14px] bg-white/10 p-5">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Free Estimate Process
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
              Every quote is no-obligation and free. We&apos;ll discuss your
              specific curtains, take photos if helpful, and provide a written
              estimate before work begins. No surprises. No hidden fees. Just
              honest, upfront pricing. Call (604) 671-6252 or email
              hello@mintsanitary.com for your free estimate.
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
              Service Areas: North Vancouver, West Vancouver, and Greater
              Vancouver
            </h2>
            <div className="mt-8 space-y-5">
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary serves North Vancouver completely, including Lower
                Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour
                Heights. We also clean drapes in West Vancouver and throughout
                Greater Vancouver.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                Our service area includes North Vancouver (entire district),
                West Vancouver, Vancouver (all neighborhoods), Burnaby, and
                surrounding Greater Vancouver municipalities.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                With 7-day availability, we fit your schedule. Most North
                Vancouver customers receive service within 3 to 7 days of booking.
              </p>
            </div>
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
        </div>
      </section>

      {/* ── Ready to Restore ──────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Ready to Restore Your North Vancouver Drapes?
          </h2>
          <div className="mt-6 rounded-[14px] bg-[#f4f8ff] p-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            <p>
              Your curtains deserve professional care. Whether they&apos;re
              delicate silk sheers, cozy velvet drapes, or blackout curtains
              that block the morning light, we handle them with expertise.
              North Vancouver&apos;s humidity, dust, and allergens take their
              toll on fabric. Professional cleaning restores them completely.
            </p>
            <p className="mt-3">
              I remember a client in Lower Lonsdale who&apos;d delayed
              cleaning her silk drapes for three years. She was worried about
              damage. When we returned them, she cried. The colors were
              vibrant again. They hung beautifully. She said the freshness was
              like having new curtains, but without the cost. That&apos;s what
              expert cleaning does.
            </p>
            <p className="mt-4">
              <strong className="font-extrabold text-[#4E5062]">
                Call:
              </strong>{" "}
              (604) 671-6252
              <br />
              <strong className="font-extrabold text-[#4E5062]">
                Email:
              </strong>{" "}
              hello@mintsanitary.com
              <br />
              <strong className="font-extrabold text-[#4E5062]">
                Website:
              </strong>{" "}
              www.mintsanitary.com
              <br />
              <strong className="font-extrabold text-[#4E5062]">
                Discount:
              </strong>{" "}
              MINT25 for 10% off your first clean
            </p>
          </div>
          <div className="mt-12">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Related Services in North Vancouver
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              If you&apos;re investing in professional drapery care, consider
              these complementary services we offer throughout North Vancouver:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedServices.map((svc) => (
                <a
                  key={svc.href}
                  href={svc.href}
                  className="rounded-[14px] bg-[#f4f8ff] p-5 font-body text-[15px] font-extrabold text-[#4E5062] underline underline-offset-2"
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
