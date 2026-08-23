import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/post-construction-cleaning-original
// so the CMS version at /north-vancouver/post-construction-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Post-Construction Cleaning North Vancouver | Mint",
  description:
    "Post-construction cleaning in North Vancouver, including window and glass care after renovation. HEPA dust removal, free estimates, 10% off with MINT26.",
  robots: { index: false, follow: false },
};

const phases = [
  {
    title: "Phase 1: Rough Clean and Debris Removal",
    body: "This first phase clears the North Vancouver job site so detailed cleaning can begin safely. It includes removing large debris, scrap materials, and packaging; sweeping and shoveling bulk dust and drywall fragments; clearing adhesives, tape residue, and stickers; disposing of leftover materials; and an initial wipe-down of major surfaces.",
  },
  {
    title: "Phase 2: General and Detailed Cleaning",
    body: "The second phase moves top to bottom through the space. It covers dusting of ceilings, walls, and trim; HEPA vacuuming of floors, vents, and ductwork; interior window and track cleaning; wiping down cabinetry, shelving, and fixtures; cleaning light fixtures, switch plates, and outlets; scrubbing tile, grout, and countertops; and removing paint overspray and caulking residue.",
  },
  {
    title: "Phase 3: Final and Punch-List Clean",
    body: "The last phase is a final polish of hard surfaces, fixtures, and hardware; streak-free glass cleaning; sanitizing bathrooms and kitchens; final floor cleaning; touch-up detailing on trim, baseboards, and door frames; and a walk-through inspection before the North Vancouver property is handed over.",
  },
];

const checklist = [
  "Removal of all construction debris and waste",
  "HEPA-filtered vacuuming of fine dust",
  "Interior window cleaning, including tracks and frames",
  "Detailed cabinetry, shelving, and closet cleaning",
  "Light fixture and ceiling fan cleaning",
  "Baseboard, trim, and door frame detailing",
  "Tile, grout, and countertop scrubbing",
  "Paint overspray and adhesive residue removal",
  "Bathroom sanitizing",
  "Kitchen cleaning, including inside appliances",
  "Floor cleaning (vacuum, mop, and polish)",
  "Final walk-through inspection",
];

const hazards = [
  { title: "Silica Dust", body: "Cutting concrete, stone, or brick produces fine silica dust that's often invisible. Breathing it in over time can contribute to respiratory disease, so it requires HEPA filtration to remove properly." },
  { title: "VOCs", body: "Fresh paint, adhesives, sealants, and new flooring off-gas volatile organic compounds common on North Vancouver renovation sites. Exposure can cause headaches and nausea, with longer-term effects from prolonged contact." },
  { title: "Lead and Asbestos", body: "Many North Vancouver homes, particularly in established neighborhoods like Lower Lonsdale and Capilano, were built before 1990. Renovating these buildings can disturb lead-based paint or asbestos-containing materials, which requires specialized handling rather than standard cleaning methods." },
  { title: "Airborne Particles", body: "Construction dust can stay airborne for hours or days after work stops. If it isn't captured with HEPA filtration, it can settle into and contaminate HVAC systems throughout a North Vancouver home or building." },
  { title: "Surface Damage Risk", body: "New countertops, fresh paint, and newly installed flooring are vulnerable during cleanup. Improper cleaning methods can scratch surfaces, damage paint, or dull flooring that was just installed." },
];

const whyChooseItems = [
  { title: "Eco-Friendly Products", body: "Used throughout every phase of the North Vancouver clean." },
  { title: "7-Day Availability", body: "To work around North Vancouver construction and handover schedules." },
  { title: "Residential, Commercial, and Industrial Scale", body: "From single-unit North Vancouver condos to multi-floor commercial buildouts to industrial facilities." },
  { title: "Background-Checked Teams", body: "On every job." },
  { title: "Free Estimates", body: "Before work begins." },
  { title: "24-Hour Satisfaction Guarantee", body: "After the final walk-through." },
];

