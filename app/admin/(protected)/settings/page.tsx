"use client";

import { useEffect, useState } from "react";
import type { SiteGlobals } from "@/lib/cms/types";
import { ICON_OPTIONS } from "@/lib/cms/icons";
import { api } from "@/app/admin/_lib/api";
import { useToast } from "@/app/admin/_components/Toast";
import { Field, TextInput, TextArea, Button, ImagePicker } from "@/app/admin/_components/fields";
import { RepeatingList } from "@/app/admin/_components/RepeatingList";
import { LoadErrorBanner } from "@/app/admin/_components/LoadErrorBanner";

export default function SettingsPage() {
  const toast = useToast();
  const [doc, setDocState] = useState<SiteGlobals | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api<{ doc: SiteGlobals }>("/api/admin/settings")
      .then((r) => setDocState(r.doc))
      .catch((err) => setLoadError(err instanceof Error ? err.message : "Failed to load."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setDoc(patch: Partial<SiteGlobals>) {
    setDocState((prev) => (prev ? { ...prev, ...patch } : prev));
  }

  async function save() {
    if (!doc) return;
    setSaving(true);
    try {
      await api("/api/admin/settings", { method: "PUT", body: JSON.stringify(doc) });
      toast("Saved.");
    } catch (err) {
      toast(err instanceof Error ? err.message : "Save failed.", "error");
    } finally {
      setSaving(false);
    }
  }

  if (loadError) {
    return (
      <>
        <h1 className="mb-6 text-[24px] font-semibold tracking-[-0.02em] text-[#111]">
          Site Settings
        </h1>
        <LoadErrorBanner message={loadError} />
      </>
    );
  }
  if (!doc) return <p className="text-[14px] text-[#9CA3AF]">Loading…</p>;

  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#111]">
            Site Settings
          </h1>
          <p className="mt-1 text-[14px] text-[#6B7280]">
            Content that&apos;s identical on every page — edited once here instead of on each
            page.
          </p>
        </div>
        <Button onClick={save} disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </Button>
      </header>

      <div className="flex flex-col gap-6">
        <section className="rounded-xl border border-[#E5E5E5] bg-white p-5">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
            Contact
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <Field label="Phone">
              <TextInput value={doc.phone} onChange={(e) => setDoc({ phone: e.target.value })} />
            </Field>
            <Field label="Email">
              <TextInput value={doc.email} onChange={(e) => setDoc({ email: e.target.value })} />
            </Field>
            <Field label="Promo code" hint="Shown in the closing CTA.">
              <TextInput
                value={doc.promoCode ?? ""}
                onChange={(e) => setDoc({ promoCode: e.target.value })}
              />
            </Field>
          </div>
        </section>

        <section className="rounded-xl border border-[#E5E5E5] bg-white p-5">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
            Every Mint Cleaning Includes
          </h2>
          <Field label="Heading">
            <TextInput
              value={doc.everyCleanHeading}
              onChange={(e) => setDoc({ everyCleanHeading: e.target.value })}
            />
          </Field>
          <Field label="Items">
            <RepeatingList
              items={doc.everyCleanItems}
              onChange={(everyCleanItems) => setDoc({ everyCleanItems })}
              makeItem={() => ({ icon: "check", text: "" })}
              addLabel="Add item"
              renderItem={(item, update) => (
                <div className="flex gap-3">
                  <select
                    value={item.icon}
                    onChange={(e) => update({ icon: e.target.value })}
                    className="w-[160px] rounded-lg border border-[#D4D4D4] bg-white px-3 py-2.5 text-[14px] text-[#111]"
                  >
                    {ICON_OPTIONS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <TextInput
                    value={item.text}
                    onChange={(e) => update({ text: e.target.value })}
                    className="flex-1"
                    placeholder="e.g. 10% off your first clean with code MINT26"
                  />
                </div>
              )}
            />
          </Field>
        </section>

        <section className="rounded-xl border border-[#E5E5E5] bg-white p-5">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
            Trusted-by logo strip
          </h2>
          <Field label="Heading">
            <TextInput
              value={doc.clientsHeading}
              onChange={(e) => setDoc({ clientsHeading: e.target.value })}
            />
          </Field>
          <Field label="Logos">
            <RepeatingList
              items={doc.clientLogos}
              onChange={(clientLogos) => setDoc({ clientLogos })}
              makeItem={() => ({ name: "", image: undefined as never })}
              addLabel="Add logo"
              renderItem={(logo, update) => (
                <>
                  <Field label="Organization name">
                    <TextInput value={logo.name} onChange={(e) => update({ name: e.target.value })} />
                  </Field>
                  <Field label="Logo image">
                    <ImagePicker
                      value={logo.image}
                      onChange={(image) => update({ image: image as never })}
                      onError={(m) => toast(m, "error")}
                    />
                  </Field>
                </>
              )}
            />
          </Field>
        </section>

        <section className="rounded-xl border border-[#E5E5E5] bg-white p-5">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
            Google Reviews
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <Field label="Heading">
              <TextInput
                value={doc.reviewsHeading}
                onChange={(e) => setDoc({ reviewsHeading: e.target.value })}
              />
            </Field>
            <Field label="Rating line" hint="e.g. 4.9 out of 5">
              <TextInput
                value={doc.reviewsRating}
                onChange={(e) => setDoc({ reviewsRating: e.target.value })}
              />
            </Field>
            <Field label="Count line" hint="e.g. based on 120+ reviews">
              <TextInput
                value={doc.reviewsCount}
                onChange={(e) => setDoc({ reviewsCount: e.target.value })}
              />
            </Field>
          </div>
          <Field label="Reviews">
            <RepeatingList
              items={doc.reviews}
              onChange={(reviews) => setDoc({ reviews })}
              makeItem={() => ({ name: "", rating: 5, date: "", text: "" })}
              addLabel="Add review"
              renderItem={(review, update) => (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    <Field label="Name">
                      <TextInput
                        value={review.name}
                        onChange={(e) => update({ name: e.target.value })}
                      />
                    </Field>
                    <Field label="Rating (1–5)">
                      <TextInput
                        type="number"
                        min={1}
                        max={5}
                        value={review.rating}
                        onChange={(e) => update({ rating: Number(e.target.value) })}
                      />
                    </Field>
                    <Field label="Date" hint="e.g. 2 weeks ago">
                      <TextInput
                        value={review.date}
                        onChange={(e) => update({ date: e.target.value })}
                      />
                    </Field>
                  </div>
                  <Field label="Review text">
                    <TextArea
                      value={review.text}
                      onChange={(e) => update({ text: e.target.value })}
                    />
                  </Field>
                </>
              )}
            />
          </Field>
        </section>
      </div>
    </>
  );
}
