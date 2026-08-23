import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/drapes-curtains-cleaning-original
// so the CMS version at /services/drapes-curtains-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Drapes and Curtains Cleaning | Greater Vancouver",
  description:
    "Professional drapes and curtains cleaning across Greater Vancouver. Eco-friendly care for silk, velvet, and blackout fabrics. Get a free quote today.",
  robots: { index: false, follow: false },
};

const fabricTypes = [
  {
    title: "Silk Drapes",
    body: "Silk reacts to moisture, temperature, and pH. Cleaned the wrong way, it shrinks, fades, or bleeds dye. We use low-moisture methods and pH-balanced, plant-based solvents, and we test for colorfastness on a hidden area before starting any cleaning.",
  },
  {
    title: "Velvet Curtains",
    body: "Velvet's soft nap flattens and mats under aggressive rubbing or high-pressure water. Standard carpet cleaning equipment would damage it permanently. We clean velvet with dry-cleaning or low-moisture techniques, gentle vacuuming, targeted spot treatment, and moisture-controlled extraction, then brush the nap afterward to restore its texture.",
  },
  {
    title: "Linen Drapes",
    body: "Linen is a natural fiber that shrinks under heat and moisture and wrinkles easily. We control moisture carefully throughout cleaning and dry linen drapes on specialized racks to protect the shape and finish of the fabric.",
  },
  {
    title: "Synthetic Fabrics",
    body: "Polyester, acrylic, and nylon curtains hold up better to moisture and heat than natural fibers. They still collect odors and dulling grime over time, and professional cleaning keeps them looking and smelling fresh.",
  },
  {
    title: "Blackout and Thermal-Backed Curtains",
    body: "Blackout and thermal curtains have an acrylic resin coating on the back that blocks light and adds insulation. Water damages that coating, so in-home dry cleaning is the only safe approach. No water touches the backing at any point.",
  },
  {
    title: "Lined and Interlined Drapes",
    body: "Lined drapes are built from bonded layers of fabric. Too much water can separate those layers or shrink them unevenly, so we manage moisture closely to keep every layer intact.",
  },
  {
    title: "Specialty Fabrics",
    body: "Brocade, tapestry, chintz, and metallic-thread lame drapes are often hand-woven or heirloom pieces. These need hand-cleaning techniques and extra-gentle handling to protect their construction and detail.",
  },
];

const processSteps = [
  { title: "Inspection and assessment", body: "We check fabric content, condition, and colorfastness on a hidden area, and flag any special concerns like loose beading, delicate embroidery, or backing issues before we start." },
  { title: "Pre-treatment and vacuuming", body: "Gentle, low-suction vacuuming removes surface dust, pollen, and loose particles. We apply eco-friendly pre-treatment solutions matched to the type of stain, whether it's wine, grease, or organic matter." },
  { title: "Cleaning", body: "In-home cleaning uses moisture-controlled dry-cleaning methods with plant-based, non-toxic agents applied in measured amounts. Drop-off cleaning at our facility allows for more intensive methods for heavily soiled or delicate fabrics." },
  { title: "Rinse and extraction", body: "We extract the cleaning solution thoroughly, since residue left behind attracts dirt and can cause yellowing. Heavily soiled curtains get multiple passes, and we neutralize odors without masking them with artificial perfume." },
  { title: "Drying and finishing", body: "In-home cleanings leave curtains hanging with fans running, usually dry within a few hours. Drop-off cleanings dry on specialized racks in our climate-controlled facility, and we can steam-press curtains to restore their shape." },
];

const ecoReasons = [
  { title: "Safer for delicate fibers", body: "Harsh solvents like PERC can weaken silk fibers, strip protective coatings, and fade color. Plant-based solvents clean effectively while treating delicate fabrics with more care." },
  { title: "Cleaner indoor air", body: "There's no off-gassing or lingering fumes, which matters for anyone with chemical sensitivities, asthma, or young kids in the house." },
  { title: "Environmentally responsible", body: "Biodegradable formulas don't build up in local waterways or soil, which fits our approach to cleaning responsibly." },
  { title: "Still strong on real stains", body: "Plant-based doesn't mean weaker. These products are formulated to break down grease, wine, food stains, smoke residue, and pet odors on contact, not just mask them." },
  { title: "Dries faster in a wet climate", body: "Residual chemical solvents slow down drying time and can attract additional moisture into fabric. Plant-based products dry faster and resist the mold growth that a wet coastal climate makes more likely." },
];