const whatYouGet = [
  { title: "HEPA Dust Elimination", body: "HEPA-filtered vacuums capture 99.97% of particles 0.3 microns and larger, which matters on North Vancouver renovation sites where fine drywall and silica dust settle fast." },
  { title: "Surface Protection", body: "Cleaning methods matched to the surface so new countertops, flooring, and finishes in your North Vancouver renovation aren't damaged during cleanup." },
  { title: "VOC and Residue Removal", body: "Adhesive, caulk, and overspray residue removed without harsh chemicals that add to off-gassing." },
  { title: "Flexible Project Timing", body: "Scheduling built around your North Vancouver construction timeline and handover date." },
  { title: "Eco-Friendly Process", body: "From the products used to the disposal of waste." },
  { title: "MINT26", body: "Use code MINT26 for 10% off your first North Vancouver post-construction clean." },
];

const pricingTiers = [
  { title: "Condos and Small Renovations", range: "$500 – $1,000", body: "Single-room remodels, bathroom or kitchen renovations, and small North Vancouver condo units, common in buildings around Lower Lonsdale." },
  { title: "Average Homes", range: "$1,000 – $2,500", body: "Full home renovations, multi-room remodels, and standard new construction homes, common throughout Lynn Valley and Deep Cove." },
  { title: "Large Homes and Commercial", range: "$2,500 – $5,000+", body: "Large custom homes, multi-unit projects, commercial tenant improvements, and industrial spaces." },
];

const processSteps = [
  "Request Your Free Estimate. Tell us about your North Vancouver project and the space.",
  "On-Site or Virtual Assessment. We review the scope before scheduling.",
  "Our Team Arrives Prepared. HEPA equipment and surface-specific products, matched to the job.",
  "Phase-by-Phase Cleaning. Rough clean, detailed clean, and final punch-list clean, in that order.",
  "Quality Walk-Through Inspection. We check the work against the checklist before we call it done.",
  "Move-In or Handover Ready. Your North Vancouver space is ready for occupancy, showing, or opening.",
];

const serviceAreas = ["Lower Lonsdale", "Upper Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont Village", "Capilano", "Norgate", "Seymour Heights", "Dollarton", "Blueridge"];

