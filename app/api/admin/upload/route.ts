import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/cms/requireAuth";
import { writeClient } from "@/lib/cms/sanity";

const MAX_BYTES = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

export const POST = requireAuth(async (req: Request) => {
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Only JPEG, PNG, WebP, or AVIF images are allowed." },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image must be under 8MB." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const asset = await writeClient().assets.upload("image", buffer, {
    filename: file.name,
    contentType: file.type,
  });

  return NextResponse.json({
    image: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
    url: asset.url,
  });
});
