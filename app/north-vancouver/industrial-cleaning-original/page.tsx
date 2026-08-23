import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/industrial-cleaning-original
// so the CMS version at /north-vancouver/industrial-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Industrial Cleaning North Vancouver | Mint Sanitary",
  description:
    "Industrial cleaning for warehouses, plants, and distribution centers in North Vancouver. WHMIS-compliant crews, flexible shift scheduling. Free estimates.",
  robots: { index: false, follow: false },
};

const includedItems = [
  { title: "Warehouse and Distribution Center Cleaning in North Vancouver", body: "North Vancouver's waterfront and rail corridor are home to a number of warehouse and light industrial operations, and large open floors in these buildings take a beating from forklift traffic, pallet movement, and constant foot traffic. Standard mopping doesn't cut it on concrete floors that size, so we use commercial scrubbers and sweepers to clear dust, grit, and debris, and to degrease areas where equipment or product handling leaves residue behind." },
  { title: "Manufacturing Facility Cleaning in North Vancouver", body: "On a production floor in a North Vancouver manufacturing facility, we clean the surfaces and areas around equipment, including floors, walls, workstations, and adjacent surfaces, without touching the machinery itself. That keeps cleaning aligned with your facility's own maintenance protocols while keeping the surrounding work environment clear of dust, shavings, and production debris." },
  { title: "High and Overhead Dusting for North Vancouver Facilities", body: "Industrial buildings in North Vancouver often have high ceilings, exposed ductwork, overhead piping, and racking that collect dust most cleaning routines never reach. Buildup in those areas can eventually settle back onto floors and work surfaces, so periodic high-level dusting is part of keeping a North Vancouver facility genuinely clean rather than clean at eye level only." },
  { title: "Break Rooms and Office Areas in North Vancouver Industrial Facilities", body: "Most industrial sites in North Vancouver have an administrative or break room component tucked inside the building. We clean these areas the way we would any commercial office space in North Vancouver: desks, kitchen surfaces, floors, and common areas kept tidy for staff working across rotating shifts." },
  { title: "Washroom and Locker Room Sanitization for North Vancouver Facilities", body: "Washrooms and locker rooms in North Vancouver industrial facilities see heavy use across multiple shifts. We sanitize fixtures, floors, and high-touch surfaces and restock supplies as needed, with attention to facilities where staff are changing in and out of protective gear throughout the day." },
  { title: "Loading Dock and Exterior Cleanup in North Vancouver", body: "Loading docks near North Vancouver's rail corridor and waterfront industrial areas collect dust, packaging residue, and tracked-in debris from vehicle and foot traffic. We clean dock areas, entryways, and adjacent exterior spaces so the boundary between outside and inside doesn't become an ongoing source of mess." },
  { title: "Debris and Packaging Waste Removal in North Vancouver", body: "Shipping and receiving at North Vancouver warehouses and distribution centers generates cardboard, shrink wrap, strapping, and general packaging waste on an ongoing basis. Cleanup and removal of this debris is built into a regular industrial cleaning schedule rather than left for facility staff to handle between their own tasks." },
];