const faqItems = [
  {
    question: "How much does post-construction cleaning cost in North Vancouver?",
    answer: "Post-construction cleaning in North Vancouver runs $500 to $1,000 for condos and small renovations, $1,000 to $2,500 for average homes, and $2,500 to $5,000 or more for large homes and commercial projects.",
  },
  {
    question: "How long does post-construction cleaning take in North Vancouver?",
    answer: "A small North Vancouver condo renovation might take 4 to 8 hours, a full home build typically takes 1 to 2 days, and large commercial projects in North Vancouver can take 3 to 5 days or more.",
  },
  {
    question: "What does post-construction cleaning in North Vancouver include?",
    answer: "The full checklist covers debris removal, HEPA-filtered dust vacuuming, interior window cleaning, cabinetry and shelving detailing, light fixture cleaning, baseboard and trim detailing, tile and grout scrubbing, paint overspray and adhesive removal, bathroom sanitizing, full kitchen cleaning including inside appliances, floor cleaning, and a final walk-through inspection.",
  },
  {
    question: "What is Phase 1 rough clean for North Vancouver construction cleanup?",
    answer: "Phase 1 for North Vancouver job sites removes large debris, scrap, and packaging, sweeps and shovels bulk dust and drywall fragments, clears adhesives and tape residue, disposes of leftover materials, and does an initial wipe-down of surfaces.",
  },
  {
    question: "What happens during Phase 2 detailed cleaning for North Vancouver renovations?",
    answer: "Phase 2 covers top-to-bottom dusting of ceilings, walls, and trim, HEPA vacuuming of floors, vents, and ductwork, interior window and track cleaning, wiping cabinetry and fixtures, cleaning light fixtures and outlets, and scrubbing tile, grout, and countertops on North Vancouver properties.",
  },
  {
    question: "What is included in the Phase 3 final clean for North Vancouver homes?",
    answer: "Phase 3 includes final polish of hard surfaces and hardware, streak-free glass cleaning, sanitizing bathrooms and kitchens, final floor cleaning, touch-up detailing on trim and baseboards, and a walk-through inspection before your North Vancouver property is handed over.",
  },
  {
    question: "Do you remove silica dust from North Vancouver renovation sites?",
    answer: "Yes. Cutting concrete, stone, or brick on North Vancouver job sites produces fine silica dust that's often invisible and can contribute to respiratory disease if inhaled over time. We use HEPA filtration to remove it properly.",
  },
  {
    question: "How do you handle VOCs after painting in North Vancouver homes?",
    answer: "Fresh paint, adhesives, sealants, and new flooring off-gas VOCs on North Vancouver renovation sites, which can cause headaches and nausea. Our cleaning process addresses residue and buildup from these materials as part of the standard post-construction clean.",
  },
  {
    question: "Do you handle lead and asbestos in older North Vancouver homes?",
    answer: "Many North Vancouver homes, especially in established neighborhoods, were built before 1990. Renovating these properties can disturb lead-based paint or asbestos-containing materials, which requires specialized handling rather than standard cleaning. Let us know your North Vancouver home's age when requesting an estimate.",
  },
  {
    question: "Can construction dust damage HVAC systems in North Vancouver homes?",
    answer: "Yes. Construction dust can stay airborne for hours or days, and if it isn't captured with HEPA filtration it can settle into and contaminate HVAC systems in North Vancouver homes and buildings.",
  },
  {
    question: "Will cleaning damage new countertops or flooring in my North Vancouver renovation?",
    answer: "Improper cleaning methods can scratch new countertops, damage paint, or dull flooring. We match our methods to the surface on every North Vancouver job to avoid this.",
  },
  {
    question: "Do you offer free estimates for North Vancouver post-construction cleaning?",
    answer: "Yes, free estimates are available for all North Vancouver post-construction cleaning projects before any work begins.",
  },
  {
    question: "Are you available 7 days a week in North Vancouver?",
    answer: "Mint Sanitary offers 7-day availability for North Vancouver post-construction cleaning to work around construction and handover schedules.",
  },
  {
    question: "Is there a satisfaction guarantee for North Vancouver post-construction cleaning?",
    answer: "Yes, a 24-hour satisfaction guarantee applies after the final walk-through on North Vancouver post-construction cleaning jobs.",
  },
  {
    question: "Do you clean commercial and industrial post-construction sites in North Vancouver?",
    answer: "Yes. Mint Sanitary works at residential, commercial, and industrial scale in North Vancouver, from single-unit condos to multi-floor commercial buildouts to industrial facilities.",
  },
  {
    question: "Is MINT26 available for North Vancouver post-construction cleaning?",
    answer: "Yes, use code MINT26 for 10% off your first North Vancouver post-construction clean.",
  },
  {
    question: "What is post-construction window cleaning in North Vancouver?",
    answer: "It's specialized glass and frame cleaning for North Vancouver renovation and new-build windows, addressing paint overspray, adhesive residue, caulk drips, construction dust, and silica fabrication dust using tools and methods matched to tempered and Low-E coated glass.",
  },
  {
    question: "Can improper window cleaning damage tempered glass in North Vancouver new builds?",
    answer: "Yes. Tempered glass is heat-treated, and microscopic silica particles fuse to the surface during manufacturing. Careless scraping on North Vancouver windows activates these particles and causes permanent scratches that cannot be repaired.",
  },
  {
    question: "What are Low-E coatings and why do North Vancouver builders need special care cleaning them?",
    answer: "Low-E thermal coatings are applied to many North Vancouver new construction windows to meet BC Building Code energy efficiency standards. Abrasive pads, acidic cleaners, or improper scraping can permanently damage these coatings and void warranties.",
  },
  {
    question: "How much does post-construction window cleaning cost in North Vancouver?",
    answer: "Post-construction window cleaning in North Vancouver typically runs $200 to $500 or more, depending on the scope of the project.",
  },
  {
    question: "How long does post-construction window cleaning take in North Vancouver?",
    answer: "Small residential North Vancouver projects (10 to 15 windows) take 2 to 4 hours, medium homes (20 to 30 windows) take 4 to 8 hours, and large commercial North Vancouver projects (50+ windows) take 1 to 3 days.",
  },
  {
    question: "What project types do you serve for post-construction window cleaning in North Vancouver?",
    answer: "We serve new residential builds, multi-unit residential buildings, renovations and additions, commercial construction, strata common areas, and industrial and warehouse projects across North Vancouver.",
  },
];

