import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/cms/requireAuth";
import { listDocs, createDoc } from "@/lib/cms/adminApi";
import { writeClient } from "@/lib/cms/sanity";

export const GET = requireAuth(async () => {
  const docs = await listDocs("neighborhood");
  return NextResponse.json({ docs });
});

/**
 * Neighborhoods need custom create logic: they belong to one area, picked up
 * front, same as area-services picking an area + cleaning type.
 */
export const POST = requireAuth(async (req: Request) => {
  const body = await req.json().catch(() => ({}));
  const areaId = body?.areaId;
  const name = body?.name;
  if (typeof areaId !== "string" || typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "An area and a name are required." }, { status: 400 });
  }

  const area = await writeClient().fetch<{ name: string } | null>(
    `*[_id == $id][0]{ name }`,
    { id: areaId }
  );
  if (!area) {
    return NextResponse.json({ error: "Area not found." }, { status: 404 });
  }

  const doc = await createDoc("neighborhood", {
    title: name.trim(),
    name: name.trim(),
    area: { _type: "reference", _ref: areaId },
    hasOwnPage: false,
  });
  return NextResponse.json({ doc }, { status: 201 });
});