const faqItems = [
  {
    question: "What does industrial cleaning cost in North Vancouver?",
    answer: "Cost depends on the size of your North Vancouver facility, the scope of work, and how often you need service. Request a free estimate and we'll put together a quote based on your specific North Vancouver space.",
  },
  {
    question: "What types of facilities do you clean in North Vancouver?",
    answer: "We clean warehouses, distribution centers, manufacturing plants, and similar industrial spaces in North Vancouver, including production floors, break rooms, washrooms, loading docks, and exterior areas.",
  },
  {
    question: "Can you clean around active machinery in a North Vancouver facility?",
    answer: "We clean the surfaces and floor areas around equipment in North Vancouver facilities, including workstations and adjacent surfaces. We don't clean or service the machinery itself, which stays within your own maintenance protocols.",
  },
  {
    question: "Do you clean during business hours or after hours in North Vancouver?",
    answer: "Either. Many North Vancouver industrial facilities run shift work or 24-hour operations, so we schedule cleaning around your production calendar, including evenings, overnight, weekends, and holidays.",
  },
  {
    question: "What cleaning products do you use in North Vancouver industrial facilities?",
    answer: "We use eco-friendly, non-toxic, biodegradable products in North Vancouver, and our staff follow WHMIS guidelines for handling and labeling cleaning chemicals used in an industrial setting.",
  },
  {
    question: "Are your North Vancouver staff trained to work safely in an industrial environment?",
    answer: "Yes. Our North Vancouver cleaning staff are trained on WHMIS-compliant product handling and follow WorkSafeBC-aligned safety practices for working around forklift traffic, loading docks, and active production areas.",
  },
  {
    question: "Do you offer one-time cleaning or ongoing service in North Vancouver?",
    answer: "Both. We can do a one-time deep clean of a North Vancouver warehouse or facility, or set up a recurring schedule that matches your shift pattern and operational needs.",
  },
  {
    question: "What's the difference between industrial cleaning and standard commercial cleaning in North Vancouver?",
    answer: "Industrial cleaning in North Vancouver deals with concrete dust, metal shavings, oil and grease residue, and packaging debris that don't come up in office cleaning, and often calls for equipment like floor scrubbers and sweepers instead of standard mopping.",
  },
  {
    question: "Do you clean loading docks and exterior areas in North Vancouver?",
    answer: "Yes, loading dock cleanup and adjacent exterior areas are part of our North Vancouver industrial cleaning scope, since these areas track dust and debris into the rest of the facility.",
  },
  {
    question: "Which parts of North Vancouver do you serve for industrial cleaning?",
    answer: "We serve industrial and light industrial areas throughout North Vancouver, including facilities near the waterfront and rail corridor and along the Low Level Road industrial corridor.",
  },
  {
    question: "Is Mint Sanitary insured for industrial work in North Vancouver?",
    answer: "Yes. Our North Vancouver staff are bonded, insured, and background-checked, and they follow WorkSafeBC-aligned safety practices when working in industrial environments.",
  },
  {
    question: "Can you work around a 24-hour operation in North Vancouver?",
    answer: "Yes. We're available seven days a week in North Vancouver, including evenings, weekends, and holidays, so cleaning can be scheduled around round-the-clock North Vancouver production.",
  },
  {
    question: "Do you offer a satisfaction guarantee for North Vancouver industrial cleaning?",
    answer: "Yes. Every clean we perform in North Vancouver is backed by a 24-hour satisfaction guarantee, so if something's missed, we come back and address it.",
  },
  {
    question: "How do I get a quote for my North Vancouver facility?",
    answer: "Call 236-688-3248, email hello@mintsanitary.com, or visit our rates page to request a free estimate for your North Vancouver facility.",
  },
  {
    question: "Do you offer a discount for new industrial clients in North Vancouver?",
    answer: "Yes. New North Vancouver clients can use code MINT26 for 10% off their first clean, including industrial cleaning services.",
  },
];

