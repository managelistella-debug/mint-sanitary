"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { api } from "@/app/admin/_lib/api";
import { useToast } from "@/app/admin/_components/Toast";
import { Button, Field } from "@/app/admin/_components/fields";
import { CollectionTable, type CollectionRow } from "@/app/admin/_components/CollectionTable";
import { LoadErrorBanner } from "@/app/admin/_components/LoadErrorBanner";

interface AreaServiceRow {
  _id: string;
  title: string;
  slug: string;
  published: boolean;
  area: { _id: string; name: string; slug: string };
  cleaningType: { _id: string; name: string; slug: string };
}

interface RefOption {
  _id: string;
  name: string;
}

export default function AreaServicesListPage() {
  const router = useRouter();
  const toast = useToast();
  const [docs, setDocs] = useState<AreaServiceRow[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [areas, setAreas] = useState<RefOption[]>([]);
  const [types, setTypes] = useState<RefOption[]>([]);
  const [showNew, setShowNew] = useState(false);
  const [creating, setCreating] = useState(false);
  const [areaId, setAreaId] = useState("");
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    Promise.all([
      api<{ docs: AreaServiceRow[] }>("/api/admin/area-services"),
      api<{ docs: RefOption[] }>("/api/admin/areas"),
      api<{ docs: RefOption[] }>("/api/admin/cleaning-types"),
    ])
      .then(([svc, a, t]) => {
        setDocs(svc.docs);
        setAreas(a.docs);
        setTypes(t.docs);
      })
      .catch((err) => setLoadError(err instanceof Error ? err.message : "Failed to load."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createDoc() {
    if (!areaId || !typeId) return;
    setCreating(true);
    try {
      const { doc } = await api<{ doc: { _id: string } }>("/api/admin/area-services", {
        method: "POST",
        body: JSON.stringify({ areaId, cleaningTypeId: typeId }),
      });
      router.push(`/admin/area-services/${doc._id}`);
    } catch (err) {
      toast(err instanceof Error ? err.message : "Create failed.", "error");
      setCreating(false);
    }
  }

  const rows: CollectionRow[] = (docs ?? []).map((d) => ({
    _id: d._id,
    title: `${d.area?.name ?? "?"} · ${d.cleaningType?.name ?? "?"}`,
    slug: `${d.area?.slug ?? "?"}/${d.slug}`,
    published: d.published,
    editHref: `/admin/area-services/${d._id}`,
  }));

  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#111]">
            Area Services
          </h1>
          <p className="mt-1 text-[14px] text-[#6B7280]">
            A service in a city — /[area]/[service]. Pick an area and a cleaning type.
          </p>
        </div>
        <Button onClick={() => setShowNew(true)} disabled={areas.length === 0 || types.length === 0}>
          <Plus size={15} /> New
        </Button>
      </header>

      {(areas.length === 0 || types.length === 0) && docs !== null && (
        <p className="mb-4 rounded-lg bg-[#FFFBEB] px-3.5 py-2.5 text-[13px] text-[#92400E]">
          Add at least one Area and one Cleaning Type before creating an Area Service.
        </p>
      )}

      {loadError ? (
        <LoadErrorBanner message={loadError} />
      ) : docs === null ? (
        <p className="text-[14px] text-[#9CA3AF]">Loading…</p>
      ) : (
        <CollectionTable
          rows={rows}
          deleteEndpoint={(id) => `/api/admin/area-services/${id}`}
          onDeleted={(id) => setDocs((prev) => prev?.filter((d) => d._id !== id) ?? null)}
          emptyLabel="No area services yet."
        />
      )}

      {showNew && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 p-5"
          onClick={(e) => e.target === e.currentTarget && setShowNew(false)}
        >
          <form
            className="w-full max-w-[380px] rounded-2xl bg-white p-6 shadow-xl"
            onSubmit={(e) => {
              e.preventDefault();
              createDoc();
            }}
          >
            <h3 className="text-[16px] font-semibold text-[#111]">New area service</h3>
            <div className="mt-4">
              <Field label="Area">
                <select
                  value={areaId}
                  onChange={(e) => setAreaId(e.target.value)}
                  className="w-full rounded-lg border border-[#D4D4D4] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111]"
                >
                  <option value="">Select an area…</option>
                  {areas.map((a) => (
                    <option key={a._id} value={a._id}>
                      {a.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Cleaning type">
                <select
                  value={typeId}
                  onChange={(e) => setTypeId(e.target.value)}
                  className="w-full rounded-lg border border-[#D4D4D4] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111]"
                >
                  <option value="">Select a cleaning type…</option>
                  {types.map((t) => (
                    <option key={t._id} value={t._id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="flex justify-end gap-2.5">
              <Button type="button" variant="ghost" onClick={() => setShowNew(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={creating || !areaId || !typeId}>
                {creating ? "Creating…" : "Create"}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
