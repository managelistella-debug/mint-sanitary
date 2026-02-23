import { NextRequest, NextResponse } from "next/server";

// ── Resend setup ──────────────────────────────────────────────────────────────
// When ready:
//   1. npm install resend
//   2. Add RESEND_API_KEY and ADMIN_EMAIL to .env.local
//   3. Uncomment the Resend import and the two email sends below
//
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "info@smartcleaning.com";
const FROM_ADDRESS = "Smart Cleaning <noreply@smartcleaning.com>";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, city, message } = await req.json();

    if (!name || !email || !service || !city) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── TODO: Uncomment once RESEND_API_KEY is configured ────────────────────
    /*

    // 1. Confirmation email to the person who submitted
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "We received your message — Smart Cleaning",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to Smart Cleaning. We've received your message and will be in touch within 2 hours.</p>
        <p><strong>Your submission:</strong></p>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>City:</strong> ${city}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
          ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
        </ul>
        <p>If you need immediate assistance, call us at <strong>604-123-4567</strong> (Mon–Sat, 7am–6pm).</p>
        <p>— The Smart Cleaning Team</p>
      `,
    });

    // 2. Internal notification to admin
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: ADMIN_EMAIL,
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

    */

    // Placeholder success response (remove this line once Resend is wired up)
    void ADMIN_EMAIL; // suppress unused variable warning until Resend is active
    void FROM_ADDRESS;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
