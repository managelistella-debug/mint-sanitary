import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const DEFAULT_NOTIFICATION_EMAILS = [
  "hello@mintsanitary.com",
  "service@mintsanitary.com",
];
const DEFAULT_BCC_EMAILS = ["hello@listella.co"];

const NOTIFICATION_EMAILS = process.env.ADMIN_EMAIL
  ? process.env.ADMIN_EMAIL.split(",").map((email) => email.trim()).filter(Boolean)
  : DEFAULT_NOTIFICATION_EMAILS;
const BCC_EMAILS = process.env.BCC_EMAIL
  ? process.env.BCC_EMAIL.split(",").map((email) => email.trim()).filter(Boolean)
  : DEFAULT_BCC_EMAILS;
const FROM_ADDRESS = "Mint Sanitary <noreply@mintsanitary.com>";

// In-memory rate limiter: ip -> { count, windowStart }
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // max submissions per IP per hour

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
  });
  const data = await res.json();
  // Require score >= 0.5 (0 = bot, 1 = human)
  return data.success === true && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, city, message, _honey, _loadedAt, recaptchaToken } = await req.json();

    // Honeypot: bots fill hidden fields, humans leave them blank
    if (_honey) {
      return NextResponse.json({ success: true }); // silently discard
    }

    // Timing check: bots submit in under 3 seconds; require at least 3s
    const elapsed = _loadedAt ? Date.now() - Number(_loadedAt) : 0;
    if (_loadedAt && elapsed < 3000) {
      return NextResponse.json({ success: true }); // silently discard
    }

    // Rate limiting per IP
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    if (!name || !email || !service || !city) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // reCAPTCHA v3 verification
    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
    }

    // Internal notification to admin
    const notify = await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFICATION_EMAILS,
      bcc: BCC_EMAILS,
      subject: `New inquiry from ${name} — ${service}`,
      html: `
        <p><strong>New contact form submission received:</strong></p>
        <table>
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone || "Not provided"}</td></tr>
          <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
          <tr><td><strong>City:</strong></td><td>${city}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${message || "None"}</td></tr>
        </table>
        <p>Reply directly to <a href="mailto:${email}">${email}</a></p>
      `,
    });
    if (notify.error) {
      console.error("Resend notify error:", notify.error);
      return NextResponse.json({ error: "Failed to send admin notification.", detail: notify.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