export default function PostConstructionCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Post-Construction Cleaning in North Vancouver"
      heroImage="/post-construction-cleaning-north-vancouver.jpg"
      heroSubtitle="New Build & Renovation Cleanup"
      heroIntro="After construction ends, a thorough post-construction clean is essential before move-in or opening. Mint Sanitary handles renovation dust, construction debris, adhesive residue, and fine particles using HEPA equipment and eco-friendly products on renovation and new-build projects throughout North Vancouver, from Lower Lonsdale condo remodels to full home builds in Lynn Valley. North Vancouver's mix of established character homes, new condo developments, and ongoing renovation work in neighborhoods like Deep Cove and Edgemont Village means post-construction cleanup varies a lot from job to job."
      faqItems={faqItems}
      ctaHeading="Get Your Free North Vancouver Post-Construction Cleaning Estimate"
      ctaBody="From rough debris cleanup to streak-free window and glass care, Mint Sanitary's HEPA-equipped teams get North Vancouver homes and job sites ready for move-in or handover. Request a free estimate and see current North Vancouver pricing before you book."
      ctaHref="/rates"
    >
      {/* ── Three-Phase Process (white bg) ────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Our Three-Phase Post-Construction Cleaning Process for North Vancouver Homes
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {phases.map((phase) => (
              <div key={phase.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{phase.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{phase.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[14px] bg-white/[0.12] p-5">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Complete Post-Construction Cleaning Checklist for North Vancouver Properties
            </h3>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 md:grid-cols-2">
              {checklist.map((item, i) => (
                <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                  {i + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Health & Safety Hazards (blue bg) ─────────────────── */}
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
            Health and Safety Hazards Addressed on North Vancouver Job Sites
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Construction leaves behind hazards beyond visible mess, and
            North Vancouver&apos;s older housing stock combined with heavy
            new-build activity means our teams see all five of these
            regularly.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {hazards.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Post-Construction Window Cleaning (white bg, MERGED SECTION) ── */}
      <section id="post-construction-window-cleaning" className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Post-Construction Window Cleaning in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Windows take specific punishment during a North Vancouver build
            or renovation, and general cleaning crews often get the
            cleanup wrong in ways that cause permanent damage. This
            section covers what our post-construction window cleaning
            process addresses on North Vancouver job sites, from Norgate
            to Seymour Heights.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                What Post-Construction Window Cleaning in North Vancouver Addresses
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                New and renovated windows in North Vancouver homes
                typically carry paint overspray (latex, enamel, and
                exterior finishes), protective stickers and adhesive
                labels, caulk and silicone sealant drips, construction
                dust, cement powder, and drywall particles, masking tape
                residue and plastic film, and silica or glass fabrication
                dust on tempered surfaces.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Why Tempered Glass in North Vancouver New Builds Needs Careful Handling
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Tempered glass is heat-treated during manufacturing, and
                microscopic silica particles fuse to the surface in that
                process. Careless scraping activates these particles and
                causes new scratches that are permanent and cannot be
                repaired. Many North Vancouver new construction windows
                carry Low-E thermal coatings, installed to meet BC
                Building Code energy efficiency standards, as tracked
                through City of North Vancouver building permits. Abrasive
                pads, acidic cleaners, or improper scraping can
                permanently damage these coatings and void manufacturer
                warranties.
              </p>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[20px]">
            <img
              src="/window-cleaning-post-construction-north-vancouver.webp"
              alt="Post-construction window cleaning removing paint overspray in North Vancouver"
              className="h-[280px] w-full object-cover sm:h-[340px]"
              loading="lazy"
            />
          </div>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              Our Method for North Vancouver Post-Construction Window Cleaning
            </h3>
            <p className="mt-2 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary uses soft-bristle brushes and 0000 steel wool
              instead of metal blades on North Vancouver job sites,
              low-pressure scraping at shallow angles, and a wet glass
              method that dampens the glass with warm soapy water before
              using food-grade plastic scrapers. For stubborn paint
              overspray, we apply chemical softening with eco-friendly
              paint thinner or denatured alcohol, letting it soften the
              paint over two to three minutes before gentle scraping.
              Rinsing is done with deionized water for a streak-free
              finish, and HEPA-filtered vacuum systems contain silica dust
              throughout the process, in line with WorkSafeBC guidance on
              airborne particle control and International Window Cleaning
              Association (IWCA) technical standards.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              The Cost of Getting Window Cleaning Wrong in North Vancouver
            </h3>
            <p className="mt-2 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              The stakes are real for North Vancouver homeowners and
              builders. Improper DIY cleaning risks $7,000 to $15,000 in
              window replacement costs on multi-window projects, and
              replacement windows with Low-E coatings cost $300 to $800
              per window if they&apos;re scratched or damaged during
              improper cleaning. Glass.org technical standards and CHOA BC
              both point to the same conclusion: window glass in new
              construction needs specialized care, not a squeegee and a
              metal blade.
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Pricing and Timing in North Vancouver
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                Post-construction window cleaning in North Vancouver
                typically runs $200 to $500 or more, depending on the
                scope of the project. Timing depends on the job size:
                small residential projects (10 to 15 windows) take 2 to 4
                hours, medium North Vancouver homes (20 to 30 windows)
                take 4 to 8 hours, and large commercial projects (50+
                windows) take 1 to 3 days.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Project Types We Serve
              </h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                This service covers new residential builds, multi-unit
                residential buildings, renovations and additions,
                commercial construction, strata common areas, and
                industrial and warehouse projects throughout North
                Vancouver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose (accordion) ────────────────────────────── */}
      <AccordionWithImage
        heading="Why North Vancouver Homeowners and Builders Choose Mint Sanitary"
        image="/post-construction-kitchen-cleaning-north-vancouver.jpg"
        imageAlt="Post-construction kitchen cleaned and ready in North Vancouver"
        items={whyChooseItems}
        ctaHref="/rates"
        ctaLabel="Get a Free Estimate"
      />

      {/* ── What You Get (f4f8ff bg) ──────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What North Vancouver Clients Get
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whatYouGet.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Post-Construction Cleaning Pricing in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing for North Vancouver post-construction cleaning depends
            on the size and scope of the project.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                <p className="mt-2 font-display-reg text-[22px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Timing varies by project size. A small North Vancouver condo
            renovation might take 4 to 8 hours, a full home build
            typically runs 1 to 2 days, and large commercial projects can
            take 3 to 5 days or more.
          </p>
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
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            How the Process Works in North Vancouver
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <li key={step} className="rounded-[14px] bg-white/10 p-5 font-body text-[15px] leading-[1.7] text-white/80">
                <span className="mr-2 font-extrabold text-white">{i + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Service Areas (white bg) ──────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              North Vancouver Neighborhoods We Serve
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary provides post-construction cleaning and
              post-construction window cleaning across North Vancouver,
              including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep
              Cove, Edgemont Village, Capilano, Norgate, Seymour Heights,
              Dollarton, and Blueridge, as well as nearby West Vancouver,
              Vancouver, and Burnaby. Renovation projects often pair well
              with our{" "}
              <a href="/north-vancouver/carpet-cleaning" className="underline underline-offset-2">
                carpet cleaning in North Vancouver
              </a>
              ,{" "}
              <a href="/north-vancouver/move-in-move-out-cleaning" className="underline underline-offset-2">
                move-in move-out cleaning in North Vancouver
              </a>
              , and{" "}
              <a href="/north-vancouver/window-cleaning" className="underline underline-offset-2">
                window cleaning in North Vancouver
              </a>{" "}
              services.
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
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
