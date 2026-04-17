import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Post Construction Window Cleaning North Vancouver | Mint Sanitary",
  description:
    "Expert post construction window cleaning in North Vancouver. Paint overspray removal, debris cleanup, eco-friendly methods. 7 days a week. Free estimate.",
};

const faqItems = [
  {
    question: "Can I clean new construction windows myself?",
    answer:
      "Light dust removal is possible for small projects. However, professional cleaning is strongly recommended for paint overspray requiring specific solvents and precise scraping angles, warranty protection and liability coverage, tempered glass and Low-E coating expertise, and large projects where labor costs and time investment exceed professional service fees. Improper DIY cleaning risks $7,000 to $15,000 in window replacement costs, making professional service a smart investment for any North Vancouver project.",
  },
  {
    question: "How long does post construction window cleaning take?",
    answer:
      "Timeline varies by scope. Small residential projects (10 to 15 windows): 2 to 4 hours. Medium homes (20 to 30 windows): 4 to 8 hours. Large commercial projects (50 or more windows): 1 to 3 days. Rush services are available. Discuss expedited timelines with your contractor during the free estimate.",
  },
  {
    question: "Will you remove scratches already present on glass?",
    answer:
      "Pre-existing scratches are permanent and cannot be repaired. We photograph all windows before cleaning to document baseline condition. If scratches appear during our cleaning due to fabricating debris, we investigate immediately and notify you. Most glass manufacturers do not warranty scratch damage, so prevention through proper technique is essential.",
  },
  {
    question:
      "What makes tempered glass different to clean in North Vancouver projects?",
    answer:
      "Tempered glass is heat-treated for strength and safety. During manufacturing, microscopic silica particles fuse to the surface. Careless scraping activates these particles and causes new scratches. Our approach protects tempered glass: soft-bristle brushes and 0000 steel wool instead of metal blades, low-pressure scraping at shallow angles, test cleaning on sample areas before full project, and documentation of glass condition before and after completion.",
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer:
      "Yes. Mint Sanitary uses green, biodegradable products throughout North Vancouver and surrounding service areas: plant-based paint removers instead of harsh acetone, deionized water for streak-free rinsing, biodegradable soaps and detergents, and HEPA-filtered vacuum systems containing silica dust. Eco-friendly products protect your home, our crew, and the environment without compromising cleaning power.",
  },
  {
    question: "What if windows are damaged during post construction cleaning?",
    answer:
      "Mint Sanitary maintains comprehensive liability insurance. In the rare event of damage, we document the incident with photographs, investigate root cause (fabricating debris, pre-existing defect, improper construction), work with glass suppliers and manufacturers to determine warranty coverage, and pursue remedies on your behalf. Most damage claims are covered by contractor or glass manufacturer warranty rather than our cleaning service. Our insurance protects you against any gap.",
  },
  {
    question:
      "How soon after renovation can I schedule cleaning in North Vancouver neighborhoods like Lynn Valley?",
    answer:
      "Ideally within 1 to 2 weeks of trades finishing. Fresh debris and paint remove faster and easier. You can schedule anytime before occupancy. For occupied homes, we recommend early morning, evening, or weekend scheduling to minimize disruption. Mint Sanitary is available 7 days a week.",
  },
  {
    question:
      "Do you offer strata and commercial post construction cleaning in North Vancouver?",
    answer:
      "Yes. We serve strata common areas including lobbies, hallways, and exterior glass in condominiums and commercial projects of all sizes. Commercial rates and timelines are quoted individually based on scope, access, and scheduling. Call (604) 671-6252 for a free estimate.",
  },
  {
    question:
      "What's the difference between post construction and regular maintenance window cleaning in North Vancouver?",
    answer:
      "Post construction cleaning is a one-time deep cleaning addressing paint, adhesive, caulk, and construction debris specific to new builds and renovations. Regular maintenance cleaning is quarterly or bi-annual cleaning to remove dust, pollen, and weather marks from regular use. Many clients schedule regular maintenance 6 to 8 weeks after post construction cleaning to maintain the fresh finish and protect their investment.",
  },
  {
    question:
      "Can you clean skylights and high-access windows on North Vancouver homes?",
    answer:
      "Yes. We have equipment and certified technicians for multi-story buildings, skylights, and hard-to-reach windows. We assess access challenges during the free estimate for safe, efficient cleaning and accurate pricing for your specific North Vancouver property.",
  },
];

