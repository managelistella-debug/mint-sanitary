"use client";

import type {
  PageSection,
  WhatsIncludedSection,
  ProcessChecklistSection,
  ServiceTilesSection,
  WhyChooseSection,
  RichTextSection,
  SchedulesSection,
  PricingSection,
  FaqSection,
  AreasSection,
  FinalCtaSection,
  GallerySection,
  NeighborhoodsSection,
  MapSection,
  CmsImage,
} from "@/lib/cms/types";
import { Field, TextInput, TextArea, ImagePicker } from "./fields";
import { RepeatingList } from "./RepeatingList";
import { MultiRefPicker, type RefOption } from "./MultiRefPicker";
import { newKey } from "../_lib/api";
import { useToast } from "./Toast";

function LinesField({
  value,
  onChange,
  placeholder,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  return (
    <TextArea
      value={value.join("\n")}
      onChange={(e) => onChange(e.target.value.split("\n"))}
      placeholder={placeholder}
    />
  );
}

/* ─── whatsIncluded ───────────────────────────────────────────── */

export function WhatsIncludedEditor({
  section,
  onChange,
}: {
  section: WhatsIncludedSection;
  onChange: (patch: Partial<WhatsIncludedSection>) => void;
}) {
  return (
    <>
      <Field label="Cards">
        <RepeatingList
          items={section.cards}
          onChange={(cards) => onChange({ cards })}
          makeItem={() => ({ title: "", items: [] })}
          addLabel="Add card"
          renderItem={(card, update) => (
            <>
              <Field label="Title">
                <TextInput value={card.title} onChange={(e) => update({ title: e.target.value })} />
              </Field>
              <Field label="Body (optional)" hint="A paragraph under the title.">
                <TextArea
                  value={card.body ?? ""}
                  onChange={(e) => update({ body: e.target.value })}
                />
              </Field>
              <Field label="Items (one per line, optional)">
                <LinesField value={card.items} onChange={(items) => update({ items })} />
              </Field>
            </>
          )}
        />
      </Field>
      <Field label="What's Not Included — title (optional)">
        <TextInput
          value={section.exclusionsTitle ?? ""}
          onChange={(e) => onChange({ exclusionsTitle: e.target.value })}
        />
      </Field>
      <Field label="What's Not Included — body (optional)">
        <TextArea
          value={section.exclusionsBody ?? ""}
          onChange={(e) => onChange({ exclusionsBody: e.target.value })}
        />
      </Field>
      <p className="text-[12.5px] text-[#9CA3AF]">
        The right-hand "Every Mint Cleaning Includes" box is shared site-wide — edit it in Site
        Settings.
      </p>
    </>
  );
}

/* ─── processChecklist ────────────────────────────────────────── */

export function ProcessChecklistEditor({
  section,
  onChange,
}: {
  section: ProcessChecklistSection;
  onChange: (patch: Partial<ProcessChecklistSection>) => void;
}) {
  return (
    <>
      <Field label="Steps" hint="Leave empty to show only the checklist, centered.">
        <RepeatingList
          items={section.steps}
          onChange={(steps) => onChange({ steps })}
          makeItem={() => ({ title: "", body: "" })}
          addLabel="Add step"
          renderItem={(step, update) => (
            <>
              <Field label="Title">
                <TextInput value={step.title} onChange={(e) => update({ title: e.target.value })} />
              </Field>
              <Field label="Body">
                <TextArea value={step.body} onChange={(e) => update({ body: e.target.value })} />
              </Field>
            </>
          )}
        />
      </Field>
      <Field label="Checklist heading">
        <TextInput
          value={section.checklistHeading ?? ""}
          onChange={(e) => onChange({ checklistHeading: e.target.value })}
        />
      </Field>
      <Field
        label="Checklist items (one per line)"
        hint="Leave empty to show only the timeline, centered."
      >
        <LinesField
          value={section.checklistItems}
          onChange={(checklistItems) => onChange({ checklistItems })}
        />
      </Field>
    </>
  );
}

/* ─── serviceTiles ────────────────────────────────────────────── */

export function ServiceTilesEditor({
  section,
  onChange,
  cleaningTypeOptions,
}: {
  section: ServiceTilesSection;
  onChange: (patch: Partial<ServiceTilesSection>) => void;
  cleaningTypeOptions: RefOption[];
}) {
  const toast = useToast();
  const selectedIds = section.tiles.map((t) =>
    typeof t === "object" && "_id" in t ? (t as unknown as { _id: string })._id : (t as unknown as { _ref: string })._ref
  );
  return (
    <>
      <Field label="Tiles to feature">
        <MultiRefPicker
          options={cleaningTypeOptions}
          selectedIds={selectedIds}
          onChange={(ids) =>
            onChange({ tiles: ids.map((id) => ({ _type: "reference", _ref: id })) as never })
          }
        />
      </Field>
      <Field
        label="Custom tiles"
        hint="For services that don't have their own Cleaning Type page — for example a section further down this same page. Leave the link blank to show a tile with no 'Learn More'."
      >
        <RepeatingList
          items={section.customTiles ?? []}
          onChange={(customTiles) => onChange({ customTiles })}
          makeItem={() => ({ title: "", description: "", href: "" })}
          addLabel="Add custom tile"
          renderItem={(tile, update) => (
            <>
              <Field label="Title">
                <TextInput value={tile.title} onChange={(e) => update({ title: e.target.value })} />
              </Field>
              <Field label="Description">
                <TextArea
                  value={tile.description ?? ""}
                  onChange={(e) => update({ description: e.target.value })}
                />
              </Field>
              <Field label="Image">
                <ImagePicker
                  value={tile.image}
                  onChange={(image) => update({ image })}
                  onError={(m) => toast(m, "error")}
                />
              </Field>
              <Field label="Link" hint="e.g. /services/deep-cleaning or #area-rug-cleaning">
                <TextInput
                  value={tile.href ?? ""}
                  onChange={(e) => update({ href: e.target.value })}
                />
              </Field>
            </>
          )}
        />
      </Field>
    </>
  );
}

/* ─── whyChoose ───────────────────────────────────────────────── */

export function WhyChooseEditor({
  section,
  onChange,
}: {
  section: WhyChooseSection;
  onChange: (patch: Partial<WhyChooseSection>) => void;
}) {
  const toast = useToast();
  return (
    <>
      <Field label="Image" hint="Required for this section to appear.">
        <ImagePicker
          value={section.image}
          onChange={(image: CmsImage | undefined) => onChange({ image })}
          onError={(m) => toast(m, "error")}
        />
      </Field>
      <Field label="Accordion items">
        <RepeatingList
          items={section.items}
          onChange={(items) => onChange({ items })}
          makeItem={() => ({ title: "", body: "" })}
          addLabel="Add item"
          renderItem={(item, update) => (
            <>
              <Field label="Title">
                <TextInput value={item.title} onChange={(e) => update({ title: e.target.value })} />
              </Field>
              <Field label="Body">
                <TextArea value={item.body} onChange={(e) => update({ body: e.target.value })} />
              </Field>
            </>
          )}
        />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Button label">
          <TextInput
            value={section.ctaLabel ?? ""}
            onChange={(e) => onChange({ ctaLabel: e.target.value })}
          />
        </Field>
        <Field label="Button link">
          <TextInput
            value={section.ctaHref ?? ""}
            onChange={(e) => onChange({ ctaHref: e.target.value })}
          />
        </Field>
      </div>
    </>
  );
}

/* ─── richText ────────────────────────────────────────────────── */

type RichBlockKind = "heading" | "paragraph" | "image";
interface RichBlockView {
  _key: string;
  kind: RichBlockKind;
  text?: string;
  image?: CmsImage;
  /**
   * The untouched source block. This editor only exposes plain text, so
   * anything richer that already exists in the document — inline links,
   * bold/italic marks, list items — would be flattened away on save. Keeping
   * the original lets `blocksToRichText` hand it straight back whenever the
   * block's text and style weren't actually changed, so editing one
   * paragraph can't silently strip the links out of another.
   */
  original?: Record<string, unknown>;
}

export function richTextToBlocks(body: RichTextSection["body"]): RichBlockView[] {
  return (body ?? []).map((b) => {
    const block = b as unknown as Record<string, unknown>;
    if (block._type === "image") {
      return {
        _key: block._key as string,
        kind: "image" as const,
        image: block as unknown as CmsImage,
        original: block,
      };
    }
    const style = (block.style as string) || "normal";
    const children = (block.children as Array<{ text?: string }>) || [];
    const text = children.map((c) => c.text ?? "").join("");
    return {
      _key: block._key as string,
      kind: (style === "h3" ? "heading" : "paragraph") as RichBlockKind,
      text,
      original: block,
    };
  });
}

export function blocksToRichText(blocks: RichBlockView[]): RichTextSection["body"] {
  return blocks.map((b) => {
    if (b.kind === "image" && b.image) {
      return { ...b.image, _type: "image", _key: b._key } as never;
    }

    // Unchanged text block → return the original verbatim, marks and all.
    if (b.original && b.original._type === "block") {
      const originalStyle = (b.original.style as string) || "normal";
      const originalKind: RichBlockKind = originalStyle === "h3" ? "heading" : "paragraph";
      const originalText = ((b.original.children as Array<{ text?: string }>) || [])
        .map((c) => c.text ?? "")
        .join("");
      if (originalKind === b.kind && originalText === (b.text ?? "")) {
        return b.original as never;
      }
    }

    return {
      _type: "block",
      _key: b._key,
      style: b.kind === "heading" ? "h3" : "normal",
      children: [{ _type: "span", _key: `${b._key}-s`, text: b.text ?? "" }],
      markDefs: [],
    } as never;
  });
}

export function RichTextEditor({
  section,
  onChange,
}: {
  section: RichTextSection;
  onChange: (patch: Partial<RichTextSection>) => void;
}) {
  const toast = useToast();
  const blocks = richTextToBlocks(section.body);

  function setBlocks(next: RichBlockView[]) {
    onChange({ body: blocksToRichText(next) });
  }

  return (
    <RepeatingList
      items={blocks}
      onChange={setBlocks}
      makeItem={() => ({ kind: "paragraph" as const, text: "" })}
      addLabel="Add block"
      renderItem={(block, update) => (
        <>
          <Field label="Block type">
            <select
              value={block.kind}
              onChange={(e) => update({ kind: e.target.value as RichBlockKind })}
              className="w-full rounded-lg border border-[#D4D4D4] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111]"
            >
              <option value="heading">Heading</option>
              <option value="paragraph">Paragraph</option>
              <option value="image">Image</option>
            </select>
          </Field>
          {block.kind === "image" ? (
            <Field label="Image">
              <ImagePicker
                value={block.image}
                onChange={(image) => update({ image })}
                onError={(m) => toast(m, "error")}
              />
            </Field>
          ) : (
            <Field label="Text">
              <TextArea value={block.text ?? ""} onChange={(e) => update({ text: e.target.value })} />
            </Field>
          )}
        </>
      )}
    />
  );
}

/* ─── schedules ───────────────────────────────────────────────── */

export function SchedulesEditor({
  section,
  onChange,
}: {
  section: SchedulesSection;
  onChange: (patch: Partial<SchedulesSection>) => void;
}) {
  return (
    <Field label="Schedule options">
      <RepeatingList
        items={section.items}
        onChange={(items) => onChange({ items })}
        makeItem={() => ({ title: "", body: "" })}
        addLabel="Add option"
        renderItem={(item, update) => (
          <>
            <Field label="Title">
              <TextInput value={item.title} onChange={(e) => update({ title: e.target.value })} />
            </Field>
            <Field label="Body">
              <TextArea value={item.body} onChange={(e) => update({ body: e.target.value })} />
            </Field>
          </>
        )}
      />
    </Field>
  );
}

/* ─── pricing ─────────────────────────────────────────────────── */

export function PricingEditor({
  section,
  onChange,
}: {
  section: PricingSection;
  onChange: (patch: Partial<PricingSection>) => void;
}) {
  return (
    <>
      <Field label="Pricing tiers">
        <RepeatingList
          items={section.tiers}
          onChange={(tiers) => onChange({ tiers })}
          makeItem={() => ({ title: "", range: "", body: "" })}
          addLabel="Add tier"
          renderItem={(tier, update) => (
            <>
              <Field label="Title">
                <TextInput value={tier.title} onChange={(e) => update({ title: e.target.value })} />
              </Field>
              <Field label="Price range" hint="e.g. $500 – $1,000">
                <TextInput value={tier.range} onChange={(e) => update({ range: e.target.value })} />
              </Field>
              <Field label="Body">
                <TextArea value={tier.body} onChange={(e) => update({ body: e.target.value })} />
              </Field>
            </>
          )}
        />
      </Field>
      <Field label="Notes below the tiers (one per line)">
        <LinesField value={section.notes ?? []} onChange={(notes) => onChange({ notes })} />
      </Field>
    </>
  );
}

/* ─── faq ─────────────────────────────────────────────────────── */

export function FaqEditor({
  section,
  onChange,
}: {
  section: FaqSection;
  onChange: (patch: Partial<FaqSection>) => void;
}) {
  return (
    <Field label="Questions">
      <RepeatingList
        items={section.items}
        onChange={(items) => onChange({ items })}
        makeItem={() => ({ question: "", answer: "" })}
        addLabel="Add question"
        renderItem={(item, update) => (
          <>
            <Field label="Question">
              <TextInput
                value={item.question}
                onChange={(e) => update({ question: e.target.value })}
              />
            </Field>
            <Field label="Answer">
              <TextArea value={item.answer} onChange={(e) => update({ answer: e.target.value })} />
            </Field>
          </>
        )}
      />
    </Field>
  );
}

/* ─── areas ───────────────────────────────────────────────────── */

export function AreasEditor({
  section,
  onChange,
  areaOptions,
}: {
  section: AreasSection;
  onChange: (patch: Partial<AreasSection>) => void;
  areaOptions: RefOption[];
}) {
  const selectedIds = section.areas.map((a) =>
    typeof a === "object" && "_id" in a ? (a as unknown as { _id: string })._id : (a as unknown as { _ref: string })._ref
  );
  return (
    <Field
      label="Areas to feature"
      hint="Cities without a live page for this service render dimmed and unclickable."
    >
      <MultiRefPicker
        options={areaOptions}
        selectedIds={selectedIds}
        onChange={(ids) =>
          onChange({ areas: ids.map((id) => ({ _type: "reference", _ref: id })) as never })
        }
      />
    </Field>
  );
}

/* ─── finalCta ────────────────────────────────────────────────── */

export function FinalCtaEditor({
  section,
  onChange,
}: {
  section: FinalCtaSection;
  onChange: (patch: Partial<FinalCtaSection>) => void;
}) {
  return (
    <>
      <Field label="Body">
        <TextArea value={section.body ?? ""} onChange={(e) => onChange({ body: e.target.value })} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Button label">
          <TextInput
            value={section.ctaLabel ?? ""}
            onChange={(e) => onChange({ ctaLabel: e.target.value })}
          />
        </Field>
        <Field label="Button link">
          <TextInput
            value={section.ctaHref ?? ""}
            onChange={(e) => onChange({ ctaHref: e.target.value })}
          />
        </Field>
      </div>
    </>
  );
}

/* ─── gallery ─────────────────────────────────────────────────── */

export function GalleryEditor({
  section,
  onChange,
}: {
  section: GallerySection;
  onChange: (patch: Partial<GallerySection>) => void;
}) {
  const toast = useToast();
  return (
    <Field label="Photos">
      <RepeatingList
        items={section.images}
        onChange={(images) => onChange({ images })}
        makeItem={() => ({ image: undefined as unknown as CmsImage })}
        addLabel="Add photo"
        renderItem={(item, update) => (
          <Field label="Image">
            <ImagePicker
              value={item.image}
              onChange={(image) => update({ image: image as CmsImage })}
              onError={(m) => toast(m, "error")}
            />
          </Field>
        )}
      />
    </Field>
  );
}

/* ─── neighborhoods ───────────────────────────────────────────── */

export function NeighborhoodsEditor({
  section,
  onChange,
  neighborhoodOptions,
}: {
  section: NeighborhoodsSection;
  onChange: (patch: Partial<NeighborhoodsSection>) => void;
  neighborhoodOptions: RefOption[];
}) {
  const selectedIds = section.neighborhoods.map((n) =>
    typeof n === "object" && "_id" in n
      ? (n as unknown as { _id: string })._id
      : (n as unknown as { _ref: string })._ref
  );
  return (
    <Field label="Neighborhoods to feature" hint="Not clickable yet — plain bubbles, in the order picked.">
      <MultiRefPicker
        options={neighborhoodOptions}
        selectedIds={selectedIds}
        onChange={(ids) =>
          onChange({ neighborhoods: ids.map((id) => ({ _type: "reference", _ref: id })) as never })
        }
      />
    </Field>
  );
}

/* ─── map ─────────────────────────────────────────────────────── */

export function MapEditor({
  section,
  onChange,
}: {
  section: MapSection;
  onChange: (patch: Partial<MapSection>) => void;
}) {
  const toast = useToast();
  return (
    <>
      <Field label="Map image" hint="Required for this section to appear.">
        <ImagePicker
          value={section.image}
          onChange={(image: CmsImage | undefined) => onChange({ image })}
          onError={(m) => toast(m, "error")}
        />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Button label (optional)">
          <TextInput
            value={section.ctaLabel ?? ""}
            onChange={(e) => onChange({ ctaLabel: e.target.value })}
          />
        </Field>
        <Field label="Button link">
          <TextInput
            value={section.ctaHref ?? ""}
            onChange={(e) => onChange({ ctaHref: e.target.value })}
          />
        </Field>
      </div>
    </>
  );
}

/* ─── dispatcher ──────────────────────────────────────────────── */

export function SectionFieldEditor({
  section,
  onChange,
  cleaningTypeOptions,
  areaOptions,
  neighborhoodOptions,
}: {
  section: PageSection;
  onChange: (patch: Record<string, unknown>) => void;
  cleaningTypeOptions: RefOption[];
  areaOptions: RefOption[];
  neighborhoodOptions: RefOption[];
}) {
  switch (section._type) {
    case "whatsIncluded":
      return <WhatsIncludedEditor section={section} onChange={onChange} />;
    case "processChecklist":
      return <ProcessChecklistEditor section={section} onChange={onChange} />;
    case "serviceTiles":
      return (
        <ServiceTilesEditor
          section={section}
          onChange={onChange}
          cleaningTypeOptions={cleaningTypeOptions}
        />
      );
    case "whyChoose":
      return <WhyChooseEditor section={section} onChange={onChange} />;
    case "testimonials":
      return (
        <p className="text-[12.5px] text-[#9CA3AF]">
          Reviews are shared site-wide — edit them in Site Settings.
        </p>
      );
    case "richText":
      return <RichTextEditor section={section} onChange={onChange} />;
    case "schedules":
      return <SchedulesEditor section={section} onChange={onChange} />;
    case "pricing":
      return <PricingEditor section={section} onChange={onChange} />;
    case "faq":
      return <FaqEditor section={section} onChange={onChange} />;
    case "areas":
      return <AreasEditor section={section} onChange={onChange} areaOptions={areaOptions} />;
    case "finalCta":
      return <FinalCtaEditor section={section} onChange={onChange} />;
    case "gallery":
      return <GalleryEditor section={section} onChange={onChange} />;
    case "neighborhoods":
      return (
        <NeighborhoodsEditor
          section={section}
          onChange={onChange}
          neighborhoodOptions={neighborhoodOptions}
        />
      );
    case "map":
      return <MapEditor section={section} onChange={onChange} />;
    default:
      return null;
  }
}

export { newKey };
