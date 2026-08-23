import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/cms/requireAuth";
import { getSettingsDoc, updateSettingsDoc } from "@/lib/cms/adminApi";

export const GET = requireAuth(async () => {
  const doc = await getSettingsDoc();
  return NextResponse.json({ doc });
});

export const PUT = requireAuth(async (req: Request) => {
  const body = await req.json().catch(() => ({}));
  const doc = await updateSettingsDoc(body ?? {});
  return NextResponse.json({ doc });
});
