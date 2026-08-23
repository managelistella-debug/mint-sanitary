"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { api } from "@/app/admin/_lib/api";
import { useToast } from "@/app/admin/_components/Toast";
import { Button } from "@/app/admin/_components/fields";
import { CollectionTable, type CollectionRow } from "@/app/admin/_components/CollectionTable";
import { NewDocModal } from "@/app/admin/_components/NewDocModal";
import { LoadErrorBanner } from "@/app/admin/_components/LoadErrorBanner";

interface CleaningTypeRow {
  _id: string;
  name: string;
  title: string;
  slug: string;
  hasOwnPage: boolean;
  published: boolean;
}

export default function CleaningTypesListPage() {
  const router = useRouter();
  const toast = useToast();
  const [docs, setDocs] = useState<CleaningTypeRow[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    api<{ docs: CleaningTypeRow[] }>("/api/admin/cleaning-types")
      .then((r) => setDocs(r.docs))
      .catch((err) => setLoadError(err instanceof Error ? err.message : "Failed to load."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createDoc(name: string) {
    setCreating(true);
    try {
      const { doc } = await api<{ doc: { _id: string } }>("/api/admin/cleaning-types", {
        method: "POST",
        body: JSON.stringify({ title: name, name }),
      });
      router.push(`/admin/cleaning-types/${doc._id}`);
    } catch (err) {
      toast(err instanceof Error ? err.message : "Create failed.", "error");
      setCreating(false);
    }
  }

  const rows: CollectionRow[] = (docs ?? []).map((d) => ({
    _id: d._id,
    title: d.name || d.title,
    subtitle: d.hasOwnPage ? undefined : "Tile only — no page",
    slug: d.hasOwnPage ? `services/${d.slug}` : d.slug,
    published: d.published,
    editHref: `/admin/cleaning-types/${d._id}`,
  }));

  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#111]">
            Cleaning Types
          </h1>
          <p className="mt-1 text-[14px] text-[#6B7280]">
            Your services. Each can have its own page and always doubles as a tile.
          </p>
        </div>
        <Button onClick={() => setShowNew(true)}>
          <Plus size={15} /> New
        </Button>
      </header>

      {loadError ? (
        <LoadErrorBanner message={loadError} />
      ) : docs === null ? (
        <p className="text-[14px] text-[#9CA3AF]">Loading…</p>
      ) : (
        <CollectionTable
          rows={rows}
          deleteEndpoint={(id) => `/api/admin/cleaning-types/${id}`}
          onDeleted={(id) => setDocs((prev) => prev?.filter((d) => d._id !== id) ?? null)}
          emptyLabel="No cleaning types yet. Create your first one to get started."
        />
      )}

      {showNew && (
        <NewDocModal
          title="New cleaning type"
          label="Name"
          placeholder="e.g. House Cleaning"
          busy={creating}
          onCancel={() => setShowNew(false)}
          onCreate={createDoc}
        />
      )}
    </>
  );
}
