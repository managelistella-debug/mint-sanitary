import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "hello@listella.co";
const FROM_ADDRESS = "Mint Sanitary <noreply@mintsanitary.com>";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, city, message } = await req.json();

    if (!name || !email || !service || !city) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // 1. Confirmation email to the person who submitted
    const confirm = await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "We received your message — Mint Sanitary",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to Mint Sanitary. We've received your message and will be in touch within 2 hours.</p>
        <p><strong>Your submission:</strong></p>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>City:</strong> ${city}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
          ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
        </ul>
        <p>If you need immediate assistance, call us at <strong>604-123-4567</strong> (Mon–Sat, 7am–6pm).</p>
        <p>— The Mint Sanitary Team</p>
      `,
    });
    if (confirm.error) {
      console.error("Resend confirmation error:", confirm.error);
      return NextResponse.json({ error: "Failed to send confirmation email.", detail: confirm.error }, { status: 500 });
    }

    // 2. Internal notification to admin
    const notify = await resend.emails.send({
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
