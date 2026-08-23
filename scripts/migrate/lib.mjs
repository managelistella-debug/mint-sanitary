import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

function loadEnv() {
  const env = {};
  const file = path.join(ROOT, ".env.local");
  if (!fs.existsSync(file)) throw new Error(".env.local not found");
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_0-9]+)=(.*)$/);
    if (m) env[m[1]] = m[2];
  }
  return env;
}

const env = loadEnv();

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

let keyCounter = 0;
/** Deterministic-ish unique key for array members. */
export function key(prefix = "k") {
  keyCounter += 1;
  return `${prefix}${keyCounter.toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

const uploadCache = new Map();

/**
 * Upload an image from /public into Sanity, reusing an existing asset when
 * one with the same filename is already there. Makes the whole migration
 * safe to re-run without piling up duplicate assets.
 */
export async function uploadImage(publicPath, alt) {
  const filename = publicPath.replace(/^\//, "");
  if (uploadCache.has(filename)) {
    return { _type: "image", asset: { _type: "reference", _ref: uploadCache.get(filename) }, alt };
  }

  const existing = await client.fetch(
    `*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id`,
    { filename }
  );
  if (existing) {
    uploadCache.set(filename, existing);
    return { _type: "image", asset: { _type: "reference", _ref: existing }, alt };
  }

  const abs = path.join(ROOT, "public", filename);
  if (!fs.existsSync(abs)) throw new Error(`Image not found: ${abs}`);
  const asset = await client.assets.upload("image", fs.createReadStream(abs), { filename });
  uploadCache.set(filename, asset._id);
  console.log(`   uploaded ${filename}`);
  return { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt };
}

/**
 * Deterministic document id derived from type + slug.
 *
 * This matters more than it looks: strata and commercial reference each other
 * as tiles, so a delete-and-recreate (which mints a fresh random id) would
 * leave dangling references the moment either page is re-migrated. A stable
 * id means re-running any script in any order always produces valid refs, and
 * lets one script reference a document another script writes later.
 */
export function docId(type, slug) {
  return `${type}-${slug}`;
}

/** Create or overwrite a doc at its deterministic id. Safe to re-run. */
export async function replaceDoc(type, slug, doc) {
  const id = docId(type, slug);
  const existed = await client.fetch(`defined(*[_id == $id][0]._id)`, { id });
  await client.createOrReplace({ _id: id, _type: type, slug, ...doc });
  console.log(`   ${existed ? "updated" : "created"} ${type}/${slug}`);
  return id;
}

/**
 * Reference to a doc by type+slug.
 *
 * Deliberately WEAK. Two reasons: strata and commercial list each other as
 * tiles, so a strong reference would be impossible to create in either order;
 * and a weak reference lets the client delete a service later without Sanity
 * hard-blocking the delete over pages that merely link to it. A dangling weak
 * ref dereferences to null, and both the tiles and areas renderers already
 * drop null entries, so the tile simply stops appearing.
 */
export function refTo(type, slug) {
  return { _type: "reference", _ref: docId(type, slug), _weak: true };
}

export function ref(id) {
  return { _type: "reference", _ref: id };
}

/* ─── Portable Text helpers ───────────────────────────────────── */

export function heading(text) {
  return {
    _type: "block",
    _key: key("b"),
    style: "h3",
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  };
}

export function para(text) {
  return {
    _type: "block",
    _key: key("b"),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  };
}

/**
 * Paragraph containing one inline link.
 * `parts` = [textBefore, linkText, href, textAfter]
 */
export function paraWithLink(before, linkText, href, after) {
  const linkKey = key("lnk");
  return {
    _type: "block",
    _key: key("b"),
    style: "normal",
    markDefs: [{ _key: linkKey, _type: "link", href }],
    children: [
      { _type: "span", _key: key("s"), text: before, marks: [] },
      { _type: "span", _key: key("s"), text: linkText, marks: [linkKey] },
      { _type: "span", _key: key("s"), text: after, marks: [] },
    ],
  };
}

export async function imageBlock(publicPath, alt) {
  const img = await uploadImage(publicPath, alt);
  return { ...img, _key: key("img") };
}

/** One entry for a `gallery` section's `images` array. */
export async function galleryImage(publicPath, alt) {
  const image = await uploadImage(publicPath, alt);
  return { _key: key("gal"), image };
}

/**
 * One entry for a `serviceTiles` section's `customTiles` array — a tile for a
 * sub-service that has no cleaningType doc of its own (e.g. one that lives as
 * an #anchor further down the same page). Omit `href` for a tile with no
 * "Learn More" link.
 */
export async function customTile({ title, description, image, href }) {
  return {
    _key: key("tile"),
    title,
    ...(description ? { description } : {}),
    ...(href ? { href } : {}),
    ...(image ? { image: await uploadImage(image, title) } : {}),
  };
}
