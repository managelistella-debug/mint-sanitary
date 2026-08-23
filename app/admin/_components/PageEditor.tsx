"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { PageSection, CmsImage } from "@/lib/cms/types";
import { api } from "../_lib/api";
import { useToast } from "./Toast";
import { Field, TextInput, TextArea, Toggle, Button, ImagePicker } from "./fields";
import { SectionListEditor } from "./SectionListEditor";
import { LoadErrorBanner } from "./LoadErrorBanner";
import type { RefOption } from "./MultiRefPicker";

export interface EditableDoc {
  _id: string;
  title: string;
  slug: string;
  heroHeading?: string;
  heroIntro?: string;
  heroImage?: CmsImage;
  metaTitle?: string;
  metaDescription?: string;
  sections: PageSection[];
  published: boolean;
  [extra: string]: unknown;
}

/**
 * Shared editor shell for all three collections. Loads the doc, exposes the
 * fields every page type has in common plus a slot for collection-specific
 * ones, and owns the save/publish flow.
 */
export function PageEditor({
  collectionEndpoint,
  id,
  backHref,
  publicUrlPrefix,
  cleaningTypeOptions,
  areaOptions,
  neighborhoodOptions,
  extraFields,
  notice,
}: {
  collectionEndpoint: string;
  id: string;
  backHref: string;
  /** e.g. "/services/" — used to build the "View live" link once published. */
  publicUrlPrefix: string;
  cleaningTypeOptions: RefOption[];
  areaOptions: RefOption[];
  neighborhoodOptions?: RefOption[];
  extraFields?: (doc: EditableDoc, setDoc: (patch: Partial<EditableDoc>) => void) => React.ReactNode;
  /**
   * Optional callout shown above the editor — used to explain a doc whose
   * live page isn't rendered from these sections (see house-cleaning).
   */
  notice?: (doc: EditableDoc) => React.ReactNode;
}) {
  const toast = useToast();
  const [doc, setDocState] = useState<EditableDoc | null>(null);
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    api<{ doc: EditableDoc }>(`${collectionEndpoint}/${id}`)
      .then((r) => setDocState(r.doc))
      .catch((err) => setLoadError(err instanceof Error ? err.message : "Failed to load."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function setDoc(patch: Partial<EditableDoc>) {
    setDocState((prev) => (prev ? { ...prev, ...patch } : prev));
  }

  async function save(publish?: boolean) {
    if (!doc) return;
    setSaving(true);
    try {
      const body = { ...doc, ...(publish !== undefined ? { published: publish } : {}) };
      const { doc: saved } = await api<{ doc: EditableDoc }>(`${collectionEndpoint}/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      setDocState((prev) => (prev ? { ...prev, ...saved, sections: doc.sections } : prev));
      toast(publish === true ? "Published." : publish === false ? "Unpublished." : "Saved.");
    } catch (err) {
      toast(err instanceof Error ? err.message : "Save failed.", "error");
    } finally {
      setSaving(false);
    }
  }

  if (loadError) {
    return (
      <>
        <Link
          href={backHref}
          className="mb-6 flex items-center gap-1.5 text-[13.5px] font-medium text-[#6B7280] hover:text-[#111]"
        >
          <ArrowLeft size={15} /> Back
        </Link>
        <LoadErrorBanner message={loadError} />
      </>
    );
  }
  if (!doc) {
    return <p className="text-[14px] text-[#9CA3AF]">Loading…</p>;
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={backHref}
          className="flex items-center gap-1.5 text-[13.5px] font-medium text-[#6B7280] hover:text-[#111]"
        >
          <ArrowLeft size={15} /> Back
        </Link>
        <div className="flex items-center gap-2.5">
          {doc.published && (
            <a
              href={`${publicUrlPrefix}${doc.slug}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-medium text-[#6B7280] hover:text-[#111]"
            >
              View live <ExternalLink size={13} />
            </a>
          )}
          <Toggle
            checked={doc.published}
            onChange={(v) => setDoc({ published: v })}
            label={doc.published ? "Published" : "Draft"}
          />
          <Button variant="ghost" onClick={() => save()} disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </Button>
          <Button
            onClick={() => save(!doc.published)}
            disabled={saving}
          >
            {doc.published ? "Unpublish" : "Publish"}
          </Button>
        </div>
      </div>

      {notice?.(doc)}

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <div className="mb-6 rounded-xl border border-[#E5E5E5] bg-white p-5">
            <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Page
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Title">
                <TextInput value={doc.title} onChange={(e) => setDoc({ title: e.target.value })} />
              </Field>
              <Field label="URL slug">
                <TextInput value={doc.slug} onChange={(e) => setDoc({ slug: e.target.value })} />
              </Field>
            </div>
            {extraFields?.(doc, setDoc)}
          </div>

          <div className="mb-6 rounded-xl border border-[#E5E5E5] bg-white p-5">
            <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Hero
            </h2>
            <Field label="Hero heading" hint="Falls back to the title above.">
              <TextInput
                value={doc.heroHeading ?? ""}
                onChange={(e) => setDoc({ heroHeading: e.target.value })}
              />
            </Field>
            <Field label="Hero intro">
              <TextArea
                value={doc.heroIntro ?? ""}
                onChange={(e) => setDoc({ heroIntro: e.target.value })}
              />
            </Field>
            <Field label="Hero image">
              <ImagePicker
                value={doc.heroImage}
                onChange={(heroImage) => setDoc({ heroImage })}
                onError={(m) => toast(m, "error")}
              />
            </Field>
          </div>

          <div className="rounded-xl border border-[#E5E5E5] bg-white p-5">
            <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Sections
            </h2>
            <SectionListEditor
              sections={doc.sections}
              onChange={(sections) => setDoc({ sections })}
              cleaningTypeOptions={cleaningTypeOptions}
              areaOptions={areaOptions}
              neighborhoodOptions={neighborhoodOptions ?? []}
            />
          </div>
        </div>

        <div className="rounded-xl border border-[#E5E5E5] bg-white p-5 lg:sticky lg:top-9 lg:self-start">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
            SEO
          </h2>
          <Field label="Meta title" hint="Falls back to the page title.">
            <TextInput
              value={doc.metaTitle ?? ""}
              onChange={(e) => setDoc({ metaTitle: e.target.value })}
            />
          </Field>
          <Field label="Meta description">
            <TextArea
              value={doc.metaDescription ?? ""}
              onChange={(e) => setDoc({ metaDescription: e.target.value })}
            />
          </Field>
        </div>
      </div>
    </>
  );
}
