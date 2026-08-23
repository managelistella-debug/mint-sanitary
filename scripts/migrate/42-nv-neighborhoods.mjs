import { docId, replaceDoc, refTo } from "./lib.mjs";

/**
 * Neighborhood docs for North Vancouver, migrated verbatim from the
 * `neighborhoods` array on the old /north-vancouver page. Bubble-only
 * (hasOwnPage: false) — no pages exist for these yet.
 */
const names = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "Norgate",
  "Pemberton Heights",
  "Capilano",
  "Dollarton",
  "Blueridge",
];

for (const name of names) {
  await replaceDoc("neighborhood", name.toLowerCase().replace(/\s+/g, "-"), {
    title: name,
    name,
    area: refTo("area", "north-vancouver"),
    hasOwnPage: false,
    published: true,
    sections: [],
  });
}

console.log(`✓ ${names.length} North Vancouver neighborhoods ready`);
console.log(names.map((n) => docId("neighborhood", n.toLowerCase().replace(/\s+/g, "-"))).join(", "));
