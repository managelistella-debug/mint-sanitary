"use client";

import { use, useEffect, useState } from "react";
import { PageEditor } from "@/app/admin/_components/PageEditor";
import { Field, TextInput, Toggle, ImagePicker } from "@/app/admin/_components/fields";
import { useToast } from "@/app/admin/_components/Toast";
import { api } from "@/app/admin/_lib/api";
import type { RefOption } from "@/app/admin/_components/MultiRefPicker";

export default function NeighborhoodEditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
      collectionEndpoint="/api/admin/neighborhoods"
      id={id}
      backHref="/admin/neighborhoods"
      publicUrlPrefix="/"
      cleaningTypeOptions={cleaningTypeOptions}
      areaOptions={areaOptions}
      neighborhoodOptions={neighborhoodOptions}
      notice={() => (
        <div className="mb-6 rounded-xl border border-[#DCE7FF] bg-[#F4F8FF] p-4">
          <p className="text-[13px] leading-[1.6] text-[#3B5480]">
            Neighborhoods don&apos;t have a live page yet — this doc only feeds the bubble list on
            its Area&apos;s page. &quot;Has its own page&quot; below is reserved for when
            neighborhood pages are built; leaving it off (and Sections empty) is the normal state
            today.
          </p>
        </div>
      )}
      extraFields={(doc, setDoc) => {
        const area = doc.area as { name?: string } | undefined;
        return (
          <>
            <p className="mt-1 text-[12.5px] text-[#9CA3AF]">
              {area?.name ?? "?"} — the area is set when a neighborhood is created and can&apos;t
              be changed here. Delete and recreate to move it.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Field label="Display name" hint="Used on bubbles, e.g. 'Lower Lonsdale'.">
                <TextInput
                  value={(doc.name as string) ?? ""}
                  onChange={(e) => setDoc({ name: e.target.value })}
                />
              </Field>
              <Field label="Tile description">
                <TextInput
                  value={(doc.tileDescription as string) ?? ""}
                  onChange={(e) => setDoc({ tileDescription: e.target.value })}
                />
              </Field>
            </div>
            <Field label="Tile image">
              <ImagePicker
                value={doc.tileImage as never}
                onChange={(tileImage) => setDoc({ tileImage })}
              />
            </Field>
            <Toggle
              checked={Boolean(doc.hasOwnPage)}
              onChange={(v) => setDoc({ hasOwnPage: v })}
              label="Has its own page (not built yet — leave off)"
            />
          </>
        );
      }}
    />
  );
}
