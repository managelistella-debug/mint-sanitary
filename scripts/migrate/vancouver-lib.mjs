import { client, key } from "./lib.mjs";

export * from "./lib.mjs";

/**
 * Vancouver areaService docs cannot use replaceDoc("areaService", slug, ...)
 * directly: docId() derives the Sanity _id from type+slug alone
 * ("areaService-house-cleaning"), and North Vancouver's docs already own
 * that exact id for every one of these 20 slugs. This mints a
 * city-namespaced _id ("areaService-vancouver-house-cleaning") while keeping
 * the doc's `slug` field as the plain service slug, since
 * getAreaServiceBySlugs() matches on `slug == $serviceSlug && area->slug ==
 * $areaSlug`, not on the document id.
 */
export async function replaceAreaServiceDoc(citySlug, serviceSlug, doc) {
  const id = `areaService-${citySlug}-${serviceSlug}`;
  const existed = await client.fetch(`defined(*[_id == $id][0]._id)`, { id });
  await client.createOrReplace({ _id: id, _type: "areaService", slug: serviceSlug, ...doc });
  console.log(`   ${existed ? "updated" : "created"} areaService/${citySlug}-${serviceSlug} (slug: ${serviceSlug})`);
  return id;
}

/**
 * Paragraph with zero or more inline links.
 * parts: array of either a plain string, or [text, href] for a link run.
 */
export function multiLinkPara(parts) {
  const markDefs = [];
  const children = [];
  for (const part of parts) {
    if (Array.isArray(part)) {
      const [text, href] = part;
      const linkKey = key("lnk");
      markDefs.push({ _key: linkKey, _type: "link", href });
      children.push({ _type: "span", _key: key("s"), text, marks: [linkKey] });
    } else {
      children.push({ _type: "span", _key: key("s"), text: part, marks: [] });
    }
  }
  return { _type: "block", _key: key("b"), style: "normal", markDefs, children };
}