const faqItems = [
  {
    question: "How much does drapes and curtains cleaning cost?",
    answer: "In-home cleaning runs $2 to $7 per linear foot, typically $70 to $150 per set. Drop-off cleaning runs $1 to $5 per linear foot, typically $60 to $140 per set, plus $25 to $60 for pickup and delivery if needed. For an exact number, get a quote at /rates.",
  },
  {
    question: "Should I choose in-home or drop-off cleaning?",
    answer: "In-home works well for blackout and thermal-backed curtains, curtains on a regular cleaning schedule, and situations where you need a fast turnaround. Drop-off suits heavily soiled curtains, delicate fabrics like silk and velvet, and pieces with beading or intricate pleating that benefit from deeper equipment and pressing.",
  },
  {
    question: "Is it safe to clean blackout curtains?",
    answer: "Yes, with the right method. Blackout and thermal-backed curtains have a resin coating on the back that water damages, so we clean them in-home using dry-cleaning techniques that keep water away from the backing entirely.",
  },
  {
    question: "Will cleaning damage or shrink my silk drapes?",
    answer: "Not with the correct approach. Silk is sensitive to moisture, heat, and pH, so we use low-moisture methods and pH-balanced, plant-based solvents, and we test colorfastness on a hidden area before cleaning the whole piece.",
  },
  {
    question: "How often should curtains be professionally cleaned?",
    answer: "It depends on the room and how much dust or smoke exposure they get, but most homes benefit from professional cleaning once every 12 to 18 months. Kitchens, homes with pets, and bedrooms used by allergy sufferers often need it more often.",
  },
  {
    question: "Do you take curtains down and rehang them?",
    answer: "For in-home cleaning, our team can handle removal and rehanging as part of the visit. For drop-off cleaning, let us know when you book so we can plan pickup and delivery around it.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer: "Yes. We use plant-based, non-toxic products that don't leave behind harsh fumes or residue, which makes them safer for households with kids, pets, or anyone with chemical sensitivities or asthma.",
  },
  {
    question: "How long does drapes and curtains cleaning take?",
    answer: "In-home cleaning is usually finished within a few hours and sometimes the same day. Drop-off cleaning takes 3 to 7 business days, depending on the fabric and how deep the cleaning needs to go.",
  },
  {
    question: "Do you offer a discount for first-time customers?",
    answer: "Yes. First-time customers save 10% off their first cleaning with code MINT26.",
  },
  {
    question: "What areas do you serve?",
    answer: "Mint Sanitary is based in North Vancouver and serves homes across Greater Vancouver, including West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. Visit our service areas page to confirm coverage for your address.",
  },
];

