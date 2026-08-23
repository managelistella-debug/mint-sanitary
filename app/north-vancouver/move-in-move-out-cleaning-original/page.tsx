import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/move-in-move-out-cleaning-original
// so the CMS version at /north-vancouver/move-in-move-out-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Move-In & Move-Out Cleaning North Vancouver | Mint",
  description:
    "Move-in and move-out cleaning in North Vancouver. Protect your deposit, start fresh in your new home. Free estimates, 10% off your first clean.",
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
      "Clean windows from inside, including tracks and sills",
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
      "Wipe doors, handles, and light switches",
      "Wipe baseboards",
      "Vacuum and mop floors",
      "Clean windows from inside",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Deep clean the oven, stovetop, and range hood",
      "Clean inside the refrigerator and freezer",
      "Wipe down all cabinets, inside and out",
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

const moreServicesLinks = [
  { label: "Deep cleaning in North Vancouver", href: "/north-vancouver/deep-cleaning" },
  { label: "Post-construction cleaning in North Vancouver", href: "/north-vancouver/post-construction-cleaning" },
  { label: "Vacation rental cleaning in North Vancouver", href: "/north-vancouver/vacation-rental-cleaning" },
  { label: "House cleaning in North Vancouver", href: "/north-vancouver/house-cleaning" },
];

const faqItems = [
  {
    question: "What's included in move-in cleaning in North Vancouver?",
    answer:
      "Inside your kitchen appliances and cabinets, bathrooms, closets, and floors: a deep clean meant to get every surface ready before your furniture arrives.",
  },
  {
    question: "What's included in move-out cleaning in North Vancouver?",
    answer: "The same deep-clean scope as move-in cleaning, with extra attention paid to the details a landlord checks during inspection.",
  },
  {
    question: "How much does move-in cleaning cost in North Vancouver?",
    answer: "Starts around $390 for a 500 to 600 square foot home and increases with square footage.",
  },
  {
    question: "How much does move-out cleaning cost in North Vancouver?",
    answer: "Also starts around $390 for 500 to 600 square feet, up to $850 or more for larger homes between 4,000 and 5,000 square feet.",
  },
  {
    question: "How long does move-in cleaning take in North Vancouver?",
    answer: "A typical 2 to 3 bedroom home takes 4 to 6 hours, depending on the condition left by the previous occupant.",
  },
  {
    question: "How long does move-out cleaning take in North Vancouver?",
    answer: "About 4 to 6 hours for a 2 to 3 bedroom property, similar to move-in timing.",
  },
  {
    question: "When should I book move-in cleaning in North Vancouver?",
    answer: "1 to 2 days before your move date, ideally after the previous occupant has left and before furniture arrives.",
  },
  {
    question: "How far ahead should I book move-out cleaning in North Vancouver?",
    answer: "1 to 2 weeks in advance is ideal, though our team can often fit in last-minute requests.",
  },
  {
    question: "Will move-out cleaning guarantee I get my full deposit back in North Vancouver?",
    answer:
      "A thorough clean can't guarantee anything, since deposit decisions rest with your landlord, but it directly addresses the cleaning standard required under BC's Residential Tenancy Act. One recent North Vancouver client got their full deposit back after booking with us.",
  },
  {
    question: "What can North Vancouver landlords deduct from a security deposit?",
    answer: "Cleaning costs if the unit wasn't left reasonably clean, repair costs beyond normal wear and tear, and disposal fees for anything left behind.",
  },
  {
    question: "Do you offer same-day or short-notice cleaning in North Vancouver?",
    answer: "We can often fit in short-notice move-out cleaning, though booking 1 to 2 weeks ahead gives you the most flexibility.",
  },
  {
    question: "What areas of North Vancouver do you serve?",
    answer:
      "Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Norgate, Pemberton Heights, Capilano, Dollarton, and Blueridge, plus West Vancouver, Vancouver, and Burnaby.",
  },
  {
    question: "Do I need to be present during move-in cleaning in North Vancouver?",
    answer: "No. Many clients schedule their move-in clean before picking up keys, and our team can work independently.",
  },
  {
    question: "What's the difference between move-in and move-out cleaning in North Vancouver?",
    answer:
      "Move-in cleaning prepares a home for you to live in; move-out cleaning prepares a rental for inspection and protects your deposit. Both cover the same deep-clean checklist.",
  },
  {
    question: "Do you clean inside appliances during move-out cleaning in North Vancouver?",
    answer: "Yes, including the oven, fridge, freezer, microwave, and dishwasher, since landlords often check these during inspection.",
  },
  {
    question: "Are your cleaning products safe for kids and pets in North Vancouver homes?",
    answer: "Yes. Eco-friendly, plant-based products and HEPA-filter vacuums in every North Vancouver home we clean.",
  },
  {
    question: "Do you offer discounts for move-in or move-out cleaning in North Vancouver?",
    answer: "New clients get 10% off their first move-in or move-out clean with code MINT26.",
  },
  {
    question: "Can you clean North Vancouver condos and apartments, not just houses?",
    answer: "Yes, including condo towers in Lower Lonsdale and Capilano, with the checklist and crew size adjusted to fit the unit.",
  },
];

