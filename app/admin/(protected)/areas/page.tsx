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

interface AreaRow {
  _id: string;
  name: string;
  title: string;
  slug: string;
  published: boolean;
}

export default function AreasListPage() {
  const router = useRouter();
  const toast = useToast();
  const [docs, setDocs] = useState<AreaRow[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    api<{ docs: AreaRow[] }>("/api/admin/areas")
      .then((r) => setDocs(r.docs))
      .catch((err) => setLoadError(err instanceof Error ? err.message : "Failed to load."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createDoc(name: string) {
    setCreating(true);
    try {
      const { doc } = await api<{ doc: { _id: string } }>("/api/admin/areas", {
        method: "POST",
        body: JSON.stringify({ title: name, name }),
      });
      router.push(`/admin/areas/${doc._id}`);
    } catch (err) {
      toast(err instanceof Error ? err.message : "Create failed.", "error");
      setCreating(false);
    }
  }

  const rows: CollectionRow[] = (docs ?? []).map((d) => ({
    _id: d._id,
    title: d.name || d.title,
    slug: d.slug,
    published: d.published,
    editHref: `/admin/areas/${d._id}`,
  }));

  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#111]">Areas</h1>
          <p className="mt-1 text-[14px] text-[#6B7280]">
            The cities you serve. Each creates a page at /[city].
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
          deleteEndpoint={(id) => `/api/admin/areas/${id}`}
          onDeleted={(id) => setDocs((prev) => prev?.filter((d) => d._id !== id) ?? null)}
          emptyLabel="No areas yet. Add your first city to get started."
        />
      )}

      {showNew && (
        <NewDocModal
          title="New area"
          label="City name"
          placeholder="e.g. Burnaby"
          busy={creating}
          onCancel={() => setShowNew(false)}
          onCreate={createDoc}
        />
      )}
    </>
  );
}
