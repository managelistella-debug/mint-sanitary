import { writeClient } from "./sanity";
import type { CollectionName } from "./types";

/**
 * Generic CRUD used by every /api/admin/* collection route. Slugs are plain
 * strings (not Sanity's native slug type) since there's no Studio UI to wire
 * up — the custom admin owns slug generation and uniqueness itself.
 */

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

/** Appends -2, -3, … until the slug is unique within its collection. */
export async function ensureUniqueSlug(
  type: CollectionName,
  base: string,
  excludeId?: string
): Promise<string> {
  const client = writeClient();
  const root = slugify(base) || "page";
  let candidate = root;
  let n = 2;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const clash = await client.fetch<string | null>(
      `*[_type == $type && slug == $slug && _id != $excludeId][0]._id`,
      { type, slug: candidate, excludeId: excludeId ?? "" }
    );
    if (!clash) return candidate;
    candidate = `${root}-${n++}`;
  }
}

const LIST_PROJECTIONS: Record<CollectionName, string> = {
  area: `{ _id, _type, title, name, slug, published, _updatedAt }`,
  cleaningType: `{ _id, _type, title, name, slug, hasOwnPage, published, _updatedAt }`,
  areaService: `{
    _id, _type, title, slug, published, _updatedAt,
    area->{ _id, name, slug },
    cleaningType->{ _id, name, slug }
  }`,
  neighborhood: `{
    _id, _type, title, name, slug, hasOwnPage, published, _updatedAt,
    area->{ _id, name, slug }
  }`,
};

export async function listDocs(type: CollectionName) {
  return writeClient().fetch(
    `*[_type == $type] | order(coalesce(name, title) asc) ${LIST_PROJECTIONS[type]}`,
    { type }
  );
}

/**
 * Images are deliberately NOT dereferenced here. `asset->{...}` would replace
 * the `{_type:"reference", _ref:"image-…"}` object with the resolved asset
 * document, dropping `_ref` — and `imageUrl()` builds its URL from `_ref`, so
 * the admin's ImagePicker would render empty for an image that is actually
 * set. The raw reference is all the client needs.
 */
const DOC_PROJECTION = `{
  ...,
  area->{ _id, name, slug },
  cleaningType->{ _id, name, slug },
  sections[]{
    ...,
    _type == "serviceTiles" => { ..., tiles[]-> {
      _id, name, tileDescription, hasOwnPage, slug, tileImage
    } },
    _type == "areas" => { ..., areas[]-> { _id, name, slug } },
    _type == "neighborhoods" => { ..., neighborhoods[]-> { _id, name, slug } }
  }
}`;

export async function getDoc(id: string) {
  return writeClient().fetch(`*[_id == $id][0] ${DOC_PROJECTION}`, { id });
}

export async function createDoc(
  type: CollectionName,
  data: Record<string, unknown>
) {
  const title = typeof data.title === "string" ? data.title : "Untitled";
  const requestedSlug =
    typeof data.slug === "string" && data.slug ? data.slug : title;
  const slug = await ensureUniqueSlug(type, requestedSlug);

  return writeClient().create({
    _type: type,
    ...data,
    title,
    slug,
    sections: Array.isArray(data.sections) ? data.sections : [],
    published: Boolean(data.published),
  });
}

/**
 * Fields the client-side editor round-trips (it fetches a dereferenced doc
 * and PUTs most of it back) but must never actually write, either because
 * they're system-managed or because the GET response's shape for them
 * (dereferenced objects) isn't the shape they're stored in. `area` and
 * `cleaningType` on an areaService are set once at creation, by design —
 * changing which area/type a page belongs to would change its URL out from
 * under it, so this UI treats them as read-only.
 */
const NON_WRITABLE_KEYS = new Set([
  "_id",
  "_type",
  "_rev",
  "_createdAt",
  "_updatedAt",
  "area",
  "cleaningType",
]);

export async function updateDoc(
  type: CollectionName,
  id: string,
  patch: Record<string, unknown>
) {
  const next: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(patch)) {
    if (!NON_WRITABLE_KEYS.has(key)) next[key] = value;
  }
  if (typeof next.slug === "string") {
    next.slug = await ensureUniqueSlug(type, next.slug, id);
  }
  return writeClient().patch(id).set(next).commit();
}

export async function deleteDoc(id: string) {
  return writeClient().delete(id);
}

/* ─── Site settings singleton ────────────────────────────────── */

const SETTINGS_ID = "siteGlobals";

export async function getSettingsDoc() {
  // Same reason as DOC_PROJECTION: leave the image reference intact so the
  // admin's ImagePicker can build a preview URL from asset._ref.
  const existing = await writeClient().fetch(`*[_id == $id][0]`, { id: SETTINGS_ID });
  if (existing) return existing;
  // Seed an empty singleton on first access so the editor always has something to load.
  return writeClient().createIfNotExists({
    _id: SETTINGS_ID,
    _type: "siteGlobals",
    everyCleanHeading: "Every Mint Cleaning Includes",
    everyCleanItems: [],
    clientsHeading: "Trusted by Local Organizations",
    clientLogos: [],
    reviewsHeading: "What Our Clients Say",
    reviewsRating: "4.9 out of 5",
    reviewsCount: "based on 120+ reviews",
    reviews: [],
    phone: "",
    email: "",
  });
}

export async function updateSettingsDoc(patch: Record<string, unknown>) {
  await getSettingsDoc(); // ensures the doc exists before patching
  return writeClient().patch(SETTINGS_ID).set(patch).commit();
}
