import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSessionToken, passwordMatches, sessionCookieOptions } from "@/lib/cms/session";

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
    return NextResponse.json(
      { error: "Admin login is not configured on the server." },
      { status: 500 }
    );
  }

  let password: unknown;
  try {
    ({ password } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof password !== "string" || !password) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  if (!passwordMatches(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const store = await cookies();
  store.set({ ...sessionCookieOptions, value: createSessionToken() });
  return NextResponse.json({ ok: true });
}
