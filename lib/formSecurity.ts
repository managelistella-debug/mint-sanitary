import { NextRequest } from "next/server";

export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

/** Simple in-memory sliding-window rate limiter. Create one map per route. */
export function createRateLimiter(windowMs: number, maxRequests: number) {
  const hits = new Map<string, { count: number; windowStart: number }>();
  return function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = hits.get(ip);
    if (!entry || now - entry.windowStart > windowMs) {
      hits.set(ip, { count: 1, windowStart: now });
      return false;
    }
    if (entry.count >= maxRequests) return true;
    entry.count++;
    return false;
  };
}

export async function verifyRecaptcha(token: string, minScore = 0.5): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
  });
  const data = await res.json();
  return data.success === true && data.score >= minScore;
}
