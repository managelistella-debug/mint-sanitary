import crypto from "node:crypto";
import { cookies } from "next/headers";

/**
 * Admin session — an HMAC-signed, httpOnly cookie.
 *
 * The password is only ever compared server-side against ADMIN_PASSWORD; no
 * secret is shipped to the browser. The cookie carries nothing but an expiry
 * and its own signature, so a tampered payload fails verification.
 */

const COOKIE_NAME = "mint_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 12; // 12 hours

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not configured.");
  return secret;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

export function createSessionToken(): string {
  const payload = Buffer.from(
    JSON.stringify({ admin: true, exp: Date.now() + MAX_AGE_SECONDS * 1000 })
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token || !token.includes(".")) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;

  let expected: string;
  try {
    expected = sign(payload);
  } catch {
    return false;
  }

  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Boolean(data.admin) && typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

/** Constant-time password check that doesn't leak length via early return. */
export function passwordMatches(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD is not configured.");
  const a = Buffer.from(String(input));
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    crypto.timingSafeEqual(a, a);
    return false;
  }
  return crypto.timingSafeEqual(a, b);
}

export const sessionCookieOptions = {
  name: COOKIE_NAME,
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: MAX_AGE_SECONDS,
  secure: process.env.NODE_ENV === "production",
};

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}

export { COOKIE_NAME };