export default function IndustrialCleaningNorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Industrial Cleaning Services in North Vancouver"
      heroImage="/commercial-janitorial-cleaning-north-vancouver.jpg"
      heroSubtitle="WHMIS-Compliant Crews & Shift-Based Scheduling"
      heroIntro="Warehouses, manufacturing plants, and distribution centers in North Vancouver deal with a different kind of mess than a typical office. Concrete dust, metal shavings, packaging debris, and oil or grease residue from machinery build up in ways that standard mopping isn't built to handle. Mint Sanitary is based in North Vancouver and provides industrial cleaning services to facilities throughout the city, using WHMIS-compliant products and equipment suited to industrial floors, high bays, loading docks, and staff areas. Cleaning is scheduled around your production calendar, not the other way around, so North Vancouver crews can work between shifts, overnight, or on weekends without interrupting your operation."
      faqItems={faqItems}
      ctaHeading="Get a Free Estimate for Your North Vancouver Facility"
      ctaBody="Every North Vancouver facility has a different layout, shift pattern, and cleaning scope, so pricing starts with understanding your space. Reach out to Mint Sanitary for a free estimate on warehouse, manufacturing, or distribution center cleaning in North Vancouver, and we'll build a schedule around how your facility runs."
      ctaHref="/rates"
    >
      {/* ── What's Included (white bg) ────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Our North Vancouver Industrial Cleaning Services
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Industrial facilities in North Vancouver need a broader range
            of cleaning tasks than a typical commercial space, and the
            scope usually depends on what the facility does and how it&apos;s
            laid out. Here&apos;s what our North Vancouver industrial
            cleaning services can cover.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {includedItems.map((item) => (
              <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Compliance (blue bg) ─────────────────────── */}
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
            Why Industrial Cleaning Matters for North Vancouver Facilities
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Cleaning an industrial facility in North Vancouver isn&apos;t
            only about appearance. WorkSafeBC sets workplace safety
            requirements for BC employers, including standards for
            chemical handling under WHMIS, and those requirements apply to
            the cleaning products and processes used inside a North
            Vancouver facility just as much as to the work happening on the
            production floor. Products that aren&apos;t handled or labeled
            correctly create a compliance problem on top of a cleanliness
            one.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            There&apos;s also a practical safety angle for North Vancouver
            operations. Dust, oil, grease, and packaging debris on
            warehouse or manufacturing floors create slip and trip
            hazards, and buildup around machinery can interfere with
            equipment performance over time. Keeping floors, walkways, and
            work areas clear is general facility maintenance best practice
            for any North Vancouver industrial site, not an optional
            add-on. A North Vancouver facility that stays on top of dust,
            debris, and residue is easier to inspect, easier to move
            through safely, and easier to keep running without unplanned
            downtime tied to housekeeping issues.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Our cleaning staff working in North Vancouver are trained on
            WHMIS-compliant handling of the products they use, and they
            follow WorkSafeBC-aligned safety practices when working in an
            active industrial environment, including around forklift
            traffic, loading zones, and areas near production equipment.
          </p>
        </div>
      </section>

      {/* ── Scheduling (white bg) ─────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Flexible Scheduling for North Vancouver Shift Work
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Many industrial facilities in North Vancouver run multiple
            shifts, and some run around the clock. Cleaning that only
            happens during standard daytime business hours doesn&apos;t fit
            that reality, and it can mean cleaning crews working in the way
            of active production. Mint Sanitary is available seven days a
            week in North Vancouver, including evenings, weekends, and
            holidays, so cleaning can be scheduled for the window that
            works best for your North Vancouver operation, whether that&apos;s
            overnight, between shift changes, or on a weekend when the
            floor is quieter.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We build the schedule around how your North Vancouver facility
            runs rather than asking you to work around ours. That includes
            coordinating with facility managers on which areas need to
            stay clear during active production and which can be cleaned
            at any time.
          </p>
        </div>
      </section>

      {/* ── Why Choose (blue bg) ──────────────────────────────── */}
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
            Why North Vancouver Facilities Choose Mint Sanitary
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary is headquartered in North Vancouver and holds a
            4.9 out of 5 rating from more than 120 Google reviews. Our
            staff are bonded, insured, and background-checked, and we use
            eco-friendly, non-toxic, biodegradable cleaning products
            throughout our North Vancouver services, including in
            industrial settings where product handling has to meet WHMIS
            standards. Every clean in North Vancouver is backed by a
            24-hour satisfaction guarantee, so if something&apos;s missed,
            we come back and make it right.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We&apos;ve worked with organizations including BC Hydro and
            Powers Construction, alongside commercial and institutional
            clients across the North Vancouver area and the wider region.
            New North Vancouver clients can use code MINT26 for 10% off
            their first clean.
          </p>
        </div>
      </section>

      {/* ── Serving Industrial Areas (white bg) ───────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Serving Industrial Areas Across North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            North Vancouver&apos;s light industrial and warehouse
            operations tend to cluster in a few recognizable parts of the
            city: near the waterfront and rail corridor, along the Low
            Level Road industrial corridor, and in light industrial
            pockets near Mountain Highway. Wherever your facility sits in
            North Vancouver, our crews schedule around your shift pattern
            and bring the right equipment for the job, whether that&apos;s a
            warehouse floor scrubber, degreasing products, or standard
            janitorial supplies for an office area inside a larger
            industrial building.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            If your facility is outside North Vancouver, our{" "}
            <a href="/services/industrial-cleaning" className="underline underline-offset-2">
              industrial cleaning services
            </a>{" "}
            page covers the areas we serve across Greater Vancouver,
            including West Vancouver, Vancouver, Burnaby, New Westminster,
            and Maple Ridge.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
