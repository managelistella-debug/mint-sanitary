"use client";

import { use, useEffect, useState } from "react";
import { PageEditor } from "@/app/admin/_components/PageEditor";
import { useToast } from "@/app/admin/_components/Toast";
import { api } from "@/app/admin/_lib/api";
import type { RefOption } from "@/app/admin/_components/MultiRefPicker";

export default function AreaServiceEditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const toast = useToast();
  const [cleaningTypeOptions, setCleaningTypeOptions] = useState<RefOption[]>([]);
  const [areaOptions, setAreaOptions] = useState<RefOption[]>([]);

  useEffect(() => {
    Promise.all([
      api<{ docs: RefOption[] }>("/api/admin/cleaning-types"),
      api<{ docs: RefOption[] }>("/api/admin/areas"),
    ])
      .then(([t, a]) => {
        setCleaningTypeOptions(t.docs);
        setAreaOptions(a.docs);
      })
      .catch((err) => toast(err instanceof Error ? err.message : "Failed to load.", "error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageEditor
      collectionEndpoint="/api/admin/area-services"
      id={id}
      backHref="/admin/area-services"
      publicUrlPrefix="/"
      cleaningTypeOptions={cleaningTypeOptions}
      areaOptions={areaOptions}
      extraFields={(doc) => {
        const area = doc.area as { name?: string } | undefined;
        const cleaningType = doc.cleaningType as { name?: string } | undefined;
        return (
          <p className="mt-3 text-[12.5px] text-[#9CA3AF]">
            {area?.name ?? "?"} · {cleaningType?.name ?? "?"} — the area and cleaning type are
            set when a page is created and can&apos;t be changed here. Delete and recreate to
            move it.
          </p>
        );
      }}
    />
  );
}