export default function ServicesDrapesCurtainsCleaningPage() {
  return (
    <ServicePageLayout
      title="Drapes and Curtains Cleaning in Greater Vancouver"
      heroImage="/drapes-curtains-cleaning-north-vancouver.webp"
      heroSubtitle="Eco-Friendly Drapery Care"
      heroIntro="Drapes and curtains sit in front of open windows all year, catching dust, pollen, cooking smoke, and pet hair. Most homeowners clean their carpets and furniture on a schedule, but window treatments get skipped for years at a time. Our technicians clean with plant-based, non-toxic products that are gentle on delicate fibers and safe for the people and pets who live in your home."
      faqItems={faqItems}
      ctaHeading="Get a Free Quote"
      ctaBody="Your drapes and curtains carry more dust, odor, and wear than you'd expect until the fabric is cleaned. Get a free quote or call 236-688-3248 to book. First-time customers save 10% with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary cleans drapes and curtains for homes across
            Greater Vancouver, including West Vancouver, Vancouver, Burnaby,
            New Westminster, and Maple Ridge. Our team is based in North
            Vancouver, background-checked, bonded, and insured, with a
            4.9/5 rating from more than 120 Google reviews. Different
            fabrics need different care. Silk, velvet, linen, blackout, and
            specialty drapes each respond to water, heat, and pressure in
            their own way.
          </p>
        </div>
      </section>

      {/* ── Why Professional Cleaning Matters (f4f8ff bg) ────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Drapes and Curtains Need Professional Cleaning
          </h2>
          <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Fabric window treatments trap more than you can see. Dust,
            dander, and mold spores settle into the weave over months, and
            that buildup can trigger allergy and asthma symptoms, especially
            in bedrooms where curtains hang close to where people sleep.
            Removing that reservoir of allergens often brings noticeable
            relief for sensitive household members.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Quality drapes represent a real investment, and neglect
            shortens their life. Dirt left in the fibers acts like
            sandpaper every time the fabric moves in a breeze or brushes
            against a windowsill, and it wears the weave down over time.
            DIY attempts often cause the damage they were meant to prevent.
            Regular laundry detergent and a home washing machine can shrink
            delicate fabrics, hot water pulls dye out of silk, a
            dryer&apos;s heat melts the resin backing on blackout curtains,
            and scrubbing a stain on velvet flattens and crushes the nap
            permanently. Professional care avoids all of that.
          </p>
        </div>
      </section>

      {/* ── Fabric Types (white bg) ───────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Fabric Types We Clean
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {fabricTypes.map((fabric) => (
              <div key={fabric.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{fabric.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{fabric.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps (blue bg) ──────────────────────────── */}
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
              Our Cleaning Process
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
        </div>
      </section>

      {/* ── Why Eco-Friendly — AccordionWithImage ─────────────── */}
      <AccordionWithImage
        heading="Why We Use Eco-Friendly, Plant-Based Products"
        intro="Vancouver's damp climate makes the choice of product matter even more."
        image="/eco-friendly-cleaning-products-north-vancouver.jpg"
        imageAlt="Eco-friendly cleaning products"
        items={ecoReasons}
        ctaHref="/rates"
        ctaLabel="Get a Quote"
      />

      {/* ── In-Home vs Drop-Off (white bg) ───────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            In-Home Cleaning vs. Drop-Off Cleaning
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            We offer two ways to clean your drapes and curtains, and the
            right one depends on your fabric and your timeline.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[14px] bg-white/[0.12] p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">In-Home Cleaning</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Runs $2 to $7 per linear foot, typically $70 to $150 per set
                for a standard home. It&apos;s the fastest option, often
                done in a few hours or the same day, and it means less
                handling of delicate fabric since curtains stay on the rod.
                It&apos;s a good fit for silk sheers, blackout and
                thermal-backed curtains that can&apos;t tolerate moisture,
                curtains on a regular maintenance schedule, and
                time-sensitive requests.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/[0.12] p-6">
              <h3 className="font-body text-[17px] font-extrabold text-white">Drop-Off Cleaning</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Runs $1 to $5 per linear foot, typically $60 to $140 per
                set, plus $25 to $60 per set if you need pickup and
                delivery. Turnaround runs 3 to 7 business days. It gives
                access to industrial-strength equipment and deeper
                extraction, which makes it the better choice for heavily
                soiled curtains, delicate fibers like silk, velvet, and
                linen, hand-beaded or intricately pleated draperies, and
                stubborn stains. Bundling multiple sets often qualifies for
                a discount.
              </p>
            </div>
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            First-time customers save 10% with code MINT26 on either
            service.{" "}
            <a href="/rates" className="underline underline-offset-2">
              Get a quote
            </a>{" "}
            for your specific window treatments, or call 236-688-3248 with
            questions about which option fits your curtains.
          </p>
        </div>
      </section>

      {/* ── Serving Greater Vancouver (f4f8ff bg) ────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Serving Homes Across Greater Vancouver
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is based in{" "}
            <a href="/north-vancouver" className="underline underline-offset-2">
              North Vancouver
            </a>{" "}
            and cleans drapes and curtains for homes throughout the region,
            including West Vancouver, Vancouver, Burnaby, New Westminster,
            and Maple Ridge. Every appointment includes transparent
            pricing, a free estimate, and no contract. All bookings come
            with a 24-hour satisfaction guarantee, and we book appointments
            seven days a week.
          </p>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            If you live in North Vancouver, our{" "}
            <a href="/north-vancouver/drapes-curtains-cleaning" className="underline underline-offset-2">
              North Vancouver drapes and curtains cleaning page
            </a>{" "}
            covers scheduling and details specific to your neighborhood.
            Drapes and curtains cleaning is one part of our broader{" "}
            <a href="/services/house-cleaning" className="underline underline-offset-2">
              house cleaning services
            </a>
            . Check our{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              service areas
            </a>{" "}
            to confirm we cover your address.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
