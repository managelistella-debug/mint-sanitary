"use client";

import { use, useEffect, useState } from "react";
import { PageEditor } from "@/app/admin/_components/PageEditor";
import { Field, TextInput } from "@/app/admin/_components/fields";
import { useToast } from "@/app/admin/_components/Toast";
import { api } from "@/app/admin/_lib/api";
import type { RefOption } from "@/app/admin/_components/MultiRefPicker";

export default function AreaEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const toast = useToast();
  const [cleaningTypeOptions, setCleaningTypeOptions] = useState<RefOption[]>([]);
  const [areaOptions, setAreaOptions] = useState<RefOption[]>([]);
  const [neighborhoodOptions, setNeighborhoodOptions] = useState<RefOption[]>([]);

  useEffect(() => {
    Promise.all([
      api<{ docs: RefOption[] }>("/api/admin/cleaning-types"),
      api<{ docs: RefOption[] }>("/api/admin/areas"),
      api<{ docs: RefOption[] }>("/api/admin/neighborhoods"),
    ])
      .then(([t, a, n]) => {
        setCleaningTypeOptions(t.docs);
        setAreaOptions(a.docs);
        setNeighborhoodOptions(n.docs);
      })
      .catch((err) => toast(err instanceof Error ? err.message : "Failed to load.", "error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageEditor
      collectionEndpoint="/api/admin/areas"
      id={id}
      backHref="/admin/areas"
      publicUrlPrefix="/"
      cleaningTypeOptions={cleaningTypeOptions}
      areaOptions={areaOptions}
      neighborhoodOptions={neighborhoodOptions}
      extraFields={(doc, setDoc) => (
        <div className="mt-3">
          <Field label="Display name" hint="Used on bubbles and in headings, e.g. 'Burnaby'.">
            <TextInput
              value={(doc.name as string) ?? ""}
              onChange={(e) => setDoc({ name: e.target.value })}
            />
          </Field>
        </div>
      )}
    />
  );
}
