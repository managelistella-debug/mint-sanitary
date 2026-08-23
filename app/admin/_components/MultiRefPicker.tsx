"use client";

export interface RefOption {
  _id: string;
  name: string;
}

/** Checkbox list for picking a set of document references. */
export function MultiRefPicker({
  options,
  selectedIds,
  onChange,
}: {
  options: RefOption[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
}) {
  function toggle(id: string) {
    onChange(
      selectedIds.includes(id) ? selectedIds.filter((x) => x !== id) : [...selectedIds, id]
    );
  }

  if (options.length === 0) {
    return <p className="text-[13px] text-[#9CA3AF]">Nothing to pick from yet.</p>;
  }

  return (
    <div className="flex max-h-[220px] flex-col gap-1 overflow-auto rounded-lg border border-[#E5E5E5] bg-white p-2">
      {options.map((opt) => (
        <label
          key={opt._id}
          className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-[#F3F4F6]"
        >
          <input
            type="checkbox"
            checked={selectedIds.includes(opt._id)}
            onChange={() => toggle(opt._id)}
            className="h-3.5 w-3.5 accent-[#111]"
          />
          <span className="text-[13.5px] text-[#374151]">{opt.name}</span>
        </label>
      ))}
    </div>
  );
}
