import { client, key, uploadImage, replaceDoc } from "./lib.mjs";

/**
 * Seeds the shared Site Settings singleton and the "stub" cleaningType
 * records the migrated pages reference as tiles.
 *
 * A stub carries only tile data (name, image, blurb) and hasOwnPage: true.
 * Because its slug is still in RESERVED_SERVICE_SLUGS, it renders no page of
 * its own — the existing hand-coded page keeps serving that URL — but its
 * tile links there correctly. When that page is later migrated, this same
 * record gains sections and the reserved entry is removed. No new doc, no
 * broken links in between.
 */

async function seedGlobals() {
  console.log("→ Site Settings");
  const logos = [
    ["Vancouver Coastal Health", "/client-vancouver-coastal-health.png"],
    ["BC Hydro", "/client-bc-hydro.png"],
    ["Arbutus Point Developments Ltd.", "/client-arbutus-point.png"],
    ["Powers Construction", "/client-powers-construction.png"],
  ];

  const clientLogos = [];
  for (const [name, file] of logos) {
    clientLogos.push({ _key: key("logo"), name, image: await uploadImage(file, `${name} logo`) });
  }

  const everyCleanItems = [
    ["percent", "10% off your first clean with code MINT26"],
    ["shieldCheck", "Background-checked & insured cleaners"],
    ["leaf", "Eco-friendly cleaning products"],
    ["heart", "100% happiness guarantee"],
    ["clock", "On-time arrival, every time"],
    ["hardHat", "WorkSafeBC coverage on every job"],
    ["clipboardCheck", "Mint Sanitary Clean Checklist: full cleaning service"],
  ].map(([icon, text]) => ({ _key: key("inc"), icon, text }));

  const reviews = [
    ["Sarah M.", "2 weeks ago", "Mint Sanitary did an incredible deep clean of our Lynn Valley home. Every corner was spotless, and they used eco-friendly products which was important to us with two young kids. Highly recommend!"],
    ["James T.", "1 month ago", "We use Mint for our office in Lower Lonsdale. They’re always on time, thorough, and the team is super professional. Our workspace has never looked better."],
    ["Priya K.", "3 weeks ago", "Booked a move-out clean for my apartment in North Vancouver. The team was efficient and left the place looking brand new. Got my full deposit back!"],
    ["David R.", "1 week ago", "Fantastic recurring cleaning service. Same team every two weeks, they know our home and always go above and beyond. Fair pricing and great communication."],
    ["Michelle L.", "2 months ago", "Had our carpets and upholstery done after a renovation. The results were amazing — looked like new furniture! The team was careful, professional, and on time."],
    ["Robert C.", "3 weeks ago", "Great post-construction cleanup for our Deep Cove renovation. Handled all the fine dust and debris thoroughly. Would use again for future projects."],
  ].map(([name, date, text]) => ({ _key: key("rev"), name, rating: 5, date, text }));

  await client.createOrReplace({
    _id: "siteGlobals",
    _type: "siteGlobals",
    everyCleanHeading: "Every Mint Cleaning Includes",
    everyCleanItems,
    clientsHeading: "Trusted by Local Organizations",
    clientLogos,
    reviewsHeading: "What Our Clients Say",
    reviewsRating: "4.9 out of 5",
    reviewsCount: "based on 120+ reviews",
    reviews,
    phone: "236-688-3248",
    email: "hello@mintsanitary.com",
    promoCode: "MINT26",
  });
  console.log("   saved siteGlobals");
}

/** Tile copy below is lifted verbatim from the existing pages — nothing rewritten. */
const STUBS = [
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    image: "/office-cleaning-north-vancouver-workspace.jpg",
    tileDescription:
      "Daily and weekly office cleaning that covers desks, common areas, kitchens, and washrooms, keeping your workspace ready for clients and staff every morning.",
  },
  {
    slug: "restaurant-cleaning",
    name: "Restaurant Cleaning",
    image: "/commercial-kitchen-cleaning-north-vancouver.webp",
    tileDescription:
      "Degreasing, hood cleaning, and floor sanitization for restaurants and commercial kitchens that need to meet health department standards every single day.",
  },
  {
    slug: "school-cleaning",
    name: "School Cleaning",
    image: "/school-cleaning-classroom-north-vancouver.jpg",
    tileDescription:
      "Classroom and common area cleaning built around school hours, with sanitization protocols that help reduce the spread of germs among students and staff.",
  },
  {
    slug: "gym-cleaning",
    name: "Gym Cleaning",
    image: "/commercial-gym-cleaning-north-vancouver.webp",
    tileDescription:
      "Equipment sanitization, locker room cleaning, and floor care for fitness facilities that deal with heavy daily use and high hygiene expectations.",
  },
  {
    slug: "church-cleaning",
    name: "Church Cleaning",
    image: "/church-cleaning-sanctuary-north-vancouver.jpg",
    tileDescription:
      "Sanctuary, hall, and common area cleaning scheduled around services and events, so your space is ready whenever your congregation gathers.",
  },
  {
    // No tile blurb existed for this one on either source page — left blank
    // rather than inventing copy. The tile renders image + title + Learn More.
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    image: "/post-construction-cleaning-north-vancouver.jpg",
  },
  {
    // Unlike the other stubs, this one is PERMANENT — /services/house-cleaning
    // is the hand-coded design template and is never migrated, so no real
    // cleaningType doc will ever replace this. It exists only so
    // north-vancouver/house-cleaning's weak reference to it resolves (for
    // `cleaningType.name`) and so other pages' tile grids can link to it.
    // hasOwnPage: true is correct even though this is a stub — the page is
    // real, just not CMS-rendered; "house-cleaning" stays in
    // RESERVED_SERVICE_SLUGS permanently so the static folder keeps serving
    // it. No verbatim tile blurb exists anywhere on the site for the generic
    // "House Cleaning" umbrella service (only its sub-types have blurbs), so
    // tileDescription is left blank rather than invented.
    slug: "house-cleaning",
    name: "House Cleaning",
    image: "/professional-cleaning-services-north-vancouver.jpg",
  },
];

async function seedStubs() {
  console.log("→ Tile stubs");
  for (const stub of STUBS) {
    await replaceDoc("cleaningType", stub.slug, {
      title: stub.name,
      name: stub.name,
      tileDescription: stub.tileDescription,
      tileImage: await uploadImage(stub.image, `${stub.name} in Greater Vancouver`),
      hasOwnPage: true,
      published: true,
      sections: [],
    });
  }
}

await seedGlobals();
await seedStubs();
console.log("\n✓ Globals and stubs done");