const processSteps: { title: string; body: string }[] = [
  {
    title: "Assessment and Scope Planning",
    body: "We inspect all windows to identify debris types, glass condition, frame materials, and pre-existing damage. During this assessment, we note special coatings like Low-E layers, tinted glass, or manufacturer-specific treatments. We identify access challenges, safety requirements, and realistic timelines. This detailed evaluation prevents costly errors and sets accurate expectations.",
  },
  {
    title: "Loose Debris Removal",
    body: "Using soft-bristle brushes and micro-fiber cloths, we gently remove loose construction dust, drywall grit, protective film, and stickers. Our HEPA-filtered vacuum systems capture silica dust and prevent airborne particles from becoming a health hazard, a critical consideration under WorkSafeBC guidelines.",
  },
  {
    title: "Paint Overspray and Adhesive Removal",
    body: "Paint removal demands careful solvent selection based on paint type and glass condition. We use the wet glass method (dampening glass with warm soapy water and applying food-grade plastic scrapers or 0000 steel wool at 30 to 45 degree angles), chemical softening for stubborn overspray (eco-friendly paint thinner or denatured alcohol softens paint over 2 to 3 minutes before gentle scraping), and solvent matching (alcohol-based removers for acrylic paint, acetone alternatives for enamel, and mineral spirits for dried residue). We always test on sample areas first.",
  },
  {
    title: "Sticker and Adhesive Label Removal",
    body: "Protective labels are wetted with deionized water and lifted slowly to prevent adhesive shadowing (residual glue outlines that remain visible). For stubborn adhesive, food-safe rubbing alcohol applied to a soft cloth removes residue without damaging seals or frame materials.",
  },
  {
    title: "Caulk and Silicone Cleanup",
    body: "Excess caulk and silicone sealant drips are softened with warm water (approximately 80 degrees Fahrenheit) and carefully scraped with plastic putty knives. Metal blades near window seals are avoided to preserve seal integrity and prevent future water infiltration.",
  },
  {
    title: "Final Polish and Inspection",
    body: "Windows are rinsed with deionized water to eliminate streaks, then polished with lint-free micro-fiber cloths. We conduct a final daylight inspection of each window to identify any remaining residue, scratches, or damage before sign-off.",
  },
];

const projectTypes: { title: string; body: string }[] = [
  {
    title: "New Residential Builds",
    body: "Lower Lonsdale, Lynn Valley, and Deep Cove single-family homes and townhomes.",
  },
  {
    title: "Multi-Unit Residential",
    body: "Condominiums and apartments requiring coordinated cleaning across multiple units.",
  },
  {
    title: "Renovations and Additions",
    body: "Where interior or exterior work impacts windows.",
  },
  {
    title: "Commercial Construction",
    body: "Office buildings, retail spaces, and mixed-use developments.",
  },
  {
    title: "Strata Common Areas",
    body: "Lobbies, hallways, and shared exterior windows in condominiums.",
  },
  {
    title: "Industrial and Warehouse Projects",
    body: "Requiring large-scale cleaning with specialized access.",
  },
];

