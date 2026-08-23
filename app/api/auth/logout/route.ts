import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sessionCookieOptions } from "@/lib/cms/session";

export async function POST() {
  const store = await cookies();
  store.set({ ...sessionCookieOptions, value: "", maxAge: 0 });
  return NextResponse.json({ ok: true });
}
