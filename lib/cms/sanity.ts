import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { CmsImage } from "./types";

/**
 * Two clients, deliberately separated:
 *
 *   readClient  — no token, CDN-cached, published docs only. Safe anywhere,
 *                 used by the server-rendered public pages.
 *   writeClient — carries SANITY_WRITE_TOKEN. Server-only, and only ever
 *                 imported by authenticated /api/admin/* route handlers.
 *
 * Never import writeClient from a component.
 */

export const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

/** False until the Sanity project is provisioned — lets pages degrade instead of crashing. */
export const isCmsConfigured = Boolean(SANITY_PROJECT_ID);

let _read: SanityClient | null = null;
export function readClient(): SanityClient {
  if (!isCmsConfigured) {
    throw new Error(
      "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local."
    );
  }
  if (!_read) {
    _read = createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: true,
      perspective: "published",
    });
  }
  return _read;
}

let _write: SanityClient | null = null;
export function writeClient(): SanityClient {
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) throw new Error("SANITY_WRITE_TOKEN is not configured.");
  if (!isCmsConfigured) throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not configured.");
  if (!_write) {
    _write = createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: false,
      token,
      perspective: "raw",
    });
  }
  return _write;
}

/** Image URL builder. Returns null when unconfigured so callers can skip rendering. */
export function imageUrl(source: CmsImage | undefined | null): string | null {
  if (!source?.asset?._ref || !isCmsConfigured) return null;
  try {
    return imageUrlBuilder({ projectId: SANITY_PROJECT_ID, dataset: SANITY_DATASET })
      .image(source)
      .auto("format")
      .fit("max")
      .url();
  } catch {
    return null;
  }
}
