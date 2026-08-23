"use client";

import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "./fields";
import { newKey } from "../_lib/api";

/** Generic add/remove/reorder list for arrays of `{ _key, ... }` objects. */
export function RepeatingList<T extends { _key: string }>({
  items,
  onChange,
  makeItem,
  renderItem,
  addLabel,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  makeItem: () => Omit<T, "_key">;
  renderItem: (item: T, update: (patch: Partial<T>) => void) => React.ReactNode;
  addLabel: string;
}) {
  function update(i: number, patch: Partial<T>) {
    onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }
  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i));
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }

  return (
    <div>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={item._key} className="rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] p-3.5">
            <div className="mb-2.5 flex items-center justify-end gap-1">
              <button
                type="button"
                onClick={() => move(i, -1)}
                disabled={i === 0}
                className="flex h-6 w-6 items-center justify-center rounded text-[#9CA3AF] hover:bg-white hover:text-[#111] disabled:opacity-30"
              >
                <ChevronUp size={14} />
              </button>
              <button
                type="button"
                onClick={() => move(i, 1)}
                disabled={i === items.length - 1}
                className="flex h-6 w-6 items-center justify-center rounded text-[#9CA3AF] hover:bg-white hover:text-[#111] disabled:opacity-30"
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
            {renderItem(item, (patch) => update(i, patch))}
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="mt-3"
        onClick={() => onChange([...items, { ...makeItem(), _key: newKey() } as T])}
      >
        <Plus size={13} /> {addLabel}
      </Button>
    </div>
  );
}
