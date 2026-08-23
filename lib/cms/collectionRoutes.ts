import { NextResponse } from "next/server";
import { requireAuth } from "./requireAuth";
import { listDocs, getDoc, createDoc, updateDoc, deleteDoc } from "./adminApi";
import type { CollectionName } from "./types";

/**
 * Factory for the two route files every collection needs:
 *   route.ts       GET (list) / POST (create)
 *   [id]/route.ts  GET (one) / PUT (update) / DELETE
 *
 * Each app/api/admin/<collection>/route.ts is a thin file that calls this
 * once with its collection name — keeps the CRUD wiring in one place instead
 * of copy-pasted three times.
 */
export function makeCollectionRoutes(type: CollectionName) {
  const GET = requireAuth(async () => {
    const docs = await listDocs(type);
    return NextResponse.json({ docs });
  });

  const POST = requireAuth(async (req: Request) => {
    const body = await req.json().catch(() => ({}));
    if (!body || typeof body.title !== "string" || !body.title.trim()) {
      return NextResponse.json({ error: "A title is required." }, { status: 400 });
    }
    const doc = await createDoc(type, body);
    return NextResponse.json({ doc }, { status: 201 });
  });

  return { GET, POST };
}

export function makeCollectionItemRoutes(type: CollectionName) {
  const GET = requireAuth(
    async (_req: Request, { params }: { params: Promise<{ id: string }> }) => {
      const { id } = await params;
      const doc = await getDoc(id);
      if (!doc) return NextResponse.json({ error: "Not found." }, { status: 404 });
      return NextResponse.json({ doc });
    }
  );

  const PUT = requireAuth(
    async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
      const { id } = await params;
      const body = await req.json().catch(() => ({}));
      if (body && typeof body.title === "string" && !body.title.trim()) {
        return NextResponse.json({ error: "Title cannot be empty." }, { status: 400 });
      }
      const doc = await updateDoc(type, id, body ?? {});
      return NextResponse.json({ doc });
    }
  );

  const DELETE = requireAuth(
    async (_req: Request, { params }: { params: Promise<{ id: string }> }) => {
      const { id } = await params;
      await deleteDoc(id);
      return NextResponse.json({ ok: true });
    }
  );

  return { GET, PUT, DELETE };
}
