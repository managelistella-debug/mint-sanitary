import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/move-in-move-out-cleaning-original
// so the CMS version at /services/move-in-move-out-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Move-In & Move-Out Cleaning | Greater Vancouver",
  description:
    "Move-in and move-out cleaning across Greater Vancouver. Deep cleans for a fresh start or a smooth handover. Free estimates, 10% off first clean.",
  robots: { index: false, follow: false },
};

const moveInChecklist = [
  {
    title: "Kitchen",
    items: [
      "Clean and sanitize inside all cabinets and drawers",
      "Deep clean inside the oven, stovetop, and range hood",
      "Clean inside the refrigerator, freezer, and shelves",
      "Wipe down inside the microwave and dishwasher",
      "Sanitize countertops, backsplash, and sink",
      "Clean and polish faucet and fixtures",
      "Degrease cabinet fronts and handles",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize the toilet inside and out",
      "Clean the bathtub, shower walls, and shower door",
      "Scrub tile grout and remove soap scum and buildup",
      "Polish mirrors and glass",
      "Clean and sanitize the vanity, sink, and countertop",
      "Wipe fixtures, towel bars, and hooks",
      "Clean inside medicine cabinets and shelves",
      "Clean the exhaust fan and vents",
      "Mop floors",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces, shelves, and ledges",
      "Clean inside all closets, drawers, and storage",
      "Wipe doors, door frames, and handles",
      "Clean light switches, outlet covers, and baseboards",
      "Remove cobwebs",
      "Clean windows from the inside, including tracks and sills",
    ],
  },
  {
    title: "Living Areas",
    items: [
      "Dust and wipe all surfaces and shelving",
      "Clean light fixtures, ceiling fans, and vents",
      "Wipe window sills, blinds, and tracks",
      "Wipe baseboards and door frames",
      "Clean the fireplace mantle and surround, if applicable",
    ],
  },
  {
    title: "Floors",
    items: [
      "Vacuum all carpeted areas thoroughly",
      "Mop all hard floors",
      "Clean floor edges, corners, and under-cabinet toe kicks",
    ],
  },
];

const moveOutChecklist = [
  {
    title: "Bedrooms & Living Areas",
    items: [
      "Dust all surfaces, shelves, and ledges",
      "Clean inside closets and drawers",
      "Wipe doors, handles, light switches, and baseboards",
      "Vacuum and mop floors",
      "Clean windows from the inside",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Deep clean the oven, stovetop, and range hood",
      "Clean inside the refrigerator and freezer",
      "Wipe down all cabinets inside and out",
      "Sanitize the sink, faucet, and countertops",
      "Clean inside the microwave and dishwasher",
      "Degrease the backsplash",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize the toilet, tub, and shower",
      "Clean tile grout and remove soap scum",
      "Polish mirrors and fixtures",
      "Wipe the vanity, medicine cabinet, and shelves",
      "Mop floors",
    ],
  },
  {
    title: "Throughout the Property",
    items: [
      "Dust and clean all light fixtures and ceiling fans",
      "Wipe all door handles, switches, and outlet covers",
      "Vacuum and mop all floors",
      "Clean interior windows, tracks, and sills",
      "Remove cobwebs",
      "Remove all trash and cleaning debris",
    ],
  },
];

const faqItems = [
  {
    question: "What's the difference between move-in and move-out cleaning?",
    answer:
      "Move-in cleaning prepares an empty property for a new occupant to unpack into. Move-out cleaning prepares a property to be handed back after a tenant leaves, meeting the condition standard expected at inspection.",
  },
  {
    question: "How much does move-in or move-out cleaning cost?",
    answer: "Both start around $390 for 500 to 600 square feet, scaling up by size. Move-out cleaning can reach $850 or more for larger properties.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For move-in cleaning, book one to two days before your move-in date, once the property is empty. For move-out cleaning, one to two weeks ahead is recommended, though we can often accommodate last-minute requests.",
  },
  {
    question: "Do you clean inside appliances?",
    answer:
      "Yes. Both services include the inside of the oven, stovetop, range hood, refrigerator, freezer, microwave, and dishwasher.",
  },
  {
    question: "Will move-out cleaning help me get my deposit back?",
    answer:
      "A thorough move-out clean addresses the reasonably clean condition standard set by the BC Residential Tenancy Act, reducing the risk of cleaning-related deductions.",
  },
  {
    question: "How long does a move-in or move-out clean take?",
    answer: "A typical two to three bedroom property takes four to six hours for either service.",
  },
  {
    question: "Do I need to be present during the clean?",
    answer:
      "No. Many clients arrange access and aren't on site, especially for move-out cleaning after they've already relocated.",
  },
  {
    question: "Can you clean a property that still has furniture in it?",
    answer: "Both services are designed for an empty property, which is what makes them more thorough than a standard visit.",
  },
  {
    question: "What products do you use?",
    answer: "Eco-friendly, plant-based, non-toxic products along with HEPA-filter vacuums.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer: "Yes. Every clean comes with a 24-hour satisfaction guarantee.",
  },
  {
    question: "Is there a discount for first-time customers?",
    answer: "Yes. New customers get 10% off their first clean with code MINT26.",
  },
  {
    question: "Do you serve areas outside North Vancouver?",
    answer: "Yes. We serve Greater Vancouver broadly, including West Vancouver, Vancouver, Burnaby, and surrounding areas.",
  },
];

