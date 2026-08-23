"use client";

import { use, useEffect, useState } from "react";
import { PageEditor, type EditableDoc } from "@/app/admin/_components/PageEditor";
import { Field, TextInput, Toggle, ImagePicker } from "@/app/admin/_components/fields";
import { useToast } from "@/app/admin/_components/Toast";
import { api } from "@/app/admin/_lib/api";
import { RESERVED_SERVICE_SLUGS } from "@/lib/cms/reservedSlugs";
import type { RefOption } from "@/app/admin/_components/MultiRefPicker";

export default function CleaningTypeEditorPage({
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
      collectionEndpoint="/api/admin/cleaning-types"
      id={id}
      backHref="/admin/cleaning-types"
      publicUrlPrefix="/services/"
      cleaningTypeOptions={cleaningTypeOptions}
      areaOptions={areaOptions}
      notice={(doc) =>
        RESERVED_SERVICE_SLUGS.has(doc.slug) ? (
          <div className="mb-6 rounded-xl border border-[#F0D48A] bg-[#FDF8EC] p-4">
            <p className="text-[13.5px] font-semibold text-[#7A5B12]">
              This page is hand-coded, so its sections aren&apos;t used.
            </p>
            <p className="mt-1 text-[13px] leading-[1.6] text-[#8A6C22]">
              /services/{doc.slug} is built directly in the site&apos;s code, and it&apos;s the
              design template the CMS layouts are based on. Anything you add under Sections
              below won&apos;t show up there. The name, tile description, and tile image above
              <em> are</em> used — they&apos;re what other pages show when they link to this
              service.
            </p>
          </div>
        ) : null
      }
      extraFields={(doc, setDoc) => (
        <>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Field label="Display name" hint="Used on tiles and in the Areas section.">
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
            label="Has its own page at /services/…"
          />
          {!doc.hasOwnPage && (
            <p className="mt-2 text-[12px] text-[#9CA3AF]">
              Without its own page, this only appears as a tile with no "Learn More" link — like
              Standard Cleaning and Recurring Cleaning today.
            </p>
          )}
        </>
      )}
    />
  );
}
