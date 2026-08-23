"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Trash2, ChevronDown as Chevron, Plus } from "lucide-react";
import type { PageSection, SectionType } from "@/lib/cms/types";
import { SECTION_DEFINITIONS, sectionDisplayName } from "@/lib/cms/sections";
import { Field, TextInput, TextArea, Button } from "./fields";
import { SectionFieldEditor } from "./SectionEditors";
import type { RefOption } from "./MultiRefPicker";
import { newKey } from "../_lib/api";

export function SectionListEditor({
  sections,
  onChange,
  cleaningTypeOptions,
  areaOptions,
  neighborhoodOptions,
}: {
  sections: PageSection[];
  onChange: (sections: PageSection[]) => void;
  cleaningTypeOptions: RefOption[];
  areaOptions: RefOption[];
  neighborhoodOptions: RefOption[];
}) {
  const [openKey, setOpenKey] = useState<string | null>(sections[0]?._key ?? null);
  const [menuOpen, setMenuOpen] = useState(false);

  function update(i: number, patch: Record<string, unknown>) {
    onChange(sections.map((s, idx) => (idx === i ? ({ ...s, ...patch } as PageSection) : s)));
  }
  function remove(i: number) {
    onChange(sections.filter((_, idx) => idx !== i));
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= sections.length) return;
    const next = [...sections];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }
  function addSection(type: SectionType) {
    const def = SECTION_DEFINITIONS.find((d) => d.type === type);
    if (!def) return;
    const created = { ...def.create(), _key: newKey() } as PageSection;
    onChange([...sections, created]);
    setOpenKey(created._key);
    setMenuOpen(false);
  }

  const presentTypes = new Set(sections.map((s) => s._type));
  const addable = SECTION_DEFINITIONS.filter((d) => d.repeatable || !presentTypes.has(d.type));

  return (
    <div>
      <div className="flex flex-col gap-3">
        {sections.map((section, i) => {
          const def = SECTION_DEFINITIONS.find((d) => d.type === section._type);
          const isOpen = openKey === section._key;
          return (
            <div key={section._key} className="rounded-xl border border-[#E5E5E5] bg-white">
              <div className="flex items-center gap-2 border-b border-[#F0F0F0] px-4 py-3">
                <button
                  type="button"
                  onClick={() => setOpenKey(isOpen ? null : section._key)}
                  className="flex flex-1 items-center gap-2 text-left"
                >
                  <Chevron
                    size={15}
                    className={`text-[#9CA3AF] transition-transform ${isOpen ? "" : "-rotate-90"}`}
                  />
                  <span className="text-[13.5px] font-semibold text-[#111]">
                    {sectionDisplayName(section._type)}
                  </span>
                  {section.heading && (
                    <span className="truncate text-[12.5px] text-[#9CA3AF]">
                      — {section.heading}
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  className="flex h-6 w-6 items-center justify-center rounded text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#111] disabled:opacity-30"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => move(i, 1)}
                  disabled={i === sections.length - 1}
                  className="flex h-6 w-6 items-center justify-center rounded text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#111] disabled:opacity-30"
                >
                  <ChevronDown size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="flex h-6 w-6 items-center justify-center rounded text-[#9CA3AF] hover:bg-[#FEF2F2] hover:text-[#B91C1C]"
                >
                  <Trash2 size={13} />
                </button>
              </div>

              {isOpen && (
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Heading" hint={`Placeholder: ${def?.exampleHeading ?? ""}`}>
                      <TextInput
                        value={section.heading ?? ""}
                        onChange={(e) => update(i, { heading: e.target.value })}
                        placeholder={def?.exampleHeading}
                      />
                    </Field>
                    {"intro" in section && (
                      <Field label="Intro text">
                        <TextArea
                          value={(section as { intro?: string }).intro ?? ""}
                          onChange={(e) => update(i, { intro: e.target.value })}
                        />
                      </Field>
                    )}
                  </div>
                  <SectionFieldEditor
                    section={section}
                    onChange={(patch) => update(i, patch)}
                    cleaningTypeOptions={cleaningTypeOptions}
                    areaOptions={areaOptions}
                    neighborhoodOptions={neighborhoodOptions}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="relative mt-4 inline-block">
        <Button type="button" variant="ghost" onClick={() => setMenuOpen((v) => !v)}>
          <Plus size={14} /> Add section
        </Button>
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
            <div className="absolute left-0 top-full z-20 mt-1.5 max-h-[320px] w-[320px] overflow-auto rounded-xl border border-[#E5E5E5] bg-white p-1.5 shadow-lg">
              {addable.map((d) => (
                <button
                  key={d.type}
                  type="button"
                  onClick={() => addSection(d.type)}
                  className="block w-full rounded-lg px-3 py-2 text-left hover:bg-[#F3F4F6]"
                >
                  <p className="text-[13.5px] font-semibold text-[#111]">{d.name}</p>
                  <p className="text-[12px] text-[#9CA3AF]">{d.description}</p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
