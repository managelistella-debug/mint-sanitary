import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/cms/session";

export async function GET() {
  return NextResponse.json({ authenticated: await isAuthenticated() });
}
