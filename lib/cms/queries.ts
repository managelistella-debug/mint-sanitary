import { readClient, isCmsConfigured } from "./sanity";
import type { Area, CleaningType, AreaService, SiteGlobals } from "./types";

/**
 * Public reads only. There is no Sanity draft/publish workflow here — every
 * document is a single record with a plain `published: boolean` field — so
 * every query below filters on it explicitly rather than relying on the
 * client's perspective setting.
 */

const PUBLIC_PAGE_PROJECTION = `{
  ...,
  sections[]{
    ...,
    _type == "serviceTiles" => {
      ...,
      tiles[]->{ _id, name, tileDescription, tileImage, hasOwnPage, slug, published }
    },
    _type == "areas" => {
      ...,
      areas[]->{ _id, name, slug, published }
    },
    _type == "neighborhoods" => {
      ...,
      neighborhoods[]->{ _id, name, slug, published }
    }
  }
}`;

export async function getCleaningTypeBySlug(slug: string): Promise<CleaningType | null> {
  if (!isCmsConfigured) return null;
  return readClient().fetch(
    `*[_type == "cleaningType" && slug == $slug && published == true][0] ${PUBLIC_PAGE_PROJECTION}`,
    { slug }
  );
}

export async function getAreaBySlug(slug: string): Promise<Area | null> {
  if (!isCmsConfigured) return null;
  return readClient().fetch(
    `*[_type == "area" && slug == $slug && published == true][0] ${PUBLIC_PAGE_PROJECTION}`,
    { slug }
  );
}

export async function getAreaServiceBySlugs(
  areaSlug: string,
  serviceSlug: string
): Promise<
  | (Omit<AreaService, "area" | "cleaningType"> & { area: Area; cleaningType: CleaningType })
  | null
> {
  if (!isCmsConfigured) return null;
  return readClient().fetch(
    `*[
      _type == "areaService" && published == true &&
      slug == $serviceSlug && area->slug == $areaSlug
    ][0] {
      ...,
      area->{ _id, name, slug, published },
      cleaningType->{ _id, name, slug, published },
      sections[]{
        ...,
        _type == "serviceTiles" => {
          ...,
          tiles[]->{ _id, name, tileDescription, tileImage, hasOwnPage, slug, published }
        },
        _type == "areas" => {
          ...,
          areas[]->{ _id, name, slug, published }
        }
      }
    }`,
    { areaSlug, serviceSlug }
  );
}

export async function listPublishedCleaningTypeSlugs(): Promise<string[]> {
  if (!isCmsConfigured) return [];
  return readClient().fetch(
    `*[_type == "cleaningType" && published == true && hasOwnPage == true].slug`
  );
}

export async function listPublishedAreaSlugs(): Promise<string[]> {
  if (!isCmsConfigured) return [];
  return readClient().fetch(`*[_type == "area" && published == true].slug`);
}

export async function listPublishedAreaServiceParams(): Promise<
  Array<{ area: string; service: string }>
> {
  if (!isCmsConfigured) return [];
  const rows = await readClient().fetch<Array<{ area: string; service: string }>>(
    `*[_type == "areaService" && published == true]{
      "area": area->slug,
      "service": slug
    }`
  );
  return rows.filter((r) => r.area && r.service);
}

let _globalsCache: SiteGlobals | null = null;
export async function getSiteGlobals(): Promise<SiteGlobals | null> {
  if (!isCmsConfigured) return null;
  if (_globalsCache) return _globalsCache;
  const doc = await readClient().fetch<SiteGlobals | null>(`*[_id == "siteGlobals"][0]`);
  _globalsCache = doc;
  return doc;
}

/**
 * For the Areas section: which of the given area IDs have a published,
 * live page for `cleaningTypeSlug`? Those bubbles link out; the rest render
 * disabled. One query regardless of how many areas are on the section.
 */
export async function resolveLiveAreaLinks(
  areaIds: string[],
  cleaningTypeSlug: string
): Promise<Set<string>> {
  if (!isCmsConfigured || areaIds.length === 0) return new Set();
  const rows = await readClient().fetch<string[]>(
    `*[
      _type == "areaService" && published == true &&
      cleaningType->slug == $cleaningTypeSlug && area._ref in $areaIds
    ].area._ref`,
    { cleaningTypeSlug, areaIds }
  );
  return new Set(rows);
}