export default function PostConstructionWindowCleaningPage() {
  return (
    <ServicePageLayout
      title="Post-Construction Window Cleaning in North Vancouver"
      heroImage="/window-cleaning-post-construction-north-vancouver.webp"
      heroIntro="When new construction or major renovations wrap up, windows often bear the marks of the building process. Paint overspray, protective stickers, caulk drips, adhesive residue, and construction dust cling to glass and frames. What may seem like routine cleanup requires specialized expertise and equipment to avoid permanent damage."
      faqItems={faqItems}
      ctaHeading="Schedule Your Post Construction Window Cleaning Today"
      ctaBody="Newly constructed or renovated windows deserve professional care. Mint Sanitary removes construction debris safely, protects your investment, and ensures windows are ready for final inspection and occupancy throughout North Vancouver. Use code MINT25 for 10% off your first clean."
    >
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Mint Sanitary provides professional post construction window cleaning
            throughout North Vancouver, including Lower Lonsdale, Lynn Valley,
            Deep Cove, Edgemont Village, and Seymour Heights. Our team removes
            construction debris safely, protects manufacturer warranties, and
            prepares windows for final inspection and occupancy.
          </p>

          <div className="mt-14">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              What Is Post Construction Window Cleaning?
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Post construction window cleaning addresses debris that standard
              window washing cannot handle. The process targets:
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                "Paint overspray (latex, enamel, exterior finishes)",
                "Protective stickers and adhesive labels",
                "Caulk and silicone sealant drips",
                "Construction dust, cement powder, and drywall particles",
                "Masking tape residue and plastic film",
                "Silica and glass fabrication dust on tempered surfaces",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] bg-[#f4f8ff] p-5 font-body text-[15px] leading-[1.7] text-[#5c6075]"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Unlike routine maintenance cleaning, post construction work in
              North Vancouver demands knowledge of multiple debris types, proper
              solvent selection, and gentle techniques that prevent scratching
              tempered glass or damaging Low-E coatings. A single mistake can
              cost thousands in replacement windows.
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
            Why Post Construction Cleaning Differs from Regular Maintenance
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Regular window cleaning maintains existing glass with mild soap and
            water. Post construction cleaning in North Vancouver faces entirely
            different challenges.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Materials and Methods
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Standard window cleaner cannot dissolve paint overspray or break
                down adhesive bonds. Harsh solvents like pure acetone or
                turpentine risk damaging window seals, frames, and surrounding
                surfaces. Razor blades and metal scrapers, if applied
                incorrectly, leave permanent scratches on new tempered glass. The
                solution requires precision: soft-bristle brushes, food-grade
                plastic scrapers, specialized eco-friendly paint removers, and
                techniques adjusted for glass type and debris composition.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Manufacturer Warranties and Coating Protection
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                New construction windows often feature Low-E thermal coatings to
                meet BC Building Code energy efficiency standards. These coatings
                are fragile. Abrasive pads, acidic cleaners, or improper
                scraping permanently damages them, voiding warranties and
                reducing energy performance. Tempered glass presents another
                challenge&mdash;during manufacturing, microscopic silica
                particles fuse to the surface. Careless scraping can activate
                these particles and create new scratches that cannot be repaired.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Professional Cleaning Ensures Protection
              </h3>
              <ul className="mt-3 space-y-2 font-body text-[15px] leading-[1.7] text-white/80">
                <li>Test all solvents on sample areas before full application</li>
                <li>
                  Use manufacturer-approved techniques for specialty glass
                </li>
                <li>Maintain comprehensive liability insurance</li>
                <li>
                  Provide documentation of pre-cleaning and post-cleaning
                  condition
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
            Types of Projects We Serve in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Our post construction window cleaning expertise covers diverse
            project types:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectTypes.map((p) => (
              <div key={p.title} className="rounded-[14px] bg-[#f4f8ff] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {p.body}
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
            The Post Construction Window Cleaning Process
          </h2>
          <div className="mt-8 space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#66DAD5]">
                  <span className="font-body text-[15px] font-extrabold text-white">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-[17px] font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Risks of Improper Post Construction Window Cleaning
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Improper cleaning costs far more than hiring professionals. Consider
            these risks:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Scratched Tempered Glass and Seal Damage
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Metal razor blades on dry glass or excessive pressure causes
                permanent scratches. These cannot be repaired and often void
                manufacturer warranties. Harsh solvents compromise window seals,
                leading to drafts and leaks. Replacement costs for multi-window
                projects reach $7,000 to $15,000.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Low-E Coating and Warranty Loss
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Energy efficiency coatings on new BC windows are easily
                compromised by abrasive cleaning or acidic products. Coating
                damage voids manufacturer warranties. Replacement windows with
                Low-E coatings cost $300 to $800 per window.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Our Commitment
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Mint Sanitary maintains liability insurance and uses
                manufacturer-safe techniques. We document all work and provide
                written guarantees on cleaning quality.
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
            When to Schedule Post Construction Window Cleaning
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            The optimal timing depends on your project stage and needs.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                During Construction
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Minor touch-ups and protective film removal prevent debris from
                bonding permanently. Scheduling a quick pass before final
                inspections supports occupancy approval.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Immediately After Exterior Work
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Remove external paint overspray and weather debris within 1 to 2
                days. Fresh paint is much easier to remove than paint that has
                cured and hardened.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Before Occupancy Permit Inspection
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Schedule final cleaning 3 to 5 days before the{" "}
                <a
                  href="https://www.cnv.org/Business-Development/Permits-Inspections/building-permits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  building inspector visits
                </a>
                . Windows must pass inspection for occupancy approval, and fresh,
                spotless glass demonstrates proper construction completion.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Post-Renovation Handover
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                For home renovations in neighborhoods like Edgemont Village and
                Seymour Heights, schedule cleaning 1 to 2 weeks after trades
                finish. Most dust has settled, but residue is still fresh and
                removes faster than aged, baked-on materials.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">
                Pro Tip for Contractors
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Coordinate with your contractor to schedule cleaning after
                interior work completes but before move-in or final walkthrough.
                Fresh residue within 2 weeks removes dramatically faster than
                dried, cured paint that has hardened over weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Pricing for Post Construction Window Cleaning
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Post construction window cleaning costs depend on several factors.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Number of Windows
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Larger projects with 50 or more windows may qualify for volume
                discounts that reduce per-window costs.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Debris Type and Severity
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Heavy paint overspray costs more than light dust removal.
                Adhesive labels, caulk drips, and silicone residue each require
                specific techniques and solvents.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Window Type and Coatings
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Tempered glass, Low-E coatings, skylights, and specialty finishes
                require specialized handling and command higher rates.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Access and Height
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Multi-story buildings with restricted access cost more than
                single-story homes. Roof access for skylights and high windows
                requires additional safety equipment and trained technicians.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Turnaround Speed
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Rush services completed within 1 to 2 days may incur premium
                rates for priority scheduling.
              </p>
            </div>
            <div className="rounded-[14px] bg-[#f4f8ff] p-5">
              <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                Typical Investment
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Most post construction window cleaning projects in North
                Vancouver range from $200 to $500 or more, depending on scope.
                Mint Sanitary provides{" "}
                <a href="/contact/" className="underline underline-offset-2">
                  free estimates
                </a>{" "}
                for all jobs. First-time customers receive{" "}
                <strong className="font-extrabold text-[#4E5062]">
                  10% off with code MINT25
                </strong>
                .
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
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Related Services
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                For more information about window cleaning and related services
                in North Vancouver:
              </p>
              <ul className="mt-4 space-y-3 font-body text-[15px] leading-[1.7] text-white/80">
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    Window cleaning services in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/residential-window-cleaning/"
                    className="underline underline-offset-2"
                  >
                    Residential window cleaning in North Vancouver
                  </a>
                </li>
                <li>
                  <a
                    href="/window-cleaning-north-vancouver/commercial-window-cleaning/"
                    className="underline underline-offset-2"
                  >
                    Commercial window cleaning in North Vancouver
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
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Additional Resources
              </h2>
              <ul className="mt-6 space-y-3 font-body text-[15px] leading-[1.7] text-white/80">
                <li>
                  <a
                    href="https://www.cnv.org/Business-Development/Permits-Inspections/building-permits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    City of North Vancouver Building Permits
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.glass.org/sites/default/files/2023-12/FB01-00_2023_Proper_Procedures_Cleaning_Architectural_Glass_Products.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Glass.org Technical Standards
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.worksafebc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    WorkSafeBC
                  </a>
                </li>
                <li>
                  <a
                    href="https://iwca.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    International Window Cleaning Association (IWCA)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.choa.bc.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    CONDO Home Owners Association (CHOA) BC
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
