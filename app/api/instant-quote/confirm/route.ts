import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { calculateQuote, HOME_TYPE_LABELS, type CleanType, type HomeType, type SelectedAddon } from "@/lib/quotePricing";
import { createRateLimiter, getClientIp } from "@/lib/formSecurity";

const resend = new Resend(process.env.RESEND_API_KEY);

const DEFAULT_NOTIFICATION_EMAILS = ["hello@mintsanitary.com", "service@mintsanitary.com"];
const DEFAULT_BCC_EMAILS = ["hello@listella.co"];

const NOTIFICATION_EMAILS = process.env.ADMIN_EMAIL
  ? process.env.ADMIN_EMAIL.split(",").map((email) => email.trim()).filter(Boolean)
  : DEFAULT_NOTIFICATION_EMAILS;
const BCC_EMAILS = process.env.BCC_EMAIL
  ? process.env.BCC_EMAIL.split(",").map((email) => email.trim()).filter(Boolean)
  : DEFAULT_BCC_EMAILS;
const FROM_ADDRESS = "Mint Sanitary <noreply@mintsanitary.com>";

const isRateLimited = createRateLimiter(60 * 60 * 1000, 5);

interface ConfirmBody {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  homeType: HomeType;
  cleanType: CleanType;
  sqft: number;
  addons: SelectedAddon[];
  requestedDate: string;
  requestedTimeSlot: string;
  notes?: string;
  _honey?: string;
  _loadedAt?: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ConfirmBody;
    const {
      name, email, phone, address, city, homeType, cleanType, sqft, addons,
      requestedDate, requestedTimeSlot, notes, _honey, _loadedAt,
    } = body;

    if (_honey) {
      return NextResponse.json({ success: true });
    }

    const elapsed = _loadedAt ? Date.now() - Number(_loadedAt) : 0;
    if (_loadedAt && elapsed < 1500) {
      return NextResponse.json({ success: true });
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    if (!name || !email || !phone || !requestedDate || !requestedTimeSlot) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const quote = calculateQuote(sqft, cleanType, addons ?? []);

    const addonRows = quote.addonLines
      .map(
        (line) =>
          `<tr><td>${line.label}${line.qty > 1 ? ` (x${line.qty})` : ""}</td><td>$${line.lineTotal}</td></tr>`
      )
      .join("");
    const inquireRows = quote.inquireAddons
      .map((label) => `<tr><td>${label}</td><td>Please inquire</td></tr>`)
      .join("");

    const totalRow =
      quote.total != null
        ? `<tr><td><strong>Total</strong></td><td><strong>$${quote.total}</strong></td></tr>`
        : `<tr><td colspan="2"><strong>Custom quote — size above standard range.</strong></td></tr>`;

    const notify = await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFICATION_EMAILS,
      bcc: BCC_EMAILS,
      subject: `[Quote Approved — Date Confirmation Needed] ${name}`,
      html: `
        <p><strong>Customer approved their instant quote and requested a booking date:</strong></p>
        <table>
          <tr><td><strong>Requested Date:</strong></td><td>${requestedDate}</td></tr>
          <tr><td><strong>Requested Time:</strong></td><td>${requestedTimeSlot}</td></tr>
        </table>
        <p><strong>Customer Details:</strong></p>
        <table>
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Address:</strong></td><td>${address}, ${city}</td></tr>
          <tr><td><strong>Home Type:</strong></td><td>${HOME_TYPE_LABELS[homeType]}</td></tr>
          <tr><td><strong>Clean Type:</strong></td><td>${cleanType === "standard" ? "Standard Clean" : "Deep Clean"}</td></tr>
          <tr><td><strong>Square Footage:</strong></td><td>${sqft} sq ft (${quote.tier.label} rate)</td></tr>
        </table>
        <p><strong>Add-ons:</strong></p>
        <table>
          ${addonRows || inquireRows ? addonRows + inquireRows : "<tr><td>None selected</td><td></td></tr>"}
          ${totalRow}
        </table>
        ${notes ? `<p><strong>Additional notes from customer:</strong><br/>${notes}</p>` : ""}
        <p>Reply directly to <a href="mailto:${email}">${email}</a></p>
      `,
    });

    if (notify.error) {
      console.error("Resend instant-quote confirm error:", notify.error);
      return NextResponse.json({ error: "Failed to send admin notification.", detail: notify.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Instant quote confirm error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