export default function NorthVancouverMoveInMoveOutCleaningPage() {
  return (
    <ServicePageLayout
      title="Move-In and Move-Out Cleaning in North Vancouver"
      heroImage="/move-in-cleaning-north-vancouver-apartment.jpg"
      heroSubtitle="Fresh Start & Deposit Protection Cleaning"
      heroIntro="Moving is stressful enough without worrying about scrub marks in the oven or a landlord holding back your deposit. Mint Sanitary handles move-in and move-out cleaning across North Vancouver, in condo towers in Lower Lonsdale and family homes in Lynn Valley alike. We're based right here in North Vancouver, so our crews know which condo towers have strict move-out checklists and which local landlords do a walk-through with a flashlight."
      faqItems={faqItems}
      ctaHeading="Get a Free Quote for Move-In or Move-Out Cleaning"
      ctaBody="Get a free, transparent estimate and see the full pricing breakdown on our North Vancouver rates page. Prefer to talk it through first? Call 236-688-3248 or email hello@mintsanitary.com."
      ctaHref="/rates"
      breadcrumbCity={{ name: "North Vancouver", href: "/north-vancouver" }}
    >
      {/* ── Move-In Cleaning (white bg) ──────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Move-In Cleaning in North Vancouver
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Move-in cleaning is a deep clean of your new North Vancouver
            home before your furniture arrives, covering the inside of
            appliances, cabinets, closets, bathrooms, and floors. Book for 1
            to 2 days before your move date, after the previous occupant has
            fully vacated and before boxes and furniture show up. A typical
            2 to 3 bedroom home in North Vancouver takes 4 to 6 hours.
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
            A move-in clean saves you time during an already busy week and
            removes allergens, pet dander, and residue left behind by the
            previous occupant. Our team uses HEPA-filter vacuums and
            eco-friendly, plant-based products, so you unpack into a
            genuinely clean space. Years of cleaning homes across North
            Vancouver taught us the difference between a Lower Lonsdale
            condo with in-suite laundry and a character home in Pemberton
            Heights with an older kitchen layout. That familiarity means our
            team shows up knowing what to expect.
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
            Move-Out Cleaning in North Vancouver
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Move-out cleaning is built around one goal: protecting your
            security deposit. British Columbia&apos;s Residential Tenancy
            Act requires tenants to leave a rental in a reasonably clean
            condition. You can review the province&apos;s official guidance
            through the{" "}
            <a
              href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              BC Residential Tenancy Branch
            </a>
            . Under the Act, a landlord in North Vancouver can generally
            deduct for cleaning costs (if the unit wasn&apos;t left
            reasonably clean), repair or damage costs beyond normal wear and
            tear, and disposal fees for items left behind.
          </p>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Book 1 to 2 weeks ahead if you can, though our team can often
            accommodate last-minute requests. A 2 to 3 bedroom North
            Vancouver property takes about 4 to 6 hours.
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
            Our team has worked with enough North Vancouver landlords and
            property managers to know what they look for during a move-out
            inspection, including rental towers in Lower Lonsdale and house
            shares in Norgate. One recent North Vancouver client got their
            full security deposit back after booking a move-out clean with
            us.
          </p>
        </div>
      </section>

      {/* ── Move-In vs Move-Out (white bg) ───────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Move-In vs. Move-Out: What&apos;s the Difference in North Vancouver
          </h2>
          <p className="mt-4 max-w-[800px] font-body text-[15px] leading-[1.7] text-white/80">
            Move-in and move-out cleaning cover the same ground, appliances,
            cabinets, bathrooms, and floors, but serve different purposes:
            getting a home ready to live in versus getting a rental ready
            for inspection. Both take about the same time for a
            similar-sized property.
          </p>
        </div>
      </section>

      {/* ── Why North Vancouver Trusts Mint (AccordionWithImage) ── */}
      <AccordionWithImage
        heading="Why North Vancouver Trusts Mint Sanitary"
        intro="North Vancouver's rainy climate means floors and entryways track in dirt fast, especially during a move when doors stay open and boxes go back and forth. North Vancouver's mix of rental condo towers in Lower Lonsdale and larger family homes in Lynn Valley and Edgemont Village means turnover looks different from one job to the next, and our team adjusts scope and crew size to match."
        image="/mint-sanitary-team-north-vancouver.jpg"
        imageAlt="Mint Sanitary move-in and move-out cleaning team in North Vancouver"
        items={[
          { title: "Background-checked and insured", body: "Every Mint Sanitary cleaner is background-checked, bonded, and insured." },
          { title: "7-day availability", body: "We're available 7 days a week, including evenings." },
          { title: "Transparent pricing", body: "Every estimate is free and transparent, with no hidden fees." },
          { title: "Satisfaction guarantee", body: "If anything's missed, we'll return within 24 hours to fix it at no charge." },
          { title: "First clean discount", body: "New customers get 10% off their first clean with code MINT26." },
        ]}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Pricing + More Services (f4f8ff bg) ──────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Move-In and Move-Out Cleaning Pricing in North Vancouver
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Move-in cleaning starts around $390 for 500 to 600 square feet
            and scales up from there. Move-out cleaning follows a similar
            starting point, $390 for 500 to 600 square feet, up to $850 or
            more for larger homes in the 4,000 to 5,000 square foot range.
            Most jobs are priced by square footage rather than a flat rate.
            See the full{" "}
            <a href="/rates" className="underline underline-offset-2">
              North Vancouver rate breakdown
            </a>{" "}
            for exact pricing.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">
            More Cleaning Services in North Vancouver
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {moreServicesLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full bg-white/[0.12] px-5 py-2.5 font-body text-[14px] font-semibold text-white underline decoration-[#66DAD5] underline-offset-2 transition-colors hover:bg-white/[0.2]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
