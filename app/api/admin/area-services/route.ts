import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/cms/requireAuth";
import { listDocs, createDoc } from "@/lib/cms/adminApi";
import { writeClient } from "@/lib/cms/sanity";

export const GET = requireAuth(async () => {
  const docs = await listDocs("areaService");
  return NextResponse.json({ docs });
});

/**
 * Area services need custom create logic: the slug and default title are
 * derived from the area + cleaningType references rather than typed by hand,
 * since the URL (/[area]/[service]) is built from those two slugs.
 */
export const POST = requireAuth(async (req: Request) => {
  const body = await req.json().catch(() => ({}));
  const areaId = body?.areaId;
  const cleaningTypeId = body?.cleaningTypeId;
  if (typeof areaId !== "string" || typeof cleaningTypeId !== "string") {
    return NextResponse.json(
      { error: "An area and a cleaning type are required." },
      { status: 400 }
    );
  }

  const [area, cleaningType] = await Promise.all([
    writeClient().fetch<{ name: string; slug: string } | null>(
      `*[_id == $id][0]{ name, slug }`,
      { id: areaId }
    ),
    writeClient().fetch<{ name: string; slug: string } | null>(
      `*[_id == $id][0]{ name, slug }`,
      { id: cleaningTypeId }
    ),
  ]);
  if (!area || !cleaningType) {
    return NextResponse.json({ error: "Area or cleaning type not found." }, { status: 404 });
  }

  const existing = await writeClient().fetch<string | null>(
    `*[_type == "areaService" && area._ref == $areaId && cleaningType._ref == $cleaningTypeId][0]._id`,
    { areaId, cleaningTypeId }
  );
  if (existing) {
    return NextResponse.json(
      { error: `${area.name} ${cleaningType.name} already exists.` },
      { status: 409 }
    );
  }

  const doc = await createDoc("areaService", {
    title: `${area.name} ${cleaningType.name}`,
    slug: cleaningType.slug,
    area: { _type: "reference", _ref: areaId },
    cleaningType: { _type: "reference", _ref: cleaningTypeId },
  });
  return NextResponse.json({ doc }, { status: 201 });
});