export default function ServicesMoveInMoveOutCleaningPage() {
  return (
    <ServicePageLayout
      title="Move-In and Move-Out Cleaning in Greater Vancouver"
      heroImage="/move-in-cleaning-north-vancouver-apartment.jpg"
      heroSubtitle="Fresh Start & Handover Cleaning"
      heroIntro="Moving is one of the few times a home needs more than a routine clean: it needs a full reset. Mint Sanitary provides move-in cleaning and move-out cleaning across Greater Vancouver, including North Vancouver, West Vancouver, Vancouver, and Burnaby."
      faqItems={faqItems}
      ctaHeading="Ready to Book?"
      ctaBody="Get a free, transparent estimate for your move-in or move-out clean. Visit our rates page for pricing by property size, or call 236-688-3248 or email hello@mintsanitary.com to schedule."
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            These are two distinct services built around a specific moment:
            the handoff between one occupant and the next. A move-in clean
            gets a property ready for you to unpack into. A move-out clean
            gets a property ready to hand back, whether that&apos;s to a
            landlord, a new buyer, or a property manager. Both go deeper
            than a standard house cleaning because both happen when a space
            is empty, the only time you can reach every cabinet, closet, and
            appliance without furniture in the way.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
            If you&apos;re in North Vancouver and want neighborhood-specific
            detail, visit our{" "}
            <a
              href="/north-vancouver/move-in-move-out-cleaning"
              className="underline underline-offset-2"
            >
              North Vancouver move-in and move-out cleaning page
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Move-In Cleaning (f4f8ff bg) ─────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Move-In Cleaning
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Move-in cleaning is a deep clean performed before you move your
            belongings in, covering every room, including areas a regular
            clean doesn&apos;t touch: inside appliances, inside cabinets and
            closets, bathrooms top to bottom, and every floor surface. Book
            it one to two days before your move-in date, once the previous
            occupant has moved out and before your furniture arrives. A
            typical two to three bedroom home takes four to six hours.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {moveInChecklist.map((card) => (
              <div key={card.title} className="rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{card.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            A professional move-in clean saves you time during an already
            busy week, removes allergens and residue left by previous
            occupants, and gives you a documented, clean baseline for the
            property&apos;s condition. We use HEPA-filter vacuums and
            eco-friendly products that reach places household supplies
            typically can&apos;t match.
          </p>
        </div>
      </section>

      {/* ── Move-Out Cleaning (blue bg) ──────────────────────── */}
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
            Move-Out Cleaning
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Move-out cleaning is a deep, one-time clean performed after your
            belongings are out and before the keys change hands, built
            around the standard a property needs to meet when a tenant
            leaves. The BC Residential Tenancy Act requires tenants to leave
            a rental in reasonably clean condition. Landlords are permitted
            to deduct from a security deposit for cleaning costs, for repair
            or damage beyond normal wear and tear, or for disposal of items
            left behind. A thorough move-out clean is the most direct way to
            protect your deposit and avoid a dispute.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {moveOutChecklist.map((card) => (
              <div key={card.title} className="rounded-[14px] bg-white/10 p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{card.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Book one to two weeks before your move-out date if you can,
            especially near month-end when moving demand is high.
            Last-minute requests can often still be accommodated. A typical
            two to three bedroom property takes four to six hours.
          </p>
        </div>
      </section>

      {/* ── Move-In vs Move-Out + Why Us (white bg) ──────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Move-In vs. Move-Out: What&apos;s the Difference
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Both are deep, one-time cleans covering the whole property,
            inside appliances included. Move-in cleaning is about a fresh
            start, timed to your arrival. Move-out cleaning is about
            handover, timed to your departure and focused on meeting the
            condition standard a landlord or property manager expects at
            inspection. If you&apos;re doing both, we can schedule the two
            cleans back to back to fit your timeline.
          </p>
          <div className="mt-10 overflow-hidden rounded-[20px]">
            <img
              src="/move-out-cleaning-north-vancouver-living-room.jpg"
              alt="Move-out cleaning turning an empty living room spotless"
              className="h-[300px] w-full object-cover sm:h-[380px]"
            />
          </div>
          <p className="mt-10 font-body text-[15px] leading-[1.7] text-white/80">
            Eco-friendly, non-toxic, plant-based cleaning products &middot;
            HEPA-filter vacuums &middot; background-checked, bonded, and
            insured staff &middot; available 7 days a week, including
            evenings &middot; transparent free estimates with no hidden
            fees &middot; 24-hour satisfaction guarantee &middot; 10% off
            your first clean with code{" "}
            <strong className="text-white">MINT26</strong>.
          </p>
        </div>
      </section>

      {/* ── Pricing + Cities (f4f8ff bg) ─────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Pricing Overview
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Move-in and move-out cleaning both start around $390 for a 500
            to 600 square foot property, scaling up with size and
            condition. Move-out cleaning can range up to $850 or more for
            larger properties in the 4000 to 5000 square foot range. Most
            jobs are priced by property size and condition rather than a
            flat rate. For the full pricing table, visit our{" "}
            <a href="/rates" className="underline underline-offset-2">
              rates page
            </a>
            .
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">We Serve These Cities</h3>
          <p className="mt-3 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is based in North Vancouver and provides move-in
            and move-out cleaning across the Lower Mainland, including West
            Vancouver, Vancouver, and Burnaby. If you&apos;re in North
            Vancouver, see our{" "}
            <a href="/north-vancouver/move-in-move-out-cleaning" className="underline underline-offset-2">
              North Vancouver move-in and move-out cleaning page
            </a>{" "}
            for local detail. To check whether we cover your neighborhood,
            visit our{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              service areas page
            </a>
            .
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
